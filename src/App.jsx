import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [UserData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData=async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`);

    setUserData(response.data);
    console.log(response.data);
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData=<h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold'>Loading...</h3>

  if(UserData.length>0){
    printUserData=UserData.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-54 overflow-hidden bg-amber-50 rounded-xl'>
            <img className='h-full w-full rounded-xl' src={elem.download_url} alt=""  />
          </div>
          <h2 className='font-bold text-lg' >{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen overflow-auto p-6 text-white'>

        <div className='flex flex-wrap gap-6 p-3 '>
          {printUserData}
        </div>

        <div className='flex justify-center items-center gap-6'>
          <button 
          style={{opacity: index == 1 ? 0.6:1}}
          onClick={()=>{
            if(index>1){
              setUserData([])
              setIndex(index-1)
            }
          }}
          className='bg-amber-400  text-sm font-semibold  px-4 py-2 cursor-pointer active:scale-95 rounded '>
            Prev
          </button>
          <h4>Page {index}</h4>
          <button onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }}
          className='bg-amber-400  text-sm font-semibold px-4 py-2 cursor-pointer active:scale-95  rounded'>
            Next
          </button>
        </div>
    </div>
  )
}

export default App