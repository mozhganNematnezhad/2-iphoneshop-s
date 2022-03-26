import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Common/Input/Input";
import * as Yup from "yup";
import * as api from "../../Services/HttpServises";
import { ConsumeAuthState } from "../../Context/AuthContext/AuthState";
import { useQuery } from "../../Hooks/UseQuery";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string(),
  email: Yup.string()
    .email("Must be a valid email")
    //   .max(255)
    .min(2, "Must be more than 10 characters")
    .required("email is required"),
  password: Yup.string().required("  password is required"),
});

const LoginForm = () => {
 const {Auth , setAuth} = ConsumeAuthState()
  const[error,setError] =useState(null)
  const navigate =useNavigate()

  const query =  useQuery()
  const redirect =query.get("redirect") || "/"

  useEffect(()=>{
    if(Auth)  navigate(redirect)
  },[redirect,Auth])


  const onSubmit = async(values) => {
    // console.log(values);
    try {

      const response = await api.loginUser(values)
      // console.log("login",response.data);
      setAuth(response.data)
      localStorage.setItem("authState" ,JSON.stringify(response.data))

      setError(null)
      // navigate("/")
      navigate("redirect")

    } catch (error) {
      // console.log(error.response.data);
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input name="email" formik={formik} label="email" type="email" />

      <Input name="password" formik={formik} label="password" type="password" />

      <div style={{ marginTop: "3rem" }}>
        <button
          type="submit"
          className="btn  btn-custom"
          disabled={!formik.isValid}
        >
          Login
        </button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <Link to={`/siqnup?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>Not siqnup yet?</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;














// <Link
// //  to="/siqnup"
//  to={`/siqnup?redirect=${redirect}`}

//  >
//   <p style={{ marginTop: "15px" }}>Not siqnup yet?</p>
// </Link>