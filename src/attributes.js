const attributes = {
	token: {
		type: "string",
		default:
			"IGQVJYNzI5NkZAXb2xyTGZAJZAnBIOTRZAblUyUVlsbDJCRWtVTk94Ti1UVXRWOUFaYmJjaUtRcjAwODNZAa3JoSjExY0RBdmxvM01pUlB2M1NwTmlyeHVwUHNsU195UlRiaUJYNTZABUHFfWE1rWER5MlZA6QgZDZD",
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
	selectedStyle: {
		type: "string",
		default: "basic",
	},
	preview: {
		type: "boolean",
		default: false,
	},
	hasEqualImages: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
