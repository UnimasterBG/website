// УниМастер - JSON конфигурация за лесно управление

// РЕФЕРЕНЦИИ ОТ КЛИЕНТИ
const referencesData = [
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

    // === НОВИ РЕФЕРЕНЦИИ ===
// Добави тези обекти в масива referencesData:
  // Референция 1
    {
        name: "Петко",
        phone: "+359878284629",
        company: "Крипс",
        service: "Измазване",
        category: "dovarshitelni"
    },


];

// ГАЛЕРИЯ СНИМКИ
const galleryData = [
    // Груб строеж
// === НОВИ СНИМКИ ===
// Добави тези обекти в масива galleryData:

  
    


];




// ЕКСПОРТ НА ДАННИТЕ
window.unimasterData = {
    references: referencesData,
    gallery: galleryData
};
