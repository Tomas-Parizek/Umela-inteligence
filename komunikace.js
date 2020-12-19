function proOtazku(a)
{
	return "";
}

function proOznameni(a)
{
	var z = "";
	if (v(a, zasoba["pozdrav"])) z += vyber(zasoba["pozdrav"]);
	z = (z != "") ? z[0].toUpperCase() + z.substring(1, z.length) : "";
	
	return z;
}

/////////////////////////////////////////////////////////////////////////////////////

function v (a, b) // je a v poli b?
{
	for (var i in b)
	{
		if (b[i] == a) return true;
	}
	return false;
}

function naZacatku (a, b) // je a na začátku b?
{
	if (b.substring(0, a.length) == a) return true;
	else return false;
}

function naKonci (a, b) // je a na konci b?
{
	if (b.substring(b.length - a.length, b.length) == a) return true;
	else return false;
}

function obsahuje (a, b) // je a obsaženo v b?
{
	if (b.includes(a)) return true;
	else return false;
}

function naZacatkuZ (a, b) // je slovo na začátku a v poli b?
{
	for (var i of b)
	{
		if (naZacatku(i, a)) return true;
	}
	return false;
}

function naKonciZ (a, b) // je slovo na konci a v poli b?
{
	for (var i of b)
	{
		if (naKonci(i, a)) return true;
	}
	return false;
}

function obsahujeZ (a, b) // nějaké slovo ve stringu a je obsaženo v poli b
{
	for (var i of b)
	{
		if (obsahuje(i, a)) return true;
	}
	return false;
}

function nahodne (a, b)
{
	return Math.floor((Math.random() * (b - a + 1)) + a);
}

function vyber(a)
{
	return a[nahodne(0, a.length-1)];
}

function odstranZacatek(string, delka)
{
	return string.substr(delka, string.length);
}

function multiSplit (text, separator)
{
	var pole = [];
	var vysledek = [];
	pole[0] = text.split(separator[0]);
	for (var i = 0; i < separator.length; i++)
	{
		pole[i+1] = [];
		for (var j = 0; j < pole[i].length; j++)
		{
			pole[i+1] = pole[i+1].concat(pole[i][j].split(separator[i]));
		}
	}

	for (var i of pole[pole.length-1])
	{
		if (i != "")
			vysledek.push(i);
	}

	return vysledek;
}

function formatVstupu (text, format)
{
	for (var i of format)
	{
		if (!obsahuje(i, text)) return false;
	}
	for (var i = 0; i < format.length; i++)
	{
		if (i != format.length-1)
			if (text.indexOf(format[i]) > text.indexOf(format[i+1]))
				return false;
	}
	return multiSplit(text, format);
}

function formatVstupu2 (text, format)
{
	for (var i of format)
	{
		if (typeof i == "object")
		{
			if (naZacatkuZ(text, i))
			{
				text = odstranZacatek(text, )
			} //Pokud je formatovaci separator na zacatku
			else if (obsahujeZ(text, i))
			{

			} //Pokud je nějaké slovo ve stringu text obsaženo v poli i
			else return false; //Pokud separotor vubec neni obsazen v textu
		}
		else if (typeof i == "string") alert("Je to string!");
	}
}