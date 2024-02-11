import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeGalleryAlbum'
 * @name TypeGalleryAlbumFields
 * @type {TypeGalleryAlbumFields}
 * @memberof TypeGalleryAlbum
 */
export interface TypeGalleryAlbumFields {
	/**
	 * Field type definition for field 'title' (title)
	 * @name title
	 * @localized false
	 */
	title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'images' (images)
	 * @name images
	 * @localized false
	 */
	images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
	/**
	 * Field type definition for field 'slug' (slug)
	 * @name slug
	 * @localized false
	 */
	slug: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'galleryAlbum' (GalleryAlbum)
 * @name TypeGalleryAlbumSkeleton
 * @type {TypeGalleryAlbumSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T12:22:07.224Z
 * @version 9
 */
export type TypeGalleryAlbumSkeleton = EntrySkeletonType<
	TypeGalleryAlbumFields,
	"galleryAlbum"
>;
/**
 * Entry type definition for content type 'galleryAlbum' (GalleryAlbum)
 * @name TypeGalleryAlbum
 * @type {TypeGalleryAlbum}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-09-26T12:22:07.224Z
 * @version 9
 */
export type TypeGalleryAlbum<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeGalleryAlbumSkeleton, Modifiers, Locales>;

export function isTypeGalleryAlbum<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeGalleryAlbum<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "galleryAlbum";
}
