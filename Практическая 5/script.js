// ===== ПОДСЧЁТ ИЗОБРАЖЕНИЙ =====
function updatePhotoCount() {
    const allItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    const countEl = document.getElementById('photo-count');
    if (countEl) {
        countEl.textContent = `Фотографий в галерее: ${allItems.length}`;
    }
}

// ===== ФИЛЬТРАЦИЯ =====
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        galleryItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        updatePhotoCount();
    });
});

// ===== ЛАЙКИ =====
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const countEl = this.querySelector('.like-count');
        let count = parseInt(countEl.textContent);

        if (this.classList.contains('liked')) {
            count--;
            this.classList.remove('liked');
        } else {
            count++;
            this.classList.add('liked');
        }
        countEl.textContent = count;
    });
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
updatePhotoCount();
