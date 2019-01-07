module.exports = (newjson)=>{
    var house = ["", "", "", "", "", "", "", "", "", "", "", ""], rasi = ["", "", "", "", "", "", "", "", "", "", "", ""]

    for (var key in newjson) {
        console.log(key)

        if (!isNaN(key)) {

            if ((key != 8 && key != 9) && newjson[key].retro == true) {
                // console.log("retro",newjson[key].rasino)
    
                house[newjson[key].house - 1] = house[newjson[key].house - 1].toString() + `${newjson[key].name}(R)` + " "
                rasi[newjson[key].rasino - 1] = rasi[newjson[key].rasino - 1].toString() + `${newjson[key].name}(R)` + " "
            } else {
                // console.log("Whyyy",newjson[key].rasino)
    
                house[newjson[key].house - 1] = house[newjson[key].house - 1].toString() + newjson[key].name + " "
                rasi[newjson[key].rasino - 1] = rasi[newjson[key].rasino - 1].toString() + newjson[key].name + " "
            }
        }
    
    
    }

    var str=`<!DOCTYPE html>
<html>

<head>


</head>
<style>

    h1 {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;display: flex;justify-content: center;align-items: center;
    }

    .element {
        float: left;
        shape-outside: polygon(154px 151px, 284px 37px, 12px 39px);
        width: 200px;
        height: 200px;
    }
</style>

<body >
    <div style="position: relative;width: auto;width:500px;height:500px;margin: 12px">
       <svg height="500" width="500" style="position: absolute">
            <line x1="0" y1="0" x2="500" y2="500" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="500" y1="0" x2="0" y2="500" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="3" y1="0" x2="3" y2="500" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="0" y1="497" x2="500" y2="497" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="497" y1="500" x2="497" y2="0" style="stroke:rgb(0, 164, 255);stroke-width:5" />

        
                <line x1="0" y1="3" x2="500" y2="3" style="stroke:rgb(0, 164, 255);stroke-width:5" />

                <line x1="250" y1="0" x2="0" y2="250" style="stroke:rgb(0, 164, 255);stroke-width:5" />
                <line x1="250" y1="0" x2="500" y2="250" style="stroke:rgb(0, 164, 255);stroke-width:5" />
                <line x1="250" y1="500" x2="500" y2="250" style="stroke:rgb(0, 164, 255);stroke-width:5" />
                <line x1="250" y1="500" x2="0" y2="250" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            </svg>



               <div style="position: absolute;height:110px;width:150px;left:175px;top: 70px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[0]}</div>
        <div style="position: absolute;height:65px;width:130px;left:60px;top: 10px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[1]} </div>
        <div style="position: absolute;height:130px;width:65px;left:10px;top: 60px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[2]} </div>
        <div style="position: absolute;height:110px;width:150px;top:195px;left: 50px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[3]}</div>
        <div style="position: absolute;height:130px;width:65px;left:10px;top: 305px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[4]} </div>
        <div style="position: absolute;height:65px;width:130px;left:60px;bottom: 10px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[5]} </div>
  
        <div style="position: absolute;height:110px;width:150px;left:175px;top: 315px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center">${house[6]}</div>
       
        <div style="position: absolute;height:65px;width:130px;right:60px;bottom: 10px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[7]} </div>
        <div style="position: absolute;height:130px;width:65px;right:10px;top: 305px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[8]} </div>
        <div style="position: absolute;height:110px;width:150px;top:195px;right: 50px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[9]}</div>
        <div style="position: absolute;height:130px;width:65px;right:10px;top: 60px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[10]} </div>
        <div style="position: absolute;height:65px;width:130px;right:60px;top: 10px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${house[11]} </div> 
    </div>
        
        <div style="position: relative;width: auto;width:500px;height:500px;margin: 12px">
        <svg height="500" width="500" style="position: absolute"> 


            <line x1="3" y1="0" x2="3" y2="500" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="125" y1="0" x2="125" y2="500" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="0" y1="497" x2="500" y2="497" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="375" y1="500" x2="375" y2="0" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="497" y1="500" x2="497" y2="0" style="stroke:rgb(0, 164, 255);stroke-width:5" />


            <line x1="0" y1="3" x2="500" y2="3" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="0" y1="125" x2="500" y2="125" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="0" y1="375" x2="500" y2="375" style="stroke:rgb(0, 164, 255);stroke-width:5" />

            <line x1="0" y1="250" x2="125" y2="250" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="375" y1="250" x2="500" y2="250" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="250" y1="0" x2="250" y2="125" style="stroke:rgb(0, 164, 255);stroke-width:5" />
            <line x1="250" y1="375" x2="250" y2="500" style="stroke:rgb(0, 164, 255);stroke-width:5" />


        </svg>













        <div style="position: absolute;height:120px;width:120px;margin:10px;left:125px;top: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[0]}</div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;left:250px;top: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[1]} </div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;left:375px;top: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[2]} </div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;top:125px;right: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[3]}</div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;right:0px;top: 250px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[4]} </div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;right:0px;bottom: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[5]} </div>
  
        <div style="position: absolute;height:120px;width:120px;margin:10px;right:125px;bottom: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[6]}</div>
       
        <div style="position: absolute;height:120px;width:120px;margin:10px;right:250px;bottom: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[7]} </div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;left:0px;bottom: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[8]} </div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;left:0px;bottom: 125px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[9]}</div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;left:0px;top: 125px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[10]} </div>
        <div style="position: absolute;height:120px;width:120px;margin:10px;left:0px;top: 0px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;display: flex;justify-content: center;align-items: center;color:rgb(83, 83, 83) ">${rasi[11]} </div>
  

    </div>
</body>

</html>`    

return( str)
}
