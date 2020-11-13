img="";
status="";
object=[];

function preload()
{
    img=loadImage('bottles.jpeg')
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    object_d=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('Model is Loaded');
    status=true;
    object_d.detect(img,gotresult);

}

function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
   
    image(img,0,0,640,420);
    if(status !="")
    {
        for(i=0;i<object.length;i++)
        {
          document.getElementById("status").innerHTML="Status : Objects Detected";

          percent=floor(object[i].confidence*100);
          fill('red');
          text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
          noFill();
          stroke('red');
          rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }

}

function back()
{
    window.location("index.html");
}