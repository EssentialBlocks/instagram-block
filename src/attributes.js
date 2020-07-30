const attributes = {
	token: {
		type: "string",
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
		default: false,
	},
};

export default attributes;
