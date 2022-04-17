// Compiled after everything else - driver.

g.clear()
result = g.getFonts();
for (x in result) {
    console.log(result[x]);
}
console.log("WxH =" + g.getWidth() +"x" + g.getHeight());

let config = new Config();
face = new UTCFace(config);
let nowDate = new Date();
console.log('initial draw');
face.draw(nowDate);
var secondInterval = setInterval(
    function() { console.log('X'); g.reset(); face.draw(new Date()); }, 1000);

