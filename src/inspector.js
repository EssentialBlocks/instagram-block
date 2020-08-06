/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextareaControl,
	RangeControl,
} from "@wordpress/components";

const Inspector = ({ attributes, setAttributes, fetchPhotos }) => {
	const {
		token,
		columns,
		thumbs,
		numberOfImages,
		gridGap,
		backgroundColor,
		borderRadius,
		hasEqualImages,
		showCaptions,
	} = attributes;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("API key")}>
				<TextareaControl
					label={__("Access Token")}
					value={token}
					onChange={(token) => {
						setAttributes({ token });
						fetchPhotos();
					}}
				/>
			</PanelBody>

			{thumbs.length > 0 && (
				<>
					<PanelBody title={__("Settings")}>
						<ToggleControl
							label={__("Square thumbnail")}
							checked={hasEqualImages}
							onChange={(hasEqualImages) => setAttributes({ hasEqualImages })}
						/>

						<ToggleControl
							label={__("Show captions")}
							checked={showCaptions}
							onChange={(showCaptions) => setAttributes({ showCaptions })}
						/>

						<RangeControl
							label={__("Columns")}
							value={columns}
							onChange={(columns) => {
								setAttributes({ columns });
								fetchPhotos();
							}}
							min={1}
							max={8}
						/>

						<RangeControl
							label={__("Number Of Images")}
							value={numberOfImages}
							onChange={(numberOfImages) => {
								setAttributes({ numberOfImages });
							}}
							min={1}
							max={25}
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

					<PanelColorSettings
						title={__("Background Color")}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: (backgroundColor) =>
									setAttributes({ backgroundColor }),
								label: "",
							},
						]}
					/>
				</>
			)}
		</InspectorControls>
	);
};

export default Inspector;
