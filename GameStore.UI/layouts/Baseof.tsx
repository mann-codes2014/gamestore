'use client';

import config from "@config/config.json";
import { BaseProps } from "@lib/types";
import { plainify } from "@lib/utils/textConverter";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
import { useRouter } from 'next/navigation';
import { useRef } from "react";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}: BaseProps) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();
  const main: any = useRef();

  return (
    <>
      
      <main ref={main}>{children}</main>
    </>
  );
};

export default Base;
