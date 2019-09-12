import axios from "axios";

export default async function getHTML(id) {
  const apikey = "c43428b2";
  let url = `http://www.omdbapi.com/?i=${id}&apikey=${apikey}`;

  const { data: data } = await axios.get(url);

  return data;
}
