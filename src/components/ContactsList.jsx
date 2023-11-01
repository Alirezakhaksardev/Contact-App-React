import React from 'react'
import ContantItem from './ContantItem'
import styles from './ContactList.module.css'


function ContactsList({contacts , deleteHandler}) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? 
        <ul className={styles.contact}>
          {contacts.map((contact) => (
              <ContantItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
          ))}
        </ul>
        : <p className={styles.message}>No Contant yet!</p>
      }
      
    </div>
  )
}

export default ContactsList