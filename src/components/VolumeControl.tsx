import volumeSVG from "../assets/volume.svg";
import muteSVG from "../assets/mute.svg";
import { useState, ChangeEvent } from "react";

function VolumeControl() {
  const [volume, setVolume] = useState<number>(75);
  const [muteStatus, setMuteStatus] = useState<boolean>(false);
  const [lastVolume, setLastVolume] = useState<number>(75);

  function handleVolumeChange(event: ChangeEvent<HTMLInputElement>) {
    const newVolume = parseInt(event.target.value);

    if (newVolume === 0) {
      setMuteStatus(true);
    } else {
      setMuteStatus(false);
      setVolume(newVolume);
    }
  }

  function toggleMute() {
    if (muteStatus) {
      setMuteStatus(false);
      setVolume(lastVolume);
    } else {
      setLastVolume(volume);
      setMuteStatus(true);
      setVolume(0);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button className="volume" onClick={toggleMute}>
        <img
          src={muteStatus || volume === 0 ? muteSVG : volumeSVG}
          alt="Volume Icon"
          className="size-7"
        />
      </button>
      <input
        type="range"
        id="volumeSlider"
        min={0}
        max={100}
        value={volume}
        className="h-8 w-full accent-steel-blue-700 outline-2 outline-offset-2 outline-transparent"
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default VolumeControl;
