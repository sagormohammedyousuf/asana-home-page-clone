$(document).ready(function () {

  // modal open and close //
  $("#create-modal").click(function () {
    $(".create-modal").toggle();
  });

  // when click any where on my screen then close modal // 
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.create-modal, #create-modal').length) {
      $(".create-modal").hide();
    }
  });


  // profile modal script // 

  $(".profile").click(function () {
    $(".profile-modal").toggle();
  });

  //   when click any where on my screen then close modal // 
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.profile, .profile-modal').length) {
      $(".profile-modal").hide();
    }
  });


  $(".menu-icon").click(function () {
    if ($(".side-nav").css("left") === "-240px") {
      // Show side-nav
      $(".side-nav").animate({ left: '0px' }, 100);
      // Add padding to home-page
      $(".home-page-content").animate({ paddingLeft: '250px' }, 100);
    } else {
      // Hide side-nav
      $(".side-nav").animate({ left: '-240px' }, 100);
      // Reset padding of home-page
      $(".home-page-content").animate({ paddingLeft: '0px' }, 100);
    }
  });

    
  // $(document).ready(function() {
  //   $(".more-btn").click(function () {
  //     $(".more-btn-option").toggle();
  //   });
  
  //   // When clicking anywhere on the screen, close the modal
  //   $(document).on('click', function (e) {
  //     // Check if the clicked area is neither the more-btn nor any of its descendants
  //     // And also not the more-btn-option nor any of its descendants
  //     if (!$(e.target).closest('.more-btn').length && !$(e.target).closest('.more-btn-option').length) {
  //       $(".more-btn-option").hide();
  //     }
  //   });
  // });
  






  $(".customize-btn").click(function(e) {
    e.stopPropagation(); // Prevent click from propagating to document

    if ($(".customize-modal").css("right") === "-384px") {
      // Show side-nav
      $(".customize-modal").animate({ right: '0px' }, 100);
    } else {
      // Hide side-nav
      $(".customize-modal").animate({ right: '-384px' }, 100);
    }
  });

  // Close the customize-modal when clicking anywhere on the screen
  $(document).click(function(e) {
    // Check if the clicked area is neither the customize-modal nor any of its descendants
    if (!$(e.target).closest('.customize-modal').length) {
      // Hide side-nav if it is open
      if ($(".customize-modal").css("right") === "0px") {
        $(".customize-modal").animate({ right: '-384px' }, 100);
      }
    }
  });

  // Prevent the click inside the customize-modal from propagating to document
  $(".customize-modal").click(function(e) {
    e.stopPropagation();
  });






});


