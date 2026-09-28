const pptxgen = require("pptxgenjs");
let pptx = new pptxgen();

pptx.layout = "LAYOUT_16x9";

// Define Master Slide with central dashed line
pptx.defineSlideMaster({
    title: "BILINGUAL_MASTER",
    background: { color: "111111" },
    objects: [
        { line: { x: 5.0, y: 0.2, w: 0, h: 5.225, line: { color: "555555", width: 1, dashType: "dash" } } }
    ]
});

// Helper function to add slides with UI enhancements (Accent Bars + Center Line)
function addSlide(titleZh, titleTh, contentZh, contentTh) {
    let slide = pptx.addSlide("BILINGUAL_MASTER");
    
    // Accent Bars (金黃色裝飾線)
    slide.addShape(pptx.ShapeType.rect, { x: 0.1, y: 0.3, w: 0.05, h: 0.5, fill: { color: "FFD700" } });
    slide.addShape(pptx.ShapeType.rect, { x: 5.1, y: 0.3, w: 0.05, h: 0.5, fill: { color: "FFD700" } });

    // LEFT COLUMN (Zh)
    slide.addText(titleZh, {
        x: 0.2, y: 0.2, w: 4.8, h: 0.8,
        fontSize: 30, bold: true, color: "FFD700", align: "left", valign: "top", wrap: true, fontFace: "Microsoft JhengHei"
    });
    slide.addText(contentZh, {
        x: 0.2, y: 1.0, w: 4.8, h: 4.425,
        fontSize: 26, color: "FFFFFF", align: "left", valign: "top", lineSpacing: 32, wrap: true, fontFace: "Microsoft JhengHei"
    });
    
    // RIGHT COLUMN (Th)
    slide.addText(titleTh, {
        x: 5.2, y: 0.2, w: 4.6, h: 0.8,
        fontSize: 28, bold: true, color: "FFD700", align: "left", valign: "top", wrap: true, fontFace: "Leelawadee UI"
    });
    slide.addText(contentTh, {
        x: 5.0, y: 1.0, w: 4.8, h: 4.425,
        fontSize: 24, color: "FFFFFF", align: "left", valign: "top", lineSpacing: 32, wrap: true, fontFace: "Leelawadee UI"
    });
}

// Slide 1: Cover (No master elements for cover usually, but let's just make a clean custom cover)
let cover = pptx.addSlide();
cover.background = { color: "111111" };
cover.addText("知行合一班之\n十條大愿\n\nชั้นเรียนรู้และปฏิบัติเป็นหนึ่งเดียว\nปณิธานยิ่งใหญ่ 10 ประการ", {
    x: 0.2, y: 0.2, w: 9.6, h: 5.225,
    fontSize: 44, bold: true, color: "FFD700", align: "center", lineSpacing: 50, wrap: true, valign: "middle", fontFace: "Microsoft JhengHei"
});

addSlide(
    "前言", "บทนำ",
    "佛有三不渡：\n無緣 / 無信 / 無愿\n(如犢牛發願的故事)",
    "พระพุทธองค์ทรงมี 3 ประเภทที่ไม่โปรด:\nไร้บุญสัมพันธ์ / ไร้ศรัทธา / ไร้ปณิธาน\n(ดั่งเรื่องราวลูกวัวตั้งปณิธาน)"
);

addSlide(
    "一、誠心抱守", "ข้อที่ 1. รักษาด้วยความสัตย์จริง",
    "中庸：「得一善，則拳拳服膺，而弗失之矣。」\n不可以糊糊塗塗、空口立愿，否則罪擔身。\n\n人生有三晃：一晃長大，二晃變老，再晃就沒了。",
    "จงยง: \"เมื่อได้พบความดีงามหนึ่ง ให้ยึดมั่นไว้ในใจมิให้สูญหาย\"\nห้ามสับสนมึนงง หรือตั้งปณิธานแต่เพียงปาก มิฉะนั้นจะต้องรับบาปกรรม\n\nชีวิตคนเราผ่านไปอย่างรวดเร็ว: พริบตาเดียวโตเป็นผู้ใหญ่ พริบตาเดียวแก่ชรา พริบตาเดียวก็จากไป"
);

