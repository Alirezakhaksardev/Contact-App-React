import React, { useState } from 'react'
import ContactsList from './ContactsList'

import inputs from '../constant/inputs'
import { v4 } from 'uuid'

import styles from './Contacts.module.css'

function Contacts() {


    const [contacts , setContacts] = useState([])
    const [alert , setAlert] = useState("")

    const [contact , setContact] = useState({
        id : "" ,
        name : "" ,
        lastName : "" ,
        email : "" ,
        phone : ""
    })

    const changeHandler = e => {
        const {name , value} = e.target
        setContact({...contact , [name] : value})
    }
    const addHandler = () =>{
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("please enter valid data");
            return
        }
        setAlert("");
        const newContact = {...contact  , id : v4()}
        setContacts(contacts => [...contacts , newContact]);
        setContact({
            name : "" ,
            lastName : "" ,
            email : "" ,
            phone : ""
        });
        console.log(contacts)
    }

    const deleteHandler = id => {
        const newContacts = contacts.filter(c => c.id !== id);
        setContacts(newContacts);
    }

    return (
    <div className={styles.container}>
        <div className={styles.form}>
            {
                inputs.map((i , index) => (
                    <input 
                        key={index}
                        type={i.type} name={i.name} 
                        value={contact[i.name]} onChange={changeHandler} 
                        placeholder={i.placeholder} 
                    />
                ))
            }
           
            <button onClick={addHandler}>Add Contact</button>
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
    ) 
}

export default Contacts