import React, { useState } from 'react'

import { Container, ButtonArea, Button } from './styles'

export default function Counter(){

  const [ counterValue, setCounterValue ] = useState(0)

  const increaseCounter = () => setCounterValue(counterValue + 1)

  const decreaseCounter = () => setCounterValue(counterValue - 1)

  const resetCounter = () => setCounterValue(0)


  return(
    <Container>

      <h2>{counterValue}</h2>

      <ButtonArea>
        <Button onClick={increaseCounter}>Add</Button>
        <Button onClick={resetCounter}>Reset</Button>
        <Button onClick={decreaseCounter}>Minus</Button>
      </ButtonArea>

    </Container>
  )
}