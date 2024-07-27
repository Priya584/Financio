"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
	const { onOpen } = useNewAccount();
	return (
		<div className="mt-11 relative">
			<Button onClick={onOpen} className="text-[#00eeff] rounded-none uppercase tracking-[1.5px] py-7 px-8 text-base font-bold overflow-hidden transition duration-300  hover:custom-box-shadow">
				Add an accounts
			</Button>
			<span className="absolute block top-0 left-0 w-[245px] h-[1.8px] bg-gradient-to-r from-transparent to-white animate-button1"></span>
			<span className="absolute block top-[-100%] left-[245px] w-[1.8px] h-[56px] bg-gradient-to-b from-transparent to-white animate-button2"></span>
			<span className="absolute block bottom-0 left-0 w-[245px] h-[1.8px] bg-gradient-to-l from-transparent to-white animate-button3"></span>
			<span className="absolute block bottom-[-100%] left-[0px] w-[1.8px] h-[56px] bg-gradient-to-t from-transparent to-white animate-button4"></span>
		</div>
	);
}
