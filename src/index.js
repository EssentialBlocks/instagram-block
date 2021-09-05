const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";
import Edit from "./edit";
import { InstagramIcon } from "./icons";
import attributes from "./attributes";
import example from "./example";

registerBlockType("instagram-block/instagram-feed-block", {
	title: __("Instagram Feed", "instagram-block"),
	description: __(
		"Showcase Instagram posts for your web visitors",
		"instagram-block"
	),
	category: "widgets",
	icon: InstagramIcon,
	attributes,
	supports: {
		align: ["wide", "full"],
	},
	edit: Edit,
	save: () => null,
	example,
});
