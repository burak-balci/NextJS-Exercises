import { useRouter } from "next/router";
import React from "react";

const TvDetailsPage = () => {
  const route = useRouter();

  return <div>TvDetailsPage {route.query.id}</div>;
};

export default TvDetailsPage;
