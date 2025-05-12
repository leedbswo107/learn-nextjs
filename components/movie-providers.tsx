import { API_URL } from "../app/constants";

const getProviders = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/providers`);
  const json = await res.json();
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
