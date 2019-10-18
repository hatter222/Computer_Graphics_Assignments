function drawPixelwiseCircle(canvas) {
    var context = canvas.getContext("2d");
    var img = context.createImageData(200, 200);

    //TODO 1.1a)      Copy the code from Example.js
    //                and modify it to create a 
    //                circle.
 /*for (var r=1; r<=50; r+=2){
    for (var t= 0; t <2*Math.PI   ; t += 0.3) {
        var x = 100 + r*Math.cos(t);
         var y = 100 + r*Math.sin(t);
        var i=4*x+y*4*200;
	    img.data[i] = 0;
		img.data[i + 1] = 255;
		img.data[i + 2] = 0;
		img.data[i + 3] = 255;
    }
}*/

for(var x=0; x<200; x+=1){
    for(var y=0; y<200; y+=1){
    if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=50){
        var i = x*4 + y*4*200;
        img.data[i] = 0;
		img.data[i + 1] = 255;
	    img.data[i + 2] = 0;
	    img.data[i + 3] = 255;
          }
    }
}

    context.putImageData(img, 0, 0);
}

function drawContourCircle(canvas) {
    var context = canvas.getContext("2d");
    var img = context.createImageData(200, 200);

    //TODO 1.1b)      Copy your code from above
    //                and extend it to receive a
    //                contour around the circle.
    for(var x=0; x<200; x+=1){
        for(var y=0; y<200; y+=1){
        if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=45){
            var i = x*4 + y*4*200;
            img.data[i] = 0;
            img.data[i + 1] = 255;
            img.data[i + 2] = 0;
            img.data[i + 3] = 255;
              }
        if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=55 && Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))>45){
                var i = x*4 + y*4*200;
                img.data[i] = 0;
                img.data[i + 1] = 127;
                img.data[i + 2] = 0;
                img.data[i + 3] = 255;
                  }
        }
    }


    context.putImageData(img, 0, 0);
}

function drawSmoothCircle(canvas) {
    var context = canvas.getContext("2d");
    var img = context.createImageData(200, 200);

    //TODO 1.1c)      Copy your code from above
    //                and extend it to get rid
    //                of the aliasing effects at
    //                the border.
    for(var x=0; x<200; x+=1){
        for(var y=0; y<200; y+=1){
        if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=45){
            var i = x*4 + y*4*200;
            img.data[i] = 0;
            img.data[i + 1] = 255;
            img.data[i + 2] = 0;
            img.data[i + 3] = 255;
              }
        if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=55 && Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))>45){
                var i = x*4 + y*4*200;
                img.data[i] = 0;
                img.data[i + 1] = 127;
                img.data[i + 2] = 0;
                img.data[i + 3] = 255;
                }
        if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=45 && Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))>=44){
                 var i = x*4 + y*4*200;
                img.data[i] = 0;
                img.data[i + 1] = 191;
                img.data[i + 2] = 0;
                img.data[i + 3] = 255;
          }
        /*if(Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))<=56 && Math.sqrt(Math.pow((x-100),2) + Math.pow((y-100),2))>=55){
            var i = x*4 + y*4*200;
           img.data[i] = 0;
           img.data[i + 1] = 255;
           img.data[i + 2] = 0;
           img.data[i + 3] = 255;
     }*/
        }
    }


    context.putImageData(img, 0, 0);
}
