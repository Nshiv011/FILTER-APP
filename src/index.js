import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import "./index.css";
import Cute from "./Cute"
function ncard(val){
    return(<Card
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}/>);
}


ReactDOM.render(
    // <>
    //     <h1>hello</h1>
    //     <button className="btn btn-success">Thapa</button>
    // </>
//   <>

  /* MAp function */


    /* <h1>List of </h1>
    {Sdata.map(ncard)} */



/* Array Indexing */
/* <>
   <Card
      imgsrc={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
  />

<Card
      imgsrc={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
  />

<Card
      imgsrc={Sdata[2].imgscr}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
  />

  <Card
      imgsrc={Sdata[3].imgscr}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
  />

  <Card
      imgsrc={Sdata[4].imgscr}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}
  /> 
   </>  */

<>
<Cute/>
<Search/>

</>

,document.getElementById('root'));