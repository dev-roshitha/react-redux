import { useReducer } from "react";

const reducer = (state, action)=> {}

const Home = () => {

  const [state, setState] = useReducer(reducer, {
    name: "roshitha",
    email: "r@gmail.com",
    address: "34/18 Kandy Srilanka",
    phone: "0703639744"
  })

  return(
    <div>
      <h1>Home Page WITH REACT ROUTER DOM</h1>
      <section className="wrapper">
        <div className="home-wrapper">
          <input type="text" value={state.name} placeholder="Enter Name" />
          <input type="text" value={state.email} placeholder="Email" />
          <input type="text" value={state.address} placeholder="Adderss" />
          <input type="text" value={state.phone} placeholder="phone" />
          <button>Submit</button>
        </div>
      </section>
    </div>
  )
}

export default Home