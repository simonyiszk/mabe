export function Hero() {
	return (
		<div className="mb-11 sm:mb-22 lg:mb-40">
			<div
				id="hero-image"
				className="w-full h-96 sm:h-[550px] md:h-[650px] rounded-b-mainPage"
			/>
			<div className="flex flex-col justify-center items-center px-36 pt-16 md:pt-10 lg:pt-16 mx-auto -mt-44 lg:-mt-48 space-y-2 max-w-[90%] sm:max-w-[80%] text-4xl lg:text-5xl text-center bg-white rounded-t-mainPage">
				<div className="lg:mb-11 w-1/2 max-w-xl h-3 border-t-2 border-black" />
				<div>
					<span className="font-extrabold">Magyar Biotechnológus</span>
					<span className="font-bold">-hallgatók Egyesületének</span>
				</div>
				<span>hivatalos weboldala</span>
			</div>
		</div>
	);
}
