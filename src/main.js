/**
 * Created by DreamerKing on 2017/10/16.
 */
var constrainers = {
    video: {
        mandatory: {
            minWidth: 640,
            minHeight: 480
        }
    },
    audio: true
};

if(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    constrainers = {
        video: {
            mandatory: {
                minWidth: 480,
                minHeight: 320,
                maxWidth: 1024,
                maxHeight: 768
            }
        },
        audio: true
    };
}

function hasUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia );
}

if(hasUserMedia()) {

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia(constrainers, function(stream) {
        console.log(stream,"what");
        var audio = document.querySelector('audio');
        video.src = window.URL.createObjectURL(stream);
    }, function (error) {
        console.log(error, "error");
    })
} else {
    alert("暂不支持WebRTC");
}