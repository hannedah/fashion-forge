class ImgInfo {
  textPos: string;
  text: string;
  constructor(textPos: string, text: string) {
    this.textPos = textPos;
    this.text = text;
  }
}

let basePath = "assets/img/grid/image";
let imgMap = new Map<string, ImgInfo>();
imgMap.set(
  "1",
  new ImgInfo(
    "top-left",
    "A multi-layered jacket with bright orange, green, and metallic accents, combining various textures and materials such as quilted fabric, mesh, and reflective surfaces. Matching orange pants with detailed graphic prints and multiple pockets. High-top sneakers in black, orange, and neon colors, featuring exaggerated soles and unique design elements like fur and straps."
  )
);
imgMap.set(
  "2",
  new ImgInfo(
    "top-left",
    "A dress in white and silver with bright orange accents. The dress features a high, architectural collar and transparent, mesh-like materials. It has structured shoulders with transparent panels and intricate, layered ruffles around the waist."
  )
);
imgMap.set(
  "3",
  new ImgInfo(
    "top-left",
    "A metallic, glossy jacket with a mix of bright red and silver colors, exaggerated, padded shoulders and a high-necked, multicolored, beaded collar. The person is wearing oversized, reflective goggles with a visor and a matching, colorful hat."
  )
);
imgMap.set(
  "4",
  new ImgInfo(
    "top-left",
    "Left: A dress in a light pink color with intricate beadwork and lace details, featuring a high neckline and long sleeves. The dress has a voluminous skirt and a large satin bow at the waist. Right: A gown in light pink, made entirely of layers of soft tulle, creating a dramatic, voluminous effect. The tulle forms large, ruffled layers that cover the entire gown, creating a cloud-like appearance."
  )
);
imgMap.set(
  "5",
  new ImgInfo(
    "top-left",
    "A traditional-style garment with a modern twist, featuring a light blue base color with intricate floral embroidery in shades of pink, gold, and green. The garment has a high collar and is adorned with elaborate patterns and embellishments, including pearls and delicate beadwork. The sleeves are long and flowing, adding an elegant and regal touch."
  )
);
imgMap.set(
  "6",
  new ImgInfo(
    "top-left",
    "A shiny, light-colored, hooded jacket with a drawstring around the hood and waist. The jacket has a reflective, almost metallic sheen and is made of a lightweight, water-resistant material. It features gold or yellow accents along the seams and drawstrings."
  )
);
imgMap.set(
  "7",
  new ImgInfo(
    "top-left",
    "A double-breasted blazer paired with matching pants, featuring a colorful plaid pattern predominantly in shades of pink, green, and white. The blazer has wide lapels and is fitted, accentuating the wearer's figure. Underneath a light green dress shirt, buttoned up to the collar."
  )
);
imgMap.set(
  "8",
  new ImgInfo(
    "top-left",
    "A waterproof jacket with a bold and vibrant fish pattern in orange, white, and black colors. The jacket has multiple functional pockets, zippers, and a high collar with a hood."
  )
);
imgMap.set(
  "9",
  new ImgInfo(
    "top-left",
    "A coordinated set of a jacket and pants with a lively floral print from durable, lightweight material, and adorned with various colorful flowers and leaves in shades of red, orange, yellow, and green. The jacket has a structured fit with a high collar and a hood for extra protection. The pants have a relaxed fit and functional pockets. Complete the look with white high-top boots."
  )
);
imgMap.set(
  "10",
  new ImgInfo(
    "top-left",
    "A loose-fitting jacket with a high collar and hood, with a mix of abstract and floral motifs in bright red, orange, yellow, and green hues. The jacket has oversized sleeves with elastic cuffs. Paired with a matching wide-legged pants in a coordinating pattern."
  )
);
imgMap.set(
  "11",
  new ImgInfo(
    "top-left",
    "Left: An icy blue gown with a flowing skirt, structured ruffled shoulders, and a form-fitting bodice adorned with metallic details. The gown includes full-length, fitted sleeves with metallic embellishments. Right: A gown in icy blue and silvery-white hues, featuring a highly detailed bodice with metallic and gem-like decorations. This gown has a high, structured collar, puffed sleeves with ruffles, and a voluminous layered skirt."
  )
);
imgMap.set(
  "12",
  new ImgInfo(
    "top-left",
    "A red garment with embroidery and embellishments. The fabric features various textures and patterns, with delicate floral and ornamental designs. It has a high collar and detailed, ornate decorations on the shoulders."
  )
);
imgMap.set(
  "13",
  new ImgInfo(
    "top-left",
    "Left: A jacket embroidered with a mix of colorful patches, including floral motifs, abstract designs, and various embellishments like beads and sequins. Denim jeans with patches and embroidery that complement the jacket's designs. Right: A cropped denim jacket and flared denim pants, both heavily embellished with a variety of colorful, intricate patches and embroidery."
  )
);
imgMap.set(
  "14",
  new ImgInfo(
    "top-left",
    "A bright red, textured coat, a colorful, patterned scarf and a matching beret. Mint green pants, oversized sunglasses and red gloves."
  )
);
imgMap.set(
  "15",
  new ImgInfo(
    "top-left",
    "A colorful floral-patterned button-down shirt with a vivid red base color, adorned with various flowers in shades of blue, yellow, and green. The pattern is diverse, with large blossoms, leaves, and branches."
  )
);
imgMap.set(
  "16",
  new ImgInfo(
    "top-left",
    "A neon green, yellow and orange shiny hooded windbreaker with a reflective surface. High-waisted, pink glossy shorts with a slightly loose fit. A neon yellow cap with a curved brim. Large sunglasses with a mirrored finish."
  )
);
imgMap.set(
  "17",
  new ImgInfo(
    "top-left",
    "An ornate, floral headpiece with large, white flowers and lace details, complemented by small branches with orange blossoms."
  )
);
imgMap.set(
  "18",
  new ImgInfo(
    "top-left",
    "A rugged and utilitarian suit with multiple layers, sections, and intricate details such as tubes, wires, and patches. It is equipped with white harnesses, straps, and buckles for securing equipment. A large, helmet with a clear visor."
  )
);
imgMap.set(
  "19",
  new ImgInfo(
    "top-left",
    "Left: A cream-colored suit with a high, detailed collar featuring a subtle gold pattern. Right: A dress in a soft nude color and with voluminous ruffles."
  )
);
imgMap.set(
  "20",
  new ImgInfo(
    "top-left",
    "A richly embroidered, long coat with patterns, sparkling details and a high, gold collar and a turban made of the same golden, patterned fabric."
  )
);
imgMap.set(
  "21",
  new ImgInfo(
    "top-left",
    "A glossy, metallic yellow jacket with a high collar and oversized hood, made from a water-resistant material. The jacket has multiple pockets, drawstrings and reflective elements. Paired with matching metallic yellow pants that have a relaxed fit and elastic cuffs."
  )
);
imgMap.set(
  "22",
  new ImgInfo(
    "top-left",
    "A sporty, white jacket with a high collar, an integrated visor, and detailed yellow striping along the seams and edges."
  )
);
imgMap.set(
  "23",
  new ImgInfo(
    "top-left",
    "Left: A teal jacket with a high collar and multiple pockets, light-colored shorts, and a colorful top with abstract patterns. A large backpack in purple and pink, vibrant patterned socks, sturdy black hiking boots, and a red and yellow duffel bag. Center: A multicolored hiking outfit with shades of yellow, teal, and brown, featuring a high-collared jacket, patchwork-style pants, a beige waist pouch, and rugged yellow boots. Right: A peach and green jacket with multiple layers, patterned shorts, high socks, and green and black hiking boots. A green and orange crossbody bag and a large backpack."
  )
);
imgMap.set(
  "24",
  new ImgInfo(
    "top-left",
    "A tailored jacket with large, bold floral prints in shades of red, pink, orange, and yellow, showcasing a variety of flowers. The jacket should have a structured design with a high collar and wide cuffs. Pair it with matching pants that have a relaxed fit, maintaining the cohesive floral pattern. Complete the look with a wide-brimmed hat that echoes the floral theme, providing both sun protection and a fashionable statement. The overall style should be colorful, romantic, and perfect for blending into a picturesque field of flowers."
  )
);
imgMap.set(
  "25",
  new ImgInfo(
    "top-left",
    "A bright orange hooded jacket with vibrant patterns and graffiti-style artwork all over it. Matching orange pants with similar patterns and artwork. A colorful backpack featuring a mix of bright hues and patterns. Orange sneakers with black accents. Accessories including orange-tinted sunglasses and layered necklaces."
  )
);
imgMap.set(
  "26",
  new ImgInfo(
    "top-left",
    "A top featuring a high neck, made of shiny and reflective fabric. A bright orange, high-gloss jacket with a bold, structured design. A headband with a multicolored, sparkly decorative accessory. Large sunglasses with oversized lenses and white frames."
  )
);
imgMap.set(
  "27",
  new ImgInfo(
    "top-left",
    "A top with long sleeves, black buttons and vertical stripes in cream and black, accented by red lines. A high neckline that includes a red collar with eyelet details."
  )
);

