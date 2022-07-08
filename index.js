const page=(
   <div>
       <h1>My awesome website in React </h1>
       <h3>Reasons I love React</h3>
       <ol>
           <li>It is composable</li>
           <li>It is declarative</li>
           <li>It is hireable skills</li>
           <li>It is actively maintained by skilled people</li>
       </ol>
   </div> 
)

document.getElementById("root").append(JSON.stringify(page))