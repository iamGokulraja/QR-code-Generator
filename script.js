const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const spinner=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-save');



function generateQRCode(e){
  e.preventDefault();
  const url=document.querySelector('#url').value;
  console.log(url);
  const size=document.querySelector('#size').value;
  console.log(size);
  const clrDark=document.querySelector('#colorDark').value;
  console.log(clrDark);
  const clrLight=document.querySelector('#colorLight').value;
  console.log(clrLight);


  if(url===""){
    alert("Please Enter Your Website Link");
  }else{
    //Show Spinner
    spinner.style.display='flex';

    setTimeout(()=>{

        //Hide Spinner
        spinner.style.display='none';
        qrcodeElement.innerHTML="";

        const qrcode=new QRCode('qrcode',{
          text: url,
          width: size,
	        height: size,
          colorDark : clrDark,
	        colorLight : clrLight,
          correctLevel : QRCode.CorrectLevel.H
        });


    },1000);

    
    createDownloadLink();
  }
}
frm.addEventListener('submit',generateQRCode);

function createDownloadLink(){
  const imgSrc=qrcodeElement.querySelector('img').src;
  console.log(imgSrc);
  btnSave.href=imgSrc;
}

btnSave.addEventListener('click',()=>{
  setTimeout(()=>{
    btnSave.download='qrcode';
  },50);
});