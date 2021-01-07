const timeContainer = document.querySelector(".timeContainer"),
  timeStamp = timeContainer.querySelector(".timeStamp");

const getTimeStamp = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const dayOfWeek = time.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  timeStamp.innerHTML = `${year}년 ${month}월 ${day}일 ${week[dayOfWeek]}요일`;
};

function init() {
  getTimeStamp();
}

init();
