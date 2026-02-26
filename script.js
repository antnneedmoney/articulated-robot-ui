function showSection(sectionId){
document.querySelectorAll('.content').forEach(sec=>{
sec.classList.remove('active');
});
document.getElementById(sectionId).classList.add('active');
}

function executeCommand(){
let cmd=document.getElementById("commandInput").value;
let responseBox=document.getElementById("commandResponse");
let logbox=document.getElementById("logbox");

if(cmd.trim()===""){
responseBox.innerHTML="Please enter a command.";
return;
}

responseBox.innerHTML="Processing command: <b>"+cmd+"</b>";

logbox.innerHTML += ">> "+cmd+"<br>";
logbox.scrollTop=logbox.scrollHeight;

document.getElementById("statusText").innerText="RUNNING";
document.getElementById("led").style.background="orange";

setTimeout(()=>{
document.getElementById("statusText").innerText="READY";
document.getElementById("led").style.background="limegreen";
responseBox.innerHTML="Command executed successfully.";
logbox.innerHTML += "Command executed.<br>";
},2000);
}