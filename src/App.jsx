import { Typography, Button } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <Typography variant='h4' component={"h2"} sx={{ color: "red" }}>
        nabia hani software engineer, frontend developer
      </Typography>
      <h1>Material UI</h1>
      <p>nabia hani</p>
      <Button variant='contained' size="small"
        color='success' sx={{ mt: "30px" }}>Click Me</Button>
      <Button variant='text' color='secondary'>Click Me</Button>
      <Button variant='outlined' size="medium" color='error' onClick={() => alert("hey")} disabled>Action</Button>
      <Button variant='outlined' size="large" color='error' onClick={() => alert("hey")}>Action</Button>
      <br /><br />
      <input type="text" placeholder='name'/>
    </>
  )
}

export default App
