import * as React from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
//import { MorphSVGPlugin } from "gsap/MorphSVGPlugin3.min.js";
gsap.registerPlugin(MotionPathPlugin);
//gsap.registerPlugin(MorphSVGPlugin);

export default class Stworek extends React.Component {
  constructor(props, svgRef) {
    super(props);
    this.stworekSVG = React.createRef();
    this.lapkaLewa = React.createRef();
    this.lapkaPrawa = React.createRef();
    this.otwartaLewa = React.createRef();
    this.otwartaPrawa = React.createRef();
    this.jumpPathL = React.createRef();
    this.jumpPathP = React.createRef();
    this.korpus = React.createRef();

    this.isActing = false;
    this.standAnimTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true});
    this.jumpAnimTl = gsap.timeline({ repeat: 1, yoyo: true, paused: true,
      onStart:() => {this.stopStand();this.isActing = true;},
      onComplete: () => {this.resumeStand();this.isActing = false}
    });
  }
  componentDidMount() {
      if ( this.props.task === 'idle' ) {
        this.isActing = false;
        this.standStill();
      }
      else if ( this.props.task === 'jump' )
        this.jump();
  }
  componentDidUpdate(prevProps, prevState) {
    if ( this.props.task === 'idle' && this.props.task !== prevProps.task )
      this.standStill();
    else if ( this.props.task === 'jump' && this.isActing === false ) {
      this.jump();
    }
  }
  standStill() {
    let tlL = gsap.timeline({repeat: 0, yoyo: true});
    let tlP = gsap.timeline({repeat: 0, yoyo: true});

    tlL.set(this.lapkaLewa, {display: 'block'});
    tlL.to(this.lapkaLewa, {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: this.jumpPathL,
        align: this.jumpPathL,
        start: 0.2,
        end: 0.4,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],
      },
    });
    tlP.set(this.lapkaPrawa, {display: 'block'});
    tlP.to(this.lapkaPrawa, {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: this.jumpPathP,
        align: this.jumpPathP,
        start: 0.2,
        end: 0.4,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],
      },
    });
  this.standAnimTl.add(gsap.to(this.korpus, {
      autoAlpha: 0.7,
//      attr:{  y: 30 },
      ease: 'sine.in',
      scaleX: 1.02,
      scaleY: 0.97,
      duration: 1,
      transformOrigin : "bottom"
    }),0);
    this.standAnimTl.add(tlL,0);
    this.standAnimTl.add(tlP,0);

    this.standAnimTl.restart();
  }
  stopStand() {
    this.standAnimTl.pause();

  }
  resumeStand() {
    this.standAnimTl.restart();
  }
  jump() {
    this.jumpAnimTl.timeScale(2.5);
    let tlL = gsap.timeline();
    let tlP = gsap.timeline();

    tlL.set(this.otwartaLewa, {visibility: "hidden"});
    tlP.set(this.otwartaPrawa, {visibility: "hidden"});

    tlL.to(this.lapkaLewa, {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: this.jumpPathL,
        align: this.jumpPathL,
        start: 0,
        end: 0.6,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],
      },
    });
    tlL.set(this.lapkaLewa, {display: 'none'});
    tlL.set(this.otwartaLewa, {visibility: 'visible'});

    tlL.to(this.otwartaLewa, {
      duration: 1,
      ease: 'sine.out',
      motionPath:{
        path: this.jumpPathL,
        align: this.jumpPathL,
        start: 0.7,
        end: 1,
        autoRotate: 80,
        alignOrigin: [0.5, 0.8]
      },
    });


    tlP.set(this.lapkaPrawa, {display: 'block'});
    tlP.set(this.otwartaPrawa, {visibility: "hidden"});
    tlP.to(this.lapkaPrawa, {
      duration: 1,
      ease: 'sine.in',
      motionPath:{
        path: this.jumpPathP,
        align: this.jumpPathP,
        start: 0,
        end: 0.6,
        autoRotate: 90,
        alignOrigin: [0.5, 0.3],

      }
    });
    tlP.set(this.lapkaPrawa, {display: 'none'});
    tlP.set(this.otwartaPrawa, {visibility: "visible"});
    tlP.to(this.otwartaPrawa, {
      duration: 1,
      ease: 'sine.out',
      motionPath:{
        path: this.jumpPathP,
        align: this.jumpPathP,
        start: 0.7,
        end: 1,
        autoRotate: 100,
        alignOrigin: [0.5, 0.8]
      },
    });
    this.jumpAnimTl.add(gsap.to(this.stworekSVG, {
      y: -150 ,
      duration: 2,
    }),0);
    this.jumpAnimTl.add(gsap.to(this.korpus, {
      //attr:{ height: 770, y: -15 },
      autoAlpha: 0.7,
      scaleY: 0.95,
      scaleX: 1.02,
      ease: 'sine.in',
      duration: 2,
      transformOrigin : "bottom"
    }),0);
    this.jumpAnimTl.add(tlL,0);
    this.jumpAnimTl.add(tlP,0);
    this.jumpAnimTl.restart();
  }

  render() {
    return (
      <svg
      ref={svg => this.stworekSVG = svg}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 763.48 974"
      {...this.props}
    >
      <defs>
        <clipPath id="clip-path" transform="translate(76.97 150)">
          <ellipse
            id="powiekaP"
            cx={401.97}
            cy={223.66}
            rx={86.82}
            ry={80}
            fill="none"
          />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(76.97 150)">
          <ellipse
            id="powiekaL"
            cx={207.65}
            cy={224.38}
            rx={86.82}
            ry={80}
            fill="none"
          />
        </clipPath>
        <clipPath id="clip-path-3" transform="translate(76.97 150)">
          <path
            d="M493 337.36a312.54 312.54 0 01-370.3 5.7q-2.88-2.06-5.7-4.17V489.5l376-5z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Stworek1">
        <image
          id="korpus"
          ref={image => this.korpus = image}
          width={565}
          height={825}
          transform="translate(98.98 149.5)"
          xlinkHref="stworek1.png"
        />
        <g clipPath="url(#clip-path)" id="oczkoPrawe">
          <ellipse
            id="bialkoP"
            cx={479.3}
            cy={374}
            rx={86.82}
            ry={80}
            fill="#fff"
          />
          <circle
            id="galkaP"
            cx={479.48}
            cy={375}
            r={19}
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={7}
          />
        </g>
        <g clipPath="url(#clip-path-2)" id="oczkoLewe">
          <ellipse
            id="bialkoL"
            cx={284.3}
            cy={374}
            rx={86.82}
            ry={80}
            fill="#fff"
          />
          <circle
            id="galkaL"
            cx={284.48}
            cy={374}
            r={19}
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={7}
          />
        </g>
        <g fill="#fff" clipPath="url(#clip-path-3)" id="pyszczek">
          <path
            d="M270.83 438.25L295.38 403a4.86 4.86 0 00-3.48-7.61l-41.19-4.36a4.86 4.86 0 00-5 6.72l16.64 39.57a4.86 4.86 0 008.48.93zM199.2 423.83l31.3-29.37a4.87 4.87 0 00-1.83-8.18l-39.4-12.78a4.86 4.86 0 00-6.27 5.55l8.1 42.15a4.86 4.86 0 008.1 2.63zM130.52 394l36.82-22.07a4.86 4.86 0 00-.06-8.37l-35.8-20.84a4.86 4.86 0 00-7.3 4.09l-1 42.91a4.86 4.86 0 007.34 4.28zM344.74 437.45l16.64-39.56a4.87 4.87 0 00-5-6.72l-41.19 4.36a4.85 4.85 0 00-3.47 7.61l24.55 35.21a4.86 4.86 0 008.47-.9zM416.14 421.45l8.08-42.15a4.86 4.86 0 00-6.28-5.54l-39.4 12.79a4.86 4.86 0 00-1.82 8.17L408 424.08a4.87 4.87 0 008.14-2.63zM483.23 390.67l-.9-42.91a4.87 4.87 0 00-7.3-4.11l-35.85 20.75a4.86 4.86 0 00-.08 8.37l36.76 22.17a4.86 4.86 0 007.37-4.27z"
            transform="translate(76.97 150)"
          />
        </g>
        <g id="lapkaPrawa" ref={g => this.lapkaPrawa = g} >
          <image
            width={152}
            height={174}
            transform="translate(.98 109.5)"
            xlinkHref="stworek2.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(5.98 238.5)"
            xlinkHref="stworek3.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(56.98 248.5)"
            xlinkHref="stworek4.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(106.98 237.5)"
            xlinkHref="stworek5.png"
          />
        </g>
        <g id="lapkaLewa" ref={g => this.lapkaLewa = g}>
          <image
            width={152}
            height={174}
            transform="translate(-.02 109.5)"
            xlinkHref="stworek6.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(104.98 238.5)"
            xlinkHref="stworek7.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(53.98 248.5)"
            xlinkHref="stworek8.png"
          />
          <image
            width={42}
            height={50}
            transform="translate(3.98 238.5)"
            xlinkHref="stworek9.png"
          />
        </g>
        <g id="otwartaPrawa" visibility="hidden"  ref={g => this.otwartaPrawa = g}>
          <image
            width={41}
            height={51}
            transform="translate(106.98 9.5)"
            xlinkHref="stworek10.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(55.98 -.5)"
            xlinkHref="stworek11.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(5.98 9.5)"
            xlinkHref="stworek12.png"
          />
          <image
            width={152}
            height={174}
            transform="translate(.98 15.5)"
            xlinkHref="stworek13.png"
          />
          <image
            width={83}
            height={84}
            transform="translate(36.98 86.5)"
            xlinkHref="stworek14.png"
          />
          <image
            width={22}
            height={40}
            transform="translate(111.98 45.5)"
            xlinkHref="stworek15.png"
          />
          <image
            width={21}
            height={41}
            transform="translate(66.98 39.5)"
            xlinkHref="stworek16.png"
          />
          <image
            width={22}
            height={41}
            transform="translate(15.98 40.5)"
            xlinkHref="stworek17.png"
          />
        </g>
        <g id="otwartaLewa" visibility="hidden" ref={g => this.otwartaLewa = g}>
          <image
            width={41}
            height={51}
            transform="translate(107.98 9.5)"
            xlinkHref="stworek18.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(56.98 -.5)"
            xlinkHref="stworek19.png"
          />
          <image
            width={42}
            height={51}
            transform="translate(6.98 10.5)"
            xlinkHref="stworek20.png"
          />
          <image
            width={152}
            height={174}
            transform="translate(1.98 15.5)"
            xlinkHref="stworek21.png"
          />
          <image
            width={83}
            height={84}
            transform="translate(37.98 86.5)"
            xlinkHref="stworek22.png"
          />
          <image
            width={22}
            height={40}
            transform="translate(112.98 45.5)"
            xlinkHref="stworek23.png"
          />
          <image
            width={21}
            height={41}
            transform="translate(67.98 40.5)"
            xlinkHref="stworek24.png"
          />
          <image
            width={22}
            height={41}
            transform="translate(16.98 40.5)"
            xlinkHref="stworek25.png"
          />
        </g>
        <path
          id="jumpPathL"
          ref={g => this.jumpPathL = g}
          d="M149.51 632c-11-2.31-45.48-11-73-43a131.09 131.09 0 01-25.27-45.14c-3.8-11.74-7.73-26.86-7.73-26.86"
          transform="translate(76.97 150)"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          visibility="hidden"
        />
        <path
          id="jumpPathP"
          ref={g => this.jumpPathP = g}
          d="M448.76 632.34c11-2.31 45.48-11 73-43A131 131 0 00547 544.2c3.8-11.74 7.74-26.86 7.74-26.86"
          transform="translate(76.97 150)"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          visibility="hidden"
        />
      </g>
    </svg>
    );
  }
}
//const ForwardRef = React.forwardRef(SvgStworek);
//export default ForwardRef;
