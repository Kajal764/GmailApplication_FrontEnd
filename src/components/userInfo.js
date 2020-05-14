import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = (theme) => ({
  root: {
    border: "transparent lightgrey 1px",
    width: "87%",
    marginTop: "3%",
  },

  textField: {
    width: "100%",
  },

  usernameMsg: {
    color: "blue",
    marginBottom: "7%",
    fontWeight: "500",
  },
  nextButton: {
    float: "right",
  },
  lastdiv: {
    marginTop: "10%",
  },
});

class customer extends Component {
  state = {
    username: "User name",
    usernameMsg: "Use my current email address instead",
    emaillabelWidth: 80,
    emailStatus: false,
    emailhelpertext: "You can use letters,numbers and periods",
    staticText: "@gmail.com",
    
      firstName:"",
      lastName:"",
      emailId:"",
      password:"",
      confirmPw:"",
      showPassword: false,
  
  };

   handleChange = (prop) => (event) => {
    this.setState({  [prop]: event.target.value });
    
  };

   handleClickShowPassword = () => {
    this.setState({  showPassword: !this.state.showPassword });

  };

   handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  changeUsernameLabel = async () => {
    if (!this.state.emailStatus) {
      await this.setState({
        username: "Your email address",
        usernameMsg: "Create a new gmail address",
        emaillabelWidth: 140,
        emailStatus: true,
        emailhelpertext:
          "You'll need to confirm that this email belongs to you",
        staticText: "",
      });
    } else {
      await this.setState({
        username: "User name",
        usernameMsg: "Use my current email address instead",
        emaillabelWidth: 80,
        emailStatus: false,
        emailhelpertext: "You can use letters,numbers and periods",
        staticText: "@gmail.com",
      });
    }
  };

  getpassword=(event)=>{
    this.setState({
      password:event.target.value
    })
  }
  

  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });   
    };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <TextField
                label="First name"
                type="text"
                value={this.state.firstName}
                className={classes.textField}
                name="firstName"
                variant="outlined"
                size="small"
                onChange={this.updateState}
              
              />
    
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last name"
                type="text"
                value={this.state.lastName}
                name="lastName"
                className={classes.textField}
                variant="outlined"
                size="small"
                onChange={this.updateState}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                size="small"
                margin="normal"
                name="emailId
                "
                value={this.state.emailId}
                onChange={this.updateState}
              >
                <InputLabel>{this.state.username}</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      {this.state.staticText}
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  labelWidth={this.state.emaillabelWidth}
                />
                <FormHelperText id="outlined-weight-helper-text">
                  {this.state.emailhelpertext}
                </FormHelperText>
              </FormControl>
            </Grid>

            <view
              className={classes.usernameMsg}
              onClick={this.changeUsernameLabel}
            >
              {this.state.usernameMsg}
            </view>

            <br />
            <Grid item xs={12} sm={6}>
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.confirmPw}
            onChange={this.handleChange('confirmPw')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                  edge="end"
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
            </Grid>
            <FormHelperText id="outlined-weight-helper-text">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </FormHelperText>
          </Grid>

          <div className={classes.lastdiv}>
            <view className={classes.usernameMsg}>sign in instead</view>
            <Button
              className={classes.nextButton}
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(customer);
