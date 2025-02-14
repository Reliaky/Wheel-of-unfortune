let question ={
	question: "What could this be?",
	sentence: ["_", "_", "_", "_", "_" ],
	options: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
	solution: ["h","e","l","l","o"]
};

function showQuestion(q){
	let titleDiv = document.getElementById("question")
	let qDiv = document.getElementById("sentence")

	titleDiv.textContent = q.question
	qDiv.textContent = ["_", "_", "_", "_", "_" ]


	let alts = document.querySelectorAll(".options")

	alts.forEach(function(element, index){
		element.textContent = q.options[index]

		//add connection to element clicked
		element.addEventListener("click", function(){
			if(q.solution.includes(q.options[index])){
				console.log("inside!")
				q.solution.indexOf(q.options[index])
				console.log(q.solution.indexOf(q.options[index]))
				s = q.sentence.splice(q.solution.indexOf(q.options[index]),1,q.options[index]);
				console.log(q.sentence)
				element.textContent = []
				B = q.sentence

			}
			else {
				console.log("Outside!")
				element.textContent = []
			}
		B = qDiv.textcontent
		});
	});

};

showQuestion(question);
