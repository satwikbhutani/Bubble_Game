document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('intro');
    const gameScreen = document.getElementById('game');
  
    setTimeout(function() {
      introScreen.style.opacity = '0';
      introScreen.addEventListener('transitionend', function() {
        introScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        setTimeout(function() {
          gameScreen.style.opacity = '1';
        }, 10);
      }, { once: true });
    }, 3000);
  });
  
  let score = 0;
  let timer = 30;
  let hit;
  let tim;
  
  function makeBubble() {
    let clutter = ``;
    for (let i = 0; i < 185; i++) {
      let val = Math.floor(Math.random() * 30);
      clutter += `<div class="bubble">${val}</div>`;
    }
    document.querySelector('#lower').innerHTML = clutter;
  }
  
  function cross() {
    document.querySelector("#cross").addEventListener("click", () => {
      var begin = document.querySelector("#begin");
      begin.innerHTML = `<div id="button">START</div>
                         <div id="instructions">Instructions >>></div>`;
      begin.style.backgroundColor = "rgba(0, 0, 0, 0)";
      begin.style.border = "5px solid rgba(0, 0, 0, 0)";
      start();
    });
  }
  
  function instruction() {
    document.querySelector("#instructions").addEventListener("click", () => {
      var begin = document.querySelector("#begin");
      begin.innerHTML = `<h2>Instructions</h2>
                         <div>---</div>
                         <div class="heading">Welcome to the Ultimate Bubble Challenge!</div>
                         <div>---</div>
                         <div class="heading">Objective:</div>
                         <div class="points">-> You have 30 seconds to achieve the highest score possible.</div>
                         <div>---</div>
                         <div class="heading">How to Play:</div>
                         <div class="points">-> Hit Value: A target number will appear at the top of the screen.</div>
                         <div class="points">-> Match & Pop: Click on the bubble that matches the target number.</div>
                         <div class="points">-> Score Up: For each correct match, your score increases.</div>
                         <div class="points">-> Dynamic Play: After each correct hit, the target number and the numbers in the bubbles will change. Stay sharp!</div>
                         <div class="points">-> Time is Ticking: Keep an eye on the timer. Make every second count!</div>
                         <div>---</div>
                         <div class="heading">Ready, Set, Pop!</div>
                         <div class="points">-> Dive into the fun and see how many bubbles you can burst before time runs out. Happy popping!</div>
                         <div id="cross">&#10008;</div>`;
      begin.style.backgroundColor = "white";
      begin.style.border = "5px solid black";
      cross();
    });
  }
  
  function re() {
    document.querySelector("#re").addEventListener("click", () => {
      clearInterval(tim);
      score = 0;
      timer = 30;
      document.querySelector('#scoreval').textContent = score;
      document.querySelector('#timerval').textContent = timer;
      var begin = document.querySelector("#begin");
      lower.innerHTML = `<div id="begin">
                    <div id="button">
                        START
                     </div>
                     <div id="instructions">Instructions>>></div>
                 </div>
            </div>`;
      start();
    });
  }
  
  function start() {
    re();
    instruction();
    document.querySelector("#button").addEventListener("click", () => {
      makeBubble();
      runTimer();
      player();
      newHit();
    });
  }
  
  function incScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
  }
  
  function runTimer() {
    tim = setInterval(() => {
      if (timer >= 0) {
        document.querySelector("#timerval").textContent = timer;
        timer--;
      } else {
        clearInterval(tim);
        document.querySelector('#lower').innerHTML = `<div id="over"><div>GAME OVER</div><div>SCORE: ${score}</div></div>`;
      }
    }, 1000);
  }
  
  function newHit() {
    hit = Math.floor(Math.random() * 30);
    document.querySelector("#hitval").textContent = hit;
  }
  
  function player() {
    document.querySelector("#lower").addEventListener("click", (det) => {
      let bub = det.target.textContent;
      if (bub == hit) {
        incScore();
        newHit();
        makeBubble();
      }
    });
  }
  
  start();
  