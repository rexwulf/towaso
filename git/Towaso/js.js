
//setTimeout(closed,200);

function closed(){
  alert("Sorry, Timeout.....")
 // location.href="www.towaso.com";
}


function clear(){

 $('#name').val("");
           $('#place').val("");
           $('#branch').val("");
           $('#exp').val("");
           $('#fit').val("");
           $('#role2').val("");
           $('#email').val("");
           $('#phone').val("");
           $('#contribute').val("");
           $('#institute').val("");
           $('#achievements').val("");
      
       $('#name1').hide();
       $('#place1').hide();
       $('#branch1').hide();
       $('#exp1').hide();
       $('#role21').hide();
       $('#fit1').hide();
       $('#email1').hide();
      $('#phone1').hide();
      $('#cont1').hide();
      $('#ins1').hide();
      $('#prefers1').hide();



}




function check() {
    if (document.getElementById('bd1').checked){

    	 document.getElementById('market').style.display = 'none';
       document.getElementById('common').style.display = 'block';
       document.getElementById('bd').style.display = 'block';
       document.getElementById('rd').style.display = 'none';
       document.getElementById('web').style.display = 'none';
       document.getElementById('app').style.display = 'none';
       	document.getElementById('all').style.display = 'none';
        document.getElementById('nill').style.display = 'none';
      
       location.href="#full";

             clear();

       time();

    }
    else if(document.getElementById('marketing').checked){
        document.getElementById('market').style.display = 'block';
         document.getElementById('common').style.display = 'block';
       document.getElementById('bd').style.display = 'none';
       document.getElementById('rd').style.display = 'none';
       document.getElementById('web').style.display = 'none';
       document.getElementById('app').style.display = 'none';
       	document.getElementById('all').style.display = 'none';
        document.getElementById('nill').style.display = 'none';
        
           clear();
       location.href="#full";
       time();

    }
     else if(document.getElementById('rd1').checked){
        document.getElementById('rd').style.display = 'block';
         document.getElementById('common').style.display = 'block';
        document.getElementById('market').style.display = 'none';
       document.getElementById('bd').style.display = 'none';
       document.getElementById('web').style.display = 'none';
       document.getElementById('app').style.display = 'none';
       	document.getElementById('all').style.display = 'none';
        document.getElementById('nill').style.display = 'none';
       	location.href="#full";


      clear();
       time();


       }

     else if(document.getElementById('web1').checked){
        document.getElementById('web').style.display = 'block';
         document.getElementById('common').style.display = 'block';
     document.getElementById('market').style.display = 'none';
       document.getElementById('bd').style.display = 'none';
       document.getElementById('rd').style.display = 'none';
       document.getElementById('app').style.display = 'none';
       	document.getElementById('all').style.display = 'none';
        document.getElementById('nill').style.display = 'none';
       	location.href="#full";

       clear();
        time();




    }
     else if(document.getElementById('app1').checked){
        document.getElementById('app').style.display = 'block';
         document.getElementById('common').style.display = 'block';
        document.getElementById('market').style.display = 'none';
       document.getElementById('bd').style.display = 'none';
       document.getElementById('rd').style.display = 'none';
       document.getElementById('web').style.display = 'none';
       	document.getElementById('all').style.display = 'none';
        document.getElementById('nill').style.display = 'none';
   location.href="#full";

      clear();
       time();



   }

   else
   	document.getElementById('all').style.display = 'block';

}



       


function locate()
{
  alert("session expired");
  location.href="index.html";
}

