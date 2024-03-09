import React from "react";

const DarkLightToggle = () => {
	return (
		<div className="w-[266px] h-[52px] px-3 py-2 flex-col justify-start items-start gap-2 inline-flex">
			<div className="self-stretch h-9 flex-col justify-start items-start gap-1 flex">
				<div className="self-stretch h-9 px-4 py-2 bg-white rounded-md justify-start items-center gap-2 inline-flex">
					<div className="w-4 h-4 relative" />
				</div>
			</div>
		</div>
	);
};

export default DarkLightToggle;
