/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";
import { Spinner } from "@wordpress/components";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import { DEFAULT_HOVER_COLOR } from "./constants";
import { InstagramOriginalIcon, SaveIcon } from "./icons";

export default class Edit extends Component {
	state = {
		loading: true,
		responseCode: 404,
		errorMessage: "",
	};

	componentDidMount() {
		this.getPhotos(this.props.attributes.numberOfImages);
		this.getBio();
	}

	getPhotos = async (numberOfImages, token) => {
		const TOKEN = token ? token : this.props.attributes.token;
		const NUMBER_OF_IMAGES = numberOfImages
			? numberOfImages
			: this.props.attributes.numberOfImages;

		if (!TOKEN) return;

		const res = await fetch(
			`https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN}&count=${NUMBER_OF_IMAGES}`
		);
		const json = await res.json();

		if (json.meta) {
			this.setState({
				responseCode: json.meta.code,
				loading: false,
			});
			if (json.meta.code === 200) {
				this.props.setAttributes({ thumbs: json.data });
			} else {
				this.props.setAttributes({ thumbs: [] });
				this.setState({ errorMessage: json.meta.error_message });
			}
		}
	};

	getBio = async () => {
		const { token } = this.props.attributes;

		if (!token) return;

		const res = await fetch(
			`https://api.instagram.com/v1/users/self/?access_token=${token}`
		);
		const json = await res.json();
		if (json.meta && json.meta.code === 200) {
			this.props.setAttributes({ profile: json.data });
		} else {
			this.props.setAttributes({ profile: [] });
		}
	};

	getHoverBackground = (id) => {
		const { hoverImageID, hoverColor } = this.props.attributes;
		return hoverImageID === id ? hoverColor : undefined;
	};

	getHoverOpacity = (id) => {
		const { hoverImageID, hoverOpacity } = this.props.attributes;
		return hoverImageID === id && hoverOpacity ? hoverOpacity : 0;
	};

	sortImages = (thumbs, keyArray, order) => {
		let sortOrder = order === "asc" ? 1 : -1;

		return thumbs.sort((a, b) => {
			let x = a,
				y = b;
			for (var i = 0; i < keyArray.length; i++) {
				x = x[keyArray[i]];
				y = y[keyArray[i]];
			}

			return sortOrder * (x < y ? -1 : x > y ? 1 : 0);
		});
	};

	getSortParams = (sortBy) => {
		// get key array & order
		switch (sortBy) {
			case "most_recent":
				return [["created_time"], "desc"];
			case "least_recent":
				return [["created_time"], "asc"];
			case "most_liked":
				return [["likes", "count"], "desc"];
			case "least_liked":
				return [["likes", "count"], "asc"];
			case "most_commented":
				return [["comments", "count"], "desc"];
			case "least_commented":
				return [["comments", "count"], "asc"];
		}
	};

	onSort = (sortBy) => {
		const [keyArray, order] = this.getSortParams(sortBy);

		let thumbs = this.sortImages(
			[...this.props.attributes.thumbs],
			keyArray,
			order
		);

		this.props.setAttributes({ thumbs, sortBy });
	};

	getTransform = (photoID) => {
		const { selectedStyle, hoverImageID } = this.props.attributes;

		if (hoverImageID === photoID) {
			return selectedStyle === "zoom" ? "scale(1.3)" : "none";
		}

		return "none";
	};

	getDate = (seconds) => {
		let d = new Date(parseInt(seconds, 10));
		return d.getDate() + "." + d.getMonth() + 1 + "." + d.getFullYear();
	};

	getHeader = (photo) => {
		const { selectedStyle, displayDate } = this.props.attributes;
		const date = this.getDate(photo.created_time);

		return (
			<div
				className="eb-instagram-header-wrapper"
				style={{
					borderRadius: selectedStyle === "plain" ? 0 : undefined,
				}}
			>
				<div className="eb-instagram-user-wrapper">
					<img
						className="eb-instagram-user-icon"
						src={photo.user.profile_picture}
					/>
					<span className="eb-instagram-user">{photo.user.username}</span>
				</div>
				<div
					className="eb-instagram-date-wrapper"
					style={{
						justifyContent:
							selectedStyle === "plain" || !displayDate
								? "flex-end"
								: "space-around",
					}}
				>
					<div
						className="eb-instagram-date"
						style={{
							display:
								this.props.attributes.selectedStyle === "plain" || !displayDate
									? "none"
									: undefined,
						}}
					>
						<span className="far fa-clock" />
						<span className="eb-instagram-date-text">{date}</span>
					</div>
					<InstagramOriginalIcon />
				</div>
			</div>
		);
	};

	getFooter = (photo) => {
		const {
			selectedStyle,
			displayDate,
			displayLike,
			likeColor,
			displayComment,
			commentColor,
		} = this.props.attributes;
		const date = this.getDate(photo.created_time);

		return (
			<div
				className="eb-instagram-footer"
				style={{
					borderRadius: selectedStyle === "plain" ? 0 : undefined,
				}}
			>
				<div className="eb-instagram-footer-like-comment">
					<div
						style={{
							display: displayLike ? "block" : "none",
							color: likeColor,
						}}
					>
						<span className="far fa-heart eb-like-icon" />
						<span>{photo.likes.count}</span>
					</div>
					<div
						style={{
							display: displayComment ? "block" : "none",
							color: commentColor,
						}}
					>
						<span className="far fa-comment eb-comment-icon" />
						<span>{photo.comments.count}</span>
					</div>
				</div>

				<div className="eb-instagram-save">
					<div
						className="eb-instagram-date"
						style={{
							display:
								selectedStyle === "plain" && displayDate ? "flex" : "none",
							alignItems: "center",
							marginRight: selectedStyle === "plain" ? "10" : undefined,
						}}
					>
						<span className="far fa-clock" />
						<span className="eb-instagram-date-text">{date}</span>
					</div>
					<SaveIcon />
				</div>
			</div>
		);
	};

