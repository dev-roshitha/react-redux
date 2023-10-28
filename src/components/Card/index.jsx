import PropTypes from "prop-types"
import React, {useState} from "react"

const Card = (props) => {

  const [loged, setLoged] = useState(false);

  const handleLog = () => {
    setLoged(!loged)
  }

  return(
  <div className="card">
    <h2>{props.name}</h2>
    <h2>{props.job}</h2>
    <h5>{props.age}</h5>
    <br/>
    <h1>{loged ? 'User Loged-in' : 'User Loged-out'}</h1>
    <button onClick={handleLog}>{loged ? 'Logout' : 'Login'}</button>
  </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Card