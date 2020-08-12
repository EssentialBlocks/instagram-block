/*
 * WordPress dependencies
 *
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { Spinner } from "@wordpress/components";

/*
 * Internal dependencies
 *
 */
import Inspector from "./inspector";

const Edit = ({ isSelected, attributes, setAttributes }) => {
	const {
		token,
		numberOfImages,
		columns,
		gridGap,
		thumbs,
		hasEqualImages,
		backgroundColor,
		showCaptions,
		borderRadius,
		preview,
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
		fetchBio();
	}, []);

	useEffect(() => {
		fetchPhotos();
	}, [token]);

	const fetchPhotos = () => {
		if (!token) {
			return false;
		}

		return fetch(
			`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`
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

	const fetchBio = () => {
		if (!token) {
			return false;
		}

		return fetch(
			`https://graph.instagram.com/me?fields=id,username&access_token=${token}`
		)
			.then((res) => res.json())
			.then((json) => {
				if (json.meta && json.meta.code === 200) {
					setAttributes({ profile: json.data });
				} else {
					setAttributes({ profile: [] });
				}
			});
	};

	let container;

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
				<div
					className="display-grid eb-instagram-grid"
					style={{
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						marginLeft: `-${gridGap}px`,
						marginRight: `-${gridGap}px`,
						gridGap: `${gridGap}px`,
					}}
				>
					{thumbs &&
						thumbs.slice(0, numberOfImages).map((photo) => {
							return (
								<div
									className={
										"eb-image-wrapper " +
										(hasEqualImages ? "has-equal-images" : "")
									}
									style={{ backgroundColor }}
									key={photo.id}
								>
									<img
										className="eb-instagram-image"
										src={
											photo.media_type === "IMAGE"
												? photo.media_url
												: photo.thumbnail_url
										}
										alt={photo.caption ? photo.caption : ""}
										style={{ borderRadius: borderRadius + "%" }}
									/>
									<div className="eb-instagram-image-overlay">
										{showCaptions && (
											<div className="eb-instagram-image-caption">
												<span className="eb-instagram-image-caption_text">
													{photo.caption}
												</span>
												<span className="eb-instagram-image-caption_likes"></span>
											</div>
										)}
									</div>
								</div>
							);
						})}
				</div>
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
				attributes={attributes}
				setAttributes={setAttributes}
				fetchPhotos={fetchPhotos}
			/>
		),
		<div className="eb-instagram-wrapper">{container}</div>,
	];
};

export default Edit;
