import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: flex,
    flexDirection: col
  },
  links:
  {
      dispaly:flex,
      flexDirection: row
  }
}))

const TeamGrid = () => {
  const classes = useStyles()
  const preventDefault = (event) => event.preventDefault()
  const teamList = [{name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},
                    {name:"", desg:"", img:"", linkIn:"", fb:"", twitter:""},]


    return (
        <Container className={classes.root}>
            <Avatar alt='' src={img}></Avatar>
            <Box>
                <p></p>
            </Box>
            <div className="classes.links">
                <Link component="icon"
                variant="body2"
                href="#" onClick={preventDefault}>
                    <Icon></Icon>
                </Link>
            </div>          
        </Container>
    )
}

export default TeamGrid