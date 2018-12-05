const getNow = () => {
  const leadingZero = (num) => (num<10) ? '0'+num : num;
  const now = new Date();
  const year = now.getFullYear();
  const month = leadingZero(now.getMonth()+1);
  const date = leadingZero(now.getDate());
  const hour = leadingZero(now.getHours());
  const minute = leadingZero(now.getMinutes());

  const whatDate = `${year}. ${month}. ${date}.`;
  const whatTime = `${hour}:${minute}`;

  return `${whatDate} ${whatTime}`;
}

const autoGrow = (element) => {
  element.style.height = '5px';
  element.style.height = (element.scrollHeight)+'px';
}

export {getNow, autoGrow};