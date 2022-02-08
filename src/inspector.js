/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextareaControl,
	SelectControl,
	TextControl,
	RangeControl,
	BaseControl,
	Button,
	TabPanel
} from "@wordpress/components";
import { select } from "@wordpress/data";

import objAttributes from "./attributes";

// import ColorControl from "../../../util/color-control";
// import ImageAvatar from "../../../util/image-avatar";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";

const {
	// mimmikCssForResBtns,
	// mimmikCssOnPreviewBtnClickWhileBlockSelected,

	// 
	ColorControl,
	ImageAvatar,
	ResponsiveRangeController,
	ResponsiveDimensionsControl,
	BorderShadowControl,
	TypographyDropdown,
} = window.EBInstagramFeedControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

import {
	CARD_STYLE,
	LAYOUT,
	OVERLAY_STYLE,
	NUMBER_OF_COLUMNS,
	SORT_OPTIONS,
	GRID_GAP,
	IMAGE_BORDER,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
} from "./constants";
import {
	typoPrefix_caption,
	typoPrefix_meta,
	typoPrefix_header,
} from "./constants/typographyPrefixConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		token,
		layout,
		overlayStyle,
		cardStyle,
		thumbs,
		numberOfImages,
		captionColor,
		metaColor,
		headerColor,
		overlayColor,
		hasEqualImages,
		showCaptions,
		enableLink,
		openInNewTab,
		showProfileImg,
		profileImg,
		imageID,
		showProfileName,
		profileName,
		sortBy,
		showMeta,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				{!token && (
					<PanelBody title={__("API key", "instagram-block")}>
						<TextareaControl
							label={__("Access Token", "instagram-block")}
							value={token}
							onChange={(token) => {
								setAttributes({ token });
							}}
						/>
					</PanelBody>
				)}
				{token && (
					<TabPanel
						className="eb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: __("General", "instagram-block"),
								className: "eb-tab general",
							},
							{
								name: "styles",
								title: __("Style", "instagram-block"),
								className: "eb-tab styles",
							},
							{
								name: "advance",
								title: __("Advanced", "instagram-block"),
								className: "eb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"eb-tab-controls " + tab.name}>
								{tab.name === "general" && (
									<>
										<PanelBody title={__("API key", "instagram-block")}>
											<TextareaControl
												label={__("Access Token", "instagram-block")}
												value={token}
												onChange={(token) => {
													setAttributes({ token });
												}}
											/>
										</PanelBody>
										{thumbs.length > 0 && (
											<>
												<PanelBody
													title={__("Feed Settings", "instagram-block")}
													intialOpen={true}
												>
													<>
														<SelectControl
															label={__("Sort By", "instagram-block")}
															value={sortBy}
															options={SORT_OPTIONS}
															onChange={(newSortBy) =>
																setAttributes({ sortBy: newSortBy })
															}
														/>
														<RangeControl
															label={__("Number Of Images", "instagram-block")}
															value={numberOfImages}
															onChange={(numberOfImages) => {
																setAttributes({ numberOfImages });
															}}
															min={1}
															max={100}
														/>
														<ResponsiveRangeController
															baseLabel={__("Columns", "instagram-block")}
															controlName={NUMBER_OF_COLUMNS}
															resRequiredProps={resRequiredProps}
															min={1}
															max={8}
															step={1}
															noUnits
														/>
														<ToggleControl
															label={__("Square thumbnail", "instagram-block")}
															checked={hasEqualImages}
															onChange={(hasEqualImages) =>
																setAttributes({ hasEqualImages })
															}
														/>
													</>
												</PanelBody>
												<PanelBody
													title={__("General Settings", "instagram-block")}
													initialOpen={false}
												>
													<SelectControl
														label={__("Layout", "instagram-block")}
														value={layout}
														options={LAYOUT}
														onChange={(newLayout) =>
															setAttributes({ layout: newLayout })
														}
													/>
													{layout === "overlay" && (
														<SelectControl
															label={__("Overlay Style", "instagram-block")}
															value={overlayStyle}
															options={OVERLAY_STYLE}
															onChange={(newOverlayStyle) =>
																setAttributes({ overlayStyle: newOverlayStyle })
															}
														/>
													)}
													{layout === "card" && (
														<SelectControl
															label={__("Card Style", "instagram-block")}
															value={cardStyle}
															options={CARD_STYLE}
															onChange={(newCardStyle) =>
																setAttributes({ cardStyle: newCardStyle })
															}
														/>
													)}
													{layout === "card" && (
														<>
															<hr />
															<BaseControl>
																<h3 className="eb-control-title">
																	{__("User info", "instagram-block")}
																</h3>
															</BaseControl>
															<ToggleControl
																label={__(
																	"Show profile image",
																	"instagram-block"
																)}
																checked={showProfileImg}
																onChange={(showProfileImg) =>
																	setAttributes({
																		showProfileImg,
																	})
																}
															/>
															{showProfileImg && !profileImg && (
																<MediaUpload
																	onSelect={({ id, url }) =>
																		setAttributes({
																			profileImg: url,
																			imageID: id,
																		})
																	}
																	type="image"
																	value={imageID}
																	render={({ open }) => {
																		return (
																			<Button
																				className="eb-background-control-inspector-panel-img-btn components-button"
																				label={__("Upload Image", "instagram-block")}
																				icon="format-image"
																				onClick={open}
																			/>
																		);
																	}}
																/>
															)}
															{showProfileImg && profileImg && (
																<ImageAvatar
																	imageUrl={profileImg}
																	onDeleteImage={() =>
																		setAttributes({ profileImg: null })
																	}
																/>
															)}
															<ToggleControl
																label={__(
																	"Show profile name",
																	"instagram-block"
																)}
																checked={showProfileName}
																onChange={(showProfileName) =>
																	setAttributes({
																		showProfileName,
																	})
																}
															/>
															{showProfileName && (
																<TextControl
																	label={__("Custom Name", "instagram-block")}
																	value={profileName}
																	onChange={(newProfileName) =>
																		setAttributes({
																			profileName: newProfileName,
																		})
																	}
																/>
															)}
														</>
													)}
													{overlayStyle !== "overlay__simple" && (
														<ToggleControl
															label={__("Show captions", "instagram-block")}
															checked={showCaptions}
															onChange={(showCaptions) =>
																setAttributes({ showCaptions })
															}
														/>
													)}
													<ToggleControl
														label={__("Show Link?", "instagram-block")}
														checked={enableLink}
														onChange={(enableLink) =>
															setAttributes({ enableLink })
														}
													/>
													{enableLink && (
														<ToggleControl
															label={__(
																"Open in new window?",
																"instagram-block"
															)}
															checked={openInNewTab}
															onChange={(openInNewTab) =>
																setAttributes({ openInNewTab })
															}
														/>
													)}
													{overlayStyle !== "overlay__simple" && (
														<ToggleControl
															label={__("Show Meta?", "instagram-block")}
															checked={showMeta}
															onChange={(showMeta) =>
																setAttributes({ showMeta })
															}
														/>
													)}
												</PanelBody>
											</>
										)}
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Feed Styles", "instagram-block")}
											initialOpen={true}
										>
											<>
												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													className=""
													controlName={GRID_GAP}
													baseLabel={__("Padding", "instagram-block")}
												/>
												{layout === "overlay" && (
													<ColorControl
														label={__("Overlay Color", "instagram-block")}
														color={overlayColor}
														onChange={(overlayColor) =>
															setAttributes({ overlayColor })
														}
													/>
												)}
												<BaseControl>
													<h3 className="eb-control-title">
														{__("Border", "instagram-block")}
													</h3>
												</BaseControl>
												<BorderShadowControl
													controlName={IMAGE_BORDER}
													resRequiredProps={resRequiredProps}
													noShadow
												/>
											</>
										</PanelBody>
										<PanelBody
											title={__("Caption", "instagram-block")}
											initialOpen={false}
										>
											<>
												<TypographyDropdown
													baseLabel={__("Typography", "instagram-block")}
													typographyPrefixConstant={typoPrefix_caption}
													resRequiredProps={resRequiredProps}
												/>
												<ColorControl
													label={__("Color", "instagram-block")}
													color={captionColor}
													onChange={(captionColor) =>
														setAttributes({ captionColor })
													}
												/>
											</>
										</PanelBody>
										<PanelBody
											title={__("Meta", "instagram-block")}
											initialOpen={false}
										>
											<>
												<TypographyDropdown
													baseLabel={__("Typography", "instagram-block")}
													typographyPrefixConstant={typoPrefix_meta}
													resRequiredProps={resRequiredProps}
												/>
												<ColorControl
													label={__("Color", "instagram-block")}
													color={metaColor}
													onChange={(metaColor) => setAttributes({ metaColor })}
												/>
											</>
										</PanelBody>
										{layout === "card" && (
											<PanelBody
												title={__("Header", "instagram-block")}
												initialOpen={false}
											>
												<>
													<TypographyDropdown
														baseLabel={__("Typography", "instagram-block")}
														typographyPrefixConstant={typoPrefix_header}
														resRequiredProps={resRequiredProps}
													/>
													<ColorControl
														label={__("Color", "instagram-block")}
														color={headerColor}
														onChange={(headerColor) =>
															setAttributes({ headerColor })
														}
													/>
												</>
											</PanelBody>
										)}
									</>
								)}
								{tab.name === "advance" && (
									<>
										<PanelBody>
											<>
												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={WRAPPER_PADDING}
													baseLabel={__("Padding", "instagram-block")}
												/>
												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={WRAPPER_MARGIN}
													baseLabel={__("Margin", "instagram-block")}
												/>
											</>
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				)}
			</div>
		</InspectorControls>
	);
};

export default Inspector;
