# State Management using useState, useContext and Recoil

## useState 
- pass props from parent component to child component which casuses prop drilling and re-rendering of all component

## useContext
- wrap your App in Context.Provider and pass state in value attribute
- createContext outside of your App component
- useContext in the child component where state is required
- it solves thr prop drilling but re-rendering issue persists.

## recoil
- it is an external state management library
- wrap your app in RecoilRoot
- create an atom outside the app which stores the state
- for read only operation use useRecoilValue
- for update operation use  useSetRecoilState - dont mention count, use exisitngCount
- If count is mentioned the react assumes the component wants to re-render the component

```
setCount(existingCount => existingCount - 1)
OR
setCount(function (existingCount){
      return  existingCount - 1
}
```
one line statement - it gives the setCount function a function as an input and the argument to the function wll be the current value.
How does the existingCount value reaches here?
-= we are passing on function as argument to other function. setcount either can take the state i.e. new State OR setcount takes the funtion, whatever this function returns it sets to the new state value and also gives the first argument as current value of that thing.

```
function Decrease() {
  const setCount = useSetRecoilState(CountState)
  return (
    <Button variant='contained' onClick={()=>{
      setCount(existingCount => existingCount - 1)
    }}>Decrease</Button>
  )
}
```

- React will think that, Decrease component needs the value of count, it will think it might use it to render the count. So whenever the count changes it wil re-render the decrease button. But, we as an application developer knw that it is being only used when we click onClick. It is not neing used to render anything.
So., you shouldn't re-render whenever count changes Button or whole thing.
