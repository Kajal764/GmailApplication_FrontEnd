import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Password from '../components/pw';
import ConfirmPw from '../components/confirmPw';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        border: "solid lightgrey 1px",
        width: '30%',
        margin: "5% 0 0 20%",
        padding:"2%"
    },

    textField: {
        width: "100%"
      },

    usernameMsg:{
      color:"blue",
      marginBottom:"7%"
   },
   nextButton:{
    float:"right"
  },
   lastdiv:{
    marginTop:"10%"
   },
   
});

 class customer extends Component {
  state = {
       username:"User name",
       usernameMsg:"Use my current email address instead",
       emaillabelWidth:80,
       emailStatus:false,
       emailhelpertext:"You can use letters,numbers and periods"
    }

     changeUsernameLabel=async()=>{
       if(!this.state.emailStatus){
           await this.setState({
              username:"Your email address",
              usernameMsg:"Create a new gmail address",
              emaillabelWidth:140,
              emailStatus:true,
              emailhelpertext:"You'll need to confirm that this email belongs to you"
              
              });
        }
        else{
          await this.setState({
            username:"User name",
            usernameMsg:"Use my current email address instead",
            emaillabelWidth:80,
            emailStatus:false,
            emailhelpertext:"You can use letters,numbers and periods"
            
            });
        }

    }
  
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
                className={classes.textField}
                name="First name"
                variant="outlined"
                size="small"
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last name"
                type="text"
                name="Last name"
                className={classes.textField}
                variant="outlined"
                size="small"
              />
            </Grid>
        <Grid item xs={12} >
        <FormControl className={clsx(classes.margin, classes.textField)} 
                    variant="outlined"
                    size="small" 
                    margin="normal"
                   
                    >

         <InputLabel >{this.state.username}</InputLabel>
          <OutlinedInput
          endAdornment={<InputAdornment position="end">@gmail.com
            </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={this.state.emaillabelWidth}
          />
          <FormHelperText id="outlined-weight-helper-text">{this.state.emailhelpertext}</FormHelperText>  
        </FormControl>
        </Grid>

          <view className={classes.usernameMsg} onClick={this.changeUsernameLabel}>{this.state.usernameMsg}</view>

        <br/>
              <Grid item xs={12} sm={6}>
              <Password/>
            </Grid>
            <Grid item xs={12} sm={6}>
             <ConfirmPw/>
            </Grid>
            <FormHelperText id="outlined-weight-helper-text">Use 8 or more characters with a mix of letters, numbers & symbols
</FormHelperText>  
          </Grid>

          <div className={classes.lastdiv}>
            <view className={classes.usernameMsg}>sign in instead</view>
            <Button className={classes.nextButton} variant="contained" color="primary" href="#contained-buttons">
        Next
      </Button>
          </div>
                </form>
           </div>
        )
    }
}

export default withStyles(styles)(customer);
