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




  $(".hide-customize-modal").click(function () {
    $(".customize-modal").css("right", "-384px")
  })


  // Initially hide the sidebar
  $(".customize-modal").css("right", "-384px");

  // Toggle sidebar on button click
  $(".customize-btn").click(function (e) {
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
  $(document).click(function (e) {
    if ($(".customize-modal").css("right") === "0px") {
      $(".customize-modal").animate({ right: '-384px' }, 10);
      $("body").removeClass("modal-open"); // Remove class to show scrollbar
    }
  });

  // Prevent clicks inside the sidebar from propagating to the document
  $(".customize-modal").click(function (e) {
    e.stopPropagation();
  });









  // //  set bg  marron//
  // $(".maroon").click(function () {

  //    $(".home-page").css("background-image", "url('asset/Maroon_background_dark.jpg')");
  //    $(".done-icon").css("display" , "none")
  //    $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //    $(".achievement-widget-content").css("background"," #43373F")
  // });

  // //  set bg golden  //
  // $(".golden").click(function () {

  //    $(".home-page").css("background-image", "url('asset/Orange_yellow_background_dark.jpg')");

  //    $(".done-icon").css("display" , "none")
  //    $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //    $(".achievement-widget-content").css("background","#252423");
  // });


  // // set bg olive //

  // $(".olive").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Yellow_green_background_dark.jpg')");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background","#252423");
  // });


  // // set bg deep-greenish-blue //
  // $(".deep-greenish-blue").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Blue_green_background_dark.jpg')");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background", "#3C4C4A !important");

  //   $(document).ready(function() {
  //     $(".achievement-widget-content").css("background", "#3C4C4A");
  // });

  // });




  // // set bg blue-green 
  // $(".deep-greenish-blue").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Blue_green_background_dark.jpg')");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background"," #252423")
  // });


  // // set bg blue-green" 

  // $(".blue-green").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Forest_background_dark.jpg')");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background"," #252423")
  // });



  // // set bg pale-green" 

  // $(".pale-green").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Aqua_background_dark.jpg')");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background"," #252423")
  // });


  // // set bg steel-blue
  // $(".steel-blue").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Blue_background_dark.jpg')");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background","#414A5E")
  // });


  // // set bg lavender-blue
  // $(".lavender-blue").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Purple_background_dark.jpg");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background","#504E61")
  // });


  // // set bg lavender-purple
  // $(".lavender-purple").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Pink_purple_background_dark.jpg");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background","#554C5B")
  // });

  // // set bg salmon
  // $(".salmon").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Pink_background_dark.jpg");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background"," #252423")
  // });

  // // set bg pale-beige
  // $(".pale-beige").click(function () {

  //   $(".home-page").css("background-image", "url('asset/Oat_background_dark.jpg");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background"," #252423")
  // });


  // // set bg dark-bg

  // $(".dark-bg").click(function () {

  //   $(".home-page").css("background-image", "url('asset/classic_home_background_dark.png");

  //   $(".done-icon").css("display" , "none")
  //   $(this).html("<img src='icon/done_.svg' class='done-icon'>");
  //   $(".achievement-widget-content").css("background","#252628")
  // });








  // Function to set background and save choice to local storage
  function setBackgroundAndSave(choice, background, bgColor) {
    $(".home-page").css("background", background);
    $(".achievement-widget-content").css("background", bgColor);
    $(".done-icon").css("display", "none");
    $(choice).html("<img src='icon/done_.svg' class='done-icon'>");
    localStorage.setItem("background_choice", choice); // Save choice to local storage
  }

  // Function to load background from local storage
  function loadBackgroundFromStorage() {
    var choice = localStorage.getItem("background_choice");
    if (choice) {
      $(choice).click(); // Trigger the click event for the stored choice
    }
  }

  // Click handlers for each background option
  $(".maroon").click(function () {
    setBackgroundAndSave(".maroon", "linear-gradient(208deg, hsla(317, 30%, 14%, 1) 26%, hsla(312, 15%, 13%, 1) 40%, hsla(220, 5%, 12%, 1) 100%)", "#43373F");
  });


  $(".golden").click(function () {
    setBackgroundAndSave(".golden", "linear-gradient(208deg, hsla(34, 28%, 21%, 1) 26%, hsla(48, 7%, 14%, 1) 60%, hsla(220, 5%, 12%, 1) 99%)", "#252423");
  });

  $(".olive").click(function () {
    setBackgroundAndSave(".olive", "linear-gradient(208deg, hsla(76, 15%, 19%, 1) 26%, hsla(84, 7%, 14%, 1) 60%, hsla(220, 5%, 12%, 1) 100%)", "#252423");
  });

  $(".deep-greenish-blue").click(function () {
    setBackgroundAndSave(".deep-greenish-blue", "linear-gradient(208deg, hsl(174, 22%, 18%) 26%, hsla(192, 14%, 14%, 1)55%, hsla(220, 5%, 12%, 1) 99%)", "#3C4C4A");
  });

  $(".blue-green").click(function () {
    setBackgroundAndSave(".blue-green", "linear-gradient(208deg, hsla(174, 23%, 17%, 1) 35%, hsla(185, 15%, 14%, 1) 53%, hsla(220, 5%, 12%, 1) 99%)");
  });

  $(".pale-green").click(function () {
    setBackgroundAndSave(".pale-green", "linear-gradient(208deg, hsla(180, 10%, 24%, 1) 26%, hsla(192, 10%, 20%, 1) 44%, hsla(220, 5%, 12%, 1) 99%)");
  });

  $(".steel-blue").click(function () {
    setBackgroundAndSave(".steel-blue", "linear-gradient(208deg, hsla(221, 33%, 23%, 1) 15%, hsla(219, 30%, 21%, 1) 25%, hsla(220, 5%, 12%, 1) 99%)", "#414A5E");
  });

  $(".lavender-blue").click(function () {
    setBackgroundAndSave(".lavender-blue", "linear-gradient(208deg, hsla(245, 16%, 27%, 1) 31%, hsla(240, 13%, 19%, 1) 50%, hsla(220, 5%, 12%, 1) 99%)", "#504E61");
  });

  $(".lavender-purple").click(function () {
    setBackgroundAndSave(".lavender-purple", "linear-gradient(208deg, hsla(276, 16%, 25%, 1) 25%, hsla(279, 14%, 23%, 1) 35%, hsla(220, 5%, 12%, 1) 99%)", "#554C5B");
  });

  $(".salmon").click(function () {
    setBackgroundAndSave(".salmon", "linear-gradient(208deg, hsla(357, 14%, 29%, 1) 25%, hsla(354, 14%, 27%, 1) 30%, hsla(220, 5%, 12%, 1) 99%)", "#252423");
  });

  $(".pale-beige").click(function () {
    setBackgroundAndSave(".pale-beige", "linear-gradient(208deg, hsla(220, 2%, 24%, 1) 25%, hsla(240, 2%, 18%, 1) 55%, hsla(220, 5%, 12%, 1) 99%)", "#252423");
  });

  $(".dark-bg").click(function () {
    setBackgroundAndSave(".dark-bg", "linear-gradient(208deg, hsla(220, 5%, 12%, 1) 30%, hsla(220, 5%, 12%, 1) 44%, hsla(220, 5%, 12%, 1) 99%)", "#252628");
  });

  // Load background from local storage when the page loads
  $(document).ready(function () {
    loadBackgroundFromStorage();
  });



  // more btn option toggle set

  // Toggle the dropdown menu on click of the button
  $("#status-more-btn").click(function (event) {
    $(".z").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document
  });

  // Click event on the document
  $(document).click(function () {
    $(".z").hide();
  });

  // Click event on the .gbo-g element
  $("z").click(function () {
    $(this).hide(); // This will hide .gbo-g when it is clicked
  });



  $("#status-full-size").click(function () {
    $("#status-task-div").css("width", "1200px");
    $("#status-half-size").removeClass("active-option");
    $("#status-full-size").addClass("active-option");
    $(".task-status-right").css("width", "100%")



  })

  $("#status-half-size").click(function () {
    $("#status-task-div").css("width", "592px");
    $("#status-full-size").removeClass("active-option");
    $("#status-half-size").addClass("active-option");
    $(".task-status-right").css("width", "592px")


  })



  // Toggle the dropdown menu on click of the button
  $("#goal-more-btn").click(function (event) {
    $(".gbo-g").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document
  });

  // Click event on the document
  $(document).click(function () {
    $(".gbo-g").hide();
  });

  // Click event on the .gbo-g element
  $(".gbo-g").click(function () {
    $(this).hide(); // This will hide .gbo-g when it is clicked
  });




  $("#goal-full-size").click(function () {
    $("#goal-task-div").css("width", "1200px")
    $("#goal-half-size").removeClass("active-option");
    $("#goal-full-size").addClass("active-option");

  })

  $("#goal-half-size").click(function () {
    $("#goal-task-div").css("width", "592px")
    $("#goal-full-size").removeClass("active-option");
    $("#goal-half-size").addClass("active-option");
  })



  // draft more btn script //

  // Toggle the dropdown menu on click of the button
  $(".draft-more").click(function (event) {
    $(".draft-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document
  });

  // Click event on the document
  $(document).click(function () {
    $(".draft-option").hide();
  });

  // Click event on the .gbo-g element
  $(".draft-option").click(function () {
    $(this).hide(); // This will hide .gbo-g when it is clicked
  });



  $("#draft-full-size").click(function () {
    $("#draft-task-div").css("width", "1200px")
    $("#draft-half-size").removeClass("active-option");
    $("#draft-full-size").addClass("active-option");

  })

  $("#draft-half-size").click(function () {
    $("#draft-task-div").css("width", "592px")
    $("#draft-full-size").removeClass("active-option");
    $("#draft-half-size").addClass("active-option");
  })




  // project more btn script //

  // Toggle the dropdown menu on click of the button
  $(".project-more").click(function (event) {
    $(".project-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document;

  });

  // Click event on the document
  $(document).click(function () {
    $(".project-option").hide();

  });

  // Click event on the .gbo-g element
  $(".project-option").click(function () {
    $(this).hide(); // This will hide .gbo-g when it is clicked
  });




  $("#project-full-size").click(function () {
    $("#project-task-div").css("width", "1200px")
    $("#project-half-size").removeClass("active-option");
    $("#project-full-size").addClass("active-option");

  })

  $("#project-half-size").click(function () {
    $("#project-task-div").css("width", "592px")
    $("#project-full-size").removeClass("active-option");
    $("#project-half-size").addClass("active-option");
  })




  /// assign // 



  // project more btn script //

  // Toggle the dropdown menu on click of the button
  $(".assign-more").click(function (event) {
    $(".assign-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document;

  });

  // Click event on the document
  $(document).click(function () {
    $(".assign-option").hide();

  });

  // Click event on the .gbo-g element
  $(".assign-option").click(function () {
    $(this).hide(); // This will hide .gbo-g when it is clicked
  });



  $("#assign-full-size").click(function () {
    $("#assign-task-div").css("width", "1200px")
    $("#assign-half-size").removeClass("active-option");
    $("#assign-full-size").addClass("active-option");

  })

  $("#assign-half-size").click(function () {
    $("#assign-task-div").css("width", "592px")
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


  $("#remove-option-from").click(function () {
    $("#form").css("display", "none");

    $("#form-widgets").css("display", "block");


  })

  $("#add-form").click(function () {
    $("#form").css("display", "block");
    $("#form-widgets").css("display", "none");

  })









  // node pad more btn script //

  // Toggle the dropdown menu on click of the button
  $("#nodepad-more").click(function (event) {
    $("#nodepad-more-option").toggle();
    event.stopPropagation(); // Prevents the click from propagating to the document;

  });

  // Click event on the document
  $(document).click(function () {
    $("#nodepad-more-option").hide();

  });

  // Click event on the .gbo-g element
  $("#nodepad-more-option").click(function () {
    $(this).hide(); // This will hide .gbo-g when it is clicked
  });




  $("#note-full-size").click(function () {
    $("#private-notepad").css("width", "1200px")
    $("#note-half-size").removeClass("active-option");
    $("#note-full-size").addClass("active-option");

  })

  $("#note-half-size").click(function () {
    $("#private-notepad").css("width", "592px")
    $("#note-full-size").removeClass("active-option");
    $("#note-half-size").addClass("active-option");
  })


  $("#remove-option-private-note").click(function () {
    $("#private-notepad").css("display", "none");
    $("#note-widget").css("display", "block");
  })

  $("#add-note").click(function () {
    $("#private-notepad").css("display", "block");
    $("#note-widget").css("display", "none");

  })



















});









// // form widget drag and drop //


//   var myDragDropFunction = function() {
//     $(".draggable").draggable();
//     $(".droppable").droppable({
//         drop: function(event, ui) {
//           $(".customize-modal").append(ui.draggable);
//           $("#form-widgets").attr("style", "position: relative;");
//           $("#form").css("display", "block");
//           $("#form-widgets").css("display", "none"); 
//         }
//     });
//   };


// myDragDropFunction();




// var myDragDropFunctionTwo = function() {
//   $(".draggable-2").draggable();
//   $(".droppable").droppable({
//       drop: function(event, ui) {
//         $(".customize-modal").append(ui.draggable-2);
//         $("#note-widget").attr("style", "position: relative;");
//         $("#private-notepad").css("display", "block");
//         $("#note-widget").css("display", "none"); 
//       }
//   });
// };


// myDragDropFunctionTwo();


var myDragDropFunction = function () {
  $(".draggable, .draggable-2").draggable(); // Initialize draggable for both classes
  $(".droppable").droppable({
    drop: function (event, ui) {
      var draggedElement = ui.draggable;
      if (draggedElement.hasClass("draggable")) {
        $(".customize-modal").append(draggedElement);
        $("#form-widgets").attr("style", "position: relative;");
        $("#form").css("display", "block");
        $("#form-widgets").css("display", "none");
      } else if (draggedElement.hasClass("draggable-2")) {
        $(".customize-modal").append(draggedElement);
        $("#note-widget").attr("style", "position: relative;");
        $("#private-notepad").css("display", "block");
        $("#note-widget").css("display", "none");
      }
    }
  });
};

myDragDropFunction();



$(document).keydown(function (event) {
  // Check if Ctrl + K are pressed
  if (event.ctrlKey && event.key === "k") {
    // Prevent default browser behavior (like searching)
    event.preventDefault();

    // Focus on the search input
    $("#search").focus();
    $(".search-box").addClass("hover");

  }
});

$(document).on('click', function (event) {
  if (!$(event.target).closest('#search').length) {
    $(".search-box").removeClass("hover");
  }
});






// Function to hide the likely text
function hideKpdText() {
  $('#ctrl').hide();
  $('#k').hide();
}

// Function to show the likely text
function showKpdText() {
  $('#ctrl').css('display', 'flex');
  $('#k').css('display', 'flex');
}


// function myTask() {
//   $(".home-page-content").css("display", "none");
//   $("#side-nav-home").removeClass("side-nav-item-active");
//   $("#side-nav-task").addClass("side-nav-item-active");
//   $(".my-task").css("display", "block");


// }

// function myHome() {
//   $(".home-page-content").css("display", "block");
//   $("#side-nav-home").addClass("side-nav-item-active");
//   $("#side-nav-task").removeClass("side-nav-item-active");
//   $(".my-task").css("display", "none");
// }



function myTask() {
  $(".home-page-content").css("display", "none");
  $("#side-nav-home").removeClass("side-nav-item-active");
  $("#side-nav-task").addClass("side-nav-item-active");
  $(".my-task").css("display", "block");

  // Save state in local storage
  localStorage.setItem("currentPage", "task");
}

function myHome() {
  $(".home-page-content").css("display", "block");
  $("#side-nav-home").addClass("side-nav-item-active");
  $("#side-nav-task").removeClass("side-nav-item-active");
  $(".my-task").css("display", "none");

  // Save state in local storage
  localStorage.setItem("currentPage", "home");
}

// Check local storage on page load and set the initial state
$(document).ready(function () {
  var currentPage = localStorage.getItem("currentPage");
  if (currentPage === "task") {
    myTask();
  } else {
    myHome();
  }
});


// full calendar // 


document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');



  function closestAncestorWithClass(element, className) {
    while (element && !element.classList.contains(className)) {
      element = element.parentNode; // Use parentNode instead of parentElement
    }
    return element;
  }


  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'bootstrap',
    timeZone: 'UTC',
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'addTaskButton ,moreAction,today,prev,next,title',
      center: "",
      right: 'allTask,dayGridMonth,unScheduled'
    },
    editable: true,
    titleFormat: { month: 'long', year: 'numeric' },
    dayHeaderFormat: { day: 'numeric', weekday: 'short' },


    // dayRender: function(info) {
    //   var uniqueId = generateUniqueId(info.date);
    //   info.el.setAttribute('data-id', uniqueId);
    // }




    events: generateEvents(),
    customButtons: {
      addTaskButton: {
        text: 'Add task',
        hint: "Add task",
        click: function () {

        }
      }, filter: {

        // icon: " bi bi-filter",
        text: "Filter",
        click: function () {



        }
      },
      moreAction: {
        hint: "More action",
        icon: ' bi bi-chevron-down',
        click: function () {

        }
      },
      unScheduled: {
        text: "Unscheduled"
      },
      dayGridWeek: {
        text: "Week view",

        click: function () {
          // calendarEl.style.display = 'block'
          calendar.setOption('headerToolbar', {
            left: 'addTaskButton ,moreAction,today,prev,next,title',
            center: "",
            right: 'allTask,dayGridMonth,unScheduled'
          });
          calendar.changeView('dayGridWeek');
          //   calendar.setOption('datesSet', function(view) {
          //     updateHeaderCells(); 
          // });
        }
      },


      dayGridMonth: {
        text: "Month view",

        click: function () {

          calendar.setOption('headerToolbar', {
            left: 'today,prev,next,title',
            center: "",
            right: 'filter,dayGridWeek'
          });
          calendar.changeView('dayGridMonth');
          // calendar.setOption('datesSet', null);

          applyMonthViewStyles()
        }
      },

      allTask: {
        text: "All tasks",
      }
    },


    datesSet: function (view) {
      if (view.view.type === 'dayGridMonth') {
        applyMonthViewStyles();
        updateHeaderCellsForMonthView()

      }

      if (view.view.type === 'dayGridWeek') {
        updateHeaderCells();
      }
    },



    eventContent: function (arg) {

      const containerEl = document.createElement('div');
      containerEl.classList.add('event-task-container');
      const inputField = document.createElement('input');
      inputField.setAttribute('type', 'text');
      inputField.classList.add('event-input');
      const addButton = document.createElement('button');
      addButton.innerHTML = '<img src="icon/plus.svg"><p>Add task</p>';
      addButton.classList.add('event-add-task');


      const myText = document.createElement('span');
      containerEl.appendChild(myText);
      myText.classList.add('event-text');


      addButton.addEventListener('click', function () {

        toggleInputField();
        
      });

      inputField.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          toggleInputField();
          



        }
      });
      function setAndGet() {
        const tdElement = event.target.closest('td.fc-day');
        const globalKeyDates = tdElement.getAttribute('data-date');
        const inputField = tdElement.querySelector('.event-input');
        const inputValue = inputField ? inputField.value : '';
        localStorage.setItem(globalKeyDates, inputValue);

      }

      function toggleInputField() {
        setAndGet()


        const inputValue = inputField.value.trim();
        if (inputValue !== '') {
          inputField.blur();
          inputField.style.display = 'block';
        } else {
          inputField.focus();
          if (inputField.style.display === 'none' || inputField.style.display === '') {
            inputField.style.display = 'block';
            inputField.focus();
          } else {
            inputField.style.display = 'none';
          }
        }
      }


    window.addEventListener('load', function () {
      const tdElements = document.querySelectorAll('td.fc-day');
      tdElements.forEach((tdElement) => {
          const key = tdElement.getAttribute('data-date');
          console.log(key + 'node');
          const targetSpan = tdElement.querySelector('.event-text');
          if (targetSpan) {
              targetSpan.setAttribute('data-date', key);
              let myKey = targetSpan.getAttribute('data-date');
              let myData = localStorage.getItem(myKey);
              targetSpan.innerHTML = myData
          }
      });
  });
    


      containerEl.appendChild(inputField);
      containerEl.appendChild(addButton);
      return { domNodes: [containerEl] };
    },

  });

  calendar.render();


  function applyMonthViewStyles() {
    // Hide the last word in header cells
    const lastWords = document.querySelectorAll(".last-word");
    lastWords.forEach(function (lastWord) {
      lastWord.style.display = 'none';

    });

    // Change cursor style 
    const fcDays = document.querySelectorAll(".fc-day");
    fcDays.forEach(function (fcDay) {
      fcDay.style.cursor = 'cell';

    });

    // set custom height in dayFrame 
    const dayFrames = document.querySelectorAll('.fc-daygrid-day-frame');
    dayFrames.forEach(function (dayFrame) {
      dayFrame.style.height = '185px';
    })


    // set style on event task p //

    const eventTextS = document.querySelectorAll('.event-add-task p')
    eventTextS.forEach(function (text) {
      text.style.display = 'none !important';
    })


    const eventImgS = document.querySelectorAll('.event-add-task img')
    eventImgS.forEach(function (img) {
      img.style.display = 'none !important';
    })

    // set date right to left // 

    const dates = document.querySelectorAll('.fc-daygrid-day-number');
    dates.forEach(function (date) {
      const styles = `
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 16px;
         
        `;

      date.style.cssText = styles;

    });
    // current day style // 
    const currentDay = document.querySelectorAll('.fc-day-today div .fc-daygrid-day-top a');

    currentDay.forEach(function (day) {

      day.style = `
     margin-top: 8px;
     margin-left: 5px;
     width: 8%;

     background-color: #4573D2;
     display: flex;
     align-items:flex-start;
     justify-content: flex-start;
   
     padding: 4px 8px 4px 8px;
     border-radius: 8px;
     font-size: 16px;
     
     
     `
    })

    // set style current day position // 

    const dayPosition = document.querySelectorAll('.fc-day-today div .fc-daygrid-day-top');
    dayPosition.forEach(function (cDayP) {
      cDayP.style = `
      display: flex !important;
      align-items: center;
      justify-content:left !important;
      text-align: center !important;
      width: 100%;
      height: 30px;
      
      `
    })



    //     const thead = document.querySelectorAll('thead');
    //     thead.forEach(function(thd){
    //      thd.style.height = '24px';
    //      thd.style.backgroundColor = 'red';
    //  })


    const headerCell = document.querySelectorAll('.fc-col-header-cell-cushion');
    headerCell.forEach(function (hc) {
      hc.style.height = '0px';
      //  hc.style.color = 'red';
    });


  }

  // update header cells
  function updateHeaderCells() {
    var elements = document.querySelectorAll('.fc-col-header-cell-cushion');
    elements.forEach(function (element) {
      var text = element.textContent.trim();
      var words = text.split(' ');
      var reversedWords = words.reverse();
      reversedWords[0] = '<span class="first-word">' + reversedWords[0] + '</span>';
      reversedWords[reversedWords.length - 1] = '<span class="last-word" id="lastWord">' + reversedWords[reversedWords.length - 1] + '</span>';
      var reversedText = reversedWords.join(' ');
      element.innerHTML = reversedText;
    });
  }


  function updateHeaderCellsForMonthView() {



    var headerThead = document.querySelectorAll('thead');

    headerThead.forEach(function (th) {

      th.style.height = "24px";
      // th.style.display = 'none'
      th.style.cursor = 'pointer !important';


    })




    var elements = document.querySelectorAll('.fc-col-header-cell-cushion');

    elements.forEach(function (element) {
      element.style = `
      font-size: 12px;
      color: gray ;
      
      `
    })
    elements.forEach(function (element) {
      var text = element.textContent.trim();
      var words = text.split(' ');


      for (var i = 0; i < words.length; i++) {

        if (!isNaN(words[i])) {

          words.splice(i, 1);

          i--;
        }
      }


      var newText = words.join(' ');

      element.textContent = newText;
    });

  }
});


function generateEvents() {
  var events = [];
  var startDate = new Date('2024-01-01');
  var endDate = new Date('2026-01-01');

  // Loop through each day between start and end date
  for (var currentDate = startDate; currentDate < endDate; currentDate.setDate(currentDate.getDate() + 1)) {

    if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
      events.push({
        title: '',
        start: currentDate.toISOString().split('T')[0],
        editable: false,
        allDay: true,
        extendedProps: {
          description: 'Test 1'
        },
        color: 'none'
      });
    }
  }

  return events;
}
