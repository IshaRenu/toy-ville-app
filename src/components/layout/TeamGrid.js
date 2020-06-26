import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  }
}))

const TeamGrid = () => {
  const classes = useStyles()

    return (
        <Grid container justify="center" spacing={2}>
            {[0, 1].map((value) => (
                <Grid key={value} item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        {[0, 1, 2, 4].map((value) => (
                            <Grid key={value} item>
                              <TeamItemContent />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
         </Grid>
    )
}

export default TeamGrid