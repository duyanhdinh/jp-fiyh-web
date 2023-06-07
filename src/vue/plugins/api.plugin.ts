import { httpBase } from "@vue-plugins/http.plugin";
import { DISCOVER_RESULT } from "@/constant/endpoint.constant";

export const getDiscoverResult = (data: any) =>
  httpBase.post(DISCOVER_RESULT, data);
