import React from 'react';
import './StworekShow.css';
import Stworek from './stworek.js';

class StworekShow extends React.Component {

  //stworek1Anim;
  //stworek1Ref;
  constructor(props) {
    super(props);
    this.state = {stworekBlueTask : 'idle'};
    this.jumpStworek = this.jumpStworek.bind(this);
  }
  componentDidMount () {
    //this.stworek1Anim = new StworekAnim();
    //this.stworek1Anim.standStill();
  }
  stopStworek() {

  }
  jumpStworek() {
      this.setState({stworekBlueTask : 'jump'});
      
  }
  render(){
    return  (
      <div className="StworekShow">
          <Stworek className="stworek1"  task={this.state.stworekBlueTask} />
          <div className="buttons">

            <button onClick={this.jumpStworek}> Skacz </button>
          </div>
      </div>

    );
  }
}
/*
class StworekAnim extends React.Component {
  svgEl;
  standAnimTl;
  waveAnimTl;
  jumpAnimTl;
  isActing;



  constructor(props) {
    super(props)

    //this.svg = <StworekSVG className='stworek' />;
    this.isActing = false;

    this.standAnimTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true});
    this.jumpAnimTl = gsap.timeline({ repeat: 1, yoyo: true, paused: true,
      onStart:() => {this.stopStand();this.isActing = true;},
      onComplete: () => {this.resumeStand();this.isActing = false}});
  }

  standStill() {
    let tlL = gsap.timeline({repeat: 0, yoyo: true});
    let tlP = gsap.timeline({repeat: 0, yoyo: true});

    this.standAnimTl.add(tlL,0);
    this.standAnimTl.add(tlP,0);

    tlL.set("#lapkaLewa", {display: 'block'});
    tlL.to("#lapkaLewa", {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: "#jumpPathL",
        align: "#jumpPathL",
        start: 0.2,
        end: 0.4,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],
      },
    });
    tlP.set("#lapkaPrawa", {display: 'block'});
    tlP.to("#lapkaPrawa", {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: "#jumpPathP",
        align: "#jumpPathP",
        start: 0.2,
        end: 0.4,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],
      },
    });
  this.standAnimTl.add(gsap.to("#korpus", {
      autoAlpha: 0.7,
//      attr:{  y: 30 },
      ease: 'sine.in',
      scaleX: 1.02,
      scaleY: 0.97,
      duration: 1,
      transformOrigin : "bottom"
    }),0);
    this.standAnimTl.add(gsap.to("#oczka", {
    //  attr:{  },
      ease: 'power2.inOut',
      y: 6,
      scaleY: 0.95,
      duration: 1,
    }),0);
    this.standAnimTl.restart();
  }
  stopStand() {
    this.standAnimTl.pause();

  }
  resumeStand() {
    /*document.querySelector("#lapkaLewa").style.display = "none";
    document.querySelector("#lapkaPrawa").style.display = "none";
    document.querySelector("#otwartaLewa").style.display = "none";
    document.querySelector("#otwartaPrawa").style.display = "none";*/
//    this.standAnimTl.restart();
/*  }
  wave(howmany) {
    let waveAnimTl = gsap.timeline({ repeat: howmany});
    waveAnimTl.add(gsap.to(".stworek", {
      rotation: 30,
      transformOrigin:"50% 75%",
      y: -10,
      duration: 2,
    }),0);
  }
  jump() {
    if (this.isActing === false) {
    this.jumpAnimTl.timeScale(2.5);
    //jumpAnimTl
    let tlL = gsap.timeline({repeat: 0, yoyo: true});
    let tlP = gsap.timeline({repeat: 0, yoyo: true});

    this.jumpAnimTl.add(tlL,0);
    this.jumpAnimTl.add(tlP,0);



    tlL.set("#lapkaLewa", {display: 'block'});
    tlL.set("#otwartaLewa", {display: 'none'});
    tlL.to("#lapkaLewa", {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: "#jumpPathL",
        align: "#jumpPathL",
        start: 0,
        end: 0.6,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],
      },
    });
    tlL.set("#lapkaLewa", {display: 'none'});
    tlL.set("#otwartaLewa", {display: 'block'});

    tlL.to("#otwartaLewa", {
      duration: 1,
      ease: 'sine.out',
      motionPath:{
        path: '#jumpPathL',
        align: '#jumpPathL',
        start: 0.7,
        end: 1,
        autoRotate: 80,
        alignOrigin: [0.5, 0.8]
      },
    });
    tlP.set("#lapkaPrawa", {display: 'block'});
    tlP.set("#otwartaPrawa", {display: 'none'});
    tlP.to("#lapkaPrawa", {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: '#jumpPathP',
        align: '#jumpPathP',
        start: 0,
        end: 0.6,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],

      }
    });
    tlP.set("#lapkaPrawa", {display: 'none'});
    tlP.set("#otwartaPrawa", {display: 'block'});
    tlP.to("#otwartaPrawa", {
      duration: 1,
      ease: 'sine.out',
      motionPath:{
        path: '#jumpPathP',
        align: '#jumpPathP',
        start: 0.7,
        end: 1,
        autoRotate: 100,
        alignOrigin: [0.5, 0.8]
      },
    });
    this.jumpAnimTl.add(gsap.to(".stworek", {
      y: -150 ,
      duration: 2,
    }),0);

    this.jumpAnimTl.add(gsap.to("#korpus", {
      //attr:{ height: 770, y: -15 },
      autoAlpha: 0.7,
      scaleY: 0.95,
      scaleX: 1.02,
      ease: 'sine.in',
      duration: 2,
      transformOrigin : "bottom"
    }),0);
    this.jumpAnimTl.add(gsap.to("#oczka", {
      //attr:{ height: 770, y: -15 },
      ease: 'sine.out',
      y: 30,
      scaleY: 0.9,
      duration: 2,
      transformOrigin : "bottom"

    }),0);

    this.jumpAnimTl.restart();

  }
}

render(){
  return (
    <div className="stworekWrapper">


    </div>
  );
}
}
*/
export default StworekShow;
