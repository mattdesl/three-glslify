//This test unfortunately needs to be run through beefy
//or browserify... can't automate it until glslify works
//in Node :(

var THREE = require('three')
var shader = require('./')(THREE)

var glslify = require('glslify')
var source = glslify({
    vertex: './test.vert',
    fragment: './test.frag',
    sourceOnly: true
})

var result = shader(source, {
    colors: ['uCol']
})

console.log(result)
console.log(result.uniforms)
console.log(result.attributes)
