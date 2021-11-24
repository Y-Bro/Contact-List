import React from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.png";


const ContactCard = ({ contactItem,removeContact}) => {

    
    return (
        <div className="item" style = {{marginLeft : "0px"}}>
            <div className="ui avatar image">
                <img  src={user} alt="user" style = {{marginLeft : "16px",position:"relative",right : "16px"}}></img>
            </div>
            <div className="content">
                <Link to = {{pathname : `/contact/${contactItem.id}`,state : contactItem}}>
                <div className="header">{contactItem.name}</div>
                <div>{contactItem.email}</div>
                </Link>
                <i className="trash alternate outline icon" 
                style={{ float: "right", position: 'relative', bottom: "20px", color: "red" }}
                 onClick = {() => removeContact(contactItem.id)}></i>
            </div>

        </div>
    )
}

export default ContactCard
