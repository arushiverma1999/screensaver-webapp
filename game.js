var canvas = document.getElementById("canvas");
canvas.width=window.innerWidth; 
canvas.height=window.innerHeight;

var c=canvas.getContext("2d");


var x=Math.random()* (innerWidth-100*2)+100;
var y=Math.random()* (innerHeight-100 *2)+100;
var dx=Math.random();
var dy=Math.random();
var i=0;
var count=0;
var circleArray=[];

 
class Circle {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.draw = function () {
           
            c.beginPath();
            c.arc(this.x, this.y, 100, 0, Math.PI * 2, false);
            c.fillStyle="yellow";
            c.fill();
            c.strokeStyle = "red";
            c.stroke();
            c.font=" 30px Comic Sans MS";
            c.textAlign="right";
            c.fillStyle="green";
            c.strokeText("SCORE:"+""+count,1200,70);
            
           
        }; 
        this.update = function () 
        {
            this.draw();
           
         
            if (this.x + 100 > innerWidth || this.x - 100 < 0) 
            {
                this.dx = -this.dx;
            }
            this.x = this.x + this.dx;
            if (this.y + 100 > innerHeight || this.y - 100 < 0)
            {
                this.dy = -this.dy;
            }
            this.y = this.y + this.dy;
           if(this.x +100>innerWidth|| this.x-100<0||this.y+100>innerHeight|| this.y-100<0)
            {
                
                
                    
                    count++;
              if(count<10)
              {
                document.getElementById("canvas").style.backgroundImage="url('a.jpeg')";
              }   
              else if(count>=10&&count<20)
              {
                  document.getElementById("canvas").style.backgroundImage="url('e.jpeg')";
              }  
              else if(count>=20&&count<30)
              {
                document.getElementById("canvas").style.backgroundImage="URL('c.jpeg')";  
              }
             else if(count>=30&&count<40)
             {
                document.getElementById("canvas").style.backgroundImage="URL('d.jpeg')";

             }
             else{
                document.getElementById("canvas").style.backgroundImage="URL('5.jpeg')";  
             }
            }


          
        };
       
    }
}
 
    for(i=0;i<10;i++)
    {
        
        var x=Math.random()* (innerWidth-100*2)+100;
        var y=Math.random()* (innerHeight-100 *2)+100;
        var dx=Math.random();
        var dy=Math.random();
        var circle=new Circle(x,y,dx,dy);
        circleArray.push(new Circle(x,y,dx,dy)); 
        
    
    }

    function animate()
    {
   
    
        requestAnimationFrame(animate);
       c.clearRect(0,0,innerWidth,innerHeight);
            {
   
                circle.update();
   
            }
        for(var a=0;a<10;a++ )
            {
        circleArray[a].update();  
            }
            
        
    };

    animate();
    
   //document.getElementById("canvas").style.backgroundImage="URL('arushi.png')";