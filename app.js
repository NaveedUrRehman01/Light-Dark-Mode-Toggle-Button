function Buttontoggle()
{
  
  var x = document.getElementsByTagName("META")[3].content;
  

  if(x === "light"){
   document.getElementsByTagName('META')[3].content = "dark"
   console.log(x)
  }
  else if(x === "dark"){
    document.getElementsByTagName('META')[3].content = "light"
    console.log(x)
  }
  
}