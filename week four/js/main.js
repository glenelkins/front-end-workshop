document.getElementById('show-more').onclick = showPhotos;

function showPhotos(event) {
  // Stop click event
  event.preventDefault();

  // Display #more-photos
  document.getElementById('more-photos').style.display = "block";
}




// $(document).ready(function(){

  // // Show more photos
  // $('#show-more').click(function(event) {
    
  //   // Stop click event
  //   event.preventDefault();

  //   // Hide link
  //   $('#show-more').hide();

  //   // Show more photos
  //   $('#more-photos').show();
  //   $('#more-photos').slideDown();

  // });

// });




// $(document).ready(function(){

//   // Show more photos
//   $('#show-more, #show-less').click(function(event) {
    
//     // Stop click event
//     event.preventDefault();

//     // Toggle link
//     $('#show-more, #show-less').toggle();

//     // Show more photos
//     $('#more-photos').slideToggle();

//   });

// });