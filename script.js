// ====================== TRẮC NGHIỆM =========================
const questions = [
  {
    text: 'Câu 1. Mùa Chay bắt đầu khi nào?',
    choices: {
      A: 'Lễ Chúa Giêsu chịu Phép Rửa',
      B: 'Thứ Tư lễ Tro',
      C: 'Thứ Bảy Tuần Thánh',
      D: 'Tất cả đều sai',
    },
    correct: 'B',
  },
  {
    text: 'Câu 2. Mùa Vọng gồm 4 Chúa Nhật bắt đầu từ Kinh chiều I Chúa Nhật I Mùa Vọng đến Kinh chiều ngày nào?',
    choices: {
      A: 'Lễ Chúa Giêsu Chịu Phép Rửa',
      B: 'Thứ Tư lễ Tro',
      C: 'Vọng lễ Giáng Sinh',
      D: 'Vọng lễ Phục Sinh',
    },
    correct: 'C',
  },
  {
    text: 'Câu 3. Trong Mùa Giáng Sinh, chúng ta cần phải có tâm tình nào?',
    choices: {
      A: 'Hết lòng cảm tạ Thiên Chúa là Cha, đã thương sai Con Một đến cứu độ nhân loại',
      B: 'Không ngừng cộng tác với ơn Chúa để Mầu nhiệm Giáng Sinh đem lại ơn cứu độ cho bản thân và cho mọi người',
      C: 'Luôn canh tân cuộc sống để ngày càng nên xứng đáng với ơn cứu độ Chúa ban và nên con thảo của Người',
      D: 'Tất cả đều đúng',
    },
    correct: 'D',
  },
  {
    text: 'Câu 4. Lễ Chúa Giêsu chịu Phép Rửa được cử hành trong mùa nào của năm Phụng vụ?',
    choices: {
      A: 'Mùa Vọng',
      B: 'Mùa Giáng Sinh',
      C: 'Mùa Chay',
      D: 'Mùa Phục Sinh',
    },
    correct: 'B',
  },
  {
    text: 'Câu 5. Phụng Vụ Công Giáo gồm các mùa nào?',
    choices: {
      A: 'Mùa Vọng – Mùa Giáng Sinh – Mùa Chay – Mùa Phục Sinh – Mùa Thường Niên',
      B: 'Mùa Vọng – Mùa Giáng Sinh – Mùa Chay – Mùa Phục Sinh – Mùa Tạ Ơn',
      C: 'Mùa Chay – Mùa Giáng Sinh – Mùa Vọng – Mùa Gieo Hạt – Mùa Lễ Lá',
      D: 'Mùa Vọng – Mùa Chay – Mùa Giáng Sinh – Mùa Thu Hoạch – Mùa Thường Niên',
    },
    correct: 'A',
  },
  {
    text: 'Câu 6. Mùa nào dưới đây là thời gian Hội Thánh chuẩn bị tâm hồn tín hữu tham dự Mầu nhiệm Tử nạn - Phục sinh của Đức Kitô?',
    choices: {
      A: 'Mùa Vọng',
      B: 'Mùa Giáng Sinh',
      C: 'Mùa Chay',
      D: 'Mùa Phục Sinh',
    },
    correct: 'C',
  },
  {
    text: 'Câu 7. Mùa Vọng là thời gian người tín hữu chuẩn bị tâm hồn xứng đáng để làm gì?',
    choices: {
      A: 'Đón chờ và mừng Chúa Kitô đến lần thứ nhất (Đại lễ Giáng Sinh) tại Bêlem xứ Palestina',
      B: 'Hân hoan vì Chúa Kitô đã chiến thắng sự chết để sống lại vinh hiển',
      C: 'Tỉnh thức và sẵn sàng đón chờ Chúa đến lần thứ hai trong vinh quang (ngày quang lâm, ngày cánh chung)',
      D: 'Cả A và C đều đúng',
    },
    correct: 'D',
  },
  {
    text: 'Câu 8. Mùa nào là thời gian Hội Thánh hân hoan mừng kính Mầu nhiệm Nhập thể, Con Thiên Chúa đến ngự giữa trần gian?',
    choices: {
      A: 'Mùa Vọng',
      B: 'Mùa Giáng Sinh',
      C: 'Mùa Chay',
      D: 'Mùa Phục Sinh',
    },
    correct: 'B',
  },
  {
    text: 'Câu 9. Tư thế sẵn sàng và tỉnh thức trong Mùa Vọng được diễn tả như thế nào?',
    choices: {
      A: 'Sống ngay thẳng thật thà, không dối trá gian ngoa, nhưng hết lòng suy phục Thiên Chúa qua tiếng nói của lương tâm và lời Hội Thánh dạy bảo',
      B: 'Không thiếu sót việc bổn phận, sửa chữa những khuyết điểm như giận hờn, oán ghét, tị hiềm',
      C: 'Dứt khoát xa lánh kiêu ngạo, tự cao, ương ngạnh, khinh miệt bạn bè…',
      D: 'Tất cả đều đúng',
    },
    correct: 'D',
  },
  {
    text: 'Câu 10. Sau khi chịu Phép Rửa tại sông Gio-đan, Chúa Giêsu đi đâu?',
    choices: {
      A: 'Chúa Giêsu rao giảng Tin Mừng tại Ga-li-lê',
      B: 'Chúa Giêsu ăn chay ròng rã 40 đêm ngày trong hoang địa',
      C: 'Chúa Giêsu tiến vào đền thờ Giê-ru-sa-lem',
      D: 'Tất cả đều sai',
    },
    correct: 'B',
  },
];

