import { useContext } from "react"
import HomeQR from "./HomeQR"
import HomeService from "./HomeService"
import HomeTop from "./HomeTop"
import HomeVideo from "./HomeVideo"
import { ThemeContext } from "../App"

const Home = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark"? "bg-black" : "bg-white" }`}>
      <HomeTop/>
      <HomeService/>
      <HomeVideo/>
      <HomeQR/>
    </div>
  )
}

export default Home