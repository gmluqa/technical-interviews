import { apiRoute } from "./apiConfig.js";
import axios from "axios";

let apiMessageResp = { message: "", success: "false", variant: "danger" };

export async function createNewRecord(name, content) {
  try {
    await axios
      .post(`${apiRoute}/resource`, { name: name, content, content })
      .then(response => {
        apiMessageResp.message = response.data.message;
        apiMessageResp.success = true;
        apiMessageResp.variant = "success";
      });
    return apiMessageResp;
  } catch (error) {
    return {
      message: error.response.data.message,
      success: false,
      variant: "danger",
    };
  }
}
