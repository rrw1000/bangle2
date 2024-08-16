# rrw's bangle.js app(s)

This repo is a bit unformed at the moment - turns out my Mac doesn't have
BTLE, so I can't use the actual bangle and am cutting + pasting in the
emulator.

It'll get better when (if?) I finish it and make it a proper app..

I'd really like to use typescript here, but I'm scared that if I let
the ts compiler at it, I'll blow my code size limits.

## Web Bluetooth on Linux

To enable web bluetooth on Linux you need to enable some experimental stuff in chrome - instructions are here:
https://www.espruino.com/Quick+Start+BLE#puckjs . This worked for me out of the box on Ubuntu 20.04 / Chrome 102.0.5005.61 .

## Using

```
npm run compile
```

will compile code ready for uploading into `build/output.js` for uploading with the Web IDE.

## Testing

This is rather horrid. We use jest, and rely on it to tactically ignore
modules we don't test that use Espruino-only APIs.

We use `typeof` to check for `module` and hope that Espruino will 
constant-fold these out - if it doesn't, then one day the `compile.js` 
script may have to remove them itself.

`compile.js` has been taught to exclude `.test.js` files from its
compiles.

```
npm run test
```

will run the tests in the usual way.

## The graphics are wrong

I'm currently using the emulator, so not paying too much attention to 
screen layout... 

## Connecting via the command line on OS X

I can do this (no guarantees you can!) via the `espruino` command line tool:

```sh
$ npm i -g espruino
$ echo Now turn bluetooth off and back on again in case someone else has the device locked.
$ espruino --list 
$ echo You should now have a list including "Bangle"
$ espruino -d Bangle
```

Do not attempt to use the `-p` option - it doesn't work on my machine for some reason. The machine will pick up the first bluetooth device it sees after you turn bluetooth on, so if you are using a dongle, turn bt off, insert dongle, turn bt on and we should be using it.

## Icons

This was generated with <a target="_blank" href="https://icons8.com/icon/A3c04Fnghx1E/watch">Watch</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> , and converted per https://www.espruino.com/Bangle.js+First+App. The magic setting is "Optimal 4 bit" or your icon won't show up.


