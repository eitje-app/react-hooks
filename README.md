# react-hooks
Hooks to make life easy

Three hooks currently being exported:

## useAsyncEffect

use async functions inside an effect

example: 
```
useAsyncEffect(
  async () => {
    const data = await getData
    console.log(data)    
  }, [] ) 
```

## usePrevious

get previously rendered value of a ref or state value.

example:

```
const [myState, setState] = useState(0)
const prevState = usePrevious(myState)

setState(myState + 1)

myState => 1
prevState => 0
```

## useMergeState

Classic class component setState merging behaviour. Usage exactly same as useState

