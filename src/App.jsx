import Header from "./components/header/Header.jsx";
import "./App.css"
import Banner from "./components/banner/Banner.jsx";
import Collaborators from "./components/collaborators/Collaborators.jsx";
import Projects from "./components/projects/Projects.jsx";
import About from "./components/about/About.jsx";
import Process from "./components/process/Process.jsx";
import Video from "./components/video/Video.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
function App() {


  return (
    <div class='bg-[#000D0D] min-h-screen m-0 p-0 w-full flex flex-col justify-center items-center'>
      <Banner/>
      <Collaborators/>
      <Projects/>
      <About/>
      <Process/>
      <Video/>
      <Reviews/>
    </div>
  )
}

export default App
