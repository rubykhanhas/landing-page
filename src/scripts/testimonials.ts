import $ from 'jquery';
import Glide from '@glidejs/glide';
import 'magnific-popup/dist/jquery.magnific-popup.js';

$(document).ready(function () {
    //@ts-ignore
    $('.popup').magnificPopup({
        type: 'iframe',
    });
});

new Glide('.glide', {
    autoplay: 5000,
    gap: 0,
}).mount();
