"use client";

import Base from "@layouts/Baseof";
import Hero from "@layouts/components/Hero";
import ImageFallback from "@layouts/components/ImageFallback";
import { Feature } from "@lib/types";
import SAMPLE_DATA from "content/index.json";
import { useRef } from "react";
// Import Swiper React components
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const Home = ({
  games = SAMPLE_DATA.games,
  features = SAMPLE_DATA.features,
  brands = SAMPLE_DATA.brands,
}: {
  games: string[];
  features: { list: Feature[] };
  brands: string[];
}) => {
  console.log({ brands });
  const paginationRef = useRef(null);
  return (
    <Base>
      <section className="section banner pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="row">
              <Hero />
            </div>
            <div className="row border-y border-border py-5 ">
              <div className="col-12 text-center">
                <h3>Our Partners</h3>
              </div>
              <div className="animate from-right col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 4,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                  {brands?.map((brand, index) => (
                    <SwiperSlide
                      className="h-20 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}
                    >
                      <div className="relative h-[30px]">
                        <ImageFallback
                          src={brand}
                          fill
                          alt=""
                          sizes="100vw"
                          style={{
                            objectFit: "contain",
                          }}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="row overflow-hidden rounded-2xl">
              <div className="col-12">
                <div className="animate from-right relative mt-2">
                  <Swiper
                    slidesPerView={1}
                    pagination={{
                      type: "bullets",
                      el: paginationRef.current,
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    // autoplay={{ delay: 3000 }}
                    onBeforeInit={(swiper) => {
                      //@ts-ignore
                      swiper.params.pagination.el = paginationRef.current;
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                    autoplay={{ delay: 3000 }}
                  >
                    {features?.list.map((item, index) => (
                      <SwiperSlide key={"feature-" + index}>
                        <div className="feature-card m-4 rounded-md border border-transparent px-7 py-16 text-center shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all  duration-300 hover:border-[#ffece4] hover:shadow-none">
                          <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                            <div className="relative h-full">
                              <ImageFallback
                                className="object-contain"
                                src={games[0]}
                                width={200}
                                height={200}
                                alt=""
                                // fill={true}
                                priority={true}
                              />
                            </div>
                          </div>

                          <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                          <p>{item.content}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="relative mt-9 flex justify-center">
                    <div className="pagination " ref={paginationRef}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;
