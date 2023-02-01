import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [link, setLink] = useState(null);
  const [title, setTitle] = useState('');
  const [photo, setPhoto]= useState('');
  const [txt, setTxt] = useState('');
  const [date, setDate]=useState('');
  const [menu, setMenu]=useState(false);

  const fetchGalaxyPhoto = async () => {
    try{
      if(link){
        return setLink(null);
      }
      const response = await fetch('https://go-apod.herokuapp.com/apod');
      const finalResponse = await response.json();
      setTitle(finalResponse.title);
      setPhoto(finalResponse.url);
      setTxt(finalResponse.explanation);
      setDate(finalResponse.date);
    }
    catch (error){
      console.log("This is the error:", error);
    }
  }

  useEffect(() =>{
    fetchGalaxyPhoto();
  }, )
  return (
    <div className=''>
      <nav className='flex justify-between py-2  sticky top-0 bg-slate-500'>
        <div className=' px-2 rounded items-center ml-10'></div>
        <div className='px-2 rounded-3xl hover:bg-white mx-4'><img className='h-10' alt='Logo' src='/telescope.png'></img></div>
        <button className='bg-white px-2 rounded mr-10' onClick={()=> setMenu(!menu)}><img alt='menu' className='h-10' src='/menuHamburguer.png'></img></button>
      </nav>
      {(menu) ?(<div className='bg-black flex justify-center sticky top-14'><div></div>
        <div className='my-4 py-4 text-center w-screen'> 
        <a className='text-white font-bold hover:bg-white hover:text-black px-[30%] rounded'>MyGithub</a><br></br>
        <a className='text-white font-bold hover:bg-white hover:text-black px-[30%] rounded'>Stellarium App</a><br></br>
        <a className='text-white font-bold hover:bg-white hover:text-black px-[30%] rounded'>Daily Hubble photo's</a></div> 
      </div>) :(<p></p>)}
      <div className="my-10" >
      <header className="my-10 text-center mx-10">
        <h1 className="text-3xl">Astronomy picture of the day is...</h1>
        <div className='my-5'>Galaxy's name:<br></br>
          <p className='font-bold underline'>{title}</p>
           <br></br><p className='mx-5'>{txt}</p></div>
          <img className='my-6 mx-28 rounded shadow-2xl' alt='DailyGalaxyImage' src={photo}></img>
        <p>Image date:<p className='font-bold'>{date}</p></p>
      </header>
    </div>
    <nav className='flex justify-evenly py-2 bg-black'>
    <div className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><a href='https://github.com/SoySkate'>MyGithub</a></div>
    <div className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><a href='https://play.google.com/store/apps/details?id=com.noctuasoftware.stellarium_free&hl=es&gl=US&pli=1'>Stellarium App</a></div>
    <div className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><a href='https://www.nasa.gov/content/goddard/what-did-hubble-see-on-your-birthday'>Daily Hubble photo's</a></div>   
  </nav>
</div>
  );
}

export default App;
