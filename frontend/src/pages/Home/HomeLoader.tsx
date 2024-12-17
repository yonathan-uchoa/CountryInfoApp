import ServerHttp from "../../plugins/ServerHttpClient";

async function HomeLoader() {
  const {data: countries } = await ServerHttp.get("/country");
  console.log(countries);
  return countries.data;
}
export default HomeLoader;