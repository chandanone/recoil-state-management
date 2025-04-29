import { Button, Card, Typography } from '@mui/material'
import './App.css'
import { RecoilRoot } from 'recoil'
import { atom } from 'recoil'
import { useRecoilValue } from 'recoil'
import { useSetRecoilState } from 'recoil'

export default function App() {  
  return (
    <RecoilRoot>
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
    </RecoilRoot>
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
  const setCount = useSetRecoilState(CountState)
  return (
    <Button variant='contained' onClick={()=>{
      setCount(existingCount => existingCount + 1)
    }}    
    >
      Increase
    </Button>
  )
}

function Decrease() {
  const setCount = useSetRecoilState(CountState)
  return (
    <Button variant='contained' onClick={()=>{
      setCount(existingCount => existingCount - 1)
    }}>Decrease</Button>
  )
}

function CountComponent() {
  const count = useRecoilValue(CountState)
  return (
    <Typography variant='h5'>{count}</Typography>
  )
}

const CountState = atom ({
  key: "countstate",
  default: 0
})