function time(){

   setTimeout(locate,900000);
}
/*
    var i,j,k;
  for(i=59;i<=60;i--)
  {
     $('#timer').text(i);
  }*/

      /* var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
   
// $('#timer').text(h+":"+m+":"+s);
   setTimeout()*/
 


  
 



      function sub()
{
      	
       var deps = document.getElementsByName('dep');
        var dep;
      for(var i = 0; i < deps.length; i++){
       if(deps[i].checked){
        dep = deps[i].value;
            }
         }
      var roles=document.getElementsByName('role');
      var role;
      for(var j = 0; j < roles.length; j++){
       if(roles[j].checked){
        role = roles[j].value;
            }
          }
          var prefers=document.getElementsByName('prefer');
      var prefer;
      for(var k = 0; k < prefers.length; k++){
       if(prefers[k].checked){
        prefer = prefers[k].value;
            }
         }


         var name = $('#name').val();
          var place=$('#place').val();

          var branch=$('#branch').val();
          var institute=$('#institute').val();
          var exp = $('#exp').val();
          var email = $('#email').val();
          var phone = $('#phone').val();
          var fit=$('#fit').val();
          var contribute=$('#contribute').val();
          var achievements=$('#achievements').val();
          var role2=$('#role2').val();
          var x= $('#prefers').val();
          var prefered=prefer+(x);
          var app=$('#apps').val();
          var web=$('#web').val();
          var backend=$('#backend').val();
          var idea=$("#idea").val();
          var mrole2=$('#mrole2').val();
          var atpos=email.indexOf("@");
         var dotpos=email.lastIndexOf(".");
          var i=phone.charAt(0);
          var l=phone.length;
        var p=0,b=0,m=0,r=0;


   if(name==""){
         $('#name1').show();
         p++;
       }
      else
        $('#name1').hide();

    if(place==""){
           $('#place1').show();
           p++;}
        else
        $('#place1').hide();

      if(branch==""){
           $('#branch1').show();
           p++;}
        else
        $('#branch1').hide();

       if(institute==""){
           $('#ins1').show();
           p++;}
           else
        $('#ins1').hide();

       if(exp==""){
           $('#exp1').show();
           p++;}
           else
        $('#exp1').hide();

       if(atpos<1||dotpos-atpos<2)
        {
          
           $('#email1').show();
           p++;
        }
          else
        $('#email1').hide();


        if((i!=8 && i!=9 && i!=7)||(l!=10))
        {
          
           $('#phone1').show();
           p++;

        } 
        else
        $('#phone1').hide();


        
         if(contribute=="")
         {
           $('#cont1').show();
           p++;
         }
         else
        $('#cont1').hide();


      if(fit==""){
           $('#fit1').show();
           p++;
          }
          else
        $('#fit1').hide();


       // business related
         if(role2==""||role==""){
           $('#role21').show();
           b++;
         }
         else
        $('#role21').hide();

          
     //r and d related    
          if(x==""||prefer==""){
                     $('#prefers1').show();
                r++;   }

            else
        $('#prefers1').hide();


// marketing related
      if(idea=="")
      {
        $('#idea1').show();
        m++;
      }
       else
         $('#idea1').hide();

       if(mrole2=="")
      {
        $('#mrole21').show();
        m++;
      }
       else
         $('#mrole21').hide();

            
if(p==0 && b==0){
     
      var ref = new Firebase('https://towasoform.firebaseio.com/');

 ref.createUser({
  email    : email,
  password : phone
}, function(error, userData) {
  if (error) {
    alert("Error submitting the form,check your connection...", error);
  } else {

     alert("Ensure that you uploaded your Resume..either your application will be regreted ");
   if(dep=="BD"){
   ref.child(dep).child(name).set({name:name,place:place,branch:branch,institute:institute,experience:exp,achievements:achievements,Fit:fit,contribute:contribute,role:role2,phone:phone,email:email}); 
     

  success();
     
      } 
    }
  });
}


else if(p==0 && m==0 && dep=="Marketing")
    {
      
       var ref = new Firebase('https://towasoform.firebaseio.com/');

 ref.createUser({
  email    : email,
  password : phone
}, function(error, userData) {
  if (error) {
    alert("Error submitting the form,check your connection...", error);
  } else {

     alert("Ensure that you uploaded your Resume..either your application will be regreted ");
   if(dep=="Marketing"){
   ref.child(dep).child(name).set({name:name,place:place,branch:branch,institute:institute,experience:exp,Fit:fit,achievements:achievements,contribute:contribute,role:mrole2,idea:idea,phone:phone,email:email}); 
     

  success();
     
      } 
    }
  });

}

else if(p==0 && r==0 && dep=="R and D"){

 var ref = new Firebase('https://towasoform.firebaseio.com/');

 ref.createUser({
  email    : email,
  password : phone
}, function(error, userData) {
  if (error) {
    alert("Error submitting the form,check your connection...", error);
  } else {

     alert("Ensure that you uploaded your Resume..either your application will not be regreted   ");
   if(dep=="R and D"){
  ref.child(dep).child(name).set({name:name,place:place,branch:branch,institute:institute,experience:exp,Fit:fit,achievements:achievements,contribute:contribute,prefer:prefered,phone:phone,email:email});
     

  success();
     
      } 
    }
  });


}

else if(p==0 && r!=0 && b!=0)
{

var ref = new Firebase('https://towasoform.firebaseio.com/');

 ref.createUser({
  email    : email,
  password : phone
}, function(error, userData) {
  if (error) {
    alert("Error submitting the form,check your connection...", error);
  } else {

     alert("Ensure that you uploaded your Resume..either your application will be regreted ");
  if(dep=="Web"){
       ref.child(dep).child(name).set({name:name,place:place,branch:branch,institute:institute,experience:exp,achievements:achievements,Fit:fit,contribute:contribute,website:web,phone:phone,email:email}); 
       success();
        }
     if(dep=="App"){
    ref.child(dep).child(name).set({name:name,place:place,branch:branch,institute:institute,experience:exp,Fit:fit,achievements:achievements,contribute:contribute,app:app,backend:backend,phone:phone,email:email});
 
     

  success();
     
      } 
    }
  });



}


else
{
  alert("Please follow the instructions");
}




      
      }
    
     
function success(){

   document.getElementById('market').style.display = 'none';
       document.getElementById('common').style.display = 'none';
       document.getElementById('bd').style.display = 'none';
       document.getElementById('rd').style.display = 'none';
       document.getElementById('web').style.display = 'none';
       document.getElementById('app').style.display = 'none';
        document.getElementById('all').style.display = 'none';
        document.getElementById('nill').style.display = 'block';

}


