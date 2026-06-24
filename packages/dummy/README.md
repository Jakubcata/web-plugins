# @jakubcata/dummy

Just a dummy react component

## Installation

`npm install @jakubcata/dummy`

Import styles from plugin entry point.

```css
/* style.css */

@import '@jacobii/dummy/style';
```

## Basic Usage

```jsx
// Any of your component file, e.g. AppComponent.tsx

import { Dummy } from '@jakubcata/dummy'

function AppComponent() {
    //...
    
    return (
        <div>
            <Dummy dummyText={'Here we go again!'} />
        </div>
    )
}
```