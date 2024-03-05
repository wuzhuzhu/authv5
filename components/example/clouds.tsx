import React from "react";

const cloudsExample = {
	Image: [
		{ id: 27, name: "Text2Image", type: "Image" },
		{ id: 26, name: "Image2Image", type: "Image" },
	],
	LLM: [{ id: 28, name: "llama2-70b", type: "LLM" }],
};

export type CloudsType = typeof cloudsExample | undefined;

const Clouds = ({ clouds }: { clouds: CloudsType }) => {
	return (
		<div>
			{clouds?.Image?.map((image, index) => (
				<ul className="grid" key={image.id}>
					<li>
						{image.name}/ {image.type}
					</li>
				</ul>
			))}
			<hr />
			{clouds?.LLM?.map((image, index) => (
				<ul className="grid" key={image.id}>
					<li>
						{image.name}/ {image.type}
					</li>
				</ul>
			))}
		</div>
	);
};

export default Clouds;
