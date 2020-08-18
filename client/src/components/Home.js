import React from 'react';
import Donald from "../images.jpeg";
import Joe from "../biden.jpeg";
import '../App.css';
import MyCard from './Card';
import Menu from './Menu';



const Home = () => {


  

    return (
        
        <div className="App">
          
          <Menu />
           <div className="jumbotron">
               <h1 style={{color: "black", textAlign: "left"}}className="jumbotron-title">
                 Here are your Candidates: Let's Battle
               </h1>
             </div>
           <div className="container">
           <div className="row">
               <div id="donald"className="col-md-6">
               <MyCard 
                className="donald"
                buttonName="donBtn"
                title="Donald Trump"
                party="Republican"
                description="Current President"
                img={Donald}
              />
               </div>
               <div id="joe" className="col-md-6">
               <MyCard  
                className="biden"
                buttonName="joeBtn"
                title="Joe Biden"
                party="Democrat"
                description="Former VP"
                img={Joe}
              />
               </div>
             </div>
              
              
           </div>
        </div>
      );

}

export default Home;