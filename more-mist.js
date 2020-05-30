mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
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
    float t = time * 0.0025;
//     vec2 p2 = vec2(4.0, 0.2) * 0.1;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
//     float r = 0.3;
    vec2 p = vec2(10.0, -1.4);
    float c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(3., 0.4, 2.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(10.0, 0.1) + tan(uv.y * 2.)) - (p * 1.1 + sin(uv.x * 13.));
    newV += cos(sin(uv * 12.));
    col *= sin(atan(newV.x * uv.x * 2., newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
//     gl_FragColor.rgb -= max(col, -0.6) * 0.95;
    gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
//     gl_FragColor.b *= 2.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram2.init();

mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
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
    float t = time * 0.0025;
//     vec2 p2 = vec2(4.0, 0.2) * 0.1;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
//     float r = 0.3;
    vec2 p = vec2(10.0, -1.4);
    float c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(3., 0.4, 2.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(10.0, 0.1) + tan(uv.y * 2.)) - (p * 1.1 + sin(uv.x * 13.));
    newV += cos(sin(uv * 12.));
    col *= sin(atan(newV.x * uv.x * 2., newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
//     gl_FragColor.rgb -= max(col, -0.6) * 0.95;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.b *= 2.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram2.init();

mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
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
    float t = time * 0.0025;
//     vec2 p2 = vec2(4.0, 0.2) * 0.1;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
//     float r = 0.3;
    vec2 p = vec2(10.0, -1.4);
    float c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(3., 0.4, 2.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(10.0, 0.1) + tan(uv.y * 2.)) - (p * 1.1 + sin(uv.x * 13.));
    newV += cos(sin(uv * 12.));
    col *= sin(atan(newV.x * uv.x * 2., newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
//     gl_FragColor.rgb -= max(col, -0.6) * 0.95;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram2.init();

mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
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
    float t = time * 0.0025;
//     vec2 p2 = vec2(4.0, 0.2) * 0.1;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
//     float r = 0.3;
    vec2 p = vec2(10.0, -1.4);
    float c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(3., 0.4, 2.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(10.0, 0.1) + tan(uv.y * 2.)) - (p * 1.1 + sin(uv.x * 13.));
    newV += cos(sin(uv * 12.));
    col *= sin(atan(newV.x * uv.x * 2., newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= max(col, -0.6) * 0.95;
//     gl_FragColor.g = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram2.init();

mistyProgram2.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
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
    float t = time * 0.0025;
//     vec2 p2 = vec2(4.0, 0.2) * 0.1;
//     vec3 col = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 1.0, 0.7));
//     vec3 colb = InvCircleRGB(uv, p2, 0.5, 0.2, vec3(1.0, 0.0, 0.0));
//     vec3 col2 = CircleRGB(uv, p2, 0.5, 0.4, vec3(1.0, 0.0, 0.0));
//     float rando = rand(vec2(uv.x, uv.y));
//     float r = 0.3;
    vec2 p = vec2(10.0, -1.4);
    float c = Circle(uv, p, 0.3, 0.1);
    vec2 p2 = vec2(0.1 * sin(t * 100.), 0.1 * cos(t * 100.)) * 0.4;
    vec2 p3 = vec2(0.1 * sin(t * 50.), 0.1 * cos(t * 50.)) * 0.4;
    float siz = sin(t * 100.);
    float siz2 = sin(t * 50.);
    p2 = vec2(0.0, 0.0);
    vec3 col = CircleRGB(uv, p2, 1.9, 0.2, vec3(3., 0.4, 1.0));
    col.r *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.0001));
//     col.g *= sin(length(uv - p) * (6. + sin(1. * 20.) * 0.01));
    vec2 newV = (uv + vec2(10.0, 0.1) + tan(uv.y * 2.)) - (p * 1.1 + sin(uv.x * 13.));
    newV += cos(sin(uv * 22.));
//         newV += tan(cos(uv * 20.) * 0.01);
    col *= sin(atan(newV.x * uv.x * 2., newV.y));
//     col *= sin(sin(atan(newV.x, newV.y) * (sin(t * 100.) * 1.2)) * 1. + sin(t * 10.) * 10.);
    float rando = rand(uv * 101.001) * 0.25 * 0.25 * 0.75;
// //     col.r -= rando * 1.;
//      col.g *= 0.5;
//     gl_FragColor = vec4((col- rando) * 1.0, 1.0);
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb -= max(col, -0.6) * 0.95;
//     gl_FragColor.r = min(max(gl_FragColor.r, col.r - rando), 1.0) - rando * col.r;
    gl_FragColor.b = min(max(gl_FragColor.g, col.r * 0.2 - rando), 1.0);
//     gl_FragColor.rgb += col2 * 0.75;
//     gl_FragColor.rgb += colb * 0.85;
    gl_FragColor.b *= 4.0;
    gl_FragColor.a *= alpha;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//     gl_FragColor.r = gl_FragColor.r * 2.5;
    // gl_FragColor.a = 0.5;
}
// endGLSL
`;
mistyProgram2.init();