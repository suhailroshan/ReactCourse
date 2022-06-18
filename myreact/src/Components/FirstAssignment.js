import React from "react";

let a = 100;
let b = 200;

export default class FirstPage extends React.Component{

    bgFormat = {
        backgroundColor: "#fffff"
      };
    
      showContent = () => {
        a = a + 200;
        b = b + 500;
        console.log(a);
        console.log(b);
      };
    
      render() {      
        return (
          <div  style={{backgroundColor : this.bgFormat, width: 400,minHeight:100}}>
            Welcome to my first page
            <div>
              <button onClick={this.showContent}>Click Here</button>
            </div>
            {a}
            <br />
            {b}
            <br />
          </div>
        );
      }
}