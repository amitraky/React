import React from 'react';


class User extends React.Component
{
	
	componentWillReceiveProps(prs)
	{
	  //	
	}
	
	
	
	
	render()
	{
		
		return (
		  
		  <div className="card" style={{width: "380px"}}>
				  <div className="card-header">
				    User List
				  </div>
				  
				  <ul className="list-group list-group-flush">
				  {  this.props.users.map((value,key)=>{
					   
					   return  <li key={key} className="list-group-item">{value.name}</li>
					  
				  }) }
					
				  </ul>
				</div>
		   
		)
		
	}
	
	
}

export default User;