// const h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let num = Math.floor(Math.random()*10)+1;
//         if(num>3){
//             reject("promise rejected");
//         }
//         h1.style.color = color;
//         console.log(`color changed to ${color}`)
//         resolve("color changed");
//     },delay)});

// }
// async function demo(){
//    try{
//     await changeColor("blue" , 1000)
//    await changeColor("green" , 1000)
//    await changeColor("yellow" , 1000)
//    await changeColor("red" , 1000)
// } catch(err){
//     console.log("err caught")
//     console.log(err)
//   } 
//     for(let i = 0; i<5; i++){
//         console.log(i);
//     }
// }




// changeColor("green").then(() => {
//     console.log("done");
//     return changeColor("red");
// }).then(()=>{
//     console.log("done");
//     return changeColor("blue");
// }).then(()=>{
//     console.log("done");
//     return changeColor("yellow");
// }).then(()=>{
//     console.log("done");
// })
// .catch(()=>{
//     console.log(rejected);
// })

// fetch(apiNew).then((result1)=>{
//     console.log(result1)
//     result1.json().then((data1)=>{
//         console.log(data1.fact);
//         return fetch(apiNew);
//     }).then((result2)=>{
//         console.log(result2)
//         result2.json().then((data2)=>{
//             console.log(data2.fact);
//         })
//     })
// }) .catch((err)=>{
//     console.log(err);
// })
// let apiNew = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let val1 =  await fetch(apiNew);
//         let data1 = await val1.json()
//         console.log(data1)
//     } catch(err){
//         console.log(err)
//     }
// }
// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// async function getFacts(){
//     try{
//     let val1 = await axios.get(url);
//     return (val1.data.message);
//     } catch(err){
//         console.log(err);
//         return "Fact not found";
//     } 

// }
let url = "https://icanhazdadjoke.com/"
let btn = document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let res =  await getJokes()
    document.querySelector("p").innerText = res
    
})

async function getJokes(){
    try{
    let config = {headers: {Accept : "application/json" } };
    let val1 = await axios.get(url , config);
    console.log(val1.data.joke);
    return val1.data.joke
    } catch(err){
        console.log(err);
        return "Joke not found"
    }
}
// let url = "http://universities.hipolabs.com/search?name=India&state-provision=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//    let country = document.querySelector("input").value;
//    console.log(country);
//    let result = await getUniv(country);
//    show(result);
// });

// function show(result) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for (let col of result) {
//        console.log(col.name);
//        let li = document.createElement("li");
//        li.innerText = col.name;
//        list.appendChild(li);
//     }
// }

// async function getUniv(country) {
//     try {
//         let val1 = await axios.get(url + country);
//         return val1.data;
//     } catch (err) {
//         console.log(err);
//     }
// }
