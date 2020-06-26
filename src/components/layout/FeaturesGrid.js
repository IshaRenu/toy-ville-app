import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box, Avatar } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
root: {
    display: flex,
    flexDirection: row
    },
    paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  feature: {
    position: relative
  }
}))

const FeaturesGrid = () => {
  const classes = useStyles()

  return (
      <Container className={classes.root}>         
          <Box className={classes.feature}>
            <Avatar alt='' src={img}></Avatar>
            <p>Feature of app</p></Box>
          <Box>
            <Avatar alt='' src={img}></Avatar>
            <p>Feature of app</p>
          </Box>
          <Box>
            <Avatar alt='' src={img}></Avatar>
            <p>Feature of app</p>
          </Box>         
      </Container>
  )
}

export default FeaturesGrid