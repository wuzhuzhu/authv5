import React from "react";

interface HeaderProps {
	label: string;
}

const Header = ({ label }: HeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-4 items-center justify-center">
			<h2 className="">{label}</h2>
			{/* <p className="muted">{label}</p> */}
		</div>
	);
};

export default Header;
