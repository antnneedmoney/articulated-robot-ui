// ===== TAB SYSTEM =====
function showTab(tabId, button) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active-tab");
    });

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active-tab");
    button.classList.add("active");
}

document.getElementById("dashboard").classList.add("active-tab");

// ===== REAL TIME CLOCK =====
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ===== SYSTEM LOG =====
function addLog(message) {
    const logBox = document.getElementById("logBox");
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.innerText = `[${new Date().toLocaleTimeString()}] ${message}`;
    logBox.appendChild(entry);
    logBox.scrollTop = logBox.scrollHeight;
}

// ===== ROBOT STATE =====
function setStatus(state) {
    const badge = document.getElementById("statusBadge");
    badge.className = "status-badge " + state;
    badge.innerText = state.toUpperCase();
}

// ===== JOINT CONTROL =====
function setJoint(id, value) {
    let percentage = (value + 180) / 360 * 100;
    document.getElementById(id).style.width = percentage + "%";
    document.getElementById(id + "val").innerText = value + "°";
}

// ===== COMMAND EXECUTION =====
function executeCommand() {
    let command = document.getElementById("commandInput").value;
    let btn = document.querySelector(".execute-btn");

    if (command.trim() === "") {
        alert("Please enter a command.");
        return;
    }

    btn.classList.add("loading");
    btn.innerText = "Executing...";
    setStatus("running");
    addLog("Command received: " + command);

    // Simulasi parsing AI
    setTimeout(() => {
        if (command.toLowerCase().includes("pick")) {
            addLog("Detected action: PICK");
        }
        if (command.toLowerCase().includes("place")) {
            addLog("Detected action: PLACE");
        }

        addLog("Robot moving joints...");

        setJoint("j1", Math.floor(Math.random()*180 - 90));
        setJoint("j2", Math.floor(Math.random()*180 - 90));
        setJoint("j3", Math.floor(Math.random()*180 - 90));
        setJoint("j4", Math.floor(Math.random()*180 - 90));
        setJoint("j5", Math.floor(Math.random()*180 - 90));
        setJoint("j6", Math.floor(Math.random()*180 - 90));

        setTimeout(() => {
            setStatus("complete");
            addLog("Task completed successfully.");

            btn.classList.remove("loading");
            btn.innerText = "Execute Command";

            setTimeout(() => {
                setStatus("ready");
            }, 2000);

        }, 2000);

    }, 1500);
}

// INIT LOG
addLog("Robot initialized.");
addLog("System ready.");
