var mass=[];
var i=0;
function add_comment() {
  document.getElementById('conteinerForOldComm').innerHTML=document.getElementById('conteinerForNewComm').innerHTML+document.getElementById('conteinerForOldComm').innerHTML;

  var data = new Date();
  var timeComm=data.getDate()+"."+data.getMonth()+"."+data.getFullYear()+" "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
  var name = document.forms["addComment"].elements["nameUser"];
  var textC  = document.forms["addComment"].elements["textComm"];
  var but="<input type='button' value='x' onclick='delete_comm(this)' id="+i+" />";

  document.getElementById('conteinerForNewComm').innerHTML="<p class='nu'>С любовью, "+name.value+":</p>";
  document.getElementById('conteinerForNewComm').innerHTML+="<p class='cu'>"+textC.value+"<br></p>";
  document.getElementById('conteinerForNewComm').innerHTML+="<p class='da'>"+timeComm+but+"</p>"+"<br>";

  var totalComm=[name.value, textC.value, timeComm];
  mass.push(totalComm);
  i++;
}

function delete_comm(obj){
  /*for(var k=0; k<mass.length; k++) console.log(mass[k]);*/
  var ind=obj.id;
  /*delete mass[ind];*/
  mass[ind][2]=0;
  /*console.log("Теперь с удалением");
  for(var k=0; k<mass.length; k++) console.log(mass[k]);
  console.log("Конец");*/
  document.getElementById('conteinerForNewComm').innerHTML="<br>";
  document.getElementById('conteinerForOldComm').innerHTML="<br>";
  for(var k=mass.length-1; k>=0; k--){
    if(mass[k][2]!==0 && k!==mass.length-1){
      /*console.log("Я еще в for, хотя k=",k); console.log(k);
      console.log(mass[k][0],mass[k][1],mass[k][2]);*/
      var but="<input type='button' value='x' onclick='delete_comm(this)' id="+k+" />";
      var nf=mass[k][0]; var tf=mass[k][1]; var df=mass[k][2];
      document.getElementById('conteinerForOldComm').innerHTML+="<p class='nu2'>С любовью, "+nf+":</p>";
      document.getElementById('conteinerForOldComm').innerHTML+="<p class='cu2'>"+tf+"<br></p>";
      document.getElementById('conteinerForOldComm').innerHTML+="<p class='da2'>"+df+but+"</p>"+"<br>";
    }
    if(k==mass.length-1){
      if(mass[k][2]!==0 ){
      var but="<input type='button' value='x' onclick='delete_comm(this)' id="+k+" />";
      var nf=mass[k][0]; var tf=mass[k][1]; var df=mass[k][2];
      document.getElementById('conteinerForNewComm').innerHTML="<p class='nu'>С любовью, "+nf+":</p>";
      document.getElementById('conteinerForNewComm').innerHTML+="<p class='cu'>"+tf+"<br></p>";
      document.getElementById('conteinerForNewComm').innerHTML+="<p class='da'>"+df+but+"</p>"+"<br>";
      }
      else{
        if( k>=1 && mass[k-1][2]!==0){
          var but="<input type='button' value='x' onclick='delete_comm(this)' id="+(k-1)+" />";
        var nf=mass[k-1][0]; var tf=mass[k-1][1]; var df=mass[k-1][2];
        document.getElementById('conteinerForNewComm').innerHTML="<p class='nu'>С любовью, "+nf+":</p>";
        document.getElementById('conteinerForNewComm').innerHTML+="<p class='cu'>"+tf+"<br></p>";
        document.getElementById('conteinerForNewComm').innerHTML+="<p class='da'>"+df+but+"</p>"+"<br>";
        k--;
        }
        
      }
    }
    
  }
}