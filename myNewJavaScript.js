/* exported myFunction */
var myspace =[];
var myanimal,mysize,space,mycity,category,Myanimal,Myspace,Category,Alphabet,alphabet,Word;
var num=-1;
var num2=0;
var line = [];
var lives = 10;
function start(){
 var animals = [ "cat" , "bird" , "crocodail" ,"lion" , "dog" , "elephant" ];
    var cities = [ "cairo" , "tokyo" , "kiv" ,"hochimen" , "roma" , "mombai" ];
    num++; num2++;
    if(num>5)num=0;if(num2>1)num2=0;
    document.getElementById("text_win").style.display=
    "none";
    document.getElementById("solution").style.visibility= "hidden";
    switch(num2){
        case 0:
            category = "Animals";
            switch(num){
         case 0:
         myanimal = animals[num];
         myspace = space_maker(myanimal);
         out_view(myanimal,myspace,category);       break;
                    
          case 1:
          myanimal = animals[num];
          myspace =space_maker(myanimal);
          out_view(myanimal,myspace,category); 
          break;
                    
          case 2:
          myanimal = animals[num];
          myspace =space_maker(myanimal);
          out_view(myanimal,myspace,category);       break;
          
          case 3:
          myanimal = animals[num];
          myspace =space_maker(myanimal);
          out_view(myanimal,myspace,category); 
          break;
          
          case 4:
          myanimal = animals[num];
          myspace =space_maker(myanimal);
          out_view(myanimal,myspace,category); 
          break;
          
          case 5:
          myanimal = animals[num];
          myspace =space_maker(myanimal);
          out_view(myanimal,myspace,category);       break;
          
  }break;
        case 1:
            category = "Cities";
            switch(num){
      case 0:
          mycity = cities[num];
          myspace =space_maker(mycity);
          out_view(mycity,myspace,category); 
          break;
                    
          case 1:
          mycity = cities[num];
          myspace =space_maker(mycity);
          out_view(mycity,myspace,category); 
          break;
                    
          case 2:
          mycity = cities[num];
          myspace =space_maker(mycity);
          out_view(mycity,myspace,category);
          break;
          
          case 3:
          mycity = cities[num];
          myspace =space_maker(mycity);
          out_view(mycity,myspace,category);
          break;
          
          case 4:
          mycity = cities[num];
          myspace =space_maker(mycity);
          out_view(mycity,myspace,category);
          break;
          
          case 5:
          mycity = cities[num];
          myspace =space_maker(mycity);
          out_view(mycity,myspace,category);
          break;         
  }
            break;
    }
}
function comparison(alphabet,Word){
    var myword = Word;
    Alphabet = alphabet;
    var com=0;
    var myStrWord = myword.split("");
    var b = document.getElementById("spaces").innerHTML;
    line = myspace;
    for(var j = 0 ; j < myword.length ; j++){
        if(Alphabet == myStrWord[j]){
            line.splice(j,1,Alphabet);
            document.getElementById("spaces").innerHTML=
            line.join(" ");
            com++;
 
        }
        if(line.join('')==myword){             
            document.getElementById("text_win").style.display="block";
                document.getElementById("text_win").innerHTML="you win!";               
        }     
    }
    if(com==0){
            lives--;
            document.getElementById("live").innerHTML=lives;
        if(lives==0){
           document.getElementById("text_win").style.display="block"; document.getElementById("text_win").innerHTML="you lose :("; 
            
        }else if(lives<0){
            document.getElementById("text_win").style.display="none"; 
           lives = 10; document.getElementById("live").innerHTML=lives;       
            start();     
        }
     }          
}
function hinte(){
 document.getElementById("solution").style.visibility= "visible";
}
function space_maker(space){
    var my_space = space;
    var real_space = document.getElementById("spaces").innerHTML.length;
    for(var j = 0 ; j < (real_space+1)/2 ; j++){
        myspace.pop();
        
    }
    for(var i = 0 ; i < my_space.length ; i++){
        myspace[i] = "_";
    }
    return myspace;
    }
function out_view(Myanimal,Myspace,Category){
    var ani = Myanimal;
    var spa = Myspace;
    var cate = Category;
document.getElementById("spaces").innerHTML=spa.join(" ");
document.getElementById("solution").innerHTML=ani;
document.getElementById("category").innerHTML=cate;
}