import React from 'react';
import ReactDOM from 'react-dom';
import Form from './component/form.js';
import User from './component/user.js';
import Profile from './component/profile.js';
import $ from 'jquery'; 



class Teams extends React.Component
{
	constructor()
	{
      super();
	  this.addUser = this.addUser.bind(this);
	  this.storeUser = this.storeUser.bind(this);
	  
	  this.state = {
		  
		  users:[{name:'Amit',id:2323},{name:'Rohit',id:454}],
		  input:{name:'',id:''},
		  user:{name:''}
	  }
	}
	
	componentDidMount()
	{
      
	    $.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: (data)=> {
			this.setState({user:data.results})
		  }
		});
		
	 		
	}
 
	
	addUser(e)
	{	
	
		var add = this.state.input;	
		var p = this.state.users;	
		
		p.unshift({name:this.state.input.name,id:this.state.input.id});
		
		console.log(p)
		
		this.setState({users:p})
		this.setState({input:{name:'',id:''}})
		
		
	}
	
	storeUser(e)
	{  
		var item = e.target.value;	
		var input = this.state.input;
        var x = {name:item,id:Math.random()};		
		this.setState({input:x})		
	}
	
	
	render()
	{
		return (
		  
		  <div>
		    <Form clickEvent={this.addUser} formValue={this.state.input.name} changeEvent={this.storeUser}/>
		    <User users={this.state.users}/>
			<br/>
		    <Profile/>
		  </div>	
		   
		)
		
	}
}
	
ReactDOM.render(<Teams/>,document.querySelector('#root'));
	
	