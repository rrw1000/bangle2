// Compiled after everything else - driver.
// I really want to make this an object, but bangles are small and keeping this
// global is easy ...

EMULATE_RANDOMNESS = true

var global = new Global();

// Just in case ..
g.setRotation(0, false);
g.clear()
gEmulatedRandomNumber = 0;
console.log("V2");


function renderStats() {
    global.stats.sample();
    global.stats.draw();
}

function clearDisplay() {
    global.config.clearDisplay();
    renderStats();
}

function randomise() {
    var randomNumber;
    if (EMULATE_RANDOMNESS) {
        gEmulatedRandomNumber += 1;
        randomNumber = gEmulatedRandomNumber;
    } else {
        randomNumber = E.hwRand();
    }
    // Make it +ve to avoid nasty issues with operators applied to -ve
    // numbers.
    if (randomNumber < 0) {
        randomNumber = -randomNumber;
    }
    // What face do we want?
    const faceSelector = (randomNumber%2);
    // Take 2 bits
    randomNumber = randomNumber >> 2;
    if (faceSelector == 0) {
        global.face = new RomanFace(global.config);
    } else if (faceSelector == 1) {
        global.face = new UTCFace(global.config, randomNumber%22);
        // Used another 5 bits
        randomNumber = randomNumber >> 5;
    }
    let newlyRotated = false;
    if (randomNumber%2 == 1) {
        newlyRotated = true;
        global.effect = new RotateEffect(global.face, 2, false);
    } else {
        global.effect = new RotateEffect(global.face, 0, false);
    }
    if (global.rotated != newlyRotated) {
        console.log("Rotation change");
        clearDisplay();
        global.rotated = newlyRotated;
    }
    global.face.drawStatus();
}


let config = new Config();
global.config = config;
global.stats = new Stats(global.config);
global.face = new RomanFace(global.config);
global.effect = new RotateEffect(global.face, 0, false);
global.rotated = false
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

