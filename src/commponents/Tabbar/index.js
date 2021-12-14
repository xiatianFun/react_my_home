import './tabbar.scss'
import {useState,useImperativeHandle,forwardRef} from "react";

const domList = [
    {icon: 'home-outline', title: 'Home'},
    {icon: 'person-outline', title: 'My'},
    {icon: 'chatbubble-outline', title: 'Home'},
    {icon: 'camera-outline', title: 'Home'},
    {icon: 'settings-outline', title: 'Home'}
]

const Tabbar = (props,ref) => {
    const [activeIndex,setActiveIndex] = useState(0)

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
        setIndex:(index)=> setActiveIndex(index)
    }))

    const clickListItem = (index) => {
        setActiveIndex(index)
        props.setTabbarIndex(index)
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

export default forwardRef(Tabbar)
