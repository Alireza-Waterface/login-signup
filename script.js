const submitBtn = document.querySelector('.submit-btn');
const changeBtn = document.querySelector('.change-btn');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const alert = document.querySelector('.alert');

const strings = {
	login: {
		form: {
			title: 'Login',
			btnAction: 'login',
			btnText: 'Login',
		},
		greeting: {
			title: 'Hello, Friend!',
			desc: 'Register with your personal details to use all website services',
			btnTxt: 'Sign Up',			
			btnAction: 'signup',
		},
	},
	signup: {
		form: {
			title: 'Create account',
			btnAction: 'signup',
			btnText: 'Submit',
		},
		greeting: {
			title: 'Welcome back!',
			desc: 'Have an account already? Enter your info to login to your account!',
			btnTxt: 'Login',
			btnAction: 'login',
		},
	},
};

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (emailInput.value && passwordInput.value) {
		// Do whatever you need to do with inputs
		alert.textContent = 'Successfully submitted!';
		alert.style.color = '#0f0';
		emailInput.value = '';
		passwordInput.value = '';
	} else {
		alert.textContent = 'All fields are required!';
		alert.style.color = '#f00';
	}
} );

const form = document.querySelector('.form');
const greeting = document.querySelector('.greeting');

const animateForm = () => {
	form.style.transform = 'scale(0.8)';
	form.style.opacity = '0';
	setTimeout(() => {
		form.style.transform = 'scale(1)';
		form.style.opacity = '1';
	}, 400);
};
const animateGreeting = () => {
	greeting.style.right = '-20%';
	greeting.style.opacity = '0';
	greeting.style.transform = 'scale(0.4)';
	setTimeout(() => {
		greeting.style.right = '0';
		greeting.style.opacity = '1';
		greeting.style.transform = 'scale(1)';
	}, 400)
};

changeBtn.addEventListener('click', (e) => {
	animateForm();
	animateGreeting();

	if (changeBtn.getAttribute('data-action') == 'signup') {
		setTimeout(() => {
			changeBtn.setAttribute('data-action', strings.signup.greeting.btnAction);
			document.querySelector('.form h2').textContent = strings.signup.form.title;
			document.querySelector('.forgot-pass').style.display = 'none';
			document.querySelector('.submit-btn').textContent = strings.signup.form.btnText;
			document.querySelector('.greeting .title').textContent = strings.signup.greeting.title;
			document.querySelector('.greeting .desc').textContent = strings.signup.greeting.desc;
			changeBtn.textContent = strings.signup.greeting.btnTxt;
		}, 400);
	} else {
		setTimeout(() => {
			changeBtn.setAttribute('data-action', strings.login.greeting.btnAction);
			document.querySelector('.form h2').textContent = strings.login.form.title;
			document.querySelector('.forgot-pass').style.display = 'inline';
			document.querySelector('.submit-btn').textContent = strings.login.form.btnText;
			document.querySelector('.greeting .title').textContent = strings.login.greeting.title;
			document.querySelector('.greeting .desc').textContent = strings.login.greeting.desc;
			changeBtn.textContent = strings.login.greeting.btnTxt;
		}, 400);
	}
});