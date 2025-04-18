import React, { useState } from "react";
import { Hero } from "../components/courseHero";
import { WhyChooseUs } from "../components/Coursewhychooseus";
import { OurFacts } from "../components/Ourfacts";
import { CourseHighlights } from "../components/CourseHighlights";
import Testimonials from "../components/Testimonials";
import CourseCurriculum from "../components/CourseCurriculum";
import CourseCard from "../components/CourseCard";
import { ChevronDown, X } from "lucide-react";



const courses = [
  {
    id: 1,
    title: "Best Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80",
    language: "HINDI",
    tags: 'Digital Marketing',
    description: `Digital marketing is the use of online channels to promote products and services to targeted audiences. It involves various strategies like SEO, SEM, SMM, email marketing, and content marketing. Digital marketing helps businesses reach a wider audience, generate leads, and drive conversions. It is cost-effective, measurable, and provides real-time results. Digital marketing is essential for building brand awareness, engaging customers, and increasing sales. It is a dynamic field that requires continuous learning and adaptation to new trends and technologies. Digital marketing professionals need to stay updated with the latest tools and techniques to create successful campaigns and achieve business goals.`,
    link:"https://drive.google.com/file/d/1M_XM7vjNCVea7ANhT_xmGpCtOBvdSXdi/view?usp=sharing"
  },
  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80",
    language: "HINDI",
    tags: 'Digital Marketing',
    // originalPrice: 2500,
    // discountedPrice: 2499,
    // discount: 29,
    // saleType: "Black Friday Sale",
    description: `SEO (Search Engine Optimization) improves website visibility on search engines like Google. It involves on-page and off-page techniques, including keyword optimization, high-quality content, meta tags, and backlinks. SEO boosts rankings through technical factors like site speed, mobile-friendliness, and user experience. It is divided into on-page (content and HTML improvements) and off-page (external signals like backlinks). A strong SEO strategy helps drive organic traffic, enhance credibility, and improve brand visibility. Continuous analysis and updates are crucial for adapting to search engine algorithm changes. Effective SEO enhances long-term digital growth and online success.`,
    link:"https://drive.google.com/file/d/1_V5GK6PWD2Uz83PvqSOvF9a7mFELJlzX/view?usp=drive_link"
  },
  {
    id: 3,
    title: "WEB DESIGNING",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Designing',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Web designing is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design. While the terms web design and web development are often used interchangeably, web design is technically a subset of the broader category of web development. Web designers use various design programs such as Adobe Photoshop to create the layout and other visual elements of the website. Web development is the coding or programming that enables website functionality, per the owner's requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup.",
    link:"https://drive.google.com/file/d/1btRvBDkL77R9Y2XvjZMOILbxJ6Q_q5zK/view?usp=drive_link"
  },
  {
    id: 4,
    title: "UI-UX Designing",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Designing',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "UI/UX design is the process of designing digital products that are easy to use, visually appealing, and provide a seamless user experience. UI (User Interface) design focuses on the look and feel of the product, including the layout, colors, typography, and interactive elements. UX (User Experience) design focuses on the overall experience of the user, including how easy it is to navigate the product, how intuitive the interactions are, and how well the product meets the user's needs. UI/UX designers work closely with developers, product managers, and other stakeholders to create products that are user-friendly and meet business goals.",
    link:"https://drive.google.com/file/d/1XjoCldV9To-m0VdA-HRks1O-yZOhPFuw/view?usp=sharing"
  },
  {
    id: 5,
    title: "HTML Training",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Designing',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure and content of a webpage, including headings, paragraphs, links, images, and other elements. HTML uses tags to define the structure of a webpage, such as <h1> for headings, <p> for paragraphs, and <a> for links. HTML is the foundation of web development and is essential for creating static and dynamic websites. It works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing web pages.",
    link:"https://drive.google.com/file/d/1snHEf1hfO9YVQMx61hnEj2xpctH-pXAb/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Designing',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Graphic Design is the art of creating visual content to communicate messages. Applying visual hierarchy and page layout techniques, graphic designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience. Graphic design is important in the sales and marketing of products, and is a critical component of brochures and logos. Therefore, graphic designers, also referred to as graphic artists or communication designers, often work closely with people in advertising and promotions, public relations, and marketing.",
    link:"https://drive.google.com/file/d/1u74KncHuJO3Kop6f2OrVQC32XGfkrNkA/view?usp=drive_link"
  },
  {
    id: 7,
    title: "CSS Training",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Designing',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "CSS Training is a cascading style sheet language that is used to describe the look and formatting of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is one of the core technologies of the World Wide Web, alongside HTML and JavaScript. CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes. CSS is independent of HTML and can be used with any XML-based markup language. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.",
    link:"https://drive.google.com/file/d/1yCGatwIX6aAZLbphtBilXoVfzQVnq62G/view?usp=drive_link"
  },
  {
    id: 8,
    title: "React Native Programming",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Mobile Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "React Native is a popular open-source framework for building cross-platform mobile applications using JavaScript and React. Developed by Facebook, it allows developers to write a single codebase that works on both iOS and Android, reducing development time and cost. React Native uses native components, ensuring high performance and a seamless user experience. It supports hot reloading for faster iteration, integrates with third-party plugins, and has a vast community. Key components include <View>, <Text>, and <Button>, simplifying mobile app development.",
    link:"https://drive.google.com/file/d/1R6qU-ojWSB4FuKKwCo1KEk7VNcRunaxQ/view?usp=drive_link"
  },
  {
    id: 9,
    title: "IOS Certification",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Mobile Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "IOS Certification is a credential that demonstrates proficiency in developing applications for Apple's iOS operating system. It covers various aspects of iOS app development, including Swift programming language, Xcode IDE, UIKit framework, and app design principles. IOS certification validates the skills and knowledge required to create high-quality iOS apps that meet Apple's standards. It is ideal for developers, designers, and entrepreneurs looking to build and publish iOS apps on the App Store. IOS certification can enhance career opportunities, increase earning potential, and establish credibility in the iOS development community.",
    link:"https://drive.google.com/file/d/1wBnqJL9uQ_9MgcMEakQGLW0KVJzrEnel/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Android Traning",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Mobile Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Android Training is a comprehensive program that covers the fundamentals of Android app development. It includes topics like Java programming, Android Studio IDE, XML layout design, and Android SDK tools. Android training helps developers create mobile applications for Android devices, ranging from smartphones to tablets. It covers essential concepts like activities, intents, services, and content providers. Android training also includes hands-on projects and real-world examples to build practical skills. Android developers can leverage their training to create innovative apps, publish them on Google Play, and reach a global audience.",
    link:"https://drive.google.com/file/d/1qZzdM1-gvQ9gOYbNsAj3MYnEB-i2s0WU/view?usp=drive_link"
  },
  {
    id: 11,
    title: "Web Development Programming",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Web Development Programming is the process of creating websites and web applications. It involves writing code in programming languages like HTML, CSS, and JavaScript to build the structure, design, and functionality of a website. Web development programming also includes server-side scripting languages like PHP, Python, and Ruby on Rails to create dynamic web pages and interact with databases. Web developers use frameworks like React, Angular, and Vue.js to streamline development and enhance user experience. Web development programming is essential for creating responsive, interactive, and secure websites that meet modern web standards.",
    link:"https://drive.google.com/file/d/1adRpfEpJaCVQsbm-xJ6Dc8crA7lBmlcf/view?usp=drive_link"
  },
  {
    id: 12,
    title: "Python Programming",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Python Programming is a high-level, interpreted programming language known for its simplicity and readability. It is widely used for web development, data analysis, artificial intelligence, and scientific computing. Python has a large standard library that provides ready-to-use modules and functions for various tasks. Python's syntax is clean and easy to learn, making it an ideal language for beginners. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python programming is versatile, efficient, and scalable, making it a popular choice for developers worldwide.",
    link:"https://drive.google.com/file/d/1C6swbBi0jSCCBNBsD2PeavOCjgWioGlS/view?usp=drive_link"
  },
  {
    id: 13,
    title: "Programming & Coding Corses",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Programming & Coding Corses are designed to teach programming languages and coding skills to beginners and experienced developers. These courses cover a wide range of topics, including web development, mobile app development, data science, and machine learning. Programming & Coding Corses help students learn programming concepts, algorithms, data structures, and best practices. They also provide hands-on experience with coding exercises, projects, and real-world applications. Programming & Coding Corses are available in various formats, such as online courses, bootcamps, and workshops, to accommodate different learning styles and schedules.",
    link:"https://drive.google.com/file/d/1BWpiNtfCsDHliJjOlduru3eoCc_nbZ-I/view?usp=drive_link"
  },
  {
    id: 14,
    title: "PHP Programming",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "PHP Programming is a server-side scripting language used for web development. It is widely used to create dynamic web pages, e-commerce websites, content management systems, and web applications. PHP is easy to learn and offers a wide range of features, including database integration, file handling, and form processing. PHP works well with MySQL, Apache, and other web technologies, making it a popular choice for web developers. PHP programming is versatile, scalable, and secure, making it suitable for building robust and interactive websites. PHP developers can create custom solutions, automate tasks, and enhance user experience with PHP programming.",
    link:"https://drive.google.com/file/d/1zaQwzrksNVwLHOiv4tTUMxBItxzG8aPN/view?usp=drive_link"
  },
  {
    id: 15,
    title: "JAVA Programming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "JAVA Programming is a high-level, object-oriented programming language used to develop desktop, web, and mobile applications. It is known for its portability, security, and performance. Java applications run on the Java Virtual Machine (JVM), making them platform-independent. Java programming is used in a wide range of industries, including finance, healthcare, and e-commerce. It is popular for building enterprise-level applications, web services, and Android apps. Java developers use frameworks like Spring, Hibernate, and Struts to streamline development and enhance productivity. Java programming is versatile, scalable, and reliable, making it a top choice for software development.",
    link:"https://drive.google.com/file/d/10R5Qz9QTuxPQCTV8e3OKoNdLIVWD5YGz/view?usp=drive_link"
  },
  {
    id: 16,
    title: "Full Stack Programming",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Full Stack Programming is the practice of developing both the front-end and back-end of a website or application. Full stack developers are proficient in multiple programming languages, frameworks, and tools to build a complete software solution. They work on the client-side (front-end) using HTML, CSS, and JavaScript, and the server-side (back-end) using languages like Python, Ruby, or Node.js. Full stack programming requires knowledge of databases, APIs, version control, and deployment processes. Full stack developers can work on all aspects of a project, from design and development to testing and deployment. They are versatile, adaptable, and capable of handling complex software projects.",
    link:"https://drive.google.com/file/d/1AfY5fOFt481uXqL5nXZt-pr2voVk93we/view?usp=drive_link"
  },
  {
    id: 17,
    title: "FrontEnd Developer Programming",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "FrontEnd Developer Programming is the practice of creating the user interface and user experience of a website or application. Front-end developers use HTML, CSS, and JavaScript to build interactive and responsive web pages. They work closely with designers to implement the visual elements and layout of a website. Front-end developers focus on the client-side of web development, ensuring that the website is visually appealing, functional, and user-friendly. They use frameworks like React, Angular, and Vue.js to streamline development and enhance user experience. Front-end developer programming is essential for creating engaging and accessible websites that meet modern web standards.",
    link:"https://drive.google.com/file/d/1FpLA_MCPSk5w04VhxoPbQnjAM8dzJnvF/view?usp=drive_link"
  },
  {
    id: 18,
    title: "C, C++ Programming",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "C, C++ Programming is a high-level programming language used for system programming, embedded systems, and application development. C is a general-purpose language known for its efficiency, flexibility, and portability. C++ is an extension of C with additional features like object-oriented programming. C and C++ are widely used in software development, game development, and system programming. They provide low-level access to hardware, memory management, and system resources. C and C++ programming are essential for building high-performance applications, operating systems, and device drivers. Developers use C and C++ to create efficient and reliable software solutions.",
    link:"https://drive.google.com/file/d/1tn2ZDHmjpoHIbsXzdfA7udnzFiAkMWyf/view?usp=drive_link"
  },
  {
    id: 19,
    title: "Best Flutter Programming",
    image: "https://images.unsplash.com/photo-1635775017492-1eb935a082a4",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Best Flutter Programming is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename 'Sky' and ran on the Android operating system. It was unveiled at the 2015 Dart developer summit, with the stated intent of being able to render consistently at 120 frames per second. Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Flutter is used by developers and organizations around the world, and is free and open source.",
    link:"https://drive.google.com/file/d/1wFMNEdQcRKReWZxNV1cqw0DHcpVOT18l/view?usp=drive_link"
  },
  {
    id: 20,
    title: "Angular Programming",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Angular Programming is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps. The architecture of an Angular application relies on certain fundamental concepts. These include components, templates, directives, data binding, dependency injection, and routing. Angular is a complete rewrite from the same team that built AngularJS. Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps. The architecture of an Angular application relies on certain fundamental concepts. These include components, templates, directives, data binding, dependency injection, and routing.",
    link:"https://drive.google.com/file/d/1TU8v-bKXodiA8gYLlFFuht0lFIP6nf-b/view?usp=drive_link"
  },
  {
    id: 21,
    title: "Best React Programming",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Software Development',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "React Programming is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React has a few different kinds of components, but we'll start with React.Component subclasses: class components.",
    link:"https://drive.google.com/file/d/1jXfTmanWKn7lQf2ZfgDgYlW1ekYbOvA9/view?usp=drive_link"
  },
  {
    id: 22,
    title: "WordPress Training",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Specialized Courses',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "WordPress Training is a content management system that allows you to create and manage your website without any coding knowledge. It is the most popular CMS in the world, powering over 40% of all websites on the internet. WordPress is open-source and free to use, with a vast library of themes and plugins to customize your site. WordPress training covers topics like installation, setup, customization, and optimization. It is ideal for bloggers, small businesses, and e-commerce stores looking to create a professional website. WordPress training helps you learn how to create pages, posts, menus, and widgets, and manage your site's content effectively.",
    link:"https://drive.google.com/file/d/1MBNdPSQt_L9LccrHX_vTzO-mOrFaotZL/view?usp=drive_link"
  },
  {
    id: 23,
    title: "Node.js Training",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Specialized Courses',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Node.js Training is a runtime environment that allows you to run JavaScript on the server-side. It is built on the V8 JavaScript engine and uses an event-driven, non-blocking I/O model. Node.js is ideal for building scalable, real-time applications like chat apps, streaming services, and APIs. Node.js training covers topics like modules, events, streams, and file systems. It also includes frameworks like Express.js for building web applications. Node.js training helps you learn how to create servers, handle requests, and interact with databases using JavaScript. It is essential for full-stack developers, backend engineers, and JavaScript enthusiasts.",
    link:"https://drive.google.com/file/d/1I6B3yyhsvMe5IBUGNSkghdB8STxkkSXu/view?usp=drive_link"
  },
  {
    id: 24,
    title: "Megento Training",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Specialized Courses',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Megento Training is an open-source e-commerce platform written in PHP. It is one of the most popular e-commerce platforms in the world, with a large community of developers and users. Magento offers a wide range of features, including product management, order processing, payment gateways, and shipping options. Magento training covers topics like installation, configuration, customization, and optimization. It is ideal for businesses looking to create an online store with advanced features and functionality. Magento training helps you learn how to set up a store, add products, manage orders, and promote your store to attract customers.",
    link:"https://drive.google.com/file/d/1JkI6W_vLkOU5d-5nXp0Xl_S4xr7k5_7y/view?usp=drive_link"
  },
  {
    id: 25,
    title: "Codeigniter Training Course",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80",
    language: "HINGLISH",
    tags: 'Specialized Courses',
    // originalPrice: 9999,
    // discountedPrice: 4999,
    // discount: 50,
    // saleType: "Limited Time Discount",
    description: "Codeigniter Training Course is a powerful PHP framework with a small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications. CodeIgniter is an Application Development Framework - a toolkit - for people who build web sites using PHP. Its goal is to enable you to develop projects much faster than you could if you were writing code from scratch, by providing a rich set of libraries for commonly needed tasks, as well as a simple interface and logical structure to access these libraries. CodeIgniter lets you creatively focus on your project by minimizing the amount of code needed for a given task.",
    link:"https://drive.google.com/file/d/1UrQm9EwmySQax9Q4EWqRjTA7V2hMoeKQ/view?usp=drive_link"
  },

];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    'All',
    'Specialized Courses',
    'Software Development',
    'Mobile Development',
    'Digital Marketing',
    'Designing'
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.tags == selectedCategory);

  return <div>
    <Hero/>
    <WhyChooseUs id='whychooseuscourses'/>
    <OurFacts/>
    <CourseHighlights/>
    
      <h1 className="text-white text-center text-5xl font-semibold mb-8">Courses</h1>
      <div className="max-w-xs mx-auto mb-8">
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-zinc-800 text-white py-2 px-4 pr-8 rounded-lg appearance-none cursor-pointer border border-zinc-700 hover:border-zinc-600 transition-colors"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 pointer-events-none" size={20} />
        </div>
      </div>

    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
          ))}
  </div>
