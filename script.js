function showTab(tabId, button) {
    // hide all tabs
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active-tab");
    });

    // remove active button style
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // show selected tab
    document.getElementById(tabId).classList.add("active-tab");

    // activate button
    button.classList.add("active");
}

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

// Default tab
document.getElementById("dashboard").classList.add("active-tab");
