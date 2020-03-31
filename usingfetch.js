const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

const getData = () => {
    fetch("https://reqres.in/api/users")
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(resData => {
        console.log(resData.data);
    })
    .catch(err => {
        console.log(err);
    })
}



getBtn.addEventListener('click', getData);
