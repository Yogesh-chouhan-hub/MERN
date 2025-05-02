function verify(){
    let vari=document.getElementById('main').value;
    if(vari=="Addhar card"){
        console.log("hello");
        document.getElementById('gen').innerHTML="<h2>Enter Addhar card Number</h2><input type='number' id='adinp' placeholder='XXXX-XXXX-XXXX'><button id='but'>Verify</button>"

    }else if(vari=="PAN card"){
        console.log("bye");
        document.getElementById('gen').innerHTML="<h2>Enter PAN card Number</h2><input id='pinp' placeholder='xxxxxxxxxx'><button id='but'>Verify</button>"
    }else{
        console.log("hmmm")
        document.getElementById('gen').innerHTML="<h2>*Invalid selection*</h2>"
        document.getElementById('gen').style.color="red";

    }
}
function age(){
    let option1;
    for(let i=1;i<32;i++){
        option1+="<option value='"+i+"'>"+i+"</option>"
    }
    console.log(option1);
    document.getElementById('dd').innerHTML=option1;
    


    let Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let option2;
    for (let i in Months) {
    option2+="<option value='"+Months[i]+"'>"+Months[i]+"</option>";
}
    console.log(option2);
    document.getElementById('mm').innerHTML=option2;



    let date=new Date();
    let currentYear=date.getFullYear();
    let option3;
    for(let i=currentYear;i>=1950;i--){
        option3+="<option value='"+i+"'>"+i+"</option>";
    }
    console.log(option3);
    document.getElementById('yy').innerHTML=option3;
}