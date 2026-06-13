import profileImg from '../assets/profile.jpeg';

export const portfolioData = {
  en: {
    personalInfo: {
      name: "Refaldi Julidinsyah",
      title: "Fullstack Developer",
      subtitle: "Building high-performance, beautiful, and user-oriented web applications.",
      bio: "I am a Fullstack Developer focused on building modern web applications. With experience in clean code architecture, I enjoy solving complex problems using cutting-edge technologies like React, React Native, Node.js, and Tailwind CSS.",
      avatar: profileImg,
      socials: {
        github: "https://github.com/rfldisyah",
        linkedin: "https://linkedin.com/in/refaldijulidinsyah",
        instagram: "https://instagram.com/rfldisyh_",
        email: "syahrefaldi@email.com"
      },
      cvUrl: "#"
    },
    stats: [
      { label: "Years of Experience", value: "3+" },
      { label: "Projects Completed", value: "20+" },
      { label: "Happy Clients", value: "12+" },
      { label: "Technologies Mastered", value: "15+" }
    ],
    skills: [
      {
        category: "Frontend",
        items: [
          { name: "React / Next.js", level: "90%", icon: "FaReact" },
          { name: "Tailwind CSS", level: "95%", icon: "SiTailwindcss" },
          { name: "TypeScript", level: "85%", icon: "SiTypescript" },
          { name: "Redux", level: "60%", icon: "SiRedux" }
        ]
      },
      {
        category: "Backend & Database",
        items: [
          { name: "Node.js (Express)", level: "85%", icon: "FaNodeJs" },
          { name: "PHP", level: "80%", icon: "SiPhp" },
          { name: "Laravel", level: "80%", icon: "SiLaravel" },
          { name: "MySQL", level: "85%", icon: "SiMysql" },
          { name: "PostgreSQL", level: "60%", icon: "SiPostgresql" }
        ]
      },
      {
        category: "Mobile",
        items: [
          { name: "React Native", level: "50%", icon: "FaReact" }
        ]
      },
      {
        category: "Others / Tools",
        items: [
          { name: "Git & GitHub", level: "90%", icon: "FaGitAlt" },
          { name: "Docker", level: "75%", icon: "FaDocker" },
          { name: "Figma (UI/UX)", level: "80%", icon: "FaFigma" },
          { name: "RESTful API / GraphQL", level: "90%", icon: "SiGraphql" }
        ]
      }
    ],
    experiences: [
      {
        company: "Tech Innovation Corp",
        role: "Senior Fullstack Developer",
        location: "Jakarta, Indonesia (Remote)",
        duration: "Jan 2024 - Present",
        description: [
          "Led the frontend team in building internal dashboards using Next.js and Tailwind CSS, improving rendering speed by 40%.",
          "Designed and developed RESTful APIs based on Node.js & NestJS to manage millions of monthly transaction data.",
          "Integrated third-party payment gateways (Midtrans/Stripe) and monitored system logs using Sentry."
        ]
      },
      {
        company: "Creative Digital Studio",
        role: "Frontend Engineer",
        location: "Bandung, Indonesia",
        duration: "Aug 2022 - Dec 2023",
        description: [
          "Built and maintained 10+ e-commerce websites and landing page applications for clients using React, Tailwind CSS, and Framer Motion.",
          "Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect, high-performance React components.",
          "Boosted average Lighthouse performance scores from 60 to 90+ through image lazy loading and code splitting."
        ]
      },
      {
        company: "Nusantara Software House",
        role: "Mobile App Developer (Intern)",
        location: "Jakarta, Indonesia",
        duration: "Mar 2022 - Jul 2022",
        description: [
          "Assisted in the development of a React Native-based e-wallet mobile application.",
          "Implemented API integration for user authentication and profile update modules.",
          "Performed debugging and beta testing of applications on Android and iOS devices."
        ]
      }
    ],
    projects: [
      {
        title: "VibeCart - Modern E-Commerce Platform",
        description: "A full-featured e-commerce platform with real-time shopping cart, payment integration, product reviews, and an advanced admin panel.",
        category: "Web App",
        tags: ["Next.js", "Tailwind CSS", "Zustand", "Stripe", "MongoDB"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop&q=80",
        liveUrl: "https://vibecart-demo.vercel.app",
        githubUrl: "https://github.com/rfldisyah/vibecart"
      },
      {
        title: "PulseFit - Fitness & Health Tracker App",
        description: "A mobile application for tracking daily fitness activities, counting calories, logging weight, and visualizing fitness progress charts.",
        category: "Mobile",
        tags: ["React Native", "Expo", "Redux Toolkit", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=400&fit=crop&q=80",
        liveUrl: "#",
        githubUrl: "https://github.com/rfldisyah/pulsefit"
      },
      {
        title: "CollabTask - Real-Time Project Management",
        description: "A real-time team collaboration tool similar to Trello, allowing users to create task boards, move task cards, and chat in real-time.",
        category: "Web App",
        tags: ["React", "Tailwind CSS", "Express.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=600&h=400&fit=crop&q=80",
        liveUrl: "https://collabtask-demo.vercel.app",
        githubUrl: "https://github.com/rfldisyah/collabtask"
      },
      {
        title: "DevBlog - Markdown Developer Blog",
        description: "A fast, minimalist markdown developer blog supporting Markdown files, instant search, and code syntax highlighting.",
        category: "Others",
        tags: ["Gatsby.js", "GraphQL", "Tailwind CSS", "MDX"],
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&q=80",
        liveUrl: "https://devblog-demo.vercel.app",
        githubUrl: "https://github.com/rfldisyah/devblog"
      }
    ],
    education: [
      {
        institution: "Lancang Kuning University",
        degree: "Bachelor of Computer Science (B.Comp.Sc.) - Informatics Engineering",
        duration: "2019 - 2023",
        score: "GPA 3.82 / 4.00",
        achievements: [
          "Valedictorian of the Faculty of Computer Science in 2023.",
          "Teaching Assistant for Algorithm and Programming courses for 3 semesters."
        ]
      },
      {
        institution: "Dicoding Academy Indonesia",
        degree: "Learning Path: Becoming a Front-End Web Developer Expert",
        duration: "Feb 2026 - June 2026",
        score: "Certificate of Graduation",
        achievements: [
          "Earned an official, verified front-end web developer professional certification.",
          "Mastered Web Performance Optimization, Progressive Web Apps (PWA), and Clean Architecture."
        ]
      }
    ],
    certificates: [
      {
        title: "Becoming a Front-End Web Developer Expert",
        issuer: "Dicoding Academy",
        date: "Oct 2022",
        credentialUrl: "https://www.dicoding.com/certificates/...",
        featured: true
      },
      {
        title: "Architecting on AWS",
        issuer: "Coursera / AWS",
        date: "Dec 2023",
        credentialUrl: "https://www.coursera.org/...",
        featured: true
      },
      {
        title: "React Native - The Practical Guide",
        issuer: "Udemy",
        date: "May 2023",
        credentialUrl: "https://www.udemy.com/...",
        featured: true
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "Jan 2022",
        credentialUrl: "https://www.freecodecamp.org/...",
        featured: false
      },
      {
        title: "EFSET English Certificate (C2 Proficient)",
        issuer: "EFSET",
        date: "Aug 2023",
        credentialUrl: "https://www.efset.org/...",
        featured: false
      }
    ],
    common: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        summary: "Summary",
        whatIDo: "What I do",
        tagline: "Turning ideas into ",
        taglineHighlight: "elegant digital products.",
        downloadCv: "Download CV",
        myProjects: "My Projects"
      },
      about: {
        title: "About Me",
        philosophy: "Work Philosophy",
        philosophyDesc: "I believe that writing code is not just about making a feature work, but also about craft, readability, and long-term sustainability. I always aim for high performance and pixel-perfect implementation in every interface I build.",
        statsHeader: "Tech Stack & Skills",
        educationHeader: "Education",
        certHeader: "Key Certifications",
        viewAllCerts: "View All Certifications"
      },
      experience: {
        title: "Working Experience"
      },
      projects: {
        title: "Featured Projects",
        all: "All",
        webApp: "Web App",
        mobile: "Mobile",
        others: "Others"
      },
      contact: {
        title: "Contact Channels",
        desc: "Have a project idea, a job opportunity, or just want to connect? Feel free to reach out through any of these platforms or drop me a message!"
      }
    }
  },
  id: {
    personalInfo: {
      name: "Refaldi Julidinsyah",
      title: "Fullstack Developer",
      subtitle: "Membangun aplikasi web yang performan, indah, dan berorientasi pada pengguna.",
      bio: "Saya adalah seorang Fullstack Developer yang berfokus pada pembuatan aplikasi web modern. Dengan pengalaman dalam arsitektur kode bersih (clean architecture), saya senang memecahkan masalah kompleks menggunakan teknologi terkini seperti React, React Native, Node.js, dan Tailwind CSS.",
      avatar: profileImg,
      socials: {
        github: "https://github.com/rfldisyah",
        linkedin: "https://linkedin.com/in/refaldijulidinsyah",
        instagram: "https://instagram.com/rfldisyh_",
        email: "syahrefaldi@email.com"
      },
      cvUrl: "#"
    },
    stats: [
      { label: "Tahun Pengalaman", value: "3+" },
      { label: "Proyek Selesai", value: "20+" },
      { label: "Klien Puas", value: "12+" },
      { label: "Teknologi Dikuasai", value: "15+" }
    ],
    skills: [
      {
        category: "Frontend",
        items: [
          { name: "React / Next.js", level: "90%", icon: "FaReact" },
          { name: "Tailwind CSS", level: "95%", icon: "SiTailwindcss" },
          { name: "TypeScript", level: "85%", icon: "SiTypescript" },
          { name: "Redux", level: "60%", icon: "SiRedux" }
        ]
      },
      {
        category: "Backend & Database",
        items: [
          { name: "Node.js (Express)", level: "85%", icon: "FaNodeJs" },
          { name: "PHP", level: "80%", icon: "SiPhp" },
          { name: "Laravel", level: "80%", icon: "SiLaravel" },
          { name: "MySQL", level: "85%", icon: "SiMysql" },
          { name: "PostgreSQL", level: "60%", icon: "SiPostgresql" }
        ]
      },
      {
        category: "Mobile",
        items: [
          { name: "React Native", level: "50%", icon: "FaReact" }
        ]
      },
      {
        category: "Lainnya / Tools",
        items: [
          { name: "Git & GitHub", level: "90%", icon: "FaGitAlt" },
          { name: "Docker", level: "75%", icon: "FaDocker" },
          { name: "Figma (UI/UX)", level: "80%", icon: "FaFigma" },
          { name: "RESTful API / GraphQL", level: "90%", icon: "SiGraphql" }
        ]
      }
    ],
    experiences: [
      {
        company: "Tech Innovation Corp",
        role: "Senior Fullstack Developer",
        location: "Jakarta, Indonesia (Remote)",
        duration: "Jan 2024 - Sekarang",
        description: [
          "Memimpin tim frontend dalam pembuatan dashboard internal menggunakan Next.js dan Tailwind CSS, meningkatkan kecepatan rendering sebesar 40%.",
          "Merancang dan mengembangkan RESTful API berbasis Node.js & NestJS untuk mengelola jutaan data transaksi bulanan.",
          "Mengintegrasikan sistem pembayaran pihak ketiga (Midtrans/Stripe) dan memantau log menggunakan Sentry."
        ]
      },
      {
        company: "Creative Digital Studio",
        role: "Frontend Engineer",
        location: "Bandung, Indonesia",
        duration: "Agt 2022 - Des 2023",
        description: [
          "Membangun dan merawat 10+ web e-commerce dan aplikasi landing page klien menggunakan React, Tailwind CSS, dan Framer Motion.",
          "Bekerja sama dengan UI/UX Designer untuk menerjemahkan mockup Figma menjadi komponen React yang pixel-perfect dan berkinerja tinggi.",
          "Meningkatkan skor performa Lighthouse dari rata-rata 60 menjadi 90+ melalui pemuatan gambar malas (lazy loading) dan pembagian kode (code splitting)."
        ]
      },
      {
        company: "Nusantara Software House",
        role: "Mobile App Developer (Intern)",
        location: "Jakarta, Indonesia",
        duration: "Mar 2022 - Jul 2022",
        description: [
          "Membantu pengembangan aplikasi e-wallet berbasis React Native.",
          "Mengimplementasikan integrasi API untuk modul autentikasi pengguna dan pembaruan profil.",
          "Melakukan debugging dan pengujian beta aplikasi pada perangkat Android dan iOS."
        ]
      }
    ],
    projects: [
      {
        title: "VibeCart - Modern E-Commerce Platform",
        description: "Platform e-commerce lengkap dengan fitur keranjang belanja real-time, integrasi sistem pembayaran, ulasan produk, dan admin panel yang canggih.",
        category: "Web App",
        tags: ["Next.js", "Tailwind CSS", "Zustand", "Stripe", "MongoDB"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop&q=80",
        liveUrl: "https://vibecart-demo.vercel.app",
        githubUrl: "https://github.com/rfldisyah/vibecart"
      },
      {
        title: "PulseFit - Fitness & Health Tracker App",
        description: "Aplikasi mobile pelacak aktivitas olahraga harian, penghitung kalori, pencatatan berat badan, dan visualisasi grafik kemajuan kebugaran.",
        category: "Mobile",
        tags: ["React Native", "Expo", "Redux Toolkit", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=400&fit=crop&q=80",
        liveUrl: "#",
        githubUrl: "https://github.com/rfldisyah/pulsefit"
      },
      {
        title: "CollabTask - Real-Time Project Management",
        description: "Alat kolaborasi kerja tim mirip Trello yang memungkinkan pengguna membuat papan tulis kerja, memindahkan kartu tugas, serta obrolan real-time antar anggota.",
        category: "Web App",
        tags: ["React", "Tailwind CSS", "Express.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=600&h=400&fit=crop&q=80",
        liveUrl: "https://collabtask-demo.vercel.app",
        githubUrl: "https://github.com/rfldisyah/collabtask"
      },
      {
        title: "DevBlog - Markdown Developer Blog",
        description: "Situs blog minimalis dan cepat untuk developer, mendukung tulisan berbasis berkas Markdown, fitur pencarian instan, dan syntax highlighting kode pemrograman.",
        category: "Lainnya",
        tags: ["Gatsby.js", "GraphQL", "Tailwind CSS", "MDX"],
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&q=80",
        liveUrl: "https://devblog-demo.vercel.app",
        githubUrl: "https://github.com/rfldisyah/devblog"
      }
    ],
    education: [
      {
        institution: "Universitas Lancang Kuning",
        degree: "Sarjana Komputer (S.Kom.) - Teknik Informatika",
        duration: "2019 - 2023",
        score: "IPK 3.82 / 4.00",
        achievements: [
          "Lulusan Terbaik Fakultas Ilmu Komputer tahun 2023.",
          "Asisten Dosen mata kuliah Algoritma dan Pemrograman selama 3 semester."
        ]
      },
      {
        institution: "Dicoding Academy Indonesia",
        degree: "Learning Path: Menjadi Front-End Web Developer Expert",
        duration: "Feb 2026 - Juni 2026",
        score: "Sertifikat Kelulusan",
        achievements: [
          "Mendapatkan sertifikasi profesi resmi front-end web developer terverifikasi.",
          "Menguasai Web Performance Optimization, Progressive Web Apps (PWA), dan Clean Architecture."
        ]
      }
    ],
    certificates: [
      {
        title: "Menjadi Front-End Web Developer Expert",
        issuer: "Dicoding Academy",
        date: "Okt 2022",
        credentialUrl: "https://www.dicoding.com/certificates/...",
        featured: true
      },
      {
        title: "Architecting on AWS",
        issuer: "Coursera / AWS",
        date: "Des 2023",
        credentialUrl: "https://www.coursera.org/...",
        featured: true
      },
      {
        title: "React Native - The Practical Guide",
        issuer: "Udemy",
        date: "Mei 2023",
        credentialUrl: "https://www.udemy.com/...",
        featured: true
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "Jan 2022",
        credentialUrl: "https://www.freecodecamp.org/...",
        featured: false
      },
      {
        title: "EFSET English Certificate (C2 Proficient)",
        issuer: "EFSET",
        date: "Ags 2023",
        credentialUrl: "https://www.efset.org/...",
        featured: false
      }
    ],
    common: {
      nav: {
        home: "Beranda",
        about: "Tentang",
        experience: "Pengalaman",
        projects: "Proyek",
        contact: "Kontak"
      },
      hero: {
        summary: "Ringkasan",
        whatIDo: "Pekerjaan Saya",
        tagline: "Mengubah ide menjadi ",
        taglineHighlight: "produk digital elegan.",
        downloadCv: "Unduh CV",
        myProjects: "Proyek Saya"
      },
      about: {
        title: "Tentang Saya",
        philosophy: "Filosofi Kerja",
        philosophyDesc: "Saya percaya bahwa menulis kode bukan hanya sekadar membuat fitur berjalan, melainkan juga tentang kerajinan, keterbacaan, dan keberlanjutan jangka panjang. Saya selalu menargetkan performa tinggi dan implementasi pixel-perfect pada setiap antarmuka yang saya bangun.",
        statsHeader: "Tech Stack & Keahlian",
        educationHeader: "Pendidikan",
        certHeader: "Sertifikasi Utama",
        viewAllCerts: "Lihat Semua Sertifikat"
      },
      experience: {
        title: "Pengalaman Kerja"
      },
      projects: {
        title: "Proyek Pilihan",
        all: "Semua",
        webApp: "Web App",
        mobile: "Mobile",
        others: "Lainnya"
      },
      contact: {
        title: "Saluran Kontak",
        desc: "Punya ide proyek, peluang kerja, atau sekadar ingin terhubung? Silakan hubungi saya melalui platform di bawah ini atau tinggalkan pesan!"
      }
    }
  }
};
