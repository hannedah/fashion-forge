document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("dynamicText");

  if (textElement) {
    const pTags = textElement.querySelectorAll("p");
    for (let p of pTags) {
      const textContent = p.textContent || "";
      p.innerHTML = ""; // Clear the original text content
      console.log(textContent);

      // Wrap each character in a span
      for (let char of textContent) {
        const span = document.createElement("span");
        span.textContent = char;
        p.appendChild(span);
      }

      // Add event listeners to each span
      const spans = p.querySelectorAll("span");
      spans.forEach((span, index) => {
        span.addEventListener("mouseover", () => {
          for (let i = 1; i <= 4; i++) {
            if (index - i > 0) {
              spans[index - i].style.fontVariationSettings = `'wght' ${
                200 + 100 * i
              }, 'wdth' ${100 + 5 * i}`;
            }
            if (index + i < spans.length) {
              spans[index + i].style.fontVariationSettings = `'wght' ${
                200 + 100 * i
              }, 'wdth' ${100 + 5 * i}`;
            }
          }
          span.style.fontVariationSettings = `'wght' 200, 'wdth' 100`;
        });

        // span.addEventListener('mouseout', () => {
        //     for (let i = 1; i <= 4; i++) {
        //         if (index-i > 0) {
        //             spans[index-i].style.fontVariationSettings = '';
        //         }
        //         if (index+i < spans.length) {
        //             spans[index+i].style.fontVariationSettings = '';
        //         }
        //     }
        //     span.style.fontVariationSettings = '';
        // });
      });
    }
  }
});
