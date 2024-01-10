console.log('Nizovi objekata');

let blog1 = {
    title: 'If naredba grananja',
    likes: 50,
    dislikes: 21
};

let blog2 = {
    title: 'While naredba',
    likes: 25,
    dislikes: 36
};

let blog3 = {
    title: 'For naredba',
    likes: 100,
    dislikes: 12
};

let arrBlogs = [blog1, blog2, blog3];
//ispis niza objekata
console.log(arrBlogs);

//ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

//ispis jednog propertija iz niza objekata
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]['title']);

//ispis naslova svih elemenata iz niza
//for petlja
for(let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

arrBlogs[1].title = 'While petlja';

//ispis naslova svih elemenata iz niza
//forEach
arrBlogs.forEach(obj => {
    console.log(obj.title, obj.likes);
});


//////////////////////////////////////

// zadatak 1
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let ukupanBrLike = nizObj => {
    let sum = 0;
    nizObj.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}
console.log(`Suma lajkova je: ${ukupanBrLike(arrBlogs)}`);

// zadatak 2
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let averageLikes = niz => {
    /** let sum = ukupanBrLike(niz);
    let br = niz.length;
    return sum / br; **/
    return ukupanBrLike(niz) / niz.length;
}
console.log(`Prosecan broj lajkova je: ${averageLikes(arrBlogs)}`);

// zadatak 3
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let nasloviPoz = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].likes > niz[i].dislikes) {
            console.log(`Blogovi sa vise lajkova od dislajkova: ${niz[i].title}`);
        }
    }
}
nasloviPoz(arrBlogs);

// zadatak 4
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let nasloviDuploLajkova = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].likes >= 2 * niz[i].dislikes) {
            console.log(`Blog koji ima najmanje duplo vise lajkova od dislajkova: ${niz[i].title}`);
        }
    }
}
nasloviDuploLajkova(arrBlogs);

//zadatak 5
//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let nasloviUzvicnik = niz => {
    niz.forEach(obj => {
        if(obj.title[obj.title.length-1] == '!') {
            console.log(`Naslovi koji se zavrsavaju uzvicnikom: ${obj.title}`);
        }
    })
}
nasloviUzvicnik(arrBlogs);
