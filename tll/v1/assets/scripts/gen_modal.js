modal_template = ["Załoga", "Długość", "Rozpiętość skrzydeł", "Masa własna", "Maks. masa startowa", "Pojemność paliwa", "Moc", "Moc z dopalaczem", "Maksymalna prędkoś", "Zasięg", "Zasięg bojowy", "Maksymalny pułap", "Maksymalne przeciążenie"]

modal_dict = [
	["F_22", "Lockheed Martin F-22 Raptor", [1, "18.92m", "13.56m", "19700kg", "38000kg", "8200kg wewnętrznie i 3800kg zbiorniki zewnętrzne", "2 x 116KN (238KN)", "2 x 156KN (312KN)", "Mach 2.25 (2414km/h)", "3220km", "850km", "20000m", "+9.0 / -3.0"], ["Gun: 1 x 20mm M61A2 480 pocisków", "6 x AIM-120C/D AMRAAM", "2 x AIM-9 Sidewinder"], "Amerykański myśliwiec przewagi powietrznej. Wykonany w technologii stealth, został zaprojektowany głównie do walki zlotnictwem ZSRR w wypadku naruszenia przestrzeni powietrznej USA, posiada jednak uzbrojenie pozwalające na atakowaniecelów naziemnych, prowadzenie wojny elektronicznej i nasłuchu elektronicznego.Samolot nosił oznaczenie YF - 22, następnieprzez trzy lata przed wprowadzeniem do służby Sił Powietrznych Stanów Zjednoczonych F / A - 22, by ostatecznie przyjąć nazwę F - 22A.Głównym wytwórcą jest koncern Lockheed Martin, odpowiedzialny za konstrukcję płatowca, uzbrojenie oraz końcowy montaż samolotu.Firma Boeing Integrated Defense Systems dostarcza natomiast skrzydła, tylną część kadłuba oraz awionikę.Pierwszy wyprodukowany egzemplarz został dostarczony do Bazy Sił Powietrznych w Nellis w stanie Nevada 14 stycznia 2003 i również w tym samym roku zmniejszono liczbę zamówionych samolotów na 277. Do końca 2004 do służby zostało wcielonych 51 F - 22, a zamówienie zostało po raz kolejny zmniejszone do 183 sztuk.Spowodowało to konflikt w USAF, które zgłaszało zapotrzebowanie na 381 samolotów.", "Lockheed_Martin_F-22_Raptor"],
	["Rafale", "Dassault Rafale", ["1 lub 2", "15.27m", "10.90m", "10300m", "24500kg", "4600kg wewnętrznioe i 3680kg zbiorniki zewnętrzne", "2 x 50KN (100KN)", "2 x 75KN (150KN)", "Mach 1.8 (1912km/h)", "3700km", "1850km", "15835m", "+9.0 / -3.6 (+11 w sytuacjach awaryjnych)"], ["Gun: 1 x 30mm M791 125 pocisków", "6 x MBDA Meteor", "2 x MBDA MICA"], " dwusilnikowy wielozadaniowy samolot myśliwski ze skrzydłami typu delta, w układzie tzw. kaczki, produkowany od lat 90. XX wieku przez francuską firmę Dassault Aviation. Rafale jest przez producenta określany jako omni rôle, czyli nadający się do wszystkich zadań, nie tak jak myśliwce wielozadaniowe, które mają rolę pierwszoplanową (myśliwca) i drugoplanową (zazwyczaj bombowca, samolotu wsparcia itp.). Dassault używa określenia omni rôle do zaakcentowania zdolności samolotu do przestawienia się z jednej roli na inną podczas wykonywania zadania. Pierwszym samolotem o takich własnościach był amerykański F/A-18 Hornet. Rafale jest produkowany w trzech wersjach, jako jedno- i dwumiejscowy samolot operujący z lotnisk na lądzie dla francuskich sił powietrznych Armée de l'air i jednomiejscowej bazującej na lotniskowcach marynarki wojennej Aéronavale. W lotnictwie francuskim Rafale zastąpią samoloty SEPECAT Jaguar, Dassault Mirage F1 i Dassault Mirage 2000, w marynarce Chance Vought F-8 Crusader i Dassault Super Étendard. Ponadto maszyna ta jest oferowana wielu potencjalnym kontrahentom zagranicznym.", "Dassault_Rafale"]
]

output = ""
for (let entry = 0; entry < modal_dict.length; entry++) {
	var element = modal_dict[entry];

	output += `
	<div class="modal" id="${element[0]}">
		<div class="modal-header">
			<span class="modal-title">${element[1]}</span>
			<button data-close-button class="close-button">&times;</button>
			</div>
			<div class="modal-body">
				<div class="left">
					<span class="left-list-header">Dokładniejsza specyfikacja:</span>
					<ul>`

	for (let i = 0; i < element[2].length; i++) {
		output += `<li><span><b>${modal_template[i]}</b> - ${element[2][i]}</span></li>`
	}

	output += `<li><span><b>Załadunek</b></span><ul>`

	for (let i = 0; i < element[3].length; i++) {
		output += `<li><span>${element[3][i]}</span></li>`
	}

	output += `</ul>
          </li>
        </ul>
      </div>
      <div class="right"><img src="./assets/img/planes/${element[0]}.jpg"></div>
			<div class="bottom">${element[4]} <span><a href="https://pl.wikipedia.org/wiki/${element[5]}" target="_blank">Czytaj dalej</a></span></div></div></div>`
}

document.getElementById("modal-container").innerHTML = output