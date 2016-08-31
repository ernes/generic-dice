# Examples of Generic-Dice component

## Build the examples dist bundle

```
npm run examples
```

To run these examples, open index.html in any browser after building the dist bundle with `npm run examples` from the root of this repository.

## Run the examples

Although it's possible to just run the index.html in the dist directory in the browser, it's a better experience to use a simple host like http-server to run locally while you are developing.

```
npm install -g http-server
cd examples/dist
http-server .
```

Browse to http://localhost:8080 or whichever port was free at the time you run the `http-server .` command.
