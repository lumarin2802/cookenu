import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logocookenu.png"
import useForm from "../../hooks/useForm"

const LoginPage = () =>{
  const [form, onChange, clear] = useForm({email:"", password:""})

  const onSubmitForm = () =>{

  }

      return(
        <div className="d-flex p-2 w-100 flex-column align-items-center">
          <Link className="d-flex mx-auto" to="/">
            <img
              className="logo mx-auto"
              src={logo}
              width="400"
              height="400"
            />
          </Link>
          <div d-flex p-2 w-100 flex-column align-items-center>          
          <form onSubmit={onSubmitForm}>
          <input
              className="container-fluid p-2 border-naranja "
              placeholder="Email"
              name={"email"}
              value={form.email}
              onChange={onChange}
            />
            <input
              className="container-fluid p-2 mt-2 border-naranja "
              placeholder="Password"
              name={"password"}
              value={form.password}
              onChange={onChange}
            />
            
          </form>
          </div>
        </div>
      )
}
export default LoginPage 