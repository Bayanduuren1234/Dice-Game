// Тоглох ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө
var dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = dice;
// Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice);
