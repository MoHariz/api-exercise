const getBtn = document.querySelector('#get-btn');
const sendBtn = document.querySelector('#post-btn');

const getData = () => {
    axios.get("https://reqres.in/api/users")
    .then(res => {
        console.log(res);
        console.log(res.data.data);
    })
    .catch(err => {
        console.log(err);
    })
};

const sendData = () => {
    axios.post("https://reqres.in/api/register", 
    {
        email : 'eve.holt@reqres.in',
        password : 'pistol'
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);