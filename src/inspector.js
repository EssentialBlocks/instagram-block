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
} from "@wordpress/element";

/**
 * Internal depencencies
 */
import {
	DEFAULT_HOVER_COLOR,
	SORT_OPTIONS,
	FONT_SIZE_UNIT,
	STYLES,
} from "./constants";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";

const Inspector = ({
	attributes,
	setAttributes,
	isCard,
	getPhotos,
	getBio,
	onSort,
}) => {
	const {
		token,
		columns,
		thumbs,
		numberOfImages,
		imageSpace,
		displayProfile,
		backgroundColor,
		addHover,
		hoverColor,
		hoverOpacity,
		displayLike,
		displayComment,
		likeColor,
		commentColor,
		sortBy,
		nameColor,
		detailsColor,
		nameSizeUnit,
		nameFontSize,
		detailsSizeUnit,
		detailsFontSize,
		borderRadius,
		selectedStyle,
		fontFamily,
		displayDate,
	} = attributes;

	return <h1>Hi</h1>;

	const withHoverColor = {
		label: "Hover Color",
		value: hoverColor || DEFAULT_HOVER_COLOR,
		onChange: (hoverColor) => setAttributes({ hoverColor }),
	};

	const withLikeColor = {
		label: "Like Color",
		value: likeColor,
		onChange: (likeColor) => setAttributes({ likeColor }),
	};

	const withCommentColor = {
		label: "Comment Color",
		value: commentColor,
		onChange: (commentColor) => setAttributes({ commentColor }),
	};

	const withNameColor = {
		label: "Name Color",
		value: nameColor,
		onChange: (nameColor) => setAttributes({ nameColor }),
	};

	const withDetailsColor = {
		label: "Details Color",
		value: detailsColor,
		onChange: (detailsColor) => setAttributes({ detailsColor }),
	};

	let colorsArray = [
		{
			label: "Background Color",
			value: backgroundColor,
			onChange: (backgroundColor) => setAttributes({ backgroundColor }),
		},
	];

	if (displayProfile) {
		colorsArray = [withNameColor, withDetailsColor, ...colorsArray];
	}

	if (!isCard() && addHover) {
		colorsArray = [...colorsArray, withHoverColor];
	}

	if (displayLike) {
		colorsArray = [...colorsArray, withLikeColor];
	}

	if (displayComment) {
		colorsArray = [...colorsArray, withCommentColor];
	}

	let NAME_FONT_STEP = nameSizeUnit === "em" ? 0.1 : 1;
	let NAME_FONT_MIN = 1;
	let NAME_FONT_MAX = nameSizeUnit === "em" ? 10 : 100;
	let DETAILS_FONT_STEP = detailsSizeUnit === "em" ? 0.1 : 1;
	let DETAILS_FONT_MIN = 1;
	let DETAILS_FONT_MAX = detailsSizeUnit === "em" ? 10 : 100;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("API key")}>
				<TextareaControl
					label={__("Access Token")}
					value={token}
					onChange={(token) => {
						setAttributes({ token });
						getPhotos(numberOfImages, token);
					}}
				/>
			</PanelBody>

			{thumbs.length > 0 && (
				<PanelBody title={__("Settings")}>
					<SelectControl
						label={__("Sort By")}
						value={sortBy}
						options={SORT_OPTIONS}
						onChange={(sortBy) => onSort(sortBy)}
					/>

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

					<RangeControl
						label={__("Columns")}
						value={columns}
						onChange={(columns) => {
							setAttributes({ columns });
							getPhotos(numberOfImages);
						}}
						min={1}
						max={8}
					/>

					<RangeControl
						label={__("Number Of Images")}
						value={numberOfImages}
						onChange={(numberOfImages) => {
							setAttributes({ numberOfImages });
							getPhotos(numberOfImages);
						}}
						min={1}
						max={30}
					/>

					<RangeControl
						label={__("Space Between Images")}
						value={imageSpace}
						onChange={(imageSpace) => setAttributes({ imageSpace })}
						min={0}
						max={30}
					/>

					{!isCard() && (
						<RangeControl
							label={__("Border Radius")}
							value={borderRadius}
							onChange={(borderRadius) => setAttributes({ borderRadius })}
							min={0}
							max={50}
						/>
					)}

					<ToggleControl
						label={__("Display Profile")}
						checked={displayProfile}
						onChange={(displayProfile) => {
							setAttributes({ displayProfile });
							getBio();
						}}
					/>

					{!isCard() && (
						<ToggleControl
							label={__("Hover Color")}
							checked={addHover}
							onChange={(addHover) =>
								addHover
									? setAttributes({ addHover })
									: setAttributes({
											addHover,
											hoverColor: "transparent",
									  })
							}
						/>
					)}

					<ToggleControl
						label={__("Display Likes")}
						checked={displayLike}
						onChange={(displayLike) => setAttributes({ displayLike })}
					/>

					<ToggleControl
						label={__("Display Comments")}
						checked={displayComment}
						onChange={(displayComment) => setAttributes({ displayComment })}
					/>

					{isCard() && (
						<ToggleControl
							label={__("Display Date")}
							checked={displayDate}
							onChange={(displayDate) => setAttributes({ displayDate })}
						/>
					)}

					{addHover && !isCard() && (
						<RangeControl
							label={__("Hover Opacity")}
							help={__("Pick hover color to see effect")}
							value={hoverOpacity}
							onChange={(hoverOpacity) => setAttributes({ hoverOpacity })}
							step="0.1"
							min={0}
							max={1}
						/>
					)}

					<PanelColorSettings
						title={__("Colors")}
						initialOpen={false}
						colorSettings={colorsArray}
					/>

					<PanelBody title={__("Typography")} initialOpen={false}>
						<FontPicker
							label={__("Font Family")}
							value={fontFamily || null}
							onChange={(fontFamily) => setAttributes({ fontFamily })}
						/>

						{displayProfile && (
							<Fragment>
								<UnitControl
									selectedUnit={nameSizeUnit}
									unitTypes={FONT_SIZE_UNIT}
									onClick={(nameSizeUnit) => setAttributes({ nameSizeUnit })}
								/>
								<RangeControl
									label={__("Name Font Size")}
									value={nameFontSize}
									onChange={(nameFontSize) => setAttributes({ nameFontSize })}
									step={NAME_FONT_STEP}
									min={NAME_FONT_MIN}
									max={NAME_FONT_MAX}
								/>

								<UnitControl
									selectedUnit={detailsSizeUnit}
									unitTypes={FONT_SIZE_UNIT}
									onClick={(detailsSizeUnit) =>
										setAttributes({ detailsSizeUnit })
									}
								/>
								<RangeControl
									label={__("Details Font Size")}
									value={detailsFontSize}
									onChange={(detailsFontSize) =>
										setAttributes({ detailsFontSize })
									}
									step={DETAILS_FONT_STEP}
									min={DETAILS_FONT_MIN}
									max={DETAILS_FONT_MAX}
								/>
							</Fragment>
						)}
					</PanelBody>
				</PanelBody>
			)}
		</InspectorControls>
	);
};

export default Inspector;
