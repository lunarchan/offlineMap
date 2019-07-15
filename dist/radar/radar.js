function draw() {
    var canvas = document.getElementById("the-canvas");
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(120, 120);

    ctx.rotate(0.05);

    for (var i = 50; i < 150; i += 25) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(10,100,10)';
        ctx.setLineDash([2, 2]);
        ctx.arc(0, 0, i, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    for (var i = 0; i < 80; i += 10) {
        ctx.fillStyle = "green";
        ctx.fillRect(i, i, 10, 10);
    }

    ctx.translate(-120, -120);

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);