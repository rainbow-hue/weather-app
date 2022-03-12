const express = require('express');
const weather = require('openweather-apis');
const port = process.env.PORT || 3000;


const ownKey= '2e2e096b9f473f9511b3623197938ed7';

const app = express();
app.use(express.static('views'));
app.set('view engine', 'ejs');

weather.setLang('en');
weather.setAPPID(ownKey);

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/get-weather',(req,res)=>{
    const city = req.query.city;
    weather.setCity(city);
    weather.getSmartJSON(function(err, {temp,description} ){
		console.log({temp,description});
        res.send({temp,description});
	});  
});

app.use((req,res)=>{
    res.status(404).render('error');
});

app.listen(port);