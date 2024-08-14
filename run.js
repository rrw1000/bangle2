const child_process = require("child_process");
const process = require('process');
const util = require('node:util');

async function runOrDie(thing_to_run) {
  // Pretty horrid, but we have to use external processes for minify etc. anyway.
  console.log('>>', thing_to_run);
  const do_exec = util.promisify(child_process.exec);
  const { error, stdout, stderr } = await do_exec(thing_to_run);
  console.log(stdout);
  console.error(stderr);
  if (error) {
    console.log("Failed to compile . ");
    console.error(error);
    process.exit(1);
  }

}

async function doRun() {
  await runOrDie("npm run compile");
  await runOrDie("npm run minify");
  await runOrDie("espruino -d bangle build/watchme.js")
}

doRun();

