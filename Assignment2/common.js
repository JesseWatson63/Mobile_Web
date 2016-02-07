
var node = document.createElement("P");
var htmlP = document.createTextNode("I have been programming with html for about 2 years.  I have not developed full scale sites but have worked on them.");
var javasP = document.createTextNode("I have been programming with javascript for about a year now.  I am growing more with it everyday.");
var javaP = document.createTextNode("I have been programming with Java for about 2 years.  I have not developed enterprise level programs but I have donw my fair share of code.");
var pythonP = document.createTextNode("I have been programming with python for about 1 year.  It has been working with a framework similar to Django (the d is silent).");
var awesomenessP = document.createTextNode("I have been awesome for about 31 years now.  I will continue to do this.");

function resetBackgrounds(){
    document.getElementById("skilllevel1").style.backgroundImage = "";
    document.getElementById("skilllevel2").style.backgroundImage = "";
    document.getElementById("skilllevel3").style.backgroundImage = "";
    document.getElementById("skilllevel4").style.backgroundImage = "";
    document.getElementById("skilllevel5").style.backgroundImage = "";
}
function html(){
    resetBackgrounds();
    document.getElementById("skilllevel1").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel2").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel3").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel4").style.backgroundImage = "url(images/marioredshell.png)";
    node.appendChild(htmlP);
    document.getElementById("information").appendChild(node);
}
function javas(){
    resetBackgrounds();
    document.getElementById("skilllevel1").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel2").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel3").style.backgroundImage = "url(images/marioredshell.png)";
    node.appendChild(javasP);
    document.getElementById("information").appendChild(node);
}
function java(){
    resetBackgrounds();
    document.getElementById("skilllevel1").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel2").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel3").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel4").style.backgroundImage = "url(images/marioredshell.png)";
    node.appendChild(javaP);
    document.getElementById("information").appendChild(node);
}
function python(){
    resetBackgrounds();
    document.getElementById("skilllevel1").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel2").style.backgroundImage = "url(images/marioredshell.png)";
    node.appendChild(pythonP);
    document.getElementById("information").appendChild(node);
}
function awesomeness(){
    resetBackgrounds();
    document.getElementById("skilllevel1").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel2").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel3").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel4").style.backgroundImage = "url(images/marioredshell.png)";
    document.getElementById("skilllevel5").style.backgroundImage = "url(images/marioredshell.png)";
    node.appendChild(awesomenessP);
    document.getElementById("information").appendChild(node);
}