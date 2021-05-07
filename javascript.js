/* function generateQuiz(quizQuestions, quizContainer, resultContainer, submitButton) {

    // The questions
    var myQuestions = [
        {
            quizQuestion: "What is Malik's favourite color?",
            answers: {
                a: 'Black',
                b: 'Blue',
                c: "Blue-black"
            },
            correctAnswer: 'a'
        },
        {
            quizQuestion: "What other thing does Malik identify as?",
            answers: {
                a: 'Broken mirror',
                b: 'Sane madman',
                c: 'A husband in the making!'
            },
            correctAnswer: 'b'
        }
    ]

    // Show Questions
    function showQuestions(quizQuestions, quizContainer) {
        // code will be here
        var output = [];
        var answers;

        // for each question
        for (var i = 0; i < quizQuestions.length; i++) {

            // first reset the line of answers
            answers = [];

            // for each available answer to this question...
            for (letter in quizQuestions[i].answers) {

                // add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + quizQuestions[i].answers[letter]
                    + '</label>'
                );
            }
        }

        output.push(
			'<div class="question">' + quizQuestions[i].quizQuestion + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
    }

    showQuestions(quizQuestions, quizContainer);

    // Show Result
    function showResult(quizQuestions, quizContainer, resultContainer) {
        // code will be here

    }

    showQuestions(quizQuestions, quizContainer);

    // When users click the submit button

    submitButton.onclick = function() {
        showResult(quizQuestions, quizContainer, resultContainer);
    }


}; */



window.addEventListener("load", () => {
    const params = (new URL(document.location)).searchParams;
    const myName = params.get("unknown");

    document.getElementById("malik").innerHTML = myName;
})
