const btn = document.getElementById("btn");
  const  tit = document.getElementById("title").value;
  const   desc = document.getElementById("textarea").value;


    if(localStorage.getItem('itemsJson')== null){
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else{
        itemsJsonArraystr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArraystr);
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }

   let tablebody = document.getElementById('tablebody')
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td> <button type="button" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>
        `
    });
    tablebody.innerHTML = str;

    function deleted(items){
        console.log("delete", item)
    }



function clearstorage(){
    localStorage.clear();
}






