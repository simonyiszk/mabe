import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeMembers'
 * @name TypeMembersFields
 * @type {TypeMembersFields}
 * @memberof TypeMembers
 */
export interface TypeMembersFields {
	/**
	 * Field type definition for field 'name' (name)
	 * @name name
	 * @localized false
	 */
	name: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'position' (position)
	 * @name position
	 * @localized false
	 */
	position: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'email' (email)
	 * @name email
	 * @localized false
	 */
	email: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'image' (image)
	 * @name image
	 * @localized false
	 */
	image: EntryFieldTypes.AssetLink;
	/**
	 * Field type definition for field 'order' (order)
	 * @name order
	 * @localized false
	 */
	order: EntryFieldTypes.Integer;
}

/**
 * Entry skeleton type definition for content type 'members' (Members)
 * @name TypeMembersSkeleton
 * @type {TypeMembersSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:48:51.607Z
 * @version 9
 */
export type TypeMembersSkeleton = EntrySkeletonType<
	TypeMembersFields,
	"members"
>;
/**
 * Entry type definition for content type 'members' (Members)
 * @name TypeMembers
 * @type {TypeMembers}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T11:48:51.607Z
 * @version 9
 */
export type TypeMembers<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeMembersSkeleton, Modifiers, Locales>;

export function isTypeMembers<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeMembers<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "members";
}
