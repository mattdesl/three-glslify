uniform int uInt;
uniform float uFloat;

uniform vec2 uVec2;
uniform vec3 uVec3;
uniform vec4 uVec4;

uniform vec3 uCol;
uniform vec3 uCol2;

uniform mat4 uMat4;

uniform sampler2D uTex;
uniform samplerCube uTexCube;

uniform int uIntArray[ 5 ];
uniform ivec3 uIntArray3[ 2 ];
uniform ivec3 uInt3;

uniform float uFloatArray[ 5 ];
uniform vec3 uFloatArray3[ 2 ];

uniform vec2 uVec2Array[ 2 ];
uniform vec3 uVec3Array[ 2 ];
uniform vec4 uVec4Array[ 2 ];

uniform mat4 uMat4Array[ 2 ];

uniform sampler2D uTexArray[ 2 ];

//make sure to have a resolution uniform set to the screen size
uniform vec2 resolution;
uniform sampler2D tDiffuse;

void main() {
    gl_FragColor = vec4(1.0);
}
