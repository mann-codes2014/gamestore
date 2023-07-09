import Base from "@layouts/Baseof";
import Hero2 from "@layouts/components/Hero-2";
import ImageFallback from "@layouts/components/ImageFallback";
import { getListPage } from "@lib/contentParser";
import { Feature } from "@lib/types";
// import { gsap } from "@lib/gsap";
import { GetStaticProps } from "next";
import { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const Home = ({ games, features, brands }:{games:string[],features:{list:Feature[]},brands:string[]}) => {
  const paginationRef = useRef(null);
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const banner = document.querySelector(".banner");
  //     const header = document.querySelector(".header");
  //     const tl = gsap.timeline();

  //     tl.fromTo(
  //       ".banner-title",
  //       { y: 20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
  //     )
  //       .fromTo(
  //         ".banner-btn",
  //         { y: 20, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 0.5 },
  //         ">-0.4"
  //       )
  //       .fromTo(
  //         ".banner-img",
  //         {
  //           y: 20,
  //           opacity: 0,
  //         },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.5,
  //         },
  //         ">-.5"
  //       );


  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <Base>
      <section className="section banner pt-0">
        <div className="container-xl">
          <div className="relative">
            <div className="row">

              <Hero2 />

            </div>
            <div className="row border-y border-border py-5">
              <div className="col-12 text-center">
                <h3>Our Partners</h3>
              </div>
              <div className="animate from-right col-12">
                <Swiper
                  loop={true}
                  slidesPerView={3}
                  breakpoints={{
                    992: {
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={20}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                >
                  {brands.map((brand, index) => (
                    <SwiperSlide
                      className=" h-20 cursor-pointer py-6 px-6 grayscale  transition hover:grayscale-0 lg:px-10"
                      key={"brand-" + index}
                    >
                      <div className="relative h-full">
                        <ImageFallback
                          className="object-contain"
                          src={brand}
                          sizes="100vw"
                          alt=""
                          fill={true}
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
                    modules={[Pagination]}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {features.list.map((item, index) => (
                      <SwiperSlide key={"feature-" + index}>
                        <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none text-center">
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

                          <h3 className="h4 mt-6 mb-5">{item.title}</h3>
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

      {/* Games */}
      {/* <section className="section">
        <div className="container text-center">
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
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {features.list.map((item, index) => (
                <SwiperSlide key={"feature-" + index}>
                  <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                    <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                      <FeatherIcon icon={item.icon} />
                    </div>
                    <h3 className="h4 mt-6 mb-5">{item.title}</h3>
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
      </section> */}
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps:GetStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, games, brands, features, intro, speciality, testimonial } =
    frontmatter;

  return {
    props: {
      banner: banner,
      games: games,
      brands: brands,
      features: features,
      intro: intro,
      speciality: speciality,
      testimonial: testimonial,
    },
  };
};
