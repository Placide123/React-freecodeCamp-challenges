const Joke = (props)=>{
    console.log(props.isPun)
    return(
       <div>
       {props.Setup && <h3>Setup: {props.Setup}</h3>}   
       <p>Punchline: {props.Punchline}</p>  
       {props.isPun &&<h4>isPun: {`${props.isPun}`}</h4>}
       <h5>upvotes: {props.upvotes}</h5>
       <hr/>
       </div>
    )
}
export default Joke ;