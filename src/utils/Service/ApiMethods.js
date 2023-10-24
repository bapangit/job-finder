import axios from "axios";
import endPoints from "./endPoints";

const getPath = (path) => `${endPoints}/${path}`;

export const getJobs = async () => {
  try {
    const result = await axios.get(getPath(endPoints.api.fetchJobs));

    console.log("result", result);
  } catch (e) {
    console.log(e.message);
  }
};
