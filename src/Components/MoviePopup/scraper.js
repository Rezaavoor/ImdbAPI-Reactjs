import axios from "axios";
import cheerio from "cheerio";

export default async function getHTML(id) {
  let url = "";
  if (id.substring(0, 2) === "tt") url = `https://www.imdb.com/title/${id}/`;
  else if (id.substring(0, 2) === "nm")
    url = `https://www.imdb.com/name/${id}/`;

  const { data: html } = await axios.get(url);
  const $ = cheerio.load(html);
  const stringData = $('script[type="application/ld+json"]').html();
  const objectData = JSON.parse(stringData);
  console.log(objectData.name);
  return objectData;
}
