import React, { Component } from 'react';
import './App.css';
// import { Carousel, WingBlank } from 'antd-mobile';
// import Swiper from 'swiper';
import Achievement from './Achievement';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
    }
  }
  componentDidMount() {
    new window.Swiper(this.wrapper, {
      direction: 'vertical',
      loop: true,
      on:{
        init: function(){
          window.swiperAnimateCache(this); //隐藏动画元素 
          window.swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          window.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        } 
      }
    });
  }
  render() {
    const fadeIn = {
      'swiper-animate-effect':"fadeIn",'swiper-animate-duration':"0.5s"
    }
    return (
      <div ref={(wrapper) => { this.wrapper = wrapper; }} className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container">
              <img
                src="images/three_year.png"
                className="home-ladder" />
              <img
                src="images/logo.png"
                className="home-title" />
              <img
                src="images/bottomimg.gif"
                className="bottomimg" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="first-date ani" {...fadeIn}>
                <p className="ani" {...fadeIn}>这三年</p>
                <p>
                  <span className="ani" {...fadeIn}>
                    我在名朋世界里入住了
                  </span>
                  <span className="big normal ani" {...fadeIn} swiper-animate-delay="1s">0</span>
                  <span className="ani" {...fadeIn}>
                    天
                  </span>
                </p>
                <p
                  className="ani date"
                  swiper-animate-effect="rollIn"
                  swiper-animate-duration="0.5s"
                  swiper-animate-delay="2.2s"
                >不久前</p>
                <p className="ani" {...fadeIn}>你入住了名朋</p>
              </div>
              <img
                src="images/city.png"
                className="city mymove1" />
                <img
                  {...fadeIn}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAABACAYAAABsrOVnAAAAAXNSR0IArs4c6QAABLFJREFUaAXNmluIG1UYx893dpO0UlrbuptdmEnS1oq4VgUVFB+6iD7ogyJaH8QLFEsFy4JQUQRl8UGoPhRfpBQqVPEOfVJRkfZBZd2HIthWFET3JjOTrNbdWps5yczn902y6+TW7iXZfAeScz/nl/+c79wmSpFDb1uafclO+659xg9LLp7flhUNSnpOMKDxy3cKB4UxBkSl7hINqrX6hgFBqWHRoL19G8cJ8l/SdAjdHf1SYTXAOYMA3yIqMFgSq6pmBQHhJPsI6l72JboKqO75ogKH90mErGEquvZM0bHQ5HO31GQIiUSKVljwc/YxDO4XwlaDsQgKCj6r5jxYU0JIhGamikPMrTNeuUDWvyG1LpGDzb9PLuRJ8P9XFCaKZP+fMpRvyo9IgIszLIJGiaA/YR9QPRovJCG8+OgZBtFabzyVl/j4axQFmLlEekZGJe3x14BGjxjwI/YB8ckoLuSrATTZn2aDYuu/yRTs24RwqgZQgNMlreBdBgzLaq9YUAajjdTb7AOox9jAONxt16AoA6UGp84R5DgibjJ5/XC3Ibn/pqCcAUofYx9DfJr9bruWoIme9R8CwDyh7pawo2oJCn2/XKDVoKJqEDzXbUVrVqZ6GHRyOQPlX2nrHyR7dQ76Jp36MmsVb6koA8DgxARBnkCFSROEB9YKqlk/lwXlClrrw1FFxP2It17VrJG1SLsiaCI9OUZT1fd0QbHV9wr71gKqWR9XBOVKqPRrlcr4opQFoNmPidLoMm2cD39Fzz7YslAHM5akKPevQb0ScYT4AuaHNnSQqWnTSwZNpKe/pMX/O2rlGhPOjzRtrYOJSwZlhh7UL0csqA7i+dzVHeRqaHpZoInByVO0CThJ8+rmkl8ebWitgwmXXZma9eu71i5K/4E+qBL65tTWqZ+alWt32rIU5c5TAzNn6PbvCJ0AerGEb7YbqK3t4Zy1xXesWZ6ufM96qK2Nt2hs2YpyO7Bp5i/QEBkWhurwWkxXKwJl2ET/HUfpvuo0BbN+MP86p4l1tFrd6Du2TwZGL4Cyd3cSdMWKMlRqYPosTVevkmFBoMJjnRwCqwJl2GR6x6FoCNB1IA2BNzhNrFsYAtEs4GT2iAVlMOPYz0agrjVfLGy/TjQsKftBBdb+sd371lWP0bhySb1xH63JP9PFxS7jwpF4nriw/2fmBpqu/qkq+5I4wDgQL6sEGzCs8TJPxPPEhY1jHaiqakpe5h5xgHEg38scqsLOSbprjTNGYTIqoJngvSrs3yUvu+I/L7TV6utJ6ZINaeV6ivyP+QozxOCrUsHaXV9OTBxxTw9tXo5HyjrWRRqzYt9i06uhUV10raMLBmY8+xkxStaDRGO2amAMXHTstxCHe+vLiYnTbPA4DYVLEaxrncIL1/aJgasHMbP27fQfgT8qsLZL4Qfqy8Tjyz4uxyuvNoyF7KAfBO/TwXuY26J97TvJVGIEtvw2t9q2216fx23RzYzQqfZiZdxa076XbXgT01VF47+6mN++E0JznI410aJAd7JjGvTzifQU33fJcjyF0SZmP41Xt6ou0sp2AnEoKYu0SsOHRN/JjEbbRdf6WiRkHArzuQF/Nnc9p/0HnD334xCp584AAAAASUVORK5CYII="
                  className="ani connection"
                  swiper-animate-delay="4s"
                />
                <p
                  {...fadeIn}                
                  className="ani tishi"
                  swiper-animate-delay="4s"
                >很荣幸成为名朋世界的一员</p>
                <p className="playdays">
                  <span className="ani" {...fadeIn}>签到天数</span>
                  <span className="big normal ani" {...fadeIn} swiper-animate-delay="2.8s">0</span>
                  <span className="ani" {...fadeIn}>天</span>
                </p>
                <img
                  src="images/bottomimg.gif"
                  className="bottomimg" />
            </div>
          </div>
          <div className="swiper-slide">
            <Achievement />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
