import React from 'react';
import $ from 'jquery'; 


class Profile extends React.Component
{
	constructor()
	{   super();
		this.state = {user:''}
	}
	
	
	
   render()
   {
	   
	   
	   
	   
	   
	   return (
	      
	       <table className="table table-bordered">  
			  <thead>
				<tr>
				  <th scope="col">ID</th>				  
				  <td scope="col">Amit</td>	 				  
				</tr>
				<tr>
				  <th scope="col">Full Name</th>				  
				  <td scope="col">Amit</td>	 				  
				</tr>
				<tr>
				  <th scope="col">Address</th>				  
				  <td scope="col">Amit</td>	 				  
				</tr>
				
				<tr>
				  <th scope="col">Identity</th>				  
				  <td scope="col">Amit</td>	 				  
				</tr>
				
				<tr>
				  <th scope="col">Authentication</th>				  
				  <td scope="col">Amit</td>	 				  
				</tr>
				
			  </thead>
			  
			</table>
	   
	   )
   }
 
	
	
	
}

export default Profile;