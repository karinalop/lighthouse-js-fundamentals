for (var i = 100; i <= 200; i++)
  if(i % 4 == 0){
    if(i % 3 == 0)
      console.log("LoopyLighthouse");
    else
      console.log("Lighthouse");
  }
  else{
    if(i % 3 == 0)
      console.log("Loopy");
    else
      console.log(i);
  }