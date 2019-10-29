"use strict";

///////////////////////////
//// global variables  ////
///////////////////////////

// pixel scale
var pixelScale = 10;

// line
var line = new Line(new Point(10 / pixelScale, 10 / pixelScale),
                    new Point(180 / pixelScale, 180 / pixelScale),
                    new Color(0, 0, 0));

//////////////
//// gui  ////
//////////////

// event listener for gui
function onChangePixelScale(value) {
    // rescale line
    var s = pixelScale / value;
    line.startPoint.x = line.startPoint.x * s;
    line.startPoint.y = line.startPoint.y * s;
    line.endPoint.x = line.endPoint.x * s;
    line.endPoint.y = line.endPoint.y * s;
    // set new scaling factor
    pixelScale = value;
    // rerender scene
    RenderCanvas1();
}

function onMouseDownCanvas1(e) {
    var rect = document.getElementById("canvas1").getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log("onMouseDownCanvas1: " + x + " " + y);

    // set new points
    if (e.ctrlKey) {
        line.endPoint.x = x / pixelScale;
        line.endPoint.y = y / pixelScale;
    }
    else {
        line.startPoint.x = x / pixelScale;
        line.startPoint.y = y / pixelScale;
    }

    // rerender image
    RenderCanvas1();
}


//////////////////////////////
//// bresenham algorithm  ////
//////////////////////////////

function bresenham(image, line) {
    // ensure integer coordinates
    var x0 = Math.floor(line.startPoint.x);
    var y0 = Math.floor(line.startPoint.y);
    var x1 = Math.floor(line.endPoint.x);
    var y1 = Math.floor(line.endPoint.y);

    // TODO 2.1     Write code to draw a line
    //              between the start point and
    //              the end point. To make things
    //              easier, there are some comments
    //              on what to do next: 

    // compute deltas and update directions
    
    var del_x = x1-x0;
    var del_y = y1-y0;
    var m = del_y/del_x;
    var D = (2*del_y) - del_x;

    var x = x0;
    var y = y0;
    var end = x0;
       
    // set initial coordinates
  
    if(x0 > x1){
        x = x1;
        y = y1;
        end = x0;
    }
    else {
        x =x0;
        y= y0;
        end = x1;
    }
  

  

    // start loop to set nPixels 
    var nPixels = Math.abs(x1-x0); // think about how many pixels need to be set - zero is not correct ;)
    for (var i = 0; i < nPixels; ++i) {
        // set pixel using the helper function setPixelS()
		   var pixel = new Point(x,y); 
               setPixelS(image,pixel,new Color(255,0,0), pixelScale);
        // update error
        x = x + 1;
		
		//Needs to be modified and checked!
        if(D < 0)
        {
        D = D + 2 * dy;
        }
        else
        {
        y = y + 1;
        D = D + 2 * (del_y - del_x);
        }

        // update coordinates depending on the error


    }
}


//////////////////////////
//// render function  ////
//////////////////////////

function RenderCanvas1() {
    // get canvas handle
    var context = document.getElementById("canvas1").getContext("2d");
    var canvas = context.createImageData(200, 200);

    // clear canvas
    clearImage(canvas, new Color(255, 255, 255));

    // draw line
    bresenham(canvas, line);

    // draw start and end point with different colors
    setPixelS(canvas, line.startPoint, new Color(255, 0, 0), pixelScale);
    setPixelS(canvas, line.endPoint, new Color(0, 255, 0), pixelScale);

    // show image
    context.putImageData(canvas, 0, 0);
}


function setupBresenham(canvas) {
    // execute rendering
    RenderCanvas1();
    // add event listener
    document.getElementById("canvas1").addEventListener('mousedown', onMouseDownCanvas1, false);
}