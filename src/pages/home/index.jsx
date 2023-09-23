import { useReducer } from "react";

const reducer = (state, action)=> {
  if(action.type === 'setName'){
    return {...state, name: action.data}
  }else if(action.type === 'setEmail'){
    return {...state, email: action.data}
  }else if(action.type === 'setAddress'){
    return {...state, address: action.address}
  }else if(action.type === 'setPhone'){
    return {...state, phone: action.address}
  }else{
    return state
  }
}

const Home = () => {
  
  const [state, setState] = useReducer(reducer, {
    name: '',
    email: '',
    address: '',
    phone: '',
  })
  console.log(state)
  return(
    <div className="page">
      <h1>Home Page WITH REACT ROUTER DOM</h1>
      <section className="wrapper">
        <div className="home-wrapper">
          <input type="text" value={state.name} onChange={(e)=> setState({
            type: 'setName',
            data: e.target.value
          })} placeholder="Enter Name" />
          <input type="text" value={state.email} onChange={(e) => setState({
            type: 'setEmail',
            data: e.target.value
          })} placeholder="Email" />
          <input type="text" value={state.address} onChange={(e) => setState({
            type: 'setAddress',
            data: e.target.value
          })} placeholder="Adderss" />
          <input type="text" value={state.phone} onChange={(e) => setState({
            type: 'setPhone',
            data: e.target.value
          })} placeholder="phone" />
          <button>Submit</button>
        </div>
      </section>
    </div>
  )
}

export default Home