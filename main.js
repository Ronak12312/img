Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function ts() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='cap' src='" + data_uri + "'>";
    });
}
console.log(ml5.version);
classifire = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TLW57oUiI/model.json", nothing);
function nothing() {
    console.log("model loaded");
}
function c() {
    img = document.getElementById('cap');
    classifire.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("ron").innerHTML = results[0].label;
        document.getElementById("roa").innerHTML = results[0].confidence.toFixed(3);
    }
}



