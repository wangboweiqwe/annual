import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Carousel, WingBlank } from 'antd-mobile';
import Swiper from 'swiper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
    }
  }
  componentDidMount() {
    var mySwiper = new Swiper(this.wrapper, {
      direction: 'vertical',
      loop: true,
    });
  }
  render() {
    return (
      <div ref={(wrapper) => { this.wrapper = wrapper; }} className="swiper-container">
        {/* <Carousel
          autoplay={false}
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dots={false}
          vertical
        > */}
        <div class="swiper-wrapper">
          <div
            className="home"
          >
            <img
              src="http://www.mrpyq.com/page/annual2018/static/img/three_year.70e3e48.png"
              className="home-ladder" />
            <img
              src="http://www.mrpyq.com/page/annual2018/static/img/logo.c00f9ed.png"
              className="home-title" />
            <img
              src="http://www.mrpyq.com/page/annual2018/static/img/bottomimg.33bbe86.gif"
              className="home-arrow" />
          </div>
          <div>
            <div data-v-8b831e1c="" className="animated data fadeIn">
              <p data-v-8b831e1c="">这三年</p>
              <p data-v-8b831e1c="">我在名朋世界里入住了
                <span className="animated big loginday opashow" data-v-8b831e1c="">0</span>天
              </p>
              <p data-v-8b831e1c="" className="animated date wobble">不久前</p>
              <p data-v-8b831e1c="">你入住了名朋</p></div>
              <img
                src="http://www.mrpyq.com/page/annual2018/static/img/city.27080f1.png"
                className="city mymove1" />
          </div>
          <h2 style={{ width: '100%' }}>good</h2>
        </div>
        {/* </ Carousel> */}
      </div>
    );
  }
};

export default App;
