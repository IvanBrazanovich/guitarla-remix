export async function getBlogs() {
  const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=*`);
  const res = await respuesta.json();
  return res;
}

export async function getBlog(url) {
  const respuesta = await fetch(
    `${process.env.API_URL}/blogs?filters[url]=${url}&populate=*`
  );

  return await respuesta.json();
}
