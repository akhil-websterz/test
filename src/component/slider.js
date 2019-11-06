import React from 'react';
import Carousel from 'nuka-carousel';
import tech1 from './image/tech1.jpg';
import tech3 from './image/tech3.jfif';
import tech2 from './image/tech2.jpg';
import tech4 from './image/tech4.jpg';
import tech5 from './image/tech5.jpg'; 

export  default class Slider extends 
 
 React.Component{
    render(){
        return(
            <Carousel className="carous">
            <img src={tech5} alt={'tech1'} />
            <img src={tech2} alt={'tech2'} />
            <img src={tech3} alt={'tech3'} />
            <img src={tech4} alt={'tech4'} />
            <img src={tech1} alt={'tech5'} />
            </Carousel>
        )
    }
} 
