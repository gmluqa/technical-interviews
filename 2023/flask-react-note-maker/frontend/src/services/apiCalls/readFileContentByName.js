import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let apiMessageResp = { message: "", success: "false", variant: "alert" };

export async function readFileContentByName(name) {
  try {
    await axios.get(`${apiRoute}/resource/${name}`).then(response => {
      apiMessageResp.message = response.data.content;
      apiMessageResp.success = true;
      apiMessageResp.variant = "success";
    });
    return apiMessageResp;
  } catch (error) {
    return {
      message: error.response.data.message,
      success: false,
      variant: "alert",
    };
  }
}
