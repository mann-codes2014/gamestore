"use client";

import { Button, Card, Typography } from ".";
interface GenreProps {
  name: string;
  thumbnail: string;
}
function GenreCard({ name, thumbnail }: GenreProps) {
  return (
    <Card
      shadow={false}
      color="transparent"
      style={{ backgroundImage: `url(${thumbnail})` }}
      className="group relative grid h-[20rem] w-full max-w-[20rem] items-end justify-center overflow-hidden  bg-cover bg-center text-center"
    >
      <div className="absolute w-full bg-[#FF2061]">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {name}
        </Typography>
      </div>
      <div className="transparent absolute left-0 top-0 flex h-0 w-full flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-pink-300 opacity-0 duration-500 group-hover:h-full group-hover:opacity-100">
        <Button variant="filled">Continue</Button>
      </div>
    </Card>
  );
}
function Genre() {
  return (
    <div className="my-4">
      <div className="text-center">
        <Typography variant="h4">Shop Games by Genre</Typography>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <GenreCard name="Battle" thumbnail="/images/genre/battle.png" />
        </div>
        <div>
          <GenreCard name="Puzzle" thumbnail="/images/genre/puzzle.png" />
        </div>
        <div>
          <GenreCard name="Cricket" thumbnail="/images/genre/cricket.png" />
        </div>
        <div>
          <GenreCard
            name="Bike Racing"
            thumbnail="/images/genre/bike-racing.png"
          />
        </div>
        <div>
          <GenreCard name="Soccer" thumbnail="/images/genre/soccer.png" />
        </div>
        <div>
          <GenreCard name="Shooting" thumbnail="/images/genre/shooting.png" />
        </div>
        <div>
          <GenreCard
            name="Car Racing"
            thumbnail="/images/genre/car-racing.png"
          />
        </div>
        <div>
          <GenreCard name="Board" thumbnail="/images/genre/board.png" />
        </div>
      </div>
    </div>
  );
}

export default Genre;
