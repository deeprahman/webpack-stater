// export const app =
//   () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
//   and an optimized production build.`
import $ from 'jquery';
import {megaMenu as m} from '@/js/megamenu';

export class MyClass{
  
  constructor(){
    this.a = "Class";
  }

  init(){
    alert("The init method");
  }
}

$.fn.megaMenu =m;
  // export const app = new MyClass();
$(".mega-menu").megaMenu({
        // menuBehaviour: "mouseover",
        // stickyHeader:false,
        // caret:true,
        // highlighter:false,
        caretArrows: [{
          // up:"fa fa-angle-up",
          // down:"fa fa-angle-down",
          upUrl: "https://cdn1.iconfinder.com/data/icons/outline-17/16/caret-up-512.png",
          downUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEX///9ERER6eno+Pj44ODg/Pz81NTUyMjKtra3d3d3v7+/IyMjg4OBaWlr7+/tXV1eQkJBycnJISEguLi6Li4tsbGxPT0/Ly8vu7u6wsLCTk5O+vr4hISFRUVH/OnzXAAADLUlEQVR4nO3ci1LiQBCF4RES0IAooFzc9f1fcy3Lddy1GZMw3T2T+r8nSFcIh9MDhAAAAAAAAAAAAAAAAAAAAAAAAICRzttZKbZnlQk3h2ZehuawUZkwrJc3ZViudQYM4XbhPdu7xa3WgCFs597TvZlv9QYMnfd07zrFCcPR/1FcHjUHDOGxcR6wedIdMGweWtcB2weloIjufG9ic6c9oHNkaAZF5BgZqkERdX6v04VqUERukaEdFNGLz11sXqwGDJt7j8ho79WDIlp7vJ8u1BqF5Nb+UVyaBEVkHhlGQRGdjAe8uTkZTxhWto/iYmU9oHHLaB7tBwzh1S4y2lePAS0XU3qrp7Sz1aO40FmP9jCziYz5zGvA0Nk8ia1Ro5Ac9wYD7s0ahcQgMnyC4pN+yzBtFBL1xZTF6ilNeTFls3pKU20Z5o1ConuW4RgU0Urv09vSoVFI1BZThqunNK3IcA+KaK3z0Wbv1CgkKosp69VTmkLLcGwUktMu+4Q789VTWvbIKCUooswtw7lRiLIef7cP3uMIsrYM/0YhydgySmgUkmwto4hGIcm2mPJcPaWt8nx62xcXFFGWllFMo5DkaBkFNQpJhsgoMyiiq1tGWY1CcmVkFBsUUbe75lFsd8UGRXTV8bfHYfZwV7SMEhuFZHTLKLJRSEYff3sdZg83MjLKD4po1GKqsNVTWjdmMVVDUEQjWkbJjULyNDQy1H9Hkd3AltHee1/wYHfD3mzmhTcKyaDFVKmrp7QBLaOCRiEZsJgqd/WU1vsso7wzir56toxaGoWkV2RUGBRRr99l2P6OIrceLaOmRiH5MTIqDYrop8VUFauntB8WU3WsntKSLaO+RiE5XH6dtgfvi8tiffkmNlUHRXSxZdTZKCQXIqP6oIgufcm2+qCIxMVUbaunNKFl1NwoBN+Pvws/zB7u22KqxtVT2n+RMZ2giJ6/3sX5s/flKPg3MiYUFNGXljGFRiH5jIyJBUX09z+mDP7rycvH8Xc9h9nDvS+mal89pb21jAk1Ckm3m8DqKW31e6JBEf3yvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPX+AOpkK+wFenxFAAAAAElFTkSuQmCC"
        }],
        highlightColor:"skyblue",
        animation:true,
        animationClass:"animated fadeIn",
        followingHighlighter:true,
        // textHighlighter: true,
        // textHighlighterColor:"skyblue",
      });