const { __ } = wp.i18n;

export const DEFAULT_HOVER_COLOR = "#7967ff";

export const SORT_OPTIONS = [
  { label: __("Most Recent"), value: "most_recent" },
  { label: __("Least Recent"), value: "least_recent" },
  { label: __("Most Liked"), value: "most_liked" },
  { label: __("Least Liked"), value: "least_liked" },
  { label: __("Most Commented"), value: "most_commented" },
  { label: __("Least Commented"), value: "least_commented" }
];

export const FONT_SIZE_UNIT = [
  { label: "px", value: "px" },
  { label: "%", value: "%" },
  { label: "em", value: "em" }
];

export const STYLES = [
  { label: "Basic", value: "basic" },
  { label: "Zoom", value: "zoom" },
  { label: "Plain Card", value: "plain" },
  { label: "Rounded Card", value: "rounded" }
];
