# @jakubcata/hooks

Plugin with useful hooks for Jakubcata web applications.

## Installation

```console
npm install @jakubcata/hooks
```

<br/>

---

# Hook useBem

Hook for creating css classes with bem naming convention.

## Basic Usage

Hook useBem accepts one required argument: the base classname of the parent.

```jsx
import { useBem } from '@jakubcata/hooks'

function App() {
    const { bem, base, modifier } = useBem('app'); // Pass the parent base className as argument
    
    return (
        <div className={bem()}> {/* Will return base classname 'app' */}
            <div className={bem('child')}> {/* Will return 'app__child' classname */}
                ...
            </div>
        </div>
    )
}
```

## Methods

### bem(name?: string | Record<string / boolean>)
Base method.

```js
bem() // Without argument, returns base
bem('child') // With string paassed, returns 'base__child'
bem({
    'child': true,
    'child--blue': false
}) // With object passed, will go trough each key and return joined classname from truthy values

// You can import `base` from the useBem too. It will be the base classname you provided. 
// If the first argument matches the base (base === base), then it will return base classname, same as if no argument provided
bem(base) // This will return base classname
// This gets useful in the scenario you want to append additional classnames to the element
bem(base, 'additional-classname') // This will return 'base additional-classname' classname
```

### modifier()

Method for applying bem modifiers only.

```js
modifier() // Without argument, returns base
modifier('modifier') // With string paassed, returns 'base--modifier'
modifier({
    'blue': true,
    'red': false
}) // With object passed, will go trough each key and return joined classname from truthy values
```
