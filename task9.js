
    let arr=[ ];

      function addTask(){
         let val = document.getElementById('inp');
         let store = val.value;
         if(store !== ""){
            arr.push(store);
            val.value = "";
            renderTask();
         }
      }

      function renderTask(){
         let html="";
         for(let i=0;i<arr.length;i++){
            html+=`<p id='ptag'><span>${arr[i]}</span>
                   <span><button id='but1' onclick='deleteTask(${i})'>Delete</button></span>
                   </p>`;
         }

         document.getElementById('container').innerHTML=html;
      }

      function deleteTask(index){
         arr.splice(index,1);
         renderTask();
      }
  
