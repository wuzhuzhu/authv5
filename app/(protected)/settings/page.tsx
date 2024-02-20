import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth";

const SettingPage = async () => {
	const session = await auth();
	return (
		<div>
			<form
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<Button>Sign Out</Button>
			</form>
			SettingPage
			<p>{JSON.stringify(session)}</p>
		</div>
	);
};

export default SettingPage;
