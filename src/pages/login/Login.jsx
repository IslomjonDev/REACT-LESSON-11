import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from '../../api'
import { toast } from 'react-toastify'

function Login() {
  const [username, setUsername] = useState("yraigatt3")
  const [password, setPassword] = useState("sRQxjPfdS")
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const handleLogin = (event)=>{
    event.preventDefault()
    setLoading(true)
    let user = {
      username,
      password
    }
    axios
      .post( "/auth/login", user )
      .then(res => {
        console.log("res>>>", res.data.token)
        toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
      })
      .catch(err => {
        console.log("err>>>" , err)
        toast.error("username or password is incorrect")
      })
      .finally(()=> setLoading(false))

  }
  return (
    <form onSubmit={handleLogin} className='login'>
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button disabled={loading} type='submit'>{loading ? "Loading..." : "Log in"}</button>
      <button type='button' onClick={()=> navigate(-1)}>Go back</button>
    </form>
  )
}

export default Login