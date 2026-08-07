import { useEffect, useRef, useState } from "react";
import defaultAudioSrc from "../assets/audio/teste.mp3";

const pad = (n) => String(Math.floor(n)).padStart(2, "0");

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${pad(s)}`;
};

function MusicPlayer({ audioSrc = defaultAudioSrc, label = "Nossa música" }) {
  const audioRef = useRef(null);
  const unmutedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = "metadata";
    audio.muted = true;

    const onTime = () => setProgress(audio.currentTime);
    const onDuration = () => setDuration(audio.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("durationchange", onDuration);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const attempt = audio.play();
    if (attempt) attempt.catch(() => {});

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("durationchange", onDuration);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      if (!unmutedRef.current) {
        unmutedRef.current = true;
        audio.muted = false;
        audio.volume = 1;
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return;
    const next = Number(event.target.value);
    audio.currentTime = next;
    setProgress(next);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <button
        type="button"
        className="music-toggle"
        aria-label={playing ? "Pausar música" : "Tocar música"}
        onClick={togglePlay}
      >
        {playing ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 4.6c0-.9 1-1.5 1.8-1l9 6.4c.7.5.7 1.6 0 2.1l-9 6.4c-.8.5-1.8-.1-1.8-1V4.6Z" />
          </svg>
        )}
      </button>

      <div className="music-meta">
        <span className="music-label">{label}</span>
        <input
          type="range"
          className="music-range"
          min="0"
          max={duration || 0}
          step="0.5"
          value={progress}
          disabled={!duration}
          onChange={handleSeek}
          aria-label="Progresso da música"
        />
      </div>

      <span className="music-time">
        {formatTime(progress)} / {formatTime(duration)}
      </span>
    </div>
  );
}

export default MusicPlayer;