</div>
{selectedCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900/95 backdrop-blur-lg border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedCourse.title}</h2>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="flex flex-wrap gap-2">
                  {/* {selectedCourse.tags.map((tag, index) => (
                    <span key={index} className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-sm backdrop-blur-sm border border-red-500/20">
                      {tag}
                    </span>
                  ))} */}
                  <span className="bg-zinc-500/20 text-zinc-300 px-2 py-1 rounded text-sm backdrop-blur-sm border border-zinc-500/20">
                    {selectedCourse.language}
                  </span>
                </div>

                <p className="text-zinc-300 text-justify">{selectedCourse.description}</p>

                <a 
  href={selectedCourse.link} // Add the link to
  className="w-full bg-zinc-500 hover:bg-zinc-600 text-white py-3 rounded-lg transition-all duration-300 text-center block "
>
  Download PDF
</a>

                {/* <div>
                  <p className="text-emerald-400/90 text-sm mb-1">{selectedCourse.saleType}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-3xl font-bold">₹{selectedCourse.discountedPrice}</span>
                    <span className="text-zinc-400 line-through">₹{selectedCourse.originalPrice}</span>
                    <span className="bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCourse.discount}% OFF
                    </span>
                  </div>
                </div> */}
                <a href="https://wa.me/919510774987">

                <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg transition-all duration-300">
                  Enroll Now
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    <CourseCurriculum/>
    <Testimonials/>
  </div>;
};

export default Courses;
