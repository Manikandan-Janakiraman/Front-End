// skill-focused data model
const state = {
skills: { html: 92, css: 88, js: 80, bootstrap: 85 },
years: 6,
activeProjects: 3,
activities: [
{ date: '2025-11-10', activity: 'Deployed feature flag system', repo: 'ProjectPulse', impact: 'High' },
{ date: '2025-11-06', activity: 'Refactored auth module', repo: 'Portfolio', impact: 'Medium' }
]
};


function render() {
document.getElementById('htmlVal').textContent = state.skills.html + '%';
document.getElementById('cssVal').textContent = state.skills.css + '%';
document.getElementById('jsVal').textContent = state.skills.js + '%';
document.getElementById('bootVal').textContent = state.skills.bootstrap + '%';


document.getElementById('htmlBar').style.width = state.skills.html + '%';
document.getElementById('cssBar').style.width = state.skills.css + '%';
document.getElementById('jsBar').style.width = state.skills.js + '%';
document.getElementById('bootBar').style.width = state.skills.bootstrap + '%';


// at-a-glance
document.querySelectorAll('.metric')[0].textContent = state.years;
document.querySelectorAll('.metric')[1].textContent = state.activeProjects;


// activities
const tbody = document.getElementById('activityTable');
tbody.innerHTML = '';
state.activities.forEach(a => {
const tr = document.createElement('tr');
tr.innerHTML = `<td>${a.date}</td><td>${a.activity}</td><td>${a.repo}</td><td class=\"text-end\">${a.impact}</td>`;
tbody.appendChild(tr);
});
}


document.getElementById('refreshBtn').addEventListener('click', () => {
// simulated update: increment JS skill slightly to simulate learning
state.skills.js = Math.min(100, state.skills.js + 1);
render();
});


// initial render
render();
