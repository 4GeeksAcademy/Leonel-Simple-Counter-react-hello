import React, { useState } from 'react'
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from "@mui/material"
import '../../styles/index.css'


const AlertApp = ({ alarmStart }) => {
    const [inputValueAlarm, setValueAlarm] = useState('')

    const handleButtonAlarm = () => {
        if (parseInt(inputValueAlarm)) {
            alarmStart(inputValueAlarm, () => {

            })

        }
    }

    const handleValueAlarm = (e) => {
        const inputValueAlarm = e.target.value
        if (inputValueAlarm == '' || /^[0-9]*$/.test(inputValueAlarm)) {
            setValueAlarm(inputValueAlarm)
        }
    }

    return (
        <div className='alarmComponent'>
            <div className='bodyTwo'>
                <h3 className="card-title titleStyle">  <AlarmAddIcon fontSize='large' className='hourGlass' />&nbsp; Alarm</h3>
            </div>
            <div className='bodyTwo'>
                <div className="d-grid gap-5 d-md-block buttonsFlex">
                    <Button variant="contained" style={{ backgroundColor: "#ff3d00", marginTop: '-6px' }} onClick={handleButtonAlarm}><PlayArrowIcon style={{ color: 'black' }} />
                    </Button>  <input type='text' value={inputValueAlarm} onChange={handleValueAlarm} placeholder='Set the alarm in Seconds' className='inputTextAlarm' />
                </div>
            </div>
        </div>
    )
}

export default AlertApp
