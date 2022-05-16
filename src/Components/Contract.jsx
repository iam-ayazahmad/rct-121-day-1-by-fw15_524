import { useState } from "react"

import styles from "./Contract.module.css"

export const Contract=({name,img,phone,email})=>{

    const [shownum,setShownum]=useState(false)
    return(
        <div onClick={()=>{setShownum(!shownum)}}>
        <div className={styles.masterdiv}>
            <div className={styles.imgdiv}>
            <img  src={img} alt="" /></div>
            <div className={styles.detdiv}>
            <h5>{name}</h5>
            <p style={{color:"gray",fontSize:"15px"}}>{email}</p>

            {shownum?<h6 className={styles.showme}>{phone}</h6>:null}
            
            
            </div>
            
            
            

            
            
        </div>
        <hr />
        </div>

    )
}