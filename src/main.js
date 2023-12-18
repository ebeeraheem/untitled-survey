function charCount() {
  const inputField = document.querySelector("#question6");
  const counter = document.querySelector(".counter");

  inputField.addEventListener("input", function () {
    const currentChars = inputField.value.length;
    counter.textContent = currentChars + "/200";
    if (currentChars > 200) {
      inputField.value = inputField.value.substring(0, 200);
      counter.textContent = "200/200";
    }
  });
}

charCount();
