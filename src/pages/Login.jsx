import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = ({setUserinfo}) => {

  const navigate = useNavigate();


  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

const veriler = {
  "email" : `${email}`,
  "password" : `${password}`,
 "username" : `${username}`,


}



const Url = `https://backend.gohealthination.com/users/dj-rest-auth/login/`

const postUserApi = async () => {
  try {
    const { data } = await axios.post(Url ,veriler);
   console.log(data);
      if (data){
        setUserinfo(data)
        navigate("/home")
      }else{
        alert("Email yada sifre yanliş girilmiş")
      
      }
   

  } catch (error) {
    alert(error.message);
  }
};







const handleSubmit=(e)=>{
  e.preventDefault()
  postUserApi()


}

  return (
    <div>
      <div className="mt-5">
        <h1 className="text-primary text-center">Login</h1>
        <form className="container w-25 "
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
              Email address
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
              Password
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

    <br />


    
        <div>  <Link to="/register">henüz kayit olmadinmi?</Link></div>
        </form>
      </div>




      
    </div>
  );
}

export default Login

