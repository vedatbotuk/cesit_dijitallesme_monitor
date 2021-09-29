let jsonData, readedData, x, y;
let file = "../data_master.json"
// let file = "../cesit_dijitallesme_monitor/data_master.json"
let post = "";


fetch(file)
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
        jsonData = data;
        readData();
        $("#container-id").html(post);
    })


function readData() {
    readedData = jsonData["Devices"];
    // console.log(readedData);

    // let counter = 0;
    for (let x in readedData) {
        if (readedData.hasOwnProperty(x)) {
            console.log(x);
            post += "<div class='postIt'><table>" + "<article id='container-id" + x + "' class='container'><hr1 style='border-bottom: 0;'>" + "<h3>" + "Makine " + x + "</h3>" + "</hr1></article>";
            for (y in readedData[x]) {
                if (readedData[x].hasOwnProperty(y)) {
                    // console.log(x);
                    // console.log(y);
                    post += "<tr><td><b>" + y + "</b></td><td>" + readedData[x][y] + "</td></tr>";
                }
            }
            post += "</table></div>";

            if (readedData[x]["Makine Durumu"] === "Kapalı") {
                // console.log(readedData[x]["Makine Durumu"]);
                // console.log("#element " + counter);
                $(document).ready(function () {
                    $("#container-id" + x).css("background", "rgba(189,189,189,0.5)")
                });
            }
            if (readedData[x]["Makine Durumu"] === "Duruyor") {
                // console.log(readedData[x]["Makine Durumu"]);
                // console.log("#element " + counter);
                $(document).ready(function () {
                    $("#container-id" + x).css("background", "rgba(255,50,50,0.5)")
                });
            }
            if (readedData[x]["Makine Durumu"] === "Duruyor - Arıza") {
                // console.log(readedData[x]["Makine Durumu"]);
                // console.log("#element " + counter);
                $(document).ready(function () {
                    $("#container-id" + x).css("background", "rgba(252,215,86,0.5)")
                });
            }

            if (readedData[x]["Makine Durumu"] === "Duruyor - Bobin değişimi") {
                // console.log(readedData[x]["Makine Durumu"]);
                // console.log("#element " + counter);
                $(document).ready(function () {
                    $("#container-id" + x).css("background", "rgba(135,255,231,0.5)")
                });
            }

            if (readedData[x]["Makine Durumu"] === "Duruyor - Çözgü") {
                // console.log(readedData[x]["Makine Durumu"]);
                // console.log("#element " + counter);
                $(document).ready(function () {
                    $("#container-id" + x).css("background", "rgba(213,135,255,0.5)")
                });
            }

            if (readedData[x]["Makine Durumu"] === "Duruyor - Ayar") {
                // console.log(readedData[x]["Makine Durumu"]);
                // console.log("#element " + counter);
                $(document).ready(function () {
                    $("#container-id" + x).css("background", "rgba(78,137,255,0.5)")
                });
            }

            if (readedData[x]["Makine Durumu"] === "Çalışıyor") {
                // console.log(readedData[x]["Makine Durumu"]);
                // $("div").eq("#post" + x).css("background", "rgba(71,255,8,0.5)");
                // $("table").eq("#post"+ x).css("background", "rgba(71,255,8,0.5)");
                $(document).ready(function () {
                    // console.log(counter);
                    $("#container-id" + x).css("background", "rgba(71,255,8,0.5)")
                });
            }
        }
    }
}

function myFunction() {
    document.getElementById("myForm").submit();
}

let previous = null;
let current = null;


setInterval(function () {

    $.getJSON(file, function (json) {
        current = JSON.stringify(json);
        if (previous && current && previous !== current) {
            console.log('refresh');
            location.reload();
        }
        previous = current;
    });
}, 10000);