// ====================== TỰ LUẬN =========================
const essayQuestions = [
  {
    text: 'Phụng vụ là gì?',
    keywords: [
      { word: ['thờ phượng thiên chúa'], point: 1 },
      { word: ['công khai'], point: 0.5 },
      { word: ['chính thức'], point: 0.5 },
    ],
    sample:
      'Phụng vụ là việc thờ phượng Thiên Chúa công khai và chính thức của toàn thể Hội Thánh.',
  },
  {
    text: 'Phụng Vụ gồm các việc thờ phượng nào?',
    keywords: [
      { word: ['thánh lễ'], point: 1 },
      { word: ['bí tích'], point: 1 },
      { word: ['giờ kinh'], point: 1 },
    ],
    sample: `Phụng vụ gồm các việc thờ phượng sau:
- Thánh lễ
- Các Bí Tích và Á Bí Tích (Phụ tích)
- Phụng Vụ các Giờ kinh`,
  },
];

// ====================== BIẾN =========================
let current = 0;
let scoreChoice = 0;
let totalTime = 15 * 60; // 15 phút
let globalTimer;
let userAnswers = [];

const quizContent = document.getElementById('quiz-content');
const timeDisplay = document.getElementById('time');

// ====================== ĐỊNH DẠNG THỜI GIAN =========================
function formatTime(sec) {
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}

// ====================== ĐỒNG HỒ =========================
function startGlobalTimer() {
  clearInterval(globalTimer);

  timeDisplay.textContent = formatTime(totalTime);

  globalTimer = setInterval(() => {
    totalTime--;
    timeDisplay.textContent = formatTime(totalTime);

    if (totalTime <= 0) {
      clearInterval(globalTimer);
      autoSubmit();
    }
  }, 1000);
}

// ====================== LOAD TRẮC NGHIỆM =========================
function loadQuestion() {
  const q = questions[current];

  quizContent.innerHTML = `
    <h5>${q.text}</h5>
    <div class="mt-3">
      ${Object.entries(q.choices)
        .map(
          ([k, v]) =>
            `<div class="choice" data-key="${k}"><strong>${k}.</strong> ${v}</div>`
        )
        .join('')}
    </div>

    <button id="skipBtn" class="btn btn-warning mt-3 w-100 fw-bold">
      Câu tiếp theo
    </button>
  `;

  document.querySelectorAll('.choice').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn.dataset.key, btn));
  });

  document.getElementById('skipBtn').addEventListener('click', () => {
    userAnswers.push({
      question: q.text,
      selected: 'Không trả lời',
      correct: q.correct,
    });
    nextQuestion();
  });
}

