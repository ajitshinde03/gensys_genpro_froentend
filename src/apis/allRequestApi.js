import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const AllRequestApi = {
  getRequestCount: async function (cancel = false) {
    try {
      const response = await api.request({
        url: `/my_request_count`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      console.log("getCount = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },

  getRequestData: async function (cancel = false) {
    try {
      const response = await api.request({
        url: `/my_requests`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      console.log("getCount = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },
  updateStatus: async function (id, status, reason, cancel = false) {
    try {
      const response = await api.request({
        url: `/${id}/my_requests`,
        method: "PUT",
        data: {
            "status": status,
            "reject_reason": reason
          },
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      console.log("getCount = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },
};
const cancelApiObject = defineCancelApiObject(AllRequestApi);
