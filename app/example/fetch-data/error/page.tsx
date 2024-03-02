import { getClouds } from "@/lib/data/example";

const Page = async () => {
  const data = await getClouds();
  return <>{JSON.stringify(data?.data)}</>;
};

export default Page;
