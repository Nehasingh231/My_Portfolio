import { Outlet } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import './index.scss';
import Particle from '../Particles/Particle';

const Layout = () => {
    return (
        <div className='App'>
        <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Particle/>
        <Outlet />
 
       <span  className='tags bottom-tags'>
       &lt;body&gt;
       <br />
      <span className='bottom-tag-html'>&lt;/html&gt;</span>
       </span>
        </div>
        <Sidebar />
        </div>
    )
   
}

export default Layout;