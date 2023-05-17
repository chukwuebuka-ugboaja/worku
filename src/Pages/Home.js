import Header from "../Component/Header/Header"
import Herosection from "../Component/Herosection/Hs"
import Hero22 from "../Component/Hero22/Her22"
import Secondsection from "../Component/Secondsection/Sec2";
import Video from "../Component/Video/Vid";
import Signup from "../Component/Signup/Sig"



export default function Home() {

  return (
    <div className="App">
        <Header />
        <Herosection />
        <Secondsection />
        <Video />
        <Hero22 />
        <Signup />
        

        

    
    </div>
  );
}
