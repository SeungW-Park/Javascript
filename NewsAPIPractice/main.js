let category = "";
const API_KEY = "10941bbbe8284718a639d2bfb6df1fcc";
let newsList = [];
let enterNum = 1;

// UI 작동
let navBarIcon = document.querySelector(".nav-bar-icon");
let navBar = document.querySelector(".nav-bar");
let xMark = document.querySelector(".x-mark");
let searchContainer = document.querySelector(".search-container");
let articleContainer = document.querySelector("#news-board");
let menuButton = document.querySelectorAll(".nav-bar button");
let inputArea = document.querySelector(".input-area");
let searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", setKeywords);

function setCategory(cat) {
  if (cat == "general") {
    category = "&category=general";
  } else if (cat == "sports") {
    category = "&category=sports";
  } else if (cat == "technology") {
    category = "&category=technology";
  } else if (cat == "health") {
    category = "&category=health";
  } else if (cat == "entertainment") {
    category = "&category=entertainment";
  } else if (cat == "business") {
    category = "&category=business";
  } else if (cat == "science") {
    category = "&category=science";
  }
  getLatestNews();
}

async function setKeywords() {
  const keyword = inputArea.value;
  inputArea.value = "";

  const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`);
  const response = await fetch(url);
  const data = await response.json();

  newsList = data.articles;
  Render();
}

function searchIconActivate() {
  searchContainer.classList.toggle("active");
}

function navBarActivate() {
  navBar.classList.toggle('active');
  navBar.style.animation = "SlideIn 0.3s ease-in-out";
}

function navBarDeActivate() {
  navBar.style.animation = "SlideOut 0.3s ease-in-out";
  navBar.addEventListener("animationend", handleAnimationEnd);
}

function handleAnimationEnd() {
  navBar.classList.toggle('active');
  navBar.removeEventListener("animationend", handleAnimationEnd)
}

// API 호출

const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}${category}`
  );

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Upgrade' : 'h2c',
      'Connection': 'Upgrade'
    }
  });
  const data = await response.json();
  newsList = data.articles;

  Render();
  console.log("nnn", newsList);
};

function Render() {
  const resultHTML = newsList?.map(news => {
    let title = news.title;
    if (title && title.length > 40) {
      title = title.substring(0, 40) + " ...";
    }

    let description = news.description;
    if (description && description.length > 200) {
      description = description.substring(0, 200) + " ...";
    } else if (!description) {
      description = "내용 없음";
    }

    let urlToImage = news.urlToImage;
    if (!urlToImage || !urlToImage.includes(".")) {
      urlToImage = "'./images/imgnotavailable.png'";
    }

    let nameSource = news.source.name;
    if (!nameSource) {
      nameSource = "출처 없음";
    }

    let author = news.author;
    if (!author) {
      author = "기자 정보 없음";
    }

    return `
        <div class="row article">
          <div class="col-lg-4 article-img">
            <img class="img-content" src=${urlToImage}>
          </div>

          <div class="col-lg-8 article-main">
            <div class="title-content">
              <h2 class="article-title">
                ${title}
              </h2>

              <p class="article-content">
                ${description}
              </p>
            </div>

            <div class="article-info">
              ${nameSource} | ${author} | ${moment(news.publishedAt).fromNow()}
            </div>
          </div>
        </div>`
  }).join('');

  articleContainer.innerHTML = resultHTML;
}

getLatestNews();