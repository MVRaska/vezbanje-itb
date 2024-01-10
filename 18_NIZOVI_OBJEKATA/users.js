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

let user1 = {
    username: 'Pera Peric',
    age: 17,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(e => {
            console.log(e.title);
        })
    }
};

let user2 = {
    username: 'JohnDoe',
    age: 38,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(e => {
            console.log(e.title);
        })
    }
};


///////////////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]['title']);
console.log(user1['blogs'][0]['title']);


user1.logBlogs();
user2.logBlogs();


// zadatak 1
//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let users = [user1, user2];

// ispis username vrednosti iz users niza

users.forEach(user => {
    console.log(user.username);
});

// ispis svih naslova blogova koje su korisnici kreirali

users.forEach(user => {
    user.logBlogs();
})

// bez metode logBlogs()

users.forEach(user => {
    let userBlogs = user.blogs;
    userBlogs.forEach(e => {
        console.log(e.title);
    })
});

// zadatak 2
//Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(user => {
    if(user.age < 18) {
        console.log(`${user.username} ima manje od 18 godina`);
    }
});


// zadatak 3
//Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    })
});

// zadatak 4
// Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach(user => {
    if(user.username == 'JohnDoe') {
        `Blogovi autora JohnDoe su: ${user.logBlogs()}`;
    }
});

// zadatak 5
//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach(user => {
    let sumLikes = 0;
    user.blogs.forEach(blog => {
        sumLikes += blog.likes;
    });
    if(sumLikes > 100) {
        console.log(user.username);
    }
});

// zadatak 6
//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let sumLikes = 0;
let br = 0;
users.forEach(user => {
    user.blogs.forEach(blog => {
        sumLikes += blog.likes;
        br++;
    });
});
users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > sumLikes / br) {
            console.log(blog.title);
        }
    });
});


// zadatak 7
//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

let sumDislikes = 0;
let brDis = 0;
users.forEach(user => {
    user.blogs.forEach(blog => {
        sumDislikes += blog.dislikes;
        brDis++;
    });
});

users.forEach(user => {
    user.blogs.forEach(blog => {
        if(blog.likes > sumLikes / br && blog.dislikes < sumDislikes / brDis) {
            console.log(`Blogovi sa natprosecnim pozitivnim i ispodprosecnim negativnim ocenama su: ${blog.title}`);
        }
    });
});
 

