<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  setInterval(() => (min = min + 1), 1000);
</script>

<header>
  <div class="info-bar">
    <div class="info-bar_time">{hour}:{min}</div>
    <div class="info-bar_icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery.svg" alt="" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar_location">
      <div>역삼1동</div>
      <div class="menu-bar_location_icon">
        <img src="assets/arrow-down.svg" alt="down" />
      </div>
    </div>
    <div class="menu-bar_icons">
      <img src="assets/magnify.svg" alt="search" />
      <img src="assets/menu-bar.svg" alt="menu" />
      <img src="assets/bell.svg" alt="alert" />
    </div>
  </div>
</header>
<main>
  <a class="write-btn" href="#/write">+글쓰기</a>
</main>
<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <div class="footer-icons_img">
        <img src="assets/home.svg" alt="home" />
      </div>
      <div class="footer-icons_desc">홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons_img">
        <img src="assets/doc.svg" alt="doc" />
      </div>
      <div class="footer-icons_desc">동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons_img">
        <img src="assets/location.svg" alt="location" />
      </div>
      <div class="footer-icons_desc">내 근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons_img">
        <img src="assets/chat.svg" alt="chat" />
      </div>
      <div class="footer-icons_desc">채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons_img">
        <img src="assets/user.svg" alt="user" />
      </div>
      <div class="footer-icons_desc">나의 당근</div>
    </div>
  </div>
</footer>
<div class="media-info-msg">화면 사이즈를 줄여주세요</div>
