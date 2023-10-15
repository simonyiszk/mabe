import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

export const renderOptions = {
	renderNode: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[BLOCKS.EMBEDDED_ENTRY]: ({ data }: { data: any }) => {
			if (data.target.sys.contentType.sys.id === "videoEmbed") {
				return (
					<iframe
						src={data.target.fields.embedUrl}
						height="100%"
						width="100%"
						frameBorder="0"
						scrolling="no"
						title={data.target.fields.title}
						allowFullScreen
					/>
				);
			}
			return null;
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[BLOCKS.EMBEDDED_ASSET]: ({ data }: { data: any }) => {
			return (
				<Image
					src={`https:${data.target.fields.file.url}`}
					height={data.target.fields.file.details.image.height}
					width={data.target.fields.file.details.image.width}
					alt={data.target.fields.description || data.target.fields.title}
					className="rounded-md lg:rounded-lg"
					loading="lazy"
				/>
			);
		},
	},
};
