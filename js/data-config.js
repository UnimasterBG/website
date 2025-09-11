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
    { 
        filename: "05becb29-06ef-4526-b1a8-05deeb86cbb1.jpg", 
        title: "Строеж под скеле", 
        category: "grub", 
        alt: "Строеж под скеле"
    },
    { 
        filename: "1233a765-bec0-4399-acf7-fdbd7913844e.jpg", 
        title: "Строеж в планински терен", 
        category: "grub", 
        alt: "Строеж в планински терен"
    },
    { 
        filename: "73fa3a55-8c8d-46a1-b311-222498685d22.jpg", 
        title: "Строителна площадка с кран", 
        category: "grub", 
        alt: "Строителна площадка с кран"
    },
    { 
        filename: "d0d0d713-9ae1-4447-8b4b-1eb42dc21edc.jpg", 
        title: "Жилищен комплекс в строеж", 
        category: "grub", 
        alt: "Жилищен комплекс в строеж"
    },
    { 
        filename: "cdfdbaff-c6c5-4d3f-ba06-765039bc39e0.jpg", 
        title: "Бетонна плоча с арматура", 
        category: "grub", 
        alt: "Бетонна плоча с арматура"
    },
    
    // Довършителни работи
    { 
        filename: "d5ff5d1e-d1ae-4dcc-9ec3-56d9a3853585.jpg", 
        title: "Замазка по подове", 
        category: "dovar", 
        alt: "Замазка по подове"
    },
    
    // Техника
    { 
        filename: "0a60310c-1d7b-42cb-988f-5f811f008a0a.jpg", 
        title: "Бобкат на строителна площадка", 
        category: "tech", 
        alt: "Бобкат на строителна площадка"
    },
    { 
        filename: "3de7c49f-a768-469f-8e8e-d63a5f6d7a1b.jpg", 
        title: "Помпа за бетон на обект", 
        category: "tech", 
        alt: "Помпа за бетон на обект"
    },
    { 
        filename: "6b0bbb7b-858e-4864-adef-9180e734a044.jpg", 
        title: "Строителна техника на обект", 
        category: "tech", 
        alt: "Строителна техника на обект"
    },
    { 
        filename: "5d597a4d-eee8-45d7-ac79-12cabd3847a0.jpg", 
        title: "Бетоновоз Mercedes", 
        category: "tech", 
        alt: "Бетоновоз Mercedes"
    },
    { 
        filename: "673ad788-0209-4ead-8a89-10112d3d4100.jpg", 
        title: "Машина за мазилка PFT", 
        category: "tech", 
        alt: "Машина за мазилка PFT"
    },
    { 
        filename: "9124177b-b131-4724-9657-0eb3fc0563c9.jpg", 
        title: "Бобкат Thomas", 
        category: "tech", 
        alt: "Бобкат Thomas"
    },
    { 
        filename: "8495c786-d9dc-4d9f-afca-5fe46306a061.jpg", 
        title: "Строителен кран", 
        category: "tech", 
        alt: "Строителен кран"
    },
    { 
        filename: "a3adaeb1-1af4-4114-b930-635d95481708.jpg", 
        title: "Машина PFT за мазилка", 
        category: "tech", 
        alt: "Машина PFT за мазилка"
    },
    { 
        filename: "45442dfa-da3c-4b60-8f00-45b9ad1f0014.jpg", 
        title: "Специална строителна машина", 
        category: "tech", 
        alt: "Специална строителна машина"
    },
    { 
        filename: "ba329bfe-edba-4381-92d9-d0b48df2ffa5.jpg", 
        title: "Багер Kubota", 
        category: "tech", 
        alt: "Багер Kubota"
    },
    { 
        filename: "5cc78958-fd7f-4311-8652-4fcf5be62499.jpg", 
        title: "Жираф за шпакловка", 
        category: "tech", 
        alt: "Жираф за шпакловка"
    },
    
    // Готови обекти
    { 
        filename: "4f604b5a-109d-438e-9371-5f6494236123.jpg", 
        title: "Завършена жилищна сграда", 
        category: "ready", 
        alt: "Завършена жилищна сграда"
    },
    { 
        filename: "96e6e9a0-9872-4e91-8838-1129d0553c6b.jpg", 
        title: "Модерна жилищна сграда", 
        category: "ready", 
        alt: "Модерна жилищна сграда"
    },
    { 
        filename: "e62f516b-2ec1-4ddb-a648-7fcf17af256e.jpg", 
        title: "Луксозен жилищен комплекс", 
        category: "ready", 
        alt: "Луксозен жилищен комплекс"
    },
    
    // Проекти
    { 
        filename: "3fbd4a22-e8b8-4a4f-b3f0-89d8ba068430.jpg", 
        title: "3D визуализация жилищен комплекс", 
        category: "proj", 
        alt: "3D визуализация жилищен комплекс"
    }
];


// ЕКСПОРТ НА ДАННИТЕ
window.unimasterData = {
    references: referencesData,
    gallery: galleryData
};
