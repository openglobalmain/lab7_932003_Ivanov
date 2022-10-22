 
 function circlef(){
    var a = Number(document.getElementById("vlue").value);
    while(a>0)
  {let div = document.createElement('div');
  div.className = "circle";
  div.innerHTML = "";
  
  var w = Number(Math.round(Math.random() * (100 - 20) + 20));
  var h = Number(Math.round(Math.random() * (100 - 10) + 10));
  console.log(w+"px");
  div.style.width = w+"px";
  div.style.height = w+"px";
  div.style.top = w * 4 + "px";
  div.style.left = h * 4 + "px";
  div.onclick = chanCol;
  div.ondblclick = delIt;
  document.body.append(div);
  a--;
    }}

 function trianglef(){
    var b = Number(document.getElementById("vlue").value);
    while(b>0)
  { let div = document.createElement('div');
  div.className = "triangle";
  div.innerHTML = "";
  
  var w = Number(Math.round(Math.random() * (100 - 20) + 20));
  var h = Number(Math.round(Math.random() * (100 - 10) + 10));
  console.log(w+"px");
  div.style.border = w+"px"+" solid transparent";
  div.style.borderBottom = w * 2 +"px"+" solid #6498f8a3";
  div.style.top = w * 4 + "px";
  div.style.left = h * 4 + "px";
  div.onclick = chanColTr;
  div.ondblclick = delIt;

  document.body.append(div);
  b--;
    }}

 function squaref(){
        var c = Number(document.getElementById("vlue").value);
        while(c>0)
    { let div = document.createElement('div');
    div.className = "square";
    div.innerHTML = "";
    var w = Number(Math.round(Math.random() * (100 - 20) + 20));
    var h = Number(Math.round(Math.random() * (100 - 10) + 10));
    console.log(w+"px");
    div.style.width = w+"px";
    div.style.height = w+"px";
    div.style.top = w * 4 + "px";
    div.style.left = h * 4 + "px";
    div.onclick = chanCol;
    div.ondblclick = delIt;
    document.body.append(div);
    c--;
    }}

function chanCol(){
    this.style.background = "yellow";
    console.log(this);
    }
    function chanColTr(){
        this.style.borderBottomColor = "yellow";
        console.log(this);
        }
function delIt(){
    // this.background = "transparent";
    this.remove();
}
        