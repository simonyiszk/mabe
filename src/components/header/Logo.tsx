import Image from "next/image";
import Link from "next/link";

import mabelogo from "@/assets/images/mabe_logo.svg";

export function Logo() {
	return (
		<Link href="/" passHref legacyBehavior>
			<div className="relative h-12 w-20 cursor-pointer select-none object-contain">
				<Image src={mabelogo} fill alt="Logo of MABE" className="size-full" />
			</div>
		</Link>
	);
}
