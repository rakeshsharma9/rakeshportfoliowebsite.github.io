let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "Sanskrit:1. आत्मनं विद्धि कृतेन्द्रियं प्रगृहीतंमा क्लेशाद्वलयं कुरु यहि जीवन्तम्। (Know yourself as the pure consciousness, detached from the senses, and free yourself from the realm of suffering.)2. सर्वेभ्यः प्रियं भवत्यद्यो भाति विश्रान्तमियं संसारसुखैः। (Whoever shines with inner peace and contentment is dear to all and is beyond worldly pleasures.)3. सत्यं वद, धर्मं चर, स्वाध्यायान्मा प्रमदः। (Speak the truth, practice righteousness, and never neglect self-study.)4. श्वस्ति अस्तु। (May there be peace and well-being.)5. असतो मा सद्गमय। (Lead me from untruth to truth.)6. यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः। (Where women are honored, divinity blossoms.)7. अयं बन्धुरयं नेति, गणना लघुचेतसाम्। उदारचरितानां तु वसुधैव कुटुम्बकम्।। (One who sees all beings as their own kin, with a compassionate heart, belongs to noble souls. To them, the whole world is a family1. 𓂀𓁛𓊖𓎸 (Hotep seni) - Peace to you.2. 𓃭𓈖𓏏𓏤𓈖𓏏 (Wennefer) - Good luck.3. 𓁹𓆣𓐍𓏤𓐍 (Ankh wedja seneb) - Life, prosperity, health.4. 𓀠𓍊𓌆𓌾𓆣 (Senebty em hotep) - Health and peace.5. 𓋴𓈖𓇋 (Sehetep nefer) - Beautiful peace.6. 𓌹𓐍𓈖𓏏𓌹 (Remit, jokheb) - Rise and shine.7. 𓄤𓂧𓈖𓆸𓏤𓍿 (Hapi taui) - May your way be opened.";
let matrix = str.split("");
let font = 18;
let col = width / font;
let arr = [];

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `$(font)px system-ui`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());






