let prompts = document.getElementsByClassName("prompt-overlay");

for (let prompt of prompts) {
  let timer: number;

  prompt.addEventListener("mouseover", () => {
    timer = window.setTimeout(() => {
      let img = prompt.querySelector("img");

      const regex = /image(\d+).png/; // Apply the regex to the URL
      const match = img.src.match(regex); // Check if there's a match and extract the captured group
      const index = match[1];
      console.log(index);
      let info = imgMap.get(index);
      console.log(info);

      let overlay = document.createElement("div");
      // overlay.innerHTML = info.text;
      overlay.style.zIndex = "10";
      overlay.style.position = "absolute";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.color = "#60FF8D";
      overlay.style.padding = "10px";
      overlay.style.backgroundColor = "rgba(64, 83, 69, 0.5)";
      overlay.style.fontFamily = "Glass";

      if (info.textPos === "top-left") {
        overlay.style.textAlign = "start";
      } else if (info.textPos === "bottom-left") {
        overlay.style.left = "0";
        overlay.style.bottom = "0";
      } else if (info.textPos === "top-right") {
        overlay.style.right = "0";
        overlay.style.top = "0";
      } else if (info.textPos === "bottom-right") {
        overlay.style.right = "0";
        overlay.style.bottom = "0";
      } else if (info.textPos === "center") {
        overlay.style.textAlign = "center";
      }

      overlay.style.width = "auto";
      overlay.style.height = "auto";
      overlay.id = "hoverOverlay";
      prompt.appendChild(overlay);

      let delay = 0;

      for (let char of info.text) {
        delay += Math.floor(Math.random() * (200 - 20 + 1) + 20);
        setTimeout(() => {
          overlay.innerHTML += char;
        }, delay);
      }
    }, 500);
  });
  prompt.addEventListener("mouseout", () => {
    clearTimeout(timer);
    let overlay = document.getElementById("hoverOverlay");
    if (overlay) {
      prompt.removeChild(overlay);
    }
  });
}
