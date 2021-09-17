import Link from "next/link";

type JoinUsButtonProps = {
	joinLink: string;
};

export function JoinUsButton({ joinLink }: JoinUsButtonProps) {
	return (
		<Link href={joinLink}>
			<a>
				<div className="flex flex-row space-x-3 w-48 shadow-sm">
					<div>
						<p>Csatlakozz</p>
					</div>
					<div className="bg-turquoise-dark">
						<span>+</span>
					</div>
				</div>
			</a>
		</Link>
	);
}
