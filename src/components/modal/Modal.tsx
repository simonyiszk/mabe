// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

type Props = {
	children: React.ReactNode;
};

export default function Modal({ children }: Props) {
	const overlay = useRef(null);
	const router = useRouter();

	return (
		<div
			ref={overlay}
			onClick={(e) => e.target === overlay.current && router.back()}
			className="fixed inset-0 z-50 flex h-screen w-screen flex-row items-center justify-center bg-black/60"
		>
			<div className="absolute min-w-[300px] max-w-5xl">{children}</div>
		</div>
	);
}
