import type { InferGetStaticPropsType } from "next";

import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { MemberCard } from "@/components/members/MemberCard";
import { getMembers } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			members: await getMembers(),
		},
	};
};

export default function MembersPage({
	members,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AnyPageLayout>
			<div className="">
				<h1 className="mb-12 font-roboto-slab text-5xl">Tagok</h1>
				<section className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center place-items-center">
					{members.items.map((member) => (
						<MemberCard key={member.sys.id} {...member.fields} />
					))}
				</section>
			</div>
		</AnyPageLayout>
	);
}
