import { useState } from "react";
import Router from "next/router";
import styles from "../styles/Mail.module.css";

const Mail = () => {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [mailBody, setMailBody] = useState("");

  const onSubmit = () => {
    
    const mail = { subject, to, mailBody };

    console.log(mail);

    fetch("http://localhost:3000/micic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "JWT " + localStorage.getItem("token")
      },
      body: JSON.stringify(mail)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const handleChange = setterFunction => event => {
    setterFunction(event.target.value);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    Router.push("/login");
  }

  return (
    <>
      <div className={styles.containerStyle}>
        <span>Subject</span>
        <input value={subject} onChange={handleChange(setSubject)} /> <br /><br />
        <span>To</span>
        <input value={to} onChange={handleChange(setTo)} /> <br /><br />
        <span>Body</span>
        <textarea value={mailBody} onChange={handleChange(setMailBody)} /> <br /><br />
      </div>
      <button className={styles.buttonStyle} onClick={onSubmit}>Submit</button> <br />
      <button className={styles.buttonStyle} onClick={onLogout}>Logout</button>
    </>
  );
};

export default Mail;
