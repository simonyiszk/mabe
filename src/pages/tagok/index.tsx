import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { MemberCard } from "@/components/members/MemberCard";

export default function MembersPage() {
	return (
		<AnyPageLayout>
			<div className="">
				<h1 className="mb-12 font-roboto-slab text-5xl">Tagok</h1>
				<section className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center place-items-center">
					<MemberCard
						name="Szép Cica"
						image_link="https://placekitten.com/700/500"
						position="Pozíció"
						email="szep.cica@macsek.com"
					/>
					<MemberCard
						name="Szép Cica"
						image_link="https://placekitten.com/700/500"
						position="Pozíció"
						email="szep.cica@macsek.com"
					/>
					<MemberCard
						name="Szép Cica hosszú névvel asd asd"
						image_link="https://placekitten.com/700/500"
						position="Pozíció nagyon hosszú leírással"
						email="szep.cica@macsek.com asd asdasd asdasd"
					/>
				</section>
			</div>
		</AnyPageLayout>
	);
}
