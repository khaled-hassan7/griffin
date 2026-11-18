import type { ReactElement } from "react";

// Type-only companion for GovernorateSelect.js (implementation untouched).
// `name` is accepted for call-site compatibility; the component hardcodes it.
declare function GovernorateSelect(props?: { name?: string }): ReactElement;

export default GovernorateSelect;
