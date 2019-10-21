function drawArcCircle(canvas) {
    var context = canvas.getContext("2d");

    //TODO 1.2)       Use the arc() function to
    //                rasterize the two circles
    //                from Task 1.1.
context.beginPath();
context.arc(60,60, 50, 0, 2 * Math.PI);
context.fillStyle = 'rgb(0,255,0)'
context.fill();



context.beginPath();
context.arc(140,140, 55, 0, 2 * Math.PI);
context.fillStyle = 'rgb(0,127,0)'
context.fill();


context.beginPath();
context.arc(140,140, 45, 0, 2 * Math.PI);
context.fillStyle = 'rgb(0,255,0)'
context.fill();





}
