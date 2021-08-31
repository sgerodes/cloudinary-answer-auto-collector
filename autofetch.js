if (!knowledge){
	var knowledge = {};
}


function find(){
	let question = document.getElementById("question__body").getElementsByTagName("p")[0].innerText;
	if (question in knowledge){
		console.log("X", knowledge[question]["X"]);
		console.log("✓", knowledge[question]["✓"]);
	} else {
		console.log("Not found");
	}
}

function gather() {
	let question = document.getElementById("question__body").getElementsByTagName("p")[0].innerText;
	if (!(question in knowledge)){
		knowledge[question] = {
			"X": new Set(), 
			"✓": new Set()
			}
	}


	let answers = Array.from(document
	.getElementsByClassName("choices__list")[0]
	.getElementsByTagName("li"))
	.map(e => {
		let ans = "\t";
		let text = e.innerText.replace("\n", "").replace("Your Answer", "");
		let icon_container = e.getElementsByClassName("choice__review")[0].getElementsByClassName("choice__icon")[0];
		if (icon_container){
			if (icon_container.getElementsByClassName("icon-delete").length > 0){
				ans = "X\t"
				knowledge[question]["X"].add(text);
			}	
			if (icon_container.getElementsByClassName("icon-check").length > 0){
				ans = "✓\t"
				knowledge[question]["✓"].add(text);
			}
		}
		ans += text;
		return ans;
	});

	let all = question;
	answers.forEach(a => all += "\n" + a);
	console.log(all+"\n\n");
	find();
}


var interval = setInterval(gather, 1000);

// clearInterval(interval);
