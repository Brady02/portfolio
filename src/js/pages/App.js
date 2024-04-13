import '../../scss/App.scss';
import gsap from "gsap";
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
    //const namePageRef = useRef(null);
    //useEffect(() => {
      //const el = namePageRef.current;
      //gsap.fromTo(el, {width: "100%" }, {width: "0%", ScrollTrigger: {
        //trigger: el,
        ///pin: true,
        //start: 'top center',
        //end: 'bottom center',
        //scrub: true,
        //markers: true
      //}})
    //}, []);
    //ref = {namePageRef}

    useEffect(() => {
      
      gsap.to(".name-page", {
        width: 0,
        immediateRender: false,
        ScrollTrigger: {
          trigger: ".title-page",
          pin: true,
          scrub: true,
          start: "bottom center",
        }
      })
    })
  return (
    <div className="App">

        <div className="name-page" >
          <div className='name-cont'>
            <p className='hi'>Hi i'm</p>
            <h1 className="name">BRADY</h1>
            <h1 className="name">WARREN</h1>
          </div>
        </div>

        <div className="title-page">
          <div className='title-cont'>
            <p className='hi2'>I'm a</p>
            <h1 className="title">SOFTWARE</h1>
            <h1 className="title">DEVELOPER</h1>
          </div>
        </div>
    </div>
  );
}

export default App;
