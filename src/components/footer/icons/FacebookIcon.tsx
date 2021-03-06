type FacebookIconProps = {
	className?: string;
};

export function FacebookIcon({ className }: FacebookIconProps) {
	return (
		<svg
			width="47"
			height="46"
			viewBox="0 0 47 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			className={className}
		>
			<path
				d="M23.8965 44.5625C35.8051 44.5625 45.459 34.9086 45.459 23C45.459 11.0914 35.8051 1.4375 23.8965 1.4375C11.9878 1.4375 2.33398 11.0914 2.33398 23C2.33398 34.9086 11.9878 44.5625 23.8965 44.5625Z"
				stroke="currentColor"
				strokeWidth="3"
				strokeMiterlimit="10"
			/>
			<path
				d="M25.6215 33.7812V23.9344H28.9996L29.5027 20.125H25.6215V17.6813C25.6215 16.6031 25.909 15.8125 27.5621 15.8125H29.6465V12.3625C29.2871 12.2906 28.0652 12.2188 26.6277 12.2188C23.609 12.2188 21.5965 14.0156 21.5965 17.25V20.125H18.1465V23.9344H21.5246V33.7812H25.6215Z"
				fill="currentColor"
			/>
		</svg>
	);
}
