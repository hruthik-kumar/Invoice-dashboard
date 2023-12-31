import { apis } from "service";

const COMMON_URL = `https://vd1i3p628e.execute-api.ap-south-1.amazonaws.com/Dev/`;

const API_URLS = {
  GET_REVENUE_TILES_INFO: `${COMMON_URL}get-revenue-tiles-info`,
};

export const getRevenueTilesInfo = (payload) =>
  apis.get(API_URLS.GET_REVENUE_TILES_INFO, payload);
