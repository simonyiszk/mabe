import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeEvents'
 * @name TypeEventsFields
 * @type {TypeEventsFields}
 * @memberof TypeEvents
 */
export interface TypeEventsFields {
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
	 * Field type definition for field 'longContent' (longContent)
	 * @name longContent
	 * @localized false
	 */
	longContent: EntryFieldTypes.RichText;
	/**
	 * Field type definition for field 'location' (location)
	 * @name location
	 * @localized false
	 */
	location: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'image' (image)
	 * @name image
	 * @localized false
	 */
	image: EntryFieldTypes.AssetLink;
	/**
	 * Field type definition for field 'startDate' (startDate)
	 * @name startDate
	 * @localized false
	 */
	startDate?: EntryFieldTypes.Date;
	/**
	 * Field type definition for field 'endDate' (endDate)
	 * @name endDate
	 * @localized false
	 */
	endDate?: EntryFieldTypes.Date;
	/**
	 * Field type definition for field 'slug' (slug)
	 * @name slug
	 * @localized false
	 */
	slug: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'events' (Events)
 * @name TypeEventsSkeleton
 * @type {TypeEventsSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T12:04:24.735Z
 * @version 33
 */
export type TypeEventsSkeleton = EntrySkeletonType<TypeEventsFields, "events">;
/**
 * Entry type definition for content type 'events' (Events)
 * @name TypeEvents
 * @type {TypeEvents}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T12:04:24.735Z
 * @version 33
 */
export type TypeEvents<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeEventsSkeleton, Modifiers, Locales>;

export function isTypeEvents<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeEvents<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "events";
}
