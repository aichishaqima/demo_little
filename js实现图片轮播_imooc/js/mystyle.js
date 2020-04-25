var prev=document.getElementById("prev"),
    next=document.getElementById("next"),
    main=document.getElementsByClassName("main")[0],
    img=document.getElementsByClassName("banner-slide"),
    dots=document.querySelectorAll(".dots span"),
    menuContent = document.getElementById("menu-content"),
    menuItems = document.getElementById("menu-content").getElementsByTagName("div"),
    subMenu = document.getElementById("sub-menu"),
    subItems = subMenu.getElementsByClassName("inner-box"),
    banner=document.getElementById("banner");
    timer=null,
    index=0;

startAutoPlay();

//切换图片
function imgChange(){
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";
        dots[i].className="";
    }
    img[index].style.display="block";
    dots[index].className="active";
}

//自动播放
function startAutoPlay(){
    timer=setInterval(function(){
        index++;
        if(index==img.length) index=0;
        imgChange();
    },1000);
}

//停止自动播放
function stopAutoPlay(){
    if(timer){
        clearInterval(timer);
    }
}

//添加非冒泡事件





prev.onclick=function(){
    index--;
    if(index==-1) index=img.length-1;
    imgChange();
}

next.onclick=function(){
    index++;
    if(index==img.length) index=0;
    imgChange();
}




for(var j=0;j<img.length;j++){
    dots[j].id=j;
    dots[j].onclick=function(j){
        index=this.id;
        imgChange();
    }
}

main.addEventListener("mouseover",stopAutoPlay,true);
main.addEventListener("mouseout",startAutoPlay,true);

for(var k=0;k<menuItems.length;k++){
    menuItems[k].setAttribute("data-index",k);
    menuItems[k].addEventListener("mouseover",function(){
        subMenu.className="sub-menu";
        var idx=this.getAttribute("data-index");
        for(var m=0;m<menuItems.length;m++){
            subItems[m].style.display="none";
            menuItems[m].style.background="none";
        }
        subItems[idx].style.display="block";
        menuItems[idx].style.background="rgba(0,0,0,0.1)";
    },true)
}

subMenu.addEventListener("mouseover",function(){
    this.className="sub-menu";
},true);

subMenu.addEventListener("mouseout",function(){
    this.className="sub-menu hide";
},true);

menuContent.addEventListener("mouseout",function(){
    subMenu.className="sub-menu hide";
},true);











