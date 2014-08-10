varying vec2 vUv;

attribute vec2 aVec2;
attribute vec3 aVec3;
attribute vec4 aVec4;
attribute float aFloat;
attribute int aInt[2];
attribute mat3 aMat3;
attribute mat4 aMat4;

uniform vec2 resolution;

void main() {
	vUv = uv;  
	gl_Position = projectionMatrix *
	            modelViewMatrix *
	            vec4(position,1.0);
}
