import { Params } from "react-router-dom";
import ServerHttp from "../../plugins/ServerHttpClient";

async function CountryLoader({ params }: { params: Params<"countryCode"> }) {
  const { countryCode } = params;
  if (!countryCode) return null;
  const Country = await ServerHttp.get(`/country/${countryCode}`)
    .then((res) => res)
    .catch(() => null);

  if (!Country || Country.status != 200) {
    console.log("codigo: ", countryCode);
    return null;
  }
  const Population = await ServerHttp.get(
    `/country/population/${Country.data.data.commonName}`
  )
    .then((res) => res)
    .catch(() => null);

  return { Country: Country.data.data, Population };
}
export default CountryLoader;
