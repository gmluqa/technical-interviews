import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let apiMessageResp = { message: "", success: "false", variant: "danger" };

export async function readAllFileNames() {
  try {
    await axios.get(`${apiRoute}/resource`).then(response => {
      apiMessageResp.message = response.data;
      apiMessageResp.success = true;
      apiMessageResp.variant = "success";
    });
    return apiMessageResp;
  } catch (error) {
    return {
      message: "This call should NEVER fail",
      success: "false",
      variant: "danger",
    };
  }
}
