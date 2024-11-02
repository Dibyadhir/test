import React from 'react'
import ChatBox from './ChatBox'
import { Paper, Typography, } from '@mui/material'
import Navbar from './Navbar'
import DashboardLayoutAccount from './Dashbord'
const ChatDashboard = () => {
  return (
    <>
    <DashboardLayoutAccount>
      <Paper sx={{ display: 'flex', gap: 2, mt: 2, marginLeft: 2, width: '600px', alignContent: 'center', justifyContent: 'center' }}>
        <Paper elevation={10} sx={{ p: 2, flex: 1 }}>
          <Typography color='primary' variant="h6" fontWeight="bold">Friends List</Typography>
        </Paper>
        <Paper elevation={10} sx={{ p: 2, flex: 1 }}>
          <ChatBox />
        </Paper>
      </Paper>
      </DashboardLayoutAccount>
    </>
  )
}

export default ChatDashboard;