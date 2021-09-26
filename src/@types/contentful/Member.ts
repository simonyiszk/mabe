export interface IContentfulMembers {
	sys: MembersSys;
	total: number;
	skip: number;
	limit: number;
	items: Item[];
}

export interface Item {
	metadata: Metadata;
	sys: ItemSys;
	fields: Fields;
}
/**
 * Fields that contain the only useful data for us.
 */
export interface Fields {
	name: string;
	position: string;
	email: string;
}

export interface Metadata {
	tags: any[];
}

export interface ItemSys {
	space: ContentType;
	id: string;
	type: string;
	createdAt: Date;
	updatedAt: Date;
	environment: ContentType;
	revision: number;
	contentType: ContentType;
	locale: string;
}

export interface ContentType {
	sys: ContentTypeSys;
}

export interface ContentTypeSys {
	type: string;
	linkType: string;
	id: string;
}

export interface MembersSys {
	type: string;
}
