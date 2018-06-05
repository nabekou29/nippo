import React from 'react';

import PropTypes from 'prop-types';
import {
  Grid,
  FormGroup,
  FormControl,
  Paper,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
    textAlign: 'center',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    textAlign: 'center',
  }
});

class Component extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid container xs={12} className={classes.container}>
          <Grid item xs={4} />
          <Grid item xs={4} spacing={24}>
            <Paper className={classes.paper}>
              <FormGroup>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="id" className={classes.input}>ID</InputLabel>
                  <Input id="id" className={classes.input}/>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="password">PassWord</InputLabel>
                  <Input id="password" className={classes.input} type="password"/>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <LoginButton className={classes.button}/>
                </FormControl>
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const LoginButton = () => {
  return (
    <Button variant="contained" color="primary">
      LOGIN
    </Button>
  );
}

export default withStyles(styles)(Component);
