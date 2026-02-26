function setJoint(id, value) {
    let percentage = (value + 180) / 360 * 100;
    document.getElementById(id).style.width = percentage + "%";
    document.getElementById(id + "val").innerText = value + "°";
}

setJoint("j1", 0);
setJoint("j2", 45);
setJoint("j3", -30);
setJoint("j4", 0);
setJoint("j5", 0);
setJoint("j6", 0);

function executeCommand() {
    let command = document.getElementById("commandInput").value;

    if (command.trim() === "") {
        alert("Please enter a command.");
        return;
    }

    alert("Command sent to articulated robot:\n\n" + command);

    // Simulasi perubahan joint
    setJoint("j1", Math.floor(Math.random()*180 - 90));
    setJoint("j2", Math.floor(Math.random()*180 - 90));
    setJoint("j3", Math.floor(Math.random()*180 - 90));
}
