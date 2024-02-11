import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeJoinUsButton'
 * @name TypeJoinUsButtonFields
 * @type {TypeJoinUsButtonFields}
 * @memberof TypeJoinUsButton
 */
export interface TypeJoinUsButtonFields {
	/**
	 * Field type definition for field 'mabeformLink' (mabeformLink)
	 * @name mabeformLink
	 * @localized false
	 */
	mabeformLink: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabeEmail' (mabeEmail)
	 * @name mabeEmail
	 * @localized false
	 */
	mabeEmail: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabeLocation' (mabeLocation)
	 * @name mabeLocation
	 * @localized false
	 */
	mabeLocation: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabePhone' (mabePhone)
	 * @name mabePhone
	 * @localized false
	 */
	mabePhone: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabeFacebook' (mabeFacebook)
	 * @name mabeFacebook
	 * @localized false
	 */
	mabeFacebook: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabeInstagram' (mabeInstagram)
	 * @name mabeInstagram
	 * @localized false
	 */
	mabeInstagram: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabeLinkedIn' (mabeLinkedIn)
	 * @name mabeLinkedIn
	 * @localized false
	 */
	mabeLinkedIn: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'mabeCoverImage' (mabeCoverImage)
	 * @name mabeCoverImage
	 * @localized false
	 */
	mabeCoverImage: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'joinUsButton' (GeneralData)
 * @name TypeJoinUsButtonSkeleton
 * @type {TypeJoinUsButtonSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:51:12.811Z
 * @version 11
 */
export type TypeJoinUsButtonSkeleton = EntrySkeletonType<
	TypeJoinUsButtonFields,
	"joinUsButton"
>;
/**
 * Entry type definition for content type 'joinUsButton' (GeneralData)
 * @name TypeJoinUsButton
 * @type {TypeJoinUsButton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:51:12.811Z
 * @version 11
 */
export type TypeJoinUsButton<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeJoinUsButtonSkeleton, Modifiers, Locales>;

export function isTypeJoinUsButton<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeJoinUsButton<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "joinUsButton";
}
