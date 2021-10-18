import React from 'react'
import reactImg from '../public/logo512.png'
// var background ={
//     background: `url(${reactImg})`
       
// }
export class Jumbotron  extends React.Component{

 render() {
     return (
         <div class="jumbotron jumbotron-fluid" style={{backgroundImage : `url(${reactImg})`, backgroundSize: 'auto',backgroundPosition:'center',backgroundRepeat: "no-repeat"}}>
             <div class="container">
                 <h1 class="display-3">Fluid jumbo heading</h1>
                 <p class="lead">Jumbo helper text</p>
                 <hr class="my-2"/>
                 <p>More info</p>
                 <p class="lead">
                     <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                 </p>
             </div>
         </div>
     )
 }
}