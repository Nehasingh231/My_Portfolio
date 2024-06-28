import React from 'react';
// import lapyimage from '../../assets/images/aboutImage.png';
import project1 from '../../assets/images/project1.jpg'
import project2 from '../../assets/images/project2.jpg'
import project3 from '../../assets/images/project3.jpg'
const Project = () => {
  return (
    <div className="work-list">
    <div className="work">
        <div className="layer">
        <img src={project1}  alt='laptop'/>
         <h3>Social Media App</h3>
            <p>The app connects you to the talented people around the world.
                Download it from play store.</p>    
        </div>
    </div>
    <div className="work">
        <div className="layer">
        <img src={project2}  alt='laptop'/>
            <h3>Music App</h3>
               <p>The app connects you to the talented people around the world.
                   Download it from play store.</p>   
                 
           </div>
    </div> 
    <div className="work">
        <div className="layer">
        <img className='img' src={project3}  alt='laptop'/>
            <h3>Online shopping App</h3>
               <p>The app connects you to the talented people around the world.
                   Download it from play store.</p>   
                
           </div>
    </div>

    </div>

  )
}
 
export default Project