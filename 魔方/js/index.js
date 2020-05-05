var arr=document.querySelectorAll(".box-page");

// 遍历6个面中每一个面
for(let n=0;n<arr.length;n++){
    //外层循环遍历行
    for(let r=0;r<3;r++){
        //内层循环遍历
        for(let c=0;c<3;c++){
            // 创建元素
            var divs=document.createElement("div");
            divs.style.cssText="width:100px;height:100px;border:2px solid #fff;box-sizing:border-box;position:absolute;background-image:url(images/a"+n+".jpg);background-size:300px 300px;left:"+(r*100)+"px;top:"+(c*100)+"px;background-position:-"+(r*100)+"px -"+(c*100)+"px";;

            
            arr[n].appendChild(divs);
            


        }
    }
}





















