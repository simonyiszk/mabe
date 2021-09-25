type JoinUsButtonProps = {
	joinLink: string;
};

export function JoinUsButton({ joinLink }: JoinUsButtonProps) {
	return (
		<a href={joinLink} target="_blank" rel="noopener noreferrer">
			<div className="flex flex-row justify-between max-w-min shadow-md">
				<div className="pt-1 pr-6 pl-1">
					<p>Csatlakozz!</p>
				</div>
				<div className="flex justify-center items-center w-8 bg-turquoise-dark">
					<span>+</span>
				</div>
			</div>
		</a>
	);
}
