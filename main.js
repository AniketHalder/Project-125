difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550)
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#e0d3b6');
    textSize(difference);
    fill('#E6E6FA');
    text('Aniket', 120, 140);
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " + leftWristX + "right wrist x = " + rightWristX + " difference = "+ difference);
    }
}