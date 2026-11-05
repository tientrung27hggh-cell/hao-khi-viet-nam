// =============================================
// HAO KHI VIET NAM - SCRIPT.JS
// =============================================

// =============================================
// GAME 1: TRAC NGHIEM - 20 CAU
// =============================================

const questions = [
{q:"Chủ tịch Hồ Chí Minh sinh ngày nào?",a:["19/05/1890","02/09/1945","03/02/1930","19/08/1945"],c:0},
{q:"Bác Hồ ra đi tìm đường cứu nước năm nào?",a:["1905","1911","1920","1930"],c:1},
{q:"Bác Hồ đọc Tuyên ngôn Độc lập ngày nào?",a:["19/05/1890","07/05/1954","02/09/1945","30/04/1975"],c:2},
{q:"Bác Hồ sinh ra tại tỉnh nào?",a:["Nghệ An","Hà Nội","Thanh Hóa","Hà Tĩnh"],c:0},
{q:"Tên khai sinh của Bác Hồ là gì?",a:["Nguyễn Sinh Cung","Nguyễn Văn Cừ","Nguyễn Ái Quốc","Trần Phú"],c:0},
{q:"Bến cảng nào gắn với sự kiện Nguyễn Tất Thành ra đi tìm đường cứu nước?",a:["Bến Nhà Rồng","Bến Bạch Đằng","Cảng Hải Phòng","Cảng Đà Nẵng"],c:0},
{q:"Đảng Cộng sản Việt Nam thành lập năm nào?",a:["1925","1930","1941","1945"],c:1},
{q:"Chiến thắng Điện Biên Phủ diễn ra năm nào?",a:["1945","1950","1954","1975"],c:2},
{q:"Chiến dịch Điện Biên Phủ kết thúc ngày nào?",a:["07/05/1954","19/08/1945","02/09/1945","30/04/1975"],c:0},
{q:"Ai là người chỉ huy chiến dịch Điện Biên Phủ?",a:["Võ Nguyên Giáp","Văn Tiến Dũng","Nguyễn Chí Thanh","Hoàng Văn Thái"],c:0},
{q:"Chiến dịch Hồ Chí Minh diễn ra năm nào?",a:["1954","1968","1972","1975"],c:3},
{q:"Ngày giải phóng miền Nam là ngày nào?",a:["02/09/1945","07/05/1954","30/04/1975","19/05/1890"],c:2},
{q:"Hiệp định Paris về Việt Nam được ký năm nào?",a:["1954","1968","1973","1975"],c:2},
{q:"Bác Hồ trở về nước trực tiếp lãnh đạo cách mạng năm nào?",a:["1930","1941","1945","1954"],c:1},
{q:"Ngày Quốc khánh Việt Nam là ngày nào?",a:["30/04","19/05","02/09","07/05"],c:2},
{q:"Bác Hồ mất năm nào?",a:["1965","1968","1969","1975"],c:2},
{q:"Chiến thắng Điện Biên Phủ gắn với cuộc kháng chiến nào?",a:["Chống thực dân Pháp","Chống quân Nguyên","Chống quân Minh","Khởi nghĩa Lam Sơn"],c:0},
{q:"Phong trào Đồng Khởi diễn ra mạnh mẽ năm nào?",a:["1945","1954","1960","1975"],c:2},
{q:"Ai là người chỉ huy chiến dịch Hồ Chí Minh năm 1975?",a:["Võ Nguyên Giáp","Văn Tiến Dũng","Trường Chinh","Phạm Văn Đồng"],c:1},
{q:"Bác Hồ đọc Tuyên ngôn Độc lập tại đâu?",a:["Quảng trường Ba Đình","Bến Nhà Rồng","Dinh Độc Lập","Thành cổ Quảng Trị"],c:0}
];

// =============================================
// GAME 2: SAP XEP THOI GIAN - 10 SU KIEN
// =============================================

const events = [
{year:1858,name:"Thực dân Pháp nổ súng tấn công Đà Nẵng"},
{year:1890,name:"Chủ tịch Hồ Chí Minh ra đời"},
{year:1911,name:"Nguyễn Tất Thành ra đi tìm đường cứu nước"},
{year:1930,name:"Đảng Cộng sản Việt Nam thành lập"},
{year:1941,name:"Nguyễn Ái Quốc trở về Việt Nam"},
{year:1945,name:"Bác Hồ đọc Tuyên ngôn Độc lập"},
{year:1954,name:"Chiến thắng Điện Biên Phủ"},
{year:1960,name:"Phong trào Đồng Khởi"},
{year:1973,name:"Ký Hiệp định Paris về Việt Nam"},
{year:1975,name:"Giải phóng miền Nam, thống nhất đất nước"}
];

// =============================================
// GAME 3: GIAI MA LICH SU - 15 CAU
// =============================================

const riddles = [
{q:"Tôi là vị lãnh tụ đọc Tuyên ngôn Độc lập ngày 02/09/1945. Tôi là ai?",a:["ho chi minh","bac ho"]},
{q:"Tôi là bến cảng nơi Nguyễn Tất Thành ra đi tìm đường cứu nước năm 1911. Tôi là đâu?",a:["ben nha rong","nha rong"]},
{q:"Tôi là chiến thắng lịch sử năm 1954 gắn với Điện Biên. Tôi là gì?",a:["dien bien phu"]},
{q:"Tôi là quảng trường tại Hà Nội nơi Bác Hồ đọc Tuyên ngôn Độc lập. Tôi là đâu?",a:["ba dinh","quang truong ba dinh"]},
{q:"Tôi là vị tướng chỉ huy chiến dịch Điện Biên Phủ. Tôi là ai?",a:["vo nguyen giap"]},
{q:"Tôi là bản tuyên bố khai sinh nước Việt Nam Dân chủ Cộng hòa. Tôi là gì?",a:["tuyen ngon doc lap"]},
{q:"Tôi là tổ chức chính trị được thành lập ngày 03/02/1930. Tôi là gì?",a:["dang cong san viet nam"]},
{q:"Tôi là tỉnh nơi Chủ tịch Hồ Chí Minh sinh ra. Tôi là tỉnh nào?",a:["nghe an"]},
{q:"Tôi là chiến dịch lịch sử giải phóng Sài Gòn năm 1975. Tôi tên là gì?",a:["chien dich ho chi minh"]},
{q:"Tôi là hiệp định được ký tại Paris ngày 27/01/1973. Tôi là gì?",a:["hiep dinh paris"]},
{q:"Tôi là tên khai sinh của Chủ tịch Hồ Chí Minh. Tôi là gì?",a:["nguyen sinh cung"]},
{q:"Tôi là ngày lễ kỷ niệm Bác Hồ đọc Tuyên ngôn Độc lập. Tôi là ngày nào?",a:["quoc khanh","02/09","2/9"]},
{q:"Tôi là phong trào đấu tranh mạnh mẽ ở miền Nam năm 1960. Tôi là gì?",a:["dong khoi","phong trao dong khoi"]},
{q:"Tôi là thành phố được giải phóng ngày 30/04/1975. Tôi là thành phố nào?",a:["sai gon","thanh pho ho chi minh"]},
{q:"Tôi là ngày kỷ niệm sinh nhật Chủ tịch Hồ Chí Minh. Tôi là ngày nào?",a:["19/05","19-05","19 thang 5"]}
];

