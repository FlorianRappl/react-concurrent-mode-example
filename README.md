# React Concurrent Example

This simple app loads (way too many) pseudo photos via the JSON PlaceHolder API. While this all seems rather smooth and nicely working out in React using the concurrent mode, the normal blocking mode has some problems.

## General Info

The simple example is of artificial nature. Obviously, you should not load 5k items from a remote source. Things like infinite scroll, pagination, or in general virtualization would be much better. Nevertheless, the 5k items are still a good representation of many problems we face in larger (React) applications.

The demonstration works with the current (April 2020) available implementation of React's novel concurrent mode. Changes here are expected, in which case the demonstration will mostly stop working.

## Running

To run this example just clone the repository and execute:

```js
npm i && npm start
```

This will start the development server.

## Legacy Mode

To enable the legacy mode you should change the contents of the `src/index.jsx` file.

Notably, just change:

```diff
-const isLegacy = false;
+const isLegacy = true;
```

You will see the rendering actually blocking user interaction for a significant time.
