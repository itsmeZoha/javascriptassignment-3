let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
// ----------------------------------------------------------------------------------
var city1 = "FSD"   // 
var city2 = "LHR"   //
var city3 = "ISB"   // jo alg alg bna rahy ho is sy bahter ha k array bna ly


let cities = ["FSD","LHR","ISB"]
// console.log(cities)     //or
// console.log(cities[2])
cities[3] = "KCH"
// console.log(cities)
  cities.push("shahkot","quetta")
//   console.log(cities)
        //     Ch # 15 - 20
  function simpleAlert(){
   let simpleAlert = document.getElementById("inputText").value;
   alert(simpleAlert)
   document.getElementById('output').innerHTML = simpleAlert
  }  
 // ----------------- Print My Name-----------------//
 function printMyName(){
   let myName = document.getElementById("inputText").value;
   if(myName === ""){                    // (!myName) = (myName === "") 2nu equal ha //
      alert("please Enter your Name...")
      return
   }
   document.getElementById('output').innerHTML = myName
   document.getElementById('originalTextBox').innerHTML = '<div>let myName = document.getElementById("inputText").value;</div>'+ 
   '<div>if(myName === ""){</div>'+ '<div>alert("please Enter your Name...")</div>'+ 
   '<div>return</div>'+ '<div>}</div>'
 }
 // -----------------Clear Output ----------------//
 document.getElementById('clearOutputButton').onclick = function(){
   document.getElementById('output').innerHTML = ""
 }
 document.getElementById('clearstatementButton').onclick = function(){
   document.getElementById('originalTextBox').innerHTML = ""
 }

  // -----------------Clear Input ----------------//
  function clearInput(){
   document.getElementById('inputText').value = ""
 }
 // ------------------Print All Cities -----------//
 function printAllCities(){
   document.getElementById('output').innerHTML = ""
   for(let i = 0;i< cities.length;i++){
      let num = i + 1
      document.getElementById('output').innerHTML += num + ")" +cities[i] + "<br>"
   }
   document.getElementById('originalTextBox').innerHTML = '<div>document.getElementById("output").innerHTML = ""</div>'+ 
   '<div>for(let i = 0;i< cities.length;i++){</div>'+ '<div>let num = i + 1</div>'+ '<div>document.getElementById("output").innerHTML += num + ")" +cities[i] + "<br>"</div>'+ '<div>}</div>'
 }
 // -------------Add City into the List-----------//
 function addYourCityInList(){
   let city = document.getElementById('inputText').value;
   if(!city){
      alert("please Enter your city...")
      return
   }
   cities.push(city)
   // console.log(cities)
   document.getElementById('output').innerHTML = '<span style="color:green;font-size:20px">"' + city+ '"</span> has been successfully added into the list.'
   document.getElementById('originalTextBox').innerHTML = '<div>let city = document.getElementById("inputText").value;</div>'+ 
   '<div>if(!city){</div>'+ '<div>alert("please Enter your city...")</div>'+ '<div>return</div>'+ '<div>}</div>'+ '<div>cities.push(city)</div>'
 }
 // -------------Generate Table-----------//
 function generateTable(){
   let number = document.getElementById('inputText').value;
   // if(input.value !== )
   if(!number){
      alert("please Enter any Number in input field!")
      return
   }
   document.getElementById('output').innerHTML = ""
   let limit = +prompt('Give a limit')
      for(let index = 1; index <= limit;index++){
         document.getElementById('output').innerHTML += number +' * '+[index]+' = '+ number*index + '<br>'
      }
      document.getElementById('originalTextBox').innerHTML = '<div>let city = document.getElementById("inputText").value;</div>'+ 
   '<div>if(!number){</div>'+ '<div>alert("please Enter any Number")</div>'+ '<div>return}</div>'+ '<div>document.getElementById("output").innerHTML = ""</div>'+ 
   '<div>let limit = +prompt("Give a Number")</div>'+ '<div>for(let index = 1; index <= limit;index++){</div>'+ 
   "<div>document.getElementById('output').innerHTML += number +' * '+[index]+' = '+ number*index + '<br>'}</div>"


}