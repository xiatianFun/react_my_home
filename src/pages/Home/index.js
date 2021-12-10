import './home.scss'
import SwitchTransition from "../../commponents/SwitchTransition";
import Header from "./components/Header";
import HomeTitle from "./components/HomeTitle";
import HomeContent from "./components/HomeContent";
import {useState} from "react";

const Home = () => {
    const [switchShow,setSwitchShow] = useState(true)

    const animateEnd = (e) => {
        setSwitchShow(false)
    }
    return (
        <div className='main'>
            <Header/>
            <HomeTitle/>
            <HomeContent/>
            { switchShow && <SwitchTransition type='enter' animateEnd={(e) => animateEnd(e)}/> }
        </div>
    )
}

export default Home
