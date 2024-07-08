let category = ""; // 리펙토링
let keyword = ""; // 리펙토링
const API_KEY = "10941bbbe8284718a639d2bfb6df1fcc";
let newsList = [];
let totalResult = 0;
let page = 1;
let movePage = "";
const pageSize = 10;
const groupSize = 5;

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

// API 조작
const getLatestNews = async () => {
  const url = new URL(
    `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?country=kr&pageSize=${pageSize}&page=${page}${category}${keyword}&apiKey=${API_KEY}`
  ); // 리펙토링

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Upgrade' : 'h2c',
        'Connection': 'Upgrade'
      }
    });
    const data = await response.json();
    if (response.status === 200) {
      if (data.articles.length == 0) {
        throw new Error("No result for this search.");
      }
      newsList = data.articles;
      totalResult = data.totalResults;
      Render();
      paginationRender();
      console.log("cate", newsList);
    } else {
      throw new Error(data.message);
    }

  } catch(error) {
    errorRender(error.message);
  }
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
  if (!urlToImage) {
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

const errorRender = (message) => {
  const errorHTML = 
  `<div class="alert alert-danger" role="alert">
  ${message}
  </div>`;

  articleContainer.innerHTML = errorHTML;
}

function setCategory(cat) { // 리펙토링
  category = `&category=${cat}`;
  getLatestNews();
}

async function setKeywords() { // 리펙토링
  if (inputArea.value == "") {
    alert("검색할 내용을 입력해주세요.");
  }
  keyword = `&q=${inputArea.value}`;
  inputArea.value = "";

  getLatestNews();
}

function paginationRender() {
  const totalPage = Math.ceil(totalResult / pageSize);
  const pageGroup = Math.ceil(page / groupSize);
  let lastPage = pageGroup * groupSize;
  if (lastPage > totalPage) {
    lastPage = totalPage;
  }
  const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);


  let paginationHTML = "";

  paginationHTML +=
    `<li class="page-item ${page == 1 ? 'disabled' : ''}"><a class="page-link" onclick="moveNextPage('-')"><</a></li>`;
  for (let i = firstPage; i <= lastPage; i++) {
    paginationHTML +=
      `<li class="page-item ${i == page ? 'active' : ''}" onclick="moveToPage(${i})"><a class="page-link">
      ${i}
      </a></li>`;
  }
  paginationHTML +=
    `<li class="page-item ${page == totalPage ? 'disabled' : ''}"><a class="page-link" onclick="moveNextPage('+')">></a></li>`;
  document.querySelector(".pagination").innerHTML = paginationHTML;
}

function moveToPage(pageNum) {
  page = pageNum;
  getLatestNews();
}

function moveNextPage(next) {
  if (next == '-') {
    page--;
    getLatestNews();
  } else if (next == '+') {
    page ++;
    getLatestNews();
  }
}

getLatestNews();
paginationRender();