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
      $(".side-nav").animate({ left: '0px' }, 10);
      // Add padding to home-page
      $(".home-page-content").animate({ paddingLeft: '250px' }, 10);
    } else {
      // Hide side-nav
      $(".side-nav").animate({ left: '-240px' }, 10);
      // Reset padding of home-page
      $(".home-page-content").animate({ paddingLeft: '0px' }, 10);
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
      $(".customize-modal").animate({ right: '0px' }, 10);
      $("body").addClass("modal-open"); // Add class to hide scrollbar
    } else {
      $(".customize-modal").animate({ right: '-384px' }, 10);
      $("body").removeClass("modal-open"); // Remove class to show scrollbar
    }
  });

  // Close the sidebar when clicking outside
  $(document).click(function(e) {
    if ($(".customize-modal").css("right") === "0px") {
      $(".customize-modal").animate({ right: '-384px' }, 10);
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
   $(".achievement-widget-content").css("background"," #43373F")
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
  $(".achievement-widget-content").css("background", "#3C4C4A !important");

  $(document).ready(function() {
    $(".achievement-widget-content").css("background", "#3C4C4A");
});

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
  $(".achievement-widget-content").css("background","#414A5E")
});


// set bg lavender-blue
$(".lavender-blue").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Purple_background_dark.jpg");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background","#504E61")
});


// set bg lavender-purple
$(".lavender-purple").click(function () {
  
  $(".home-page").css("background-image", "url('asset/Pink_purple_background_dark.jpg");
  
  $(".done-icon").css("display" , "none")
  $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  $(".achievement-widget-content").css("background","#554C5B")
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
  $(".achievement-widget-content").css("background","#252628")
});



// more btn option toggle set

// $(".more-btn").click(function() {
//   $(this).next("#id-more-btn-option").toggle();
//   $("#status-more-btn").css("display" , "flex");
// });

$("#status-more-btn").click(function(){
  $("#id-more-btn-option").toggle();
  event.stopPropagation(); // Prevents the click from propagating to the document
});

// Click event on the document
$(document).click(function() {
  $("#id-more-btn-option").hide();
});

// Click event on the .gbo-g element
$("#id-more-btn-option").click(function() {
  $(this).hide(); // This will hide .gbo-g when it is clicked
})



$("#status-full-size").click(function(){
  $("#status-task-div").css("width" , "1200px");
  $("#status-half-size").removeClass("active-option");
  $("#status-full-size").addClass("active-option");
  $(".task-status-right").css("width" , "100%")

 
  
})

$("#status-half-size").click(function(){
  $("#status-task-div").css("width" , "600px");
  $("#status-full-size").removeClass("active-option");
  $("#status-half-size").addClass("active-option");
  $(".task-status-right").css("width" , "600px")

  
})



  // Toggle the dropdown menu on click of the button
  $("#goal-more-btn").click(function(event) {
      $(".gbo-g").toggle();
      event.stopPropagation(); // Prevents the click from propagating to the document
  });

  // Click event on the document
  $(document).click(function() {
      $(".gbo-g").hide();
  });

  // Click event on the .gbo-g element
  $(".gbo-g").click(function() {
      $(this).hide(); // This will hide .gbo-g when it is clicked
  });




$("#goal-full-size").click(function(){
  $("#goal-task-div").css("width" , "1200px")
  $("#goal-half-size").removeClass("active-option");
  $("#goal-full-size").addClass("active-option");

})

$("#goal-half-size").click(function(){
  $("#goal-task-div").css("width" , "600px")
  $("#goal-full-size").removeClass("active-option");
  $("#goal-half-size").addClass("active-option");
})



