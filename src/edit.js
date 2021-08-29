const { __ } = wp.i18n;
const { useState, useEffect } = wp.element;
const { Spinner, Toolbar, ToolbarButton } = wp.components;
const { useBlockProps, BlockControls, MediaUpload } = wp.blockEditor;
const { select } = wp.data;
/**
 * Internal Import
 */
import "./editor.scss";
import Inspector from "./inspector";
import {
	softMinifyCssStrings,
	isCssExists,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateTypographyStyles,
	generateResponsiveRangeStyles,
} from "../util/helpers";

import {
	NUMBER_OF_COLUMNS,
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

const edit = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
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
		hasEqualImages,
		showCaptions,
		captionColor,
		metaColor,
		headerColor,
		overlayColor,
		showProfileImg,
		profileImg,
		imageID,
		showProfileName,
		profileName,
		sortBy,
		preview,
		showMeta,
	} = attributes;

	const [loading, setLoading] = useState(false);
	const [responseCode, setResponseCode] = useState(200);
	const [errorMessage, setErrorMessage] = useState("");

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

	// padding between images
	const {
		dimensionStylesDesktop: gridGapDesktop,
		dimensionStylesTab: gridGapTab,
		dimensionStylesMobile: gridGapMobile,
	} = generateDimensionsControlStyles({
		controlName: GRID_GAP,
		styleFor: "padding",
		attributes,
	});

	const {
		styesDesktop: imageBdShadowStyesDesktop,
		styesTab: imageBdShadowStyesTab,
		styesMobile: imageBdShadowStyesMobile,
		stylesHoverDesktop: imageBdShadowStylesHoverDesktop,
		stylesHoverTab: imageBdShadowStylesHoverTab,
		stylesHoverMobile: imageBdShadowStylesHoverMobile,
		transitionStyle: imageBdShadowTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: IMAGE_BORDER,
		attributes,
	});

	const {
		typoStylesDesktop: captionTypoStylesDesktop,
		typoStylesTab: captionTypoStylesTab,
		typoStylesMobile: captionTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_caption,
	});

	const {
		typoStylesDesktop: metaTypoStylesDesktop,
		typoStylesTab: metaTypoStylesTab,
		typoStylesMobile: metaTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_meta,
	});

	const {
		typoStylesDesktop: headerTypoStylesDesktop,
		typoStylesTab: headerTypoStylesTab,
		typoStylesMobile: headerTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_header,
	});

	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_PADDING,
		styleFor: "padding",
		attributes,
	});

	const desktopStyles = `
		.eb-instagram-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapDesktop}
			width: calc(100% / ${numberOfColumnsDesktop.replace(/[^0-9]/g, "")});
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__item {
			${imageBdShadowStyesDesktop}
			overflow: hidden;
			transition: ${imageBdShadowTransitionStyle};
		}

		.eb-instagram-wrapper.${blockId}:hover .instagram__gallery__item {
			${imageBdShadowStylesHoverDesktop}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-caption p {
			${captionTypoStylesDesktop}
			${captionColor ? `color: ${captionColor};` : ""}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-meta .eb-instagram-date {
			${metaTypoStylesDesktop}
		}

		${
			metaColor
				? `.eb-instagram-wrapper.${blockId} .eb-instagram-meta span {
			color: ${metaColor};
		}`
				: ""
		}
		
		${
			overlayColor
				? `.eb-instagram-wrapper.${blockId} .instagram__gallery__item.instagram__gallery__item--overlay__simple .instagram__gallery__thumb::before,
		.eb-instagram-wrapper.${blockId} .instagram__gallery__item.instagram__gallery__item--overlay__basic .instagram__gallery__thumb::before,
		.eb-instagram-wrapper.${blockId} .instagram__gallery__item.instagram__gallery__item--overlay__standard .instagram__gallery__thumb::before {
			background: ${overlayColor}
		}`
				: ""
		}
		

		.eb-instagram-wrapper.${blockId} .author__info .author__name,
		.eb-instagram-wrapper.${blockId} .author__info .author__name a  {
			${headerTypoStylesDesktop}
			${headerColor ? `color: ${headerColor};` : ""}
		}


		.eb-instagram-wrapper.${blockId} .hide {
			display: none;
		}
	`;

	const tabStyles = `
		.eb-instagram-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
		}
		
		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapTab}
			${
				numberOfColumnsTab == ""
					? `width: calc(100% / 2)`
					: `width: calc(100% / ${numberOfColumnsTab.replace(/[^0-9]/g, "")});`
			}
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__item {
			${imageBdShadowStyesTab}
		}

		.eb-instagram-wrapper.${blockId}:hover .instagram__gallery__item {
			${imageBdShadowStylesHoverTab}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-caption p {
			${captionTypoStylesTab}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-meta .eb-instagram-date {
			${metaTypoStylesTab}
		}

		.eb-instagram-wrapper.${blockId} .author__info .author__name,
		.eb-instagram-wrapper.${blockId} .author__info .author__name a  {
			${headerTypoStylesTab}
		}
	`;

	const mobileStyles = `
		.eb-instagram-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
		}
		
		.eb-instagram-wrapper.${blockId} .instagram__gallery__col {
			${gridGapMobile}
			${
				numberOfColumnsMobile == ""
					? `width: calc(100% / 1);`
					: `width: calc(100% / ${numberOfColumnsMobile.replace(
							/[^0-9]/g,
							""
					  )});`
			}
		}

		.eb-instagram-wrapper.${blockId} .instagram__gallery__item {
			${imageBdShadowStyesMobile}
		}

		.eb-instagram-wrapper.${blockId}:hover .instagram__gallery__item {
			${imageBdShadowStylesHoverMobile}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-caption p {
			${captionTypoStylesMobile}
		}

		.eb-instagram-wrapper.${blockId} .eb-instagram-meta .eb-instagram-date {
			${metaTypoStylesMobile}
		}

		.eb-instagram-wrapper.${blockId} .author__info .author__name,
		.eb-instagram-wrapper.${blockId} .author__info .author__name a  {
			${headerTypoStylesMobile}
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
		const BLOCK_PREFIX = "eb-instagram-feed";
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

	if (preview) {
		return (
			<img
				style={{ width: "100%" }}
				src="https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/instagram-preview.png"
			/>
		);
	}

	const fetchInstagramDom = () => {
		const instagrams = document.querySelectorAll(
			`.${blockId} .eb-instagram__gallery`
		);
		setTimeout(() => {
			for (let instagram of instagrams) {
				var iso;

				imagesLoaded(instagram, function () {
					iso = new Isotope(instagram, {
						itemSelector: ".instagram__gallery__col",
						percentPosition: true,
						masonry: {
							columnWidth: ".instagram__gallery__col",
							gutter: 0,
							horizontalOrder: true,
							fitWidth: true,
						},
					});
				});
			}
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		fetchPhotos();
		// start isotop
		if (thumbs.length > 0) {
			fetchInstagramDom();
		}
	}, []);

	useEffect(() => {
		fetchPhotos();
	}, [token]);

	useEffect(() => {
		if (thumbs.length > 0) {
			setLoading(true);
			fetchInstagramDom();
		}
	}, [
		layout,
		overlayStyle,
		cardStyle,
		sortBy,
		numberOfImages,
		hasEqualImages,
		showCaptions,
		showMeta,
		attributes.imgNumRange,
		attributes.TABimgNumRange,
		attributes.MOBimgNumRange,
		resOption,
	]);

	const dateFormat = (date) => {
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		const dateObj = new Date(date);
		const month = monthNames[dateObj.getMonth()];
		const day = String(dateObj.getDate()).padStart(2, "0");
		const year = dateObj.getFullYear();

		return day + " " + month + " " + year;
	};

	const fetchPhotos = () => {
		if (!token) {
			return false;
		}

		return fetch(
			`https://graph.instagram.com/me/media?fields=id,caption,like_count,media_type,media_url,permalink,thumbnail_url,timestamp,username&limit=500&access_token=${token}`
		)
			.then((res) => res.json())
			.then((json) => {
				if (json.error) {
					setErrorMessage(json.error.message);
					setResponseCode(json.error.code);
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

	switch (sortBy) {
		case "most_recent":
			thumbs.sort((a, b) => {
				let da = new Date(a.timestamp),
					db = new Date(b.timestamp);
				return db - da;
			});
			break;
		case "least_recent":
			thumbs.sort((a, b) => {
				let da = new Date(a.timestamp),
					db = new Date(b.timestamp);
				return da - db;
			});
			break;
	}

	let container;
	let equalImage = hasEqualImages ? " has__equal__height" : "";
	let layoutClass = layout === "card" ? cardStyle : overlayStyle;

	if (token && responseCode === 200) {
		if (loading && thumbs.length === 0) {
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
												<span class="dashicons dashicons-clock"></span>
												<span className="eb-instagram-date">
													{dateFormat(photo.timestamp)}
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

	return [
		isSelected && (
			<Inspector
				key="inspector"
				attributes={attributes}
				setAttributes={setAttributes}
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
				<div className={`eb-instagram__gallery${loading ? " hide" : ""}`}>
					{container}
				</div>
				{loading ? (
					<>
						<p>
							<Spinner />
							{__("Loading feed")}
						</p>
					</>
				) : (
					""
				)}
			</div>
		</div>,
	];
};
export default edit;
