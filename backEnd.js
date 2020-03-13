var baseUrl = "https://robohash.org/"

function myFunction() { 
    var x =  document.getElementById("myText").value; 
    userInputNormalized = baseUrl+x.replace(/ /g, '%20')
    document.getElementById("demo").href = userInputNormalized;
    document.getElementById("demo").innerText = "Click Here"
    document.getElementById("myText").value = document.getElementById("myText").defaultValue;

} 