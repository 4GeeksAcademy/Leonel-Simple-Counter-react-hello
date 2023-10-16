import React, { useState } from 'react'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import '../../styles/index.css'
import { Button } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const CountDown = ({ pauseBotton, countDownStart }) => {

  const [inputValue, setInputValue] = useState('')

  const handleButtonCountDown = () => {
    if (parseInt(inputValue)) {
      pauseBotton()
      countDownStart(inputValue, () => {
      })
    }
  }

  const handleValueCountDown = (e) => {
    const inputValue = e.target.value
    if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
      setInputValue(inputValue)
    }
  }
  return (
    <div>
      <div className='bodyTwo'>
        <h3 className="card-title titleStyle">  <HourglassTopIcon fontSize='large' className='hourGlass' />&nbsp; CountDown</h3>
      </div>
      <div className='bodyTwo'>
        <div className="d-grid gap-5 d-md-block buttonsFlex">
          <Button variant="contained" style={{ backgroundColor: "#35baf6", marginTop: '-6px' }} onClick={handleButtonCountDown}><PlayArrowIcon style={{ color: 'black' }} />
          </Button>  <input type='text' value={inputValue} onChange={handleValueCountDown} placeholder='Set the number in seconds' className='inputTextCountDown' />
        </div>
      </div>
    </div>


  )
}

export default CountDown
