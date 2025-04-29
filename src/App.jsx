import { Button, Card, Typography } from '@mui/material'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Card variant='elevation' style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 30
    }}>
      <Typography variant='h3'>Welcome to Counter App!</Typography>
      <Buttons count={count} setCount={setCount} />
      <CountComponent count={count} />
    </Card>
  )
}

function Buttons({count, setCount}) {
  return (
    <div className='buttons' style={{
      display: "flex",
      gap: 40
    }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  )
}

function Increase({count, setCount}) {
  return (
    <Button variant='contained' onClick={()=>{
      setCount(count+1)
    }}    
    >
      Increase
    </Button>
  )
}

function Decrease({count, setCount}) {
  return (
    <Button variant='contained' onClick={()=>{
      setCount(count-1)
    }}>Decrease</Button>
  )
}

function CountComponent({count}) {
  return (
    <Typography variant='h5'>{count}</Typography>
  )
}