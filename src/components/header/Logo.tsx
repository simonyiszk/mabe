import Image from "next/image";
import Link from "next/link";

import mabelogo from "@/components/header/logo3.png";

export function Logo() {
	return (
		<Link href="/">
			<a className="select-none">
				<Image src={mabelogo} width={85} height={50} alt="Logo of MABE" />
			</a>
		</Link>
	);
}
