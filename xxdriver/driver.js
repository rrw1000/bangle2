// Compiled after everything else - driver.

var global = new Global();

g.clear()
result = g.getFonts();
console.log("V1");

function renderStats() {
    global.stats.sample();
    global.stats.draw();
}

function randomise() {
    global.face = new RomanFace(global.config);
    global.effect = new RotateEffect(global.face, 0, false);
}

let config = new Config();
global.config = config;
global.stats = new Stats(global.config);
global.face = new RomanFace(global.config);
global.effect = new RotateEffect(global.face, 0, false);
let nowDate = new Date();
console.log('initial draw');
global.effect.draw(nowDate);
var secondInterval = setInterval(
    function() { g.reset(); global.effect.draw(new Date()); }, 500);
Bangle.on('tap',
          function(data) {
              if (data.double) {
                  console.log("Still down!");
                  global.face = new BasicFace(global.config);
                  global.effect = new RotateEffect(global.face, 0, false);
                  global.isOverridden = true;
                  setTimeout(function() {
                      console.log("Back to encrypted");
                      global.isOverridden = false;
                      randomise();
                  }, 5000)
              }
          }
         );
var faceChangeInterval = setInterval(
    function() { console.log("Random"); if (!global.isOverridden) { randomise(); }  } ,
    5000);
renderStats();
var statsChangeInterval = setInterval(
    function() { renderStats(); }, 10000 );
global.config.drawStatus("Hello!");

