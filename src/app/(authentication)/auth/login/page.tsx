import React from "react";
import Image from "next/image";
import LoginForm from "@/components/page_components/auth/login/LoginForm";
import BrandLogo from "@/components/shared/BrandLogo";

export default function page() {
	return (
		<main className="grid lg:grid-cols-2 h-screen">
			<section className="w-full bg-appBlack hidden lg:flex flex-col gap-y-[30px] items-center justify-center">
				<Image
					src={"/login-illustration.svg"}
					alt="Billboard tracking illustration"
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
						<BrandLogo />
					</div>
					<LoginForm />
				</div>
			</section>
		</main>
	);
}
