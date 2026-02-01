const frm = document.querySelector('#frm');
const spinner = document.querySelector('#loading');
const qrcodeElement = document.querySelector('#qrcode');
const btnSave = document.querySelector('#btn-save');

let qrImage = null; // store latest QR image

frm.addEventListener('submit', function (e) {
  e.preventDefault();

  const url = document.querySelector('#url').value;
  const size = document.querySelector('#size').value;
  const clrDark = document.querySelector('#colorDark').value;
  const clrLight = document.querySelector('#colorLight').value;

  if (url.trim() === "") {
    alert("Please enter a URL");
    return;
  }

  spinner.style.display = "block";
  qrcodeElement.innerHTML = "";
  qrImage = null;

  setTimeout(() => {
    spinner.style.display = "none";

    // ✅ Generate QR
    new QRCode("qrcode", {
      text: url,
      width: size,
      height: size,
      colorDark: clrDark,
      colorLight: clrLight,
      correctLevel: QRCode.CorrectLevel.H
    });

    // ✅ Capture generated QR image
    setTimeout(() => {
      qrImage = qrcodeElement.querySelector("img");
    }, 300);

  }, 500);
});

// ✅ DOWNLOAD BUTTON LOGIC
btnSave.addEventListener("click", function () {
  if (!qrImage) {
    alert("Generate QR code first");
    return;
  }

  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qrcode.png";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
