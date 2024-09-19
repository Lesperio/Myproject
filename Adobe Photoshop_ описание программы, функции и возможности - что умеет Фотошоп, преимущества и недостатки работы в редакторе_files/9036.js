window.addEventListener('load', function () {
    console.log('here!')
    function createIframe() {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://code.s3.yandex.net/analytics/practicum_ym_id.html'; 
        iframe.style = 'display:none';
        iframe.onload = function(e) {
            e.target.contentWindow.postMessage('no_auth_practicum_tracking_id', '*')
        };
        document.body.appendChild(iframe);
    }

    const messageHandler = function(event) {
        try {
            const practicumCookieId = event?.data && typeof event?.data === 'string' && JSON.parse(event.data);

            if (practicumCookieId?.name === 'no_auth_practicum_tracking_id') {
                const counters = Ya._metrika.counters;

                for (const counter of Object.keys(counters)) {
                    counters[counter].params({'no_auth_practicum_tracking_id': practicumCookieId?.value})
                }
            }
        } catch (e) {}
    };

    window.addEventListener('message', messageHandler)
    createIframe();
})
