let questions = [
    { 'question': 'Wer hat Html erfunden?', 'answer_1': 'Robbie Williams', 'answer_2': 'Lady Gaga', 'answer_3': 'Tim Berners-Lee', 'answer_4': 'Justin Bieber', 'answer_5': 3 },
    { 'question': 'Wie bindet man eine Webseite in einer Webseite?', 'answer_1': 'Mit dem Tag a', 'answer_2': 'Mit dem Tag b', 'answer_3': 'Mit dem Tag h1', 'answer_4': 'Mit dem Tag i', 'answer_5': 1 },
    { 'question': 'Wie erstellt man einen kursiven Text?', 'answer_1': 'Mit dem Tag c', 'answer_2': 'Mit dem Tag i', 'answer_3': 'Mit dem Tag table', 'answer_4': 'Mit dem Tag br', 'answer_5': 2 },
    { 'question': 'Wie ändert man die Schriftgröße?', 'answer_1': 'Mit der Eigenschaft color', 'answer_2': 'Mit der Eigenschaft font-weight', 'answer_3': 'TMit der Eigenschaft display', 'answer_4': 'Mit der Eigenschaft font-size', 'answer_5': 4 },
    { 'question': 'Wie ändert man die Hintergrundfarbe?', 'answer_1': 'der Eigenschaft Background ', 'answer_2': 'der Eigenschaft background-color', 'answer_3': 'der Eigenschaft color', 'answer_4': 'der Eigenschaft background-image', 'answer_5': 2 },
];
let result = [];

let currentQuestion = 0;

function render() {
    //nextCurrentPage(currentQuestion);
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML = ` <div class="card quiz-card">
    <img src="img/quizLogo.jpg" class="card-img-top" alt="...">
    <div class="card-body" id="card_body">
        <h5 class="card-title" id="allQuestions">Frage</h5>`;
    for (let i = 1; i < questions.length; i++) {
        document.getElementById('card_body').innerHTML += `<div class="card mb-2">
            <div class="card-body card-hover" id="card_body_in${i}" onclick=getRightColor(${i})>`;
        document.getElementById('allQuestions').innerHTML = questions[currentQuestion].question;
        document.getElementById('card_body_in' + i).innerHTML += questions[currentQuestion]['answer_' + i];
        document.getElementById('card_body_in' + i).innerHTML += `</div></div>`;
    }
    //document.getElementById('card_body').innerHTML += `</div></div>`;

    document.getElementById('card_body').innerHTML += `<div class="quesion-footer">
            <span><b>${currentQuestion + 1}</b> von <b>${questions.length}</b> Fragen</span> <button class="btn btn-primary" onclick="nextCurrentPage(${currentQuestion})">Nächste Frage</button>
        </div>
    </div>
</div>`;
}

function nextCurrentPage() {
    if (currentQuestion < questions.length) {
        currentQuestion++;
        render();
    }
}

function getRightColor(i) {
    if (i == questions[currentQuestion]['answer_' + 5]) {
        document.getElementById('card_body_in' + i).classList.add('bg-success');
        pushResult(i);
    } else {
        document.getElementById('card_body_in' + i).classList.add('bg-danger');
    }
}

function pushResult(key) {
    if (result.includes(key)) {
        alert('Sie haben schon geantwortet!!');
    } else {
        result.push(key);
    }
}