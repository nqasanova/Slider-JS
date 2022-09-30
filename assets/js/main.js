var SlidesImg = [
    'assets/img/img1.png',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg',
    'assets/img/img4.jpg',
]

var index = 0;
var img = document.querySelector('.slider img');
img.src = SlidesImg[index];

var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

function AutoPlay() {
    index++;

    if (index > SlidesImg.length - 1) {
        index = 0;
    }
    img.src = SlidesImg[index];
}

next.addEventListener('click', function () {
    AutoPlay();
})

prev.addEventListener('click', function () {
    index--;

    if (index < 0) {
        index = SlidesImg.length - 1;
    }
    img.src = SlidesImg[index];
})


for (var i = 0; i < SlidesImg.length; i++) {
    
    var icon = document.createElement('i');
    icon.setAttribute('class', `fa-solid fa-circle ${i}`);
    icon.setAttribute('id', `${i}`);
  
    document.getElementById('slide-dots').appendChild(icon);
}

var dots = document.querySelectorAll('.dots i')
 for(var j = 0; j < dots.length; j++){
    dots[j].addEventListener('click',function(e){
        var id = this.id
        img.src = SlidesImg[id]
    })
}

setInterval(() => {
    AutoPlay();
}, 3000);