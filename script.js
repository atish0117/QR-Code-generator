let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR() {

    if (qrText.value==="") {
            qrText.classList.add('error')
            setTimeout(() => {
                    qrText.classList.remove('error')
                }, 1000);
        }
        else{
            // qrImage.src =  "  https://quickchart.io/qr?text="+qrText.value+"&centerImageUrl=https://cdn-icons-png.flaticon.com/512/1389/1389234.png"
            qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+qrText.value ;
            imgBox.classList.add('show-img');
        }
        qrText.value=""
}