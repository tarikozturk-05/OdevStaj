import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = ({setUserinfo}) => {

  const navigate = useNavigate();


  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState()

  const [loginRegexErr, setLoginRegexErr] = useState(true)
  const [loginMessageErr, setLoginMessageErr] = useState("")

const veriler = {
  "email" : `${email}`,
  "password" : `${password}`,
 "username" : `${username}`,


}



const Url = `https://backend.gohealthination.com/users/dj-rest-auth/login/`

const postUserApi = async () => {
  // console.log("1.giriş");
  try {
    // console.log("2.giriş");
    const { data } = await axios.post(Url ,veriler);
   console.log(data);
      if (data){
        setUserinfo(data)
        navigate("/home")
      }else{
        console.log(" if else error --> Email yada sifre yanliş girilmiş")
      
      }
   

  } catch (error) {
    setLoginRegexErr(false)
    setLoginMessageErr("catch error --> Email yada sifre yanliş girilmiş.Lütfen tekrar deneyiniz");
  }
};







const handleSubmit=(e)=>{
  e.preventDefault()
 kontrollogin()

}


const kontrollogin = ()=>{

  let kontrol= /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/
  let gectimi = kontrol.test(password)
  
  setLoginRegexErr(gectimi)


}


useEffect(() => {
  
  if(password.length > 0){
      if(loginRegexErr){
  
   postUserApi()
  
      }else{
        // console.log("2.errrora yakalandin");
       setLoginMessageErr("Your password must be at least 1 letter, 1 number and longer than 8 characters")
   }
  
  }
  
  }, [loginRegexErr])
  


  return (
    <div>
      <div className="mt-5">
        <h1 className="text-primary text-center">Login</h1>
        <form style={{"maxWidth":"30rem","minWidth":"15rem"}}  className="container  "
        onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="firstname" className="form-label fw-bold  fs-4 ">
              User Name
            </label>
            <input
              type="text"
              className="form-control p-3 "
              id="username"
              aria-describedby="emailHelp"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>




          <div className="mb-3">
            <label
              htmlFor="Email"
              className="form-label fw-bold  fs-4 "
            >
              Email address<span className='text-danger'>*</span>
            </label>
            <input
         
                minLength="8"
              required
              type="email"
              className=" form-control p-3   "
              
              id="Email"
              aria-describedby="emailHelp"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-bold fs-4 "
            >
              Password<span className='text-danger'>*</span>
            </label>
            <input
             minLength="8"
            required
              type="password"
              className="form-control p-3 "
              id="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!loginRegexErr && <p style={{"border":"4px solid red"}}><span  className='text-danger'>{loginMessageErr}</span></p>}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

    <br />


    
        <div>  <Link to="/register">henüz kayit olmadinmmmmmmmmmmmmmmi?</Link></div>
        </form>
      </div>




      
    </div>
  );
}

export default Login

