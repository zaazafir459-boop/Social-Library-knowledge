// Data awal Novel, Cerpen, dan Komik yang bisa langsung dibuka & dibaca
const defaultWorks = [
    {
        id: 1,
        title: "Penjaga Menara Zamrud & Violet",
        type: "Novel",
        author: "Hana_Novel",
        cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        content: "Bab 1 — Cahaya di Ujung Lorong\n\nDi puncak Menara Astra, jarum jam berdetak mundur setiap kali hujan turun. Raka membuka buku bersampul ungu yang ditinggalkan kakeknya, lalu menemukan selembar peta kecil yang bersinar hijau zamrud.\n\n\"Kalau peta ini benar,\" gumam Raka sambil menatap kota di bawahnya, \"maka perpustakaan rahasia di balik air terjun itu memang ada.\""
    },
    {
        id: 2,
        title: "Hujan di Halte Kampus",
        type: "Cerpen",
        author: "Sora_Chan",
        cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        content: "Senja itu turun bersama rintik hujan yang membasahi aspal. Dika menyodorkan payung lipat berwarna hijau mint kepada Maya yang baru saja keluar dari ruang baca.\n\n\"Cerita novelmu yang kemarin sudah selesai?\" tanya Maya.\n\"Sudah,\" jawab Dika sambil tersenyum. \"Ending-nya justru dimulai di halte ini.\""
    },
    {
        id: 3,
        title: "Chronicles of Neon Shrine (Ep. 1)",
        type: "Komik",
        author: "Ren_Kun",
        cover: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=600&q=80",
        content: "[Panel 1]\nLatar: Kuil tua berpadu lampu neon ungu dan hijau di malam hari.\nDialog: \"Aoi! Portal dimensi terbuka di gerbang torii!\"\n\n[Panel 2]\nAoi melompat sambil memegang gulungan sihir.\nDialog: \"Tenang saja, kita selesaikan misi ini sebelum jam malam!\""
    }
];

// Data awal Chat Teman per room
const defaultChatRooms = {
    teman: [
        { sender: "Ren_Kun", avatar: "Ren", text: "Halo! Ada yang lagi baca novel baru minggu ini?" },
        { sender: "Hana_Novel", avatar: "Hana", text: "Aku baru aja upload bab 1 novel Penjaga Menara Zamrud & Violet!" }
    ],
    novel: [
        { sender: "Sora_Chan", avatar: "Aoi", text: "Suka banget plot cerita fantasi yang penuh teka-teki." }
    ],
    anime: [
        { sender: "Ren_Kun", avatar: "Ren", text: "Tema hijau-ungu di web ini berasa banget nuansa anime malam harinya!" }
    ]
};

// Kutipan dinamis Maskot Aoi
const mascotLines = [
    "\"Konnichiwa! Pilih novel favoritmu atau cari bacaan dari Google ya~\"",
    "\"Punya cerita seru? Yuk upload di tab Upload Karya!\"",
    "\"Ngobrol santai bareng teman di tab Chat Teman yuk~\"",
    "\"Jangan lupa atur ukuran huruf saat membuka novel panjang!\""
];

// State aplikasi
let works = JSON.parse(localStorage.getItem("sl_v2_works")) || defaultWorks;
let chatRooms = JSON.parse(localStorage.getItem("sl_v2_chats")) || defaultChatRooms;
let currentUser = JSON.parse(localStorage.getItem("sl_v2_user")) || null;
let activeFilter = "all";
let activeRoom = "teman";
let readerFontSize = 15.5;

// Efek kelopak sakura
function initSakura() {
    const bg = document.getElementById("sakuraBg");
    if (!bg) return;
    for (let i = 0; i < 18; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.width = (Math.random() * 9 + 7) + "px";
        petal.style.height = (Math.random() * 9 + 7) + "px";
        petal.style.animationDuration = (Math.random() *
