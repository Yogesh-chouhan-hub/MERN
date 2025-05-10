
    let arr=[ ];

      function addTask(){
         let val = document.getElementById('inp');
         let date = document.getElementById('dt');
         let store = val.value;
         let data = date.value;
         if(store !== ""){
            arr.push({task: store,date: data});
            val.value = "";
            date.value ="";
            renderTask();
         }
      }

      function renderTask(){
         let html="";
         for(let i=0;i<arr.length;i++){
            html+=`<p id='ptag'><span>${arr[i].task}</span>
                                <span>${arr[i].date}</span>
                                <span><button id='but1' onclick='deleteTask(${i})'>Delete</button></span>
                   </p>`;
         }

         document.getElementById('container').innerHTML=html;
      }

      function deleteTask(index){
         arr.splice(index,1);
         renderTask();
      }
  
