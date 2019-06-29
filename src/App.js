import React,{Component} from 'react';
//import logo from './logo.svg';
import Coin from './Coin';
import'./Coin.css'
import Button from './Button';
import './App.css';
class App extends Component{
constructor()
{
	super();

	this.state={
		outcome:'',
		button:'',
		flip:'',
		// toss:''
	}

}

Flipbutton=(event)=>{
	
	this.setState({button:event.target.value});
	var data=document.getElementsByClassName('outcome')
    this.setState({outcome:data});
    var data2=document.querySelector('flip')
    this.setState({flip:data2});
    
    // var data3=document.querySelector('toss')
    // this.setState({toss:data3});
    
console.log("clicked")
	
	}

render(){



 Result=()=>
 {	
	return(
	{this.state.outcome}.classList.toggle(this.state.flip);
	{this.state.outcome}.classList.add('toss');
);
 }




  return (
    <div>
    <Coin Value={'outcome'} Change={this.Result} class="tc"/>
   <Button Value={'coinFlipButton'} Change={this.Flipbutton}/>
   <h1></h1>
    </div>
  );
}
}


export default App;
