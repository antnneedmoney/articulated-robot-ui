function showSection(id){
document.querySelectorAll('.card').forEach(c=>c.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function executeCommand(){
let cmd=document.getElementById("commandInput").value;
let logbox=document.getElementById("logbox");

if(cmd.trim()===""){
alert("Please enter a command.");
return;
}

document.getElementById("statusText").innerText="RUNNING";
document.getElementById("statusMirror").innerText="RUNNING";
document.getElementById("led").style.background="orange";

logbox.innerHTML += "[COMMAND] "+cmd+"<br>";
logbox.scrollTop=logbox.scrollHeight;

setTimeout(()=>{
document.getElementById("statusText").innerText="READY";
document.getElementById("statusMirror").innerText="READY";
document.getElementById("led").style.background="limegreen";

logbox.innerHTML += "[SYSTEM] Command executed successfully.<br>";
},2000);
}
