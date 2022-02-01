function halo() {
    console.log("Ajilllll");
}

function main() {
    console.log("Bedal la");
}

function addList() {
    var dataList = document.getElementById('listing').value;
    // document.getElementById('inputData').innerHTML = dataList;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(dataList));
    ul.appendChild(li);
}