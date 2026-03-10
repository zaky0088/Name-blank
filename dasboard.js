let data = JSON.parse(localStorage.getItem("fiberData")) || [];

function loadDashboard(){

let tabel = document.getElementById("dataFiber");

let totalCore = 0;
let putus = 0;
let active = 0;

tabel.innerHTML="";

data.forEach((d,i)=>{

let warna="";

if(d.status=="Active"){
warna="status-active";
active++;
}

if(d.status=="Putus"){
warna="status-putus";
putus++;
}

if(d.status=="Maintenance"){
warna="status-maintenance";
}

totalCore += Number(d.core);

tabel.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${d.jalur}</td>
<td>${d.odp}</td>
<td>${d.core}</td>
<td>${d.teknisi}</td>
<td class="${warna}">${d.status}</td>
</tr>
`;

});

document.getElementById("totalJalur").innerText=data.length;
document.getElementById("totalCore").innerText=totalCore;
document.getElementById("putus").innerText=putus;
document.getElementById("active").innerText=active;

if(putus>0){
document.getElementById("networkStatus").innerText="🔴 ALERT - Jalur Putus";
document.getElementById("networkStatus").className="network-alert";
}

}

loadDashboard();