// ====================== XỬ LÝ CHỌN ĐÁP ÁN =========================
function handleAnswer(selectedKey) {
  const q = questions[current];

  userAnswers.push({
    question: q.text,
    selected: selectedKey,
    correct: q.correct,
  });

  const allChoices = document.querySelectorAll('.choice');
  allChoices.forEach(btn => {
    btn.style.pointerEvents = 'none';
    if (btn.dataset.key === q.correct) btn.classList.add('correct');
    else if (btn.dataset.key === selectedKey) btn.classList.add('wrong');
  });

  if (selectedKey === q.correct) scoreChoice++;

  const correctEl = [...allChoices].find(btn => btn.dataset.key === q.correct);
  correctEl.classList.add('blink');

  setTimeout(nextQuestion, 900);
}

// ====================== CHUYỂN CÂU =========================
function nextQuestion() {
  current++;
  if (current < questions.length) loadQuestion();
  else showEssayPart();
}

// ====================== HIỆN PHẦN TỰ LUẬN =========================
function showEssayPart() {
  const title = document.querySelector('.section-title');
  title.textContent = 'PHẦN II: TỰ LUẬN';
  title.style.display = 'block';

  let html = '';

  essayQuestions.forEach((q, i) => {
    html += `
      <h5 class="mt-3">${i + 1}. ${q.text}</h5>
      <textarea id="essay${i}" class="form-control mt-2" rows="4"
      placeholder="Nhập câu trả lời của bạn..."></textarea>
    `;
  });

  quizContent.innerHTML = `
    ${html}
    <button id="submitEssay" class="btn btn-primary mt-3 w-100">Nộp bài</button>
  `;

  document.getElementById('submitEssay').addEventListener('click', checkEssay);
}

// ====================== CHẤM TỰ LUẬN =========================
function checkEssay() {
  document.querySelector('.section-title').style.display = 'none';

  let totalEssayScore = 0;
  let detailsHTML = '';

  essayQuestions.forEach((q, i) => {
    const ans = document.getElementById(`essay${i}`).value.toLowerCase();
    let score = 0;

    q.keywords.forEach(item => {
      if (item.word.every(w => ans.includes(w))) score += item.point;
    });

    if (score > 5) score = 5;

    totalEssayScore += score;

    detailsHTML += `
      <div class="answer-box">
        <p><strong>${i + 1}. ${q.text}</strong></p>
        <p>Câu trả lời của bạn: <strong>${ans || 'Không trả lời'}</strong></p>
        <p>Đáp án mẫu:<br><strong>${q.sample.replace(
          /\n/g,
          '<br>'
        )}</strong></p>
      </div>
    `;
  });

  const avgEssayScore = (totalEssayScore / essayQuestions.length).toFixed(2);
  const choiceScore = ((scoreChoice / questions.length) * 5).toFixed(2);
  const total = (parseFloat(choiceScore) + parseFloat(avgEssayScore)).toFixed(
    1
  );

  showResults(choiceScore, avgEssayScore, total, detailsHTML);
}

