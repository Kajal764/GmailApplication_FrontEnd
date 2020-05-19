import React, { Component } from 'react'
import UserInfo from './userInfo'
import { withStyles } from "@material-ui/core/styles";
import Logo from "../images/Googlelogo.png";
import Account from "../images/account.svg";
import FormHelperText from '@material-ui/core/FormHelperText';
import '../css/createAccount.css';

const useStyles = (theme) => ({
  root: {
    border: "1px solid lightgrey",
    shadow: "5px 10px gray",
    borderRadius: "10px",
    margin: "3% 15% 10% 20%",
    float:"left",
    padding :"4%",
    display:"flex",
    flex_direction: "column",
    width:"50%",
    height:"100%",
    flexWrap:"no-wrap"
  },

  logo: {
    height:"30px",
    width: "80px",
    marginBottom:"15px"

  },
  
  firstblock:{
    width:"90%",
  },

  imageHelpertext:{
    fontSize:"15px"
  }
});



 class createAccount extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
      userDetails:[]
     }
   }

   userDetails = async data => {
    await this.setState({ userDetails: data });
    console.log(this.state.userDetails);
    
  };
   
     render() {
    
      const { classes } = this.props;
        return (
            <div className={classes.root}>
              <div className={classes.firstblock}>
               <img  className={classes.logo} src={Logo} alt="GoogleImage" /><br/>
               <view className="registerpgfirstText">Create your Google Account</view><br/>
                <UserInfo userDetails={this.userDetails}/>
                </div>
                <div className="secondblock">
                <img src={Account} alt="imageAccount" />
                <FormHelperText className={classes.imageHelpertext} id="outlined-weight-helper-text">One Account, All of google working for you
                </FormHelperText>  
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(createAccount);