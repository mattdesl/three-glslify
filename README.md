# three-glslify

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

#### DEPRECATED !

This bridge is no longer necessary in `glslify@2.x` and above. See [three-glslify-example](https://github.com/mattdesl/three-glslify-example) for a full example of using ThreeJS + glslify.

---

A helper to turn [glslify](https://github.com/stackgl/glslify) shader into a ThreeJS shader object. 

Typical example:

```js
var THREE = require('three')

//inline our shader code
var glslify = require('glslify')
var source = glslify({
    vertex: './foo.vert',
    fragment: './foo.frag',
    sourceOnly: true
})

//create a shader that ThreeJS will recognize
var createShader = require('three-glslify')(THREE)
var myShader = createShader(source)

//we can now use it in ShaderMaterial or EffectComposer
var pass = new THREE.ShaderPass( myShader )
effectComposer.addPass(pass)
```

The returned `myShader` object looks like this, with new instances of Texture, Vector2, etc. based on the uniform type. Attributes start with empty arrays. 

```js
{
	vertexShader: '... source ...',
	fragmentShader: '... source ...',
	uniforms: {
		u_tex0: { type: 't', value: new THREE.Texture() },
		... etc
	},
	attributes: {
		displacement: { type: 'f', value: [] }
	}
}
```

## Usage

[![NPM](https://nodei.co/npm/three-glslify.png)](https://nodei.co/npm/three-glslify/)

### `createShader(source, options)`

Creates a shader with the given source (from glslify, using `sourceOnly`) and options.

Options:

- `colors` an array of uniform names that should be mapped to THREE.Color typed, `'c'`. Otherwise these will just be plain THREE.Vector3 types, `v3`

## Gotchas

Since ThreeJS release cycles are unpredictable and don't use semantic versioning, this module may break with newer versions of ThreeJS. It currently works with three 0.68.0 (r68). Send issues or PRs if you find versioning problems.

ThreeJS distinguishes between an array of THREE.Vector3 objects, and a flattened `vec3` type represented by floats (`v3v` vs `fv`). This module only sees the `vec3` array type, and assumes they are to be represented by an array of THREE.Vector3 elements. Same with `ivec3`, `vec4`, etc. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/three-glslify/blob/master/LICENSE.md) for details.
