export async function getGuitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
  const res = await respuesta.json();
  return res;
}

export async function getGuitarra(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`
  );

  return await respuesta.json();
}
