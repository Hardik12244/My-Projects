import './App.css'
import But from './components/buttons'
import Web from './components/webinar'
import homeImg from './images/home.png';
import CardImg from './images/card.jpeg';
import settingImg from './images/setting.jpeg';
import UserImg from './images/user.png';
import WebinarImg from './images/webinar.png';
import Sidebar from './components/sidebar';
import MainWebinarImg from './images/MainWebinar.png';
import JoinImg from './images/Join.png';
import RecordingImg from './images/Recording.png';
import BgImg from './images/Bg.png';
import avatarImg from './images/avatar.jpg';
import arrimg from './images/arrows.png';
import bar from './images/bar.png';
import video from './images/video.png';
import bottombar from './images/bottombar.png';
function App() {

  return (
    <>
      <div className='flex grid grid-cols-12 bg-white p-5 h-screen'>
        <div className='bg-white col-span-2'>
          <Sidebar />
          <Web />
          <But label="Home" imgsrc={homeImg} />
          <But label="Webinar" imgsrc={WebinarImg} />
          <But label="Billing" imgsrc={CardImg} />
          <But label="User Management" imgsrc={UserImg} />
          <But label="Settings" imgsrc={settingImg} />
        </div>

        <div className='bg-[#fafafc] col-span-10 flex flex-col '>

          <div className='bg-amber-950 grid-cols-10 h-2/12'>
          <img src={BgImg} alt="" className='w-full h-full' />
          </div>

          <div className='grid grid-cols-11 flex-grow gap-6'>

            <div className='bg-[#fefefe] col-span-3 h-8/12 ml-9 -translate-y-10 rounded-2xl'>
              <div className='flex flex-col items-center mt-10 m-auto gap-1 '>
              <img src={avatarImg} alt="" className='h-40 w-40' />
              <div className='font-bold text-2xl mt-5'>Me</div>
              <div className='text-[#9e9ea0]'>Me123@gmail.com</div>
              <div className='text-[#9e9ea0]'>9990009990</div>
              <div className='text-[#9e9ea0]'>Delhi , India</div>
              </div>
            </div>

            <div className='flex flex-col col-span-5 h-11/12 mt-5'>

              <div className='text-black font-medium mt-3'>Monday 14 October</div>
              <div className='text-[#1c3c69] font-bold text-4xl mt-3'>Good Morning , Me</div>
              
              <div className='bg-[#fefefe] w-full h-10/12 m-auto my-10 rounded-2xl flex flex-col '>
                
          <div className='bg-gray-300 m-5 rounded-xl px-3 py-2 flex justify-between font-semibold text-lg text-gray-800'>
              <div className='text-center'>MONDAY , 25 AUGUST 2025</div>  
              <img src={arrimg} alt="" className='rounded-xl'/> 
          </div>
          <div className='flex ml-3'>
          <div className='flex flex-col mt-5'>
            <div className='text-2xl'>11:30 AM</div>
            <div className='text-[#9e9ea0]'>11:30 AM</div>
          </div>
          <div className='m-3 pb-10'>
            <img src={bar} alt="" />
          </div>
          <div className='mt-5'>
            <div className='flex'>
              Upcoming
              <img src={video} alt="" className='mt-1' />
              </div>
            <div className='text-2xl'>
              Webinar
            </div>
          </div>
          </div>
          {/* <div className='ml-1 '>
            <img src={bottombar} alt="" />
          </div> */}
              </div>
            </div>

            <div className='bg-[#fefefe] col-span-3 h-5/12 mt-31 rounded-2xl mr-5 flex flex-col gap-7 pl-3 pt-3'>
            <div className='flex  '>
            <div><img src={MainWebinarImg} alt="hi" /></div> 
            <div><img src={JoinImg} alt="hi" /></div>
            </div >
            <div className='ml-2'><img src={RecordingImg} alt="hi" /></div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