// ====================== AUTO SUBMIT KHI HẾT GIỜ =========================
function autoSubmit() {
  clearInterval(globalTimer);

  // Lưu các câu trắc nghiệm còn lại là "Không trả lời"
  for (let i = current; i < questions.length; i++) {
    userAnswers.push({
      question: questions[i].text,
      selected: 'Không trả lời',
      correct: questions[i].correct,
    });
  }

  // Tự luận
  let totalEssayScore = 0;

  essayQuestions.forEach((q, i) => {
    const box = document.getElementById(`essay${i}`);
    const ans = box ? box.value.toLowerCase() : '';
    let score = 0;

    q.keywords.forEach(item => {
      if (item.word.every(w => ans.includes(w))) score += item.point;
    });

    if (score > 5) score = 5;

    totalEssayScore += score;
  });

  const avgEssayScore = (totalEssayScore / essayQuestions.length).toFixed(2);
  const choiceScore = ((scoreChoice / questions.length) * 5).toFixed(1);
  const total = (parseFloat(choiceScore) + parseFloat(avgEssayScore)).toFixed(1);

  let detailsHTML = '';
  essayQuestions.forEach((q, i) => {
    const ans = document.getElementById(`essay${i}`)?.value || 'Không trả lời';
    detailsHTML += `
      <div class="answer-box">
        <p><strong>${i + 1}. ${q.text}</strong></p>
        <p>Câu trả lời của bạn: <strong>${ans}</strong></p>
        <p>Đáp án mẫu:<br><strong>${q.sample.replace(
          /\n/g,
          '<br>'
        )}</strong></p>
      </div>
    `;
  });

  showResults(choiceScore, avgEssayScore, total, detailsHTML);
}

// ====================== HIỂN THỊ KẾT QUẢ =========================
function showResults(choiceScore, essayScore, total, detailsHTML) {
  // ẩn tiêu đề và đồng hồ
  const titleEl = document.querySelector('.title-quiz');
  if (titleEl) titleEl.style.display = 'none';
  const sectionTitle = document.querySelector('.section-title');
  if (sectionTitle) sectionTitle.style.display = 'none';
  const timerEl = document.querySelector('.timer');
  if (timerEl) timerEl.style.display = 'none';

  // build HTML cho phần xem lại trắc nghiệm
  let mcqReview = questions
    .map((q, i) => {
      const ua = userAnswers[i]; // có thể undefined nếu không trả lời
      const selected = ua ? ua.selected : null;
      const selectedText =
        selected && selected !== 'Không trả lời'
          ? q.choices[selected]
          : selected === 'Không trả lời'
          ? 'Không trả lời'
          : 'Chưa trả lời';
      const correctKey = q.correct;
      const correctText = q.choices[correctKey];

      // xác định class để tô màu (correct/wrong/neutral)
      let statusClass = 'text-muted';
      if (selected === correctKey) statusClass = 'text-success fw-bold';
      else if (selected === 'Không trả lời' || selected === null)
        statusClass = 'text-secondary';
      else statusClass = 'text-danger fw-bold';

      return `
      <div class="answer-box mb-3 p-3" style="border:1px solid #e6e6e6; border-radius:8px; background:#fff;">
        <p><strong>${i + 1}. ${q.text}</strong></p>
        <p>Đáp án của bạn: <span class="${statusClass}">${selectedText}</span></p>
        <p>Đáp án đúng: <strong style="color:#0b6e4f">${correctText}</strong></p>
      </div>
    `;
    })
    .join('');

  // Hiển thị tổng hợp: kết quả + xem lại trắc nghiệm + xem lại tự luận
  quizContent.innerHTML = `
    <h1 class="text-center text-success mb-3">Hoàn thành bài kiểm tra!</h1>

    <p class="text-center fs-5">Điểm trắc nghiệm: ${choiceScore}/5</p>
    <p class="text-center fs-5">Điểm tự luận: ${essayScore}/5</p>

    <hr>
    <p class="text-center fw-bold fs-4 color-red">Tổng điểm: ${total}/10</p>

    <h4 class="mt-4">Xem lại phần trắc nghiệm:</h4>
    ${mcqReview}

    <h4 class="mt-4">Xem lại phần tự luận:</h4>
    ${detailsHTML}

    <div class="text-center mt-3">
      <button class="btn btn-secondary me-2" onclick="location.reload()">Làm lại</button>
    </div>
  `;
}

// ====================== KHỞI TẠO =========================
loadQuestion();
startGlobalTimer();
