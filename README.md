# VedicChartJS
Javascript code that outputs a html string with given vedicastroapi JSON as input
This can be used to display Kundli charts or Jathaka Kattam
Available in both North Indian and South Indian styles


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Works for only spceific requests  in vedicastroAPI
 - Vedic Horoscope API
 - Divisional Charts API
 
If you want to know how to call the API
visit [www.VedicAstroAPI.com](https://vedicastroapi.com/Docs)

# Requirements
Nodejs 6+
or you can use the same logic in your own favorite language

# Usage 
copy the file in your local drive
Import the module in javascript
call the function with the JSON response received via VedicAstroAPI's query and render the HTML string returned by the function

# Example
```sh
var axios = require('axios') // axios is to send and receive http requests
var vedicchart = require('./vedicchart.js')

var x="https://api.vedicastroapi.com/json/horoscope/vedic?dob=11/05/1995&tob=11:44&lat=11.22&lon=80.3&tz=5:30&apikey=jkhgafs6732gkrjdsknfbh"

async function (){

var result = await axios.get(x)  // using async-await to handle promise
var response_json = {}

if(result.data){
    if(result.data.status == 200){
        response_json = result.data.response // get the response json
        
        var html = vedicchart(response_json) //Call the vedicchart js function along with the json as arguments
        
        return html // return the html and use the string to render in your front end
    }else return
} else return

    
}
```

This is made free based on request from thousands of you guys
So Happy Astrology
