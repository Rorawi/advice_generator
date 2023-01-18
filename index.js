const btn = document.querySelector(".random-button")
console.log(btn);
    fetch('https://api.adviceslip.com/advice')
    .then(res => {
      console.log(res)
      return res.json();
    })
    .then(data => {
      console.log(data);
        document.querySelector(".advice-num").textContent +=  data.slip.id
        document.querySelector(".advice").textContent = '"' + data.slip.advice + '"';

    })
    .catch(err => console.log(err))

    btn.addEventListener("click",()=> {
      window.location.reload();
    })





















// let adviceContainer = fetch("https://api.adviceslip.com/advice"
// ).then((res)=> {
// res.json()
// .then(data=> {
//     console.log(data);
// })
// })







// fetch("https://reqres.in/api/users", {
//     method:'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name:"User 1"
//     })
// })
// .then(res => {
//     if(res.ok) {
//         console.log("SUCCESS");
//     }
//     else{
//         console.log("Failure");
//     }
//     res.json()
// })
// .then(data => console.log(data))




    // data.forEach(advice => {
    //     const markup = `<li>${advice.name}</li>`;

    //     document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
    //   });
