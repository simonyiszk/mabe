import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeNewsAuthor'
 * @name TypeNewsAuthorFields
 * @type {TypeNewsAuthorFields}
 * @memberof TypeNewsAuthor
 */
export interface TypeNewsAuthorFields {
	/**
	 * Field type definition for field 'name' (name)
	 * @name name
	 * @localized false
	 */
	name: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'desc' (desc)
	 * @name desc
	 * @localized false
	 */
	desc?: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'image' (image)
	 * @name image
	 * @localized false
	 */
	image: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'newsAuthor' (NewsAuthor)
 * @name TypeNewsAuthorSkeleton
 * @type {TypeNewsAuthorSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T12:07:57.789Z
 * @version 5
 */
export type TypeNewsAuthorSkeleton = EntrySkeletonType<
	TypeNewsAuthorFields,
	"newsAuthor"
>;
/**
 * Entry type definition for content type 'newsAuthor' (NewsAuthor)
 * @name TypeNewsAuthor
 * @type {TypeNewsAuthor}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T12:07:57.789Z
 * @version 5
 */
export type TypeNewsAuthor<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeNewsAuthorSkeleton, Modifiers, Locales>;

export function isTypeNewsAuthor<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeNewsAuthor<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "newsAuthor";
}
