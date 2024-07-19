import React from "react";
import Contact from "../feature/contact";
import Welcome from "../feature/welcome";
import Counter from "../feature/counter";



function Home() {

    var data =[
        { category: "Student", number: "0469100001", active: true, name: "Arun" },
        { category: "Student", number: "0469100002", active: true, name: "Arun Hari" },
        { category: "Student", number: "0469100003", active: false, name: "Arun Haridas" },
        { category: "Parent", number: "0469100004", active: true, name: "Hari" },
        { category: "Parent", number: "0469100005", active: false, name: "Haridas" },
        { category: "Parent", number: "0469100006", active: true, name: "Haridas K" }
      ];

     var ret = data.forEach(element => {
        console.log(element);
      });
    return (
<div>
<h1 className=""> Home</h1>



<Welcome title="User"></Welcome>






<Counter></Counter>


<div className="container" style={ {background: 'red'}}>
<div className="row">
<div  className="col-md-6">
<h3>Col </h3>
</div>

<div  className="col-md-6">
<h3>Col </h3>
</div>

</div>
</div>



</div>
       
    )
}

export default Home 