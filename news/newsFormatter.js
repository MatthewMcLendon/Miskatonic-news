const newsFormatter = (news) => {
  return `<div class="news-container">
    <h2 class="news-title">${news.title}</h2>
    <h3 class="news-city">${news.city}</h3>
    <img class="news-image" src=${news.image}>
    <p class="news-text">${news.text}</p>
    <a class="news-story" href=${news.link}>Read ${news.story}</a>
  </div>`;
};

export default newsFormatter;
