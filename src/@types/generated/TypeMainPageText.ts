import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeMainPageText'
 * @name TypeMainPageTextFields
 * @type {TypeMainPageTextFields}
 * @memberof TypeMainPageText
 */
export interface TypeMainPageTextFields {
	/**
	 * Field type definition for field 'pageTitle' (pageTitle)
	 * @name pageTitle
	 * @localized false
	 */
	pageTitle: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'section1title' (section1title)
	 * @name section1title
	 * @localized false
	 */
	section1title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'section1content' (section1content)
	 * @name section1content
	 * @localized false
	 */
	section1content: EntryFieldTypes.Text;
	/**
	 * Field type definition for field 'section2title' (section2title)
	 * @name section2title
	 * @localized false
	 */
	section2title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'section2content' (section2content)
	 * @name section2content
	 * @localized false
	 */
	section2content: EntryFieldTypes.Text;
	/**
	 * Field type definition for field 'section3title' (section3title)
	 * @name section3title
	 * @localized false
	 */
	section3title: EntryFieldTypes.Symbol;
	/**
	 * Field type definition for field 'section3content' (section3content)
	 * @name section3content
	 * @localized false
	 */
	section3content: EntryFieldTypes.Text;
	/**
	 * Field type definition for field 'joinPanelContent' (joinPanelContent)
	 * @name joinPanelContent
	 * @localized false
	 */
	joinPanelContent: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'mainPageText' (MainPageText)
 * @name TypeMainPageTextSkeleton
 * @type {TypeMainPageTextSkeleton}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-11-28T14:41:23.909Z
 * @version 1
 */
export type TypeMainPageTextSkeleton = EntrySkeletonType<
	TypeMainPageTextFields,
	"mainPageText"
>;
/**
 * Entry type definition for content type 'mainPageText' (MainPageText)
 * @name TypeMainPageText
 * @type {TypeMainPageText}
 * @author 0omBNdldEqScZYP3IQWkFT
 * @since 2021-11-28T14:41:23.909Z
 * @version 1
 */
export type TypeMainPageText<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeMainPageTextSkeleton, Modifiers, Locales>;

export function isTypeMainPageText<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
>(
	entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeMainPageText<Modifiers, Locales> {
	return entry.sys.contentType.sys.id === "mainPageText";
}
