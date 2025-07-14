
function startScare() {
  document.body.onclick = null; // 避免重複觸發
  setTimeout(() => {
    const jumpscare = document.getElementById("jumpscare");
    jumpscare.style.display = "flex";
  }, 5000); // 5秒後驚嚇
  
  setTimeout(()=>{
      const scream = document.getElementById("scream");
      const joker = document.querySelector(".jumpscare img");
      joker.classList.add("show");
      scream.play();
  },6000)
  }
