import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};

const currentTime = localStorage.getItem('videoplayer-current-time');
if(currentTime) {
    player.setCurrentTime(currentTime)
};

player.on('timeupdate', throttle(onPlay, 1000));