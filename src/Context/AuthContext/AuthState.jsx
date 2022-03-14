import { createContext, useState, useContext, useEffect } from "react";

const authContext = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthState = ({ children }) => {
  const [Auth, setAuth] = useState(false);

  //  چک کند که اولین دفعه ای اپلیکیشن لود میشود یعنی نقش
  // COMPONENTdidmount
  // getItem برای گرفتن یک ایتم
  // بره لوکال استورچ رو بخونه
  // و بعد از خواندن
  // لوکال استورچ.
  // وچه ایتمی رو باید
  // get
  // کنه؟
  // اگر وجود داشت که بهمون بده اگه نه فالز بده
  // آول باید این باشه چرا که ما باید چگ کتیم
  // لوکال استورچ با چیزی که تا الان هست بخونیم
  // برازیم  تو ....
  useEffect(() => {
    // const user =localStorage.getItem("authState")
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
    setAuth(userData);
  }, []);


 

 
  return (
    <authContext.Provider value={{ Auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;

export const ConsumeAuthState = () => useContext(authContext);















 // نقش
  // componentdidUpdate
  // هر بار که این استیت تعییر کرده
  // Auth
  // بیا لوکال ما رو چک کن
  // این نشد برای من نمیدونم چرا ؟؟؟؟؟؟؟؟
  
  // useEffect(()=>{
  //  const data = localStorage.setItem(LOCAL_STORAGE_AUTH_KEY ,JSON.stringify(Auth))
  //  setAuth(data)
  // },[Auth])

  // useEffect(() => {
  //   const data = JSON.stringify(Auth);
  //   localStorage.setItem("LOCAL_STORAGE_AUTH_KEY", data);
  // }, [Auth]);
