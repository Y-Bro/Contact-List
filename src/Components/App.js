import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from './ContactList';
import { useState ,useEffect} from 'react';
import {uuid} from 'uuidv4'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import api from "../api/contacts.js";


const App = ()=> {

  const Local_Storage_key = "contacts";
  const [contacts, setContacts] = useState([])
  const addContactHandler = async (contact) =>{

    const request = {
      id:uuid(),
      ...contact
    }

    const response = await api.post("/contacts",request)
    setContacts([...contacts, response.data])
  }

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const removeContactHandler = async (id) =>{
    await api.delete(`contacts/${id}`);
    const newList = contacts.filter((item)=>item.id!==id);
    setContacts(newList);
  }

  useEffect(()=>{
    // const retrieveContacts = JSON.parse(localStorage.getItem(Local_Storage_key));
    // if(retrieveContacts)
    // setContacts(retrieveContacts);
    const getAllContacts = async () =>{
      const allContacts = await retrieveContacts();
      if(allContacts)
      {
        setContacts(allContacts);
      }
    }

    getAllContacts();
  },[])

  
  //store array in the local storage so that data doesnt get erased after resfreshing
  useEffect(()=>{
    // localStorage.setItem(Local_Storage_key,JSON.stringify(contacts));
  },[contacts])

 

  

  return (
    <div>
      
      <Router>

      <Header />
      <Switch>
      <Route path = "/add" exact render = {(props)=> (<AddContact {...props} addContactHandler = {addContactHandler}/>)}/>
      <Route path = "/" exact
      render = {(props)=>(<ContactList {...props} contacts = {contacts} removeContact = {removeContactHandler}/>)}/>
      <Route path = "/contact/:id" exact component = {ContactDetail}/>
      </Switch>
      
      {/* <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts = {contacts} removeContact = {removeContactHandler}/> */}
      
      </Router>
      
      
    </div>
  );
}

export default App;
