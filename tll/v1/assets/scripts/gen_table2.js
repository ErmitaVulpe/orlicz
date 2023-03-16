var dict =
[
    ["F-22 Raptor", 19700, 156.88, 0.79, 3000,                  [18.92, 13.56, 5.08], 2414, 1997, 'Lockheed_martin', 'Lockheed Martin', '<img src="./assets/img/countries/United_states.png">'],
    ["Dassault Rafale", 15000, 100.8, 0.67, 3000,               [15.27, 10.9, 5.34], 1912, 1986, 'Dassault', 'Dassault aviation', '<img src="./assets/img/countries/France.png">'],
    ["F-16 bl.52 Fighting Falcon", 12020, 76.31, 0.64, 4217,    [15.06, 9.96, 4.9], 2178, 1974, 'Lockheed_martin', 'Lockheed Martin', '<img src="./assets/img/countries/United_states.png">'],
    ["Eurofighter Typhoon", 16000, 120, 0.75, 2900,             [15.96, 10.95, 5.28], 2125, 1994, 'Eurofighter_GmbH', 'Eurofighter GmbH', '<img src="./assets/img/manufacturers/Eurofighter_GmbH.png" title="- Niemcy&#013;- Hiszpania&#013;- Wielka Brytania&#013;- Włochy">'],
    ["F-15E Strike Eagle", 14379, 130, 0.93, 3900,              [19.45, 13.05, 5.64], 2656, 1986, 'Mcdonnel_douglas', 'McDonnell Douglas', '<img src="./assets/img/countries/United_states.png">'],
    ["F/A-18E/F Super Hornet", 14552, 136, 0.93, 2346,          [18.31, 13.62, 4.88], 1915, 1995, 'Boeing', 'Boeing', '<img src="./assets/img/countries/United_states.png">'],
    ["JAS 39 Gripen", 8000, 62, 0.8, 4000,                      [15.9, 8.6, 4.5], 2100, 1988, 'Saab', 'Saab', '<img src="./assets/img/countries/Sweden.png">'],
    ["Su-35 Flanker-E", 19000, 166.6, 0.89, 3600,               [21.9, 15.3, 5.9], 2400, 2008, 'Sukhoi', 'Sukhoi', '<img src="./assets/img/countries/Russia.png">'],
    ["Su-27 Flanker", 16380, 150.5, 0.92, 3530,                 [21.9, 14.7, 5.92], 2500, 1977, 'Sukhoi', 'Sukhoi', '<img src="./assets/img/countries/Russia.png">'],
    ["MiG-31 Foxhound", 21820, 186, 0.85, 3000,                 [22.62, 13.46, 6.46], 3000, 1975, 'Mikoyan', 'Mikoyan-Gurevich', '<img src="./assets/img/countries/Russia.png">'],
    ["F-14 Tomcat", 19838, 148, 0.75, 3000,                     [19.13, 19.55, 4.9], 2485, 1970, 'Grumman', 'Grumman', '<img src="./assets/img/countries/United_states.png">'],
    ["MiG-21 Fishbed", 8725, 40.2, 0.76, 1400,                  [14.7, 7.15, 4.1], 2177, 1955, 'Mikoyan', 'Mikoyan-Gurevich', '<img src="./assets/img/countries/Russia.png">'],
    ["MiG-25 Foxbat", 20000, 147, 0.74, 2575,                   [23.82, 14.01, 6.1], 3000, 1964, 'Mikoyan', 'Mikoyan-Gurevich', '<img src="./assets/img/countries/Russia.png">'],
    ["MiG-29 Fulcrum", 11000, 99, 0.9, 2100,                    [17.32, 11.36, 4.73], 2450, 1977, 'Mikoyan', 'Mikoyan-Gurevich' , '<img src="./assets/img/countries/Russia.png">'],
    ["Dassault Mirage 2000", 7500, 64.3, 0.7, 3335,             [14.36, 9.13, 5.2], 2336, 1978, 'Dassault', 'Dassault aviation', '<img src="./assets/img/countries/France.png">'],
    ["Su-34 Fullback", 22500, 153, 0.68, 4500,                  [23.34, 14.7, 6, 09], 1900, 1990, 'Sukhoi', 'Sukhoi', '<img src="./assets/img/countries/Russia.png">'],
    ["AV-8 Harrier", 13968, 105, 0.76, 3300,                    [14.12, 9.25, 3.55], 1083, 1978, 'Mcdonnel_douglas', 'McDonnell Douglas', '<img src="./assets/img/countries/United_states.png">'],
    ["F-4 Phantom II", 13757, 106, 0.77, 2700,                  [19.2, 11.7, 5], 2370, 1958, 'Mcdonnel_douglas', 'McDonnell Douglas', '<img src="./assets/img/countries/United_states.png">'],
    ["Mirage F1", 7400, 49, 0.66, 3300,                         [15.3, 8.4, 4.5], 2338, 1966, 'Dassault', 'Dassault aviation', '<img src="./assets/img/countries/France.png">'],
    ["YF-12", 27604, 182, 0.66, 5230,                           [30.97, 16.95, 5.64], 3661, 1963, 'Lockheed_martin', 'Lockheed Martin', '<img src="./assets/img/countries/United_states.png">']
]
// Supposed to work on offline hence variables hardcoded here

function gen_table2() {
    var output = ""
    for (var rows = 0; rows < dict.length; rows++) {
        output += `<tr><td>${rows+1}.</td>`
        for (var cells = 0; cells < dict[rows].length; cells++) {
            if (cells == 5) {
                output += "<td><ul>"
                for (let lolo = 0; lolo < dict[rows][cells].length; lolo++) {
                    output += "<li>" + dict[rows][cells][lolo] + "</li>"
                }
                output += "</ul></td>"
            } else if (cells == 8) {
                output += `<td><img src="./assets/img/manufacturers/${dict[rows][cells]}.png"></td>`
            } else {
                output += "<td>" + dict[rows][cells] + "</td>"
            }
        }
        output += "</tr>"
    }
    document.getElementById("table2-content").innerHTML = output
}

gen_table2()