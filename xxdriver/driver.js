// Compiled after everything else - driver.

g.clear()
let config = new Config();
face = new BasicFace(config);
let nowDate = new Date();
face.draw(nowDate);
var secondInterval = setInterval(
    function() { face.draw(new Date()); }, 1000);

