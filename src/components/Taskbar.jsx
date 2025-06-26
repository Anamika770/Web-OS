import chromeIcon from '../assets/icons/chrome.png';
import windowIcon from '../assets/icons/window.png';
import fileExplorerIcon from '../assets/icons/file-explorer.png';
//      
const Taskbar = () => {
  return (
    <div className='bg-gray-800 min-w-screen min-h-[6vh] flex justify-center items-center'>
        <div className="flex items-center justify-between gap-2">
            <img src={windowIcon} alt=""  className='w-[50px] h-[50px]'/>
            <img src={fileExplorerIcon} alt=""  className='w-[30px] h-[30px]'/>
            <img src={chromeIcon} alt=""  className='w-[30px] h-[30px]'/>
            {/* <img src={chromeIcon} alt=""  className='w-[30px] h-[30px]'/>
            <img src={chromeIcon} alt=""  className='w-[30px] h-[30px]'/> */}
        </div>
    </div>
  )
}

export default Taskbar