import type { Metadata } from "next";

import { MemberCard } from "@/components/members/MemberCard";
import { getMembers } from "@/utils/contentful";

export const metadata: Metadata = {
	title: "Csapatunk | Magyar Biotechnológus-hallgatók Egyesülete",
};

export default async function MembersPage() {
	const allMembers = await getMembers();

	const members = allMembers.items.filter((e) => e.fields.position !== "alapítótag")

	const founders = allMembers.items.filter((e) => e.fields.position === "alapítótag")
	return (
		<>
			<h1 className="mb-12 font-roboto-slab text-5xl">Csapatunk</h1>
			<div className="grid gap-32">
				<section className="grid grid-cols-1 place-items-center items-center gap-8 md:grid-cols-2">
					{members.map((member) => (
						<MemberCard key={member.sys.id} {...member.fields} />
					))}
				</section>
				<section className="grid grid-cols-1 place-items-center items-center gap-8 md:grid-cols-2">
					{founders.map((founder) => (
						<MemberCard key={founder.sys.id} {...founder.fields} />
					))}
				</section>
			</div>
		</>
	);
}
