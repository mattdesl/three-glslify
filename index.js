var types = require('./types')

module.exports = function(glShader, opts) {
    opts = opts||{}
    
    var tUniforms = types( glShader.uniforms, opts.colors )
    var tAttribs = types( glShader.attributes, opts.colors )
        
    //clear the attribute arrays
    for (var k in tAttribs) {
        tAttribs[k].value = []
    }

    return {
        vertexShader: glShader.vertex,
        fragmentShader: glShader.fragment,
        uniforms: tUniforms,
        attributes: tAttribs
    }
}