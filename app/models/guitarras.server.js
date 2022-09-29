export async function getGuitarras() {
  console.log("hola");
  console.log(process.env.API_URL);
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`);
  const res = await respuesta.json();
  console.log(res);
  return res;
}
