
		function del(){
			var value=document.getElementById('screen').value;
			document.getElementById('screen').value=value.substr(0,value.length-1);
		}

		var two=document.getElementById('two');
		two.addEventListener('click',function(){
			var body=document.querySelector('body');
			var box=document.getElementById("box");
			body.classList.add('active1');
			body.classList.remove('active2');
			box.style.justifyContent='center';
		})
		var one=document.getElementById('one');
		one.addEventListener('click',function(){
			var body=document.querySelector('body');
			var box=document.getElementById("box");
			body.classList.remove('active1');
			body.classList.remove('active2');
      box.style.justifyContent='flex-start';

		})
		var three=document.getElementById('three');
		three.addEventListener('click',function(){
			var body=document.querySelector('body');
			var box=document.getElementById("box");
			body.classList.add('active2');
			body.classList.remove('active1');
      box.style.justifyContent='flex-end';

		})