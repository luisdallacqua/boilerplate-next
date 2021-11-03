import { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  field: {
    marginTop: '2rem'
  }
})

export default function Home() {
  const classes = useStyles()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user && password) {
      console.log(`User: ${user}`)
      console.log(`Password: ${password}`)
    }
  }

  return (
    <Container>
      <Typography variant="h5" component="h1" align="center">
        Sign In
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setUser(e.target.value)}
          label="User"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label="Password"
          variant="outlined"
          fullWidth
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          className={classes.field}
          endIcon={<SendIcon />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Container>
  )
}