// =============================================
// GAME 4: BAN DO LICH SU - 10 DIA DANH
// =============================================

const mapPlaces = [
{
id:"pacbo",name:"Pác Bó - Cao Bằng",year:1941,
x:29,y:7,
q:"Sự kiện lịch sử nào gắn với Pác Bó năm 1941?",
a:["Nguyễn Ái Quốc trở về nước","Bác Hồ đọc Tuyên ngôn Độc lập","Chiến thắng Điện Biên Phủ","Ký Hiệp định Paris"],
c:0,
info:"Ngày 28/01/1941, Nguyễn Ái Quốc trở về nước qua khu vực Pác Bó, Cao Bằng để trực tiếp lãnh đạo cách mạng."
},
{
id:"dienbien",name:"Điện Biên Phủ",year:1954,
x:7,y:11,
q:"Chiến thắng Điện Biên Phủ kết thúc vào ngày nào?",
a:["30/04/1975","07/05/1954","02/09/1945","19/05/1890"],
c:1,
info:"Ngày 07/05/1954, chiến dịch Điện Biên Phủ toàn thắng, tạo bước ngoặt quan trọng trong cuộc kháng chiến chống thực dân Pháp."
},
{
id:"tantrao",name:"Tân Trào - Tuyên Quang",year:1945,
x:24,y:11,
q:"Đại hội Quốc dân Tân Trào diễn ra vào thời gian nào?",
a:["Tháng 8/1945","Tháng 5/1954","Tháng 4/1975","Tháng 1/1973"],
c:0,
info:"Đại hội Quốc dân Tân Trào diễn ra ngày 16 và 17/08/1945, tán thành chủ trương tổng khởi nghĩa."
},
{
id:"badinh",name:"Ba Đình - Hà Nội",year:1945,
x:30,y:19,
q:"Tại Quảng trường Ba Đình, Bác Hồ đã thực hiện sự kiện nào?",
a:["Đọc Tuyên ngôn Độc lập","Ký Hiệp định Paris","Thành lập Đảng","Phát động phong trào Đồng Khởi"],
c:0,
info:"Ngày 02/09/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình."
},
{
id:"haiphong",name:"Hải Phòng - Đền Nghè",year:40,
x:39,y:20,
q:"Nữ tướng nào gắn liền với vùng đất An Biên xưa, nay thuộc Hải Phòng?",
a:["Lê Chân","Bà Triệu","Ỷ Lan","Nguyên phi Ỷ Lan"],
c:0,
info:"Nữ tướng Lê Chân là một nữ tướng tiêu biểu trong cuộc khởi nghĩa Hai Bà Trưng năm 40. Bà gắn với vùng An Biên xưa và được nhân dân Hải Phòng tưởng niệm tại Đền Nghè, Tượng đài Nữ tướng Lê Chân."
},
{
id:"danang",name:"Đà Nẵng",year:1858,
x:43,y:52,
q:"Sự kiện nào mở đầu cuộc xâm lược Việt Nam của thực dân Pháp năm 1858?",
a:["Pháp tấn công Hà Nội","Pháp nổ súng tấn công Đà Nẵng","Pháp tấn công Huế","Pháp tấn công Điện Biên"],
c:1,
info:"Ngày 01/09/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công Đà Nẵng."
},
{
id:"quangtri",name:"Thành cổ Quảng Trị",year:1972,
x:37,y:42,
q:"Thành cổ Quảng Trị gắn với cuộc chiến đấu nổi bật nào?",
a:["81 ngày đêm bảo vệ Thành cổ","Chiến thắng Điện Biên Phủ","Tổng tiến công Tết Mậu Thân","Chiến dịch Hồ Chí Minh"],
c:0,
info:"Năm 1972, quân và dân ta chiến đấu kiên cường 81 ngày đêm bảo vệ Thành cổ Quảng Trị."
},
{
id:"vant uong",name:"Vạn Tường - Quảng Ngãi",year:1965,
x:46,y:56,
q:"Chiến thắng Vạn Tường diễn ra năm nào?",
a:["1954","1960","1965","1975"],
c:2,
info:"Trận Vạn Tường diễn ra tháng 8/1965 tại Quảng Ngãi, là một chiến thắng tiêu biểu trong cuộc kháng chiến chống Mỹ."
},
{
id:"nharong",name:"Bến Nhà Rồng - TP.HCM",year:1911,
x:40,y:85,
q:"Ngày 05/06/1911, Nguyễn Tất Thành đã làm gì tại Bến Nhà Rồng?",
a:["Đọc Tuyên ngôn Độc lập","Ra đi tìm đường cứu nước","Thành lập Đảng","Trở về nước"],
c:1,
info:"Ngày 05/06/1911, Nguyễn Tất Thành rời Bến Nhà Rồng trên tàu Amiral Latouche-Tréville, bắt đầu hành trình tìm đường cứu nước."
},
{
id:"dinhdoclap",name:"Dinh Độc Lập - TP.HCM",year:1975,
x:43,y:87,
q:"Sự kiện lịch sử nào gắn với Dinh Độc Lập ngày 30/04/1975?",
a:["Chiến thắng Điện Biên Phủ","Bác Hồ đọc Tuyên ngôn Độc lập","Giải phóng miền Nam, thống nhất đất nước","Ký Hiệp định Paris"],
c:2,
info:"Ngày 30/04/1975, xe tăng Quân giải phóng tiến vào Dinh Độc Lập, đánh dấu thắng lợi của Chiến dịch Hồ Chí Minh."
}
];

// =============================================
// BIEN TOAN CUC
// =============================================

