import { useState } from 'react';
import SidebarImg from './images/sidebar.png';

export default function Sidebar(){
    const [sidebar , setsidebar] = useState(true);

    function change(){
        setsidebar(sidebar=>!sidebar)
    }
    
    return (
        <div>
        <button onClick={change}><img src={SidebarImg} alt="" className="w-10 h-6 m-2" /></button>
        </div>
    )
}