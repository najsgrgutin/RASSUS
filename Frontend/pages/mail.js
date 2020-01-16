import { useState, useEffect } from "react";
import Router from "next/router";
import Modal from "../components/Modal";
import styles from "../styles/Mail.module.css";
import Loader from "react-loader-spinner";

const Mail = () => {
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("");
  const [body, setbody] = useState("");
  const [showModal, setShowModal] = useState("");
  const [showSpinner, setShowSpinner] = useState("");

  const onSubmit = () => {
    setShowSpinner(true);
    if (subject === "" || to === "" || body === "") {
      setShowModal("Please fill out all fields");
      return;
    }
    
    const mail = { subject, to, body };
    console.log(mail);

    fetch("http://localhost:9000/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(mail)
    })
      .then(res => {
        setShowSpinner(false);
        if (res.status === 200)
          setShowModal("Mail sent");
        else 
          setShowModal("Mail could not be sent");
        return res.json();
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleChange = setterFunction => event => {
    setterFunction(event.target.value);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    Router.push("/");
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) 
      Router.push("/");
  }, [])

  return (
    <>
      <div className={styles.containerStyle}>
        <span>Subject</span>
        <input value={subject} onChange={handleChange(setSubject)} className={styles.subjectInput} /> <br /><br />
        <span>To</span>
        <input value={to} onChange={handleChange(setTo)} className={styles.toInput} /> <br /><br />
        <span>Body</span>
        <textarea value={body} onChange={handleChange(setbody)} className={styles.bodyInput} /> <br /><br />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.submitButton} onClick={onSubmit}>Submit</button>
        <button className={styles.logoutButton} onClick={onLogout}>Logout</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {!showSpinner ? 
        null
        :
        <div className={styles.spinnerContainer}>
          <Loader type="ThreeDots" color="#2B6AF0" height={100} width={100} />
        </div>
      }
    </>
  );
};

export default Mail;
