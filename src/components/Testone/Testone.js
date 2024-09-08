import React from 'react'
import style from "./Testone.module.css"
import {Link} from "react-router-dom"


const Testone = () => {
  return (
    <div className={style.container}>
        <form >
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button type="button">Login</button>
            <p>Not registered? <Link to="/" className={style.link}>Create an account</Link></p>
        </form>
    </div>
  );
}

export default Testone
