import React, { useState } from 'react'
import '../../styles/index.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const Buttons = ({ value, resetCount, pauseBotton, resumeBotton }) => {

  // const [valueCount, resetValue] = useState(value)
  const handleButtonReset = () => {

    resetCount()
    console.log(`Se reinicio el contador ${value}`)
  }

  const handleButtonPause = () => {
    pauseBotton()
  }

  const handleButtonResume = () => {
    resumeBotton()
  }

  return (
    <div>
      <div className="d-grid gap-5 d-md-block buttonsFlex">
        <button className="btn btn-danger classButton" type="button" onClick={handleButtonReset}><RestartAltIcon className='dangerButton' /></button>
        <button className="btn btn-secondary classButton" type="button" onClick={handleButtonPause}><PauseCircleIcon className='stopButton' /></button>
        <button className="btn btn-success classButton" type="button" onClick={handleButtonResume}><PlayCircleIcon className='playButton' /></button>
      </div>
    </div>
  )
}

export default Buttons
