import React from 'react'
import {FcLike} from 'react-icons/fc';
import { toast } from 'react-toastify';
import {FcLikePlaceholder} from 'react-icons/fc';


const Card = (props) => {
  let course = props.course;
  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setlikedcourses;

  function clickhandler(){
    if(likedcourses.includes(course.id)){
      // remove from the likedcourses array
      setlikedcourses(likedcourses.filter((cid)=>cid !== course.id))
      toast.warning("Liked Removed");
    }
    else{
      // add to the likedcourse array
      setlikedcourses([...likedcourses,course.id]);
      toast.success("Liked successfully");
    }
  }

  return ( 
    <div className='w-[300px] bg-indigo-950 bg-opacity-90  rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} loading="lazy"/>

        <div className='absolute w-[45px] h-[45px] bg-white rounded-full right-2 -bottom-4 flex justify-center'>
          <button onClick={clickhandler}>
           {likedcourses.includes(course.id)? (<FcLike fontSize="2rem"/>):( <FcLikePlaceholder fontSize="2rem"/>)}
          </button>
        </div>

      </div>
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>{`${course.description.substr(0,100)}...`}</p>
      </div>
     
    </div>
  )
}

export default Card