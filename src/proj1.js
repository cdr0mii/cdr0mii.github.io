import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import p5 from "p5";
import NavScroll from './NavScroll';
//import { timingSafeEqual } from 'crypto';
//sacred symbols
//alot of parameters that could be turned into sliders
//color and color pulse
//rotation, inner circle outer circle
//alpha,opacity
class App2 extends React.Component {
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.symmetry = 6
    this.angle = 360/this.symmetry

    this.second = 100

    this.d = new Date();
    this.seconds = Math.round(this.d.getTime() / this.second);
    
  }

  drawFlower_arc(p,diam){
    p.noFill();
    p.translate(960/2,960/2);
    let t = p.millis()
    //p.rotate(t/5000);
    p.angleMode(p.DEGREES);
    p.rotate(((t*.025) % 45));
    p.beginShape();
    var rad = diam/2; // radius of circle
    var cp = rad/2; // center point of circle
    var ip = Math.sqrt(rad**2 - cp**2); //intersect point of two starting circles
    
    //Left
    p.rotate(45);
    p.arc(-rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(-rad, 0,diam,diam, 0, 180);
    //p.rotate(45);
    p.rotate(45)
    p.arc(-rad, 0,diam,diam, 0, 180);
    //p.rotate(-45);
    p.rotate(45)
    p.arc(-rad, 0,diam,diam, 0, 180);
    p.rotate(45)
    p.arc(-rad, 0,diam,diam, 0, 180);
    p.rotate(45)
    p.arc(-rad, 0,diam,diam, 0, 180);
    p.rotate(45)
    p.arc(-rad, 0,diam,diam, 0, 180);
    p.rotate(45)
    p.arc(-rad, 0,diam,diam, 0, 180);
    p.rotate(45)
    //right
    p.rotate((-(t*.025) % 45)*2);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);
    p.arc(rad, 0,diam,diam, 0, 180);
    p.rotate(45);



    //p.ellipse(0,rad,diam,diam);
    //left
    // p.ellipse(-rad,0,diam,diam);
    // //right
  
    // p.ellipse(rad,0,diam,diam);
  /*
    p.ellipse(-2*cp,-2*ip,diam,diam);
    p.ellipse(2*cp,-2*ip,diam,diam);
    p.ellipse(-2*rad,0,diam,diam);
    p.ellipse(-2*cp,2*ip,diam,diam);
    p.ellipse(2*cp,2*ip,diam,diam);
    p.ellipse(2*rad,0,diam,diam);
  
    p.ellipse(0,-2*ip,diam,diam);
    p.ellipse(3*cp,ip,diam,diam);
    p.ellipse(-1.5*rad,-ip,diam,diam);
    p.ellipse(-3*cp,ip,diam,diam);
    p.ellipse(0,2*ip,diam,diam);
    p.ellipse(1.5*rad,-ip,diam,diam);
  */
  
    //p.rotate((-(t*.015) % 360)*2);
    //p.rotate(-t,2500);
    // p.rotate(45);
    //p.ellipse(0,-rad,diam,diam);
    //p.ellipse(0,rad,diam,diam);
    //left
    //p.ellipse(-rad,0,diam,diam);
    //right
  
   //p.ellipse(rad,0,diam,diam);
  
  
    //center
    //p.ellipse(0,0,diam,diam);
    
    //p.rotate((-(t*.025 % 45)*2));
    //p.ellipse(0,-rad,diam,diam);
    //p.ellipse(0,rad,diam,diam);
    //left
    // p.ellipse(-rad,0,diam,diam);
    // //right
  
    // p.ellipse(rad,0,diam,diam);
  /*
    p.ellipse(-2*cp,-2*ip,diam,diam);
    p.ellipse(2*cp,-2*ip,diam,diam);
    p.ellipse(-2*rad,0,diam,diam);
    p.ellipse(-2*cp,2*ip,diam,diam);
    p.ellipse(2*cp,2*ip,diam,diam);
    p.ellipse(2*rad,0,diam,diam);
  
    p.ellipse(0,-2*ip,diam,diam);
    p.ellipse(3*cp,ip,diam,diam);
    p.ellipse(-1.5*rad,-ip,diam,diam);
    p.ellipse(-3*cp,ip,diam,diam);
    p.ellipse(0,2*ip,diam,diam);
    p.ellipse(1.5*rad,-ip,diam,diam);
  */
  
    //p.rotate((-(t*.015) % 360)*2);
    //p.rotate(-t,2500);
    // p.rotate(45);
    // p.ellipse(0,-rad,diam,diam);
    // p.ellipse(0,rad,diam,diam);
    // //left
    // p.ellipse(-rad,0,diam,diam);
    // //right
  
    // p.ellipse(rad,0,diam,diam);
    
    // circles below to show where intersect point is 
    //p.ellipse(500,350,200,200);
    //p.ellipse(600,350,200,200);
  
  
    
    //p.ellipse(550,436.6,200,200);
    //p.ellipse(450,436.6,200,200);
  
    //p.ellipse(550,350,200,200);
    //p.rotate(-p.millis()/5000);
    p.fill(this.new_fill,this.strk[1],this.strk[2], 50)
    p.ellipse(0,0,2*diam,2*diam);
  /*
    p.ellipse(-2*cp,-2*ip,diam,diam);
    p.ellipse(2*cp,-2*ip,diam,diam);
    p.ellipse(-2*rad,0,diam,diam);
    p.ellipse(-2*cp,2*ip,diam,diam);
    p.ellipse(2*cp,2*ip,diam,diam);
    p.ellipse(2*rad,0,diam,diam);
  
    p.ellipse(0,-2*ip,diam,diam);
    p.ellipse(3*cp,ip,diam,diam);
    p.ellipse(-1.5*rad,-ip,diam,diam);
    p.ellipse(-3*cp,ip,diam,diam);
    p.ellipse(0,2*ip,diam,diam);
    p.ellipse(1.5*rad,-ip,diam,diam);
  
    p.ellipse(0,0,3*diam,3*diam);
  */
    p.endShape(p.CLOSE);
  
  }  


drawFlower4(p,diam){
  p.translate(960/2,960/2);
  let t = p.millis()
  //p.rotate(t/5000);
  p.angleMode(p.DEGREES);
  p.rotate(((t*.025) % 45));
  p.beginShape();
  var rad = diam/2; // radius of circle
  var cp = rad/2; // center point of circle
  var ip = Math.sqrt(rad**2 - cp**2); //intersect point of two starting circles
  
  p.ellipse(0,-rad,diam,diam);
  p.ellipse(0,rad,diam,diam);
  //left
  p.ellipse(-rad,0,diam,diam);
  //right

  p.ellipse(rad,0,diam,diam);
/*
  p.ellipse(-2*cp,-2*ip,diam,diam);
  p.ellipse(2*cp,-2*ip,diam,diam);
  p.ellipse(-2*rad,0,diam,diam);
  p.ellipse(-2*cp,2*ip,diam,diam);
  p.ellipse(2*cp,2*ip,diam,diam);
  p.ellipse(2*rad,0,diam,diam);

  p.ellipse(0,-2*ip,diam,diam);
  p.ellipse(3*cp,ip,diam,diam);
  p.ellipse(-1.5*rad,-ip,diam,diam);
  p.ellipse(-3*cp,ip,diam,diam);
  p.ellipse(0,2*ip,diam,diam);
  p.ellipse(1.5*rad,-ip,diam,diam);
*/

  //p.rotate((-(t*.015) % 360)*2);
  //p.rotate(-t,2500);
  p.rotate(45);
  p.ellipse(0,-rad,diam,diam);
  p.ellipse(0,rad,diam,diam);
  //left
  p.ellipse(-rad,0,diam,diam);
  //right

  p.ellipse(rad,0,diam,diam);


  //center
  //p.ellipse(0,0,diam,diam);
  
  p.rotate((-(t*.025 % 45)*2));
  p.ellipse(0,-rad,diam,diam);
  p.ellipse(0,rad,diam,diam);
  //left
  p.ellipse(-rad,0,diam,diam);
  //right

  p.ellipse(rad,0,diam,diam);
/*
  p.ellipse(-2*cp,-2*ip,diam,diam);
  p.ellipse(2*cp,-2*ip,diam,diam);
  p.ellipse(-2*rad,0,diam,diam);
  p.ellipse(-2*cp,2*ip,diam,diam);
  p.ellipse(2*cp,2*ip,diam,diam);
  p.ellipse(2*rad,0,diam,diam);

  p.ellipse(0,-2*ip,diam,diam);
  p.ellipse(3*cp,ip,diam,diam);
  p.ellipse(-1.5*rad,-ip,diam,diam);
  p.ellipse(-3*cp,ip,diam,diam);
  p.ellipse(0,2*ip,diam,diam);
  p.ellipse(1.5*rad,-ip,diam,diam);
*/

  //p.rotate((-(t*.015) % 360)*2);
  //p.rotate(-t,2500);
  p.rotate(45);
  p.ellipse(0,-rad,diam,diam);
  p.ellipse(0,rad,diam,diam);
  //left
  p.ellipse(-rad,0,diam,diam);
  //right

  p.ellipse(rad,0,diam,diam);
  
  // circles below to show where intersect point is 
  //p.ellipse(500,350,200,200);
  //p.ellipse(600,350,200,200);


  
  //p.ellipse(550,436.6,200,200);
  //p.ellipse(450,436.6,200,200);

  //p.ellipse(550,350,200,200);
  //p.rotate(-p.millis()/5000);
  p.ellipse(0,0,2*diam,2*diam);
/*
  p.ellipse(-2*cp,-2*ip,diam,diam);
  p.ellipse(2*cp,-2*ip,diam,diam);
  p.ellipse(-2*rad,0,diam,diam);
  p.ellipse(-2*cp,2*ip,diam,diam);
  p.ellipse(2*cp,2*ip,diam,diam);
  p.ellipse(2*rad,0,diam,diam);

  p.ellipse(0,-2*ip,diam,diam);
  p.ellipse(3*cp,ip,diam,diam);
  p.ellipse(-1.5*rad,-ip,diam,diam);
  p.ellipse(-3*cp,ip,diam,diam);
  p.ellipse(0,2*ip,diam,diam);
  p.ellipse(1.5*rad,-ip,diam,diam);

  p.ellipse(0,0,3*diam,3*diam);
*/
  p.endShape(p.CLOSE);

}
  drawFlower(p, diam) {
    p.translate(960/2,960/2);
    p.angleMode(p.RADIANS);
    p.rotate(p.millis()/10000);
    //p.rotate(90);
    p.beginShape();
    var rad = diam/2; // radius of circle
    var cp = rad/2; // center point of circle
    var ip = Math.sqrt(rad**2 - cp**2); //intersect point of two starting circles
    p.ellipse(-cp,-ip,diam,diam);
    p.ellipse(cp,-ip,diam,diam);
    p.ellipse(0,0,diam,diam);
    // circles below to show where intersect point is 
    //p.ellipse(500,350,200,200);
    //p.ellipse(600,350,200,200);
    p.ellipse(-rad,0,diam,diam);
    p.ellipse(-cp,ip,diam,diam);
    //p.ellipse(550,436.6,200,200);
    //p.ellipse(450,436.6,200,200);
    p.ellipse(cp,ip,diam,diam);
    p.ellipse(rad,0,diam,diam);
    //p.ellipse(550,350,200,200);
    p.rotate(-p.millis()/5000);

    p.ellipse(-2*cp,-2*ip,diam,diam);
    p.ellipse(2*cp,-2*ip,diam,diam);
    p.ellipse(-2*rad,0,diam,diam);
    p.ellipse(-2*cp,2*ip,diam,diam);
    p.ellipse(2*cp,2*ip,diam,diam);
    p.ellipse(2*rad,0,diam,diam);

    p.ellipse(0,-2*ip,diam,diam);
    p.ellipse(3*cp,ip,diam,diam);
    p.ellipse(-1.5*rad,-ip,diam,diam);
    p.ellipse(-3*cp,ip,diam,diam);
    p.ellipse(0,2*ip,diam,diam);
    p.ellipse(1.5*rad,-ip,diam,diam);
    

    p.endShape(p.CLOSE);
  }


  Sketch = (p) => {

    let button;
    p.setup = () => {
      p.createCanvas(960, 960);
      //p.noStroke()
      //p.noFill()
      button = p.createButton("Change Viz");
      button.position(0, 100);
      button.mousePressed(changeBG);
      this.new_fill = 0
      this.flag = 0;
      this.strk = [Math.random()*255, Math.random()*255, Math.random()*255];
      
      //(x-50)^2+y^2=10000
      //(x+50)^2+y^2=10000
      /*\
      p.ellipse(500,250,200,200);
      p.ellipse(600,250,200,200);
      p.ellipse(550,336.6,200,200);
      // circles below to show where intersect point is 
      //p.ellipse(500,350,200,200);
      //p.ellipse(600,350,200,200);
      p.ellipse(450,336.6,200,200);
      p.ellipse(500,423.2,200,200);
      //p.ellipse(550,436.6,200,200);
      //p.ellipse(450,436.6,200,200);
      p.ellipse(600,423.2,200,200);
      p.ellipse(650,336.6,200,200);

      //calculate all points on the ellipse (equations)
      // see what those points are
      // Divide Time with a year
      */


    }

    let anim = 0
    // so many issues for a single button
    // button position
    // variable not being global, not changing outside func.
    // correct function setup/naming
    function changeBG(){
      //console.log("in changeBG, button pressed")
      anim = (anim + 1) % 3;
    }

    p.draw = () => {
      
      console.log(anim)
      p.background(80);
      //p.fill(this.new_fill, 50, 200);
      p.stroke(this.new_fill,this.strk[1],this.strk[2]);
      if(anim === 0){
      p.fill(this.new_fill,this.strk[1],this.strk[2], 100)
        p.strokeWeight(1);
        this.drawFlower(p, 200);
      } else if (anim === 1){
      p.fill(this.new_fill,this.strk[1],this.strk[2], 100)
        p.strokeWeight(2.5);
        this.drawFlower_arc(p, 300);
      } else if (anim === 2){
      p.fill(this.new_fill,this.strk[1],this.strk[2], 50)
        p.strokeWeight(1);
        this.drawFlower4(p, 300);
      
      }
      //this.new_fill += 1;
      if(this.new_fill<= 255 && this.flag == 0){
        this.new_fill +=1.5;
      }
      else if(this.new_fill >= 255 && this.flag == 0)
      {
        this.flag = 1;
        
      }
      else if(this.new_fill <= 0)
      {
        this.flag = 0;
      }
      else if(this.flag == 1)
      {
        this.new_fill -= 1.5;
      }
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div ref={this.myRef}>
      <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <title>Rom's Portfolio</title>
      <meta name="description" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="robots" content="all,follow"/>
      
      <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css"/>
      
      <link rel="stylesheet" href="vendor/owl.carousel2/assets/owl.carousel.min.css"/>
      <link rel="stylesheet" href="vendor/owl.carousel2/assets/owl.theme.default.min.css"/>
      
      <link rel="stylesheet" href="vendor/modal-video/css/modal-video.min.css"/>
      
      <link rel="stylesheet" href="vendor/leaflet/leaflet.css"/>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,700&amp;font-display=swap"/>
      
      <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet"/>
      
      <link rel="stylesheet" href="css/custom.css"/>
      
      <link rel="shortcut icon" href="img/favicon.png"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   
    </head>

    <NavScroll/>
      </div>
    )
  }
}
export default App2;


ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);
