//fb URLs
const FACEBOOK_URL = "https://www.facebook.com/thelegalnotice";
const FACEBOOK_PAGE_ID = "106531041160550";


var OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
if (navigator.appVersion.indexOf("iOS") != -1) OSName = "iOS";
if (navigator.appVersion.indexOf("Android") != -1) OSName = "Android";

document.write('Your OS: ' + OSName);

function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log(ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

$(".fbButton").click(function () {

    switch (OSName) {
        case 'iOS':
            if (isFacebookApp()) {
                window.location.href = 'fb://page/' + FACEBOOK_PAGE_ID;
            } else {
                window.location.href = FACEBOOK_URL;
            }
            break;

        case 'Android':

            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/FBAV/i)) {
                window.location.href = 'fb://page/' + FACEBOOK_PAGE_ID;
            } else {
                window.location.href = 'fb://page/' + FACEBOOK_PAGE_ID;
            }

            break;

        default:
            window.location.href = FACEBOOK_URL;
            break;
    }
});




// This works fine for me in JavaScript:

// 