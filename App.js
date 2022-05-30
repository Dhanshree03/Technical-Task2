
import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="main">
        <h2>AlgoDomain Technical Task</h2>
        


        
     <div className="box1">
       <img src="https://img.choice.com.au/-/media/6cd0aa9099034d97bd66bb4b846c5aee.ashx?w=660&jq=80%20660w"/>

<input type="text" id="se" placeholder="search items"/>
<button id="bt">search</button>
<p id="shop">SHOPPING</p>

       </div>

       <div className="left1">
         <p id="ca">Category</p>  <br/> <br/>
         <p id="ele">Electronics</p>
         <p id="la">Laptops</p>
         <p id="mo">Mobiles</p>
         <p id="clo">Clothing</p>
         <p id="hom">Home & Applications</p>
         <p id="bo">_______________________________</p> <br/>

         <p id="pr">Price Range</p> <br/>
         <button id="b11">0</button> <br/><br/>
         <button id="b12">100000</button>
         </div>

       <div className="div1">
       <div className="pro">
         <p id="tag">Product Image</p>
             </div>
         <p id="p1">HP Pavillion v8</p>
         <p id="p2">98,000 RS</p>

        <p id="li">___________________</p>
        <p id="p3">Ram: 8 GB</p>
        <p id="p4">Hard Disk: 500 GB</p>
        <p id="p5">Processor: intel i7</p>
        <p id="p6">Core: Dual Core</p>
        
           <button id="bg1"> Buy Now</button> <br/> <br/>
           <button id="bg2"> Add Cart</button>
         </div>

       </div>


       <div className="div2"> 
       <div className="pro">
         <p id="tag">Product Image</p>
             </div>
       <p id="p1">Apple iPhone 13 Pro</p>
         <p id="p2">98,000 RS</p>

        <p id="li">___________________</p>
        <p id="p3">Ram: 8 GB</p>
        <p id="p4">Internal Storage: 64 GB</p>
        <p id="p5">USB Port: Type C</p>
        
        
           <button id="bg1"> Buy Now</button> <br/> <br/>
           <button id="bg2"> Add Cart</button>
  </div>

    </div>
  );
}




