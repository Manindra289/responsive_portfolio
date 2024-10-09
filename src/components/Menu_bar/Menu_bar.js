
import styles from './Menu_bar.module.css'
import myimg from '../../assets/myImg.png'
const Menu_bar = (props) => {


  const handleClick = () =>
    {
      if(props.data === false){
        let x = document.body.getElementsByClassName('preview')
        x[0].style.visibility = "visible"
        props.func2({name:"profile"})
        props.func(true)
      }
      else
      {
        console.log("Not clicked")
      }
    }

  return (
    <>
    {/* <div className={ [styles['container1'],].join(' ')}> */}
    <div className='flex justify-between items-center '>
    <div className={['',styles['title']].join(' ')}>
        <h2 id={styles['tp1']} className='  text-white max-sm:pt-[0.5rem]  pt-[0.5rem] max-sm:text-sm text-base font-bold ml-[1.5rem] mb-0' >Hello Aliens,</h2>
        <h1 id={styles['th1']} className=' text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>I am Manindra Khandyana</h1>

    </div>
    <div onClick={handleClick} className={styles['profile']}>
      <img className ={styles['pic']} src={myimg} alt="profile pic" />
    </div>
    </div>
    <hr className= 'mx-3 mt-2 p-0 mb-1'/>
    </>
  )
}

export default Menu_bar