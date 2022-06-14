drawPoint = (x,y) => {
    var point = canvas.getContext('2d');
    point.beginPath();
    point.arc(x,y,0.5,0,Math.PI*2,true);
    point.fillStyle = "rgb(0, 0, 255)";
    point.fill();
}

test = () => {
    let canvas = document.getElementById('remote_video');
    for (let i=0; i<100; i++){
        for (let j=0; j<100; j++){
            drawPoint(i*10, j*10)
        }
    } 
}
createDot = () => {
    let zoom_level = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
    let canvasDom = document.createElement('canvas');
    let videoDom = document.getElementById('remote_video');
    canvasDom.id = "canvas";
    let canvaWidth = 640;
    let canvaHeight = 480;
    canvasDom.width = Math.floor(canvaWidth * 1/zoom_level);
    canvasDom.height = Math.floor(canvaHeight * 1/zoom_level);
    canvasDom.left = 0;
    canvasDom.margin = "auto";
    canvasDom.style.position = "absolute";
    console.log(canvasDom)
    console.log(videoDom.width, videoDom.height);
    let wrapper = document.getElementById('wrapper');
    wrapper.appendChild(canvasDom); 

    test();
}

deleteDot = () => {
    let wrapper = document.getElementById('wrapper');
    let canvas = document.getElementById("canvas");
    if (canvas) {
        wrapper.removeChild(canvas)
    }
}


document.addEventListener('keydown', event => {
    if(event.code === 'Escape') {
        deleteDot();
    };
    if(event.code === 'Space') {
        createDot();
    };
});

onload = function() {
    createDot();
};
