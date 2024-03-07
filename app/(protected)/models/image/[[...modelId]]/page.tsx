import PromptSuggestions from "@/components/shared/models/prompt-suggestions";
import { getClouds } from "@/lib/data/example";
import ImagePageContent from "./components/content";

const ImageModelPage = async () => {
	const data = await getClouds(); // fake fetch
	return (
		<ImagePageContent>
			{/* preview part */}
			<div>
				<h3>
					Preview Image Here12312312123123123
					12312312312123123123123123123 123123 123123123
				</h3>
				<p>{JSON.stringify(data?.data)}</p>
			</div>
		</ImagePageContent>
	);
};

export default ImageModelPage;
