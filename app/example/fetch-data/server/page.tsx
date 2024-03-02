import { getClouds } from "@/lib/data/example";

const Page = async () => {
  const data = await getClouds();
  return (
    <div>
      {/* {JSON.stringify(data?.data)} */}
      {data?.data?.Image?.map((image, index) => (
        <ul className="grid" key={image.id}>
          <li>
            {image.name}/ {image.type}
          </li>
        </ul>
      ))}
      <hr />
      {data?.data?.LLM?.map((image, index) => (
        <ul className="grid" key={image.id}>
          <li>
            {image.name}/ {image.type}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Page;
