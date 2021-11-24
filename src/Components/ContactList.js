import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = ({contacts,removeContact}) => {
    // const renderContactList = contacts.map((contact) =>{
    //     return (
    //        <ContactCard key = {contact}contacts = {contacts}></ContactCard>
    //     )
    // })
//    const contacts = [{
//        id : "1",
//        "name" : "Brpt",
//        "email" : "crzts"
//    }]
//FOR EVERY OBJECT IN THE LIST WE ARE CALLING THE CONTACT CARD FUNCTION WHICH IS TAKING THE OBJECT AS PROPS 
    return (
        <div className = "main">
            <h1 style = {{marginTop : "36px"}}>Contact List
            <Link to = "/add">
            <button className= "ui button blue right" style = {{float : "right"}}>ADD CONTACT</button>
            </Link>
            </h1>
        <div className="ui celled list" style = {{marginLeft : "4px"}}>
           {contacts.map((item,index)=><ContactCard contactItem = {item} key = {item.id} removeContact={removeContact} />)}
        </div>
        </div>
    )
}

export default ContactList
