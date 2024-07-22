import React, {useState} from 'react'
import { Box, Button, Link, Modal, Typography } from '@mui/material'

const Modals = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>OPEN MODEL</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position='absolute' top='50%' left='50%'>
          <Typography>This is Modal</Typography>
          <Button variant='contained' onClick={() => setOpen(false)}>Cancel</Button>
        </Box>
      </Modal>

      <Link variant='h4' color='secondary' href='https://www.youtube.com' underline='always'>
      NavLink
      </Link>
      <Link variant='h4' color='secondary' href='https://www.youtube.com' underline='hover'>
      NavLink
      </Link>
    </div>
  )
}

export default Modals
