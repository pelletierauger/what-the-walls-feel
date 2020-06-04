if (1 == 0) {

    // mustard-like when blended with plantsSofter using Scene.prototype.display()
    // or blendyCavern.display()
    mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    float t = time * 0.0025;
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(1.05, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
//     col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.r *= 1.5;
    gl_FragColor.g *= 1.2;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    gl_FragColor.r *= 1.5;
    gl_FragColor.b *= 1.2 - gl_FragColor.g * 0.75;
    // gl_FragColor.a = 0.5;
    gl_FragColor.rgb = gl_FragColor.bgr * 0.76;
}
// endGLSL
`;
    mistyProgram2.init();

    // burned
    mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    float t = time * 0.0025;
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(1.05, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
//     col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 1.1 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.r *= 0.05;
    gl_FragColor.g *= 0.2;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//     gl_FragColor.r *= 1.5;
//     gl_FragColor.b *= 2.2 - gl_FragColor.g * 0.75;
    // gl_FragColor.a = 0.5;
    gl_FragColor.rgb = gl_FragColor.brg * 4.96;
}
// endGLSL
`;
    mistyProgram2.init();


    // mustard-like and blending itself with blendyCavern.display()
    // using the mix() function.
    mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    float t = time * 0.0025;
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(1.05, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
//     col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    vec3 wilder = gl_FragColor.rgb;
    wilder -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    wilder.b = min(max(wilder.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.r *= 1.5;
    wilder.g *= 1.2;
    wilder.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    wilder.r *= 1.5;
    wilder.b *= 1.2 - wilder.g * 0.75;
    // gl_FragColor.a = 0.5;
    wilder.rgb = wilder.bgr * 0.76;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, wilder, 0.58);
}
// endGLSL
`;
mistyProgram2.init();



        // mustard-like and blending itself with blendyCavern.display()
    // using the mix() function.
    mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float resolution;
uniform float time;
uniform float alpha;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
#define GammaCorrection(color, gamma)                               pow(color, 1.0 / gamma)
// 
/*
** Levels control (input (+gamma), output)
** Details: https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
*/
// 
#define LevelsControlInputRange(color, minInput, maxInput)              min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
#define LevelsControlInput(color, minInput, gamma, maxInput)                GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
#define LevelsControlOutputRange(color, minOutput, maxOutput)           mix(vec3(minOutput), vec3(maxOutput), color)
#define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput)   LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
// The hue shifting functions are taken from there:
// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786
// https://stackoverflow.com/questions/9234724/how-to-change-hue-of-a-texture-with-glsl
vec3 hueShift(vec3 color, float hue) {
const vec3 k = vec3(0.57735, 0.57735, 0.57735);
float cosAngle = cos(hue);
return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}
vec3 hueShift2( vec3 color, float hueAdjust ){
    const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
    const vec3  kRGBToI      = vec3 (0.596, -0.275, -0.321);
    const vec3  kRGBToQ      = vec3 (0.212, -0.523, 0.311);
    const vec3  kYIQToR     = vec3 (1.0, 0.956, 0.621);
    const vec3  kYIQToG     = vec3 (1.0, -0.272, -0.647);
    const vec3  kYIQToB     = vec3 (1.0, -1.107, 1.704);
    // Convert to YIQ
    float   YPrime  = dot (color, kRGBToYPrime);
    float   I       = dot (color, kRGBToI);
    float   Q       = dot (color, kRGBToQ);
    // Calculate the hue and chroma
    float   hue     = atan (Q, I);
    float   chroma  = sqrt (I * I + Q * Q);
    // Make the user's adjustments
    hue += hueAdjust;
    // Convert back to YIQ
    Q = chroma * sin (hue);
    I = chroma * cos (hue);
    // Convert back to RGB
    vec3    yIQ   = vec3 (YPrime, I, Q);
    return vec3( dot (yIQ, kYIQToR), dot (yIQ, kYIQToG), dot (yIQ, kYIQToB) );
}
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float plot(vec2 s, float p) {
  float largeur = abs(sin(time * 0.01)) * 0.1 + 0.1;
  return smoothstep(p - largeur, p, s.y) - smoothstep(p, p + largeur, s.y);
}
float circ(float size, float vx, float vy, vec2 center) {
//   float x = center.x * (1.0 + sin(time * 20.) * 0.5);
//   float y = center.y * (1.0 + cos(time * 20.) * 0.5);
  vec2 v = center - vec2(vx, vy);
  float d = 1.0 / length(v * size);
  return d;
}
float Circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return c;
}
vec3 CircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(uv - p); 
    float c = smoothstep(r, r - blur, d); 
    return col * c;
}
vec3 InvCircleRGB(vec2 uv, vec2 p, float r, float blur, vec3 col) {
    float d = length(p - uv); 
    float c = smoothstep(r - blur, r, d); 
    return col * c;
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    const float PI = 3.1415926535897932384626433832795;
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
    if (resolution == 1.0) {
        uv *= 0.5;
    }
    float t = time * 0.0025;
    vec2 p = vec2(10.0, 1.004);
    vec2 p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(1.05, 0.4, 2.0));
    col.r *= sin(length(uv - p2) * (6. + sin(1. * 20.) * 0.01));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(11.0, 0.1) + tan(uv.y * 1.)) - (p * 1.1 + sin(uv.x * 13.));
//     newV += cos(sin(uv * 15.));
    newV += cos(sin((uv * vec2(40.0, 4.0)) * 150.0 * 2.0));
//     col *= sin(atan(newV.x * uv.y * 100.1, newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    vec3 wilder = gl_FragColor.rgb;
    wilder -= max(col, -0.9) * 0.5;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    wilder.b = min(max(wilder.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.r *= 1.5;
    wilder.g *= 1.2;
    wilder.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    wilder.r *= 1.5;
    wilder.b *= 1.2 - wilder.g * 0.75;
    // gl_FragColor.a = 0.5;
    wilder.rgb = wilder.bgr * 0.76;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, wilder, 0.58);
//     gl_FragColor.rgb = GammaCorrection(LevelsControlInputRange(gl_FragColor.rgb, 0.1, 0.9), 1.0);
//     gl_FragColor.rgb = pow(gl_FragColor.rgb, 1.0 / vec3(1.2));
    gl_FragColor.rgb = hueShift2(gl_FragColor.rgb, PI * 0.5);
    gl_FragColor.rgb = LevelsControlInput(gl_FragColor.rgb, 0.075, vec3(1.1), 0.95);
//     vec3 rrr = gl_FragColor.rgb;
//     vec3 hsv = rgb2hsv(rrr);
//     hsv.r += 0.5;
//     gl_FragColor.rgb = hsv2rgb(hsv);
}
// endGLSL
`;
mistyProgram2.init();


}