import { auth } from "@/lib/auth";

const SettingPage = async () => {
	const session = await auth();
	return (
		<div>
			SettingPage
			<p>{JSON.stringify(session)}</p>
		</div>
	);
};

export default SettingPage;
