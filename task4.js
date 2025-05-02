let ui1={
    name:"rahul",
    state:"M.P",
    city:"bhopal",
    address:"sanjay colony"
};
let ui2={
    name:"shyam",
    state:"M.R",
    city:"khandwa",
    address:"vijay colony"
};
let ui3={
    name:"raju",
    state:"M.P",
    city:"dewas",
    address:"laxmi colony"
};
let ui4={
    name:"dinesh",
    state:"M.R",
    city:"pune",
    address:"devansh colony"
};
let ui5={
    name:"Prem",
    state:"Delhi",
    city:"Delhi",
    address:"Bhagat colony"
};
let ui6={
    name:"sachin",
    state:"Gujrat",
    city:"Surat",
    address:"ram colony"
};
let ui7={
    name:"pawan",
    state:"M.P",
    city:"Bhopal",
    address:"BKT apartment"
};
let ui8={
    name:"rostoki",
    state:"M.R",
    city:"Amrawati",
    address:"AB apartment"
};
let ui9={
    name:"bharat",
    state:"M.P",
    city:"Jabalpur",
    address:"kitket apartment"
};
let ui10={
    name:"vijay",
    state:"M.P",
    city:"Ujjain",
    address:"sandeep apartment"
};
let ud="";
ud+=`<tr>`;
    for(let i in ui1){
        ud+=`<th>${i}</th>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui1){
        ud+=`<td>${ui1[i]}</td>`;
    }
    ud+=`<tr>`;
    for(let i in ui2){
        ud+=`<td>${ui2[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui3){
        ud+=`<td>${ui3[i]}</td>`;
    }
    ud+=`</tr><br><tr>`;
    for(let i in ui4){
        ud+=`<td>${ui4[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui5){
        ud+=`<td>${ui5[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui6){
        ud+=`<td>${ui6[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui7){
        ud+=`<td>${ui7[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui8){
        ud+=`<td>${ui8[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui9){
        ud+=`<td>${ui9[i]}</td>`;
    }
    ud+=`</tr><tr>`;
    for(let i in ui10){
        ud+=`<td>${ui10[i]}</td>`;
    }
    ud+=`</tr>`;
    console.log(ud);
    document.getElementById('td').innerHTML=ud;
    document.getElementById('td').style.backgroundColor="black";
    document.getElementById('td').style.color="white";
    document.getElementById('td').style.paddingTop="20px";
    document.getElementById('td').style.paddingLeft="20px";
    document.getElementById('td').style.paddingRight="20px";