const inp = document.getElementById('city_inp');
const submit = document.getElementById('sub_but');

const temp = document.getElementById('temp');
const cond = document.getElementById('cond');

submit.addEventListener('click',sendCity);

function sendCity(e){
    e.preventDefault();

    const city = inp.value;
    const weather =`/get-weather/?city=${city}`;    
    fetch(weather)
    .then(res=>res.json())
    .then((data)=>{
        temp.textContent= data.temp;
        cond.textContent= data.description;
    })
    .catch((err)=>{
        console.log(err);
    }) 
}