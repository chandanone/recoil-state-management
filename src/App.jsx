import { Button, Card, Typography } from '@mui/material'
import './App.css'
import { useState } from 'react'
import { createContext } from 'react';
import { useContext } from 'react';

const CountContext = createContext();

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{
      count: count,
      setCount: setCount
    }}>
      <Card variant='elevation' style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 30, 
    }}>
      <Typography variant='h3'>Welcome to Counter App!</Typography>
      <Buttons />
      <CountComponent />
    </Card>
    </CountContext.Provider>
  )
}

function Buttons() {
  return (
    <div className='buttons' style={{
      display: "flex",
      gap: 40
    }}>
      <Increase />
      <Decrease />
    </div>
  )
}

function Increase() {
  const {count, setCount}= useContext(CountContext)
  return (
    <Button variant='contained' onClick={()=>{
      setCount(count+1)
    }}    
    >
      Increase
    </Button>
  )
}

function Decrease() {
  const {count, setCount} = useContext(CountContext)
  return (
    <Button variant='contained' onClick={()=>{
      setCount(count-1)
    }}>Decrease</Button>
  )
}

function CountComponent() {
  const {count} = useContext(CountContext)
  return (
    <Typography variant='h5'>{count}</Typography>
  )
}