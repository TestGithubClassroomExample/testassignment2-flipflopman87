document.getElementById("submit").addEventListener("click", submit);

		function submit(){
			var firstName = document.getElementById("firstName").value;
			var lastName = document.getElementById("lastName").value;
			var state = document.getElementById("state").value;

			window.alert("Welcome Mr. "+firstName+" "+lastName+". We understand that you are from "+state+".");
			//window.alert("Hell yeah!")
		};
