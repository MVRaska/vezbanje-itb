let generateImage = src => {
    let slika = document.createElement('img');
    slika.src = src;
    slika.width = 80;
    slika.style.verticalAlign = 'middle';
    slika.style.margin = '10px';
    return slika;
}

export {generateImage};