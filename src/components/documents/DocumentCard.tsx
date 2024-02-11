import type { Entry } from "contentful";

import type { TypeDocumentsSkeleton } from "@/@types/generated";

const datePrintConfig = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
} as Intl.DateTimeFormatOptions;

export function DocumentCard({
	name,
	document,
}: Entry<
	TypeDocumentsSkeleton,
	"WITHOUT_UNRESOLVABLE_LINKS",
	string
>["fields"]) {
	return (
		<div className="cursor-pointer rounded-gallery p-4 shadow-partner">
			<a
				href={`https:${document?.fields?.file?.url}`}
				target="_blank"
				rel="noreferrer"
			>
				<h1 className="text-lg font-bold">{name}</h1>
				<p>
					létrehozva:{" "}
					{new Date(String(document?.sys?.createdAt)).toLocaleDateString(
						"hu",
						datePrintConfig,
					)}
				</p>
			</a>
		</div>
	);
}
