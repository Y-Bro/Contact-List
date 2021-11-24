import React from 'react'
import { Link } from 'react-router-dom';
import User from "../images/user.png";

const ContactDetail = ({location}) => {
    console.log(location.state);
    const {name , email} = location.state;
    return (
        <div className = "main">
            <div>xD</div>
            <div className = "ui card centered">
                <div className = "image">
                    <img src = {User} alt = "User"/>
                </div>
                <div className = "content">
                    <div className = "header">{name}</div>
                    <div className = "description">{email}</div>
                </div>
            </div>
            <div className = "center-div" style ={{display:"flex",justifyContent:"center"}}>
                <Link to ="/">
                <button className = "ui button blue center">Back to List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail
