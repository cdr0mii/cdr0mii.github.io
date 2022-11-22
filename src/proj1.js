import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import p5 from "p5";
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

  drawFlower(p, diam) {
    p.translate(1080/2,1080/2);
    p.rotate(p.millis()/10000);
    //p.angleMode(p.DEGREES);
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

    p.setup = () => {
      p.createCanvas(1080, 1080);
      //p.noStroke()
      //p.noFill()
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

    p.draw = () => {
      
      p.background(80);
      //p.fill(this.new_fill, 50, 200);
      p.stroke(this.new_fill,this.strk[1],this.strk[2]);
      p.fill(this.new_fill,this.strk[1],this.strk[2], 100)
      this.drawFlower(p, 200);
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
      
      
      /*
      p.translate(1080/2,1080/2);
      p.rotate(p.millis()/1000);
      p.beginShape();
      p.ellipse(-50,-86.6,200,200);
      p.ellipse(50,-86.6,200,200);
      p.ellipse(0,0,200,200);
      // circles below to show where intersect point is 
      //p.ellipse(500,350,200,200);
      //p.ellipse(600,350,200,200);
      p.ellipse(-100,0,200,200);
      p.ellipse(-50,86.6,200,200);
      //p.ellipse(550,436.6,200,200);
      //p.ellipse(450,436.6,200,200);
      p.ellipse(50,86.6,200,200);
      p.ellipse(100,0,200,200);
      //p.ellipse(550,350,200,200);
      p.endShape(p.CLOSE);
      */
      /*
      p.ellipse(500,250,200,200);
      p.ellipse(500,350,200,200);
      p.ellipse(600,250,200,200);
      p.ellipse(600,350,200,200);
      p.ellipse(550,337,200,200);
      */
      //line up intersecting circles directly below or above
      //45deg must touch center of circle
      //let t1 = Math.round(this.d.getTime() / this.second);
      /*
      p.translate(p.width/2, p.height/2)
      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
        let mx = p.mouseX - p.width / 2;
        let my = p.mouseY - p.height / 2;
        
      
      //console.log(this.seconds)
      if(p.mouseIsPressed){
        let d2 = new Date();
        let t1 = Math.round(d2.getTime() / this.second);
        if(t1 - .05 > this.seconds){
          p.ellipse(mx,my,50,50);
          p.fill(Math.random()*255, Math.random()*255, Math.random()*255);
          this.seconds = t1
        }
       */
        /*
        for (let i = 0; i < this.symmetry; i++) {
          p.rotate(this.angle);
          //p.push();
          //p.scale(1, -1);
          
          p.ellipse(mx,my,50,50);
          
          //p.pop();
          this.seconds = t1
        }
        */
      
      //} 
      //}
      /*
      if(p.mouseIsPressed){
        p.fill(0);
      } else {
        p.fill(255);
      }
      p.background(220);
      p.ellipse(p.mouseX,p.mouseY,20,20);
      //p.rect(x,y,50,50);
      */
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}
export default App2;

ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);