addSlide(
    "二、實心懺悔 / 實心修煉", "ข้อที่ 2. สำนึกผิดจากใจจริง / บำเพ็ญด้วยใจจริง",
    "初犯(做錯)，二犯(過失)，三犯(有罪了)\n不可以裝飾遮掩、自己有過不肯改。\n\n經云：前世罪業深，今世為女身。\n(如難陀精進成佛的故事)",
    "ทำผิดครั้งแรก(พลั้งพลาด) ครั้งที่สอง(ความผิด) ครั้งที่สาม(เป็นบาปกรรม)\nห้ามเสแสร้งปกปิด หรือมีความผิดแล้วไม่ยอมแก้ไข\n\nพระสูตรกล่าว: อดีตชาติกรรมหนัก ชาตินี้จึงเกิดเป็นหญิง\n(ดั่งเรื่องราวพระนันทะผู้พากเพียรจนตรัสรู้)"
);

addSlide(
    "三、如有虛心假意", "ข้อที่ 3. หากมีใจเสแสร้งหลอกลวง",
    "不可以虛心假意欺上天，\n不可以陽奉陰違用假面，\n不可以口是心非，\n不可以沽名釣譽。\n\n否則會遭天譴，要真功實善。",
    "ห้ามเสแสร้งหลอกลวงเบื้องบน\nห้ามต่อหน้าทำอย่างลับหลังทำอย่าง\nห้ามปากอย่างใจอย่าง\nห้ามทำเพื่อหวังชื่อเสียงและคำชม\n\nมิฉะนั้นจะถูกสวรรค์ลงทัณฑ์ ต้องสร้างบุญกุศลที่แท้จริง"
);

addSlide(
    "四、退縮不前", "ข้อที่ 4. ถดถอยย่อท้อ",
    "不可以始勤終怠，決無成；\n不可以見逆則退，順則進；\n不可以忽作忽輟。\n\n否則半途而廢打殘靈，要百折不彎。\n六祖壇經：若真修道人，不見世間過。",
    "ห้ามขยันตอนต้นแต่เกียจคร้านตอนปลาย จะไม่มีวันสำเร็จ\nห้ามถอยเมื่อเจออุปสรรค ก้าวหน้าเฉพาะตอนราบรื่น\nห้ามทำๆ หยุดๆ\n\nมิฉะนั้นจะล้มเหลวกลางคัน ต้องเข้มแข็งไม่ย่อท้อ\nสูตรเว่ยหลาง: หากเป็นผู้บำเพ็ญธรรมที่แท้จริง ย่อมไม่มองเห็นความผิดของผู้อื่น"
);

// We'll generate up to here for the demo to save time, plus conclusion.
addSlide(
    "天打五雷轟身 (天譴雷誅)", "สวรรค์ลงทัณฑ์ด้วยอสนีบาตทั้งห้า (การลงโทษจากเบื้องบน)",
    "這是一種良心的懲罰與顯化：\n天雷：含羞逞憤，身燒面熱\n地雷：行為不正，欲前不前\n陽雷：越禮犯份，心膽驚惶\n陰雷：陰謀暗算，坐臥不安\n法雷：心思擾亂，夢魂顛倒\n\n求道 ➔ 學道 ➔ 明道 ➔ 行道 ➔ 成道",
    "นี่คือการลงโทษจากมโนธรรมสำนึก:\nสายฟ้าสวรรค์: โกรธแค้นอับอาย ร่างกายร้อนรุ่ม\nสายฟ้าดิน: ประพฤติไม่ถูกต้อง กล้าๆ กลัวๆ\nสายฟ้าหยาง: ล่วงละเมิดจารีต หวาดผวาหวาดกลัว\nสายฟ้าหยิน: วางแผนร้ายลับหลัง นั่งนอนไม่เป็นสุข\nสายฟ้าธรรม: จิตใจว้าวุ่น ฝันร้ายสับสน\n\nรับธรรม ➔ เรียนธรรม ➔ เข้าใจธรรม ➔ ปฏิบัติธรรม ➔ บรรลุธรรม"
);

pptx.writeFile({ fileName: "G:\\我的雲端硬碟\\01-分類整理\\知行合一班PPT\\2020-12-27-十條大愿_泰文雙語版_極簡高級版.pptx" }).then(fileName => {
    console.log("created: " + fileName);
});
