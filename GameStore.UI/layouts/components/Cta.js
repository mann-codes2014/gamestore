import config from "@config/config.json";

function Cta() {
  const { title, content, button, enable } = config.call_to_action;
  if (!enable) return;

  return (
    <>
      <h1 class="mb-16 text-white text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        The best offer on the market <br /><span class="text-danger dark:text-danger-400">for your business</span>
      </h1>
      <a className="mb-2 inline-block rounded bg-danger px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white  bg-primary md:mr-2 md:mb-0"
        data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
      <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white border-2 border-white"
        data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
    </>
  );
}

export default Cta;
