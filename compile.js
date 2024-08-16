// Compile js files

const autogen = require('./static/autogen.js')
const fs = require("fs")
const path = require("path")
const FORBIDDEN = [
  "node_modules/",
  "static/",
  "feature_tests/",
  "compile.js", // Don't output yourself!
  "run.js", // or the run script!
  "upload.js", // or the upload script
  "jest.config.js", // Or the jest configuration.
  "build/"  // ... or anything in the build directory
]
const myArgs = process.argv.slice(2)
if (myArgs.length < 2) {
    throw Error("Syntax: compile.js [debug|release] [output filename]")
}
const buildType = myArgs[0]
let substParams = { }
if (buildType == "debug") {
  console.log("debug build .. ");
  substParams["EMULATE_RANDOMNESS"] = "true";
  substParams["FIXED_FACE"] = "false";
  substParams["FACE_CHANGE_MS"] = "5000";
  substParams["STATS_CHANGE_MS"] = "10000";
  substParams["INSULT_INTERVAL_MS"] = "5000";
} else {
  console.log("production build .. ");
  substParams["EMULATE_RANDOMNESS"] = "false";
  substParams["FIXED_FACE"] = "false";
  substParams["FACE_CHANGE_MS"] = "120000";
  substParams["STATS_CHANGE_MS"] = "20000";
  substParams["INSULT_INTERVAL_MS"] = "10000";
}
const outFile = myArgs[1]

// Substitute substParams into dataToProcess
function processContents(substParams, dataToProcess) {
  const variableRegex = /@@@([^@]*)@@@/g;
  return dataToProcess.toString().replaceAll(variableRegex,
                                             (match, p) => {
                                               console.log(`Substituting  ${p}`);
                                               return `${substParams[p]} /* ${p} */`;
                                             });
}

function collectPath(dirName) {
    var toAppend = [ ]
    const someFiles = fs.readdirSync(dirName)
    for (aFile in someFiles) {
        const fullPath = path.join(dirName, someFiles[aFile])
        try {
            if (fs.statSync(fullPath).isDirectory()) {
                // Recurse
                toAppend = toAppend.concat(collectPath(fullPath))
            } else if (fullPath.endsWith('.js')) {
                let addThis = true
                var thisFile = someFiles[aFile]
                // Don't add backup files or anything emacs generates.
                // Don't add .test.js files - they are jest tests.
                if (thisFile.startsWith('.') || thisFile.includes("~") ||
                    thisFile.startsWith('#') || thisFile.endsWith('.test.js')) {
                    addThis = false
                }
                for (elem in FORBIDDEN) {
                    if (fullPath.startsWith(FORBIDDEN[elem])) {
                        addThis = false
                        break
                    }
                }
                if (addThis) { 
                    toAppend.push(fullPath)
                }
            }
        } catch (e) {
            // Probably statSync failed because emacs generates
            // unstat()able files, apparently. Hey ho. Skip.
            if (!someFiles[aFile].startsWith('.')) {
                console.log(`Warning ${fullPath} is not stat'able - ${e}`)
            }
        }
    }
    return toAppend
}


function GenRomans() {
    var output = "const COMPILER_ROMANS = [ \"0\","
    // Emit 60, because we sometimes get there momentarily.
    for (let i = 1; i< 61; ++i) {
        output += "\"" + autogen.ToRoman(i) + "\""
        if (i < 60) {
            output += ","
        }
    }
    output += "];"
    return output
}

try {
    console.log('Collecting filenames')
    const toAppend = collectPath(".")
    console.log('Catenating files')
    let outputData = ""
    outputData += '/////////// Constants //////////\n'
    outputData += GenRomans()
    outputData += "\n"
  outputData += '/////////// Start file /////////\n'
  for (appendIdx in toAppend) {
    const fullPath = toAppend[appendIdx]
    outputData += `////// Including ${fullPath}\n`;
    const contents = fs.readFileSync(fullPath)
    const processedContents = processContents(substParams,contents);
    outputData += processedContents
  }
    outputData += '/////////// End file /////////\n'
    console.log(`Writing ${outFile}...`)
    // Create directory if it doesn't exist
    {
        let dName = path.dirname(outFile);
        if (!fs.existsSync(dName)) {
            fs.mkdirSync(dName, { recursive: true })
        }
    }
    fs.writeFileSync(outFile, outputData)
    console.log('Done')
} catch (e) {
    console.log(e)
    throw Error("Oops")
}
