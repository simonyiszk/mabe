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
			<div className="mx-auto h-full max-w-xl py-16">
				<a
					href={generalData.fields.mabeformLink}
					target="_blank"
					rel="noreferrer"
				>
					<div className="mx-auto max-w-xs cursor-pointer rounded-mainPage bg-white px-4 py-8 shadow-mainPageCards sm:max-w-2xl lg:px-16">
						<div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-y-0">
							<div className="w-auto">
								<h3 className="text-center font-roboto-slab text-2xl font-medium uppercase hover:text-turquoise-dark lg:text-3xl">
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
