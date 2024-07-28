import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				<div className="text-center space-y-4 pt-16 lg:pt-0">
					<h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
					<p className="text-base text-[#7E8CA0]">
						Log in or Create Account to get back to your dashboard!
					</p>
				</div>
				<div className="flex items-center justify-center mt-8">
					<ClerkLoaded>
						<SignUp />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground" />
					</ClerkLoading>
				</div>
			</div>
			<div className="h-full bg-black hidden lg:flex flex-col items-center justify-center group">
				<Image src='/logo.svg' height={100} width={100} className="animate-ping group-hover:animate-pulse" alt="logo"/>
				<div className="tracking-[5px] mt-5 font-bold italic text-black text-5xl group-hover:text-[#00eeff] transition duration-500 group-hover:custom-box-shadow p-4">FINANCIO</div> 
			</div>
		</div>
	);
}
