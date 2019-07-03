var carousel = document.querySelector('.carousel');
var cellCount = 15;
var selectedIndex = 0;
rotateCarousel();

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-350px) rotateY(' + angle + 'deg)';
  /*var slides = document.getElementsByClassName('carousel__cell');
  var dots = document.getElementsByClassName('dot');
  for(i=0;i<slides.length;i++){
      slides[i].style.display='block';
  }
  selectedIndex++;
  if(selectedIndex>slides.length){
      selectedIndex = 1;
  }
  for(i=1;i<dots.length;i++){
      dots[i].style.background = dots[i].style.background.replace('black',' #bbb');
  }
  slides[selectedIndex-1].style.display = 'block';
  dots[selectedIndex-1].style.background ='black';
  setTimeout(rotateCarousel,1000);*/
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
  function bgs(){
    var bgar = ['linear-gradient(to right,black,indigo,white,indigo,black)',
    'linear-gradient(to right,black,indigo,white,indigo,black)',
    'linear-gradient(to right,white,indigo,white,indigo,black)',
    'linear-gradient(to right,indigo,white,white,indigo,black)',
    'linear-gradient(to right,black,indigo,white,white,indigo)',
    'linear-gradient(to right,black,indigo,white,indigo,white)']
        var bgs = document.getElementById('id01');
        bgs.style.background = bgar[5];
        setTimeout(function(){
            bgs.style.background = bgar[4];
        },50); 
        setTimeout(function(){
            bgs.style.background = bgar[3];
        },100);
        setTimeout(function(){
            bgs.style.background = bgar[2];
        },150);
        setTimeout(function(){
            bgs.style.background = bgar[1];
        },200);
    }bgs();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
  function bgs(){
    var bgar = ['linear-gradient(to right,black,indigo,white,indigo,black)',
    'linear-gradient(to right,white,indigo,white,indigo,black)',
    'linear-gradient(to right,indigo,white,white,indigo,black)',
    'linear-gradient(to right,black,indigo,white,white,indigo)',
    'linear-gradient(to right,black,indigo,white,indigo,white)',
    'linear-gradient(to right,black,indigo,white,indigo,black)']
        var bgs = document.getElementById('id01');
        bgs.style.background = bgar[1];
        setTimeout(function(){
            bgs.style.background = bgar[2];
        },50); 
        setTimeout(function(){
            bgs.style.background = bgar[3];
        },100);
        setTimeout(function(){
            bgs.style.background = bgar[4];
        },150);
        setTimeout(function(){
            bgs.style.background = bgar[5];
        },200);
    }bgs();
});

function openNav(){
    document.getElementById('mySidenav').style.width='100%';
}
function closeNav(){
    document.getElementById('mySidenav').style.width='0';
}