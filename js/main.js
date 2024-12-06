(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});





$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1600:{
          items:1
      }
  }
});

// review-active
$('.testmonial_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:true,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
      },
      767:{
          items:1,
      },
      992:{
          items:1,
      },
      1200:{
          items:1,
      },
      1500:{
          items:1
      }
  }
});

$( function() {
  $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 600,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );


// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $(document).ready(function() {
          $('select').niceSelect();
        });

        // prise slider 
        







})(jQuery);	


// Store destinations data
// Store destinations data
const destinations = [
  {
      id: 1,
      name: "California",
      country: "United State of America",
      image: "img/place/1.png",
      price: 500,
      reviews: 20,
      days: 5,
      description: "California offers beautiful beaches, mountains, and vibrant cities..."
  },
  {
      id: 2,
      name: "Korola Megna",
      country: "United State of America",
      image: "img/place/2.png",
      price: 500,
      reviews: 20,
      days: 5,
      description: "Explore the beautiful landscapes of Korola Megna..."
  },
  {
      id: 3,
      name: "London",
      country: "United Kingdom",
      image: "img/place/3.png",
      price: 500,
      reviews: 20,
      days: 5,
      description: "Experience the historic charm of London..."
  },
  {
      id: 4,
      name: "Miami Beach",
      country: "United State of America",
      image: "img/place/4.png",
      price: 500,
      reviews: 20,
      days: 5,
      description: "Enjoy the sunny beaches of Miami..."
  },
  {
      id: 5,
      name: "Switzerland",
      country: "Europe",
      image: "img/place/5.png",
      price: 500,
      reviews: 20,
      days: 5,
      description: "Discover the Swiss Alps..."
  },
  {
      id: 6,
      name: "Saintmartine Iceland",
      country: "United State of America",
      image: "img/place/6.png",
      price: 500,
      reviews: 20,
      days: 5,
      description: "Experience the beauty of Iceland..."
  },
  // Add 6 more destinations with different images and details
  {
      id: 7,
      name: "Paris",
      country: "France",
      image: "img/place/1.png",
      price: 600,
      reviews: 25,
      days: 6,
      description: "Experience the city of love..."
  },
  {
      id: 8,
      name: "Tokyo",
      country: "Japan",
      image: "img/place/2.png",
      price: 700,
      reviews: 30,
      days: 7,
      description: "Explore the vibrant streets of Tokyo..."
  },
  {
      id: 9,
      name: "Rome",
      country: "Italy",
      image: "img/place/3.png",
      price: 550,
      reviews: 22,
      days: 5,
      description: "Walk through ancient Roman history..."
  },
  {
      id: 10,
      name: "Barcelona",
      country: "Spain",
      image: "img/place/4.png",
      price: 480,
      reviews: 18,
      days: 4,
      description: "Experience Spanish culture and architecture..."
  },
  {
      id: 11,
      name: "Dubai",
      country: "UAE",
      image: "img/place/5.png",
      price: 800,
      reviews: 35,
      days: 6,
      description: "Luxury and adventure in the desert..."
  },
  {
      id: 12,
      name: "Sydney",
      country: "Australia",
      image: "img/place/6.png",
      price: 750,
      reviews: 28,
      days: 7,
      description: "Discover the land down under..."
  }
];

let currentlyDisplayed = 6;
const cardsPerLoad = 6;
const maxCards = 12;

function loadMoreDestinations() {
  // Find the container that holds all the destination cards
  const destinationContainer = document.querySelector('.popular_places_area .row:nth-child(2)');
  
  if (!destinationContainer) {
      console.error('Destination container not found');
      return;
  }

  if (currentlyDisplayed >= maxCards) {
      const loadMoreBtn = document.querySelector('.more_place_btn');
      if (loadMoreBtn) {
          loadMoreBtn.style.display = 'none';
      }
      return;
  }

  // Add new cards
  for (let i = currentlyDisplayed; i < Math.min(currentlyDisplayed + cardsPerLoad, destinations.length); i++) {
      const dest = destinations[i];
      const card = createDestinationCard(dest);
      destinationContainer.appendChild(card);
  }

  currentlyDisplayed += cardsPerLoad;
  
  // Hide "More Places" button if we've reached the maximum
  if (currentlyDisplayed >= maxCards) {
      const loadMoreBtn = document.querySelector('.more_place_btn');
      if (loadMoreBtn) {
          loadMoreBtn.parentElement.parentElement.style.display = 'none';
      }
  }
}

function createDestinationCard(destination) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'col-lg-6 col-md-6';
  cardDiv.innerHTML = `
      <div class="single_place" data-id="${destination.id}">
          <div class="thumb">
              <img src="${destination.image}" alt="${destination.name}">
              <a class="prise">$${destination.price}</a>
          </div>
          <div class="place_info">
              <a href="destination_details.html"><h3>${destination.name}</h3></a>
              <p>${destination.country}</p>
              <div class="rating_days d-flex justify-content-between">
                  <span class="d-flex justify-content-center align-items-center">
                      <a href="#">(${destination.reviews} Review)</a>
                  </span>
                  <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <a href="#">${destination.days} Days</a>
                  </div>
              </div>
          </div>
      </div>
  `;
  
  // Add click event listener
  cardDiv.querySelector('.single_place').addEventListener('click', () => {
      localStorage.setItem('selectedDestination', JSON.stringify(destination));
      window.location.href = 'destination_details.html';
  });
  
  return cardDiv;
}

// Initialize destination details page
function initDestinationDetails() {
  const selectedDestination = JSON.parse(localStorage.getItem('selectedDestination'));
  if (!selectedDestination) return;

  // Update page content
  const titleElement = document.querySelector('.destination_banner_wrap h3');
  const descriptionElement = document.querySelector('.destination_info p');
  
  if (titleElement) {
      titleElement.textContent = selectedDestination.name;
  }
  if (descriptionElement) {
      descriptionElement.textContent = selectedDestination.description;
  }

  localStorage.removeItem('selectedDestination');
}

// Handle contact form submission
function handleContactForm() {
  const form = document.querySelector('.contact_join form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log('Form submitted:', Object.fromEntries(formData));
      alert('Thank you for your submission!');
      form.reset();
  });
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('travel_destination.html')) {
      // Add load more button click handler
      const loadMoreBtn = document.querySelector('.more_place_btn a');
      if (loadMoreBtn) {
          loadMoreBtn.addEventListener('click', (e) => {
              e.preventDefault();
              loadMoreDestinations();
          });
      }
  } else if (window.location.pathname.includes('destination_details.html')) {
      initDestinationDetails();
      handleContactForm();
  }
});


// Select all card links
const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior

        // Get data from the card
        const image = link.getAttribute('data-image');
        const title = link.getAttribute('data-title');
        const description = link.getAttribute('data-description');

        // Construct URL with parameters
        const url = `destination_details.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

        // Redirect to the destination details page
        window.location.href = url;
    });
});


function validateForm() {
  // Get form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Regular expression for validating email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validation logic
  if (!name) {
      alert("Please enter your name.");
      return false;
  }
  if (!email) {
      alert("Please enter your email address.");
      return false;
  }
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }
  if (!subject) {
      alert("Please enter a subject.");
      return false;
  }
  if (!message) {
      alert("Please enter your message.");
      return false;
  }

  // Show popup on successful submission
  alert("Thank you! Your message has been submitted.");
  return true;
}

