import sImg2 from "@assets/images/small/img-2.jpg";
import sImg4 from "@assets/images/small/img-4.jpg";
import sImg7 from "@assets/images/small/img-7.jpg";
import sImg3 from "@assets/images/small/img-3.jpg";
import sImg8 from "@assets/images/small/img-8.jpg";

import cImg1 from "@assets/images/companies/img-1.png";
import cImg2 from "@assets/images/companies/img-2.png";
import cImg3 from "@assets/images/companies/img-3.png";
import cImg4 from "@assets/images/companies/img-4.png";
import cImg5 from "@assets/images/companies/img-5.png";
import cImg6 from "@assets/images/companies/img-6.png";
import cImg7 from "@assets/images/companies/img-7.png";
import cImg8 from "@assets/images/companies/img-8.png";
import cImg9 from "@assets/images/companies/img-9.png";

import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import avatar10 from "@assets/images/users/avatar-10.jpg";

import slack from "@assets/images/brands/slack.png";
import mail_chimp from "@assets/images/brands/mail_chimp.png";
import dropbox from "@assets/images/brands/dropbox.png";
import bitbucket from "@assets/images/brands/bitbucket.png";
import dribbble from "@assets/images/brands/dribbble.png";

// Jobs > Job Lists > List
const joblist = [{
    id: 1,
    img: sImg2,
    logo: cImg3,
    designation: "UI/UX designer",
    name: "Nesta Technologies",
    description: "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.",
    tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
    type: "Full Time",
    experience: "2 Year",
    location: "Escondido, California",
    applied: "640 Applied",
    postDate: "11 Sep, 2022"
}, {
    id: 2,
    img: sImg4,
    logo: cImg4,
    designation: "Marketing Director",
    name: "Meta4Systems",
    description: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents to do what we like best, every pleasure is to be welcomed and every pain avoided. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
    tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
    type: "Internship",
    experience: "Fresher",
    location: "Vinninga, Sweden",
    applied: "134 Applied",
    postDate: "13 Sep, 2022"
}, {
    id: 3,
    img: sImg7,
    logo: cImg5,
    designation: "Product Sales Specialist",
    name: "Digitech Galaxy",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
    type: "Part Time",
    experience: "0 - 5 Year",
    location: "Cullera, Spain",
    applied: "79 Applied",
    postDate: "14 Sep, 2022"
}, {
    id: 4,
    img: sImg3,
    logo: cImg6,
    designation: "Project Manager",
    name: "Syntyce Solutions",
    description: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated.",
    tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
    type: "Freelance",
    experience: "1 Year",
    location: "Stordorf, Germany",
    applied: "36 Applied",
    postDate: "14 Sep, 2022"
}, {
    id: 5,
    img: sImg8,
    logo: cImg7,
    designation: "Product Designer",
    name: "Themesbrand",
    description: "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products. If you're passionate about the latest technology trends and devices, you'll find great fulfillment in being involved in the design process for the next hot gadget.",
    tags: ["Design", "Remote", "UI/UX Designer", "Designer"],
    type: "Full Time",
    experience: "1 - 2 Year",
    location: "United Kingdom",
    applied: "74 Applied",
    postDate: "15 Sep, 2022"
}];

