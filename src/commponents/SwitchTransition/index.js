import {Component} from 'react';

/**
 * @name 过场动画组件
 * @props.type 选择进入动画还是离开动画 :String
 * @props.callback 动画完毕时回调函数 :Function
 */



// const shuffle = (n) => {
//     //生成m张牌
//     let arr = new Array(n);
//     for (var i = 0; i < n; i++) {
//         arr[i] = i;
//     }
//     //每次抽出一张牌，放在另一堆。因为要在数组里抽出元素，把后面的所有元素向前拉一位，所以很耗时。
//     var newArr = []
//     for (let i = n; i > 0; i--) {
//         var length = Math.floor(Math.random() * i);
//         newArr.push(arr[length]);
//         arr.splice(length, 1);
//     }
//     console.log(newArr)
//     return newArr;
// }
//
//
// const SwitchTransition = ({type}) => {
//     let interval1;
//     let list = []
//     for (let i = 0; i < 16; i++) {
//         list.push({active: false})
//     }
//     const [domList, setDomList] = useState(list)
//     useEffect(() => {
//         let newDom = domList;
//         let order = shuffle(16) //组件加载后 创建1-16的乱序数组
//         let i = -1;
//         let aniTimeout = () => {
//             i++;
//             if (i >= order.length) return;
//             newDom[order[i]].active = true;
//             setDomList(newDom)
//             console.log(newDom)
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         interval1 = setInterval(aniTimeout, 7)
//         return () => {
//             clearInterval(interval1)
//         }
//     }, [])
//
//
//     const classNames = {
//         animate: `animate-${type}`, //type决定进入还是离场的样式
//         active: `active-${type}`
//     }
//
//
//     return (
//         <div className={classNames.animate}>
//             {domList.map((i, k) => <span key={k} className={i.active ? classNames.active : ''}/>)}
//         </div>
//     )
// }
//
// export default SwitchTransition


export default class SwitchTransition extends Component {
    constructor() {
        super();
        this.boxnum = 16;
        let list = []
        for (let i = 0; i < this.boxnum; i++) {
            list.push({active: false})
        }
        this.state = {
            active: true,
            dom: list // 16个距形
        }
    }

    shuffle(n) {
        //生成m张牌
        let arr = new Array(n);
        for (var i = 0; i < n; i++) {
            arr[i] = i;
        }
        //每次抽出一张牌，放在另一堆。因为要在数组里抽出元素，把后面的所有元素向前拉一位，所以很耗时。
        var newArr = []
        for (let i = n; i > 0; i--) {
            var length = Math.floor(Math.random() * i);
            newArr.push(arr[length]);
            arr.splice(length, 1);
        }
        console.log(newArr)
        return newArr;
    }

    componentDidMount() {
        let order = this.shuffle(16) //组件加载后 创建1-16的乱序数组
        let newDom = this.state.dom;
        let i = -1;
        let aniTimeout = () => {
            i++;
            if (i >= order.length) return;
            newDom[order[i]].active = true;
            this.setState({
                dom: newDom
            })
        }
        this.setAnimate = setInterval(aniTimeout, 16)
        console.log(this.props)
        this.setCallback = setTimeout(() => {
            this.props.animateEnd && this.props.animateEnd(false)
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.setAnimate)
        clearTimeout(this.setCallback)
    }


    render() {
        const classNames = {
            animate: `animate-${this.props.type}`, //type决定进入还是离场的样式
            active: `active-${this.props.type}`
        }
        return (
            <div className={classNames.animate}>
                {this.state.dom.map((i, k) => <span key={k} className={i.active ? classNames.active : ''}/>)}
            </div>
        )
    }
}