	onImgHover = (photoID) => {
		const hoverImageID = this.isCard() ? null : photoID;
		this.props.setAttributes({ hoverImageID });
	};

	// Checks whether selected style is card or not
	isCard = () =>
		this.props.attributes.selectedStyle === "rounded" ||
		this.props.attributes.selectedStyle === "plain";

	getThumbs = (thumbs) => {
		const {
			selectedStyle,
			borderRadius,
			hoverColor,
			hoverImageID,
			displayLike,
			likeColor,
			displayComment,
			commentColor,
		} = this.props.attributes;

		return thumbs.map((photo, index) => (
			<div
				className="eb-instagram-image-wrapper"
				onMouseEnter={() => this.onImgHover(photo.id)}
				onMouseLeave={() => this.props.setAttributes({ hoverImageID: null })}
				style={{
					borderRadius: `${selectedStyle === "rounded" ? 0 : borderRadius}%`,
				}}
			>
				{this.isCard() && this.getHeader(photo)}
				<img
					className="eb-instagram-image"
					src={photo.images.standard_resolution.url}
					alt={photo.caption ? photo.caption.text : ""}
					style={{
						borderRadius: `${selectedStyle === "plain" ? 0 : borderRadius}%`,
						transform: this.getTransform(photo.id),
					}}
				/>
				<div
					className="eb-instagram-image-overlay"
					style={{
						background: hoverColor
							? this.getHoverBackground(photo.id)
							: DEFAULT_HOVER_COLOR,
						opacity: this.getHoverOpacity(photo.id),
						borderRadius: `${borderRadius}%`,
					}}
				/>
				<div
					className="eb-instagram-like-comment-wrapper"
					style={{
						opacity: photo.id === hoverImageID ? 1 : 0,
						transition: "all 0.3s ease-in-out",
					}}
				>
					<div className="eb-instagram-like-comment">
						<p
							style={{
								display: displayLike ? "block" : "none",
								color: likeColor,
								fontSize: 16,
							}}
						>
							<i className="far fa-heart eb-like-icon" />
							<span>{photo.likes.count}</span>
						</p>
						<p
							style={{
								display: displayComment ? "block" : "none",
								color: commentColor,
								fontSize: 16,
							}}
						>
							<i className="far fa-comment eb-comment-icon" />
							<span>{photo.comments.count}</span>
						</p>
					</div>
				</div>
				{this.isCard() && this.getFooter(photo)}
			</div>
		));
	};

	getProfileContainer = (profile) => (
		<div className="display-grid eb-instagram-profile-container">
			<div className="eb-instagram-picture-container">
				<img
					className="eb-instagram-profile-picture"
					src={profile.profile_picture}
					alt={profile.full_name}
				/>
			</div>
			<div className="eb-instagram-bio-container">
				<h3
					style={{
						color: this.props.attributes.nameColor,
						fontSize: `${this.props.attributes.nameFontSize}${this.props.attributes.nameSizeUnit}`,
					}}
				>
					{profile.username}
				</h3>
				<p
					style={{
						color: this.props.attributes.detailsColor,
						fontSize: `${this.props.attributes.detailsFontSize}${this.props.attributes.detailsSizeUnit}`,
					}}
				>
					{profile.bio}
				</p>
			</div>
		</div>
	);

	render() {
		const { isSelected, attributes, setAttributes } = this.props;
		const {
			token,
			columns,
			thumbs,
			profile,
			numberOfImages,
			imageSpace,
			displayProfile,
			backgroundColor,
			borderRadius,
			selectedStyle,
			fontFamily,
			preview,
		} = attributes;

		const { loading, responseCode, errorMessage } = this.state;
		let container;

		if (preview) {
			return (
				<img src="https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/instagram-preview.png" />
			);
		}

		if (token && responseCode === 200) {
			if (loading) {
				container = (
					<p className={className}>
						<Spinner />
						{__("Loading ...")}
					</p>
				);
			} else {
				container = (
					<div
						className="display-grid eb-instagram-grid"
						style={{
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
							gridGap: imageSpace ? imageSpace : undefined,
						}}
					>
						{thumbs && this.getThumbs(thumbs)}
					</div>
				);
			}
		} else if (responseCode !== 200) {
			container = <div>{`Something went wrong : ${errorMessage}`}</div>;
		}

		if (!token) {
			container = (
				<div>
					No access token found. Login to instagram and{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.jetseotools.com/instagram-access-token/"
						className="eb-instagram-link"
					>
						Click Here
					</a>
					to get the access token. Copy and paste the token into the "Access
					Token" settings.
				</div>
			);
		}

		const profileContainer = this.getProfileContainer(profile);

		return [
			isSelected && (
				<Inspector
					{...this.props}
					getPhotos={this.getPhotos}
					getBio={this.getBio}
					onSort={this.onSort}
					isCard={this.isCard}
				/>
			),
			<div
				className="eb-instagram-container"
				style={{
					backgroundColor: backgroundColor || "transparent",
					fontFamily: fontFamily || undefined,
				}}
			>
				{displayProfile && profileContainer}
				{container}
			</div>,
		];
	}
}
