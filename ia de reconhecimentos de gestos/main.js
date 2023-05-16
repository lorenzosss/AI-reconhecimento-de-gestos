
var narizX = 0
var narizY = 0
var PunhoE = 0
var PunhoD = 0
var diferentia = 100

function setup(){

    canvas=createCanvas(600,500);
    canvas.position(700,250)
    video = createCapture(VIDEO)
    video.size(615,465)
    video.position(30,260)
    poseNet = ml5.poseNet(video,modelLoad)
    poseNet.on("pose", gotPoses)
}

function modelLoad(){
    console.log("modelo carregado")
}

function gotPoses(result) {
    if (result.length > 0){
        console.log(result)
        narizY = result[0].pose.nose.y
        narizX = result[0].pose.nose.x
        PunhoE = result[0].pose.leftWrist.x
        PunhoD = result[0].pose.rightWrist.x
        diferentia = Math.floor(PunhoE - PunhoD) 
        document.getElementById("idaiio").innerHTML = "tamanho do teu quadrado:"+ diferentia + "px"
    }
    
}

function draw(){

    background('#F5DD18')

    square(narizX, narizY,diferentia)

}