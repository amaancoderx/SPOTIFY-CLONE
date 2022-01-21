console.log("hello Spotify");

let index = 0;
let audioEle = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "Legends Never Die", filePath: "songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "Janji - Heroes Tonight", filePath: "songs/6.mp3", coverPath: "./covers/6.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songNme")[0].innerText = songs[i].songName; 
})
masterPlay.addEventListener('click', ()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[index].songName;
        gif.style.opacity = 1;
    }
    else{
        audioEle.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioEle.addEventListener('timeupdate', ()=>{
    progress1 = parseInt((audioEle.currentTime/audioEle.duration)* 100); 
    progressBar.value = progress1;
})

progressBar.addEventListener('change', ()=>{
    audioEle.currentTime = progressBar.value * audioEle.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioEle.src =  `songs/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioEle.currentTime = 0;
        audioEle.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(index>=9){
        index = 0
}
else{
    index += 1;
}
audioEle.src =   `songs/${index+1}.mp3`;
masterSongName.innerText = songs[index].songName;
audioEle.play();
audioElement.currentTime = 0;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if (index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioEle.src = `songs/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioEle.play();
    audioElement.currentTime = 0;
    audioEle.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
