import React from "react";
import PlayListItem from "./PlayListItem";

function PlayList({ playlist, onClickItem }) {
  return (
    <div className="w-full border-t p-8 md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold">Playlist</h2>
      {playlist.map((item) => (
        <PlayListItem
          key={item.id}
          title={item.title}
          artist={item.artist}
          length={item.length}
          onClick={() => onClickItem(item.id)}
        />
      ))}
    </div>
  );
}

export default PlayList;
