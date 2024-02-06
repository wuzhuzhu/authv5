import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = () => {
	return (
		<div className="flex items-center w-full gap-2">
			<Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
				<FaGithub size={18} />
			</Button>
			<Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
				<FaGoogle size={18} />
			</Button>
		</div>
	);
};

export default Social;
