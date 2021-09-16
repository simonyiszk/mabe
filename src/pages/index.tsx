import {
	CogIcon as CogIconMd,
	TrashIcon as TrashIconMd,
} from "@heroicons/react/outline";
import {
	CogIcon as CogIconSm,
	TrashIcon as TrashIconSm,
} from "@heroicons/react/solid";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { Input } from "@/components/inputs/Input";
import { Header } from "@/components/header/Header";

type ThemingShowcaseProps = {
	children?: React.ReactNode;
};

function ThemingShowcase({ children }: ThemingShowcaseProps) {
	return (
		<>
			<div className="text-gray-700 bg-white">{children}</div>
			<div className="dark text-gray-300 bg-gray-900">{children}</div>
			<div className="dark text-gray-300 bg-black">{children}</div>
		</>
	);
}

type CanvasProps = {
	children?: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
	return (
		<div className="p-8 space-y-4">
			<p>Sample text to visualize average contrast to the background</p>
			{children}
		</div>
	);
}

export default function Page() {
	return (
		<Header/>
	);
}
