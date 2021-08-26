/*
 * WordPress dependencies
 *
 */
const { __ } = wp.i18n;
const { useState, useEffect } = wp.element;
const { Spinner, Toolbar, ToolbarButton } = wp.components;
const { useBlockProps, BlockControls, MediaUpload } = wp.blockEditor;
const { select } = wp.data;

/*
 * Internal dependencies
 *
 */
import "./editor.scss";
import Inspector from "./inspector";

import {
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateResponsiveRangeStyles,
	generateDimensionsControlStyles,
} from "../util/helpers";

import { NUMBER_OF_COLUMNS, GRID_GAP } from "./constants";

const Edit = ({ isSelected, attributes, setAttributes, clientId }) => {
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
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
		imageID,
		showProfileName,
		profileName,
		showPagination,
		sortBy,
		preview,
		showMeta,
	} = attributes;

	const [loading, setLoading] = useState(true);
	const [responseCode, setResponseCode] = useState(200);
	const [errorMessage, setErrorMessage] = useState("");

	if (preview) {
		return (
			<img
				style={{ width: "100%" }}
				src="https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/instagram-preview.png"
			/>
		);
	}

	useEffect(() => {
		fetchPhotos();
	}, []);

	useEffect(() => {
		fetchPhotos();
	}, [token]);

	const fetchPhotos = () => {
		if (!token) {
			return false;
		}

		return fetch(
			`https://graph.instagram.com/me/media?fields=id,caption,like_count,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`
		)
			.then((res) => res.json())
			.then((json) => {
				if (json.error) {
					setErrorMessage(json.error.message);
				}
				if (json.data) {
					setResponseCode(200);
					setLoading(false);

					if (json.data.length > 0) {
						setAttributes({ thumbs: json.data });
					} else {
						setAttributes({ thumbs: [] });
						setResponseCode(500);
					}
				}
			});
	};

	let container;
	let equalImage = hasEqualImages ? " has__equal__height" : "";
	let layoutClass = layout === "card" ? cardStyle : overlayStyle;

	if (token && responseCode === 200) {
		if (loading) {
			container = (
				<p>
					<Spinner />
					{__("Loading feed")}
				</p>
			);
		} else {
			container = (
				<>
					{thumbs &&
						thumbs.slice(0, numberOfImages).map((photo) => {
							// console.log(photo);
							return (
								<div className="instagram__gallery__col">
									<div
										className={`instagram__gallery__item instagram__gallery__item--${layoutClass}${equalImage}`}
									>
										{layout === "card" && (
											<>
												{(showProfileName || showProfileImg) && (
													<div className="author__info">
														{showProfileImg && profileImg && (
															<div className="author__thumb">
																<img src={profileImg} alt={photo.username} />
															</div>
														)}
														{showProfileName && (
															<h5 className="author__name">
																{profileName ? profileName : photo.username}
															</h5>
														)}
													</div>
												)}
											</>
										)}
										<div className="instagram__gallery__thumb">
											<div className="thumb__wrap">
												<img
													src={
														photo.media_type === "VIDEO"
															? photo.thumbnail_url
															: photo.media_url
													}
													alt={photo.caption ? photo.caption : ""}
												/>
											</div>
											{showCaptions && photo.caption && (
												<div className="eb-instagram-caption">
													<p>{photo.caption}</p>
												</div>
											)}
										</div>
										{showMeta && (
											<div className="eb-instagram-meta">
												<span className="date">
													{new Date(photo.timestamp).toLocaleDateString()}
												</span>
											</div>
										)}
									</div>
								</div>
							);
						})}
				</>
			);
		}
	} else if (responseCode !== 200) {
		container = <div>something went wrong: {errorMessage} </div>;
	} else {
		container = (
			<div>
				<p>To get started please add an Instagram Access Token. </p>
				<p>
					You can follow these{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://awplife.com/instagram-access-token-generator/"
					>
						steps
					</a>{" "}
					to generate token.
				</p>
				<p>
					Once you have a token, please paste it into the 'Access Token'
					setting.
				</p>
			</div>
		);
	}

	// number of columns
	const {
		rangeStylesDesktop: numberOfColumnsDesktop,
		rangeStylesTab: numberOfColumnsTab,
		rangeStylesMobile: numberOfColumnsMobile,
	} = generateResponsiveRangeStyles({
		controlName: NUMBER_OF_COLUMNS,
		property: "",
		attributes,
		customUnit: "",
	});

	// grid padding left
	const {
		rangeStylesDesktop: gridGapLeftDesktop,
		rangeStylesTab: gridGapLeftTab,
		rangeStylesMobile: gridGapLeftMobile,
	} = generateResponsiveRangeStyles({
		controlName: GRID_GAP,
		property: "padding-left",
		attributes,
		customUnit: "px",
	});

	// grid padding right
	const {
		rangeStylesDesktop: gridGapRightDesktop,
		rangeStylesTab: gridGapRightTab,
		rangeStylesMobile: gridGapRightMobile,
	} = generateResponsiveRangeStyles({
		controlName: GRID_GAP,
		property: "padding-right",
		attributes,
		customUnit: "px",
	});

	// console.log(typeof numberOfColumnsTab, typeof numberOfColumnsMobile);

	// desktop styles
	const desktopStyles = `
		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapLeftDesktop}
			${gridGapRightDesktop}
			width: calc(100% / ${numberOfColumnsDesktop.replace(/[^0-9]/g, "")});
		}
	`;

	// tab styles
	const tabStyles = `
		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapLeftTab}
			${gridGapRightTab}
			${
				numberOfColumnsTab == ""
					? `width: calc(100% / 2)`
					: `width: calc(100% / ${numberOfColumnsTab.replace(/[^0-9]/g, "")});`
			}
		}
	`;

	// mobile styles
	const mobileStyles = `
		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapLeftMobile}
			${gridGapRightMobile}
			${
				numberOfColumnsMobile == ""
					? `width: calc(100% / 1);`
					: `width: calc(100% / ${numberOfColumnsMobile.replace(
							/[^0-9]/g,
							""
					  )});`
			}
		}
	`;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating an unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-instagram";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(desktopStyles) ? desktopStyles : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(tabStyles) ? tabStyles : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(mobileStyles) ? mobileStyles : " "}
	`);
	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && (
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				fetchPhotos={fetchPhotos}
			/>
		),
		<BlockControls>
			<Toolbar label={__("Options", "instagram-block")}>
				<MediaUpload
					onSelect={(media) =>
						setAttributes({
							profileImg: media.url,
							imageID: media.id,
						})
					}
					allowedTypes={["image"]}
					value={imageID}
					render={({ open }) => (
						<ToolbarButton
							className="components-toolbar__control"
							label={__("Edit Image", "instagram-block")}
							icon="edit"
							onClick={open}
						/>
					)}
				/>
			</Toolbar>
		</BlockControls>,
		<div {...blockProps}>
			<style>
				{`
				 ${desktopAllStyles}
 
				 /* mimmikcssStart */
 
				 ${resOption === "Tablet" ? tabAllStyles : " "}
				 ${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}
 
				 /* mimmikcssEnd */
 
				 @media all and (max-width: 1024px) {	
 
					 /* tabcssStart */			
					 ${softMinifyCssStrings(tabAllStyles)}
					 /* tabcssEnd */			
				 
				 }
				 
				 @media all and (max-width: 767px) {
					 
					 /* mobcssStart */			
					 ${softMinifyCssStrings(mobileAllStyles)}
					 /* mobcssEnd */			
				 
				 }
				 `}
			</style>
			<div className={`eb-instagram-wrapper ${blockId}`}>
				<div className="eb-instagram__gallery">{container}</div>
			</div>
		</div>,
	];
};

export default Edit;
