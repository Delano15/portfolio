

var i = 0;
var txt = 'Aangenaam, ik ben Delano en dit is mijn kleine achtergrond met coden: </br>Ik ben in de wereld van code gerold, omdat een vriend  voorstelde om een Minecraft server starten. Door het meekijken kwam ik er al snel achter dat ik het coden wel leuk vond, maar er niks van begreep. Dus besloot ik de opleiding software developer te doen. </br>Fast forward naar vandaag. Ik zit nu in het 2e jaar van mijn opleiding en ik heb een aantal projecten gedaan.</br>Zoals, deelname aan een hackaton en een website creëren voor mijn vriendin. </br>In die projecten heb ik gemerkt dat ik het leuk vind om de dingen die ik leer toe te passen en daarnaast mijn kennis nog meer te verbreden. </br>Ik en de mensen om mij heen zijn van mening dat ik creatief, oplossingsgericht, luistervaardig en besluitvaardig ben. Daarnaast kan ik ook leiding geven. In de toekomst wil ik: Bij een groot bedrijf aansluiten en deel uitmaken van een team of zelfs leiding gevende worden.</br>Een eigen bedrijf starten met mensen die ik goed ken en die daarnaast handige vaardigheden bezitten.';
var speed = 40;


function typeWriter() {
    if (i < txt.length) {
      document.getElementById("aboutMeText").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}


