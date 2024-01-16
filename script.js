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

    


  $(".hide-customize-modal").click(function(){
    $(".customize-modal").css("right" , "-384px")
  })


   // Initially hide the sidebar
  $(".customize-modal").css("right", "-384px");

  // Toggle sidebar on button click
  $(".customize-btn").click(function(e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent click from propagating
    var currentRight = $(".customize-modal").css("right");
    if (currentRight === "-384px") {
      $(".customize-modal").animate({ right: '0px' }, 100);
      $("body").addClass("modal-open"); // Add class to hide scrollbar
    } else {
      $(".customize-modal").animate({ right: '-384px' }, 100);
      $("body").removeClass("modal-open"); // Remove class to show scrollbar
    }
  });

  // Close the sidebar when clicking outside
  $(document).click(function(e) {
    if ($(".customize-modal").css("right") === "0px") {
      $(".customize-modal").animate({ right: '-384px' }, 100);
      $("body").removeClass("modal-open"); // Remove class to show scrollbar
    }
  });

  // Prevent clicks inside the sidebar from propagating to the document
  $(".customize-modal").click(function(e) {
    e.stopPropagation();
  });

//  set bg  marron//
$(".maroon").click(function () {
 
   $(".home-page").css("background-image", "url('asset/Maroon_background_dark.jpg')");
   $(".done-icon").css("display" , "none")
   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
   $(".achievement-widget-content").css("background"," #423437")
});

//  set bg golden  //
$(".golden").click(function () {
  
   $(".home-page").css("background-image", "url('asset/Orange_yellow_background_dark.jpg')");
   
   $(".done-icon").css("display" , "none")
   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
   $(".achievement-widget-content").css("background","#252423");
});


// set bg olive //

$(".olive").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Yellow_green_background_dark.jpg')");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background","#252423");
});


// set bg deep-greenish-blue //
$(".deep-greenish-blue").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Blue_green_background_dark.jpg')");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #3C4740");
});


// set bg blue-green 
$(".deep-greenish-blue").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Blue_green_background_dark.jpg')");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #252423")
});


// set bg blue-green" 

$(".blue-green").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Forest_background_dark.jpg')");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #252423")
});



// set bg pale-green" 

$(".pale-green").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Aqua_background_dark.jpg')");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #252423")
});


// set bg steel-blue
$(".steel-blue").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Blue_background_dark.jpg')");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #3F4650")
});


// set bg lavender-blue
$(".lavender-blue").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Purple_background_dark.jpg");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #4E4A52")
});


// set bg lavender-purple
$(".lavender-purple").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Pink_purple_background_dark.jpg");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #50464C")
});

// set bg salmon
$(".salmon").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Pink_background_dark.jpg");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #252423")
});

// set bg pale-beige
$(".pale-beige").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Oat_background_dark.jpg");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #252423")
});


// set bg dark-bg

$(".dark-bg").click(function () {
  
  $(".home-page").css("background-image", "url('asset/classic_home_background_dark.png");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background"," #252423")
});



});


