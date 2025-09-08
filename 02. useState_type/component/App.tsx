import { useState } from "react";
import UserProfile from "./component/UserProfile";
import Todo from "./component/Todo";




const App = () => {
const [count,setCount] = useState<number>(0);

const Increament =()=>{
  setCount(prev => prev +1);
}
  return (
    <>
    <h1 onClick={Increament}>Count: {count}</h1>
    <UserProfile/>
    <Todo/>
    </>
  );
};

export default App;
