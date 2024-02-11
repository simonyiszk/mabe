import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypePartners'
 * @name TypePartnersFields
 * @type {TypePartnersFields}
 * @memberof TypePartners
 */
export interface TypePartnersFields {
	/**
	 * Field type definition for field 'name' (name)
	 * @name name
	 * @localized false
	 */
	name: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'address' (address)
	 * @name address
	 * @localized false
	 */
	address?: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'phone' (phone)
	 * @name phone
	 * @localized false
	 */
	phone?: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'email' (email)
	 * @name email
	 * @localized false
	 */
	email?: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'website' (website)
	 * @name website
	 * @localized false
	 */
	website: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'logo' (logo)
	 * @name logo
	 * @localized false
	 */
	logo: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'partners' (Partners)
 * @name TypePartnersSkeleton
 * @type {TypePartnersSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:59:55.487Z
 * @version 9
 */
export type TypePartnersSkeleton = EntrySkeletonType<
	TypePartnersFields,
	"partners"
>;
/**
 * Entry type definition for content type 'partners' (Partners)
 * @name TypePartners
 * @type {TypePartners}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:59:55.487Z
 * @version 9
 */
export type TypePartners<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypePartnersSkeleton, Modifiers, Locales>;

export function isTypePartners<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypePartners<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "partners";
}
