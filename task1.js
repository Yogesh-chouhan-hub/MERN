function showDetail(){

    let city=["indore","dewas","ujjain","Bhopal","Khandwa","murena"];
    let data;
    for(let d of city){
        //data+="<option>"+city[index]+"</option>";
        data+="<option value='"+d+"'>"+d+"</option>";
    }
    document.getElementById('city').innerHTML=data;

}