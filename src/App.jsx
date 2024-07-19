import { Typography} from '@mui/material'
// import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <Typography variant='h4' component={"h2"} sx={{ color: "red" }}>
        nabia hani software engineer, frontend developer
      </Typography>
      <h1>Material UI</h1>
      <p>nabia hani</p>

      <Form />
      {/* <Button variant='contained' size="small"
        color='success' sx={{ mt: "30px" }}>Click Me</Button>
      <Button variant='text' color='secondary'>Click Me</Button>
      <Button variant='outlined' size="medium" color='error' onClick={() => alert("hey")} disabled>Action</Button>
      <Button variant='outlined' size="large" color='error' onClick={() => alert("hey")}>Action</Button>
      <br /><br />
      {/* <input type="text" placeholder='name'/> */}
      {/* <TextField type='text' placeholder='name' variant='standard' sx={{ m: 3 }} multiline rows={3} />
      <TextField type='text' placeholder='name' variant='outlined' multiline rows={5} />
      <TextField type='text' placeholder='name' variant='filled' sx={{ m: 3 }} helperText="Incorrect entry." /> */}

    </>
  )
}

export default App
