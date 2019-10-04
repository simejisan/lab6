async function getData() {
    let data = await fetch(url);
    let json = await data.json();
    return json;
}
async function main() {

    let data = await getData('https://gorest.co.in/public-api/users?_format=json&access-token=cvFY5s2Yb9_Cgx8uudID_KOxQPO99O7NqmRO');

    let tbody = '';
    data.forEach(item) => {
        tbody += `<tr>
    <td>${item.id} </td>
    <td>${item.first_name + " " + item.last_name}</td>  
    <td>${item.gender}</td>
    </tr>`;
    };
    document.getElementsByClassName('mytable')[0].tBodies[0].innerHTML = tbody;
}