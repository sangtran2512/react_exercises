import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')} <br/>
        button press history: {props.total} <br/>
      </div>
      
    )
  }
  
  
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  
  const Test2 = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
      setTotal(total + 1)
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
      setTotal(total + 1)    
    }
  
    return (
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} total={total} />
      </div>
    )
  }

export default Test2