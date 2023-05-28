import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function onPlay({ seconds }) {
  localStorage.setItem('video-current-time', JSON.stringify(seconds));
}

player.on('timeupdate', throttle(onPlay, 800));

let seconds = JSON.parse(localStorage.getItem('video-current-time'));
if (seconds) {
  player.setCurrentTime(seconds);
}
