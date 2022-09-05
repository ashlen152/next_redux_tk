import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount
} from 'features/counter'
import React, { useState } from 'react'

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [increamentAmount, setIncreamentAmount] = useState<number>(0)
  return (
    <>
      <h1>Welcome to the boilerplate app Nextjs - Redux toolkit</h1>
      <h2>The current number is {count}</h2>
      <div>
        <input
          value={increamentAmount}
          onChange={e => {
            setIncreamentAmount(Number(e.target.value))
          }}
          type="number"
        />
        <button onClick={() => dispatch(incrementByAmount(increamentAmount))}>
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default IndexPage
