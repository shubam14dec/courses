import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedcourses,setlikedcourses] = useState([]);

  function getcourses(){
    
    if(category === "All"){
      let allarray =[];
      
    Object.values(courses).forEach((array)=>{
    array.forEach((coursedata)=>{
      allarray.push(coursedata);
    })})

    return allarray;
    }
    else{
      return courses[category];
    }
  }


    return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 '>
      {
      getcourses().map((course)=>{
        return <Card course={course} key={course.id} 
        likedcourses={likedcourses} 
        setlikedcourses={setlikedcourses}/>
      })
      }
    </div>
  )
}

export default Cards