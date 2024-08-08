import React from 'react'
import './Skill_component.css'
const Skill_component = (props) => {
  return (
    <>
    <div className='s_item'>
    <div className='s_i2 '>
            <h1 className='sih1'>{props.data.name}</h1>
            <h1 className='s_m' style={{
                color: (((props.data.compl >=80 && "#0FFF50") || (props.data.compl >=50 && props.data.compl <80) && "#ccff15") || (props.data.compl<50 && "#FF3131" )),
                borderColor: (((props.data.compl >=80 && "#0FFF50") || (props.data.compl >= 50 && props.data.compl < 80) && "#ccff15") || (props.data.compl < 50 && "#FF3131")),
                }}>{props.data.compl}%</h1>
    </div>
    <div className="progress" style={{height:"0.4rem",backgroundColor:"grey",borderRadius:"1rem"}}
     role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div className="progress-bar" style={{
      width: props.data.compl+"%",height:"0.4rem",
      backgroundColor: ((props.data.compl >=80 &&"#0FFF50")
      || (props.data.compl >=50 && props.data.compl <80) &&"#ccff15")
      || (props.data.compl<50 && "#FF3131" )
      ,
      borderRadius:"1rem"}}> </div>
    </div>
    </div>
    </>
  )
}

export default Skill_component