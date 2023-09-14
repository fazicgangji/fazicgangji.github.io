import React from "react";
import '../index.css';

import Carousel from '../carousel'
import { HomePage } from './homepage';
import { SecondMessage } from './secondpagemessage';
import { ThirdMessage } from './thirdpagemessage';

export class HomeCarousel extends React.Component{
    constructor () {
        super()
        this.state = {
          axis: 'y'
        }
      }
    render(){
        return(
            <Carousel loop auto axis={this.state.axis} className="custom-class">
              <div className='home-page'>
                <HomePage />
              </div>
              <div className='home-page'>
                <SecondMessage />
              </div>
              <div className='home-page'>
                <ThirdMessage />
              </div>
            </Carousel>
        );
    }
}