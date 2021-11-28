import type { InferGetStaticPropsType } from "next";

import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { getGeneralData } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			generalData: await getGeneralData(),
		},
	};
};

export default function JoinUsPage({
	generalData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AnyPageLayout>
			<h1 className="mb-12 font-roboto-slab text-5xl">Csatlakozz hozzánk!</h1>
			<p>
				Az alábbi linken található form kitöltése által tudsz jelentkezni
				hozzánk.
			</p>
			<div className="py-16 mx-auto max-w-xl h-full">
				<a
					href={generalData.fields.mabeformLink}
					target="_blank"
					rel="noreferrer"
				>
					<div className="relative z-30 py-8 px-4 lg:px-16 mx-auto max-w-xs sm:max-w-2xl bg-white rounded-mainPage shadow-mainPageCards cursor-pointer">
						<div className="flex flex-col lg:flex-row lg:justify-center items-center space-y-4 lg:space-y-0">
							<div className="w-auto">
								<h3 className="font-roboto-slab text-2xl lg:text-3xl font-medium text-center hover:text-turquoise-dark uppercase">
									Kattints ide a csatlakozáshoz!
								</h3>
							</div>
						</div>
					</div>
				</a>
			</div>
		</AnyPageLayout>
	);
}