// Jobs > Job Lists > Grid
const jobgrid = [{
    id: 1,
    img: cImg1,
    designation: "Education Training",
    name: "Micro Design",
    location: "Escondido,California",
    postDate: "15 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time", "Freelance", "Urgent"],
}, {
    id: 2,
    img: cImg2,
    designation: "Magento Developer",
    name: "Themesbrand",
    location: "Stordorf, Germany",
    postDate: "15 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Part Time", "Freelance"],
}, {
    id: 3,
    img: cImg3,
    designation: "Product Designer",
    name: "Themesbrand",
    location: "Cullera, Spain",
    postDate: "14 Sep, 2022",
    status: "Close",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time", "Private"],
}, {
    id: 4,
    img: cImg5,
    designation: "React Developer",
    name: "iTest Factory",
    location: "Haren, Germany",
    postDate: "13 Sep, 2022",
    status: "New",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time", "Freelance", "Urgent"],
}, {
    id: 5,
    img: cImg6,
    designation: "UI/UX Designer",
    name: "Creative Team",
    location: "Vinninga, Sweden",
    postDate: "13 Sep, 2022",
    status: "Close",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Part Time"],
}, {
    id: 6,
    img: cImg7,
    designation: "Marketing Director",
    name: "Themesbrand",
    location: "Zhoukou, China",
    postDate: "12 Sep, 2022",
    status: "New",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Freelance", "Urgent"],
}, {
    id: 7,
    img: cImg8,
    designation: "Full Stack Engineer",
    name: "Syntyce Solutions",
    location: "Boroaia, Romania",
    postDate: "11 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time"],
}, {
    id: 8,
    img: cImg1,
    designation: "Project Manager",
    name: "Themesbrand",
    location: "Pazmand, Hungary",
    postDate: "11 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time", "Freelance"],
}, {
    id: 9,
    img: cImg2,
    designation: "HTML Developer",
    name: "Themesbrand",
    location: "Donsieders, Germany",
    postDate: "10 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Part Time", "Freelance"],
}, {
    id: 10,
    img: cImg3,
    designation: "Business Associate",
    name: "Themesbrand",
    location: "Sermerieu, France",
    postDate: "09 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time", "Freelance", "Urgent"],
}, {
    id: 11,
    img: cImg5,
    designation: "Assistant / Store Keeper",
    name: "Force Medicines",
    location: "San Lorenzo, Philippines",
    postDate: "08 Sep, 2022",
    status: "Close",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Part Time"],
}, {
    id: 12,
    img: cImg6,
    designation: "Product Sales Specialist",
    name: "Themesbrand",
    location: "Pazmand, Hungary",
    postDate: "08 Sep, 2022",
    status: "Active",
    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
    tags: ["Full Time", "Private"],
}];