// draft more btn script //
 
  // Toggle the dropdown menu on click of the button
  $(".draft-more").click(function(event) {
    $(".draft-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document
});

// Click event on the document
$(document).click(function() {
    $(".draft-option").hide();
});

// Click event on the .gbo-g element
$(".draft-option").click(function() {
    $(this).hide(); // This will hide .gbo-g when it is clicked
});



$("#draft-full-size").click(function(){
  $("#draft-task-div").css("width" , "1200px")
  $("#draft-half-size").removeClass("active-option");
  $("#draft-full-size").addClass("active-option");

})

$("#draft-half-size").click(function(){
  $("#draft-task-div").css("width" , "600px")
  $("#draft-full-size").removeClass("active-option");
  $("#draft-half-size").addClass("active-option");
})




// project more btn script //
 
  // Toggle the dropdown menu on click of the button
  $(".project-more").click(function(event) {
    $(".project-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document;
   
});

// Click event on the document
$(document).click(function() {
    $(".project-option").hide();
    
});

// Click event on the .gbo-g element
$(".project-option").click(function() {
    $(this).hide(); // This will hide .gbo-g when it is clicked
});




$("#project-full-size").click(function(){
  $("#project-task-div").css("width" , "1200px")
  $("#project-half-size").removeClass("active-option");
  $("#project-full-size").addClass("active-option");

})

$("#project-half-size").click(function(){
  $("#project-task-div").css("width" , "600px")
  $("#project-full-size").removeClass("active-option");
  $("#project-half-size").addClass("active-option");
})




/// assign // 



// project more btn script //
 
  // Toggle the dropdown menu on click of the button
  $(".assign-more").click(function(event) {
    $(".assign-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document;
   
});

// Click event on the document
$(document).click(function() {
    $(".assign-option").hide();
    
});

// Click event on the .gbo-g element
$(".assign-option").click(function() {
    $(this).hide(); // This will hide .gbo-g when it is clicked
});



$("#assign-full-size").click(function(){
  $("#assign-task-div").css("width" , "1200px")
  $("#assign-half-size").removeClass("active-option");
  $("#assign-full-size").addClass("active-option");

})

$("#assign-half-size").click(function(){
  $("#assign-task-div").css("width" , "600px")
  $("#assign-full-size").removeClass("active-option");
  $("#assign-half-size").addClass("active-option");
})



// Function to update the current date
function updateCurrentDate() {
  var currentDate = new Date();
  var dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  var month = currentDate.toLocaleDateString('en-US', { month: 'long' });
  var day = currentDate.getDate();
  
  // Format the date string
  var dateString = dayOfWeek + ', ' + month + ' ' + day;
  
  // Set the content of the element with class 'current-date'
  $('.current-date').text(dateString);
}

// Initial update on document ready
updateCurrentDate();

// Update the date every second (you can adjust the interval as needed)
setInterval(updateCurrentDate, 1000000);




// Get the current hour of the day
var currentHour = new Date().getHours();
        
// Select the element with the class 'presentation-text'
var greetingElement = $('.presentation-text');

// Define the greetings based on the time of day
var greeting;
if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning, MD';
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon, MD';
} else {
    greeting = 'Good evening, MD';
}

// Set the text content of the element to the appropriate greeting
greetingElement.text(greeting);





// dragable box // 

$(function() {
  $("#boxA, #boxB").draggable({
      containment: "#section-1",
      start: function(event, ui) {
          $(this).data("origPosition", $(this).position());
      },
      stop: function(event, ui) {
          checkOverlap($(this));
      }
  });

  function checkOverlap(draggedBox) {
      var $otherBox = draggedBox.is(".boxA") ? $("#boxB") : $("#boxA");

      if (isOverlapping(draggedBox, $otherBox)) {
          var draggedBoxOrigPosition = draggedBox.data("origPosition");
          var otherBoxPosition = $otherBox.position();

          draggedBox.animate({
              top: otherBoxPosition.top,
              left: otherBoxPosition.left
          }, 'fast');

          $otherBox.animate({
              top: draggedBoxOrigPosition.top,
              left: draggedBoxOrigPosition.left
          }, 'fast');
      } else {
          // Return the box to its original position if it's not overlapping
          draggedBox.animate({
              top: draggedBox.data("origPosition").top,
              left: draggedBox.data("origPosition").left
          }, 'fast');
      }
  }

  function isOverlapping(box1, box2) {
      var a = box1.offset();
      a.right = a.left + box1.outerWidth();
      a.bottom = a.top + box1.outerHeight();

      var b = box2.offset();
      b.right = b.left + box2.outerWidth();
      b.bottom = b.top + box2.outerHeight();

      return !(a.left > b.right || 
               a.right < b.left || 
               a.top > b.bottom ||
               a.bottom < b.top);
  }
});







});


