import profileImg from '../assets/profile.jpeg';
import sertifikatOracle from '../assets/sertifikat-oracle.pdf';
import mockupSipangan from '../assets/mockup/mockup-sipangan.png'
import mockupVibesense from '../assets/mockup/mockup-vibesense.png'


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
      { label: "Years of Experience", value: "2+" },
      { label: "Projects Completed", value: "15+" },
      { label: "Happy Clients", value: "10+" },
      { label: "Technologies Mastered", value: "10+" }
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
    company: "Dicoding Indonesia",
    role: "Full-Stack Developer Student (Apprenticeship)",
    location: "Pekanbaru, Riau, Indonesia (Remote)",
    duration: "Feb 2026 - Jul 2026",
    description: [
      "Selected as a participant in a selective full-stack developer learning path, mastering advanced JavaScript front-end technologies, UI/UX implementation, and server-side database engineering.",
      "Developing practical skills in building responsive, optimized, and scalable web applications aligned with modern industry standards."
    ]
  },
  {
  company: "IMPHNEN x Kolosal Hackathon",
  role: "Frontend Developer (Participant)",
  location: "Team Competition (Online)",
  duration: "Dec 2025",
  description: [
    "Competed in the IMPHNEN x Kolosal Hackathon under the theme 'AI Innovation: Driving Local Businesses with Inclusive AI', designing real-world tech solutions for local MSMEs.",
    "Served as the Frontend Developer, actively collaborating within a team via GitHub to manage the project repository and handle code integration.",
    "Collaborated with backend engineers to integrate the application frontend with a MySQL database system for efficient local business data management."
  ]
},
  {
    company: "Assist.id",
    role: "Junior Web Developer (Intern)",
    location: "Pekanbaru, Riau, Indonesia (On-site)",
    duration: "Jan 2023 - Jun 2023",
    description: [
      "Contributed as a Junior Web Developer during a professional internship at a digital healthcare software house, combining practical front-end engineering with meticulous healthcare data management.",
      "Assisted in building and updating modular web application interfaces utilizing React.js and modern UI libraries, specifically Material-UI (MUI).",
      "Managed, verified, and organized crucial pharmaceutical and medicine data into Microsoft Excel for health-tech platform system integration."
    ]
  }
],
    projects: [
  {
    title: "SIPANGAN - Food Security Information System",
    description: "An intelligent spatial and AI-based analytics platform designed to monitor price stability, map supply chains, and project food commodity security in real-time. Built within a collaborative 6-member team consisting of Frontend, Backend, Data Science, and AI Engineers.",
    category: "Web App",
    tags: ["React", "Tailwind CSS", "MySQL", "Framer Motion", "React Leaflet"],
    image: mockupSipangan, 
    liveUrl: "https://sipangan-smart.vercel.app/",
    githubUrl: "https://github.com/panen-predict-hub/FE-SIPANGAN",
    team: [
    { name: "Refaldi", role: "Frontend" }, // Menggunakan nama panggilanmu agar ringkas
    { name: "Labib", role: "Backend" },
    { name: "Shofia", role: "Data Science" },
    { name: "Meila", role: "Data Science" },
    { name: "Reynanda", role: "AI Engineer" },
    { name: "Claudio", role: "AI Engineer" }
  ]
  },
  {
    title: "VibeSense AI - AI-Powered Empathy Digital Diary",
    description: "An interactive digital journaling platform leveraging artificial intelligence to summarize daily logs, analyze emotional metrics (mood tracker), and provide tailored self-reflections. Developed within a collaborative 4-member engineer team.",
    category: "Web App",
    tags: ["Laravel", "PHP Blade", "MySQL", "Laravel Breeze", "AI Integration"],
    image: mockupVibesense,
    liveUrl: "https://vibessenseai-fasilkom.unilak.ac.id/",
    githubUrl: "https://github.com/LabibAbdullah1/VibesenseAi",
    team: [
      { name: "Refaldi", role: "Frontend & UI/UX" },
      { name: "Fajar", role: "Frontend" },
      { name: "Labib", role: "Backend & Logic" },
      { name: "Leni", role: "Backend & Database" },
    ]
  },
  {
    title: "Task Management Application",
    description: "A personal and collaborative task management system that helps users note down, schedule, and monitor work progress efficiently to boost daily productivity.",
    category: "Web App",
    tags: ["JavaScript", "Tailwind CSS", "Local Storage"],
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=600&h=400&fit=crop&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Cafe Solter - Point of Sales & Landing Page",
    description: "A web-based solution for café operational management, streamlining menu ordering processes, logging transactions, and doubling as the official interactive landing page for Cafe Solter.",
    category: "Web App",
    tags: ["Web Tech", "Database Management"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80",
    liveUrl: "#",
    githubUrl: "#"
  }
],
    education: [
      {
        institution: "Lancang Kuning University",
        degree: "Bachelor of Computer Science (B.Comp.Sc.) - Informatics Engineering",
        duration: "2024 - Present",
        score: "GPA 3.91 / 4.00",
        achievements: [
          "Active 4th-semester student with a focus on Fullstack Web Development.",
          "Successfully organized 'Duckathon', a tech hackathon competition for High School and Vocational students (SMA/SMK), as part of the Duck SC organization."
        ]
      },
      {
        institution: "Dicoding Academy Indonesia",
        degree: "Learning Path: Becoming a Fullstack Web Developer Expert",
        duration: "Feb 2026 - June 2026",
        score: "Certificate of Graduation",
        achievements: [
          "Earned an official, verified full-stack web developer professional certification.",
          "Mastered Web Performance Optimization, Progressive Web Apps (PWA), and Clean Architecture."
        ]
      }
    ],
    certificates: [
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Academy",
    date: "Jan 2026",
    credentialUrl: "https://www.dicoding.com/certificates/81P25RLENPOY",
    featured: true
  },
  {
    title: "Introduction to Programming Basics for Software Developers",
    issuer: "Dicoding Academy",
    date: "Feb 2026",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1V04DNZ72",
    featured: false
  },
  {
    title: "Introduction to Programming Logic (Programming Logic 101)",
    issuer: "Dicoding Academy",
    date: "Feb 2026",
    credentialUrl: "https://www.dicoding.com/certificates/4EXG1EGRQPRL",
    featured: true
  },
  {
    title: "Learning Cloud Basics and Gen AI on AWS",
    issuer: "Dicoding Academy",
    date: "Feb 2026",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVOM263XN9",
    featured: true
  },
  {
    title: "Learning the Basics of Web Programming",
    issuer: "Dicoding Academy",
    date: "Feb 2026",
    credentialUrl: "https://www.dicoding.com/certificates/EYX4Q2KE5PDL",
    featured: false
  },
  {
    title: "Learning the Basics of JavaScript Programming",
    issuer: "Dicoding Academy",
    date: "Mar 2026",
    credentialUrl: "https://www.dicoding.com/certificates/98XW01N30XM3",
    featured: false
  },
  {
    title: "Learning to Build Front-End Web Applications for Beginners",
    issuer: "Dicoding Academy",
    date: "Apr 2026",
    credentialUrl: "https://www.dicoding.com/certificates/2VX30398QXYQ",
    featured: false
  },
  {
    title: "Learning to Build Web Applications with React",
    issuer: "Dicoding Academy",
    date: "Apr 2026",
    credentialUrl: "https://www.dicoding.com/certificates/81P2ODYQQZOY",
    featured: false
  },
  {
    title: "Learning the Fundamentals of Web Applications with React",
    issuer: "Dicoding Academy",
    date: "Apr 2026",
    credentialUrl: "https://www.dicoding.com/certificates/98XW019W0XM3",
    featured: true
  },
  {
    title: "Learning Back-End Development for Beginners with JavaScript",
    issuer: "Dicoding Academy",
    date: "May 2026", // Mengubah 'Mei' menjadi 'May'
    credentialUrl: "https://www.dicoding.com/certificates/1OP8ROKY8ZQK",
    featured: false
  },
  {
    title: "Learning the Fundamentals of Back-End Development with JavaScript",
    issuer: "Dicoding Academy",
    date: "May 2026", // Mengubah 'Mei' menjadi 'May'
    credentialUrl: "https://www.dicoding.com/certificates/2VX303DWQXYQ",
    featured: true
  },
  {
    title: "Database Programming with PL/SQL",
    issuer: "Oracle Academy",
    date: "Nov 2023",
    credentialUrl: sertifikatOracle,
    featured: true
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
      { label: "Tahun Pengalaman", value: "2+" },
      { label: "Proyek Selesai", value: "15+" },
      { label: "Klien Puas", value: "10+" },
      { label: "Teknologi Dikuasai", value: "10+" }
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
    company: "Dicoding Indonesia",
    role: "Full-Stack Developer Student (Apprenticeship)",
    location: "Pekanbaru, Riau, Indonesia (Remote)",
    duration: "Feb 2026 - Jul 2026",
    description: [
      "Terpilih sebagai peserta dalam alur belajar full-stack developer yang selektif, menguasai teknologi front-end JavaScript tingkat lanjut, implementasi UI/UX, dan database engineering di sisi server.",
      "Mengembangkan keterampilan praktis dalam membangun aplikasi web yang responsif, teroptimasi, dan scalable sesuai standar industri modern."
    ]
  },
  {
  company: "IMPHNEN x Kolosal Hackathon",
  role: "Frontend Developer (Participant)",
  location: "Kompetisi Tim (Online)",
  duration: "Des 2025", 
  description: [
    "Berkompetisi dalam ajang IMPHNEN x Kolosal Hackathon dengan tema 'Inovasi AI: Mendorong Usaha Lokal dengan AI Inklusif', merancang solusi teknologi nyata untuk membantu UMKM lokal.",
    "Bertanggung jawab sebagai Frontend Developer, berkolaborasi aktif dalam tim menggunakan GitHub untuk mengelola repositori dan menangani integrasi kode.",
    "Bekerja sama dengan tim backend untuk menghubungkan antarmuka aplikasi dengan sistem database MySQL guna mengelola data usaha lokal secara efisien."
  ]
},
  {
    company: "Assist.id",
    role: "Junior Web Developer (Intern)",
    location: "Pekanbaru, Riau, Indonesia (On-site)",
    duration: "Jan 2023 - Jun 2023",
    description: [
      "Berkontribusi sebagai Junior Web Developer selama magang profesional di perusahaan software house layanan kesehatan digital, menggabungkan rekayasa front-end dengan manajemen data medis.",
      "Membantu membangun dan memperbarui antarmuka aplikasi web modular menggunakan React.js dan pustaka UI modern (Material-UI/MUI).",
      "Mengelola, memverifikasi, dan merapikan data farmasi serta obat-obatan penting ke dalam Microsoft Excel untuk kebutuhan integrasi sistem kesehatan."
    ]
  }
],
    projects: [
  {
    title: "SIPANGAN - Sistem Informasi Ketahanan Pangan",
    description: "Platform analitik cerdas berbasis spasial dan AI yang dirancang untuk memantau stabilitas harga, memetakan rantai pasok, serta memproyeksikan ketahanan komoditas pangan secara real-time melalui visualisasi data interaktif dan pemetaan geo-spasial.",
    category: "Web App",
    tags: ["React", "Tailwind CSS", "MySQL", "Framer Motion", "React Leaflet"],
    image: mockupSipangan,
    liveUrl: "https://sipangan-smart.vercel.app/",
    githubUrl: "https://github.com/panen-predict-hub/FE-SIPANGAN",
    team: [
      { name: "Refaldi", role: "Frontend" },
      { name: "Labib", role: "Backend" },
      { name: "Shofia", role: "Data Science" },
      { name: "Meila", role: "Data Science" },
      { name: "Reynanda", role: "AI Engineer" },
      { name: "Claudio", role: "AI Engineer" }
    ]
  },
  {
    title: "VibeSense AI - Diary Digital Berbasis Empati AI",
    description: "Platform jurnal digital interaktif yang memanfaatkan integrasi kecerdasan buatan untuk merangkum tulisan harian, menganalisis suasana hati secara cerdas (mood tracker), serta memberikan refleksi personal yang mendalam bagi kenyamanan pengguna.",
    category: "Web App",
    tags: ["Laravel", "PHP Blade", "MySQL", "Laravel Breeze", "AI Integration"],
    image: mockupVibesense,
    liveUrl: "https://vibessenseai-fasilkom.unilak.ac.id/",
    githubUrl: "https://github.com/LabibAbdullah1/VibesenseAi",
    team: [
      { name: "Refaldi", role: "Frontend & UI/UX" },
      { name: "Fajar", role: "Frontend" },
      { name: "Labib", role: "Backend & Logic" },
      { name: "Leni", role: "Backend & Database" },
    ]
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description: "Sistem manajemen tugas personal dan kolaboratif untuk membantu pengguna mencatat, menjadwalkan, dan melacak progress pekerjaan secara efisien guna meningkatkan produktivitas harian.",
    category: "Web App",
    tags: ["JavaScript", "Tailwind CSS", "Local Storage"],
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=600&h=400&fit=crop&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Cafe Solter - Point of Sales & Landing Page",
    description: "Aplikasi berbasis web untuk manajemen operasional kafe, mempermudah proses pemesanan menu, pencatatan transaksi, sekaligus berfungsi sebagai profil interaktif Cafe Solter.",
    category: "Web App",
    tags: ["Web Tech", "Database Management"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80",
    liveUrl: "#",
    githubUrl: "#"
  }
],
    education: [
      {
        institution: "Universitas Lancang Kuning",
        degree: "Sarjana Komputer (S.Kom.) - Teknik Informatika",
        duration: "2024 - Sekarang",
        score: "IPK 3.91 / 4.00",
        achievements: [
          "Mahasiswa aktif semester 4 dengan fokus pada Pengembangan Web Fullstack.",
          "Berhasil menyelenggarakan 'Duckathon', kompetisi hackathon teknologi untuk siswa SMA/SMK, di bawah naungan organisasi Duck SC."
        ]
      },
      {
        institution: "Dicoding Academy Indonesia",
        degree: "Learning Path: Menjadi FullStack Web Developer Expert",
        duration: "Feb 2026 - Juni 2026",
        score: "Sertifikat Kelulusan",
        achievements: [
          "Mendapatkan sertifikasi profesi resmi front-end dan back-end web developer terverifikasi.",
          "Menguasai Web Performance Optimization, Progressive Web Apps (PWA), dan Clean Architecture."
        ]
      }
    ],
    certificates: [
      {
        title: "Introduction to Financial Literacy",
        issuer: "Dicoding Academy",
        date: "Jan 2026",
        credentialUrl: "https://www.dicoding.com/certificates/81P25RLENPOY",
        featured: true
      },
      {
        title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        issuer: "Dicoding Academy",
        date: "Feb 2026",
        credentialUrl: "https://www.dicoding.com/certificates/JLX1V04DNZ72",
        featured: false
      },
      {
        title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
        issuer: "Dicoding Academy",
        date: "Feb 2026",
        credentialUrl: "https://www.dicoding.com/certificates/4EXG1EGRQPRL",
        featured: true
      },
      {
        title: "Belajar Dasar Cloud dan Gen AI di AWS",
        issuer: "Dicoding Academy",
        date: "Feb 2026",
        credentialUrl: "https://www.dicoding.com/certificates/JMZVOM263XN9",
        featured: true
      },
      {
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Academy",
        date: "Feb 2026",
        credentialUrl: "https://www.dicoding.com/certificates/EYX4Q2KE5PDL",
        featured: false
      },
      {
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding Academy",
        date: "Mar 2026",
        credentialUrl: "https://www.dicoding.com/certificates/98XW01N30XM3",
        featured: false
      },
      {
        title: "Belajar Membuat Front-End Web untuk Pemula",
        issuer: "Dicoding Academy",
        date: "Apr 2026",
        credentialUrl: "https://www.dicoding.com/certificates/2VX30398QXYQ",
        featured: false
      },
      {
        title: "Belajar Membuat Aplikasi Web dengan React",
        issuer: "Dicoding Academy",
        date: "Apr 2026",
        credentialUrl: "https://www.dicoding.com/certificates/81P2ODYQQZOY",
        featured: false
      },
      {
        title: "Belajar Fundamental Aplikasi Web dengan React",
        issuer: "Dicoding Academy",
        date: "Apr 2026",
        credentialUrl: "https://www.dicoding.com/certificates/98XW019W0XM3",
        featured: true
      },
      {
        title: "Belajar Back-End Pemula dengan JavaScript",
        issuer: "Dicoding Academy",
        date: "Mei 2026",
        credentialUrl: "https://www.dicoding.com/certificates/1OP8ROKY8ZQK",
        featured: false
      },
      {
        title: "Belajar Fundamental Back-End dengan JavaScript",
        issuer: "Dicoding Academy",
        date: "Mei 2026",
        credentialUrl: "https://www.dicoding.com/certificates/2VX303DWQXYQ",
        featured: true
      },
      {
        title: "Database Programming with PL/SQL",
        issuer: "Oracle Academy",
        date: "Nov 2023",
        credentialUrl: sertifikatOracle,
        featured: true
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
