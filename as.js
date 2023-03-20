
	let form=document.querySelector('form');
	
	form.addEventListener('submit',function(e){
		e.preventDefault();
		let a = parseInt(document.getElementById('num1').value);
		let b = parseInt(document.getElementById('num2').value);
		let c = parseInt(document.getElementById('num3').value);
		 let asen =document.querySelector('#asen');
		 if((a<b)&&(a<c)){
			if(b<c){
				asen.innerHTML=`${a},${b},${c}`;
			}
		 }
		 else if((b<a)&&(b<c)){
			 if(a<c){
				 asen.innerHTML=`${b},${a},${c}`;
			 }
		 }
		 else if((c<b)&&(c<a)){
			 if(b<a){
				asen.innerHTML=`${c},${b},${a}`;
				 
			 }
		 }	
		 else{
			 document.write("none");
		 }
		 
		 
	})