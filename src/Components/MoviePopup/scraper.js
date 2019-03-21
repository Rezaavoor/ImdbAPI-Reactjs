import axios from 'axios';
import cheerio from 'cheerio'


export default async function getHTML(url='https://www.imdb.com/title/tt2975590/') {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    const nameSpan=$('http://www.facebook.com/2008/fbml').html();
    console.log(nameSpan)
  }
