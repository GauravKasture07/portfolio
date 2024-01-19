import "./FormStyles.css"
import React from 'react'
const Form = () => {
const sendEmail=(e) =>{
  alert("Submitted");
}
  return (
    <div className="from" onSubmit={sendEmail}>
        <form>
            <lable>Your Name</lable>
            <input type="text" name="name_form"></input>
            <lable>Email</lable>
            <input type="Email" name="email_form"></input>
            <lable>Subject</lable>
            <input type="text"></input>
            <lable>Message</lable>
            <textarea rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form