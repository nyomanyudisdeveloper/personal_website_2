interface JourneyEntry {
  id: number;
  title: string;
  description: string;
  yearRange: string;
  type: "work" | "education";
}

export const journeyData: JourneyEntry[] = [
  {
    id: 1,
    title: "Bachelor Degree of Computer Science",
    description:
      "I take this degree in Bina Nusantara University, in there I have GPA 3.5. My title for my thesis is 'Generate Exam Schedule in Bina Nusantara'",
    yearRange: "2013 - 2017",
    type: "education",
  },
  {
    id: 2,
    title: "Programmer in IT Division Bina Nusantara",
    description:
      "Maintain and enhance website Binusmaya. Develop a website and create a Rest API at binumsaya.ac.id which is used for lectures, students, and parents. Here I focus more on handling business processes in the exam.Technology used for this are NodeJS, SQL Server, PHP, CodeIgniter, HTML, CSS, Javascript.",
    yearRange: "2016 - 2018",
    type: "work",
  },
  {
    id: 3,
    title: "Programmer in Ciptadana Sekuritas",
    description:
      "As programmer in Ciptadana Sekuritas, I do many things. For example I build mobile application for trading using Android Studio and XCode, mobile application for HR using react native, bug fix and enchance feature for existing desktop application using Qt and website using druppal.",
    yearRange: "2018 - 2021",
    type: "work",
  },
  {
    id: 4,
    title: "Master Degree's in Computer Science",
    description:
      "I take this degree in Bina Nusantara University, in there I have GPA 3.5. My title for my thesis is 'Analisis Kinerja Algoritma Quick Double Merge Sort Paralel Menggunakan openMP'",
    yearRange: "2019 - 2021",
    type: "education",
  },
  {
    id: 5,
    title: "Programmer in Devstack",
    description:
      "Devstack is a software house that has many client from abroad. As programmer i have worked for two project, First is Benchbank. In this project i work as mobile developer using React Native. Second is Playwatts, In this project i work as mobile developer using React Native and Back End using Node JS(Express) and MongoDB for database",
    yearRange: "2021 - 2023",
    type: "work",
  },
  {
    id: 6,
    title: "Programmer in Akses Kerja Utama",
    description:
      "Akses Kerja Utama is a start up company that try to build information technology about job portal with ai support. In here, i work as Front End Developer using React JS and Lovable.dev. Because it is start up, I alse learn to critical thinking, research many technology, and find original idea.",
    yearRange: "2025 - present",
    type: "work",
  },
];
