import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeDocuments'
 * @name TypeDocumentsFields
 * @type {TypeDocumentsFields}
 * @memberof TypeDocuments
 */
export interface TypeDocumentsFields {
	/**
	 * Field type definition for field 'name' (name)
	 * @name name
	 * @localized false
	 */
	name: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'document' (document)
	 * @name document
	 * @localized false
	 */
	document: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'documents' (Documents)
 * @name TypeDocumentsSkeleton
 * @type {TypeDocumentsSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-11-01T22:45:11.270Z
 * @version 7
 */
export type TypeDocumentsSkeleton = EntrySkeletonType<
	TypeDocumentsFields,
	"documents"
>;
/**
 * Entry type definition for content type 'documents' (Documents)
 * @name TypeDocuments
 * @type {TypeDocuments}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-11-01T22:45:11.270Z
 * @version 7
 */
export type TypeDocuments<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeDocumentsSkeleton, Modifiers, Locales>;

export function isTypeDocuments<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeDocuments<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "documents";
}
