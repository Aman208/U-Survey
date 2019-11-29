import React , {Component}  from 'react';

var firebase = require('firebase');

class Auth extends Component{

    constructor(props){
        super(props);

        this.state = { msg : ""};

     this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
     this.signup = this.signup.bind(this);
   }

   login = () =>{
    var email = this.refs.email.value;
    var password = this.refs.password.value;
   
     const auth =firebase.auth();
     auth.signInWithEmailAndPassword(email , password)
     .then( user =>{
       
        var lout = document.getElementById('logout');
        lout.classList.remove('hide');
        this.setState({msg : "Successfully Login " + user.user.email}) 


        var  lin = document.getElementById("login");
        var  sup = document.getElementById("signup");

        lin.classList.add('hide');
        sup.classList.add('hide');

     })

     .catch( (e) =>{
     console.log(e.message);
      this.setState({msg : e.message });
     }
     );

   }

   signup = ()=>{

    var email = this.refs.email.value;
    var password = this.refs.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => 
    { var msg = "Successful Sign Up  "  +user.user.email;

    console.log(user.user.email);
      
    firebase.database().ref('users/'+ user.user.uid).set({
          email: user.user.email
      });

      this.setState({msg : msg});

    })
    
    .catch( (error) => {
       this.setState({msg: error.message}); ;
       
      });

   }


   logout = ()=> {

    firebase.auth().signOut()
    .then(function() {
        var  lout = document.getElementById("logout");
        var  lin = document.getElementById("login");
        var  sup = document.getElementById("signup");
     lout.classList.add('hide');  
     lin.classList.add('hide');
     sup.classList.add('hide');

     this.setState({msg : "Successful Logout"});

      })
      .catch(function(error) {
        // An error happened
      });
    


     
     

   }



render(){
  return ( <div>
      <div className="card" id="box">
       <input type="email" ref="email" id="email" placeholder="Enter Your Email"/>  <br/>
       <input type="password" ref="password" id="pass" placeholder="Enter Your PAssword"/> 
        
       <br/>
       <h5>{this.state.msg} </h5>

       </div>

       <button id="login" onClick={this.login} >Log In</button> 
       <button id="signup" onClick={this.signup} >Sign Up</button>
       <button id="logout"className="hide" onClick={this.logout} > Log Out</button>
    </div>
      );
 }  
}
export default Auth;