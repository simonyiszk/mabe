export function Hero() {
	return (
		<div className="mb-11 sm:mb-22 lg:mb-40">
			<div
				id="hero-image"
				className="h-96 w-full rounded-b-mainPage sm:h-[550px] md:h-[650px]"
			/>
			<div className="mx-auto -mt-44 flex max-w-[90%] flex-col items-center justify-center space-y-2 rounded-t-mainPage bg-white px-36 pt-16 text-center text-4xl sm:max-w-[80%] md:pt-10 lg:-mt-48 lg:pt-16 lg:text-5xl">
				<div className="h-3 w-1/2 max-w-xl border-t-2 border-black lg:mb-11" />
				<div>
					<span className="font-extrabold">Magyar Biotechnológus</span>
					<span className="font-bold">-hallgatók Egyesületének</span>
				</div>
				<span>hivatalos weboldala</span>
			</div>
		</div>
	);
}
