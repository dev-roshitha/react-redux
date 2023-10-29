import PropTypes from "prop-types"
import React, {useState} from "react"

const Card = (props) => {

  const [loged, setLoged] = useState(false);
  const [data, setData] = useState()

  const handleLog = () => {
    setLoged(!loged)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(data)
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
  }

  return(
  <div className="card">
    <h2>{props.name}</h2>
    <h2>{props.job}</h2>
    <h5>{props.age}</h5>
    <br/>
    <h1>{loged ? 'User Loged-in' : 'User Loged-out'}</h1>
    <button onClick={handleLog}>{loged ? 'Logout' : 'Login'}</button>

    <div className="form">
      <form onSubmit={handleSubmit} className="input-form">
        <input className="form-input" type="text" name="firstName" onChange={handleChange}/>
        <input className="form-input" type="text" name="lastName" onChange={handleChange}/>
        <input className="form-checkbox" type="checkbox" name="btnStatus" onChange={handleChange}/>
        <button className="submit-btn" type="submit">Signup</button>
      </form>
    </div>
  </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Card