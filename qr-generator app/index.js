let qrimage=document.querySelector('#qrimage');
let imgBox=document.querySelector('#imgBox');
let qrtext=document.querySelector('#qrtext');

function generateqr(){
    if(qrtext.value.length===0){
       qrtext.classList.add('error');
       setTimeout(()=>{
        qrtext.classList.remove('error');
       },1000);
    }
    else{
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    imgBox.classList.add("show-img");
    }
}