let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 1,
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

function playVideo(videoId) {
    player.loadVideoById(videoId);
}