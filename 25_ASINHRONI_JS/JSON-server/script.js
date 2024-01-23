let request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if(request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText);
        let sum = 0;
        let minTransfera = data[0].timovi.length;
        let sportistaMinTransfera = data[0];
        let sportistiLakers = [];
        
        data.forEach(sportista => {
            sum += sportista.visina;

            if(sportista.timovi.length < minTransfera) {
                minTransfera = sportista.timovi.length;
                sportistaMinTransfera = sportista;
            }

            if(sportista.timovi.includes('Lakers')) {
                sportistiLakers.push(sportista.imePrezime);
            }
        });
        console.log(`Prosecna visina svih sportista je: ${sum / data.length}`);

        console.log(`Sportista sa najmanje transfera je: ${sportistaMinTransfera.imePrezime}`);

        console.log(`Sportisti koji su igrali u Lakers-ima su: ${sportistiLakers}`);
    } else if(request.readyState == 4) {
        console.log(`Javila se greska ${request.state}`);
    }
});
request.open('GET', 'http://localhost:3000/sportisti');
request.send();