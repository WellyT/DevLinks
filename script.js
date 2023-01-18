function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profileImg")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}

// if (html.classList.contains("light")) {
//   html.classList.remove("light")
// } else {
//   html.classList.add("light")
// }
