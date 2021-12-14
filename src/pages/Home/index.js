import './home.scss'
import {useRef} from 'react'
import SwiperRef  from 'antd-mobile/es/components/swiper'
import SwitchTransition from "../../commponents/SwitchTransition";
import Header from "./components/Header";
import HomeTitle from "./components/HomeTitle";
import HomeContent from "./components/HomeContent";
import {useState} from "react";
import {Swiper} from 'antd-mobile'
import Tabbar from "../../commponents/Tabbar";

const Home = () => {
    const ref = useRef < SwiperRef > (null)
    console.log(ref)
    const [switchShow, setSwitchShow] = useState(true)

    const animateEnd = (e) => {
        setSwitchShow(false)
    }
    const tabbarIndexChange = (index) => {
        console.log(index)
        ref.current?.swipePrev()
    }
    return (
        <div className='main'>
            <Header/>
            <Swiper style={{height: '100%'}} defaultIndex={1} indicator={() => null} allowTouchMove={false}>
                <Swiper.Item key={2}>
                    自我介绍
                    <ion-icon name="home-outline"></ion-icon>
                </Swiper.Item>
                <Swiper.Item key={1}>
                    <HomeTitle/>
                    <HomeContent/>
                    <Tabbar tabbarIndexChange={tabbarIndexChange}/>
                </Swiper.Item>
                <Swiper.Item key={3}>
                    文章列表
                </Swiper.Item>
            </Swiper>

            {switchShow && <SwitchTransition type='enter' animateEnd={(e) => animateEnd(e)}/>}
        </div>
    )
}

export default Home
