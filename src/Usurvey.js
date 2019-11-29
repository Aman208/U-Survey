import React , {Component}  from 'react';
import './App.css';
var firebase = require('firebase');

var uuid = require('uuid');



class Usurvey extends Component{

    constructor(props){
        super(props);

        this.state = {
            uid : uuid.v1() ,
            name : "" ,
            answers : {
                answer1 : "",
                answer2 : "",
                answer3 : ""
            },
            isSub: false

        };

        this.nameSubmit = this.nameSubmit.bind(this);
        this.questionSubmit =this.questionSubmit.bind(this);
       this.answerchange = this.answerchange.bind(this);
    }


    nameSubmit = (event) =>
    {  
        console.log(this.state);
        var name1 = this.refs.name.value;
        this.setState({name : name1} , () =>console.log(this.state)  );

        

    }

   answerchange = (event) =>{

      var answersNew = this.state.answers; 

      if(event.target.name === 'answer1')
       {answersNew.answer1 = event.target.value  }
      else if(event.target.name === 'answer2')
      { answersNew.answer2 = event.target.value}
      else if(event.target.name === 'answer3')
      {answersNew.answer3 = event.target.value}

      this.setState( {answers : answersNew} )

      console.log(this.state.answers);


   }

    questionSubmit =() =>
    {
        firebase.database().ref('uSurvey/'+this.state.uid).set({
             StudentName : this.state.name ,
             Answers : this.state.answers

        });

        this.setState({isSub : true});


    }


 render(){

     var stuName , questions;
   
     if(this.state.name ==="" && this.state.isSub === false)
     {
         stuName = <div>
             <h3>Hey Student Enter Your Name</h3>
             <form onSubmit={this.nameSubmit}>
                 <input type="text"  placeholder ="Name Plz" ref="name" />
                 
             </form>
         </div>


     }
     else if(this.state.name !=="" && this.state.isSub === false)
      {
        stuName = <div><h3>Hey {this.state.name} , Now Answer Some Questios</h3></div>
        questions =  <div>
        <form onSubmit={this.questionSubmit}>

        <div className ="card" > 
        <label>What kind of cources you like the most : <br/></label>
        <input type="radio" value="Technology" name="answer1" onChange={this.answerchange} /> Technology
        <input type="radio" value="Design" name="answer1" onChange={this.answerchange} /> Design 
        <input type="radio" value="Marketing" name="answer1" onChange={this.answerchange} /> Marketing 
        </div>
      
        <br/>
        
        <div className ="card" > 
        <label>Are You A  : <br/></label>
        <input type="radio" value="Student" name="answer2" onChange={this.answerchange} /> Student  
        <input type="radio" value="Freelancer" name="answer2" onChange={this.answerchange} /> Freelancer 
        <input type="radio" value="In-Job" name="answer2" onChange={this.answerchange} /> In-Job
        </div>
       
        <br/>
        
        <div className ="card" > 
        <label>Is Online Learning is Helpful : <br/></label>
        <input type="radio" value="Yes" name="answer3" onChange={this.answerchange} /> Yes 
        <input type="radio" value="No" name="answer3" onChange={this.answerchange} /> No
        <input type="radio" value="Can't Say" name="answer3"  onChange={this.answerchange}/>Can't Say 
        </div>
        <br/>
        <input className="button-sub" type="submit" value="Submit"   />

        </form>

       </div>
    

      }
      else if(this.state.isSub === true)
      {
          stuName = <h2>Thanks for the  Fedback , {this.state.name} </h2>
      }
     


    return ( <div>
        {stuName}
        <p>----------------------------------</p>
       
        {questions}
         
    </div>
    );
 }  
}
export default Usurvey;