// УниМастер - JavaScript функционалности

$(document).ready(function() {
    // Инициализация
    initNavigation();
    initContactForm();
    initGallery();
    initAnimations();
    initReferences();
});

// Навигация
function initNavigation() {
    // Smooth scroll навигация
    $('.navbar-nav a[href^="#"]').on('click', function(e) {
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
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar-custom').addClass('navbar-scrolled');
        } else {
            $('.navbar-custom').removeClass('navbar-scrolled');
        }
    });
}

// Форма за контакт
function initContactForm() {
    $('.contact-form').on('submit', function(e) {
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
        
        setTimeout(function() {
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
    
    switch(type) {
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
    setTimeout(function() {
        $('.notification').fadeOut(500, function() {
            $(this).remove();
        });
    }, 5000);
}

// Галерия
function initGallery() {
    // Magnific Popup за галерията
    if ($('.gallery-item').length) {
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                titleSrc: function(item) {
                    return item.el.attr('data-title') || 'УниМастер - Проект';
                }
            }
        });
    }
}

// Анимации
function initAnimations() {
    // Fade in при скрол
    $(window).scroll(function() {
        $('.service-card, .equipment-card, .process-step').each(function() {
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
    $('.counter').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count');
        
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
}

// Референции
function initReferences() {
    window.showReferences = function() {
        // Референции по категории услуги
        var references = {
            'мазилка': [
                { name: 'Иван Петров', company: 'Строй ЕООД', phone: '+359 888 123 456' },
                { name: 'Мария Георгиева', company: 'Частен клиент', phone: '+359 887 654 321' }
            ],
            'замазка': [
                { name: 'Стоян Димитров', company: 'БГ Строй АД', phone: '+359 889 111 222' },
                { name: 'Петя Николова', company: 'Частен клиент', phone: '+359 886 333 444' }
            ],
            'бетон': [
                { name: 'Александър Йорданов', company: 'Индустри ЕООД', phone: '+359 885 555 666' }
            ],
            'шпакловка': [
                { name: 'Красимира Стоянова', company: 'Частен клиент', phone: '+359 884 777 888' }
            ],
            'изолация': [
                { name: 'Николай Василев', company: 'Топлоизолации АД', phone: '+359 883 999 000' }
            ],
            'строителство': [
                { name: 'Георги Петров', company: 'Мега Строй ООД', phone: '+359 882 111 333' }
            ]
        };
        
        var html = '<div class="modal fade" id="referencesModal" tabindex="-1">';
        html += '<div class="modal-dialog modal-lg">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<h5 class="modal-title">Референции от клиенти</h5>';
        html += '<button type="button" class="btn-close" data-bs-dismiss="modal"></button>';
        html += '</div>';
        html += '<div class="modal-body">';
        
        for (var service in references) {
            var serviceName = getServiceName(service);
            var serviceColor = getServiceColor(service);
            
            html += `<div class="reference-card ${service}-ref mb-4">`;
            html += `<h6 style="color: ${serviceColor}"><i class="fas fa-tools me-2"></i>${serviceName}</h6>`;
            
            references[service].forEach(function(ref) {
                html += '<div class="d-flex justify-content-between align-items-center border-bottom py-2">';
                html += `<div><strong>${ref.name}</strong><br><small class="text-muted">${ref.company}</small></div>`;
                html += `<a href="tel:${ref.phone}" class="btn btn-sm btn-outline-primary">${ref.phone}</a>`;
                html += '</div>';
            });
            
            html += '</div>';
        }
        
        html += '</div>';
        html += '<div class="modal-footer">';
        html += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        
        // Премахване на стар модал ако има такъв
        $('#referencesModal').remove();
        
        // Добавяне и показване на новия модал
        $('body').append(html);
        $('#referencesModal').modal('show');
    };
}

// Помощни функции
function getServiceName(serviceKey) {
    var names = {
        'мазилка': 'Мазилка по стени и тавани',
        'замазка': 'Замазки по подове',
        'бетон': 'Стефан бетон',
        'шпакловка': 'Шпакловка и боядисване',
        'изолация': 'Фасадна изолация',
        'строителство': 'Грубо строителство'
    };
    return names[serviceKey] || serviceKey;
}

function getServiceColor(serviceKey) {
    var colors = {
        'мазилка': '#3498db',
        'замазка': '#e67e22',
        'бетон': '#95a5a6',
        'шпакловка': '#2ecc71',
        'изолация': '#e74c3c',
        'строителство': '#34495e'
    };
    return colors[serviceKey] || '#2c3e50';
}

// Функция за копиране на телефон
function copyPhone(phone) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(phone).then(function() {
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
        btn.addEventListener('click', function(e) {
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

// Lightbox за снимки - работещ вариант
function initPhotoLightbox() {
    // Провери дали Magnific Popup е достъпен
    if (typeof $.fn.magnificPopup !== 'undefined') {
        $('.photo-item img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                titleSrc: function(item) {
                    return item.el.attr('alt') || 'УниМастер - Проект';
                }
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
        
        console.log('Magnific Popup инициализиран успешно');
    } else {
        // Backup - прост lightbox без библиотека
        console.log('Magnific Popup не е намерен, използвам прост lightbox');
        initSimpleLightbox();
    }
}

// Прост lightbox без външни библиотеки
function initSimpleLightbox() {
    const images = document.querySelectorAll('.photo-item img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
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
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeLightbox();
        }
    });
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Затвори с ESC клавиш
    document.addEventListener('keydown', function(e) {
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
$(document).ready(function() {
    console.log('DOM е готов, стартирам функциите...');
    
    initNavigation();
    initContactForm();
    initPhotoLightbox();
    initSimpleGallery(); // Работещите филтри
    initAnimations();
    initReferences();
});




