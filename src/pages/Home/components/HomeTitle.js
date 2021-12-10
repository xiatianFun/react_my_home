import {useState, useEffect} from 'react'

const HomeTitle = () => {
    const [animate1, setAnimate1] = useState(false)
    const [animate2, setAnimate2] = useState(false)
    const [animate3, setAnimate3] = useState(false)
    const [cursor, setCursor] = useState(false)
    var setTimeout0, setTimeout1, setTimeout2,setTimeout3
    useEffect(() => {
        setTimeout0 = setTimeout(() => {
            setAnimate1(true)
        }, 1200)
        setTimeout1 = setTimeout(() => {
            setAnimate2(true)
        }, 1400)
        setTimeout2 = setTimeout(() => {
            setAnimate3(true)
        }, 1600)
        setTimeout3 = setTimeout(() => {
            setCursor(true)
        }, 2400)
        return () => {
            clearTimeout(setTimeout0)
            clearTimeout(setTimeout1)
            clearTimeout(setTimeout2)
            clearTimeout(setTimeout3)
        }
    }, [])
    return (
        <div className='homeContentStyle text'>
            <div className={animate1 ? 'animate' : ''}>Hey!</div>
            <div className={animate2 ? 'animate' : ''}>Welcome!</div>
            <div className={animate3 ? 'animate' : ''} style={{fontSize: '39px'}}>I'm Summer #<i className={cursor?'cursor':''}></i></div>
        </div>
    )
}

export default HomeTitle
