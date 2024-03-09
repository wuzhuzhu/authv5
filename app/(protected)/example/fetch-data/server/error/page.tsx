import Clouds from "@/components/example/clouds";
import { getError } from "@/lib/data/example";

const Page = async () => {
	const data = await getError();
	return (
		<>
			<p>这一页应该有概率出错,刷新几次</p>
			<Clouds clouds={data?.data} />
		</>
	);
};

export default Page;