// Jobs > Candidate Lists > List
const candidatelist = [{
    id: 1,
    img: avatar10,
    name: "Tonya Noble",
    designation: "Web Designer",
    location: "Cullera, Spain",
    type: "Part Time",
    rating: "4.2",
    ratingCount: "2.2k",
    bookmark: "true"
}, {
    id: 2,
    img: avatar1,
    name: "Nicholas Ball",
    designation: "Assistant / Store Keeper",
    location: "San Lorenzo",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "1.72k",
    bookmark: "true"
}, {
    id: 3,
    img: avatar4,
    name: "Zynthia Marrow",
    designation: "Assistant / Store Keeper",
    location: "Cullera, Spain",
    type: "Freelancer",
    rating: "4.0",
    ratingCount: "42.5k",
    bookmark: "false"
}, {
    id: 4,
    img: avatar2,
    name: "Philippa Santiago",
    designation: "Project Manager ",
    location: "Ugashik, US",
    type: "Part Time",
    rating: "4.3",
    ratingCount: "15k",
    bookmark: "true"
}, {
    id: 5,
    img: avatar4,
    name: "Elizabeth Allen",
    designation: "Education Training ",
    location: "Zuweihir, UAE",
    type: "Freelancer",
    rating: "3.5",
    ratingCount: "7.3k",
    bookmark: "false"
}, {
    id: 6,
    img: avatar5,
    name: "Cassian Jenning",
    designation: "Graphic Designer ",
    location: "Limestone, US",
    type: "Part Time",
    rating: "4.3",
    ratingCount: "13.2k",
    bookmark: "false"
}, {
    id: 7,
    img: avatar6,
    name: "Scott Holt",
    designation: "UI/UX Designer ",
    location: "Germany",
    type: "Part Time",
    rating: "3.5",
    ratingCount: "7.3k",
    bookmark: "false"
}, {
    id: 8,
    img: avatar9,
    name: "Philbert Schwartz",
    designation: "React Developer ",
    location: "Zuweihir, UAE",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "1.74k",
    bookmark: "true"
}, {
    id: 9,
    img: avatar2,
    name: "Larry Villa",
    designation: "Assistant / Store Keeper",
    location: "San Lorenzo",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "1.72k",
    bookmark: "false"
}, {
    id: 10,
    img: avatar10,
    name: "Harley Watkins",
    designation: "Project Manager ",
    location: "Texanna, US",
    type: "Full Time",
    rating: "4.2",
    ratingCount: "3.21k",
    bookmark: "false"
}, {
    id: 11,
    img: avatar2,
    name: "Marie Stewart",
    designation: "Web Designer",
    location: "Cullera, Spain",
    type: "Part Time",
    rating: "4.2",
    ratingCount: "2.2k",
    bookmark: "true"
}, {
    id: 12,
    img: avatar9,
    name: "Hadley Leonard",
    designation: "Executive, HR Operations ",
    location: "Zuweihir, UAE",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "3.2k",
    bookmark: "false"
}, {
    id: 13,
    img: avatar6,
    name: "Zoderick Rodriquez",
    designation: "Full Stack Developer",
    location: "Muhtarqah, UAE",
    type: "Freelancer",
    rating: "3.9",
    ratingCount: "98.65k",
    bookmark: "false"
}, {
    id: 14,
    img: avatar7,
    name: "Nadia Harding",
    designation: "Web Designer",
    location: "Pahoa, US",
    type: "Freelancer",
    rating: "4.3",
    ratingCount: "2.93k",
    bookmark: "true"
}, {
    id: 15,
    img: avatar1,
    name: "Addison Black",
    designation: "UI/UX Designer",
    location: "Phoenix, Arizona",
    type: "Part Time",
    rating: "3.8",
    ratingCount: "10.32k",
    bookmark: "false"
}, {
    id: 16,
    img: avatar4,
    name: "Priscilla Wise",
    designation: "Executive, HR Operations",
    location: "Ghurayfah, UAE",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "7.36k",
    bookmark: "false"
}, {
    id: 17,
    img: avatar8,
    name: "Lizzie Chandler",
    designation: "React Developer",
    location: "Maidaq, UAE",
    type: "Part Time",
    rating: "3.9",
    ratingCount: "1.35k",
    bookmark: "false"
}, {
    id: 18,
    img: avatar1,
    name: "Jenson Carlson",
    designation: "Graphic Designer",
    location: "Quesada, US",
    type: "Freelancer",
    rating: "4.2",
    ratingCount: "3.16k",
    bookmark: "false"
}, {
    id: 19,
    img: avatar1,
    name: "Jaylee Ward",
    designation: "Education Training",
    location: "Cullera, Spain",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "3.21k",
    bookmark: "true"
}, {
    id: 20,
    img: avatar2,
    name: "Trista Guerrero",
    designation: "Product Director",
    location: "Jereirah, UAE",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "4.31k",
    bookmark: "false"
}, {
    id: 21,
    img: avatar1,
    name: "James Stone",
    designation: "Graphic Designer",
    location: "Quesada, US",
    type: "Freelancer",
    rating: "4.2",
    ratingCount: "3.16k",
    bookmark: "false"
}, {
    id: 22,
    img: avatar4,
    name: "Mike Watson",
    designation: "Product Director",
    location: "Jereirah, UAE",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "4.13k",
    bookmark: "false"
}, {
    id: 23,
    img: avatar9,
    name: "Mary Sak",
    designation: "Education Training",
    location: "Cullera, Spain",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "3.21k",
    bookmark: "true"
}, {
    id: 24,
    img: avatar8,
    name: "Roderick Jones",
    designation: "React Developer",
    location: "Maidaq, UAE",
    type: "Part Time",
    rating: "3.9",
    ratingCount: "1.35k",
    bookmark: "false"
}];

