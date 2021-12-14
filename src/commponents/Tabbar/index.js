import './tabbar.scss'
import {useState} from "react";

const domList = [
    {icon: 'home-outline', title: 'Home'},
    {icon: 'person-outline', title: 'My'},
    {icon: 'chatbubble-outline', title: 'Home'},
    {icon: 'camera-outline', title: 'Home'},
    {icon: 'settings-outline', title: 'Home'}
]

const Tabbar = (params) => {
    const [activeIndex,setActiveIndex] = useState(0)
    const clickListItem = (index) => {
        setActiveIndex(index)
        params.tabbarIndexChange(index)
    }
    return (
        <div className='Box'>
            <ul>
                {
                    domList.map((i,index) => {
                        return (
                            <li key={i.icon} className={`list ${activeIndex === index ? 'active' : ''}`} onClick={()=>clickListItem(index)}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#">
                                    <span className='icon'>
                                        <ion-icon name={i.icon}/>
                                    </span>
                                    <span className='text'>{i.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
                <div className='indicator'></div>
            </ul>
        </div>
    )
}

export default Tabbar
