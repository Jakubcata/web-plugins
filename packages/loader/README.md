# @jacobii/loader

A simple and customizable React Loader component for indicating loading states in your app.

## Installation

`npm install @jacobii/loader`

Import styles from plugin entry point.

```css
/* style.css */

@import '@jacobii/loader/style';
```

## Basic Usage

```jsx
// Any of your component file, e.g. AppComponent.tsx

import { Loader } from "@jakubcata/loader";

function App() {
  return (
    <Loader loading={true}>
      {/* This content will be shown when loading is false */}
      <div>Content loaded!</div>
    </Loader>
  );
}
```
