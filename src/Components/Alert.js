import React from "react";

const Alert=(props)=>{
   
    return(
        <div className="alert_wrap" style={{
            height:"50px",
            margin:"5px"
        }}>
       { props.alert &&
    <>

   <div className="alert">
   {props.alert.type} : {props.alert.msg}  

    </div> 
    </>}</div>)
}
export default Alert;