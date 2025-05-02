
        setInterval(() => {
        let H=new Date();     //HOURS
        let M=new Date();     //MINUTES
        let S=new Date();     //SECONDS
        let D=new Date();     //DATE
        let Mon=new Date();   //MONTHS
        let Y=new Date();     //YEARS
        let Day= new Date();  //DAYS      
        
            document.getElementById('box').innerHTML=`Time : ${H.getHours()} : ${M.getMinutes()} : ${S.getSeconds()}`;
            document.getElementById('box1').innerHTML=`Date : ${D.getDate()}:${Mon.getMonth()+1}:${Y.getFullYear()}`;
            if(Day.getDay()==6){
                document.getElementById('box2').innerHTML=`Day : Saturday`;
            }
            else if(Day.getDay()==0){
                document.getElementById('box2').innerHTML=`Day : Sunday`;
            }
            else if(Day.getDay()==5){
                document.getElementById('box2').innerHTML=`Day : Friday`;
            }
            else if(Day.getDay()==4){
                document.getElementById('box2').innerHTML=`Day : Thursday`;
            }
            else if(Day.getDay()==3){
                document.getElementById('box2').innerHTML=`Day :  Wednesday`;
            }
            else if(Day.getDay()==2){
                document.getElementById('box2').innerHTML=`Day : Tuesday`;
            }
            else if(Day.getDay()==1){
                document.getElementById('box2').innerHTML=`Day : Monday`;
            }
            
        },1000);

        