import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Home = () => {
  return (
    <>
    <Navbar/>
    <h1 className="title">Welcome to Future</h1>
    <Outlet/>
    </>
  )
}
