import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const Lists = () => {
    const courses = ["react", "nodejs", "mern"]
    return (
        <div>
            <List sx={{ width: "250px", background: "gray" }}>
                {courses.map((courses) =>(
                    <ListItem>
                    <ListItemButton>{'>'}</ListItemButton>
                    <ListItemText primary={courses} />
                </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Lists
