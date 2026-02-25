// Get table body
const tableBody = document.getElementById("tableBody");
let row = document.createElement("tr");

let idCounter = 1;

document.getElementById("csvFile").addEventListener("change", function(e){

const file = e.target.files[0];
if(!file) return;

const reader = new FileReader();

reader.onload = function(event){

    const text = event.target.result.trim();

    const lines = text.split("\n");

    for(let i=1;i<lines.length;i++){

        const rowData = lines[i].split(",");

        addRow(rowData[0], rowData[1], rowData[2], rowData[3], rowData[4], rowData[5], rowData[6], rowData[7], rowData[8], rowData[9], rowData[10], rowData[11], rowData[12], rowData[13], rowData[14], rowData[15], rowData[16], rowData[17], rowData[18], rowData[19]);
    }
};

reader.readAsText(file);

});

const form = document.getElementById("recordForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Read values ONLY when form submitted
    const datetime_utc = document.getElementById("datetime_utc").value;
    const _conds = document.getElementById("_conds").value;
    const _dewptm = document.getElementById("_dewptm").value;
    const  _fog = document.getElementById("_fog").value;
    const _hail = document.getElementById("_hail").value;
    const _heatindexm = document.getElementById("_heatindexm").value;
    const _hum = document.getElementById("_hum").value;
    const _precipm = document.getElementById("_precipm").value;
    const _pressurem = document.getElementById("_pressurem").value;
    const _rain = document.getElementById("_rain").value;
    const _snow = document.getElementById("_snow").value;
    const _tempm = document.getElementById("_thunder").value;
    const _thunder = document.getElementById("severity").value;
    const _tornado = document.getElementById("_tornado").value;
    const _vism = document.getElementById("_vism").value;
    const _wdird = document.getElementById("_wdird").value;
    const _wdire = document.getElementById("_wdire").value;
    const _wgustm = document.getElementById("_wgustm").value;
    const _windchillm = document.getElementById("_windchillm").value;
    const _wspdm = document.getElementById("_wspdm").value;

    console.log(datetime_utc, _conds, _dewptm, _fog, _hail, _heatindexm, _hum, _precipm, _pressurem, _rain, _snow, _tempm, _thunder, _tornado, _vism, _wdird, _wdire, _wgustm, _windchillm, _wspdm);
    
    let row = document.createElement("tr");
    row.innerHTML = `<td>New</td>
		     <td>${datetime_utc}</td>
		     <td>${_conds}</td>
		     <td>${_dewptm}</td>
             <td>${_fog}</td>
             <td>${_hail}</td>
             <td>${_heatindexm}</td>
             <td>${_hum}</td>
             <td>${_precipm}</td>
             <td>${_pressurem}</td>
             <td>${_rain}</td>
             <td>${_snow}</td>
             <td>${_tempm}</td>
             <td>${_thunder}</td>
             <td>${_tornado}</td>
             <td>${_vism}</td>
             <td>${_wdird}</td>
             <td>${_wdire}</td>
             <td>${_wgustm}</td>
             <td>${_windchillm}</td>
             <td>${_wspdm}</td>`;
    tableBody.appendChild(row);

    form.reset();
});