// Jobs > Candidate Lists > Grid
const candidategrid = [{
    id: 1,
    img: avatar10,
    name: "Tonya Noble",
    designation: "Web Designer",
    location: "Cullera, Spain",
    type: "Part Time",
    rating: "4.2",
    ratingCount: "2.2k",
    bookmark: true
}, {
    id: 2,
    img: avatar1,
    name: "Nicholas Ball",
    designation: "Assistant / Store Keeper",
    location: "San Lorenzo",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "1.72k",
    bookmark: true
}, {
    id: 3,
    img: avatar4,
    name: "Zynthia Marrow",
    designation: "Assistant / Store Keeper",
    location: "Cullera, Spain",
    type: "Freelancer",
    rating: "4.0",
    ratingCount: "42.5k",
    bookmark: false
}, {
    id: 4,
    img: avatar2,
    name: "Philippa Santiago",
    designation: "Project Manager ",
    location: "Ugashik, US",
    type: "Part Time",
    rating: "4.3",
    ratingCount: "15k",
    bookmark: true
}, {
    id: 5,
    img: avatar4,
    name: "Elizabeth Allen",
    designation: "Education Training ",
    location: "Zuweihir, UAE",
    type: "Freelancer",
    rating: "3.5",
    ratingCount: "7.3k",
    bookmark: false
}, {
    id: 6,
    img: avatar5,
    name: "Cassian Jenning",
    designation: "Graphic Designer ",
    location: "Limestone, US",
    type: "Part Time",
    rating: "4.3",
    ratingCount: "13.2k",
    bookmark: false
}, {
    id: 7,
    img: avatar6,
    name: "Scott Holt",
    designation: "UI/UX Designer ",
    location: "Germany",
    type: "Part Time",
    rating: "3.5",
    ratingCount: "7.3k",
    bookmark: false
}, {
    id: 8,
    img: avatar9,
    name: "Philbert Schwartz",
    designation: "React Developer ",
    location: "Zuweihir, UAE",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "1.74k",
    bookmark: true
}, {
    id: 9,
    img: avatar2,
    name: "Larry Villa",
    designation: "Assistant / Store Keeper",
    location: "San Lorenzo",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "1.72k",
    bookmark: false
}, {
    id: 10,
    img: avatar10,
    name: "Harley Watkins",
    designation: "Project Manager ",
    location: "Texanna, US",
    type: "Full Time",
    rating: "4.2",
    ratingCount: "3.21k",
    bookmark: false
}, {
    id: 11,
    img: avatar2,
    name: "Marie Stewart",
    designation: "Web Designer",
    location: "Cullera, Spain",
    type: "Part Time",
    rating: "4.2",
    ratingCount: "2.2k",
    bookmark: true
}, {
    id: 12,
    img: avatar9,
    name: "Hadley Leonard",
    designation: "Executive, HR Operations ",
    location: "Zuweihir, UAE",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "3.2k",
    bookmark: false
}, {
    id: 13,
    img: avatar6,
    name: "Zoderick Rodriquez",
    designation: "Full Stack Developer",
    location: "Muhtarqah, UAE",
    type: "Freelancer",
    rating: "3.9",
    ratingCount: "98.65k",
    bookmark: false
}, {
    id: 14,
    img: avatar7,
    name: "Nadia Harding",
    designation: "Web Designer",
    location: "Pahoa, US",
    type: "Freelancer",
    rating: "4.3",
    ratingCount: "2.93k",
    bookmark: true
}, {
    id: 15,
    img: avatar9,
    name: "Addison Black",
    designation: "UI/UX Designer",
    location: "Phoenix, Arizona",
    type: "Part Time",
    rating: "3.8",
    ratingCount: "10.32k",
    bookmark: false
}, {
    id: 16,
    img: avatar4,
    name: "Priscilla Wise",
    designation: "Executive, HR Operations",
    location: "Ghurayfah, UAE",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "7.36k",
    bookmark: false
}, {
    id: 17,
    img: avatar8,
    name: "Lizzie Chandler",
    designation: "React Developer",
    location: "Maidaq, UAE",
    type: "Part Time",
    rating: "3.9",
    ratingCount: "1.35k",
    bookmark: false
}, {
    id: 18,
    img: avatar1,
    name: "Jenson Carlson",
    designation: "Graphic Designer",
    location: "Quesada, US",
    type: "Freelancer",
    rating: "4.2",
    ratingCount: "3.16k",
    bookmark: false
}, {
    id: 19,
    img: avatar6,
    name: "Jaylee Ward",
    designation: "Education Training",
    location: "Cullera, Spain",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "3.21k",
    bookmark: true
}, {
    id: 20,
    img: avatar2,
    name: "Trista Guerrero",
    designation: "Product Director",
    location: "Jereirah, UAE",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "4.31k",
    bookmark: false
}, {
    id: 21,
    img: avatar1,
    name: "James Stone",
    designation: "Graphic Designer",
    location: "Quesada, US",
    type: "Freelancer",
    rating: "4.2",
    ratingCount: "3.16k",
    bookmark: false
}, {
    id: 22,
    img: avatar4,
    name: "Mike Watson",
    designation: "Product Director",
    location: "Jereirah, UAE",
    type: "Full Time",
    rating: "4.1",
    ratingCount: "4.13k",
    bookmark: false
}, {
    id: 23,
    img: avatar5,
    name: "Mary Sak",
    designation: "Education Training",
    location: "Cullera, Spain",
    type: "Full Time",
    rating: "4.0",
    ratingCount: "3.21k",
    bookmark: true
}, {
    id: 24,
    img: avatar8,
    name: "Roderick Jones",
    designation: "React Developer",
    location: "Maidaq, UAE",
    type: "Part Time",
    rating: "3.9",
    ratingCount: "1.35k",
    bookmark: false
}];

