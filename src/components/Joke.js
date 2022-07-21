const Joke = ()=>{
   const thingsArray=["Thing 1", "Thing 2"]

   const thingsElements = thingsArray.map(thing=><p key={thing}>{thing}</p>)
   function addItem(){
       const newThingText=`Thing ${thingsArray.length+1}`
       thingsArray.push(newThingText)
       console.log(thingsArray)
   }
    return(
       <div className="bod">
      
      <button onClick={addItem} >Add item</button>
      {thingsElements}
       </div>
       
    )
}
export default Joke ;