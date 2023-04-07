let path = "https://raw.githubusercontent.com/CrackN147/DinosaurWay2/production/data/langs.json";

// let ajaxExample = new XMLHttpRequest();
// ajaxExample.open("GET", path, true);
// ajaxExample.onload = function() {
//   let data = JSON.parse(this.responseText);
//   setTimeout(() => {
//     alert(data.noPosts);
//   }, 3000)
// }
// ajaxExample.send();


const firstAsync = async () => {
  return await fetch(path).then(response => {
    let data = response.json();
    alert(data.noPosts);
  });
  
}
firstAsync();

// let myPromise = new Promise(function(myResolve, myReject) {

// });

