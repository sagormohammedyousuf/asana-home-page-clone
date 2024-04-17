
  
  
// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar-month');
//     var calendarWeek = document.getElementById('calendar');

//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         timeZone: 'UTC',
//         initialView: 'dayGridMonth',
//         headerToolbar: {
//             left: 'today,prev,next,title',
//             center: "",  
//             right: 'filter,dayGridWeek'      
//         },
//         editable: true,

//         // dayHeaderContent: function(arg) {
//         //     var dayIndex = arg.date.getDay();
//         //     var dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//         //     return dayNames[dayIndex];
//         // },

//         events: generateEvents(),

        
       
//         customButtons: {
//             dayGridWeek: {
//                 text: "Week view",
//                 click: function () {
//                     calendarEl.style.display = 'none';
//                     calendarWeek.style.display = 'flex' ;
          
                   
//                 }
//             },filter: {
              
//                 // icon: " bi bi-filter",
//                 text: "Filter",
//                 click: function () {
                   
          
                   
//                 }
//             }
          
//         },


//         // add event //

//         eventContent: function (arg) {
//             const containerEl = document.createElement('div');
//             containerEl.classList.add('event-task-container');
//             const inputField = document.createElement('input');
//             inputField.setAttribute('type', 'text');
//             inputField.classList.add('event-input');
//             const addButton = document.createElement('button');
//             addButton.innerHTML = '<img src="icon/plus.svg"><p>Add task</p>';
//             addButton.classList.add('event-add-task');
      
      
      
//             addButton.addEventListener('click', function () {
//               toggleInputField();
//           });
          
//           inputField.addEventListener('keydown', function(event) {
//               if (event.keyCode === 13) { // Check if Enter key is pressed
//                   toggleInputField();
//               }
//           });
          
//           function toggleInputField() {
//               const inputValue = inputField.value.trim();
//               if (inputValue !== '') {
//                   inputField.style.display = 'block';
//                   inputField.blur();
//               } else {
//                   inputField.focus();
//                   if (inputField.style.display === 'none' || inputField.style.display === '') {
//                       inputField.style.display = 'block';
//                       inputField.focus();
//                   } else {
//                       inputField.style.display = 'none';
//                   }
//               }
//           }
          
      
      
      
      
      
//             containerEl.appendChild(inputField);
//             containerEl.appendChild(addButton);
//             return { domNodes: [containerEl] };
//           },


//     });

//     calendar.render();
// });























