# rrw's bangle.js app(s)

This repo is a bit unformed at the moment - turns out my Mac doesn't have
BTLE, so I can't use the actual bangle and am cutting + pasting in the
emulator.

It'll get better when (if?) I finish it and make it a proper app..

I'd really like to use typescript here, but I'm scared that if I let
the ts compiler at it, I'll blow my code size limits.

## Using

```
npm run compile
```

will compile code ready for uploading into `build/output.js` for uploading with the Web IDE.

## Testing

This is going to be horrid, since the IDE provides no way to run autotests, the program uses the Espruino libraries a lot, and I don't have time to mock the data. Best I can do is to use the `compile.js` script to pull out common code (marked by a filename with `Testable` or `Test` at the end) and run it in node.


