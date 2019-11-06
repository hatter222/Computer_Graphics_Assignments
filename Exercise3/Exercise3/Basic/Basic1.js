function webGLStart(canvas) {

//Get HTML5 canvas
    var gl = canvas.getContext("experimental-webgl");
    if (!gl) alert("Could not initialise WebGL, sorry :-(\nTo enable WebGL support in your browser, go to about:config and skip the warning.\nSearch for webgl.disabled and set its value to false.");

    gl.viewport(0, 0, canvas.width, canvas.height);

//define center and radius of circle
    var c = [0.3, 0.2];
    var r = 0.7;

//define number of triangle slices required for creating the circle
    var slices = 100;

//declare vertex and index matrices
    var vertices = [];
    var indices = [];
	var colors = [];


    // TODO 3.1)	Replace the following code so that
    //              the vertices and indices to not describe
    //              a triangle but a circle around the center
    //              c with radius r. Use triangles to describe 
    //              the circle's geometry. The number of
    //              triangles is stored in the variable slices.

//counter for indices
	i=1;
	
//define center as 0th index
    vertices.push(0.3);
    vertices.push(0.2);

//define 1st index
	vertices.push(r*Math.sin(0));
    vertices.push(r*Math.cos(0));

//define color for the 1st 2 points
	colors.push(0);
	colors.push(1);
	colors.push(0);
	
	colors.push(0);
	colors.push(1);
	colors.push(0);
	
//run loop from 0 to 2*pi to record vertex and indices for the triangles
for(var t=0;t<=2*Math.PI;t=t+Math.PI/slices){

//define coordinates for subsequent triangle vertex
    vertices.push(r*Math.sin(t+Math.PI/slices));
    vertices.push(r*Math.cos(t+Math.PI/slices));

//refer to previously defined index to save space
    indices.push(0);
    indices.push(i);
    indices.push(i+1);
	
	colors.push(0);
	colors.push(1);
	colors.push(0);
	
	i=i+1;
}

//create vertex buffer
    var vbo = gl.createBuffer();
	
//bind buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

//pass vertex data
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
//initialize index buffer
	var ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

//initialise color buffer
/*  
  var cbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
*/
	
//Create vertex and fragment shader object
    var vertexShader = getShader(gl, "shader-vs");
    var fragmentShader = getShader(gl, "shader-fs");

// Create a shader program object to store the combined shader program
    var shaderProgram = gl.createProgram();
	
//Attach vertex shader
    gl.attachShader(shaderProgram, vertexShader);
	
//Attach fragment shader
    gl.attachShader(shaderProgram, fragmentShader);
	
//Link both programs
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

// Use the combined shader program object
    gl.useProgram(shaderProgram);

// Bind vertex and index buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
 
//Get attribute location
    var attrVertexPosition = gl.getAttribLocation(shaderProgram, "vVertex");
    gl.enableVertexAttribArray(attrVertexPosition);
	
// point an attribute to the currently bound VBO
    gl.vertexAttribPointer(attrVertexPosition, 2, gl.FLOAT, false, 8, 0);

/*
	gl.bindBuffer(gl.ARRAY_BUFFER, cbo);

    var attrVertexColor =  gl.getAttribLocation(shaderProgram, "vColor");;
	gl.enableVertexAttribArray(attrVertexColor);
	gl.vertexAttribPointer(attrVertexColor, 3, gl.FLOAT, false, 0, 0);
*/

//Draw the triangles
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

}
