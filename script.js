let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '', // Add a default videoId or leave empty
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
    console.log('Player is ready');
}

// Make playVideo function global and add a check for player
window.playVideo = function(videoId) {
    if (player && player.loadVideoById) {
        player.loadVideoById(videoId);
    } else {
        console.error('Player not ready yet');
    }
}