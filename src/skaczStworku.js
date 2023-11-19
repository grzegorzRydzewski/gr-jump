import anime from 'animejs';
import './index.css';



export default function skaczStworku() {
  anime({
    targets: '.stworek',
    translateY: -100,
    easing: 'linear',
    duration: 700,
    direction: 'alternate',
    loop: true

  });
  anime({
    targets: '#lapkaLewa',
    translateX: -100,
    translateY: -100,
    easing: 'linear',
    duration: 700,
    direction: 'alternate',
    loop: true

  });
  anime({
    targets: '#lapkaPrawa',
    translateX: 100,
    translateY: -100,
    easing: 'linear',
    duration: 700,
    direction: 'alternate',
    loop: true

  });
}
