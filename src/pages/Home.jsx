import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({userinfo}) => {
  
  return (
    
<div>

    {!userinfo && 
   <h2>Kullanici kayitli degil lütfen <Link to={"/"}>Giriş Yapin</Link> </h2> }





{userinfo &&  

<div> 

<h2>Hoşgeldinn {userinfo.first_name || userinfo.user.chatname } </h2>
<h5>Email : {userinfo.email || userinfo.user.email} </h5>
<h5>Role : {userinfo.role || userinfo.user.role} </h5>

<h5>Token : {userinfo.token || userinfo.key} </h5>

</div>}






        

{/* 
{!userinfo.key &&  

<div> 

<h2>Hoşgeldinn {userinfo.first_name } </h2>
<h5>Email : {userinfo.email} </h5>
<h5>Role : {userinfo.role} </h5>

<h5>Token : {userinfo.token} </h5>

</div>}




{userinfo.key &&  

<div> 

<h2>Hoşgeldin {userinfo.user.chatname} </h2>
<h5>Email : {userinfo.user.email} </h5>
<h5>Role : {userinfo.user.role} </h5>
<h5>Id : {userinfo.user.id} </h5>
<h5>key : {userinfo.key} </h5>

</div>} */}


</div>


   
  )
}

export default Home