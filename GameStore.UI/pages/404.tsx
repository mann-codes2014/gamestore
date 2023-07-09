import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contentParser";
import { CommonPageProps } from "@lib/types";
import { GetStaticProps } from "next";

const notFound = ({ data }:{data:CommonPageProps}) => {
  return (
    <Base>
      <NotFound data={data} />
    </Base>
  );
};

// get 404 page data
export const getStaticProps: GetStaticProps = async () => {
  const notFoundData = await getRegularPage("404");
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
