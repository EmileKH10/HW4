// --- Step 2: Disable the irrelevant field based on selection ---
document.getElementById("trackPsy").addEventListener("click", selectPsychometric);
document.getElementById("trackMechina").addEventListener("click", selectMechina);

function selectPsychometric() {
    document.getElementById("mechina").disabled = true;
    document.getElementById("mechina").value = "";

    document.getElementById("psychometric").disabled = false;
}

function selectMechina() {
    document.getElementById("psychometric").disabled = true;
    document.getElementById("psychometric").value = "";

    document.getElementById("mechina").disabled = false;
}

// --- Step 3: Validate button logic ---
document.getElementById("validateBtn").addEventListener("click", validateForm);

function validateForm() {
    const ageVal = document.getElementById("age").value;
    const bagrutVal = document.getElementById("bagrut").value;

    const msg = document.getElementById("msg");

    // Clear previous message/state
    msg.textContent = "";
    msg.classList.remove("green");

    // i) If Bagrut is empty -> show message
    if (bagrutVal === "") {
        msg.textContent = "You should enter a bagrut grade";
        return;
    }

    // ii) If age > 30 and bagrut exists -> show green message
    const ageNum = Number(ageVal);
    if (!Number.isNaN(ageNum) && ageNum > 30) {
        msg.textContent = "You are eligible for admission to any faculty you choose";
        msg.classList.add("green");
        return;
    }

    // iii) If age <= 30 -> do not show any text (leave blank)
}
