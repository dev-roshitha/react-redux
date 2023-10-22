import PropTypes from "prop-types"

const Card = (props) => {
  return(
  <div className="card">
    <h2>{props.name}</h2>
    <h2>{props.job}</h2>
    <h5>{props.age}</h5>
  </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Card