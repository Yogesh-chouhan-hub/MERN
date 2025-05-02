let isclick=false;
function DarkMode(){
if(!isclick === true){
    document.getElementById('light').classList.add('dark');
    document.getElementById('button').innerHTML="Light";
    document.getElementById('button').style.border="2px solid white";   
    isclick=true; 
}else{
    document.getElementById('light').classList.remove('dark');
    document.getElementById('button').innerHTML="Dark"; 
    document.getElementById('button').style.border="2px solid black";
    isclick=false; 
}
}
