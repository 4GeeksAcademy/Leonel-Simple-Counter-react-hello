import React from 'react'
import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const ActionAlerts = ({ closeAlarmAlert }) => {


    return (
        <div className="container-md containerActionAlert">

            <Box sc={{
                width: '100%',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                top: 0,
                position: "absolute",
            }}>
                < Alert onClose={() => { closeAlarmAlert() }}
                >
                    The timer was Reached! - check it out!  </Alert>

            </Box>

        </div >
    )
}

export default ActionAlerts
