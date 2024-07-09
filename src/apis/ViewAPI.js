import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const ViewApi = {
  getEnvironment: async function (cancel = false) {
    try {
      const response = await api.request({
        url: `/environment`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      // console.log("response.data = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },

  getRegion: async function (cancel = false) {
    try {
      const response = await api.request({
        url: `/region`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      // console.log("response.data = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },

  getCatlog: async function (env_id = 1, region_id = 1, cancel = false) {
    try {
      const response = await api.request({
        url: `/${env_id}/${region_id}/catelog`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      // console.log("getCatlog response.data = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },

  getSchema: async function (catelog_id = 6, cancel = false) {
    try {
      const response = await api.request({
        url: `/${catelog_id}/schema`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      // console.log("getCatlog response.data = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },

  getTable: async function (schema_id = 1, cancel = false) {
    try {
      const response = await api.request({
        url: `/${schema_id}/table`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      // console.log("getCatlog response.data = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },

  getTargetSchema: async function (type_id = 1, cancel = false) {
    try {
      const response = await api.request({
        url: `/${type_id}/target_schema`,
        method: "GET",
        // retrieving the signal value by using the property name
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });

      // returning the product returned by the API
      console.log("getTargetSchema response.data = ", response.data);
      return response.data;
    } catch (error) {
      console.log("responce error = ", error);
    }
  },
};

const cancelApiObject = defineCancelApiObject(ViewApi);
