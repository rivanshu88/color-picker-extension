const colorInput = document.getElementById('colorInput');
const hexValue = document.getElementById('hexValue');
const copyButtonrgb = document.getElementById("copyButtonrgb");
const rgbValue = document.getElementById("rgbValue");

colorInput.addEventListener("change", function () {
    hexValue.textContent = colorInput.value;
    rgbValue.textContent = hexToRGB(colorInput.value);
});

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(hexValue.textContent);
    copyButton.textContent = "Copied"
    setTimeout(() => { copyButton.textContent = "Copy" }, 1500)
});

function hexToRGB(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return `RGB(${r}, ${g}, ${b})`;
}

copyButtonrgb.addEventListener("click", function () {
    navigator.clipboard.writeText(rgbValue.textContent);
    copyButtonrgb.textContent = "Copied"
    setTimeout(() => { copyButtonrgb.textContent = "Copy" }, 1500)
});
