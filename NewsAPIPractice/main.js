const API_KEY = "10941bbbe8284718a639d2bfb6df1fcc";
let news = [];

const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
  );
  console.log("uuu", url);

  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("ddd", data);
  console.log("nnn", news);
};

getLatestNews();