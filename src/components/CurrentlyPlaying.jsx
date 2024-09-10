import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

function CurrentlyPlaying({ currentSong, playNext, playPrevious }) {
  return (
    <div className="currently-playing flex w-full flex-col justify-center p-4">
      <CoverArt src={currentSong.coverArtUrl} alt={currentSong.title} />
      <SongTitle title={currentSong.title} artist={currentSong.artist} />
      <PlayControls playNext={playNext} playPrevious={playPrevious} />
      <VolumeControl />
    </div>
  );
}

export default CurrentlyPlaying;
