import axios from "axios";
import config from "../config";
import { HTTP } from "../shared/types";

export const fetchBikes = async (pageNum, itemsPerPage, callback) => {
  await fetchData(
    buildUrl(
      `incidents?page=${pageNum}&per_page=${itemsPerPage}&proximity=Berlin&incident_type=theft`
    ),
    (response) => callback(response)
  );
};

export const fetchBikeById = async (caseId, callback) => {
  await fetchData(buildUrl(`incidents/${caseId}`), (response) => callback(response));
};

export const search = async (query, from = "", to = "", callback) => {
  console.log('query, from, to: ', query, from, to);
  await fetchData(
    buildUrl(
       `incidents?occurred_before=${from}&occurred_after=${to}&proximity=Berlin&incident_type=theft&query=${query}`
    ),
    (response) => callback(response)
  );
};

export const buildUrl = (query) => `${config.BASE_URL}${query}`;

export const fetchData = async (url, callback, method = HTTP.method.GET, requestBody = {}) => {
  try {
    const response = await axios({
      method,
      url,
      data: requestBody,
      headers: {
        "Cache-Control": "max-age=0, private, must-revalidate",
        "Content-Type": "application/json",
      },
    });

    if (!response) {
      throw new Error("Something went wrong");
    }

    const json = await response.data;
    callback(json);
  } catch (error) {
    console.log("error: ", error);
  }
};
