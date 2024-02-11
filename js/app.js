function getEl(elID) {
  return document.getElementById(elID);
}

const submitBtn = getEl(`submit`);
const userName = getEl(`name`);
const userPassword = getEl(`password`);
const userImg = getEl(`img`);

const form = getEl(`form`);
const info = getEl(`info`);

const infoName = getEl(`info-sec-name`);
const imfoImg = getEl(`info-img`);

const alertSelector = getEl(`alert`);

submitBtn.addEventListener(`click`, (e) => {
  e.preventDefault();

  let user = {
    name: userName.value.trim(),
    password: userPassword.value.trim(),
    img: userImg.files[0]
      ? URL.createObjectURL(userImg.files[0])
      : `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png`,
  };

  infoName.innerHTML = user.name;
  imfoImg.setAttribute(`src`, user.img);

  form.classList.add(`d-none`);
  info.classList.remove(`d-none`);

  alertSelector.classList.remove(`opacity-0`);
  alertSelector.classList.remove(`visually-hidden`);

  setTimeout(() => {
    alertSelector.classList.add(`opacity-0`);
    alertSelector.classList.add(`visually-hidden`);
  }, 2500);
});
