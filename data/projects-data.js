/**
 * 🔥 Projects Data 🔥
 * - id: Unique project ID (Do not change to avoid issues).
 * - title: Project name.
 * - mainColor: Primary color of the project.
 * - type: Website, Video, UI Design, etc. (What type of project is this?).
 * - yearCreated: Year the project was created (To keep track of your work history).
 * - projectGoal: What is the goal of this project?
 * - logo: File name of the project logo (Located in the "projects-logos" folder).
 * - image: File name of the project image (Located in the "images" folder).
 * - projectLink: Project link (video, website, image, design).
 * - overview: A brief description of what this project is about.
 * - techStacks: List of technologies/tools used in this project.
 */



const projects = [
  {
    id: 0, // Don't change the project ID
    title: 'Landing Page Website',
    mainColor: '#00ADB5',
    type: 'Landing Page',
    yearCreated: '2025',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 1.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image1.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://www.figma.com/proto/Ln6tr4NeU2aiauUa90to2Y/Landing-Page?node-id=0-1&t=kUUNeFNPI4VZ9ewJ-1',
    overview: `During my UI/UX internship, I led the visual design of this project, creating all logos and interface designs to ensure a consistent and engaging user experience.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Figma',
        type: 'HyperText Markup Language',
        icon: 'figma icon.png',      
      }
    ]
  },
  {
    id: 1, // Don't change the project ID
    title: 'Graftify',
    mainColor: '#e6c200',
    type: 'Mobile App',
    yearCreated: '2024',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 2.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image2.png', // Addpng your project image to the "images" folder and specify the filename here
    projectLink: 'https://mega.nz/file/eBoEFDoJ#ZMKER2uv9BS-vaOuheFuLEu97s1tMhjjoHZTQxcjorg',
    overview: `Graftify is a mobile application I designed as part of our capstone project. I was solely responsible for the entire user interface, including the layout, custom icons, logos, and all screen designs. This project showcases my skills in UI/UX design, visual branding, and mobile app prototyping.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'HTML',
        type: 'HyperText Markup Language',
        icon: 'html icon.png',      
      },
      {
        name: 'CSS',
        type: 'Stylesheets',
        icon: 'css-3 icon.png',      
      }
    ]
  },
  {
    id: 2, // Don't change the project ID
    title: 'Graftify App Logo',
    mainColor: '#e6c200',
    type: 'Logo Creation',
    yearCreated: '2025',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 3.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image3.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://meowish-0.github.io/Meowish-Website3/page.html',
    overview: `This logo was developed as part of our capstone project and is designed to represent both a leaf and the letter 'G', symbolizing the concept of grafting. The design aligns with the core functionality of the mobile application, which focuses on scanning and analyzing leaves. It reflects the integration of nature and technology, visually reinforcing the purpose and identity of the app.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Autodesk Sketchbook App',
        type: 'Drawing app',
        icon: 'Autodesk Sketchbook icon.jpg',      
      }
    ]
  },
  {
    id: 3, // Don't change the project ID
    title: 'Logo Creation',
    mainColor: 'yellow',
    type: 'Website',
    yearCreated: '2025',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 4.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image4.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://drive.google.com/drive/u/0/folders/1CnYHShk3KEDoDkzlYLGcEuzehJJhmvRv',
    overview: `This logo was created during my spare time as a personal design exploration. It symbolizes technology and the concept of 'shards', representing innovation, connectivity, and the dynamic nature of the company’s identity. The design reflects my interest in modern branding and conceptual logo creation."`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Autodesk Sketchbook',
        type: 'Drawing App',
        icon: 'Autodesk Sketchbook icon.jpg',      
      },
    ]
  },
  {
    id: 4, // Don't change the project ID
    title: 'Personal Project',
    mainColor: 'rgb(0, 170, 255)',
    type: '2D Animation',
    yearCreated: '2024',
    projectGoal: 'To display some of my information',
    logo: 'project logo 5.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image5.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://drive.google.com/drive/u/0/folders/1YPsrc7Bg-B7ooe8Qw80hr-6gH8a5rdSq', //paste your project link, if your project is video upload to drive or YT the paste the link here
    overview: `This project was developed as part of our final academic requirement, in which we were tasked with creating a short animated film. I was responsible for the animation, using Sketchbook for the illustrations and Flipaclip to bring the visuals to life. This project highlights my skills in digital illustration, storytelling, and 2D animation.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Flipaclip',
        type: 'Animation App',
        icon: 'Flipaclip icon.jpg',      
      }
    ]
  },
  {
    id: 5, // Don't change the project ID
    title: 'Grafting technique',
    mainColor: 'rgb(111, 0, 202)',
    type: '2D Animation',
    yearCreated: '2024',
    projectGoal: 'To display some of my information',
    logo: 'project logo 6.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image6.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://drive.google.com/drive/u/0/search?q=grafting%20type:folder',
    overview: `This 2D animation was developed as part of our capstone project. I created a visual simulation of the grafting technique to clearly and accurately demonstrate the correct procedure. The animation aimed to simplify complex agricultural practices through engaging and educational visual content.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Flipaclip',
        type: 'Animation App',
        icon: 'Flipaclip icon.jpg',      
      }
    ]
  }
];


export { projects };
