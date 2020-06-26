import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'



const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const onInputChange = (e) {
    // show popup for message sent
}

const ContactForm = props => {
  const classes = getStyles()
  const { key, id, imageUrl, label, source, uri } = props

  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      <TextField
        label='Enter E-mail'
        name='email'
        className={classes.textField}
        onChange={e => this.onInputChange(e.target.value)}
        margin='normal'
        variant='outlined'
        size='small'
      />
      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Enter Message Here"
        defaultValue=""
      />
      <Button className={classes.button} variant='contained' type='submit' size='small' color='primary'>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
