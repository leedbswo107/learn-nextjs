import { API_URL } from "../app/(home)/page";

const getProviders = async (id: string) => {
  console.log(`${API_URL}/${id}/providers`);
  const res = await fetch(`${API_URL}/${id}/providers`);
  const json = await res.json();
  console.log(">>>>>>", json.US);
  return json;
};

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  return (
    <ul>
      {
        // providers.US
        // providers.map((provider) => {
        //   <li>
        //     <img src={provider.logo_path} />
        //   </li>;
        // })
      }
    </ul>
  );
}
