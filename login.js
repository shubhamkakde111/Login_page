const mapping=new Map([["shubham",123456],
    ["harendra",789456],["ashutosh",785132]]);
    let logged=false;
    
 function check(){
    
    var pass=logi.ps.value;
    var un=logi.un.value;
    
if(pass==mapping.get(un)){
    window.location.href = "first.html";
//window.alert("logged in successfully....");
logged=true;
}
else
window.alert("wrong credentials");

}



