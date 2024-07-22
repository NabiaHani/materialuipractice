import React from 'react'
import { Container, Typography } from '@mui/material'

const Containers = () => {
    return (
        <div>
            {/* extra small */}
            <Container sx={{ background: 'yellow' }} maxWidth="xs">
                <Typography variant='body2'>This is xs</Typography>
            </Container>
            <br />


            {/* small */}
            <Container sx={{ background: 'yellow' }} maxWidth="sm">
                <Typography variant='body2'>This is sm</Typography>
            </Container>
            <br />


            {/* medium */}
            <Container sx={{ background: 'yellow' }} maxWidth="md">
                <Typography variant='body2'>This is md</Typography>
            </Container>
            <br />

            {/* large */}
            <Container sx={{ background: 'yellow' }} maxWidth="lg">
                <Typography variant='body2'>This is lg</Typography>
            </Container>
            <br />

            {/* extra large */}
            <Container sx={{ background: 'yellow' }} maxWidth="xl">
                <Typography variant='body2'>This is xl</Typography>
            </Container>
        </div>
    )
}

export default Containers
