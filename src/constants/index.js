const { __ } = wp.i18n;

export const SORT_OPTIONS = [
	{ label: __("Most Recent"), value: "most_recent" },
	{ label: __("Least Recent"), value: "least_recent" },
	// { label: __("Most Liked"), value: "most_liked" },
	// { label: __("Least Liked"), value: "least_liked" },
	// { label: __("Most Commented"), value: "most_commented" },
	// { label: __("Least Commented"), value: "least_commented" },
];

export const LAYOUT = [
	{ label: __("Overlay", "instagram-block"), value: "overlay" },
	{ label: __("Card", "instagram-block"), value: "card" },
];

export const OVERLAY_STYLE = [
	{ label: __("Simple", "instagram-block"), value: "overlay__simple" },
	{ label: __("Basic", "instagram-block"), value: "overlay__basic" },
	{ label: __("Standard", "instagram-block"), value: "overlay__standard" },
];

export const CARD_STYLE = [
	{ label: __("Content Outter", "instagram-block"), value: "content_outter" },
	{ label: __("Content Inner", "instagram-block"), value: "content__inner" },
];

export const NUMBER_OF_COLUMNS = "imgNum";
export const GRID_GAP = "gridGap";
export const IMAGE_BORDER = "imgBrdShd";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
