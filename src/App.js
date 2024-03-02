import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import {filterData,apiURL} from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {    

  const [courses,setcourses] = useState([]); 
  const [loading , setloading] = useState(true);
  const [category , setcategory] = useState(filterData[0].title);

 async function fetchdata(){
  setloading(true);
  try{
    let response = await fetch(apiURL);
    let output = await response.json();
    
    setcourses(output.data);
    setloading(false);
  }
  catch(error){
    toast.error("Network issues"); 
  }
 }

useEffect(()=>{
  fetchdata();
},[]);


  return (
    <div className='flex flex-col min-h-screen ' >
      <div>
        <Navbar/>
      </div>

      <div className='bg-slate-600 min-h-[655px]'>

      <div >
        <Filter filterData={filterData} category={category} setcategory={setcategory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
       {
        loading ?(<Spinner/>):(<Cards courses={courses} category={category}/>)
       }
      </div>

      </div>

    </div>
  );
}

export default App;
