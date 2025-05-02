function showDetail(){
    let data1=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let a;
    for (let i in data1) {
        a+="<option value='"+data1[i]+"'>"+data1[i]+"</option>";
    }
        console.log(a);
        document.getElementById('dat').innerHTML=a;
        //

        let b;
        for(let dt=1;dt<=31;dt++){
            b+="<option value='"+dt+"'>"+dt+"</option>"
        }
        console.log(b);
        document.getElementById('mon').innerHTML=b;  
        //

        let day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        let c;
        for(let i of day){
            c+="<option value='"+i+"'>"+i+"</option>";
        }
        console.log(c);
        document.getElementById('yr').innerHTML=c; 
        //

        let date =new Date();
        let yr =date.getFullYear();
        let d;
        for(let currentYear=yr;currentYear>=1990;currentYear--){
            d+="<option value='"+currentYear+"'>"+currentYear+"</option>"
        }
        console.log(d);
        document.getElementById('kch').innerHTML=d;
    }

