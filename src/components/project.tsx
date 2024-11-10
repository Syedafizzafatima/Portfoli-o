import React from 'react'
import Heading from './Heading'
import Card from './card'
const data =[
    {
        id: 0,
        title: 'Static Interactive Resume',
        desc :'A Typescript-based interactive resume built with HTML and CSS , allowing users to showcasetheir dynamically .',
        img :"/project-0.jpg",
        tags:["HTML","Node","CSS","Typescript" ],


    },



    { 
        id: 1,
        title: 'Pakwheels website',
        desc :'A Typescript-based Website built with HTML and CSS , allowing users to purchase and sell cars.',
        img :"/project_01.png",
        tags:["HTML","Node","CSS","Typescript" ],
        

    }
    
]


const Projects=() =>{

    return (
        <div id='projects' className='container pt-32'>
<  Heading title='My Projects' />
<div className='grid gap-10 xl:gap-0 xl:gap-y-10 mf:grid-cols-2 lg:grid-cols-3 place-items-center space-x-9'>
    {data.map ((el) => (<Card
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}

    />))}
</div>

        </div>
    )
}
export default Projects