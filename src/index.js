/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import example from "./example";
import metadata from "../block.json";
import "./style.scss";
import attributes from "./attributes";
import { InstagramIcon } from "./icon";
const { ebConditionalRegisterBlockType } = EBInstagramFeedControls;

ebConditionalRegisterBlockType(metadata, {
	icon: InstagramIcon,
	attributes,
	keywords: [
		__("Instagram Feed", "instagram-block"),
		__("eb Instagram Feed", "instagram-block"),
	],
	edit: Edit,
	save: () => null,
	example,
});
