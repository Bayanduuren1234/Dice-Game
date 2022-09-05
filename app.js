// Тоглох ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө
var diceNumber = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#score-0").textContent = dice;

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";
  }
});

// Hold button-ийг ашиглах эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (activePlayer === 0) {
    document.getElementById("score-0").textContent = scores[0] += roundScore;
    document.getElementById("current-0").textContent = 0;
    roundScore = 0;
    diceDom.style.display = "none";

    activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  } else {
    document.getElementById("score-1").textContent = scores[1] += roundScore;
    document.getElementById("current-1").textContent = 0;
    roundScore = 0;
    diceDom.style.display = "none";

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.getElementById("current-" + activePlayer);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
});
