import get from "./dom.js";

let api = "http://localhost:3000/api/data";

export async function data() {
  try {
    const { data } = await axios.get(api);
    get(data.slice(0, 3));
  } catch (error) {
    console.error(error);
  }
}

export default data;
