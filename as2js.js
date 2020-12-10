function changeColor1(id)
{
  document.getElementById(id).style.color = "#ffffff"; // forecolor
  document.getElementById(id).style.backgroundColor = "#1abc9c"; // backcolor
  document.getElementById(id).style.font = "italic bold 24px calibri,serif";
  document.getElementById(id).style.border = "thick solid #16a085";
  
}

function changeColor2(id)
{
  document.getElementById(id).style.color = "#ffffff"; // forecolor
  document.getElementById(id).style.backgroundColor = "#3498db"; // backcolor
  document.getElementById(id).style.font = "italic bold 24px calibri,serif";
  document.getElementById(id).style.border = "thick solid #2980b9";
  
  
}

function changeColor3(id)
{
  document.getElementById(id).style.color = "#ffffff"; // forecolor
  document.getElementById(id).style.backgroundColor = "#9b59b6"; // backcolor
  document.getElementById(id).style.font = "italic bold 24px calibri,serif";
  document.getElementById(id).style.border = "thick solid #8e44ad";
  
}

function changeColor4(id)
{
  document.getElementById(id).style.color = "#ffffff"; // forecolor
  document.getElementById(id).style.backgroundColor = "#e74c3c"; // backcolor
  document.getElementById(id).style.font = "italic bold 24px calibri,serif";
  document.getElementById(id).style.border = "thick solid #c0392b";
  
}



function array(){
	var qa = new Array();
    qa[0] = "But man is not made for defeat. A man can be destroyed but not defeated. -Ernest Hemingway";
    qa[1] = "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. -Henry James";
    qa[2] = "Keep your face always toward the sunshine - and shadows will fall behind you. -Walt Whitman";
    qa[3] = "Love has no age, no limit; and no death. -John Galsworthy";
	qa[4] = "You can't blame gravity for falling in love. -Albert Einstein";
	qa[5] = "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead";
	qa[6] = "No matter how far we come, our parents are always in us. -Brad Meltzer";
	qa[7] = "My heroes are and were my parents. I can’t see having anyone else as my heroes. -Michael Jordan";
	qa[8] = "The good times of today, are the sad thoughts of tomorrow. -Bob Marley";
	
    var ran = qa[Math.floor(Math.random() * qa.length)];
	
	document.write(ran);

}

function convert(valNum) {
	
	var x = document.getElementById("kgtolb").selected;
	var y = document.getElementById("lbtokg").selected;
	
	if (y===true) {
		
		document.getElementById("outputt").innerHTML = valNum/2.2046;
		
		
} else { 
    
	document.getElementById("outputt").innerHTML = valNum*2.2046;
    
}
    
}

//Data
var data = new Array();
   
	
	
function inputTextforMagicBox(){
	
	var x = document.getElementById("inputt3").value;
	
	data = x.split(",");
	
}


function magicArray(){
	
	

	
	for (i=0;i<data.length;i++)
    {
		
			document.write(data[i] + ", ");
		
      
    }

}

function deleteAll() {
    document.getElementById("edit").innerHTML = "";
}

function showAll(){
	
	document.getElementById("edit").innerHTML = data;
}

	
var click = 1;
function upplowCase(){
	
	var data2 = data;
	
	if (click == 1){
		for (i=0;i<data2.length;i++) {
		   data2[i] = " "+data[i].toUpperCase();
	       click =2;
		}
	}else {
		for (i=0;i<data2.length;i++) {
		  data2[i] = " "+data[i].toLowerCase();
	      click =1;
	    }
	
    }
	
	
	document.getElementById("edit").innerHTML = data2;
	

	
}


function asort(){
	
	
	
	var names = data;
    


    names.sort();
	
	document.getElementById("edit").innerHTML = names;
    

	
}	

function shuffle(){
	
	var names = data;
	
	names.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("edit").innerHTML = names;
}


function myFunction() {
  
  max();
}

function max()
{
	var str = document.getElementById("inputt2").value;
	
	
    var temp = new Array();
	
    // this will return an array with strings "1", "2", etc.
    temp = str.split(",");
	
	document.getElementById("maxout").innerHTML = Math.max.apply(Math, temp);
	
	document.getElementById("minout").innerHTML = Math.min.apply(Math, temp);
	
	var total = 0;
    for(i=0; i<temp.length; i++){
        total = total + parseInt(temp[i]);
    }
	
	document.getElementById("sumout").innerHTML = total;
	
	document.getElementById("avout").innerHTML = total/2;
	
	document.getElementById("revout").innerHTML = temp.reverse();
	
	
}
