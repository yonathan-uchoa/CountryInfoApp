import { Navigate, Params } from "react-router-dom";
import ServerHttp from "../../plugins/ServerHttpClient";

async function CountryLoader({ params }: { params: Params<"countryCode"> }) {
  try{
    const { countryCode } = params;
    if (!countryCode) return null;
    const Country = await ServerHttp.get(`/country/${countryCode}`);
    if (Country.status != 200) return null;
    const Population = await ServerHttp.get(
      `/country/population/${Country.data.data.commonName}`
    );
  
    return { Country: Country.data.data, Population };
  } catch( err ){
    return null;
  } 

}
export default CountryLoader;
