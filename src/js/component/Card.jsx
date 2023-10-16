import React, { useRef } from 'react'
// import Counter from './Counter';
import { useEffect, useState } from 'react'
import '../../styles/index.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CountDown from './CountDown';
import Buttons from './Buttons';
import AlertApp from './AlertApp';
import ActionAlerts from './ActionAlerts';
import { Alert } from "@mui/material"
import { Button } from "@mui/material"




const Card = () => {
  const stringSpace = ''.repeat(10)
  const [count, setCount] = useState(0);
  const [reset, isReset] = useState(false)
  const [pause, isPause] = useState(false)
  // const [countdownPaused, setCountdownPaused] = useState(false);
  const [oneUseEffect, setUseEffect] = useState(false)
  const [getStarted, setStarted] = useState(true)
  const prevGetStarted = useRef(getStarted)
  // variable for the alarm
  const [startAlarm, setAlarmState] = useState(undefined)
  // const [message,setMessage]=useState('')
  const [reachedCountAlarm, setAlarmReached] = useState(false)

  //Reset Function with a litte timer 
  const resetCount = () => {
    setCount(0)
    isReset(true)
    setTimeout(() => {
      isReset(false)
    }, 1000)
  }


  const pauseBotton = () => {
    // setCountdownPaused(false);
    // console.log(pause)
    isPause(true)
  }

  const resumeBotton = () => {
    // setCountdownPaused(true);
    // console.log(pause)
    isPause(false)

  }

  //Function for the countDown
  const countDownStart = (newCount, callback) => {
    setStarted(!getStarted)
    setUseEffect(true)
    setCount(newCount, () => {
      callback()
    })
  }


  const alarmStart = (alarmCount, callback) => {
    setCount(0)
    resumeBotton()
    setAlarmState(alarmCount, () => {
      callback()
    })
    console.log(`The alarm was set with ${alarmCount} seconds!`)
  }

  const closeAlarmAlert = () => {
    setAlarmReached(false)
  }


  //UseEffect that help with the CountDown 
  useEffect(() => {
    if (getStarted !== prevGetStarted.current) {
      prevGetStarted.current = getStarted
      // duda (count > 0 && !pause)
      if (count > 0) {
        const intervalDown = setInterval(() => {
          setCount((newPrevCount) => {
            console.log(count)
            if (newPrevCount <= 0) {
              setStarted(!getStarted)
              setCount(0)
              setUseEffect(false)
            }
            return newPrevCount - 1
          })
        }, 1000)
        return () => {
          clearInterval(intervalDown)
        }
      }
    }
  }, [getStarted, pause])


  useEffect(() => {
    setCount(count % 10000)
    if (startAlarm == count) {
      pauseBotton()
      resetCount()
      setAlarmState(undefined)
      console.log('The alarm reached the time!!')
      setAlarmReached(true)
    }

  }, [count])

  useEffect(() => {
    if (reset) {
      console.log('Waiting....')
    }
    else if (!pause && !oneUseEffect) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => {
        clearInterval(interval)
      }
    }
  })

  const chainOfsix = String(count).padStart(5, '0')

  return !reachedCountAlarm ? (

    <div className="container-fluid ">
      <div className="card w-100 conteiner-card">
        <div className="card-body bodyStyle">
          <h2 className="card-title titleStyle">Counter using React!</h2>
          <div className='bodyTwo'>
            <p className="card-text textStyle">
              <AccessAlarmIcon fontSize='large' className='iconAlarm' />{stringSpace}&nbsp;{chainOfsix[0]} {chainOfsix[1]} {chainOfsix[2]} {chainOfsix[3]}  {chainOfsix[4]}  </p>
            <Buttons value={count} resetCount={resetCount} pauseBotton={pauseBotton} resumeBotton={resumeBotton} />
          </div>
          <div className='bodyTwo'>
            <CountDown value={count} resetCount={resetCount} pauseBotton={pauseBotton} countDownStart={countDownStart} />
            &nbsp;&nbsp; <AlertApp alarmStart={alarmStart} />
          </div>
        </div>
      </div>
    </div>
  ) : <ActionAlerts closeAlarmAlert={closeAlarmAlert} />
}

export default Card