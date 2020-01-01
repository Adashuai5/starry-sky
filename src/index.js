import "./styles.css";

const stars = document.getElementsByClassName("stars")[0];
let starsCount = 1000;
for (let i = 0; i < starsCount; i++) {
  stars.innerHTML += `
    <div class='star'></div>
  `;
}
let starArr = Array.prototype.slice.call(
  document.getElementsByClassName(`star`)
);
starArr.forEach(star => {
  var distance = 800 + Math.random() * 300;
  var speed = 0.2 + Math.random() * 1;
  star.style.transformOrigin = `0 0 ${distance}px`;
  star.style.transform = `translate3d(0, 0, -${distance}px) rotateY(${Math.random() *
    360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
});
