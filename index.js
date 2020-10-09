const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const paperBtn = document.querySelector(".main-content .paper-btn");
const scissorsBtn = document.querySelector(".main-content .scissors-btn");
const rockBtn = document.querySelector(".main-content .rock-btn");
const paperBtnBonus = document.querySelector(".main-content-bonus .paper-btn");
const scissorsBtnBonus = document.querySelector(".main-content-bonus .scissors-btn");
const rockBtnBonus = document.querySelector(".main-content-bonus .rock-btn");
const lizardBtnBonus = document.querySelector(".main-content-bonus .lizard-btn");
const spockBtnBonus = document.querySelector(".main-content-bonus .spock-btn");
const userChoice = document.querySelectorAll(".main-content button");
const uesrChoicebonus = document.querySelectorAll(".main-content-bonus button");
const playAgain = document.querySelector(".result-btn");
const scoreValue = document.querySelector(".score-value");
const hardBtn = document.querySelector(".hard-btn");
const easyBtn = document.querySelector(".easy-btn");
let score = 0;

hardBtn.addEventListener('click', function(){
  document.querySelector(".hard-logo").style.display = "block";
  document.querySelector(".easy-logo").style.display = "none";
  document.querySelector(".score-tab").style.height = "95px";
  document.querySelector(".score-tab p").style.paddingBottom = "5px";
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".main-content-bonus").style.display = "block";
  document.querySelector(".chose-container").style.display = "none";
  easyBtn.style.display = "block";
  hardBtn.style.display = "none";
})

easyBtn.addEventListener('click', function(){
  document.querySelector(".hard-logo").style.display = "none";
  document.querySelector(".easy-logo").style.display = "block";
  document.querySelector(".score-tab").style.height = "90px";
  document.querySelector(".score-tab p").style.paddingBottom = "0px";
  document.querySelector(".main-content").style.display = "block";
  document.querySelector(".main-content-bonus").style.display = "none";
  document.querySelector(".chose-container").style.display = "none";
  easyBtn.style.display = "none";
  hardBtn.style.display = "block";
})

rulesBtn.addEventListener('click', function(){
  if( hardBtn.style.display === "block" ) {
    document.querySelector(".img-rules").style.display = "block";
    document.querySelector(".easy-rules-book").style.display = "block";
    document.querySelector(".hard-rules-book").style.display = "none";
  }
  else if( easyBtn.style.display === "block" ) {
    document.querySelector(".img-rules").style.display = "block";
    document.querySelector(".easy-rules-book").style.display = "none";
    document.querySelector(".hard-rules-book").style.display = "block";
  }
  else {
    document.querySelector(".img-rules").style.display = "block";
    document.querySelector(".easy-rules-book").style.display = "block";
    document.querySelector(".hard-rules-book").style.display = "none";
  }
})

closeBtn.addEventListener('click', function(){
  document.querySelector(".img-rules").style.display = "none";
})

userChoice.forEach(function(currentBtn) {
  currentBtn.addEventListener('click', runEvent)
})

uesrChoicebonus.forEach(function(currentBtn) {
  currentBtn.addEventListener('click', runEventBonus)
})

playAgain.addEventListener('click', function(){
  if( hardBtn.style.display === "block" ) {
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".main-content-bonus").style.display = "none";
    document.querySelector(".chose-container").style.display = "none";
  }
  else if( easyBtn.style.display === "block" ) {
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".main-content-bonus").style.display = "block";
    document.querySelector(".chose-container").style.display = "none";
  }
  else {
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".main-content-bonus").style.display = "none";
    document.querySelector(".chose-container").style.display = "none";
  }
})

