
import Desktop from '../components/Desktop';
import Taskbar from '../components/Taskbar';

const Home = () => {
  // document.designMode = "on";
  // document.getElementById("myP").contentEditable = "true";
  return (
    <div className='flex flex-col justify-between h-[100vh] overflow-hidden'>
      <Desktop/>
      <Taskbar />
    </div>
  )
}

export default Home