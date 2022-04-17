// Compiled after everything else - driver.

g.clear()
result = g.getFonts();
for (x in result) {
    console.log(result[x]);
}
console.log("WxH =" + g.getWidth() +"x" + g.getHeight());

let config = new Config();
face = new RomanFace(config);
effect = new RotateEffect(face, 2, false);
let nowDate = new Date();
console.log('initial draw');
effect.draw(nowDate);
var secondInterval = setInterval(
    function() { g.reset(); effect.draw(new Date()); }, 1000);

