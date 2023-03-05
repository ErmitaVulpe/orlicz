const elements = [
    ["F_22", "F-22 Raptor"],
    ["Rafale", "Rafale"],
    ["F_16", "F-16 Fighting Falcon"],
    ["Typhoon", "Typhoon"],
    ["F_15", "F-15E Strike Eagle"],
    ["F_18", "F/A-18E/F Super Hornet"],
    ["JAS_39", "JAS 39 Gripen"],
    ["Su_35", "Su-35"],
    ["Su_27", "Su-27"],
    ["MiG_31", "MiG-31"],
    ["F_14", "F-14 Tomcat"],
    ["MiG_21", "MiG-21"],
    ["MiG_25", "MiG-25"],
    ["MiG_29", "MiG-29"],
    ["Mirage_2000", "Mirage 2000"],
    ["Su_34", "Su-34"],
    ["Av_8", "AV-8 Harrier"],
    ["F_4", "F-4 Phantom II"],
    ["Mirage_F1", "Mirage F1"],
    ["YF_12", "YF-12"],
    ["F_35", "F-35 Lightning II"],
    ["F_5", "F-5 Freedom Fighter"],
    ["JA_37", "JA-37 Viggen"],
    ["F_111", "F-111 Aardvark"]
]
// Supposed to work on offline hence variables hardcoded here



function gen_table1() {
    output = ""
    for (let i = 0; i < elements.length; i++) {
        output += `
        <div class="table1-area" data-modal-target="#${elements[i][0]}">
            <img src="./assets/img/planes/${elements[i][0]}.jpg">
            <div class="line" id="line"></div>
            <span>${elements[i][1]}</span>
        </div>`
    }

    document.getElementById("table1").innerHTML = output
}
gen_table1()


function gen_table1_alt() {
    output = ""
    for (let i = 0; i < elements.length; i++) {
        output += `
        <div class="table1-area-alt">
            <img src="./assets/img/planes/${elements[i][0]}.jpg" data-modal-target="#${elements[i][0]}">
            <div class="line" id="line"></div>
            <span data-modal-target="#${elements[i][0]}">${elements[i][1]}</span>
        </div>`
    }

    document.getElementById("table1").innerHTML = output
}
// gen_table1_alt()



// Generating scrollmenu
output = ""
for (let i = 0; i < elements.length; i++) {
    output += `
    <div class="dropddown-content-area" data-modal-target="#${elements[i][0]}">
        <div><span>${elements[i][1]}</span></div>
    </div>`
}

document.getElementById("dropddown-content-grid").innerHTML += output