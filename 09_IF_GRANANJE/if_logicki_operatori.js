//petnaesti zadatak

let t = -25;
 if(t < -15 || t > 40) {
    console.log(`Ekstremna temperatura`);
 } else {
    console.log(`Temperatura nije ekstremna`);
 }

 //2.nacin

 if(t >= -15 && t <= 40) {
    console.log(`Temperatura nije ekstremna`);
 } else {
    console.log(`Temperatura je ekstremna`);
 }

 //sesnaesti zadatak 

 let d = new Date();
 let g = d.getFullYear();

 if(g % 4 == 0) {
    if(g % 100 != 0) {
        console.log(`Godina je prestupna`);
    }
 } else if(g % 400 ==0) {
    console.log(`Godina je prestupna`);
 } else {
    console.log(`Godina nije prestupna`);
 }

  //sedamnaesti zadatak 

  let dat = new Date();
  let dan = dat.getDay();
  let sat = dat.getHours();

  if(dan != 0 || dan != 6) {
    if(sat >= 10 && sat < 18) {
        console.log(`Otvoreno`);
        document.write('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fopen-by-cartoon-gm1127531255-297204496&psig=AOvVaw0xa2X9tUon8sQvIScPc02P&ust=1701804019738000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKi9q5PA9oIDFQAAAAAdAAAAABAE">');
    } else {
        console.log(`Zatvoreno`);
        document.write(`<img src="https://www.shutterstock.com/shutterstock/photos/521853034/display_1500/stock-vector-closed-door-with-a-sign-closed-for-no-reason-cartoon-vector-flat-style-concept-illustration-521853034.jpg">`);
    }
  } else {
    if(sat >= 9 && sat < 20) {
        console.log(`Otvoreno`);
        document.write('<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fopen-by-cartoon-gm1127531255-297204496&psig=AOvVaw0xa2X9tUon8sQvIScPc02P&ust=1701804019738000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKi9q5PA9oIDFQAAAAAdAAAAABAE">');
    }
    else {
        console.log(`Zatvoreno`);
        document.write(`<img src="https://www.shutterstock.com/shutterstock/photos/521853034/display_1500/stock-vector-closed-door-with-a-sign-closed-for-no-reason-cartoon-vector-flat-style-concept-illustration-521853034.jpg">`);
    }
  }

  //osamnaesti zadatak

  // a.

  let x = 8;
  let y = 5;
  let z = 3;

  let max = x;

  if(max < y) {
    max = y;
  }
  if(max < z) {
    max = z;
  }
  console.log(max);

  // b.

  let mx = null;
  
  if(x > y) {
    mx = x;
  }
  else {
    mx = y;
  }
  if (mx < z) {
    mx = z;
  }
  console.log(max);

  // c.

  if(x > y) {
    if(x > z) {
        console.log(x);
    } else {
        console.log(z);
    }
   }
   else if(y > z) {
        console.log(y);
   }

    // d.

    if(x > y && x > z) {
        console.log(x);
    }
    else if(y > x && y > z) {
        console.log(y);
    } 
    else {
        console.log(z);
    }