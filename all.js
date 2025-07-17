
function startScare() {
  document.body.onclick = null; // 避免重複觸發
  setTimeout(() => {
    const jumpscare = document.getElementById("jumpscare");
    jumpscare.style.display = "flex";
    const laugh = document.getElementById("laugh");
    laugh.volume = 1.0;
    laugh.play();
  }, 2000); // 2秒後驚嚇
  
  setTimeout(()=>{
    const horrorBgm = document.getElementById("horrorBgm");
      const joker = document.querySelector(".jumpscare img");
      joker.classList.add("show");
      horrorBgm.play();
  },2500)

  setTimeout(() => {
    window.close(); 
  }, 5500);
  }
