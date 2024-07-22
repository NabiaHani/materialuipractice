
import React, {useState} from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'

const Cards = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Card sx={{ maxWidth: 300, marginLeft: 5 }}>
                <CardMedia component={'img'} height={140} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6RptbqsEtY2oMeyKlBwUs6qclRKt1o0x7Q&s' alt='test img' />

                <CardContent>
                    <Typography gutterBottom variant='h5' component="div">
                        AI Generated Image
                    </Typography>

                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minus!
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size='small' color='primary'>
                        Share
                    </Button>
                    <Button size='small' color='primary'
                    onClick={(e => setOpen(true))}>
                        Delete
                    </Button>
                </CardActions>
            </Card>

            <Dialog open={open}>
                <DialogTitle>Are you sure</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        are you sure to delete this products ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>cancel</Button>
                    <Button>delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Cards
