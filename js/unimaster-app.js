

// Навигация
function initNavigation() {
    // Smooth scroll навигация
    $('.navbar-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        if ($target.length) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - 70
            }, 800, 'swing');
        }
    });

    // Промяна на навигацията при скрол
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        
        if (scrollDistance > 100) {
            $('.navbar-custom').addClass('navbar-scrolled');
        } else {
            $('.navbar-custom').removeClass('navbar-scrolled');
        }
        
        // Актуализиране на активния линк при скролиране
        $('.nav-link').each(function () {
            var targetAttr = $(this).attr('href');
            if(targetAttr && targetAttr.startsWith('#') && targetAttr.length > 1) {
                var targetSection = $(targetAttr);
                if (targetSection.length) {
                    var sectionTop = targetSection.offset().top - 120;
                    var sectionBottom = sectionTop + targetSection.outerHeight();
                    
                    if (scrollDistance >= sectionTop && scrollDistance < sectionBottom) {
                        $('.nav-link').removeClass('active');
                        $(this).addClass('active');
                    }
                }
            }
        });
    });
}

// Форма за контакт
function initContactForm() {
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();

        var formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            service: $('#service').val(),
            area: $('#area').val(),
            message: $('#message').val()
        };

        // Валидация
        if (!formData.name || !formData.phone) {
            showNotification('Моля попълнете задължителните полета!', 'error');
            return;
        }

        // Проверка за телефонен номер
        if (!isValidPhoneNumber(formData.phone)) {
            showNotification('Моля въведете валиден телефонен номер!', 'error');
            return;
        }

        // Симулация на изпращане
        showNotification('Изпращам запитването...', 'info');

        setTimeout(function () {
            // Тук би се извикала реална функция за изпращане
            sendContactForm(formData);
        }, 1500);
    });
}

// Изпращане на форма (симулация)
function sendContactForm(data) {
    // В реална ситуация тук би се направила AJAX заявка
    console.log('Данни от формата:', data);

    // Генериране на съобщение за WhatsApp/Viber
    var message = generateWhatsAppMessage(data);

    showNotification('Благодарим за запитването! Ще се свържем с Вас скоро.', 'success');

    // Изчистване на формата
    $('.contact-form')[0].reset();

    // Опция за директно изпращане към WhatsApp
    if (confirm('Искате ли да изпратите запитването директно в WhatsApp?')) {
        window.open('https://wa.me/359899172879?text=' + encodeURIComponent(message), '_blank');
    }
}

// Генериране на съобщение за WhatsApp
function generateWhatsAppMessage(data) {
    var message = `🏗️ НОВА ЗАЯВКА ЗА ОФЕРТА - УниМастер\n\n`;
    message += `👤 Име: ${data.name}\n`;
    message += `📞 Телефон: ${data.phone}\n`;

    if (data.service) {
        message += `🔧 Услуга: ${data.service}\n`;
    }

    if (data.area) {
        message += `📏 Квадратура: ${data.area} кв.м.\n`;
    }

    if (data.message) {
        message += `💬 Съобщение: ${data.message}\n`;
    }

    message += `\n⏰ Време на запитването: ${new Date().toLocaleString('bg-BG')}`;

    return message;
}

// Валидация на телефонен номер
function isValidPhoneNumber(phone) {
    var phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Показване на нотификации
function showNotification(message, type = 'info') {
    // Премахване на стари нотификации
    $('.notification').remove();

    var alertClass = 'alert-primary';
    var icon = 'fas fa-info-circle';

    switch (type) {
        case 'success':
            alertClass = 'alert-success';
            icon = 'fas fa-check-circle';
            break;
        case 'error':
            alertClass = 'alert-danger';
            icon = 'fas fa-exclamation-circle';
            break;
        case 'warning':
            alertClass = 'alert-warning';
            icon = 'fas fa-exclamation-triangle';
            break;
    }

    var notification = `
        <div class="alert ${alertClass} notification fixed-top text-center" style="z-index: 9999; top: 80px;">
            <i class="${icon} me-2"></i>${message}
        </div>
    `;

    $('body').prepend(notification);

    // Автоматично скриване след 5 секунди
    setTimeout(function () {
        $('.notification').fadeOut(500, function () {
            $(this).remove();
        });
    }, 5000);
}



// Анимации
function initAnimations() {
    // Fade in при скрол
    $(window).scroll(function () {
        $('.service-card, .equipment-card, .process-step').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in-up');
            }
        });
    });

    // Брояч анимация
    $('.counter').each(function () {
        var $this = $(this);
        var countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });
}

