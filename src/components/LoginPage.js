import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Logo from "../images/Googlelogo.png";
import '../css/login.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from '../history'


const useStyles = (theme) => ({
    textField: {
        width: "100%",
     
      },
      forgotMsg: {
        color: "cornflowerblue",
        marginTop:"2%",
        
        fontWeight: "bold"
        
      },
      browseLinkText:{
        fontSize:"15px",
        marginTop:"20px",
        marginBottom:"40px"
        
      },
      spantext:{
        color:"cornflowerblue",
        fontWeight: "bold",
        texrDecoration:"none"
      
      },
      nextButton: {
        float: "right",
      },
      lastdiv:{
        paddingBottom:"30px"
      }
  
});



 class LoginPage extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
      emailId:""
     }
   }


   updateState=(event)=>{
    this.setState({[event.target.name]:event.target.value})
   }
   
  myFunction = () =>{
    document.getElementById("myDropdown").classList.toggle("show");
  }

  goToRegisterPage= () =>{
    history.push('createaccount')
  }


     render() {
    
      const { classes } = this.props;
        return (
            <div className="root">
              <img  className="logo" src={Logo} alt="GoogleImage" />
               <p className="firstText">Sign in</p><br/>
               <p className="secondText">to continue to Gmail</p><br/>

               <TextField
                label="Email or Phone"
                type="text"
                value={this.state.emailId}
                className={classes.textField}
                name="emailId"
                variant="outlined"
                margin="normal"
                onChange={this.updateState} 
              />
              <p className={classes.forgotMsg}>Forgot email?</p><br/>
              <p className={classes.browseLinkText}>Not your computer? Use Guest mode to sign in privately.<a style={{ textDecoration: 'none' }}href="https://support.google.com/chrome/answer/6130773?hl=en" className={classes.spantext}> Learn more</a> </p>

              <div className={classes.lastdiv}>
              <div className="dropdown">
                <button onClick={this.myFunction} className="dropbtn"><span className="dropdownbtn">Create account</span></button>
                  <div id="myDropdown" className="dropdown-content">
                   <a onClick={this.goToRegisterPage}> For myself</a>
                    <a onClick={this.goToRegisterPage}>To manage my bussiness</a>
    
                  </div>
              </div>
              <Button
              className={classes.nextButton}
              variant="contained"
              color="primary"
              href="#contained-buttons"
              // onClick={this.handleSubmit}
            >
              Next
            </Button>

              </div>

            </div>
        )
    }
}

export default withStyles(useStyles)(LoginPage);


