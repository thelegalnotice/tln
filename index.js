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

$(".fbButton").click(function () {

    switch (OSName) {
        case 'iOS':
            window.location.href = 'fb://page/' + FACEBOOK_PAGE_ID;
            break;

        case 'Android':

            try {
                window.location.href = 'fb://page/' + FACEBOOK_PAGE_ID;
            } catch (error) {
                console.error(error);
                window.location.href = FACEBOOK_URL;
            }

            break;

        default:
            window.location.href = FACEBOOK_URL;
            break;
    }
});