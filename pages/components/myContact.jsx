import React from 'react'
import styles from '@/styles/myContact.module.css'

const myContact = () => {
  return (
    <div>
        <div>
            <h1> Write me something :</h1>
        <form className={styles.form} method='POST' action="">

            <input type="text" />

        </form>
    </div>
    </div>
  )
}

export default myContact