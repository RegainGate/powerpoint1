const steps = [
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQTQkfElicyXQ4ES72tn4XftAVA7nxG1QBCZ3JGx0YxWv8k?em=2&wdAr=1.7777777777777777",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQSw30ayuY2FSb60J2Ctn0mjAaKQsuiA4i7DPqIHiAOthdk?em=2&wdAr=1.7777777777777777",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQQlQabZ3dAOTaEcsh9esvceAXuJqzLu6PI7Em4f3_dK6bg?em=2&wdAr=1.7777777777777777",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQRgaQCBfl0oQbmG7fdEA6CRAVlAlXOpHOObAKoQskRgsKk?em=2&wdAr=1.7777777777777777",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQTzSUjONz79T4DVROJfNqM-ARpx_RABMY4xD7nad2wZVHM?em=2&wdAr=1.7777777777777777",
    "https://1drv.ms/p/c/1e3d202cd0e487f0/IQQ8Os6IvGyjQIRiohNF2dN8AaYlbBVYKp5ExVR9jjOVV5Y?em=2&wdAr=1.7777777777777777"
];

const passwords = [
    "annpann",
    "sanndoitti",
    "siopann",
    "kurowassann",
    "meronnpann"
];

let currentStep = 0;

const iframe = document.getElementById("step-content");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const passwordInput = document.getElementById("password");

function updateStep() {
    iframe.src = steps[currentStep];
    prevButton.disabled = currentStep === 0;
    passwordInput.value = "";
}

prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

nextButton.addEventListener("click", () => {
    if (passwordInput.value === passwords[currentStep]) {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep();
        }
    } else {
        alert("パスワードが正しくありません！");
    }
});

updateStep();
