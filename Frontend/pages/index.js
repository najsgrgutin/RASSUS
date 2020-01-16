import React, { useState } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import queryString from "querystring";
import axios from "axios";
import styles from "../styles/Login.module.css";
import ErrorMessage from "../components/ErrorMessage";

const clientSecret = "f4e5a47f-e944-4b32-9b7b-7d85d86268ae";
const grantType = "password";
const clientId = "client1";

const Login = () => {
  
  const { register, handleSubmit, errors } = useForm();

  const [showError, setShowError] = useState(false);

  function handleLoginClick(data) {
    const params = {
      client_secret: clientSecret,
      username: data.username,
      password: data.password,
      grant_type: grantType,
      client_id: clientId
    };

    axios({
      method: "post",
      url:
        "http://localhost:8080/auth/realms/RASSUS/protocol/openid-connect/token",
      data: queryString.stringify(params),
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
      .then(res => {
        if (res.request.status === 200) {
          localStorage.setItem("token", res.data.access_token);
          Router.push("/mail");
        } else {
          console.log("Something went wrong");
        }
      })
      .catch(error => {
        setShowError(true);
        console.error(error);
      });
  }

  return (
    <form
      className={styles.loginContainer}
      onSubmit={handleSubmit(handleLoginClick)}
    >
      <h1 className={styles.loginTitle}>Login</h1>
      <input
        className={styles.loginInput}
        placeholder="Username"
        name="username"
        ref={register({
          required: true
        })}
      />
      <div className={styles.mailErrorMessage}>
        {errors["username"] && errors["username"].message}
      </div>
      <input
        className={styles.loginInput}
        placeholder="Password"
        name="password"
        type="password"
        ref={register({
          required: true
        })}
      />
      <button className={styles.loginButton} type="submit">
        Login
      </button>
      {showError ? (
        <ErrorMessage message={"Wrong username or password"} />
      ) : null}
    </form>
  );
};

export default Login;
