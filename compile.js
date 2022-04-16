// Compile js files

const fs = require("fs")
const path = require("path")
const FORBIDDEN = [
    "node_modules/",
    "feature_tests/",
    "compile.js" // Don't output yourself!
]
const myArgs = process.argv.slice(2)
if (myArgs.length < 1) {
    throw Error("Please provide an output filename")
}
const outFile = myArgs[0]
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
                // Don't add backup files or anything emacs.
            var thisFile = someFiles[aFile]
                if (thisFile.startsWith('.') || thisFile.includes("~") ||
                    thisFile.startsWith('#')) {
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
            console.log(`Warning ${fullPath} is not stat'able - ${e}`)
        }
    }
    return toAppend
}
    


try {
    console.log('Collecting filenames')
    const toAppend = collectPath(".")
    console.log('Catenating files')
    let outputData = ""
    outputData += '/////////// Start file /////////\n'
    for (appendIdx in toAppend) {
        const fullPath = toAppend[appendIdx]
        const contents = fs.readFileSync(fullPath)
        outputData += contents
    }
    outputData += '/////////// End file /////////\n'
    console.log(`Writing ${outFile}...`)
    fs.writeFileSync(outFile, outputData)
    console.log('Done')
} catch (e) {
    console.log(e)
    throw Error("Oops")
}
