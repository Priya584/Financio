"use client";
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import HeaderLogo from "./header-logo";
import { Loader2 } from "lucide-react";
import Navigation from "./Navigation";
import { Button } from "./ui/button";
import Link from "next/link";

function LandingPage() {
	const { isSignedIn } = useUser();
	return (
		<header className="bg-custom-gradient px-4 py-8 lg:px-14 pb-36">
			<div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex items-center justify-between mb-14">
					<div className="flex items-center lg:gap-x-16">
						<HeaderLogo />
						<Navigation />
					</div>
					<div>
						{isSignedIn ? (
							<div>
								<ClerkLoaded>
									<UserButton afterSignOutUrl="/" />
								</ClerkLoaded>
								<ClerkLoading>
									<Loader2 className="size-8 animate-spin text-slate-400" />
								</ClerkLoading>
							</div>
						) : (
							<div>
                                <Link href="/sign-in">
								<Button size="sm" className="text-[#00eeff] tracking-[1.5px] overflow-hidden transition duration-300  hover:custom-box-shadow">
                                    Sign In
								</Button>
                                </Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

export default LandingPage;
