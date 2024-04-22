let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')

// let hamburger = document.querySelector('.burger')
let hamburger = document.getElementById('burger')
let head2 = document.querySelector('.head-2')
let check = false


item1.addEventListener('click', () => {
  item1.style.borderBottom = '2px solid #FEA116';
  item2.style.borderBottom = '1px solid gray';
  item3.style.borderBottom = '1px solid gray';
})


item2.addEventListener('click', () => {
  item2.style.borderBottom = '2px solid #FEA116';
  item1.style.borderBottom = '1px solid gray';
  item3.style.borderBottom = '1px solid gray';
})


item3.addEventListener('click', () => {
  item3.style.borderBottom = '2px solid #FEA116';
  item2.style.borderBottom = '1px solid gray';
  item1.style.borderBottom = '1px solid gray';
})

document.addEventListener("DOMContentLoaded", function () {
  // Get the container element
  var container = document.querySelector(".menu-container");

  // Function to fetch and display cards based on the provided category
  function displayCards(category) {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        // Clear the container before appending new cards
        container.innerHTML = '';

        // Iterate over the selected category of data and create Bootstrap cards
        data[category].forEach(card => {
          var cardHtml = `
   
            <div class="menu">
                <img src="${card.src}" alt="">
                <div class="content">
                    <div class="head">
                        <h3>${card.title}</h3>
                        <h3><span>${'$' + card.price}</span></h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div> 
            `;

          // Append the card HTML to the container
          container.innerHTML += cardHtml;
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  // Attach click event listeners to buttons
  document.getElementById("item1").addEventListener("click", function () {
    displayCards("breakFast");
  });

  document.getElementById("item2").addEventListener("click", function () {
    displayCards("lunch");
  });

  document.getElementById("item3").addEventListener("click", function () {
    displayCards("dinner");
  });

});
const swiper = new Swiper('.js-testimonial-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.js-testimonial-pagination',
    clickable: true
  },
  autoplay: {
    delay: 3000, // Delay between transitions in milliseconds (5 seconds in this example)
    disableOnInteraction: false, // Prevent autoplay from being stopped when user interacts with the slider
  },
  loop: true, // Enables looping
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  }
});


hamburger.addEventListener('click', ()=>{

  check = !check

  if(check){
    head2.style.left = '0%'
  } else {
    head2.style.left = '-100%'  
  }
})