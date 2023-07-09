import NotFound from "@layouts/404";
import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import { CommonPageProps } from "@lib/types";
import { GetStaticPaths, GetStaticProps } from "next/types";

// for all regular pages
const RegularPages = ({ data }: { data: CommonPageProps }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
