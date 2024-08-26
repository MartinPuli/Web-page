function truncateTextForAll(selector, maxLines) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const style = getComputedStyle(element);
    const lineHeight = parseFloat(style.lineHeight);
    const maxHeight = lineHeight * maxLines;

    let originalText =
      element.getAttribute("data-original-text") || element.innerText;
    let truncatedText = originalText;
    let hasTruncated = false;

    if (!element.getAttribute("data-original-text")) {
      element.setAttribute("data-original-text", originalText);
    }

    element.innerText = truncatedText;

    while (parseFloat(style.height.slice(0, -2)) > maxHeight) {
      truncatedText = truncatedText.slice(0, -1);
      element.innerText = truncatedText;
      hasTruncated = true;
    }

    if (hasTruncated) {
      element.innerText = truncatedText.slice(0, -3) + "...";
    } else {
      element.innerText = originalText;
    }
  });
}

function applyTruncation() {
  truncateTextForAll(
    ".home__inspirado__container__producto__texto__medio p",
    2
  );
  truncateTextForAll(".home__vendido__container__producto__texto__medio p", 2);
  truncateTextForAll(".panel__historial__venta__producto", 1);
}


setTimeout(()=>{
    applyTruncation()
}, 50)

window.addEventListener("resize", applyTruncation);
