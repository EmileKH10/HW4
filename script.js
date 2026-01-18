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

document.getElementById("validateBtn").addEventListener("click", validateForm);

function validateForm() {
    const ageVal = document.getElementById("age").value;
    const bagrutVal = document.getElementById("bagrut").value;

    const msg = document.getElementById("msg");

    msg.textContent = "";
    msg.classList.remove("green");

    if (bagrutVal === "") {
        msg.textContent = "You should enter a bagrut grade";
        return;
    }

    const ageNum = Number(ageVal);
    if (!Number.isNaN(ageNum) && ageNum > 30) {
        msg.textContent = "You are eligible for admission to any faculty you choose";
        msg.classList.add("green");
        return;
    }

}
