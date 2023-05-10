import { httpBase } from "@vue-plugins/http.plugin";

const DISCOVER_RESULT = "/v1/discovery/result";

export const getDiscoverResult = (data) => httpBase.post(DISCOVER_RESULT, data);
