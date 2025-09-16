
const EventHandle = () => {

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log("btn Clicked",e.currentTarget);
        
    }
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) =>{
        console.log("mouse hovered",e.currentTarget);
        
    }
  return (
    <div onMouseEnter={handleMouseEnter}>
        <h2>Event Handler Example</h2>
        <button onClick={clickHandler}>Submit</button>
    </div>
  )
}

export default EventHandle