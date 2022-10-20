import { useState } from "react";
import {FaUser} from "react-icons/fa"

const defaultState = {
  name: '',
  email: '',
  password: '',
  password2: ''
};

function Register() {
  const [formData, setFormData] = useState(defaultState)

  const { name, email, password, password2} = formData

  const onChange = () => {
    setFormData((prevState) => ({
      
    }))
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input 
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder='Enter your name: ' 
            />
          </div>
        </form>
      </section>
      
    </>
  )
}

export default Register;