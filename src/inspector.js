/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextareaControl,
	RangeControl,
} from "@wordpress/components";

/**
 * Internal depencencies
 */
import { STYLES } from "./constants";

const Inspector = ({ attributes, setAttributes, fetchPhotos }) => {
	const {
		token,
		columns,
		thumbs,
		numberOfImages,
		gridGap,
		backgroundColor,
		borderRadius,
		selectedStyle,
		hasEqualImages,
	} = attributes;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("API key")}>
				<TextareaControl
					label={__("Access Token")}
					value={token}
					onChange={(token) => {
						console.log("token");
						setAttributes({ token });
						fetchPhotos(numberOfImages);
					}}
				/>
			</PanelBody>

			{thumbs.length > 0 && (
				<PanelBody title={__("Settings")}>
					<SelectControl
						label={__("Select Style")}
						value={selectedStyle}
						options={STYLES}
						onChange={(selectedStyle) => {
							selectedStyle === "plain" || selectedStyle === "rounded"
								? setAttributes({
										borderRadius: 0,
										selectedStyle,
								  })
								: setAttributes({ selectedStyle });
						}}
					/>

					<ToggleControl
						label={__("Show equal sized images?")}
						checked={hasEqualImages}
						help={__("Use square thumbnails for each image?")}
						onChange={(hasEqualImages) => setAttributes({ hasEqualImages })}
					/>

					<RangeControl
						label={__("Columns")}
						value={columns}
						onChange={(columns) => {
							setAttributes({ columns });
							fetchPhotos(numberOfImages);
						}}
						min={1}
						max={8}
					/>

					<RangeControl
						label={__("Number Of Images")}
						value={numberOfImages}
						onChange={(numberOfImages) => {
							setAttributes({ numberOfImages });
							fetchPhotos(numberOfImages);
						}}
						min={1}
						max={30}
					/>

					<RangeControl
						label={__("Space Between Images")}
						value={gridGap}
						onChange={(gridGap) => setAttributes({ gridGap })}
						min={0}
						max={30}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={borderRadius}
						onChange={(borderRadius) => setAttributes({ borderRadius })}
						min={0}
						max={50}
					/>
				</PanelBody>
			)}
		</InspectorControls>
	);
};

export default Inspector;
