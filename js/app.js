 const offsett = 1;
const scroollUp = document.querySelector('.scroll-up');
const scroollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scroollUpSvgPath.getTotalLength();

scroollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scroollUpSvgPath.style.transition = 'stroke-Dashoffset 20ms';

const  getTop = () => window.pageXOffset || document.documentElement.scrollTop;
 
const updateDashoffset = () =>{
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - ( getTop() * pathLength / height);

    scroollUpSvgPath.style.strokeDashoffset =  dashoffset;

};

 
window.addEventListener('scroll', ()=>{
    updateDashoffset();
    if( getTop() > offsett) {
        scroollUp.classList.add('scroll-up--active')
    } else {
        scroollUp.classList.remove('scroll-up--active')
    }
});

 
scroollUp.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});
















let unlock = true;

let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}





function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}


    
    // const iconMenu = document.querySelector('.menu__icon');
    // const menuBody = document.querySelector('.menu__body');
    // if(iconMenu) {
    //      iconMenu.addEventListener('click', function(e) {
    //         document.body.classList.toggle('_lock');
    //       iconMenu.classList.toggle('_active');
    //       menuBody.classList.toggle('_active');
    // });
    // }  


    

    // const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    // if(menuLinks.length > 0) {
    //     menuLinks.forEach(menuLink => {
    //         menuLink.addEventListener("click", onMenuLinkClick);
    //     });
    //     function onMenuLinkClick(e) {
    //         const menuLink = e.target;
    //         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
    //             const gotoBlock = document.querySelector(menuLink.dataset.goto);
    //             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

    //             if(iconMenu.classList.contains('_active')) {
    //                 document.body.classList.remove('_lock');
    //                 iconMenu.classList.remove('_active');
    //                 menuBody.classList.remove('_active');
          
    //             }


    //             window.scrollTo({
    //                 top: gotoBlockValue,
    //                 behavior:"smooth"
    //             });
    //             e.preventDefault();
    //         }
    //     }
    // }



	let changeThemeButtons = document.querySelectorAll('.changeTheme');  

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {  
        let theme = this.dataset.theme;  
        applyTheme(theme);  
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `./css/lightdarkcss/theme-${themeName}.css`);  
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';  
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';  
}




function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `./css/lightdarkcss/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme');  

if(activeTheme === null || activeTheme === 'light') {  
    applyTheme('light');
} else if (activeTheme === 'dark') {  
    applyTheme('dark');
}



 