// Зареждане на референции (Hardcoded data for reliability)
function loadReferencesFromJSON() {
    const container = $('#references-container');
    if (!container.length) return;

    // Данни за референциите
    const references = [
        {
            name: "Кристина Сунгарска",
            phone: "+359882021440",
            company: "Частен клиент",
            service: "Строителни работи",
            category: "grub-stroej"
        },
        {
            name: "Илиян Марков",
            phone: "+359878831977",
            company: "Къща в Филиповци",
            service: "Строителство",
            category: "grub-stroej"
        },
        {
            name: "Крипс Петко",
            phone: "+359878284629",
            company: "Частен клиент",
            service: "Строителни услуги",
            category: "dovarshitelni"
        },
        {
            name: "Иван Иванов",
            phone: "+359896834326",
            company: "Марка Röfix",
            service: "Мазилка и изолация",
            category: "dovarshitelni"
        },
        {
            name: "Стефан Личев",
            phone: "+359896655135",
            company: "Строителна фирма 'Вечил 1' ООД",
            service: "Строителство",
            category: "grub-stroej"
        },
        {
            name: "Иво Изолации Вебер",
            phone: "+359887808876",
            company: "Изолации Вебер",
            service: "Топлоизолация",
            category: "gotovi"
        },
        {
            name: "Петко",
            phone: "+359878284629",
            company: "Крипс",
            service: "Измазване",
            category: "dovarshitelni"
        }
    ];

    container.html(''); // Изчистване

    references.forEach(function (ref) {
        const card = `
            <div class="col-lg-6 col-md-12 mb-4">
                <div class="reference-card h-100">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 class="mb-1 fw-bold">${ref.name}</h5>
                            <div class="mb-2 text-muted">
                                <i class="fas fa-building me-1"></i> ${ref.company}
                            </div>
                            <span class="badge bg-light text-dark border">
                                <i class="fas fa-tools me-1"></i> ${ref.service}
                            </span>
                        </div>
                        <a href="tel:${ref.phone}" class="btn btn-primary btn-sm whitespace-nowrap ms-2 d-flex align-items-center">
                            <i class="fas fa-phone me-2"></i> ${ref.phone}
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.append(card);
    });
    console.log('References loaded successfully (Internal Data).');
}

// Функция за копиране на телефон
function copyPhone(phone) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(phone).then(function () {
            showNotification('Телефонът е копиран в клипборда!', 'success');
        });
    } else {
        // Fallback за стари браузъри
        var textArea = document.createElement('textarea');
        textArea.value = phone;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Телефонът е копиран!', 'success');
    }
}

// Експорт на функции за глобално използване
window.UnimasterApp = {
    showReferences: showReferences,
    copyPhone: copyPhone,
    showNotification: showNotification
};

// Работещи филтри за галерията
function initSimpleGallery() {
    console.log('Инициализирам галерията...');

    // Намери всички бутони и снимки
    const filterBtns = document.querySelectorAll('.gallery-filter');
    const photos = document.querySelectorAll('.gallery-photo');

    console.log('Намерих', filterBtns.length, 'бутона и', photos.length, 'снимки');

    // Добави event listener към всеки бутон
    filterBtns.forEach((btn, index) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const filter = this.getAttribute('data-filter');
            console.log('Натиснат филтър:', filter);

            // Премахни активен клас от всички бутони
            filterBtns.forEach(b => b.classList.remove('active'));

            // Добави активен клас на натиснатия бутон
            this.classList.add('active');

            // Филтрирай снимките
            photos.forEach(photo => {
                if (filter === 'all') {
                    // Покажи всички снимки
                    photo.classList.remove('hidden');
                    console.log('Показвам всички снимки');
                } else {
                    // Провери дали снимката има нужния клас
                    if (photo.classList.contains(filter)) {
                        photo.classList.remove('hidden');
                        console.log('Показвам снимка с клас:', filter);
                    } else {
                        photo.classList.add('hidden');
                        console.log('Скривам снимка без клас:', filter);
                    }
                }
            });
        });
    });
}

// Галерия Lightbox
function initPhotoLightbox() {
    // ВИНАГИ използвай нашия къстъм lightbox, защото работи по-добре с текущия HTML
    console.log('Force initializing Simple Lightbox...');
    initSimpleLightbox();
}

// Прост lightbox без външни библиотеки
function initSimpleLightbox() {
    console.log('Initializing Delegated Lightbox...');
    // Използваме делегиране на събития за да хванем кликове дори върху динамично добавени елементи
    document.body.addEventListener('click', function (e) {
        // Проверяваме дали кликнатият елемент е картинка вътре в .photo-item
        if (e.target.tagName === 'IMG' && e.target.closest('.photo-item')) {
            e.preventDefault();
            console.log('Opening lightbox for:', e.target.src);
            openLightbox(e.target.src, e.target.alt);
        }
    });
}

// Създай lightbox modal
function openLightbox(src, alt) {
    // Създай lightbox HTML
    const lightboxHTML = `
        <div id="lightbox-overlay" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        ">
            <div style="position: relative; max-width: 90%; max-height: 90%;">
                <img src="${src}" alt="${alt}" style="
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                ">
                <button id="lightbox-close" style="
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    background: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    font-size: 20px;
                    font-weight: bold;
                    color: #333;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                ">&times;</button>
            </div>
        </div>
    `;

    // Добави към body
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // Добави event listeners за затваряне
    const overlay = document.getElementById('lightbox-overlay');
    const closeBtn = document.getElementById('lightbox-close');

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Затвори с ESC клавиш
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Затвори lightbox
function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay) {
        overlay.remove();
    }
}


// Инициализация - ВАЖНО: изпълни след като DOM е готов
$(document).ready(function () {
    console.log('DOM готов. Стартирам критични функции...');

    // Зареждаме данните веднага
    // try {
    //     loadReferencesFromJSON();
    // } catch (e) { console.error('References load failed:', e); }

    try {
        initMobileMenu();
    } catch (e) { console.error('Mobile menu init failed:', e); }

    try {
        initSimpleGallery(); // Важно за бутоните
    } catch (e) { console.error('Gallery init failed:', e); }
});

// Пълна инициализация след зареждане на всички ресурси (снимки и т.н.)
$(window).load(function () {
    console.log('Window loaded. Starting visual heavy apps...');

    try {
        initNavigation();
    } catch (e) { console.error('Navigation init failed:', e); }

    try {
        initContactForm();
    } catch (e) { console.error('Contact init failed:', e); }

    try {
        initPhotoLightbox();
    } catch (e) { console.error('Lightbox init failed:', e); }

    try {
        initAnimations();
    } catch (e) { console.error('Animations init failed:', e); }
});

// Backup: Mobile Menu Logic
function initMobileMenu() {
    console.log('Initializing mobile menu...');

    // Prevent multiple bindings
    $('#mobile-menu-btn').off('click').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        var $target = $(target);

        if ($target.hasClass('show')) {
            $target.removeClass('show').hide();
            $(this).removeClass('active');
        } else {
            $target.addClass('show').show();
            $(this).addClass('active');
        }
    });

    $('.mobile-nav-link').off('click').on('click', function () {
        if ($('#mobile-menu-btn').is(':visible')) {
            $('#navbarNav').removeClass('show').hide();
            $('#mobile-menu-btn').removeClass('active');
            
            try { $('#navbarNav').collapse('hide'); } catch(e) {}
        }
    });

    $(document).off('click.mobileMenu').on('click.mobileMenu', function (e) {
        if (!$(e.target).closest('.navbar').length) {
            if ($('#mobile-menu-btn').is(':visible') && $('#navbarNav').hasClass('show')) {
                $('#navbarNav').removeClass('show').hide();
                $('#mobile-menu-btn').removeClass('active');
                try { $('#navbarNav').collapse('hide'); } catch(e) {}
            }
        }
    });

    // Fix desktop resize bug when using jQuery hide
    $(window).resize(function() {
        if (window.innerWidth >= 992) {
            $('#navbarNav').css('display', '');
            $('#mobile-menu-btn').removeClass('active');
        }
    });
}




