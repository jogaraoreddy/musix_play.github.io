//initial variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let download_link =document.getElementById('download_link');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs=[
    { songName: "on-my-way  _Alan Walker"        , filePath:"songs/1.mp3"    ,coverPath:"covers/1.jpg"  },
    { songName: "matey vinadhuga _Sid Sriram"  , filePath:"songs/2.mp3"    ,coverPath:"covers/2.jpg"   },
    { songName: "ratan labayan _J Nautiyala"    , filePath:"songs/3.mp3"    ,coverPath:"covers/3.jpg"  ,},
    { songName: "tum se bhi zyada _Arijit " , filePath:"songs/4.mp3"    ,coverPath:"covers/4.jpg"   },
    { songName: "shape of you _Ed Sheeran"     , filePath:"songs/5.mp3"    ,coverPath:"covers/5.jpg"  ,},
    { songName: "kusu kusu _Zahrah S Khan"        , filePath:"songs/6.mp3"    ,coverPath:"covers/6.jpg"   },
    { songName: "baby _Justin Beiber"             , filePath:"songs/7.mp3"    ,coverPath:"covers/7.jpg"  ,},
    { songName: "galivaluga _Anirudh "       , filePath:"songs/8.mp3"    ,coverPath:"covers/8.jpg"  , },
    { songName: "ranjha _B Praak"           , filePath:"songs/9.mp3"    ,coverPath:"covers/9.jpg"   },
    { songName: "Inkem kavaley _Sid Sriram"    , filePath:"songs/10.mp3"   ,coverPath:"covers/10.jpg"  },
    { songName:  "anbe en anbe _harris Jayraj"    , filePath:"songs/11.mp3"   ,coverPath:"covers/11.jpg"  },
    { songName: "enkadhal solla _y shankar"    , filePath:"songs/12.mp3"   ,coverPath:"covers/12.jpg"  ,},
    { songName: "ennovale _yuvashankar"    , filePath:"songs/13.mp3"   ,coverPath:"covers/13.jpg"   },
    { songName: "innum konja _vijay prakash"    , filePath:"songs/14.mp3"   ,coverPath:"covers/14.jpg"   },
    { songName: "munbe vaa _sheyash goshal"    , filePath:"songs/15.mp3"   ,coverPath:"covers/15.jpg"  },
    { songName: "narumugaye _unnukrishnan"    , filePath:"songs/16.mp3"   ,coverPath:"covers/16.jpg"  },
    { songName: "nenjukkul  _Hariharan"    , filePath:"songs/17.mp3"   ,coverPath:"covers/17.jpg"  },
    { songName: "nenjukkuley _Shakthisree "    , filePath:"songs/18.mp3"   ,coverPath:"covers/18.jpg"  },
    { songName: "uriye uriye _harharan"    , filePath:"songs/19.mp3"   ,coverPath:"covers/19.jpg"  },
    { songName: "vaseegara _Bombay Jayashri"    , filePath:"songs/20.mp3"   ,coverPath:"covers/20.jpg"  },
]

let slide_songs=[
    { songName: "tere vaste falak"    , filePath:"slidesongs/1.mp3"    },
    { songName: "ram siya ram"    , filePath:"slidesongs/2.mp3"     },
    { songName: "dil se dil tak"    , filePath:"slidesongs/3.mp3"    },

]
songItems.forEach((element ,i)=> {
    element.getElementsByTagName("img")[0].src=songs[i]   .coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');

        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.classList.add('bi-play-circle-fill');
        makeAllPlays();
        gif.style.opacity=0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar  
    progress=parseInt((audioElement.currentTime/audioElement.duration)*5000);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/5000;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-circle-fill');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
       
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1; 
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        download_link.download=songs[songIndex].songName;
        download_link.href=`songs/${songIndex+1}.mp3`;
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=19){
        songIndex =0
    }
    else{
        songIndex+=1;
    }
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    makeAllPlays();
    download_link.download=songs[songIndex].songName;
    download_link.href=`songs/${songIndex+1}.mp3`;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex =19
    }
    else{
        songIndex -=1;
    }
   
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    makeAllPlays();
    download_link.download=songs[songIndex].songName;
    download_link.href=`songs/${songIndex+1}.mp3`;

})
document.getElementById('shuffle-index').addEventListener('click',()=>{
    songIndex = Math.floor((Math.random() * 20) + 1);
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex ].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
    download_link.download=songs[songIndex].songName;
    download_link.href=`songs/${songIndex+1}.mp3`;

})

let repeat=document.getElementById("repeat").addEventListener('click',()=>{
    audioElement.currentTime=0;
    audioElement.play();
   
})



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}

const makeAllSlidesPlay=()=>{
    Array.from(document.getElementsByClassName('songslide')).forEach((element)=>{
        element.classList.remove('bi-pause-circle-fill');
        element.classList.add('bi-play-circle-fill');
    })
}

let slide_songIndex=0
Array.from(document.getElementsByClassName('slideplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllSlidesPlay();
        slide_songIndex= parseInt(e.target.id);
        audioElement.src=`slidesongs/${slide_songIndex+1}.mp3`;
        masterSongName.innerText=slide_songs[slide_songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1; 
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        download_link.download=slide_songs[slide_songIndex].songName;
        download_link.href=`slidesongs/${slide_songIndex+1}.mp3`;
    })
})


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


audioElement.addEventListener('ended',function(){
    makeAllPlays();
    if(songIndex>=19){
        songIndex =0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.load();
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1; 
    download_link.download=songs[songIndex].songName;
    download_link.href=`songs/${songIndex+1}.mp3`;
})




  Array.from(document.getElementsByClassName('album_image')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1; 
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        download_link.download=songs[songIndex].songName;
        download_link.href=`songs/${songIndex+1}.mp3`;
    })
})

