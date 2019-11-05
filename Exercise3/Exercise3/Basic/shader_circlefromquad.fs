precision mediump float;


// TODO 3.3)	Define a constant variable (uniform) to 
//              "send" the canvas size to all fragments.

uniform vec2 size;

void main(void)
{ 

	 float smoothMargin = 0.01;  
	 float r = 0.8;         
	 
	 
	 // TODO 3.3)	Map the fragment's coordinate (gl_FragCoord.xy) into 
	 //				the range of [-1,1]. Discard all fragments outside the circle 
	 //				with the radius r. Smooth the circle's edge within 
	 //				[r-smoothMargin, r] by computing an appropriate alpha value.
	 //				Change the following line!gl_FragColor = vec4(1.0, 85.0 / 255.0, 0.0,1.0);

	vec2 uv = (gl_FragCoord.xy/size-0.5) ;
	
	float radius = r/2.0;

	float dist = sqrt(dot(uv,uv));
	if(dist>=radius) {discard ;}
float alpha =clamp(r-smoothMargin,smoothMargin,r);

	
	gl_FragColor = vec4(1.0, 85.0 / 255.0, 0.0,1.0);
	gl_FragColor.a = alpha;
	

	
}