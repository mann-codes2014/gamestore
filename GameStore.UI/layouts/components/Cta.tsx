"use client";

import config from "@config/config.json";
import { Button, Typography } from ".";

function Cta() {
  const { title, content, button, enable } = config.call_to_action;
  if (!enable) return;

  return (
    <>
      <Typography variant="h1" className="text-lg md:text-3xl lg:text-5xl">
        The best Games offer on the market for you
      </Typography>
      <div className="flex flex-row justify-center gap-2">
        <div>
          <Button variant="gradient">Get started</Button>
        </div>
        <div>
          <Button variant="outlined" className="hover:bg-white hover:opacity-100" >Learn more</Button>
        </div>
      </div>
    </>
  );
}

export default Cta;
