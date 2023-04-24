import React from 'react';
import './style.css';

function Education() {
  return (
    <div className='Education'>
      <div className="educationhead">
        <h3>Education</h3>
      </div>
      <div className='line'><hr /></div>
      <div className="educationcontent">
        <ul>
          <li><div className="deshead">
            <div className='desschool'>B-TECH(CSE-AIML)</div><div className='desyear'>2020-Present</div>
            </div>
            <div><p>Oriental Institute of Science and Technology, Bhopal</p></div>
            <div><p>8.45 CGPA</p></div>
          </li>
          <li><div className="deshead">
            <div className='desschool'>High School (12th)</div><div className='desyear'>2019-2020</div>
            </div>
            <div><p>Crescent Public School, Bokaro(CBSE)</p></div>
            <div><p>93%</p></div>
          </li>
          <li><div className="deshead">
            <div className='desschool'>Matriculation (10th)</div><div className='desyear' >2017-2018</div>
            </div>
            <div><p>Crescent Public School, Bokaro(CBSE)</p></div>
            <div><p>78%</p></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Education