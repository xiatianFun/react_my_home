import WorkImage from '../../../icons/images/work.png'

const HomeContent = () => {

    const clickArticle = () => {
        alert('点击了文章')
    }

    return (
        <>
            <div className='flex-col navBox'>
                <div onClick={()=>clickArticle()}>
                    <img src={WorkImage} className='WorkImage' alt=''/>
                    <div className='WorkTitle'>文章</div>
                </div>
            </div>
        </>
    )
}

export default HomeContent
