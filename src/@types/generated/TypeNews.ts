import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";
import type { TypeNewsAuthorSkeleton } from "./TypeNewsAuthor";

/**
 * Fields type definition for content type 'TypeNews'
 * @name TypeNewsFields
 * @type {TypeNewsFields}
 * @memberof TypeNews
 */
export interface TypeNewsFields {
	/**
	 * Field type definition for field 'title' (title)
	 * @name title
	 * @localized false
	 */
	title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'miniContent' (miniContent)
	 * @name miniContent
	 * @localized false
	 */
	miniContent: EntryFieldTypes.Text;
	/**
	 * Field type definition for field 'content' (content)
	 * @name content
	 * @localized false
	 */
	content: EntryFieldTypes.RichText;
	/**
	 * Field type definition for field 'coverImage' (coverImage)
	 * @name coverImage
	 * @localized false
	 */
	coverImage: EntryFieldTypes.AssetLink;
	/**
	 * Field type definition for field 'date' (date)
	 * @name date
	 * @localized false
	 */
	date: EntryFieldTypes.Date;
	/**
	 * Field type definition for field 'author' (author)
	 * @name author
	 * @localized false
	 */
	author: EntryFieldTypes.EntryLink<TypeNewsAuthorSkeleton>;
	/**
	 * Field type definition for field 'slug' (slug)
	 * @name slug
	 * @localized false
	 */
	slug: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'news' (News)
 * @name TypeNewsSkeleton
 * @type {TypeNewsSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:53:58.543Z
 * @version 29
 */
export type TypeNewsSkeleton = EntrySkeletonType<TypeNewsFields, "news">;
/**
 * Entry type definition for content type 'news' (News)
 * @name TypeNews
 * @type {TypeNews}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:53:58.543Z
 * @version 29
 */
export type TypeNews<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeNewsSkeleton, Modifiers, Locales>;

export function isTypeNews<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeNews<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "news";
}
