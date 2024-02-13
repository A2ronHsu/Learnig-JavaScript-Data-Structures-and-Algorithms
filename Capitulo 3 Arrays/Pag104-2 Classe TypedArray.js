//no JavaScript se pode armazenar qualquer tipo de dado numa unica array, uma vez que js não é fortemente tipado como o C e Java. Mas podemos definir um tipo especifico para um array usando a classe TypedArray.
//https://web.dev/articles/webgl-typed-arrays

// Typed array views work pretty much like normal arrays.
var f64a = new Float64Array(8);
f64a[0] = 10;
f64a[1] = 20;
f64a[2] = f64a[0] + f64a[1];
console.log(f64a);


// Floating point arrays.
var f64 = new Float64Array(8);
var f32 = new Float32Array(16);
console.log(f64);
console.log(f32);

// Signed integer arrays.
var i32 = new Int32Array(16);
var i16 = new Int16Array(32);
var i8 = new Int8Array(64);
console.log(i32);
console.log(i16);
console.log(i8);



// Unsigned integer arrays.
var u32 = new Uint32Array(16);
var u16 = new Uint16Array(32);
var u8 = new Uint8Array(64);
var pixels = new Uint8ClampedArray(64);
console.log(u32);
console.log(u16);
console.log(u8);
console.log(pixels);