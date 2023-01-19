const btn = document.querySelector(".random-button")
const menuBtn = document.querySelector(".menu-btn")

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.classList.add("active")
  } else {
      header.style.backgroundColor = 'initial';
  }
});


// var swiperContainer = new Swiper(".swiper-container", {
//   spaceBetween:32,
//   grapCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


var swiper = new Swiper(".mySwiper", {
  spaceBetween:32,
  grapCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


menuBtn.addEventListener("click",()=> {
  const navItem = document.querySelector(".nav-items")
  navItem.classList.toggle("active")
})
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

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    //   data.forEach( user => {
    //     //console.log(user.name);
    //     const randomIndex = Math.floor(Math.random() * data.length);
    //     console.log(data[randomIndex].name);
    //     const name = document.querySelector(".commentor-name")
    //     name.innerHTML = data[randomIndex].name
    //   });
    // }).catch(err=> console.log(err))





















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
