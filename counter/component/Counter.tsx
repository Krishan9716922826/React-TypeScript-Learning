import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
        <h1>Counter: {count} </h1>
        <button onClick={()=> setCount(count+1)}>Increament</button>
        <button onClick={() => setCount(count-1)}>Decreament</button>
    </div>
   
  )
}

export default Counter