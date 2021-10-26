import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {

  const [songs, setSongs] = useState([
    { title: 'wild darkness', id: 1 },
    { title: 'born free', id: 2 },
    { title: 'calalily stars', id: 3 }
  ]);

  const [age, setAge] = useState(20);


  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv1() }]);
  }

  useEffect(() => {
    console.log('useeffect hook ran', songs);
  }, [songs])

  useEffect(() => {
    console.log('useeffect hook ran', age);
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (<li key={song.id}> {song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={() => setAge(age+1)}>Add 1 to age: { age } </button>
    </div>
  );
}

export default SongList;
