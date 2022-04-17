// Compiled after everything else - driver.

var global = new Global();

g.clear()
result = g.getFonts();
for (x in result) {
    console.log(result[x]);
}
console.log("WxH =" + g.getWidth() +"x" + g.getHeight());

let config = new Config();
global.config = config;
global.face = new RomanFace(global.config);
global.effect = new RotateEffect(global.face, 2, false);
let nowDate = new Date();
console.log('initial draw');
global.effect.draw(nowDate);
var secondInterval = setInterval(
    function() { g.reset(); global.effect.draw(new Date()); }, 1000);
setWatch(() => {
    global.face = new BasicFace(global.config);
    global.effect = new RotateEffect(global.face, 3, false);
    setTimeout(() => global.effect = new RotateEffect(global.face, 0, false),
               1000);
}, BTN1);

