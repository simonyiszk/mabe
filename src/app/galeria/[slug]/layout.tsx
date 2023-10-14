export default function Layout(props: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	const { children, modal } = props;
	return (
		<div>
			{children}
			{modal}
		</div>
	);
}
