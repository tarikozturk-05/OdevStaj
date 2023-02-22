import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = ({setUserinfo}) => {

  const navigate = useNavigate();


  const [firstname, setFirstname] = useState()

  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")
  const [passwordtwo, setPasswordtwo] = useState("")


  const [regexerr, setRegexerr] = useState(true)
const [messageregex, setMessageregex] = useState("")


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

    // console.log("tebrikler geçtin bro");
  try {
    const { data } = await axios.post(Url ,veriler);
   console.log(data);
   setUserinfo(data)
   navigate("/home");

  } catch (error) {
    alert(error.message);
  }
};







const handleSubmit=(e)=>{
  e.preventDefault()


  if(passwordtwo == password){

// console.log("kontrol zamani ");
    kontrolzamani()

       }else{

        // console.log("error1 şifreler ayni değil ");
        setRegexerr(false)
        setMessageregex("Passwords entered are different from each other")
  }
}



const kontrolzamani = ()=>{

  
//! regexerr
let kontrol= /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/
let gectimi = kontrol.test(password)

setRegexerr(gectimi) 


// console.log(gectimi ,"-->gectimi");
// console.log(regexerr , "-->regexerr");

// if(regexerr){

//   console.log(gectimi ,"-->gectimi");
// console.log(regexerr , "--> regexerr");

//  postUserApi()

//     }else{
//       console.log("2.errrora yakalandin");
//      setMessageregex("Your password must be at least 1 letter, 1 number and longer than 8 characters")
//  }

}


useEffect(() => {
  
if(password.length > 0){
    if(regexerr){

 postUserApi()

    }else{
      // console.log("2.errrora yakalandin");
     setMessageregex("Your password must be at least 1 letter, 1 number and longer than 8 characters")
 }

}

}, [regexerr])



  return (
    <div>
      <div className="mt-5">

        <h1 className="text-primary text-center">Register</h1>
        <form style={{"maxWidth":"30rem","minWidth":"15rem"}} 
        className="container "
        onSubmit={handleSubmit}>

          <div className="mb-3 ">
            <label htmlFor="firstname" className="form-label fw-bold  fs-4 ">
              First Name
            </label>
            <input
              type="text"
              className="form-control p-3 "
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
              className="form-control p-3 "
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
              Email address<span className='text-danger'>*</span>
            </label>
            <input
                minLength="8"
              required
              type="email"
              className="form-control p-3 "
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
          {!regexerr && <p style={{"border":"4px solid red"}}><span  className='text-danger'>{messageregex}</span></p>}



          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-bold fs-4 "
            >
            Confirm Password<span className='text-danger'>*</span>
            </label>
            <input
             minLength="8"
            required
              type="password"
              className="form-control p-3 "
              id="passwordtwo"
              value={passwordtwo || ""}
              onChange={(e) => setPasswordtwo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
      
    
        <div>  <Link to="/">Zaten bir hesabin varmi?</Link></div>
        </form>
      </div>




      
    </div>
  );
}

export default Register

