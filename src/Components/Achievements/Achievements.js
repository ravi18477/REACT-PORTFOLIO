import React from 'react';
import  './style.css';

function Achievements() {
  return (
    <div>
        <div className="Acihievehead">
            <h3>Achievements</h3>
        </div>
        <div className='line'><hr /></div>
        <div className="achievementcontent">
            
            <ul>
                <li><div>Qualified GATE 2023</div></li>
                <li>
                    <div>3 star coder at Codechef</div>
                </li>
                <li>
                    <div>4 Star coder(C++) at Hackerrank</div>
                </li>
                <li>
                    <div>Winner of Techno Parliament</div>
                </li>
                <li>
                    <div>Coordinator of Codehunt Techachme bhopal</div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Achievements
