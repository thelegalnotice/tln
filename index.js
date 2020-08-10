var OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
if (navigator.appVersion.indexOf("iOS") != -1) OSName = "iOS";
if (navigator.appVersion.indexOf("android") != -1) OSName = "android";



document.write('Your OS: ' + OSName);

OS();



function OS() {
    console.log(OSName);
}


$(".fbButton").click(function () {

    switch (OSName) {
        case 'iOS':
            $('.facebookAnchor').prop("href", "fb://page/106531041160550");
            window.location.href = 'fb://page/106531041160550';

            break;

        case 'MacOS':
            $('.facebookAnchor').prop("href", "https://www.facebook.com/thelegalnotice");
            window.location.href = 'https://www.facebook.com/thelegalnotice';
            break;

    }

});