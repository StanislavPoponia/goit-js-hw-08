import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const playVideo = new Vimeo(iframe);

playVideo.on('timeupdate', throttle(onSaveTimePlayer, 800));

function onSaveTimePlayer(event) {
  const playerTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, playerTime);
}
const saveTimeVideo = localStorage.getItem(STORAGE_KEY);

if (saveTimeVideo) {
  playVideo.setCurrentTime(saveTimeVideo);
}