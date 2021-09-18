import Link from "next/link";

type JoinUsButtonProps = {
	joinLink: string;
};

export function JoinUsButton({ joinLink }: JoinUsButtonProps) {
	return (
		<Link href={joinLink}>
			<a>
				<div className="flex flex-row justify-between shadow-md">
					<div>
						<p>Csatlakozz!</p>
					</div>
					<div className="w-8 bg-turquoise-dark">
						<span>+</span>
					</div>
				</div>
			</a>
		</Link>
	);
}
