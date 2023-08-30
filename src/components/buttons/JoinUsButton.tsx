type JoinUsButtonProps = {
	joinLink: string;
};

export function JoinUsButton({ joinLink }: JoinUsButtonProps) {
	return (
		<a href={joinLink} target="_blank" rel="noopener noreferrer">
			<div className="flex max-w-min flex-row justify-between shadow-md">
				<div className="pl-1 pr-6 pt-1">
					<p>Csatlakozz!</p>
				</div>
				<div className="flex w-8 items-center justify-center bg-turquoise-dark">
					<span>+</span>
				</div>
			</div>
		</a>
	);
}
