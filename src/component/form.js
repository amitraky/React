import React from 'react';


class Form extends React.Component
{
	
	
	componentWillReceiveProps(prs)
	{   
       //console.log($);	    
	}
	
	componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.userID !== prevProps.userID) {
		this.fetchData(this.props.userID);
	  }
	  console.log('didupdate');
	}
	
	render()
	{
		return (
		  
		  <form>
			  <div className="form-row align-items-center">
				<div className="col-auto my-2">
				  <label className="mr-sm-2 sr-only">Preference</label>
					<input className="form-control form-control-lg" type="text" value={this.props.formValue} placeholder="Enter new name" onChange={this.props.changeEvent}/>
				</div>
				
				<div className="col-auto my-1 px-4">
				  <button onClick={this.props.clickEvent} type="button" className="btn btn-lg btn-primary">Submit</button>
				</div>
			  </div>
        </form>
		   
		)
		
	}
	
	
}

export default Form;