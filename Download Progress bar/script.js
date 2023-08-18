let downloadBtn = document.querySelector(".downloadBtn");

let progressElement = document.querySelector(".progress");

let width = 0;
let id = null; 

downloadBtn.addEventListener("click", ()=>{
    id = setInterval(frame, 10);
})

const downloadNow = () => {
    window.open("https://drive.google.com/file/d/1X6RJxJv_ekjod5jsjrydW5Je35MLPdO4/view?usp=sharing")
}

function frame() {
    if (width == 500) {
        downloadNow();
        clearInterval(id);
    } else { 
      width++; 
      progressElement.style.width = width + 'px'; 
    }
  }