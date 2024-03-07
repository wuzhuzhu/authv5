import React from "react";

const ImagePageContent = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<form className="flex gap-2 h-full" action="generate">
				{/* preview part as a children */}
				<div className="flex flex-col justify-between flex-1 bg-white rounded-md p-6">
					{children}
					<div>
						<p>prompt suggestions</p>
						<p>prompt input here</p>
					</div>
				</div>
				<div className="basis-[320px] bg-white p-6 rounded-md">
					Form
				</div>
			</form>
		</>
	);
};

export default ImagePageContent;
