import React from 'react'
import styles from './Skills.module.css'
import Skill_component from './Skill_component/Skill_component'
const Skills = (props) => {
    let arr = [
        {
            name:"Web Development",
            compl: 80,
        },
        {
            name:"Machine Learning",
            compl:50,
        },
        {
            name:"C++",
            compl:85,
        },
        {
            name:"AWS",
            compl:30
        },
        {
            name:"SQL",
            compl:70,
        },
        {
            name:"Javascript",
            compl:60
        },
        {
            name:"Python",
            compl:40
        },
        {
            name:"Linux",
            compl:80
        }
    ]

  return (
    <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll pb-2',styles['bg']].join(' ')}>
        <div>
        <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base 2xl:text-5xl mb-0 mt-2',styles['ah1']].join(' ')}>Skill Summary</h1>
        <h2 className={['text-base font-bold mb-0 ml-4 max-lg:text-sm 2xl:text-3xl text-[lightgrey] lg:text-sm',styles['ah1']].join(' ')}>Total : {arr.length}</h2>
        <hr className= 'mx-3 mt-2 p-0 mb-1'/>
        </div>
        <div className='overflow-scroll mb-2 max-lg:pb-2 max-lg:h-[175px]'>
        {
        arr.map(
                (a)=>(
                    <Skill_component data = {a} func={props.func} visfunc ={props.visfunc}/>
                )
            )
        }
        </div>
    </section>
  )
}

export default Skills