import React, { useState } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import queryString from "querystring";
import axios from "axios";
import styles from "../styles/Login.module.css";
import ErrorMessage from "../components/ErrorMessage";
import jwt from "jsonwebtoken";

const publicKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhdrwpRXz5RKiqClu9IzbGjuLYKnZmsloTd/IAEVpUFbKIRgw6GiTWClxv4d7EMCNx3Kcze9urtrbmd2U0uYLMd1fV6LPqN+uHpZwxa1OviEC95Al2yBt3kLNhbhUr7dx5GrUgaWn7ohFqiH1TvD3XuieP0pyhKMfJExyxAMoZDa4zao4RpWTziLLyHatqM/88IVMvgwmzhp5xlHmSyR7dnHbxfPheO7wwb28wFJAbsKlm94Dl+SB9OduCT12645Gs5byhnMwdboR03lyzzyXeaXCvd3F/a6fmwpjbQxXJek5USh+wVnLLxoNxm48ZCwbXO/9xrkzjXaSqkFcOl6dEwIDAQAB-----END PUBLIC KEY-----";
const clientSecret = "489eedf0-1ad8-4ebd-bf60-426709339e66";
const grantType = "password";
const clientId = "frontend";

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
        "http://localhost:8080/auth/realms/govanj/protocol/openid-connect/token",
      data: queryString.stringify(params),
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    })
      .then(res => {
        if (res.request.status === 200) {
          jwt.verify(res.data.access_token, publicKey, (err, decoded) => {
            if (err) {
              console.log("Token couldn't be verified");
            } else {
              console.log(decoded);
              localStorage.setItem("token", res.data.access_token);
              Router.push("/mail");
            }
          });
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
