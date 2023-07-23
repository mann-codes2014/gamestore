
"use client";
import config from "@config/config.json";
import { Typography } from "@layouts/components";

const Footer = () => {
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="flex w-full flex-column md:flex-row flex-wrap items-center align-ceneter justify-center gap-x-12 gap-y-6 border-t border-blue-gray-50 py-6 px-4 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; GameStore
      </Typography>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        <li>
          <Typography
            as="a"
            href={`mailto:${email}`}
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            {email}
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href={`tel:${phone}`}
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            {phone}
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
