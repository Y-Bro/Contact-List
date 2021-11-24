import React from "react";
import { Link } from "react-router-dom";


class AddContact extends React.Component {
    state = {
        name : "",
        email : "",
    };

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are mandatory");
            return;
        }

        //passing the state to the prop using the addcontacthandler in parent
        console.log(this.props);
        this.props.addContactHandler(this.state);

        //setting the state to empty after submitting
        this.setState({name:"",email:""})
        this.props.history.push("/");
       
    }

    

        render(){
        return (
            <div className="ui main">
                <div className = "center-div" style={{display : "flex", justifyContent : "space-between"}}>
                    <h1>Add Contact</h1>
                    <Link to = "/">
                    <button className = "ui button black right">To The List</button>
                    </Link>
                    </div>
                
                
                <form className="ui form" onSubmit = {this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                        name="name" placeholder="Name" 
                        value = {this.state.name}
                         onChange = {(e)=>this.setState({name:e.target.value})} />

                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                        name="name" placeholder="Email" 
                         value = {this.state.email} 
                         onChange = {(e)=>this.setState({email:e.target.value})} />

                    </div>
                    <button className = "ui button black">Add</button>
                </form>
            </div>
        )
    }
    
}

export default AddContact;