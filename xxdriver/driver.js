// Compiled after everything else - driver.

var global = new Global();

g.clear()
result = g.getFonts();
console.log("V1");

let config = new Config();
global.config = config;
global.face = new RomanFace(global.config);
global.effect = new RotateEffect(global.face, 0, false);
let nowDate = new Date();
console.log('initial draw');
global.effect.draw(nowDate);
var secondInterval = setInterval(
    function() { g.reset(); global.effect.draw(new Date()); }, 500);
setWatch(() => {
    global.face = new BasicFace(global.config);
    global.effect = new RotateEffect(global.face, 3, false);
    setTimeout(() => global.effect = new RotateEffect(global.face, 0, false),
               1000);
}, BTN1);
global.config.drawStatus("Hello!");

