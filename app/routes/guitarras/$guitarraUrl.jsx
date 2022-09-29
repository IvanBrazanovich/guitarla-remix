import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const guitarra = await getGuitarra(params.guitarraUrl);
  return guitarra.data;
}

const Guitarra = () => {
  const guitarra = useLoaderData();
  console.log(guitarra);
  return <div>Guitarra</div>;
};

export default Guitarra;
