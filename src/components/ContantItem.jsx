import React from 'react'
import styles from './ContantItem.module.css'

function ContantItem({data : {id ,name , lastName , email , phone} , deleteHandler}) {

    
    return (
        <li className={styles.item}>
            <p>{name} {lastName}</p>
            <p><span>📧</span> {email}</p>
            <p><span>📞</span>{phone}</p>
            <button onClick={() => deleteHandler(id)}>Delete</button>
        </li>
    )
}

export default ContantItem