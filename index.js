function colorFlipper() {
    var code= new  Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'  );
  
    var a=code[Math.floor(Math.random()*code.length)];
    var b=code[Math.floor(Math.random()*code.length)];
    var c=code[Math.floor(Math.random()*code.length)];
    var d=code[Math.floor(Math.random()*code.length)];
    var e=code[Math.floor(Math.random()*code.length)];
    var f=code[Math.floor(Math.random()*code.length)];
    var g=code[Math.floor(Math.random()*code.length)];
    var h=code[Math.floor(Math.random()*code.length)];
  
    var result= '#'+a+''+b+''+c+''+d+''+e+''+f;
    var lightresult= '#'+a+''+b+''+c+''+d+''+e+''+f+''+g+''+h;
  		document.getElementById("ptag").innerHTML=result;
  		document.getElementById("htag").innerHTML=lightresult;
  		document.getElementById('main').style.background= result;
  		document.getElementById('main2').style.background= lightresult;
   
  }
/*  console.log(colorFlipper());
 
 var a = "result";
 document.getElementById('codeno').value= a;
 console.log(a); */
