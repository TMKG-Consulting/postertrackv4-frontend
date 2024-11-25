import React from "react";
import Image from "next/image";
import LoginForm from "@/components/page_components/auth/login/LoginForm";

export default function page() {
	return (
		<main className="grid lg:grid-cols-2 h-screen">
			<section className="w-full bg-appBlack hidden lg:flex flex-col gap-y-[30px] items-center justify-center">
				<Image
					src={"/login-illustration.svg"}
					alt="poster-track"
					width={390}
					height={365}
				/>
				<h1 className="text-white text-[3rem] font-bold">
					Specialists in Billboard Tracking
				</h1>
			</section>
			<section className="w-full flex flex-col items-center py-10 md:py-24">
				<div className="w-[95%] md:w-[80%] lg:w-[90%] xl:w-[80%]">
					<div className="flex items-center gap-x-5 mb-12">
						<Image
							src={"/poster-track-logo.png"}
							width={40}
							height={40}
							alt="poster-track-logo"
						/>
						<span className="text-[2.8rem] font-black text-primary">
							PosterTrack
						</span>
					</div>
					<LoginForm />
				</div>
			</section>
		</main>
	);
}
