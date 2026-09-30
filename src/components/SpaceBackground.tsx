import { useEffect, useRef } from "react";

export const SpaceBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reverseFrame = 0;
    let reverseStartedAt = 0;
    let reverseStartedFrom = 0;
    let reversing = false;

    const stopReverse = () => {
      window.cancelAnimationFrame(reverseFrame);
      reverseStartedAt = 0;
      reversing = false;
    };

    const reverse = (timestamp: number) => {
      if (!reversing || motionPreference.matches) return;

      if (!reverseStartedAt) reverseStartedAt = timestamp;
      const elapsed = (timestamp - reverseStartedAt) / 1000;
      video.currentTime = Math.max(0, reverseStartedFrom - elapsed);

      if (video.currentTime <= 0.02) {
        stopReverse();
        video.currentTime = 0.02;
        void video.play();
        return;
      }

      reverseFrame = window.requestAnimationFrame(reverse);
    };

    const beginReverse = () => {
      if (reversing || motionPreference.matches) return;
      video.pause();
      reversing = true;
      reverseStartedAt = 0;
      reverseStartedFrom = Math.min(video.currentTime, Math.max(0, video.duration - 0.08));
      video.currentTime = reverseStartedFrom;
      reverseFrame = window.requestAnimationFrame(reverse);
    };

    const turnBeforeEnd = () => {
      if (video.duration - video.currentTime < 0.3) beginReverse();
    };

    const syncPlayback = () => {
      video.playbackRate = 1;

      if (motionPreference.matches) {
        stopReverse();
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play();
      }
    };

    syncPlayback();
    video.addEventListener("timeupdate", turnBeforeEnd);
    video.addEventListener("ended", beginReverse);
    motionPreference.addEventListener("change", syncPlayback);
    return () => {
      stopReverse();
      video.removeEventListener("timeupdate", turnBeforeEnd);
      video.removeEventListener("ended", beginReverse);
      motionPreference.removeEventListener("change", syncPlayback);
    };
  }, []);

  return (
    <div className="space-background" aria-hidden="true">
      <video
        ref={videoRef}
        className="space-background-video"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/media/black-hole.webp"
      >
        <source src="/media/black-hole.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
