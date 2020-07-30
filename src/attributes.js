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
	imageSpace: {
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
	displayProfile: {
		type: "boolean",
		default: false,
	},
	backgroundColor: {
		type: "string",
		defualt: "tranaparent",
	},
	addHover: {
		type: "boolean",
		default: true,
	},
	hoverColor: {
		type: "string",
	},
	hoverImageID: {
		type: "string",
	},
	hoverOpacity: {
		type: "number",
		default: 0.5,
	},
	displayLike: {
		type: "boolean",
		default: true,
	},
	likeColor: {
		type: "string",
		default: "#000000",
	},
	displayComment: {
		type: "boolean",
		default: true,
	},
	commentColor: {
		type: "string",
		default: "#000000",
	},
	sortBy: {
		type: "string",
		default: "most_recent",
	},
	nameColor: {
		type: "string",
		default: "#000000",
	},
	detailsColor: {
		type: "string",
		default: "#000000",
	},
	nameFontSize: {
		type: "number",
		default: 36,
	},
	nameSizeUnit: {
		type: "string",
		default: "px",
	},
	detailsFontSize: {
		type: "number",
		default: 18,
	},
	detailsSizeUnit: {
		type: "string",
		default: "px",
	},
	borderRadius: {
		type: "number",
		default: 0,
	},
	selectedStyle: {
		type: "string",
		default: "basic",
	},
	fontFamily: {
		type: "string",
	},
	displayDate: {
		type: "boolean",
		default: true,
	},
	preview: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
