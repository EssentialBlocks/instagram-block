/*
 * WordPress dependencies
 *
 */
import { InspectorControls } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";

const Edit = ({ isSelected, attributes, setAttributes }) => {
	const { token, numberImages } = attributes;

	const [loading, setLoading] = useState(true);
	const [responseCode, setResponseCode] = useState(200);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetchPhotos();
		fetchBio();
	}, []);

	const fetchPhotos = (count, token) => {
		const _COUNT = count ? count : numberImages;
		const _TOKEN = token ? token : token;

		if (!_TOKEN) {
			return false;
		}

		return fetch(
			`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${_TOKEN}`
		)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);

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
		const _TOKEN = token;

		if (!_TOKEN) {
			return false;
		}

		return fetch(
			`https://graph.instagram.com/me?fields=id,username&access_token=${_TOKEN}`
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

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		//Edit view here
		<h1>Edit</h1>,
	];
};

const Inspector = () => (
	<InspectorControls key="controls">Ins</InspectorControls>
);

export default Edit;
