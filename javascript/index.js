// All selected elements
let ctx1 = document.querySelector("#myChart");
let ctx2 = document.querySelector("#myChart2");
let ctx3 = document.querySelector("#statics-can");
let ctx4 = document.querySelector("#statics-can2");
let form_data=document.querySelector("#form-data");
let colorcont=document.querySelector("#color-cont");
let img_con=document.querySelector(".img-con");
let crown=document.querySelectorAll("#walc");



// All charts
new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["", "", "", "", '', '', "", "", "", "", '', '', "", ""],
        datasets: [{
            label: "Sales",
            data: [8, 3, 1, 5, 4, 8, 9, 6, 5, 7, 10, 5, 8, 9],
            borderWidth: 1,
            hoverBackgroundColor: "rgb(144, 140, 140)",
            legend: {
                display: false,
            }
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        backgroundColor: "rgb(104, 100, 100)",
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false
                },
                border: {
                    display: false,
                },
            },


            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false
                },
                border: {
                    display: false,
                },
            }
        }
    }


})

new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ["", "", "", "", '', '', "", "", "", "", '', '', "", ""],
        datasets: [{
            label: "Popularity",
            data: [20, 65, 70, 90, 95, 110, 140, 160, 190, 200, 230, 250, 300],
            borderWidth: 1,
            hoverBackgroundColor: "rgb(144, 140, 140)",
            legend: {
                display: false,
            }
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        backgroundColor: "rgb(104, 100, 100)",
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false
                },
                border: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false
                },
                border: {
                    display: false
                }
            }
        }
    }


})

new Chart(ctx3, {
    type: "line",
    data: {
        labels: ["January", "Febuary", "March", "April", 'May', 'June', "July", "August", "Sepetember", "October", 'November', 'December',],
        datasets: [
            {
                label: [],
                data: [1560, 1650, 1320, 1950, 1800, 2400, 2100, 2550, 3300, 3900, 4200, 4500],
                borderWidth: 1,
                borderColor: "white",
                pointRadius: 7, // Set the point radius to 30 pixels
            },
        ],
    },

    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        backgroundColor: "rgb(217, 233, 246)",
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                }

            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false,
                },
                border: {
                    display: false,
                }
            },
        },
    },
});

new Chart(ctx4, {
    type: "line",
    data: {
        labels: ["January", "Febuary", "March", "April", 'May', 'June', "July", "August", "Sepetember", "October", 'November', 'December',],
        datasets: [
            {

                data: [500, 420, 480, 350, 600, 850, 1100, 950, 1220, 1300, 1500, 1700],
                label: "sales in",
                borderWidth: 1,
                borderColor: "black",
                pointRadius: 7, // Set the point radius to 30 pixels
            },
        ],
    },

    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        backgroundColor: "#ffffff",
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                border: {
                    display: false,
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    drawBorder: false,
                },
            },
        },
    },
});






// windows

// Set the specified width threshold
document.addEventListener("DOMContentLoaded", function () {
    let condisapeer=document.getElementById("disaper-container-fluid");
    let seprator=document.getElementById("sepator");
    let img_con=document.getElementById("img-con");
    var specifiedWidth = 991;

    // Function to check window width and add class
    function checkWindowWidth() {
        var windowWidths = window.innerWidth;

        // Check if the window width is equal to or greater than the specified width
        if (windowWidths <= specifiedWidth) {
            var element = document.getElementById('collapseExample');
            img_con.classList.add("p-5");
            condisapeer.classList.remove("container-fluid");
        } else {
            var element = document.getElementById('collapseExample');
            condisapeer.classList.add("container-fluid");
            seprator.classList.remove("p-3");
            img_con.classList.remove("p-5");

            // console.log(condisapeer)
        }
    }

    // Initial check when the page loads
    checkWindowWidth();

    // Listen for window resize events
    window.addEventListener("resize", checkWindowWidth);
})


form_data.addEventListener("click",function(){
    let ham=document.querySelector("#ham");
    let tool=document.querySelector("#tool");

    if(ham.classList.contains("disappear")){
        ham.classList.remove("disappear");
        tool.classList.remove("disappear");
    }
    else{
        ham.classList.add("disappear");
        tool.classList.add("disappear");
    console.log(form_data.placeholder);

    }
 
})


let sidebarBgcolor=["#333","#583a63","#3b3f40","#4a392b","#32323a","#344a3d","#4a2e2b","#3c3e4f","#043e50","#3b322c","#4f243e","#07313a","#352738","#3c3e4f"];
let TextColors=["#888","#af64cc","#46b7bf","#e67e22","#1ec1b8","#27ae60","#d9416c","#e74c3c","#ff6b6b","#e38e7b","#0ead87","#4ca5a9","#69b899","#e74c3c"]
let selctedindex=0;
sidebarBgcolor.map((ele,i)=>{
    let div=document.createElement("div");
    div.dataset.custom=i;
    div.style.background=ele;
    div.classList.add("color-con");
    colorcont.appendChild(div);
})


colorcont.addEventListener("click",function(e){
let sidebar=document.getElementById("collapseExample");
let dytxt=document.querySelectorAll("#dytxt");

let mydata=e.target.dataset.custom;
sidebar.style.background=e.target.style.background;
dytxt.forEach((item)=>{
    item.style.color=TextColors[mydata];
});

crown.forEach((item)=>{
    item.style.background=TextColors[mydata];
   
})
let HH=document.querySelectorAll("#HH");
HH.forEach((item)=>{
    item.style.background=sidebarBgcolor[mydata];
})
console.log(crown);
})


