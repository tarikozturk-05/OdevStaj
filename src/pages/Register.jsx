import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate();


  const [firstname, setFirstname] = useState()

  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordtwo, setPasswordtwo] = useState()

  // console.log(firstname);
  // console.log(lastname);
  // console.log(email);
  // console.log(password);
  // console.log(passwordtwo);

const veriler = {
  "email" : `${email}`,
  "password" : `${password}`,
  "password2" : `${passwordtwo}`, 
  "first_name" : `${firstname}`,
  "last_name" : `${lastname}`,

}



const Url = `https://backend.gohealthination.com/users/register/`

const postUserApi = async () => {
  try {
    const { data } = await axios.post(Url ,veriler);
   console.log(data);

   navigate("/home");

  } catch (error) {
    alert(error.message);
  }
};







const handleSubmit=(e)=>{
  e.preventDefault()


  if(passwordtwo == password){
    // console.log(veriler);
    postUserApi()




  }else{
    alert( "şifrenizi yanliş girdiniz tekrar deneyiniz!")
  }




 
 
}

  return (
    <div>
      <div className="mt-5">
        <h1 className="text-primary text-center">Register</h1>
        <form className="container w-25 "
        onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="firstname" className="form-label fw-bold  fs-4 ">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              aria-describedby="emailHelp"
              value={firstname || ""}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="lastname" className="form-label fw-bold   fs-4 ">
              Last Name
            </label>
            <input
            
              type="text"
              className="form-control"
              id="lastname"
              value={lastname || ""}
              onChange={(e) => setLastname(e.target.value)}
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
              className="form-control"
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
              className="form-control"
              id="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>




          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-bold fs-4 "
            >
            Confirm Password 
            </label>
            <input
             minLength="8"
            required
              type="password"
              className="form-control"
              id="passwordtwo"
              value={passwordtwo || ""}
              onChange={(e) => setPasswordtwo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

    <br />
    
        <div>  <Link to="/">zaten bir hesabin varmi?</Link></div>
        </form>
      </div>




      
    </div>
  );
}

export default Register

