function startclassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rt_oAp1EF/model.json", modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var cat=0;
var dog=0
var lion=0
var cow=0
function gotResults(error,results){
 if(error){
   console.error(error);
 }
  else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
   
   document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;   
   document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+'Detected Lion - '+lion+'Detected Cow - '+cow; 
   document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
   document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
 img = document.getElementById("ear");
 if(results[0].label=="barking"&&results[0].confidence>=0.80){
      img.src="https://i.postimg.cc/657fXqWQ/dog.giff";
      dog = dog+1;
    } 
    else if (results[0].label == "meowing"&&results[0].confidence>=0.80) {
      img.src = "https://i.postimg.cc/zv2bQCbk/cat-1.gif";
      cat = cat + 1;
    } 
    else if (results[0].label == "roaring"&&results[0].confidence>=0.80) {
      img.src = "https://i.postimg.cc/yx29dh18/lion-roar-44.gif";
      lion = lion + 1;
    } 
    else if (results[0].label == "mooing"&&results[0].confidence>=0.80) {
      img.src = "https://i.postimg.cc/J7SPtZdX/cartoon-cow-walk-61a1lckxexg0nc6f.gif";
      cow = cow + 1;
    } 
    else{
      img.src = "https://i.postimg.cc/7LqdHT5m/ear.png";
    }
  }
}