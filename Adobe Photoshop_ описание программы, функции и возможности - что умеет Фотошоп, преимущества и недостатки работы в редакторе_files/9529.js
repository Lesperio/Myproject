window.addEventListener('load', function () {
    async function sendMetrikaVisitParams() {
        let userId;
        let baseCountryId;
        let marketingDomain;
        let countryIdByIp;

        try {
            const userDataResponse = await fetch('/api/users/me/');
            if (userDataResponse.status === 200) {
                const userDataJson = await userDataResponse.json();

                userId = userDataJson?.id;
                baseCountryId = userDataJson?.base_country_object?.region_id;
                marketingDomain = userDataJson?.marketing_domain;
            }            
        } catch (e) {
            console.log(e);
        }

        try {
            const countryByIpResponse = await fetch('/api/country-by-ip/');
            if (countryByIpResponse.status === 200) {
                const countryByIpResponseJson = await countryByIpResponse.json();

                countryIdByIp = countryByIpResponseJson?.country_id;
            }

        } catch (e) {
            console.log(e);
        }

        const counters = Ya._metrika.counters;

        for (const counter of Object.keys(counters)) {
            counters[counter].params({
                'user_id': userId,
                'base_country_id': baseCountryId,
                'marketing_domain': marketingDomain,
                'country_id_by_ip': countryIdByIp,
            })
        }

    }

    sendMetrikaVisitParams();
});
