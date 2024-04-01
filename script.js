function fuja(){
    var btn = document.getElementById("nao")
  
    var lj = window.innerWidth;
    var aj = window.innerHeight;
  
  
    var maxX = lj - btn.offsetWidth;
    var maxY = aj - btn.offsetHeight;

    var mat = Math.floor(Math.random() * maxX);
    var mataj = Math.floor(Math.random() * maxY);

        btn.style.left = mat + "px";
        btn.style.top = mataj + "px";

  }