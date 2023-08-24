import React from 'react'


import {ImSearch} from 'react-icons/im';
import styles from './layouts.module.css';

function TextField() {
  return (
    <form className={`flex align-y gap-sm ${styles.searchcontainer}`}>
    <div className={`flex center gap-sm ${styles.inputcontainer}`}>
    <input
        type="text"
        name="search"
        placeholder='Search products, brands and categories'
        className={styles.searchinput}
      />
      <span className={styles.searchbutton}>
      <ImSearch/>
      </span>
    </div>
    <button type="submit">SEARCH</button>
    </form>
  )
}

export default TextField