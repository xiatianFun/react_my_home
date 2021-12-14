import './home.scss'
import {useRef} from 'react'
import SwitchTransition from "../../commponents/SwitchTransition";
import Header from "./components/Header";
import HomeTitle from "./components/HomeTitle";
import HomeContent from "./components/HomeContent";
import {useState} from "react";
import {Swiper} from 'antd-mobile'
import Tabbar from "../../commponents/Tabbar";

const Home = () => {
    let swiperRef = useRef(null)
    const dateRef = useRef()
    // let tabbarRef = useRef(null)

    const [switchShow, setSwitchShow] = useState(true)
    const animateEnd = (e) => {
        setSwitchShow(false)
    }
    const tabbarIndexChange = (i) => {
        dateRef.current.setIndex(i)
    }

    const setTabbarIndex = (index) => {
        swiperRef.current.swipeTo(index)
    }
    return (
        <div className='main'>
            <Header/>
            <Swiper ref={swiperRef} style={{height: '100%'}} onIndexChange={(i) => tabbarIndexChange(i)}
                    defaultIndex={0} indicator={() => null}>
                <Swiper.Item>
                    <HomeTitle/>
                    <HomeContent/>
                </Swiper.Item>
                <Swiper.Item>
                    自我介绍
                    <ion-icon name="home-outline"></ion-icon>
                </Swiper.Item>
                <Swiper.Item>
                    留言
                </Swiper.Item>
                <Swiper.Item>
                    文章列表
                </Swiper.Item>
                <Swiper.Item>
                    设置
                </Swiper.Item>
            </Swiper>
            <Tabbar ref={dateRef} setTabbarIndex={setTabbarIndex}/>
            {switchShow && <SwitchTransition type='enter' animateEnd={(e) => animateEnd(e)}/>}
        </div>
    )
}

export default Home
