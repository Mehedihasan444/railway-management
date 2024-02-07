import { Outlet } from "react-router-dom"
import Navbar from "./Components/Shared/Navbar"


const App=()=> {
 

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
