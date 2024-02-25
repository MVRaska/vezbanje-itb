
// Napravite SongList komponentu koja, prilikom renderovanja, dodaje u lokalni state niz od tri pesme.
// Svaka pesma treba da sadrži title i id, a zatim ispišite te pesme u listu.
// Takođe, napravite NewSongForm komponentu koja sadrži formu. Unutar forme, dodajte polje za unos
// naslova pesme (input) i dugme za slanje forme (submit button).

// II
// Implementirajte funkciju addSong unutar SongList komponente. Ova funkcija treba da prima ime pesme
// kao argument i da dodaje novu pesmu u lokalni state.
// Zatim prosledite addSong funkciju child komponenti koja će, prilikom submit-ovanja forme, pozivati tu istu
// funkciju i prosleđivati joj parametar iz input polja.

// III
// Prilikom dodavanja nove pesme, koristeći useEffect, azurirajte local storage tako što ćete upisati vaš niz.
// Takođe, update-ujte useEffect koji se okida kada se komponenta mount-uje. Neka on sada povlači
// podatke iz lokalnog storage-a i upisuje taj niz u lokalni songs state.


import {useState, useEffect} from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([]);

    const addSong = title => {
        setSongs(prevState => [...prevState, {title, id: songs.length + 1}]);
        // localStorage.setItem('songs', JSON.stringify(songs));
    }

    useEffect(() => {
        setSongs(JSON.parse(localStorage.getItem('songs')));
        //     {title: 'Something', id: 1},
        //     {title: 'Nothing', id: 2},
        //     {title: 'Everything', id: 3},
        // ]);
        // }, [counter]
    }, []);

    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(songs));
    }, [songs])

    return <>
        <ul>
            {/* {
                songs.map((song) => <li type={song.id}>{song.title}</li>)
            } */}

            {/* destrukturisanje */}
            {
                songs.map(({title, id}) => <li type={id}>{title}</li>)
            }
            <NewSongForm addSong={addSong} />
            
        </ul>
    </>
}

export default SongList;

