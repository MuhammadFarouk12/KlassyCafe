// first section
var hoverd = document.querySelectorAll(".chef");
for(i = 0; i < hoverd.length; i++){
    hoverd[i].onmouseover = function(){
        this.classList.add("active")
    }
    hoverd[i].onmouseout = function(){
        this.classList.remove("active")
    }
}
// meals's section
var bf = document.querySelector(".bf"),
    l = document.querySelector(".l"),
    d = document.querySelector(".d"),
    dishBf = document.querySelector(".dish-bf"),
    dishL = document.querySelector(".dish-l"),
    dishD = document.querySelector(".dish-f");
        dishL.style.display = "none";
        dishD.style.display = "none";
    
    bf.onclick = ()=>{
        bf.classList.add("active")
        l.classList.remove("active")
        d.classList.remove("active")
        dishBf.style.display = "flex";
        dishL.style.display = "none";
        dishD.style.display = "none";
    }
    l.onclick = ()=>{
        bf.classList.remove("active")
        l.classList.add("active")
        d.classList.remove("active")
        dishBf.style.display = "none";
        dishL.style.display = "flex";
        dishD.style.display = "none";
    }
    d.onclick = ()=>{
        bf.classList.remove("active")
        l.classList.remove("active")
        d.classList.add("active")
        dishBf.style.display = "none";
        dishL.style.display = "none";
        dishD.style.display = "flex";
    }