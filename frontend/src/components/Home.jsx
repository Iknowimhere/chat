import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
