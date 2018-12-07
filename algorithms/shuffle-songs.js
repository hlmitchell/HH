/* Code an audio player that has a shuffle mode.

Restrictions:
  You can't shuffle the songs prior and then just iterate over them.
  
  The next song must be chosen at the time the current song ends.
  
  You shouldn't repeat a song until all songs have been played once.
  
  You can just to print the song to consider it "played"

 */

const playList = ['Bohemian Rhapsody', 'Comfortably Numb', 'Piano Man', 'Hotel California', 'Cocaine']

function shuffle(songs) {
  let dummy = 0;
  let unplayed = songs;
  let played = [];

  const interval = setInterval(() => {

    const i = Math.floor(Math.random() * unplayed.length);
    console.log(unplayed[i]);
    played.push(unplayed[i]);
    unplayed.splice(i, 1);
    if (unplayed.length === 0) {
      unplayed = played;
      played = [];
    }

    // stop playing song after iterations
    dummy += 1;
    if (dummy > 10) clearInterval(interval);
  }, 1000);
}

shuffle(playList);