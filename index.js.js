
import React from "react";
import ReactDom from "react-dom";
import  Card from "./Heading";
import './index.css';
import Sub from "./External";

function fum(val)
{
    return(
        <Card 
        key={val.id}
        imgsrc={val.imgsrc}
        sname={val.sname}
        mname={val.mname} 
        aref={val.aref}
        />
    )
}
console.log(Sub);
ReactDom.render(
<>
<h1 className="header_style"> LIST OF TOP SIX NETFLIX SERIES IN 2021</h1>
  {Sub.map(fum)};
</>
,document.getElementById('root'));
                    