// Jobs > Application
const application = [{
    id: "001",
    img: cImg4,
    name: "Syntyce Solutions",
    designation: "Web Designer",
    date: "30 Sep, 2022",
    contacts: "785-685-4616",
    type: "Full Time",
    status: "Rejected"
},
{
    id: "002",
    img: slack,
    name: "Plunkett Infotech",
    designation: "Product Designer",
    date: "26 Sep, 2022",
    contacts: "734-544-2407",
    type: "Full Time",
    status: "New"
}, {
    id: "003",
    img: cImg4,
    name: "Martin's",
    designation: "Business Associate",
    date: "26 Sep, 2022",
    contacts: "303-606-1985",
    type: "Part Time",
    status: "New"
}, {
    id: "004",
    img: cImg3,
    name: "Meta4Systems",
    designation: "Magento Developer",
    date: "27 Sep, 2022",
    contacts: "610-440-0592",
    type: "Part Time",
    status: "Rejected"
}, {
    id: "005",
    img: cImg4,
    name: "Grey Fade",
    designation: "Marketing Director",
    date: "28 Sep, 2022",
    contacts: "907-452-3702",
    type: "Full Time",
    status: "Pending"
}, {
    id: "006",
    img: mail_chimp,
    name: "Syntyce Solutions",
    designation: "Project Manager",
    date: "28 Sep, 2022",
    contacts: "803-740-3309",
    type: "Part Time",
    status: "Approved"
}, {
    id: "007",
    img: dropbox,
    name: "Micro Design",
    designation: "HTML Developer",
    date: "29 Sep, 2022",
    contacts: "563-940-8926",
    type: "Part Time",
    status: "New"
}, {
    id: "008",
    img: cImg6,
    name: "Android Galaxy",
    designation: "Product Sales Specialist",
    date: "29 Sep, 2022",
    contacts: "352-403-5870",
    type: "Full Time",
    status: "Pending"
}, {
    id: "009",
    img: cImg1,
    name: "Digitech Galaxy",
    designation: "Magento Developer",
    date: "29 Sep, 2022",
    contacts: "517-745-4446",
    type: "Part Time",
    status: "New"
}, {
    id: "010",
    img: bitbucket,
    name: "iTest Factory",
    designation: "Business Associate",
    date: "30 Sep, 2022",
    contacts: "814-434-0128",
    type: "Part Time",
    status: "Approved"
}, {
    id: "011",
    img: dribbble,
    name: "Nesta Technologies",
    designation: "UI/UX Designer",
    date: "01 Sep, 2022",
    contacts: "304-338-0822",
    type: "Part Time",
    status: "Pending"
}, {
    id: "012",
    img: cImg4,
    name: "Digitech Galaxy",
    designation: "Product Designer",
    date: "02 Sep, 2022",
    contacts: "320-336-1796",
    type: "Full Time",
    status: "New"
}, {
    id: "013",
    img: slack,
    name: "Syntyce Solutions",
    designation: "Web Designer",
    date: "02 Sep, 2022",
    contacts: "785-685-4616",
    type: "Full Time",
    status: "Rejected"
}];

