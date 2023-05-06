const navBar = () => {
  const contentElement = document.querySelector(".navigation-bar");

  contentElement.innerHTML = `
  <h1 class="paper-name">Miskatonic News</h1>
  <div class="divider"></div>
  <a href="index.html">Top News</a>
  <div class="divider"></div>`;
};

export default navBar;
