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
