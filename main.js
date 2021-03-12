moustacheX=0;
moustacheY=0;
function preload(){
     moustache=loadImage('https://i.postimg.cc/MTBmFQfn/haloooo.png'); }

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function take_snapshot(){
    save('myfilterimg.png');
}
function modelLoaded(){
    console.log('poseNet is intialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("moustache x="+results[0].pose.moustache.x);
        console.log("moustache y="+results[0].pose.moustache.y);
        moustacheX=results[0].pose.moustache.x-15;
         moustacheY=results[0].pose.moustache.y-15;
    }
}

function draw(){
   
        image(video,0,0,300,300)
        image(moustache,moustacheX,moustacheY,30,30);
        
}
