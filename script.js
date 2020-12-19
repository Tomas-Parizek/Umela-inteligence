historie[0] = localStorage.getItem("historie_uzivatele") ? JSON.parse(localStorage.getItem("historie_uzivatele")) : historie[0];
historie[1] = localStorage.getItem("historie_robota") ? JSON.parse(localStorage.getItem("historie_robota")) : historie[1];
zasoba = localStorage.getItem("zasoba") ? JSON.parse(localStorage.getItem("zasoba")) : zasoba;


for (var i = 0; i < historie[0].length; i++)
{
	var text = document.createElement("p");
	var text2 = document.createElement("p");

	text.innerHTML = historie[0][i];
	text2.innerHTML = historie[1][i];

	data.appendChild(text);
	data.appendChild(text2);
}

function ulozit() {
	localStorage.setItem("historie_uzivatele", JSON.stringify(historie[0]));
	localStorage.setItem("historie_robota", JSON.stringify(historie[1]));
	//localStorage.setItem("zasoba", JSON.stringify(zasoba));
	localStorage.setItem("zasoba", JSON.stringify(Object.assign({}, zasoba)));
}

function pridej()
{
	historie[0].push("Já: " + pole.value);
	historie[1].push("Robot: " + odpoved(pole.value));

	var text = document.createElement("p");
	text.innerHTML = historie[0][historie[0].length-1];
	data.appendChild(text);

	var text2 = document.createElement("p");
	text2.innerHTML = historie[1][historie[1].length-1];
	data.appendChild(text2);

	pole.value = "";
	ulozit();
}

function odpoved(vstup)
{
	var odpoved = "";
	vstup = vstup.trim();
	vstup = vstup.toLowerCase();
	vstup = format(vstup);

	if (vstup[vstup.length-1] == "?") odpoved = proOtazku(vstup);
	else odpoved = proOznameni(vstup);

	return odpoved;
}

function format(x)
{
	x = x.split(" ");
	x = x.join(" ");
	x = x.split(",");
	x = x.join("");
	x = x.split(".");
	x = x.join("");
	x = x.split("!");
	x = x.join("");
	x = x.split("?");
	x = x.join("");
	return x;
}