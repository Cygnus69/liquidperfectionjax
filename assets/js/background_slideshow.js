var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'assets/images/work/Liquidperfection 000.jpg';
images[1] = 'assets/images/work/Liquidperfection 001.jpg';
images[2] = 'assets/images/work/Liquidperfection 002.jpg';
images[3] = 'assets/images/work/Liquidperfection 003.jpg';
images[4] = 'assets/images/work/Liquidperfection 004.jpg';
images[5] = 'assets/images/work/Liquidperfection 005.jpg';
images[6] = 'assets/images/work/Liquidperfection 006.jpg';
images[7] = 'assets/images/work/Liquidperfection 007.jpg';
images[8] = 'assets/images/work/Liquidperfection 008.jpg';
images[9] = 'assets/images/work/Liquidperfection 009.jpg';
images[10] = 'assets/images/work/Liquidperfection 010.jpg';
images[11] = 'assets/images/work/Liquidperfection 011.jpg';
images[12] = 'assets/images/work/Liquidperfection 012.jpg';
images[13] = 'assets/images/work/Liquidperfection 013.jpg';
images[14] = 'assets/images/work/Liquidperfection 014.jpg';
images[15] = 'assets/images/work/Liquidperfection 015.jpg';
images[16] = 'assets/images/work/Liquidperfection 016.jpg';
images[17] = 'assets/images/work/Liquidperfection 017.jpg';
images[18] = 'assets/images/work/Liquidperfection 018.jpg';
images[19] = 'assets/images/work/Liquidperfection 019.jpg';
images[20] = 'assets/images/work/Liquidperfection 020.jpg';

function changePicture() {
    document.getElementById("banner").style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
