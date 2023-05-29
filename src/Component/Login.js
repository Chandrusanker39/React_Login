import React,{useState} from 'react'


function Login() {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  function submitHandler(){    
    if(email==="sivem1514119@gamil.com" & pass==="jarvis"){
      alert("Success")

    }else{
      alert("Failed")
    }
  }
  

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email:</label>
        
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value
          )}></input>
      </div>
      <div>
        <label htmlFor="pass">Password:</label>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value
          )}></input>
      </div>
      <div>
        
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Login