import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const favseries="voot";
const Favs=()=>{
if(favseries==="netflix"){
    return(
        <Card 
        imgsrc={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
      />
    );
}
else{
    return(
<Card 
        imgsrc={Sdata[5].imgscr}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      link={Sdata[5].link}
      />);
}

};

const App=()=>(
    <>
    <h1>LIst</h1>
    <Favs/>
    </>
)

export default App;




