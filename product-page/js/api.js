import get from "./dom.js";

let api = "http://localhost:3000/api/data";

export async function data() {
  try {
    const { data } = await axios.get(api);
    get(data);
  } catch (error) {
    console.error(error);
  }
}

async function searchUser(id) {
  try {
    const { data } = await axios.get(`${api}?q=${id}`);
    get(data);
  } catch (error) {
    console.error(error);
  }
}

async function rangeinp() {
  try {
    const { data } = await axios.get(api);
    const rangeValue = document.querySelector(".range").value;
    const f = data.filter((e) => {
      return e.fields.price >= rangeValue;
    });
    get(f);
  } catch (error) {
    console.error(error);
  }
}

export { searchUser, rangeinp };

export default data;
