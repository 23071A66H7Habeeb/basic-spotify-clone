console.log("hello");
let audioE=new Audio('1.mp3');
let songI=0;
let masterPlay=document.getElementById('icon2')
let songItems=Array.from(document.getElementsByClassName('Song1'));



let songs = [
    {songName: "Warriyo - Mortals", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "2.mp3", coverPath: "6.jpg"},
    
]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
masterPlay.addEventListener("click",()=>{
    if(audioE.paused || audioE.currentTime<=0){
        audioE.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audioE.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }
})

audioE.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioE.currentTime/audioE.duration)*100);
    progB.value=progress;
})

progB.addEventListener('change',()=>{
    audioE.currentTime=progB.value*audioE.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songP')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songP')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioE.src=`${index}.mp3`;
        audioE.currentTime=0;
        audioE.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('icon3').addEventListener('click',()=>{
    if(index>=6){
        index=1;
    }
    else{
        index+=1;
    }
    audioE.src=`${index}.mp3`;
            audioE.currentTime=0;
            audioE.play();
            audioE.classList.remove('fa-pause');
            audioE.classList.add('fa-play');
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
})
document.getElementById('icon1').addEventListener('click',()=>{
    if(index<=0){
        index=1;
    }
    else{
        index-=1;
    }
    audioE.src=`${index}.mp3`;
            audioE.currentTime=0;
            audioE.play();
            audioE.classList.remove('fa-pause');
            audioE.classList.add('fa-play');
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
})