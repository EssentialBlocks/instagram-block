/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useEffect } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { select } = wp.data;
const {
	PanelBody,
	ToggleControl,
	TextareaControl,
	SelectControl,
	TextControl,
	RangeControl,
	BaseControl,
	TabPanel,
} = wp.components;

import objAttributes from "./attributes";
import ColorControl from "../util/color-control";
import ImageAvatar from "../util/image-avatar";
import ResponsiveRangeController from "../util/responsive-range-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import GradientColorControl from "../util/gradient-color-controller";
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import {
	CARD_STYLE,
	LAYOUT,
	OVERLAY_STYLE,
	NUMBER_OF_COLUMNS,
	SORT_OPTIONS,
	GRID_GAP,
} from "./constants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		token,
		layout,
		overlayStyle,
		cardStyle,
		thumbs,
		numberOfImages,
		gridGap,
		backgroundColor,
		borderRadius,
		hasEqualImages,
		showCaptions,
		enableLink,
		openInNewTab,
		showProfileImg,
		profileImg,
		showProfileName,
		profileName,
		showPagination,
		sortBy,
		showMeta,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

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
					<PanelBody title={__("API key")}>
						<TextareaControl
							label={__("Access Token")}
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
								title: "General",
								className: "eb-tab general",
							},
							{
								name: "styles",
								title: "Styles",
								className: "eb-tab styles",
							},
							{
								name: "advance",
								title: "Advance",
								className: "eb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"eb-tab-controls " + tab.name}>
								{tab.name === "general" && (
									<>
										<PanelBody title={__("API key")}>
											<TextareaControl
												label={__("Access Token")}
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
															baseLabel={__(
																"Space Between Images",
																"instagram-block"
															)}
															controlName={GRID_GAP}
															resRequiredProps={resRequiredProps}
															min={0}
															max={30}
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
													<ResponsiveRangeController
														baseLabel={__("Columns", "instagram-block")}
														controlName={NUMBER_OF_COLUMNS}
														resRequiredProps={resRequiredProps}
														min={1}
														max={8}
														step={1}
														noUnits
													/>
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
													<ToggleControl
														label={__("Load More", "intagram-block")}
														checked={showPagination}
														onChange={(showPagination) =>
															setAttributes({ showPagination })
														}
													/>
													<ToggleControl
														label={__("Show captions")}
														checked={showCaptions}
														onChange={(showCaptions) =>
															setAttributes({ showCaptions })
														}
													/>
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
													<ToggleControl
														label={__("Show Meta?", "instagram-block")}
														checked={showMeta}
														onChange={(showMeta) => setAttributes({ showMeta })}
													/>
													<RangeControl
														label={__("Border Radius")}
														value={borderRadius}
														onChange={(borderRadius) =>
															setAttributes({ borderRadius })
														}
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
									</>
								)}
								{tab.name === "styles" && <></>}
								{tab.name === "advance" && <></>}
							</div>
						)}
					</TabPanel>
				)}
			</div>
		</InspectorControls>
	);
};

export default Inspector;
