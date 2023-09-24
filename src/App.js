import { useState } from 'react';
import images from './images'
function App() {
  return (
    <>
     <SlideShow images={images}/>
    </>
  );
}

const SlideShow =({images})=>{
  const[active,setActive]=useState(1)
  const nextImage=()=>{
    if (active < images.length-1){
          setActive(active+1)
    }
  }
  const prevImage=()=>{
    if (active > 0){
      setActive(active-1)
    }
  }
return (
  <>
  <div className='flex justify-center w-full mt-14 '>
    <div className='relative'>
    {images.map((image,i)=><Slide key={image.captions} active={i===active} image_url={image.image_url} />)}
    <div className='flex justify-center m-2'>
      {images.map((image,i)=><div key={image.captions} className={`w-[35px] h-[35px] rounded-full bg-gray-500 m-1 cursor-pointer ${active===i ? "bg-blue-600":""}`} onClick={()=>setActive(i)} ></div>)}
    </div>
    <div className='text-5xl absolute top-28 right-0 cursor-pointer text-white' onClick={()=>nextImage()}>&gt;</div>
    <div className='text-5xl absolute top-28 left-0 text-white cursor-pointer' onClick={()=>prevImage()}>&lt;</div>
  </div>
  </div>
  </>
)
}
const Slide=({image_url,active})=>{
  return (
  <>
    <img className={`w-[400px] h-[300px] rounded-lg shadow-xl border border-gray-400 ${active ? "":"hidden"}`} src={image_url} alt="loading" />
  </>
  )
}



export default App;
