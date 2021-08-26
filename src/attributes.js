import { NUMBER_OF_COLUMNS, GRID_GAP } from "./constants";
import {
	generateTypographyAttributes,
	generateResponsiveRangeAttributes,
	generateDimensionsAttributes,
} from "../util/helpers";
const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
	},
	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},
	token: {
		type: "string",
	},
	layout: {
		type: "string",
		default: "overlay",
	},
	overlayStyle: {
		type: "string",
		default: "overlay__simple",
	},
	cardStyle: {
		type: "string",
		default: "content__outter",
	},
	columns: {
		type: "string",
		default: 4,
	},
	numberOfImages: {
		type: "number",
		default: 4,
	},
	gridGap: {
		type: "number",
	},
	thumbs: {
		type: "array",
		default: [],
	},
	profile: {
		type: "array",
		default: [],
	},
	backgroundColor: {
		type: "string",
		defualt: "tranaparent",
	},
	borderRadius: {
		type: "number",
		default: 0,
	},
	preview: {
		type: "boolean",
		default: false,
	},
	hasEqualImages: {
		type: "boolean",
		default: false,
	},
	showCaptions: {
		type: "boolean",
		default: true,
	},
	enableLink: {
		type: "boolean",
		default: false,
	},
	openInNewTab: {
		type: "boolean",
		default: false,
	},
	showProfileImg: {
		type: "boolean",
		default: true,
	},
	profileImg: {
		type: "string",
	},
	imageID: {
		type: "string",
		default: null,
	},
	showProfileName: {
		type: "boolean",
		default: true,
	},
	profileName: {
		type: "string",
	},
	pagination: {
		type: "boolean",
		default: false,
	},
	sortBy: {
		type: "string",
		default: "most_recent",
	},
	showMeta: {
		type: "boolean",
		default: true,
	},
	...generateResponsiveRangeAttributes(NUMBER_OF_COLUMNS, {
		defaultRange: 3,
		noUnits: true,
	}),
	...generateResponsiveRangeAttributes(GRID_GAP, {
		defaultRange: 15,
		noUnits: true,
	}),
};

export default attributes;