let score = 0;
let current = 0;
let currentGame = "";

let timelineItems = [];
let timelineChecked = false;
let timelineHard = false;

let mapCompleted = [];
let mapCurrentPlace = null;

let historyAudioContext = null;
let historySoundEnabled = true;

let riddleHintUsed = false;

// =============================================
// HAM DUNG CHUNG
// =============================================

function shuffle(array) {
    let result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i],result[j]] = [result[j],result[i]];
    }

    return result;
}

function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .replace(/đ/g,"d")
        .trim()
        .replace(/\s+/g," ");
}

// =============================================
// CHUYEN TRANG - DA SUA LOI
// =============================================

function hideMainPage() {
    document.getElementById("main-header").classList.add("hidden");
    document.getElementById("home").classList.add("hidden");
    document.getElementById("games").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("main-footer").classList.add("hidden");

    document.getElementById("history-character-library")?.classList.add("hidden");
    document.getElementById("vietnam-map-explorer")?.classList.add("hidden");
}

function showMainPage() {
    document.getElementById("main-header").classList.remove("hidden");
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("games").classList.remove("hidden");
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("main-footer").classList.remove("hidden");

    document.getElementById("history-character-library")?.classList.remove("hidden");
    document.getElementById("vietnam-map-explorer")?.classList.remove("hidden");
}

function goToGames() {
    document.getElementById("games").scrollIntoView({
        behavior:"smooth"
    });
}

