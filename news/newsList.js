import news from "./newsDataProvider.js";
import newsFormatter from "./newsFormatter.js";

const newsList = () => {
  const contentElement = document.querySelector(".news-list");

  contentElement.innerHTML = `${news
    .map((article) => {
      return newsFormatter(article);
    })
    .join("")}`;
};

export default newsList;
