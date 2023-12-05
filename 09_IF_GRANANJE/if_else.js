let a = 3;
let b = 5;
if(a > b) {
    console.log('a je vece od b');
} 
else {
    console.log('a nije vece od b');
}

//prvi zadatak

/*Zapremina bocica veca ili manja od 100ml*/ 

let zapremina = 70;
if(zapremina <= 100) {
    document.write('<p style="color: green;">Pack up</p>');
}
else {
    document.write('<p style="color: red">Throw away</p>');
}

//drugi zadatak

let t = -18;
if(t >= 0) {
    let paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'Temperatura je u plusu';
    paragraf.style.color = 'red';
}
else {
    let paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'Temperatura je u minusu'
    paragraf.style.color = 'blue';
}

//treci zadatak

let x = new Date();
let y = 2012;
let z = x.getFullYear();

if(z - y === 18) {
    document.write('<img src="IMG_6830.jpg">')
}
if(z - y < 18) {
    let doPunoletstva = 18 - (z - y);
    document.write(`<p>Do punoletstva je ostalo ${doPunoletstva} godina</p>`);
}

//cetvrti zadatak

let vreme = new Date();
let sati = vreme.getHours();
if(sati >= 12) {
    document.write('<p>Sada je popodne</p>');
}
else {
    document.write('<p>Sada je jutro</p>');
}

//peti zadatak

let pol = 'z';
 if(pol = 'z') {
    document.write(`<img src = 'https://thumbs.dreamstime.com/z/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg'>`);
 }
 else {
    document.write(`<img src = 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'`);
 }