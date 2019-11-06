import React from 'react';
import out from './image/out.jfif';

export default class About  extends React.Component{
    render(){
return(
<div>
<h2 className="sect"> About</h2>
   <div className="row">
    <div className="col-md-6">
<img src={out} alt={'about'} className="about-img"/>
    </div>
    <div className="col-md-6">
    <p class="about-content">
          <strong>TechSmart</strong> Solutions is a global firm that offers a huge variety of on-demand talent and
          complete workforce solutions. We cover all aspects of talent management. We can provide you with a variety of
          precision based and time-honored staffing solutions.
        </p>
    </div>
    </div>
</div>
        )
            

        
    }
}