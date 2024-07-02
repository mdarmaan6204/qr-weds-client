import HomeQR from "./HomeQR"
import HomeService from "./HomeService"
import HomeTop from "./HomeTop"
import HomeVideo from "./HomeVideo"

const Home = () => {
  return (
    <div>
      <HomeTop/>
      <HomeService/>
      <HomeVideo/>
      <HomeQR/>
    </div>
  )
}

export default Home