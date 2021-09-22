import Image from "next/image";
import Link from "next/link";

import mabelogo from "@/assets/images/mabe_logo.svg";

export function Logo() {
	return (
		<Link href="/" passHref>
			<div className="relative w-20 h-12 select-none">
				<Image
					src={mabelogo}
					layout="fill"
					alt="Logo of MABE"
					objectFit="contain"
					className="w-full h-full"
				/>
			</div>
		</Link>
	);
}
