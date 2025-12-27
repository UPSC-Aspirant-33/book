let time = 900; // 15 minutes
let interval;

function startTimer(){
  if(interval) return; // prevent multiple starts

  interval = setInterval(()=>{
    time--;
    updateTime();

    if(time <= 0){
      clearInterval(interval);
      playBeep();
      alert("✅ Time up. Now start studying the topic you chose.");
    }
  },1000);
}

function updateTime(){
  let m = Math.floor(time / 60);
  let s = time % 60;
  document.getElementById("time").textContent =
    `${m}:${s < 10 ? "0" : ""}${s}`;
}

function playBeep(){
  let beep = document.getElementById("beep");
  let count = 0;

  let beepInterval = setInterval(()=>{
    beep.play();
    count++;
    if(count === 3) clearInterval(beepInterval);
  },1000);
}
