// Compiled after everything else - driver.

var global = new Global();

g.clear()
result = g.getFonts();
console.log("V1");

function renderStats() {
    global.stats.sample();
    global.stats.draw();
}

function clearDisplay() {
    global.config.clearDisplay();
    renderStats();
}

function randomise() {
    global.face = new RomanFace(global.config);
    global.effect = new RotateEffect(global.face, 0, false);
    global.config.drawStatus(global.config.defaultStatusText);
}

let config = new Config();
global.config = config;
global.stats = new Stats(global.config);
global.face = new RomanFace(global.config);
global.effect = new RotateEffect(global.face, 0, false);
let nowDate = new Date();
console.log('initial draw');
randomise();
renderStats();

var secondInterval = setInterval(
    function() { g.reset(); global.effect.draw(new Date()); }, 500);
Bangle.on('tap',
          function(data) {
              if (data.double) {
                  clearDisplay();
                  global.config.drawStatus(Insult(E.hwRand()));
                  global.face = new BasicFace(global.config);
                  global.effect = new RotateEffect(global.face, 0, false);
                  global.isOverridden = true;
                  setTimeout(function() {
                      clearDisplay();
                      global.isOverridden = false;
                      randomise();
                  }, 5000)
              }
          }
         );
var faceChangeInterval = setInterval(
    function() { if (!global.isOverridden) { randomise(); }  } ,
    5000);
var statsChangeInterval = setInterval(
    function() { renderStats(); }, 10000 );