function runEvent(e) {
  document.querySelector(".main-content").style.display = "none";
  document.querySelector(".chose-container").style.display = "block";
  document.querySelector(".paper-container-cpu").style.display = "none";
  document.querySelector(".scissors-container-cpu").style.display = "none";
  document.querySelector(".rock-container-cpu").style.display = "none";
  document.querySelector(".spock-container-cpu").style.display = "none";
  document.querySelector(".lizard-container-cpu").style.display = "none";
  document.querySelector(".paper-container-user").style.display = "none";
  document.querySelector(".scissors-container-user").style.display = "none";
  document.querySelector(".rock-container-user").style.display = "none";
  document.querySelector(".spock-container-user").style.display = "none";
  document.querySelector(".lizard-container-user").style.display = "none";
  document.querySelector(".result").style.display = "none";
  var cpuGenerator = ["rock", "paper", "scissors"];
  let cpuChoice = cpuGenerator[Math.floor(Math.random()*3)];
  if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  setTimeout(function() {
    scoreValue.textContent = score;
  }, 2000)
}


function runEventBonus(e){
  document.querySelector(".main-content-bonus").style.display = "none";
  document.querySelector(".chose-container").style.display = "block";
  document.querySelector(".paper-container-cpu").style.display = "none";
  document.querySelector(".scissors-container-cpu").style.display = "none";
  document.querySelector(".rock-container-cpu").style.display = "none";
  document.querySelector(".spock-container-cpu").style.display = "none";
  document.querySelector(".lizard-container-cpu").style.display = "none";
  document.querySelector(".paper-container-user").style.display = "none";
  document.querySelector(".scissors-container-user").style.display = "none";
  document.querySelector(".rock-container-user").style.display = "none";
  document.querySelector(".spock-container-user").style.display = "none";
  document.querySelector(".lizard-container-user").style.display = "none";
  document.querySelector(".result").style.display = "none";
  var cpuGenerator = ["rock", "paper", "scissors", "spock", "lizard"];
  let cpuChoice = cpuGenerator[Math.floor(Math.random()*5)];
  if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "lizard-btn" || e.target.className === "lizard" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".lizard-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "lizard" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".lizard-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "lizard-btn" || e.target.className === "lizard" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".lizard-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "lizard" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".lizard-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "lizard-btn" || e.target.className === "lizard" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".lizard-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "lizard" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".lizard-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "lizard-btn" || e.target.className === "lizard" ) && ( cpuChoice === "spock" )) {
    document.querySelector(".lizard-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".spock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "spock-btn" || e.target.className === "spock" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".spock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "spock" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".spock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "spock-btn" || e.target.className === "spock" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".spock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "spock" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".spock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "spock-btn" || e.target.className === "spock" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".spock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU WIN";
      }, 1800)
    }
    score += 1;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "spock" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".spock-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "spock-btn" || e.target.className === "spock" ) && ( cpuChoice === "lizard" )) {
    document.querySelector(".spock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".lizard-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "YOU LOSE";
      }, 1800)
    }
    score -= 1;
  }
  else if(( e.target.className === "paper-btn" || e.target.className === "paper" ) && ( cpuChoice === "paper" )) {
    document.querySelector(".paper-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".paper-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  else if(( e.target.className === "scissors-btn" || e.target.className === "scissors" ) && ( cpuChoice === "scissors" )) {
    document.querySelector(".scissors-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".scissors-container-cpu").style.display = "block";
    }, 1000 )
    if ( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  else if(( e.target.className === "rock-btn" || e.target.className === "rock" ) && ( cpuChoice === "rock" )) {
    document.querySelector(".rock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".rock-container-cpu").style.display = "block";
    }, 1000 )
    if( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  else if(( e.target.className === "lizard-btn" || e.target.className === "lizard" ) && ( cpuChoice === "lizard" )) {
    document.querySelector(".lizard-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".lizard-container-cpu").style.display = "block";
    }, 1000 )
    if( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  else if(( e.target.className === "spock-btn" || e.target.className === "spock" ) && ( cpuChoice === "spock" )) {
    document.querySelector(".spock-container-user").style.display = "block";
    setTimeout(function() {
      document.querySelector(".spock-container-cpu").style.display = "block";
    }, 1000 )
    if( window.screen.width <= 650 ) {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1500)
    }
    else {
      setTimeout(function() {
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result-content").textContent = "DRAW";
      }, 1800)
    }
    score = score;
  }
  setTimeout(function() {
    scoreValue.textContent = score;
  }, 2000)
}