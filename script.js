function toggleMenu() {
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}
// Function to check if an element is in viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Function to handle scroll events
function handleScroll() {
	const sections = document.querySelectorAll('.section');
	sections.forEach(section => {
		if (isInViewport(section)) {
			section.classList.add('visible');
		} else {
			section.classList.remove('visible');
		}
	});
}

// Listen for scroll events
document.addEventListener('scroll', handleScroll);

// Initial check for visibility on page load
document.addEventListener("DOMContentLoaded", function () {
const observer = new IntersectionObserver(
(entries, observer) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
  entry.target.classList.add("visible");
  observer.unobserve(entry.target);
}
});
},
{
threshold: 0.1, // Trigger when 10% of the section is visible
}
);

document.querySelectorAll(".section").forEach((section) => {
observer.observe(section);
});
});