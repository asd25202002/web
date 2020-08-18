var oBtn1=document.getElementById("btn1");
var oBtn2=document.getElementById("btn2");
var p_img = document.getElementById("p_img");
var img=document.getElementsByTagName("p_img")[0];
var imgarr=["Images/product1.png","Images/product2.png","Images/product3.jpg","Images/product4.jpg","Images/product5.png"];
var index=0;
oBtn1.onclick=function(){
    var oTxt=document.getElementById("p_txt").innerHTML="good!";
    index--;//切換到上一張索引自減
    //判斷索引是否小於0
    if(index<0)
    {
        index=imgarr.length-1;//目的是可以實現迴圈切換
    }
    //修改img的src屬性
    p_img.src=imgarr[index];
};
oBtn2.onclick=function(){
    var oTxt=document.getElementById("p_txt").innerHTML="";
    //書寫事件驅動程式
    index++;//切換到下一張索引自加
    //判斷索引是否大於4
    if(index>imgarr.length-1)
    {
        index=0;//目的是可以實現迴圈切換
    }
    //修改img的src屬性
    p_img.src=imgarr[index];
};