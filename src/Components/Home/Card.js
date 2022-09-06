import classes from '../Home/Card.module.css'
const Card = (props) => {
    return (
        <div className={`container-fluid ${classes.setPad}`}>
            <div className='row'>
                {
                    props.renderAPI.filter((each,index)=>{
                        return each.status === 'card'
                    }).map((each,index) => {
                        return <div key={index} className = {`col-lg-4 col-md-6 ${classes.setMb}`}>
                            <a href=''>
                                <img src={each.img} className={`${classes.link_img}`} alt ='no img'/>
                            </a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Card