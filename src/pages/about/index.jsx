import Card from "../../components/Card"
import { useState } from "react"

const About = () => {

  const [age, setAge] = useState(25)

  return(
    <div className="about-page-main">
      <Card
        name="Name : Roshitha Ranasinghe"
        job="Job : Web Developer"
        age={age}
      />
    </div>
  )
}

export default About