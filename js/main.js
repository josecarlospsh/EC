const inputNum = document.getElementById('inputNum');
const contentNums = document.getElementById('contentNums');
const contentNumsinOrder = document.getElementById('contentNumsinOrder');
const addBtn = document.getElementById('addBtn');
const numList = [];

//Validar ingreso solo numeros
inputNum.onkeypress = function(event){ 
   	event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

//Agregar numero a la lista 
addBtn.onclick = function(event){ 
   	var numItem = inputNum.value;
   	if (numItem != '') {	
	   	if (inNums(numItem)){
	   		document.getElementById('errorMsg').innerHTML = '¡Numero ya existe en la lista! ¬_¬';
	   	}else {
			document.getElementById('errorMsg').innerHTML = '';
		   	numList.push(parseInt(numItem));
		   	var numEl = document.createElement('span');
			var numTxt = document.createTextNode(numItem);
			numEl.appendChild(numTxt);
			contentNums.appendChild(numEl);
			document.getElementsByClassName('ec-result')[0].style.display = 'block';
			showNums(numList);
	   	}
   	}
}

//Validar existencia de un numero en la lista 
function inNums(num){
	var existe = false;
  	for (var i = 0; i < numList.length; i++){
		if (numList[i] == num){
	        existe = true;
	        break;
	    }
  	}
  	return existe;
}

//Ordenamiento Burbuja
function bubbleSort(numList){
	for (var i = 0; i < numList.length - 1; i++ ) {
	    for (var j = 0; j < numList.length - i; j++ ) {
		    if ( numList[j] > numList[j+1] ) {
	            aux = numList[j];
	            numList[j] = numList[j+1];
	            numList[j+1] = aux;
		    }
	    }
  	}
  	return numList;
}

//Mostrar lista ordenada de menor a mayor
function showNums (numList) {
	var numListinOrder = bubbleSort(numList);
	contentNumsinOrder.innerHTML = '<span>'+ numListinOrder +'</span>';
}	