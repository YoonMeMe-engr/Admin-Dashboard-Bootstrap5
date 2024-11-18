// Aside
let asideBtn = document.querySelector(".aside-control-btn");
let aside = document.querySelector(".aside");
let backdrop = document.querySelector("._backdrop");
let closeBtn = document.querySelector(".fa-close");

asideBtn.addEventListener("click", () => {
    aside.classList.add("show");
    backdrop.classList.add("offcanvas-backdrop", "show");
});

closeBtn.addEventListener("click", () => {
    aside.classList.remove("show");
    backdrop.classList.remove("offcanvas-backdrop", "show");
})

// Chart
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar', // line
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'My First Dataset',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 20, 3],
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'rgba(255,19,132, 0.9)',
        borderColor: 'rgba(255,99,112,0.9)'

      }, {
        label: 'My Second Dataset',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 20, 3],
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'rgba(112,112,245, 1)',
        borderColor: 'rgba(112,112,245,1)'
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            // display: false,
            borderDash: [5],
            borderColor: 'transparent'
          },
          ticks: {
            stepSize: 5
          },
        },
        x: {
          grid: {
            display: false,
          },
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        }
      }
    }
});

// Data Table
	
$(document).ready( function () {
  const table = $('#example').DataTable( {
    pageLength : 5,
  } )
} );