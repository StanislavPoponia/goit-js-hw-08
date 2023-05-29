import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(saveTimeOnPlayer, 800));

function saveTimeOnPlayer(event) {
  const playerTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, playerTime);
}
const saveTimeStorage = localStorage.getItem(STORAGE_KEY);

if (saveTimeStorage) {
  player.setCurrentTime(saveTimeStorage);
}