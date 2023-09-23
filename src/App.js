import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Navbar from './components/nav-bar';
import Footer from './components/footer';
import "./sass/main.scss";
import InitMain from "./modules/main"


const Layout = () => {
  return(<>
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  </>)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

InitMain()
export default App;