// Jobs > Companies List
const companiesList = [{
    id: 1,
    image_src: cImg3,
    name: "Martin's Solutions",
    industry_type: "IT Department",
    vacancy: "97",
    company_info: "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
    location: "Cullera, Spain",
    employee: "250-300",
    rating: "4.8",
    website: "www.martinsolution.com",
    email: "info@martinsolution.com",
    since: "1995"
}, {
    id: 2,
    image_src: cImg4,
    name: "Syntyce Solutions",
    industry_type: "Health Services",
    vacancy: "31",
    company_info: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents to do what we like best, every pleasure is to be welcomed and every pain avoided, because it is pleasure.",
    location: "San Lorenzo",
    employee: "400-450",
    rating: "4.4",
    website: "www.syntycesolution.com",
    email: "info@syntycesolution.com",
    since: "2001"
}, {
    id: 3,
    image_src: cImg1,
    name: "Moetic Fashion",
    industry_type: "Textiles: Clothing, Footwear",
    vacancy: "641",
    company_info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim quia voluptas sit.",
    location: "Cullera, Spain",
    employee: "900-950",
    rating: "4.2",
    website: "-",
    email: "email@moeticfashion.com",
    since: "2000"
}, {
    id: 4,
    image_src: cImg5,
    name: "Meta4Systems",
    industry_type: "Computer Industry",
    vacancy: "322",
    company_info: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur.",
    location: "Ugashik, US",
    employee: "10-50",
    rating: "4.5",
    website: "www.meta4systems.com",
    email: "support@meta4systems.com",
    since: "2019"
}, {
    id: 5,
    image_src: cImg1,
    name: "Kent's",
    industry_type: "IT Department",
    vacancy: "10",
    company_info: "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical. If you're passionate, you'll find great fulfillment in being involved in the design process for the next hot gadget.",
    location: "Zuweihir, UAE",
    employee: "10-50",
    rating: "4.1",
    website: "-",
    email: "-",
    since: "2018"
}, {
    id: 6,
    image_src: cImg7,
    name: "Micro Design",
    industry_type: "Financial Services",
    vacancy: "140",
    company_info: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.If several languages coalesce, the grammar of the resulting If several languages coalesce, the grammar of the resulting.",
    location: "Limestone, US",
    employee: "300-350",
    rating: "4.5",
    website: "www.microdesign.com",
    email: "info@microdesign.com",
    since: "2016"
}, {
    id: 7,
    image_src: cImg6,
    name: "Zoetic Fashion",
    industry_type: "Textiles: Clothing, Footwear",
    vacancy: "21",
    company_info: "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages existing.",
    location: "Germany",
    employee: "10-50",
    rating: "3.9",
    website: "-",
    email: "info@zoeticfashion.com",
    since: "2018"
}, {
    id: 8,
    image_src: cImg8,
    name: "Digitech Galaxy",
    industry_type: "Telecommunications Services",
    vacancy: "154",
    company_info: "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
    location: "Zuweihir, UAE",
    employee: "400-415",
    rating: "4.0",
    website: "-",
    email: "-",
    since: "2014"
}, {
    id: 9,
    image_src: cImg9,
    name: "Erlebacher's",
    industry_type: "Health Services",
    vacancy: "134",
    company_info: "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable.",
    location: "San Lorenzo",
    employee: "350-400",
    rating: "4.4",
    website: "-",
    email: "info@erlebacher.com",
    since: "2016"
}, {
    id: 10,
    image_src: cImg5,
    name: "iTest Factory",
    industry_type: "Chemical Industries",
    vacancy: "126",
    company_info: "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",
    location: "Texanna, US",
    employee: "250-300",
    rating: "4.5",
    website: "-",
    email: "info@itest.com",
    since: "2016"
}, {
    id: 11,
    image_src: cImg7,
    name: "Zoetic Fashion",
    industry_type: "Textiles: Clothing, Footwear",
    vacancy: "47",
    company_info: "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
    location: "Cullera, Spain",
    employee: "120-150",
    rating: "4.7",
    website: "www.zoeticfashion.com",
    email: "info@zoeticfashion.com",
    since: "2015"
}, {
    id: 12,
    image_src: cImg3,
    name: "Micro Design",
    industry_type: "IT Department",
    vacancy: "23",
    company_info: "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce of the resulting.",
    location: "Zuweihir, UAE",
    employee: "80-100",
    rating: "4.6",
    website: "www.microdesign.com",
    email: "info@microdesign.com",
    since: "2014"
}, {
    id: 13,
    image_src: cImg4,
    name: "Syntyce Solutions",
    industry_type: "Computer Industry",
    vacancy: "11",
    company_info: "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
    location: "Muhtarqah, UAE",
    employee: "50-70",
    rating: "4.2",
    website: "www.syntycesolutions.com",
    email: "support@syntycesolutions.com",
    since: "2016"
}, {
    id: 14,
    image_src: cImg1,
    name: "Asiatic Solutions",
    industry_type: "Health Services",
    vacancy: "9",
    company_info: "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is new common language will be more simple and regular than the existing European languages.",
    location: "Pahoa, US",
    employee: "30-50",
    rating: "3.8",
    website: "www.asiaticsolution.com",
    email: "info@asiaticsolution.com",
    since: "2019"
}, {
    id: 15,
    image_src: cImg1,
    name: "Great Clothes",
    industry_type: "Textiles: Clothing, Footwear",
    vacancy: "60",
    company_info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
    location: "Phoenix, Arizona",
    employee: "120-150",
    rating: "4.0",
    website: "-",
    email: "-",
    since: "2017"
}, {
    id: 16,
    image_src: cImg5,
    name: "Kent's Solutions",
    industry_type: "IT Department",
    vacancy: "26",
    company_info: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.",
    location: "Ghurayfah, UAE",
    employee: "50-80",
    rating: "4.2",
    website: "www.kentssolution.com",
    email: "info@kentssolution.com",
    since: "2018"
}, {
    id: 17,
    image_src: cImg4,
    name: "Syntyce Solutions",
    industry_type: "Computer Industry",
    vacancy: "11",
    company_info: "The IT department of a company ensures that the network of computers within the organization are well-connected and functioning properly. All the other departments within the company rely on them to ensure that their respective functions can go on seamlessly.",
    location: "Maidaq, UAE",
    employee: "50-70",
    rating: "4.2",
    website: "www.syntycesolutions.com",
    email: "support@syntycesolutions.com",
    since: "2016"
}, {
    id: 18,
    image_src: cImg4,
    name: "Syntyce Solutions",
    industry_type: "Health Services",
    vacancy: "31",
    company_info: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents to do what we like best, every pleasure is to be welcomed and every pain avoided, because it is pleasure.",
    location: "Quesada, US",
    employee: "400-450",
    rating: "4.4",
    website: "www.syntycesolution.com",
    email: "info@syntycesolution.com",
    since: "2001"
}, {
    id: 19,
    image_src: cImg5,
    name: "iTest Factory",
    industry_type: "Chemical Industries",
    vacancy: "126",
    company_info: "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.",
    location: "Cullera, Spain",
    employee: "250-300",
    rating: "4.5",
    website: "-",
    email: "info@itest.com",
    since: "2016"
}, {
    id: 20,
    image_src: cImg6,
    name: "Zoetic Fashion",
    industry_type: "Textiles: Clothing, Footwear",
    vacancy: "21",
    company_info: "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages existing.",
    location: "Jereirah, UAE",
    employee: "10-50",
    rating: "3.9",
    website: "-",
    email: "info@zoeticfashion.com",
    since: "2018"
}];

export { joblist, jobgrid, candidatelist, candidategrid, application, companiesList };