function goHome() {
    document.getElementById("game-area").classList.add("hidden");

    showMainPage();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function startGame(type) {
    currentGame = type;
    score = 0;
    current = 0;

    hideMainPage();

    const gameArea = document.getElementById("game-area");
    gameArea.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    if (type === "quiz") showQuiz();
    if (type === "timeline") showTimeline();
    if (type === "riddle") showRiddle();

    if (type === "map") {
        mapCompleted = [];
        mapCurrentPlace = null;
        showMapGame();
    }
}

// =============================================
// KET QUA
// =============================================

function showResult(title,points,total) {
    const percent = Math.round(points / total * 100);

    document.getElementById("game-content").innerHTML = `
        <h2>${title}</h2>

        <div class="result">
            <h2>🏆 ${points}/${total} điểm</h2>
            <p>Độ chính xác: ${percent}%</p>
            <p>
                ${percent >= 80
                    ? "Xuất sắc! Bạn rất am hiểu lịch sử Việt Nam."
                    : percent >= 50
                    ? "Khá tốt! Hãy tiếp tục cố gắng."
                    : "Hãy tìm hiểu thêm và thử sức lần nữa nhé!"}
            </p>
        </div>

        <button onclick="startGame('${currentGame}')">
            🔄 Chơi lại
        </button>

        <button onclick="goHome()">
            🏠 Về trang chủ
        </button>
    `;
}

// =============================================
// GAME 1: TRAC NGHIEM
// =============================================

function showQuiz() {
    const content = document.getElementById("game-content");

    if (current >= questions.length) {
        showResult("HOÀN THÀNH TRẮC NGHIỆM!",score,questions.length);
        return;
    }

    const q = questions[current];

    content.innerHTML = `
        <h2>📚 THỬ THÁCH LỊCH SỬ</h2>
        <p>Điểm: ${score}</p>
        <p>Câu ${current+1}/${questions.length}</p>

        <div class="question">${q.q}</div>

        <div class="answer-list">
            ${q.a.map((answer,i)=>`
                <button onclick="checkQuiz(${i})">
                    ${String.fromCharCode(65+i)}. ${answer}
                </button>
            `).join("")}
        </div>

        <div id="feedback" class="result"></div>
    `;
}

function checkQuiz(choice) {
    const q = questions[current];

    if (document.querySelector("#game-content .next-quiz")) return;

    document.querySelectorAll(".answer-list button").forEach(b=>{
        b.disabled = true;
    });

    const feedback = document.getElementById("feedback");

    if (choice === q.c) {
        score++;
        feedback.innerText = "✅ Chính xác! +1 điểm.";
        playHistorySound("correct");
    } else {
        feedback.innerText = "❌ Chưa chính xác. Đáp án: " + q.a[q.c];
        playHistorySound("wrong");
    }

    document.getElementById("game-content").insertAdjacentHTML(
        "beforeend",
        '<button class="next-quiz" onclick="nextQuiz()">Câu tiếp theo →</button>'
    );
}

function nextQuiz() {
    current++;
    showQuiz();
}

// =============================================
// GAME 2: SAP XEP THOI GIAN
// =============================================

function showTimeline() {
    timelineItems = shuffle(events);
    timelineChecked = false;
    timelineHard = false;

    document.getElementById("game-content").innerHTML = `
        <h2>⏳ SẮP XẾP THỜI GIAN</h2>

        <p>Chọn độ khó của bạn:</p>

        <button onclick="setTimelineDifficulty(false)">
            🟢 DỄ - Hiện năm
        </button>

        <button onclick="setTimelineDifficulty(true)">
            🔴 KHÓ - Ẩn năm
        </button>

        <p>Sắp xếp sự kiện từ sớm nhất đến muộn nhất.</p>

        <div id="timeline-list"></div>
        <div id="timeline-result" class="result"></div>

        <button onclick="checkTimeline()">Kiểm tra kết quả</button>
    `;

    renderTimeline();
}

function setTimelineDifficulty(hard) {
    timelineHard = hard;
    timelineItems = shuffle(events);
    timelineChecked = false;

    document.getElementById("timeline-result").innerText = "";
    renderTimeline();
}

function renderTimeline() {
    const list = document.getElementById("timeline-list");
    if (!list) return;

    list.innerHTML = timelineItems.map((item,index)=>`
        <div class="timeline-item">
            <span>
                ${timelineHard ? item.name : item.year+" - "+item.name}
            </span>

            <div>
                <button onclick="moveItem(${index},-1)"
                    ${timelineChecked || index===0 ? "disabled":""}>
                    ↑
                </button>

                <button onclick="moveItem(${index},1)"
                    ${timelineChecked || index===timelineItems.length-1 ? "disabled":""}>
                    ↓
                </button>
            </div>
        </div>
    `).join("");
}

function moveItem(index,direction) {
    if (timelineChecked) return;

    const newIndex = index+direction;

    if (newIndex<0 || newIndex>=timelineItems.length) return;

    [timelineItems[index],timelineItems[newIndex]] =
    [timelineItems[newIndex],timelineItems[index]];

    renderTimeline();
}

function checkTimeline() {
    if (timelineChecked) return;

    timelineChecked = true;

    const correctOrder = [...events].sort((a,b)=>a.year-b.year);

    let correct = 0;

    timelineItems.forEach((item,index)=>{
        if (item.year===correctOrder[index].year) correct++;
    });

    score = correct;

    document.getElementById("timeline-result").innerHTML = `
        <h3>${correct===events.length ? "🎉 Xuất sắc!" : "Kết quả của bạn"}</h3>
        <p>Bạn sắp xếp đúng ${correct}/${events.length} vị trí.</p>
        <p>Thứ tự đúng: ${correctOrder.map(e=>e.year).join(" → ")}</p>
    `;

    renderTimeline();

    document.getElementById("game-content").insertAdjacentHTML(
        "beforeend",
        '<button onclick="startGame(\'timeline\')">🔄 Chơi lượt mới</button>'
    );

    playHistorySound(correct===events.length ? "correct":"click");
}

// =============================================
// GAME 3: GIAI MA LICH SU
// =============================================

const extraRiddleHints = [
"Đây là vị lãnh tụ của cách mạng Việt Nam.",
"Địa điểm này nằm ở Thành phố Hồ Chí Minh, gắn với một bến cảng.",
"Đây là chiến thắng năm 1954, diễn ra tại một thung lũng ở Tây Bắc.",
"Địa danh này là quảng trường nổi tiếng ở trung tâm Hà Nội.",
"Ông là vị tướng được giao chỉ huy chiến dịch Điện Biên Phủ.",
"Văn kiện này tuyên bố sự ra đời của một quốc gia độc lập.",
"Đây là chính đảng được thành lập vào ngày 03/02/1930.",
"Đây là quê hương của Chủ tịch Hồ Chí Minh.",
"Chiến dịch này mang tên Chủ tịch Hồ Chí Minh.",
"Hiệp định được ký kết tại thủ đô nước Pháp.",
"Tên khai sinh của Bác Hồ có ba tiếng.",
"Đây là ngày lễ lớn vào đầu tháng 9 hằng năm.",
"Phong trào này diễn ra ở miền Nam vào năm 1960.",
"Thành phố này từng có tên gọi là Sài Gòn.",
"Ngày này được kỷ niệm vào tháng 5 hằng năm."
];

function showRiddle() {
    if (current>=riddles.length) {
        showResult("HOÀN THÀNH GIẢI MÃ!",score,riddles.length);
        return;
    }

    riddleHintUsed = false;

    const r = riddles[current];

    document.getElementById("game-content").innerHTML = `
        <h2>🔍 GIẢI MÃ LỊCH SỬ</h2>

        <p>Điểm: ${score}</p>
        <p>Câu ${current+1}/${riddles.length}</p>

        <div class="question">${r.q}</div>

        <input id="riddle-answer"
            type="text"
            placeholder="Nhập câu trả lời..."
            style="padding:12px;width:85%;max-width:450px;border:1px solid #aaa;border-radius:7px;">

        <br><br>

        <button id="riddle-submit" onclick="checkRiddle()">
            Trả lời
        </button>

        <button id="riddle-hint-button" onclick="showRiddleHint()">
            💡 Xem gợi ý
        </button>

        <div id="riddle-feedback" class="result"></div>
    `;

    document.getElementById("riddle-answer").addEventListener("keydown",e=>{
        if (e.key==="Enter") checkRiddle();
    });
}

function showRiddleHint() {
    if (riddleHintUsed) return;

    riddleHintUsed = true;

    const feedback = document.getElementById("riddle-feedback");

    feedback.innerHTML = `
        <p>💡 <strong>Gợi ý:</strong> ${extraRiddleHints[current]}</p>
        <small>Gợi ý không làm mất điểm.</small>
    `;

    const button = document.getElementById("riddle-hint-button");

    button.disabled = true;
    button.textContent = "✓ Đã xem gợi ý";

    playHistorySound("hint");
}

function checkRiddle() {
    const input = document.getElementById("riddle-answer");

    if (!input || !input.value.trim()) {
        document.getElementById("riddle-feedback").innerText =
            "⚠️ Bạn chưa nhập câu trả lời!";
        return;
    }

    const accepted = riddles[current].a.map(normalizeText);
    const answer = normalizeText(input.value);
    const feedback = document.getElementById("riddle-feedback");

    if (accepted.includes(answer)) {
        score++;
        feedback.innerText = "✅ Chính xác! +1 điểm.";
        playHistorySound("correct");
    } else {
        feedback.innerText = "❌ Đáp án đúng: "+riddles[current].a[0];
        playHistorySound("wrong");
    }

    input.disabled = true;
    document.getElementById("riddle-submit").disabled = true;
    document.getElementById("riddle-hint-button").disabled = true;

    document.getElementById("game-content").insertAdjacentHTML(
        "beforeend",
        '<button onclick="nextRiddle()">Câu tiếp theo →</button>'
    );
}

function nextRiddle() {
    current++;
    showRiddle();
}

// =============================================
// GAME 4: BAN DO LICH SU
// SU DUNG ANH BAN DO MOI
// =============================================

const HISTORY_MAP_IMAGE = "ban-do-viet-nam.jpg";

function showMapGame() {
    if (mapCompleted.length===mapPlaces.length) {
        showResult("🏆 HOÀN THÀNH BẢN ĐỒ LỊCH SỬ!",score,mapPlaces.length);
        return;
    }

    const content = document.getElementById("game-content");

    const mapPoints = mapPlaces.map((place,index)=>`
        <button
            class="history-map-marker ${mapCompleted.includes(place.id)?"done":""}"
            style="left:${place.x}%;top:${place.y}%"
            onclick="selectMapPlace('${place.id}')"
            title="${place.name}"
            ${mapCompleted.includes(place.id)?"disabled":""}>
            ${mapCompleted.includes(place.id)?"✓":index+1}
        </button>
    `).join("");

    content.innerHTML = `
        <h2>🗺️ BẢN ĐỒ LỊCH SỬ VIỆT NAM</h2>

        <p>Chọn địa danh trên bản đồ để trả lời câu hỏi lịch sử.</p>

        <h3>Điểm: ${score}/${mapPlaces.length}</h3>

        <p>Đã khám phá: ${mapCompleted.length}/${mapPlaces.length}</p>

        <div class="history-map-wrapper">
            <h3>🇻🇳 BẢN ĐỒ VIỆT NAM</h3>

            <div class="history-map-image">
                <img src="${HISTORY_MAP_IMAGE}"
                     alt="Bản đồ các tỉnh thành Việt Nam"
                     onerror="this.alt='Không tìm thấy ảnh bản đồ. Hãy kiểm tra thư mục images.'">

                ${mapPoints}
            </div>

            <p class="section-desc">
                Chọn các điểm đánh dấu để khám phá địa danh lịch sử.
            </p>
        </div>

        <h3>📍 DANH SÁCH ĐỊA DANH</h3>

        <div class="map-place-list">
            ${mapPlaces.map((place,index)=>`
                <button
                    onclick="selectMapPlace('${place.id}')"
                    ${mapCompleted.includes(place.id)?"disabled":""}>
                    ${mapCompleted.includes(place.id)?"✅":"📍"}
                    ${index+1}. ${place.name}
                </button>
            `).join("")}
        </div>
    `;
}

function selectMapPlace(id) {
    const place = mapPlaces.find(p=>p.id===id);

    if (!place || mapCompleted.includes(id)) return;

    mapCurrentPlace = place;

    document.getElementById("game-content").innerHTML = `
        <h2>📍 ${place.name}</h2>

        <p><b>Sự kiện: ${place.year}</b></p>

        <div class="question">${place.q}</div>

        <div id="map-answers" class="answer-list">
            ${place.a.map((answer,index)=>`
                <button onclick="checkMapAnswer(${index})">
                    ${String.fromCharCode(65+index)}. ${answer}
                </button>
            `).join("")}
        </div>

        <div id="map-feedback" class="result"></div>

        <button onclick="showMapGame()">← Quay lại bản đồ</button>
    `;
}

function checkMapAnswer(choice) {
    if (!mapCurrentPlace) return;
    if (document.getElementById("map-next")) return;

    const place = mapCurrentPlace;
    const feedback = document.getElementById("map-feedback");

    document.querySelectorAll("#map-answers button").forEach(b=>{
        b.disabled = true;
    });

    if (choice===place.c) {
        score++;

        feedback.innerHTML = `
            <h3 style="color:green">✅ CHÍNH XÁC! +1 ĐIỂM</h3>
            <p>${place.info}</p>
        `;

        playHistorySound("correct");
    } else {
        feedback.innerHTML = `
            <h3 style="color:red">❌ CHƯA CHÍNH XÁC</h3>
            <p>Đáp án đúng: <b>${place.a[place.c]}</b></p>
            <p>${place.info}</p>
        `;

        playHistorySound("wrong");
    }

    mapCompleted.push(place.id);

    document.getElementById("game-content").insertAdjacentHTML(
        "beforeend",
        '<button id="map-next" onclick="showMapGame()">Tiếp tục khám phá →</button>'
    );
}

// =============================================
// THU VIEN NHAN VAT LICH SU
// =============================================

const historyCharacters = [
{
name:"Nữ tướng Lê Chân",years:"Thế kỷ I",icon:"🛡️",
hometown:"Vùng An Biên xưa, gắn với Hải Phòng ngày nay",
story:"Lê Chân là nữ tướng có công chiêu mộ lực lượng, khai phá vùng An Biên và tham gia cuộc khởi nghĩa Hai Bà Trưng năm 40 chống ách đô hộ nhà Hán.",
achievements:[
"Tham gia cuộc khởi nghĩa Hai Bà Trưng năm 40.",
"Góp sức xây dựng lực lượng và căn cứ tại vùng An Biên.",
"Được nhân dân Hải Phòng tôn kính, thờ phụng tại Đền Nghè.",
"Tượng đài Nữ tướng Lê Chân trở thành một biểu tượng văn hóa của Hải Phòng."
],
places:"Đền Nghè, Tượng đài Nữ tướng Lê Chân - Hải Phòng"
},
{
name:"Hai Bà Trưng",years:"40 - 43",icon:"⚔️",
hometown:"Mê Linh",
story:"Trưng Trắc và Trưng Nhị lãnh đạo cuộc khởi nghĩa năm 40, tập hợp đông đảo lực lượng chống chính quyền đô hộ Đông Hán.",
achievements:[
"Phất cờ khởi nghĩa năm 40.",
"Nghĩa quân giành được nhiều thành trì, làm chủ một vùng rộng lớn.",
"Trưng Trắc lên làm vua, xây dựng chính quyền tự chủ.",
"Trở thành biểu tượng tiêu biểu của tinh thần độc lập và ý chí quật cường."
],
places:"Mê Linh - Hà Nội"
},
{
name:"Ngô Quyền",years:"898 - 944",icon:"🚩",
hometown:"Đường Lâm",
story:"Ngô Quyền lãnh đạo quân dân ta đánh bại quân Nam Hán trên sông Bạch Đằng năm 938.",
achievements:[
"Tổ chức trận địa cọc trên sông Bạch Đằng năm 938.",
"Đánh bại quân Nam Hán, chấm dứt thời kỳ Bắc thuộc kéo dài.",
"Xưng vương và đặt nền móng cho thời kỳ độc lập lâu dài."
],
places:"Sông Bạch Đằng - khu vực Quảng Ninh và Hải Phòng"
},
{
name:"Trần Hưng Đạo",years:"1228 - 1300",icon:"🐉",
hometown:"Tức Mặc, Nam Định xưa",
story:"Trần Hưng Đạo là Quốc công Tiết chế, giữ vai trò quan trọng trong các cuộc kháng chiến chống quân Nguyên - Mông.",
achievements:[
"Góp phần chỉ huy kháng chiến chống Nguyên - Mông lần thứ hai năm 1285.",
"Lãnh đạo quân dân Đại Việt trong cuộc kháng chiến năm 1287 - 1288.",
"Gắn với chiến thắng Bạch Đằng năm 1288.",
"Soạn Hịch tướng sĩ để khích lệ tinh thần quân đội."
],
places:"Bạch Đằng - Hải Phòng, Quảng Ninh"
},
{
name:"Lê Lợi",years:"1385 - 1433",icon:"👑",
hometown:"Lam Sơn, Thanh Hóa",
story:"Lê Lợi là người lãnh đạo cuộc khởi nghĩa Lam Sơn chống quân Minh, sau đó lập ra triều Hậu Lê.",
achievements:[
"Phát động khởi nghĩa Lam Sơn năm 1418.",
"Xây dựng lực lượng và mở rộng địa bàn hoạt động.",
"Giành thắng lợi, kết thúc ách đô hộ nhà Minh năm 1427.",
"Lên ngôi hoàng đế năm 1428, mở đầu triều Hậu Lê."
],
places:"Lam Sơn - Thanh Hóa"
},
{
name:"Nguyễn Trãi",years:"1380 - 1442",icon:"📜",
hometown:"Thăng Long",
story:"Nguyễn Trãi là nhà chính trị, nhà quân sự, nhà văn hóa; có đóng góp lớn trong khởi nghĩa Lam Sơn.",
achievements:[
"Tham gia hoạch định chiến lược trong khởi nghĩa Lam Sơn.",
"Soạn Bình Ngô đại cáo năm 1428.",
"Để lại nhiều tác phẩm có giá trị về chính trị, lịch sử và văn học.",
"Được UNESCO cùng Việt Nam kỷ niệm 600 năm ngày sinh vào năm 1980."
],
places:"Thăng Long - Hà Nội; Lam Sơn - Thanh Hóa"
},
{
name:"Quang Trung - Nguyễn Huệ",years:"1753 - 1792",icon:"🐎",
hometown:"Tây Sơn, Bình Định xưa",
story:"Nguyễn Huệ là lãnh tụ phong trào Tây Sơn, sau này lên ngôi hoàng đế với niên hiệu Quang Trung.",
achievements:[
"Góp phần đánh bại quân Xiêm trong trận Rạch Gầm - Xoài Mút năm 1785.",
"Lãnh đạo cuộc tiến quân ra Bắc, lật đổ các thế lực phong kiến đối lập.",
"Đại phá quân Thanh vào mùa xuân Kỷ Dậu 1789.",
"Đề ra nhiều chủ trương nhằm ổn định và phát triển đất nước."
],
places:"Tây Sơn - Bình Định xưa; Ngọc Hồi, Đống Đa - Hà Nội"
},
{
name:"Võ Nguyên Giáp",years:"1911 - 2013",icon:"🎖️",
hometown:"Lệ Thủy, Quảng Bình",
story:"Đại tướng Võ Nguyên Giáp là Tổng tư lệnh Quân đội nhân dân Việt Nam, chỉ huy nhiều chiến dịch quan trọng.",
achievements:[
"Lãnh đạo quân đội trong nhiều chiến dịch của cuộc kháng chiến chống Pháp.",
"Trực tiếp làm Tổng tư lệnh chiến dịch Điện Biên Phủ năm 1954.",
"Góp phần quan trọng vào thắng lợi của cuộc kháng chiến chống thực dân Pháp.",
"Là vị Đại tướng đầu tiên của Quân đội nhân dân Việt Nam."
],
places:"Điện Biên Phủ - Điện Biên"
},
{
name:"Võ Thị Sáu",years:"1933 - 1952",icon:"🌺",
hometown:"Đất Đỏ, Bà Rịa - Vũng Tàu xưa",
story:"Võ Thị Sáu tham gia hoạt động cách mạng từ khi còn trẻ, trở thành biểu tượng về lòng dũng cảm.",
achievements:[
"Tham gia hoạt động cách mạng tại địa phương khi còn rất trẻ.",
"Bị thực dân Pháp bắt và kết án tử hình.",
"Hy sinh tại Côn Đảo năm 1952.",
"Được nhân dân tưởng nhớ như biểu tượng của lòng yêu nước và sự kiên trung."
],
places:"Đất Đỏ và Côn Đảo"
},
{
name:"Hồ Chí Minh",years:"1890 - 1969",icon:"⭐",
hometown:"Kim Liên, Nghệ An",
story:"Chủ tịch Hồ Chí Minh là người sáng lập và lãnh đạo Nhà nước Việt Nam Dân chủ Cộng hòa.",
achievements:[
"Ra đi tìm đường cứu nước từ Bến Nhà Rồng năm 1911.",
"Tham gia sáng lập Đảng Cộng sản Việt Nam năm 1930.",
"Lãnh đạo Cách mạng tháng Tám năm 1945.",
"Đọc Tuyên ngôn Độc lập ngày 02/09/1945.",
"Đặt nền móng cho Nhà nước Việt Nam độc lập hiện đại."
],
places:"Kim Liên - Nghệ An; Pác Bó - Cao Bằng; Ba Đình - Hà Nội"
}
];

function createCharacterLibrary() {
    if (document.getElementById("history-character-library")) return;

    const section = document.createElement("section");
    section.id = "history-character-library";

    section.innerHTML = `
        <h2 style="text-align:center;color:#a51f19">
            📚 THƯ VIỆN NHÂN VẬT LỊCH SỬ
        </h2>

        <p style="text-align:center">
            Tìm hiểu tiểu sử, chiến công và địa danh gắn với các nhân vật lịch sử Việt Nam.
        </p>

        <div id="history-character-grid"></div>
        <div id="history-character-detail" style="margin-top:20px"></div>
    `;

    document.getElementById("games").insertAdjacentElement("afterend",section);

    document.getElementById("history-character-grid").innerHTML =
        historyCharacters.map((c,i)=>`
            <button type="button" onclick="showHistoryCharacter(${i})">
                <span style="font-size:28px">${c.icon}</span><br>
                <strong>${c.name}</strong><br>
                <small>${c.years}</small>
            </button>
        `).join("");
}

function showHistoryCharacter(index) {
    const c = historyCharacters[index];
    if (!c) return;

    playHistorySound("click");

    document.getElementById("history-character-detail").innerHTML = `
        <article>
            <h2>${c.icon} ${c.name}</h2>
            <p><strong>Thời gian:</strong> ${c.years}</p>
            <p><strong>Quê hương:</strong> ${c.hometown}</p>
            <p>${c.story}</p>

            <h3>🏆 Chiến công và dấu ấn</h3>

            <ol>
                ${c.achievements.map(a=>`<li style="margin:8px 0">${a}</li>`).join("")}
            </ol>

            <p><strong>Địa danh liên quan:</strong> ${c.places}</p>
        </article>
    `;

    document.getElementById("history-character-detail").scrollIntoView({
        behavior:"smooth",
        block:"nearest"
    });
}

// =============================================
// BAN DO KHAM PHA VIET NAM
// SU DUNG CUNG ANH BAN DO MOI
// =============================================

const explorationPlaces = [
{
name:"Hải Phòng",icon:"⚓",x:39,y:20,
region:"Đồng bằng Bắc Bộ",
story:"Hải Phòng gắn với vùng An Biên xưa và nữ tướng Lê Chân. Thành phố còn gắn với nhiều sự kiện lịch sử trên sông Bạch Đằng.",
spots:[
"Đền Nghè - thờ Nữ tướng Lê Chân.",
"Tượng đài Nữ tướng Lê Chân - công trình tưởng niệm nhân vật có công khai phá vùng An Biên.",
"Bạch Đằng Giang - không gian tưởng niệm các chiến thắng trên sông Bạch Đằng.",
"Bến tàu không số K15 - điểm xuất phát của những chuyến tàu chi viện trên tuyến đường Hồ Chí Minh trên biển."
]
},
{
name:"Hà Nội",icon:"🏯",x:30,y:19,
region:"Đồng bằng Bắc Bộ",
story:"Hà Nội là trung tâm chính trị, văn hóa lâu đời, gắn với nhiều triều đại và sự kiện trọng đại của đất nước.",
spots:[
"Hoàng thành Thăng Long - trung tâm quyền lực qua nhiều triều đại.",
"Quảng trường Ba Đình - nơi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 02/09/1945.",
"Văn Miếu - Quốc Tử Giám - biểu tượng truyền thống hiếu học."
]
},
{
name:"Phú Thọ",icon:"🏛️",x:24,y:14,
region:"Trung du và miền núi phía Bắc",
story:"Phú Thọ gắn với thời đại Hùng Vương và truyền thuyết dựng nước của dân tộc Việt Nam.",
spots:[
"Khu di tích lịch sử Đền Hùng - nơi tưởng niệm các Vua Hùng.",
"Đền Giếng - một điểm thờ tự trong quần thể Đền Hùng."
]
},
{
name:"Cao Bằng",icon:"⛰️",x:29,y:7,
region:"Đông Bắc",
story:"Cao Bằng là căn cứ địa cách mạng quan trọng, nơi Nguyễn Ái Quốc trở về nước năm 1941.",
spots:[
"Khu di tích Pác Bó - gắn với hoạt động cách mạng của Nguyễn Ái Quốc.",
"Suối Lê-nin và núi Các Mác - các địa danh trong khu di tích Pác Bó."
]
},
{
name:"Điện Biên",icon:"🎖️",x:7,y:11,
region:"Tây Bắc",
story:"Điện Biên là địa danh gắn với chiến dịch Điện Biên Phủ năm 1954, một chiến thắng có ý nghĩa lịch sử lớn.",
spots:[
"Đồi A1 - cứ điểm quan trọng trong chiến dịch.",
"Hầm chỉ huy của tướng De Castries.",
"Nghĩa trang liệt sĩ quốc gia A1.",
"Bảo tàng Chiến thắng Điện Biên Phủ."
]
},
{
name:"Thanh Hóa",icon:"⚔️",x:27,y:29,
region:"Bắc Trung Bộ",
story:"Thanh Hóa gắn với căn cứ Lam Sơn và cuộc khởi nghĩa do Lê Lợi lãnh đạo.",
spots:[
"Khu di tích Lam Kinh - gắn với cuộc khởi nghĩa Lam Sơn và triều Hậu Lê.",
"Thành nhà Hồ - công trình thành đá độc đáo được UNESCO ghi danh."
]
},
{
name:"Nghệ An",icon:"🌿",x:27,y:34,
region:"Bắc Trung Bộ",
story:"Nghệ An là quê hương Chủ tịch Hồ Chí Minh, vùng đất có truyền thống yêu nước và cách mạng.",
spots:[
"Khu di tích Kim Liên - quê hương Chủ tịch Hồ Chí Minh.",
"Làng Sen - nơi gắn với tuổi thơ của Bác Hồ."
]
},
{
name:"Quảng Trị",icon:"🕊️",x:37,y:42,
region:"Miền Trung",
story:"Quảng Trị là địa bàn chiến đấu ác liệt trong cuộc kháng chiến chống Mỹ, cứu nước.",
spots:[
"Thành cổ Quảng Trị - nơi diễn ra cuộc chiến đấu 81 ngày đêm năm 1972.",
"Đôi bờ Hiền Lương - Bến Hải - biểu tượng của thời kỳ đất nước bị chia cắt."
]
},
{
name:"Huế",icon:"🏯",x:40,y:47,
region:"Miền Trung",
story:"Huế từng là kinh đô của triều Nguyễn, lưu giữ nhiều di sản văn hóa và kiến trúc cung đình.",
spots:[
"Đại Nội Huế - trung tâm của kinh đô triều Nguyễn.",
"Lăng Tự Đức và lăng Minh Mạng - các công trình kiến trúc triều Nguyễn."
]
},
{
name:"Đà Nẵng",icon:"🌊",x:43,y:52,
region:"Duyên hải miền Trung",
story:"Đà Nẵng gắn với sự kiện liên quân Pháp - Tây Ban Nha nổ súng tấn công năm 1858.",
spots:[
"Bảo tàng Đà Nẵng - nơi tìm hiểu lịch sử địa phương.",
"Di tích thành Điện Hải - công trình phòng thủ gắn với cuộc kháng chiến chống liên quân Pháp - Tây Ban Nha."
]
},
{
name:"Bình Định xưa",icon:"🐎",x:48,y:61,
region:"Nam Trung Bộ",
story:"Bình Định là quê hương phong trào Tây Sơn, gắn với người anh hùng áo vải Quang Trung - Nguyễn Huệ.",
spots:[
"Bảo tàng Quang Trung - lưu giữ tư liệu về phong trào Tây Sơn.",
"Điện thờ Tây Sơn Tam Kiệt - tưởng niệm các thủ lĩnh phong trào Tây Sơn."
]
},
{
name:"TP. Hồ Chí Minh",icon:"🚩",x:41,y:86,
region:"Nam Bộ",
story:"Thành phố gắn với Bến Nhà Rồng, nơi Nguyễn Tất Thành ra đi tìm đường cứu nước năm 1911, và sự kiện thống nhất đất nước năm 1975.",
spots:[
"Bến Nhà Rồng - nơi Nguyễn Tất Thành ra đi tìm đường cứu nước ngày 05/06/1911.",
"Dinh Độc Lập - địa điểm gắn với sự kiện ngày 30/04/1975.",
"Địa đạo Củ Chi - hệ thống địa đạo trong kháng chiến."
]
},
{
name:"Côn Đảo",icon:"🌺",x:53,y:94,
region:"Ngoài khơi Nam Bộ",
story:"Côn Đảo là nơi từng tồn tại hệ thống nhà tù, giam giữ nhiều chiến sĩ cách mạng.",
spots:[
"Nhà tù Côn Đảo - di tích lịch sử đặc biệt.",
"Nghĩa trang Hàng Dương - nơi yên nghỉ của nhiều chiến sĩ cách mạng, trong đó có Võ Thị Sáu."
]
}
];

// =============================================
// TAO KHU VUC BAN DO KHAM PHA
// =============================================

function createMapExplorer() {
    if (document.getElementById("vietnam-map-explorer")) return;

    const section = document.createElement("section");
    section.id = "vietnam-map-explorer";

    section.innerHTML = `
        <h2 style="text-align:center;color:#a51f19">
            🧭 KHÁM PHÁ BẢN ĐỒ VIỆT NAM
        </h2>

        <p style="text-align:center;margin:10px 0 25px">
            Chọn địa phương trên bản đồ hoặc trong danh sách để tìm hiểu lịch sử.
        </p>

        <div class="explorer-layout">
            <div>
                <div id="vietnam-explore-svg" class="explorer-map"></div>

                <h3 style="margin-top:15px">📍 Chọn địa danh</h3>

                <div id="vietnam-explore-list"></div>
            </div>

            <article id="vietnam-explore-detail">
                <h3>🇻🇳 Chào mừng bạn!</h3>
                <p>Chọn một điểm trên bản đồ hoặc một tỉnh/thành trong danh sách để khám phá.</p>
            </article>
        </div>

        <p style="font-size:12px;color:#777;text-align:center;margin-top:15px">
            Bản đồ sử dụng hình ảnh bản đồ tỉnh/thành Việt Nam do bạn cung cấp.
        </p>
    `;

    document.getElementById("games").insertAdjacentElement("afterend",section);

    renderVietnamExploreMap();
}

function renderVietnamExploreMap() {
    const map = document.getElementById("vietnam-explore-svg");
    const list = document.getElementById("vietnam-explore-list");

    if (!map || !list) return;

    map.innerHTML = `
        <img src="${HISTORY_MAP_IMAGE}"
             alt="Bản đồ tỉnh thành Việt Nam">

        ${explorationPlaces.map((p,i)=>`
            <button
                id="explore-dot-${i}"
                class="explorer-dot"
                style="left:${p.x}%;top:${p.y}%"
                onclick="showExplorationPlace(${i})"
                title="${p.name}">
            </button>
        `).join("")}
    `;

    list.innerHTML = explorationPlaces.map((p,i)=>`
        <button
            id="explore-list-${i}"
            onclick="showExplorationPlace(${i})">
            ${p.icon} ${p.name}
        </button>
    `).join("");
}

function showExplorationPlace(index) {
    const p = explorationPlaces[index];
    if (!p) return;

    playHistorySound("click");

    explorationPlaces.forEach((_,i)=>{
        const button = document.getElementById("explore-list-"+i);
        const dot = document.getElementById("explore-dot-"+i);

        if (button) {
            button.style.background = i===index ? "#d18d22":"#a91f19";
        }

        if (dot) {
            dot.classList.toggle("active",i===index);
        }
    });

    const detail = document.getElementById("vietnam-explore-detail");

    detail.innerHTML = `
        <h2>${p.icon} ${p.name}</h2>

        <p><strong>Khu vực:</strong> ${p.region}</p>

        <p>${p.story}</p>

        <h3>🏛️ Di tích và địa danh lịch sử</h3>

        <ol>
            ${p.spots.map(s=>`<li style="margin:9px 0">${s}</li>`).join("")}
        </ol>

        ${p.name==="Hải Phòng" ? `
            <h3>⭐ Nhân vật tiêu biểu: Nữ tướng Lê Chân</h3>
            <p>Bà gắn với vùng An Biên xưa, tham gia cuộc khởi nghĩa Hai Bà Trưng. Đền Nghè và tượng đài của bà là những địa điểm tưởng niệm tiêu biểu tại Hải Phòng.</p>
        `:""}
    `;

    detail.scrollIntoView({
        behavior:"smooth",
        block:"nearest"
    });
}

// =============================================
// AM THANH
// =============================================

function playHistorySound(type) {
    if (!historySoundEnabled) return;

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return;

        historyAudioContext =
            historyAudioContext || new AudioContextClass();

        if (historyAudioContext.state==="suspended") {
            historyAudioContext.resume();
        }

        const ctx = historyAudioContext;
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime;

        const frequencies =
            type==="correct" ? [660,880] :
            type==="wrong" ? [220,165] :
            type==="hint" ? [440,550] : [520];

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequencies[0],now);

        if (frequencies[1]) {
            oscillator.frequency.setValueAtTime(frequencies[1],now+.12);
        }

        gain.gain.setValueAtTime(.0001,now);
        gain.gain.exponentialRampToValueAtTime(.12,now+.025);
        gain.gain.exponentialRampToValueAtTime(.0001,now+.22);

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start(now);
        oscillator.stop(now+.23);

    } catch(error) {
        console.warn("Không thể phát âm thanh:",error);
    }
}

function toggleHistorySound() {
    historySoundEnabled = !historySoundEnabled;

    const button = document.getElementById("history-sound-toggle");

    if (button) {
        button.textContent = historySoundEnabled
            ? "🔊 Âm thanh: Bật"
            : "🔇 Âm thanh: Tắt";
    }

    if (historySoundEnabled) playHistorySound("click");
}

function addHistorySoundButton() {
    if (document.getElementById("history-sound-toggle")) return;

    const button = document.createElement("button");

    button.id = "history-sound-toggle";
    button.type = "button";
    button.textContent = "🔊 Âm thanh: Bật";
    button.onclick = toggleHistorySound;

    document.body.appendChild(button);
}

// =============================================
// KHOI TAO WEBSITE
// =============================================

function initializeHistoryUpgrade() {
    createCharacterLibrary();
    createMapExplorer();
    addHistorySoundButton();
}

if (document.readyState==="loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeHistoryUpgrade
    );
} else {
    initializeHistoryUpgrade();
}

console.log("HÀO KHÍ VIỆT NAM đã tải thành công!");
console.log("Đã có 4 trò chơi lịch sử.");
console.log("Đã tích hợp 2 bản đồ ảnh Việt Nam.");
console.log("Đã sửa chức năng chuyển trang.");
