// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Latest News Preview (Top 3)
function displayLatestNews() {
    const latestNewsContainer = document.getElementById('latest-news');
    if (!latestNewsContainer) return;

    const latestNews = newsItems
        .filter(item => item.type === 'latest')
        .slice(0, 3);

    latestNewsContainer.innerHTML = latestNews.map(news => `
        <div class="news-card">
            <div class="news-date">${formatDate(news.date)}</div>
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        </div>
    `).join('');
}

// Team Filtering System
let currentFilterType = 'all';
let currentSubFilter = null;

function initializeTeamFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const subFiltersContainer = document.getElementById('sub-filters');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilterType = button.dataset.filter;
            currentSubFilter = null;

            // Show/hide sub-filters based on selection
            if (currentFilterType === 'all') {
                subFiltersContainer.innerHTML = '';
                subFiltersContainer.style.display = 'none';
                displayTeamMembers();
            } else {
                showSubFilters(currentFilterType);
            }
        });
    });
}

function showSubFilters(filterType) {
    const subFiltersContainer = document.getElementById('sub-filters');
    let values = [];
    let fieldName = '';

    switch (filterType) {
        case 'degree':
            values = getUniqueValues('degree').filter(d => d !== 'Professor');
            fieldName = '학위 과정';
            break;
        case 'department':
            values = getUniqueValues('department');
            fieldName = '소속';
            break;
        case 'research':
            values = getUniqueValues('research');
            fieldName = '연구 분야';
            break;
    }

    if (values.length > 0) {
        subFiltersContainer.style.display = 'block';
        subFiltersContainer.innerHTML = `
            <label>${fieldName}:</label>
            <div class="filter-buttons">
                ${values.map(value => `
                    <button class="sub-filter-btn" data-value="${value}">
                        ${value}
                    </button>
                `).join('')}
            </div>
        `;

        // Add event listeners to sub-filter buttons
        document.querySelectorAll('.sub-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSubFilter = btn.dataset.value;
                displayTeamMembers();
            });
        });
    }
}

function displayTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;

    let filteredMembers = [...teamMembers];

    // Apply filters
    if (currentFilterType !== 'all' && currentSubFilter) {
        filteredMembers = teamMembers.filter(member => {
            switch (currentFilterType) {
                case 'degree':
                    return member.degree === currentSubFilter;
                case 'department':
                    return member.department === currentSubFilter;
                case 'research':
                    return member.research.includes(currentSubFilter);
                default:
                    return true;
            }
        });
    }

    teamGrid.innerHTML = filteredMembers.map(member => `
        <div class="team-card">
            <h3 class="member-name">${member.name}</h3>
            <div class="member-role">${member.role}</div>
            <div class="member-info">
                ${member.semester ? `<p><strong>학기:</strong> ${member.semester}</p>` : ''}
                ${member.room ? `<p><strong>연구실:</strong> ${member.room}</p>` : ''}
                <p><strong>소속:</strong> ${member.department}</p>
                ${member.email ? `<p><strong>이메일:</strong> ${member.email}</p>` : ''}
                ${member.phone ? `<p><strong>연락처:</strong> ${member.phone}</p>` : ''}
            </div>
            ${member.research.length > 0 ? `
                <div class="research-tags">
                    ${member.research.map(r => `<span class="research-tag">${r}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// News Timeline
let currentNewsPeriod = 'latest';

function initializeNewsFilters() {
    const newsFilterButtons = document.querySelectorAll('.news-filter-btn');

    newsFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            newsFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentNewsPeriod = button.dataset.period;
            displayNewsTimeline();
        });
    });
}

function displayNewsTimeline() {
    const timeline = document.getElementById('news-timeline');
    if (!timeline) return;

    const filteredNews = newsItems.filter(item =>
        currentNewsPeriod === 'latest' ? item.type === 'latest' : item.type === 'archive'
    );

    timeline.innerHTML = filteredNews.map(news => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(news.date)}</div>
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        </div>
    `).join('');
}

// Publications Search (Placeholder)
function initializePublicationsSearch() {
    const searchInput = document.getElementById('pub-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // This is a placeholder - will be implemented when publications data is available
        console.log('Searching for:', searchTerm);
    });
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ko-KR', options);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayLatestNews();
    initializeTeamFilters();
    displayTeamMembers();
    initializeNewsFilters();
    displayNewsTimeline();
    initializePublicationsSearch();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
