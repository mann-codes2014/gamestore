import Cta from "./Cta"

function Hero2() {
    return (
        <section className="relative h-96 rounded-md border border-transparent flex flex-col items-center justify-center text-center text-white py-0 px-3">
            <div className="rounded-md border border-[#fff7f3] video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src="https://www.leagueoflegends.com/static/hero-de0ba45b1d0959277d12545fbb645722.mp4" type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="video-content space-y-2">
                
<Cta/>
            </div>
        </section>

    )
}

export default Hero2
