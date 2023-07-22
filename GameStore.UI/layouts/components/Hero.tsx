import Cta from "./Cta";

function Hero() {
  return (
    <section className="relative flex h-96 flex-col items-center justify-center rounded-md border border-transparent px-3 py-0 text-center text-white">
      <div className="video-docker absolute left-0 top-0 h-full w-full overflow-hidden rounded-md border border-[#fff7f3]">
        <video
          className="absolute min-h-full min-w-full object-cover"
          src="https://www.leagueoflegends.com/static/hero-de0ba45b1d0959277d12545fbb645722.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="video-content space-y-2">
        <Cta />
      </div>
    </section>
  );
}

export default Hero;
