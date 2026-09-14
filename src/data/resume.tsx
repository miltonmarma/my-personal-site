import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Angular } from "@/components/ui/svgs/angular";
import { Spring } from "@/components/ui/svgs/spring";
import { Dotnet } from "@/components/ui/svgs/dotnet";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Aws } from "@/components/ui/svgs/aws";

export const DATA = {
  name: "Uaungchain Marma Milton",
  initials: "UMM",
  url: "https://miltonmarma.me",
  location: "Champatali, Bandarban, Bangladesh",
  locationLink: "https://www.google.com/maps/place/bandarban",
  description:
    "Software Artist | Indie Hacker",
  summary:
    "I'm a software engineer with 6+ years of experience building full-stack applications across healthcare, fintech, and government platforms. I'm currently at [Healacle](/#work), where I build a healthcare claims management system with Spring Boot, PostgreSQL, and React/TypeScript, and help to manage the AWS infrastructure behind it. Before that I shipped subscription billing and reporting features at SetSchedule, and led development of the National Skills Portal of Bangladesh at Synesis IT. Outside of work, I founded Chaloong, a non-profit documenting Indigenous cultures and languages in Bangladesh, and served as General Secretary of Badhan's BUET Suhrawardy Hall unit, a voluntary blood donation organization.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    contact: {
      order: 5, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Send me a direct message on LinkedIn or drop me an email and I'll get back to you whenever I can. I'll ignore all soliciting.",
    },
  },
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: Spring },
    { name: "C#", icon: Csharp },
    { name: ".NET", icon: Dotnet },
    { name: "Angular", icon: Angular },
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "AWS", icon: Aws },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "miltonmarma120@gmail.com",
    tel: "+8801720298317",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/miltonmarma",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uaungchain-marma-milton/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@miltonmarma120",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "miltonmarma120@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Healacle",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://avatar.vercel.sh/healacle?size=40",
      start: "February 2025",
      end: undefined,
      description:
        "Develop and maintain a healthcare claims management system handling the end-to-end claim lifecycle using Spring Boot, PostgreSQL, and React/TypeScript. Configure and manage AWS infrastructure, including Secrets Manager for credential management, S3 document handling with presigned URLs, CloudWatch centralized logging, and EC2 deployment with Spring Boot Actuator health checks.",
    },
    {
      company: "SetSchedule",
      href: "https://www.setschedule.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=setschedule.com&sz=128",
      start: "July 2023",
      end: "November 2024",
      description:
        "Integrated Stripe Payment Links and webhooks to manage subscription updates. Built Balance Sheet and P&L reports for Rentastic using Laravel. Deployed a Nuxt.js app from a subdomain to a subdirectory using an AWS Application Load Balancer.",
    },
    {
      company: "Synesis IT",
      href: "#",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer",
      logoUrl: "https://avatar.vercel.sh/synesis-it?size=40",
      start: "October 2018",
      end: "December 2022",
      description:
        "Led development of the National Skills Portal of Bangladesh, managing team collaboration and task delegation. Built a dynamic JSON-based form generator using Angular. Developed reporting and dashboard solutions with Spring Boot, Angular, and RabbitMQ, supporting the 16263 National Healthcare Call Center.",
    },
    {
      company: "Interconnection Ltd",
      href: "#",
      badges: [],
      location: "Dhaka, Bangladesh",
      title: "Junior Software Engineer",
      logoUrl: "https://avatar.vercel.sh/interconnection?size=40",
      start: "May 2018",
      end: "August 2018",
      description:
        "Contributed to writing unit tests, fixing UI bugs, and building APIs with Django and AngularJS for a healthcare solution.",
    },
  ],
  education: [
    {
      school: "Bangladesh University of Engineering and Technology (BUET)",
      href: "https://www.buet.ac.bd/web/#/",
      degree: "Bachelor of Science in Computer Science and Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=buet.ac.bd&sz=128",
      start: "2013",
      end: "2019",
    },
  ],
} as const;
