import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Input from "../../Common/Input/Input";
import { Link, useNavigate ,useLocation } from "react-router-dom";
import * as Yup from "yup";
import "./SiqnupForm.css";
import * as api from "../../Services/HttpServises";
import { ConsumeAuthState } from "../../Context/AuthContext/AuthState";
import queryString from "query-string";
import { useQuery } from "../../Hooks/UseQuery";


const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  // .min(3, "Name lenght is not valid"),

  email: Yup.string()
    .email("Must be a valid email")
    //   .max(255)
    .min(2, "Must be more than 10 characters")
    .required("email is required"),

  phoneNumber: Yup.string()
    .required("the phone number is required")
    .matches(/^[0-9]{11}$/, "Must be exactly 5 digits")
    .nullable(),
  password: Yup.string().required("  password is required"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Includes 8 characters ... one uppercase and one lowercase letter and one number and one special character"
  // ),
  confirmPassword: Yup.string()
    .required("  confirmPassword is required")
    .oneOf([Yup.ref("password"), null], "Password does not match "),
});

const SiqnupForm = () => {
  const {Auth , setAuth} = ConsumeAuthState()
  //  console.log(myObject);  //{Auth: false, setAuth: ƒ}

  const[error,setError] =useState(null)
  const navigate =useNavigate()

  const query =  useQuery()
  // شاید یه جاهایی این ریدابرکت وجود نداشته باشه بیاد به صفجه اضلی
  const redirect =query.get("redirect") || "/"
  // console.log(redirect);

 // وفی که کاربر دیگه داخل پروفایل هست دیگه صفحه 
  // siqnup
  // نشون نده
  useEffect(()=>{
    if(Auth)  navigate(redirect)
  },[redirect,Auth])



  const onSubmit = async (values) => {
    // console.log(values); //{name: 'mozhgan', email: 'ne.mozhgan@gmail.com', }
    // من همه دیتاهای ولیوز  رو نمیخوام
    try {
      // روش اول
      // const userData = {
      //   name: values.name,
      //   email: values.email,
      //   phoneNumber: values.phoneNumber,
      //   password: values.password,
      // };
      // روش دوم
      const { name, email, phoneNumber, password } = values;
      const userData = { name, email, phoneNumber, password };
      const response = await api.siqnUser(userData);
      // console.log(response);   //{_id: '622c1a51bc52dd43c4d0ba19', name: 'mozhgan', email: 'ne.mozhgan@gmail.com', isAdmin: false, phoneNumber: '09112457764'
      // console.log("siqn",response.data);
      // دخیزه در استیت
      setAuth(response.data)
      // دخیره در لوکال
      localStorage.setItem("authState" ,JSON.stringify(response.data))
      
      // وقتی درست است دیگه خطا رو نیاره
      setError(null)
      // navigate("/")
      navigate(redirect)

    } catch (error) {
      // برای خطای سمت کاربر 
      //که بک اند ارور را به ما میدهد
      // console.log(error.response.data);
      if(error.response && error.response.data.message) {
          setError(error.response.data.message )
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
      <Input name="name" formik={formik} label="name" />
      <Input name="email" formik={formik} label="email" type="email" />
      <Input
        name="phoneNumber"
        formik={formik}
        label="phoneNumber"
        type="tel"
      />
      <Input name="password" formik={formik} label="password" type="password" />
      <Input
        name="confirmPassword"
        formik={formik}
        label="confirmPassword"
        type="password"
      />

      <div style={{ marginTop: "3rem" }}>
        <button
          type="submit"
          className="btn  btn-custom"
          disabled={!formik.isValid}
        >
          SiqnUp
        </button>
        {/* این ارور رو داریم سمت کاربر نشون می دهیم */}
        {error && <p style={{color :"red"}}>{error}</p>}
        <Link to={`/login?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>Already login ?</p>
        </Link>
      </div>
    </form>
  );
};

export default SiqnupForm;









// token

// اینجا بک اند یک توکنی را جنریت میکند
// من این توکن را در لوکال استورج خودم دخیره میکنم
// و با استفاده از این توکن هر بار که کاربر
// صفحه رو رفرش کنه
// این بنده خدا لاکین هست  نیازی نیست 


//  localstorage
// localStorage.setItem("authState" ,JSON.stringify(response.data))

// setItem
// من الان میخوام کاربر خودم رو در لوکال ثبت کنم که هر دفعه اینو وارد نکنم یه بار داخل لوکال استورچ من داشته باشه
// localStorage.setItem('name', 'James Rodriguez');

// name کلید
// James Rodriguez مقدار کلید 

// توی 
// Local Storage 
// باید رشته ذخیره کنیم.
// پس قبل از ذخیره آبجکت، باید اون رو تبدیل به رشته کنیم:



{/* <Link 
  //to="/login"
  to={`/login?redirect=${redirect}`}
 >
  <p style={{ marginTop: "15px" }}>Already login ?</p>
</Link> */}





  // const location = useLocation();
  // // console.log(location.search);
  // const query =queryString.parse(location.search)
  // console.log(query.redirect); //{redirect: 'checkout'} 
 