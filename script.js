document.addEventListener('DOMContentLoaded',()=>{
	//toggle navigation menu
	const navToggle= document.querySlelector(' .nav-toggle');
	const navlinks= document.queryselector('.nav-links');

	navToggle.addeventListener('click',()=>{ navLinks.classlist.toggle('nav-active');
					       });
	//Add event listeners to buttons
	const hireButton=document.querySelector('.button button:nth-child(1)');
	const cvButton=document.querySelector('.about-content button');
hireButton.addEventListener('click',()=> {
	alert('Thank you for showing interest. i will get in touch!');
});
 cvButton.addEventListener('click',() =>{ alert('Downloading Cv..');
});
});
