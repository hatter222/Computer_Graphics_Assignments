precision mediump float;


// TODO 3.2a)	Define the varying variable again
//				using the same name to enable 
//				communication between vertex and
//				fragment shader.

varying vec3 c;

void main(void)
{

	float epsilon = .01;
	
	gl_FragColor = vec4(c,1.0);
	

	// TODO 3.2a)	Give each pixel the interpolated
	//				triangle color. Change the following line.
	
	
	// TODO 3.2b)	Use the color as barycentric coordinates
	//				and discard all pixels not considered 
	//				edges (farther away from an edge than 
	//				epsilon). Use the GLSL mechanism 'discard'.


	//The point is within the triangle (A, B, C) if 0≤u,v,w≤1.
	// If any one of the coordinates is less than zero or greater than one, the point is outside the triangle.
	// If any of them is zero, P is on one of the lines joining the vertices of the triangle.

		if(c.x<=epsilon || c.y<=epsilon || c.z <=epsilon) 
		{gl_FragColor= vec4(c,1.0);}
		else
		{discard;}
	
	
}