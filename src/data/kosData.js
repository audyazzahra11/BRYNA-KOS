export const kosData = {
  brand: {
    name: 'Bryna Kos',
    tagline: 'Hunian Nyaman Mahasiswa di Purwokerto',
  },
  navigation: [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Kamar', href: '#kamar' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Peraturan', href: '#peraturan' },
    { label: 'Lokasi', href: '#lokasi' },
  ],
  hero: {
    headline: 'Temukan Hunian Nyaman untuk Masa Kuliahmu',
    supportingText:
      'Bryna Kos hadir sebagai pilihan hunian praktis dan nyaman bagi mahasiswa di Purwokerto.',
    primaryCta: {
      label: 'Jelajahi Kos',
      href: '#tentang',
    },
    secondaryCta: {
      label: 'Hubungi Kami',
      href: '#kontak',
    },
    highlights: [
      { label: '8 Total Kamar', value: '8 Total Kamar' },
      { label: 'Wi-Fi', value: 'Wi-Fi' },
      { label: 'Area Parkir', value: 'Area Parkir' },
    ],
    image: {
      src: '/images/hero/bryna-kos-tampak-depan.jpeg',
      alt: 'Tampak depan bangunan dua lantai Bryna Kos dengan gerbang besi hitam dan area parkir depan',
      caption: 'Tampak Depan Bryna Kos',
    },
  },
  about: {
    heading: 'Tentang Bryna Kos',
    description:
      'Bryna Kos merupakan hunian yang berada di Purwokerto dan ditujukan terutama bagi mahasiswa yang membutuhkan tempat tinggal yang nyaman, praktis, dan strategis selama menjalani perkuliahan. Dengan lokasi yang mudah diakses, Bryna Kos memudahkan penghuni untuk bepergian ke kampus, pusat kota, tempat makan, pusat perbelanjaan, maupun berbagai fasilitas umum lainnya. Suasana yang nyaman serta akses yang mudah menjadikan Bryna Kos sebagai pilihan tempat tinggal yang praktis bagi mahasiswa di Purwokerto.',
    address:
      'Perum. Griya Tegal Sari Indah, Jl. Kenanga Blok J No. 2, RT 06/RW 10, Ledug, Kembaran, Purwokerto, Jawa Tengah.',
    highlights: [
      {
        title: 'Khusus Hunian Praktis Mahasiswa',
        description:
          'Dirancang untuk menunjang kenyamanan istirahat dan aktivitas perkuliahan sehari-hari.',
      },
      {
        title: 'Akses Mudah ke Berbagai Tujuan',
        description:
          'Lokasi yang mudah dijangkau menuju kampus, pusat kota, tempat makan, pusat perbelanjaan, dan fasilitas umum.',
      },
      {
        title: 'Lingkungan Tenang & Teratur',
        description:
          'Berada di kawasan perumahan dengan tata tertib jelas demi kenyamanan bersama.',
      },
    ],
    image: {
      src: '/images/hero/koridor-bryna-kos.jpg',
      alt: 'Koridor dalam bangunan Bryna Kos yang bersih dengan deretan pintu kamar kayu dan lantai keramik',
      caption: 'Koridor Dalam Bryna Kos',
    },
  },
  room: {
    heading: 'Informasi Kamar',
    subheading:
      'Informasi tipe kamar, tarif tahunan, dan status keterisian Bryna Kos saat ini.',
    type: 'Reguler',
    price: 'Rp10.000.000',
    period: 'per tahun',
    totalRooms: 8,
    isFull: true,
    statusLabel: 'FULL — Seluruh kamar saat ini telah terisi.',
    ctaLabel: 'Tanyakan Informasi Kamar',
    image: {
      src: '/images/rooms/kamar-reguler-kasur.jpg',
      alt: 'Interior kamar tipe Reguler Bryna Kos dengan kasur dan lantai keramik bersih',
      caption: 'Kamar Tipe Reguler',
    },
    photos: [
      {
        id: 'kasur',
        label: 'Area Kamar & Kasur',
        src: '/images/rooms/kamar-reguler-kasur.jpg',
        alt: 'Interior kamar tipe Reguler Bryna Kos dengan kasur di sudut ruangan',
      },
      {
        id: 'lemari-meja',
        label: 'Lemari & Meja Belajar',
        src: '/images/rooms/kamar-reguler-lemari-meja-belajar.jpeg',
        alt: 'Lemari pakaian putih terintegrasi dengan meja belajar dan kursi di dalam kamar Bryna Kos',
      },
      {
        id: 'ac',
        label: 'Unit AC Kamar',
        src: '/images/rooms/kamar-reguler-ac.jpg',
        alt: 'Unit pendingin ruangan AC terpasang di dinding kamar Bryna Kos',
      },
      {
        id: 'kamar-mandi',
        label: 'Kamar Mandi Pribadi',
        src: '/images/rooms/kamar-reguler-kamar-mandi.jpg',
        alt: 'Kamar mandi pribadi di dalam kamar Bryna Kos dengan kloset jongkok dan keran air',
      },
    ],
    facilities: [
      'AC',
      'Kamar mandi pribadi',
      'Kasur',
      'Lemari pakaian',
      'Meja belajar',
      'Listrik masing-masing kamar',
    ],
  },
  facilities: {
    heading: 'Fasilitas Kos',
    subheading:
      'Fasilitas kamar, fasilitas umum, dan area bersama yang tersedia untuk mendukung keseharian penghuni.',
    roomFacilities: [
      {
        id: 'ac',
        name: 'AC',
        icon: 'Wind',
        description:
          'Pendingin ruangan di setiap kamar untuk menjaga suhu tetap sejuk saat beristirahat maupun belajar.',
      },
      {
        id: 'kamar-mandi-pribadi',
        name: 'Kamar Mandi Pribadi',
        icon: 'Bath',
        description:
          'Kamar mandi pribadi di dalam setiap kamar demi privasi dan kenyamanan penghuni.',
      },
      {
        id: 'kasur',
        name: 'Kasur',
        icon: 'BedDouble',
        description:
          'Kasur yang nyaman dan siap digunakan untuk istirahat setelah menjalani aktivitas kuliah.',
      },
      {
        id: 'lemari-pakaian',
        name: 'Lemari Pakaian',
        icon: 'Archive',
        description:
          'Lemari penyimpanan pakaian dan perlengkapan pribadi agar kamar tetap rapi.',
      },
      {
        id: 'meja-belajar',
        name: 'Meja Belajar',
        icon: 'LampDesk',
        description:
          'Meja belajar khusus di dalam kamar untuk mendukung fokus mengerjakan tugas dan belajar.',
      },
      {
        id: 'listrik-kamar',
        name: 'Listrik Masing-Masing Kamar',
        icon: 'Zap',
        description:
          'Setiap kamar dilengkapi jalur listrik masing-masing sehingga pemakaian lebih tertib dan terukur.',
      },
    ],
    generalFacilities: [
      {
        id: 'wifi',
        name: 'Wi-Fi',
        icon: 'Wifi',
        description:
          'Koneksi internet nirkabel yang dapat dimanfaatkan penghuni untuk kebutuhan kuliah dan keseharian.',
      },
      {
        id: 'area-parkir',
        name: 'Area Parkir',
        icon: 'CarFront',
        description:
          'Area parkir yang tersedia di lingkungan kos untuk kendaraan penghuni.',
      },
    ],
    additionalFacilities: [
      {
        id: 'dapur-bersama',
        name: 'Dapur Bersama & Kulkas',
        icon: 'UtensilsCrossed',
        description:
          'Area dapur di lantai bawah yang dilengkapi kulkas, kompor, bak cuci piring, dan lemari penyimpanan.',
      },
      {
        id: 'balkon-atas',
        name: 'Balkon Lantai Atas',
        icon: 'Sun',
        description:
          'Area balkon terbuka di lantai atas dengan pagar besi yang bersih dan nyaman untuk bersantai.',
      },
      {
        id: 'rak-sepatu',
        name: 'Rak Sepatu Bersama',
        icon: 'Layers',
        description:
          'Rak penyimpanan sepatu dan sandal di area koridor agar alas kaki penghuni tersusun rapi.',
      },
    ],
    visualDocs: [
      {
        id: 'doc-lemari-meja',
        src: '/images/rooms/kamar-reguler-lemari-meja-belajar.jpeg',
        alt: 'Lemari pakaian dan meja belajar di dalam kamar Bryna Kos',
        title: 'Lemari & Meja Belajar',
      },
      {
        id: 'doc-ac',
        src: '/images/rooms/kamar-reguler-ac.jpg',
        alt: 'Unit AC terpasang di dinding kamar Bryna Kos',
        title: 'Unit AC di Kamar',
      },
      {
        id: 'doc-km',
        src: '/images/rooms/kamar-reguler-kamar-mandi.jpg',
        alt: 'Kamar mandi pribadi di dalam kamar Bryna Kos',
        title: 'Kamar Mandi Pribadi',
      },
      {
        id: 'doc-wifi-listrik',
        src: '/images/facilities/area-wifi-listrik-kamar.jpg',
        alt: 'Perangkat router Wi-Fi dan meteran listrik kamar pada dinding lorong Bryna Kos',
        title: 'Router Wi-Fi & Meteran Listrik',
      },
      {
        id: 'doc-dapur',
        src: '/images/facilities/area-dapur-bersama.png',
        alt: 'Area dapur bersama dengan kulkas, kompor, bak cuci, dan kabinet bawah tangga',
        title: 'Dapur Bersama & Kulkas',
      },
      {
        id: 'doc-balkon',
        src: '/images/gallery/balkon-lantai-atas-1.png',
        alt: 'Balkon lantai atas Bryna Kos dengan pagar besi bermotif',
        title: 'Balkon Lantai Atas',
      },
      {
        id: 'doc-rak-sepatu',
        src: '/images/gallery/rak-sepatu-penghuni.png',
        alt: 'Rak sepatu penghuni di area koridor Bryna Kos',
        title: 'Rak Sepatu Penghuni',
      },
      {
        id: 'doc-parkir',
        src: '/images/hero/bryna-kos-tampak-depan.jpeg',
        alt: 'Gerbang depan dan area parkir Bryna Kos',
        title: 'Gerbang & Area Depan Kos',
      },
    ],
  },
  gallery: {
    heading: 'Galeri Bryna Kos',
    subheading:
      'Dokumentasi foto asli area bangunan, kamar reguler, fasilitas, dan lingkungan Bryna Kos di Purwokerto.',
    items: [
      {
        id: 'galeri-1',
        src: '/images/hero/bryna-kos-tampak-depan.jpeg',
        alt: 'Tampak depan bangunan Bryna Kos dua lantai berwarna putih dengan pagar besi hitam',
        title: 'Tampak Depan Bangunan',
        category: 'Area Kos',
      },
      {
        id: 'galeri-2',
        src: '/images/hero/koridor-bryna-kos.jpg',
        alt: 'Koridor utama dalam Bryna Kos dengan deretan pintu kamar kayu dan lantai keramik',
        title: 'Koridor Utama Kos',
        category: 'Area Kos',
      },
      {
        id: 'galeri-3',
        src: '/images/rooms/kamar-reguler-kasur.jpg',
        alt: 'Interior kamar reguler Bryna Kos tampak kasur dari pintu kamar',
        title: 'Interior Kamar Reguler',
        category: 'Kamar',
      },
      {
        id: 'galeri-4',
        src: '/images/rooms/kamar-reguler-lemari-meja-belajar.jpeg',
        alt: 'Lemari pakaian putih terintegrasi dengan meja belajar dan kursi di dalam kamar Bryna Kos',
        title: 'Lemari Pakaian & Meja Belajar',
        category: 'Kamar',
      },
      {
        id: 'galeri-5',
        src: '/images/rooms/kamar-reguler-ac.jpg',
        alt: 'Unit AC AQUA terpasang di dinding bagian atas kamar Bryna Kos',
        title: 'Unit AC di Dalam Kamar',
        category: 'Kamar',
      },
      {
        id: 'galeri-6',
        src: '/images/rooms/kamar-reguler-kamar-mandi.jpg',
        alt: 'Kamar mandi pribadi di dalam kamar dengan kloset jongkok, dinding keramik, dan ventilasi atas',
        title: 'Kamar Mandi Pribadi',
        category: 'Kamar',
      },
      {
        id: 'galeri-7',
        src: '/images/facilities/area-wifi-listrik-kamar.jpg',
        alt: 'Perangkat Wi-Fi dan meteran listrik prabayar masing-masing kamar di dinding koridor',
        title: 'Perangkat Wi-Fi & Meteran Listrik',
        category: 'Fasilitas',
      },
      {
        id: 'galeri-8',
        src: '/images/facilities/area-dapur-bersama.png',
        alt: 'Area dapur bersama dengan kulkas, kompor, bak cuci, dan kabinet bawah tangga',
        title: 'Dapur Bersama & Kulkas',
        category: 'Fasilitas',
      },
      {
        id: 'galeri-9',
        src: '/images/gallery/balkon-lantai-atas-1.png',
        alt: 'Balkon lantai atas Bryna Kos dengan pagar besi bermotif menghadap lingkungan sekitar',
        title: 'Balkon Lantai Atas',
        category: 'Fasilitas',
      },
      {
        id: 'galeri-10',
        src: '/images/gallery/balkon-lantai-atas-2.png',
        alt: 'Sudut lain balkon lantai atas Bryna Kos dengan pemandangan perumahan sekitar',
        title: 'Pemandangan dari Balkon',
        category: 'Area Kos',
      },
      {
        id: 'galeri-11',
        src: '/images/gallery/rak-sepatu-penghuni.png',
        alt: 'Rak sepatu penghuni yang tertata di area koridor Bryna Kos',
        title: 'Area Rak Sepatu',
        category: 'Fasilitas',
      },
      {
        id: 'galeri-12',
        src: '/images/gallery/pintu-kamar-05-dan-meteran.png',
        alt: 'Pintu kamar nomor 05 beserta meteran listrik di area koridor',
        title: 'Area Pintu Kamar 05',
        category: 'Area Kos',
      },
      {
        id: 'galeri-13',
        src: '/images/gallery/pintu-kamar-07-bryna-kost.jpg',
        alt: 'Pintu kamar nomor 07 dengan papan nama Bryna Kost dan jendela vertikal',
        title: 'Pintu Kamar 07',
        category: 'Area Kos',
      },
      {
        id: 'galeri-14',
        src: '/images/facilities/area-tandon-air.jpg',
        alt: 'Tandon air berpenutup rangka atap di bagian atas bangunan Bryna Kos',
        title: 'Area Tandon Air',
        category: 'Area Kos',
      },
    ],
  },
  rules: {
    heading: 'Peraturan Kos',
    subheading:
      'Tata tertib yang berlaku untuk menjaga keamanan, ketertiban, dan kenyamanan seluruh penghuni Bryna Kos.',
    items: [
      {
        number: '01',
        icon: 'ShieldAlert',
        title: 'Akses Tamu Laki-Laki',
        description:
          'Tamu laki-laki tidak diperbolehkan masuk ke area lantai atas tanpa izin.',
      },
      {
        number: '02',
        icon: 'PackageCheck',
        title: 'Pengantaran Makanan & Paket',
        description:
          'Pengantaran makanan maupun paket melalui GrabFood, GoFood, dan layanan pengantaran lainnya harus berhenti di gerbang depan.',
      },
      {
        number: '03',
        icon: 'Clock3',
        title: 'Batas Jam Malam',
        description:
          'Penghuni wajib mematuhi jam malam pukul 00.00 WIB.',
      },
      {
        number: '04',
        icon: 'UserCheck',
        title: 'Ketentuan Biaya Tamu',
        description:
          'Tidak ada biaya tambahan untuk tamu.',
      },
    ],
  },
  location: {
    heading: 'Lokasi Bryna Kos',
    subheading:
      'Berada di kawasan Perum. Griya Tegal Sari Indah, Ledug, Kembaran, Purwokerto dengan akses yang mudah ke berbagai area penting.',
    address:
      'Perum. Griya Tegal Sari Indah, Jl. Kenanga Blok J No. 2, RT 06/RW 10, Ledug, Kembaran, Purwokerto, Jawa Tengah.',
    mapsUrl: 'https://maps.app.goo.gl/cExsvMsZR7rfptQq9',
    embedUrl:
      'https://maps.google.com/maps?q=Perum.%20Griya%20Tegal%20Sari%20Indah%2C%20Ledug%2C%20Kembaran%2C%20Purwokerto%2C%20Jawa%20Tengah&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  contact: {
    heading: 'Masih Ingin Mengenal Bryna Kos?',
    supportingText:
      'Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai Bryna Kos.',
    contactPerson: 'Indri',
    whatsappDisplay: '+62 819-5310-3751',
    whatsappUrl:
      'https://wa.me/6281953103751?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20mengenai%20Bryna%20Kos.',
    ctaLabel: 'Hubungi via WhatsApp',
  },
  footer: {
    shortDescription:
      'Hunian kos yang nyaman, praktis, dan strategis bagi mahasiswa di Purwokerto, Jawa Tengah.',
  },
};
