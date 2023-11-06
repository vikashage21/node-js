const http = require("http");
const fs = require("fs");
let requests = require("requests");


const homeData = fs.readFileSync('airPollutationApp/home.html','utf-8')


 function replaceValue(fileData , data) {
  
let log = fileData.replace(' {{%% log %%}}', data.coord.lon )

 


 return log;
}
 

const server = http.createServer((req, res) => {
  if (req.url =="/") {
    requests(
      "http://api.openweathermap.org/data/2.5/air_pollution?lat=25.09&lon=85.31&appid=dcbfaf1280ee3b4861efa39e6b5fbe3b"
    ).on("data", (chunk)=>{
    

     

   const retunData= JSON.parse(chunk)

   let  arrReturn = [retunData]

 arrReturn.forEach((item)=>{

   return datareceive = replaceValue(homeData,item).toString()
  })
  
  
  res.write(datareceive)




      }).on("end", (err)=> {
        if (err) return console.log("connection closed due to errors", err);
      
        res.end();
      });
  }
});

server.listen(8000,'127.0.0.1')