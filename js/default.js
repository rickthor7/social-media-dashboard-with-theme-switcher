(() => {
	function setTheme(themeName) {
		localStorage.setItem('theme', themeName);
		document.documentElement.className = themeName;
	}

	function toggleTheme() {
		if (localStorage.getItem('theme') === 'theme-light') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	}

	if (localStorage.getItem('theme') === 'theme-light') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
	document.getElementById('theme-checkbox').addEventListener('change', toggleTheme, false);
})();