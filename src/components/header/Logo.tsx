import Image from "next/image";
import Link from "next/link";

import mabelogo from "@/assets/images/mabe_logo.svg";

export function Logo() {
	return (
		<Link href="/">
			<a className="select-none">
				<Image src={mabelogo} width={85} height={50} alt="Logo of MABE" />
			</a>
		</Link>
	);
}
