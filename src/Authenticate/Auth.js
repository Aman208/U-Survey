import React , {Component}  from 'react';
import './Auth.css'
var firebase = require('firebase');


class Auth extends Component{

    constructor(props){
        super(props);

        this.state = { msg : ""};

        this.t1 = this.t1.bind(this);
        this.t2 = this.t2.bind(this);

   }

    

   t1 = () => {
     
     var s1= document.getElementById('login-box-link');
     var s2=document.getElementById('signup-box-link');

     var s3= document.getElementsByClassName('email-login')[0];
    var s4= document.getElementsByClassName('email-signup')[0];


    s1.classList.add('active');
    s2.classList.remove('active');
     
     s3.classList.remove('hide');
     s4.classList.add('hide');

   }

   t2 =() =>{
    var s1 = document.getElementById('login-box-link');
    var s2 =document.getElementById('signup-box-link');

    var s3 = document.getElementsByClassName('email-login')[0];
    var s4 = document.getElementsByClassName('email-signup')[0];

    
    s2.classList.add('active');
    s1.classList.remove('active');

    s4.classList.remove("hide");
    s3.classList.add("hide");

   }
    



render(){
  return (<div className="login-box">
  
  <div className="lb-header">
    <a href="#" className="active" onClick={this.t1} id="login-box-link">Login</a>
    <a href="#" onClick={this.t2} id="signup-box-link">Sign Up</a>
  </div>

  <div className="social-login">
    <a href="#">
      <i className="fa fa-facebook fa-lg" />
      Login in with facebook
    </a>
    <a href="#">
      <i className="fa fa-google-plus fa-lg" />
      log in with Google
    </a>
  </div>


  <form className="email-login">
    <div className="u-form-group">
      <input type="email" placeholder="Email" />
    </div>
    <div className="u-form-group">
      <input type="password" placeholder="Password" />
    </div>
    <div className="u-form-group">
      <button>Log in</button>
    </div>
    <div className="u-form-group">
      <a href="#" className="forgot-password">Forgot password?</a>
    </div>
  </form>


  <form className="email-signup hide">
    <div className="u-form-group">
      <input type="email" placeholder="Email" />
    </div>
    <div className="u-form-group">
      <input type="password" placeholder="Password" />
    </div>
    <div className="u-form-group">
      <input type="password" placeholder="Confirm Password" />
    </div>
    <div className="u-form-group">
      <button>Sign Up</button>
    </div>
  </form>

</div>

      );
 }  
}
export default Auth;