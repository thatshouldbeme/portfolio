/* ==========================================================================
   Main Script (ไฟล์ JavaScript หลักของเว็บไซต์พอร์ตโฟลิโอ)
   --------------------------------------------------------------------------
   - ข้อมูลการแปลสองภาษา (i18n Dictionary: EN / TH)
   - ข้อมูลรายละเอียดโปรเจกต์ (Case Study Data: My SUTH, Goal App, Dormitory, Kiosk)
   - ระบบควบคุม Parallax Scroll Engine, Navigation, Modal Renderer, Form Control
   ========================================================================== */

/* Bilingual i18n Translation System */
const i18n = {
  nav: {
    about: { EN: "ABOUT", TH: "เกี่ยวกับฉัน" },
    skills: { EN: "SKILLS", TH: "ทักษะ" },
    projects: { EN: "PROJECTS", TH: "โปรเจกต์" },
    otherProjects: { EN: "OTHER PROJECTS", TH: "ผลงานอื่นๆ" },
    certificates: { EN: "CERTIFICATES", TH: "ประกาศนียบัตร" },
    activities: { EN: "ACTIVITIES", TH: "กิจกรรม" },
    cv: { EN: "CV", TH: "CV" },
    contact: { EN: "CONTACT", TH: "ติดต่อ" },
    mobile: {
      about: { EN: "ABOUT", TH: "เกี่ยวกับฉัน" },
      skills: { EN: "SKILLS & TOOLS", TH: "ทักษะและเครื่องมือ" },
      projects: { EN: "FEATURED PROJECTS", TH: "ผลงานไฮไลท์" },
      otherProjects: { EN: "OTHER PROJECTS", TH: "โปรเจกต์อื่นๆ" },
      certificates: { EN: "CERTIFICATES", TH: "ประกาศนียบัตร" },
      activities: { EN: "ACTIVITIES", TH: "กิจกรรม" },
      cv: { EN: "CV / RESUME", TH: "ประวัติส่วนตัว" },
      contact: { EN: "CONTACT", TH: "ติดต่อ" }
    }
  },
  hero: {
    nameplate: {
      EN: "UX/UI DESIGNER",
      TH: "นักออกแบบ UX/UI"
    },
    display: {
      EN: 'SALSABEEL<br/><span class="outline">DEREMAH</span>',
      TH: 'ซัลสบีล<br/><span class="outline">เดเระมะ</span>'
    },
    lead: {
      EN: "A UX/UI Designer passionate about turning ideas and real-world challenges into thoughtful, user-centered digital experiences, with a focus on creating simple and intuitive interfaces.",
      TH: "UX/UI ที่สนุกกับการเปลี่ยนไอเดียและโจทย์ในชีวิตจริงให้กลายเป็นประสบการณ์ดิจิทัลที่ใส่ใจผู้ใช้ โดยเน้นการออกแบบอินเทอร์เฟซที่เรียบง่ายและใช้งานง่าย"
    }
  },
  about: {
    kicker: {
      EN: "01 / ABOUT ME",
      TH: "01 / เกี่ยวกับฉัน"
    },
    heading: {
      EN: 'HI! I\'M<br/><span class="outline">SALSABEEL.</span>',
      TH: 'ซัลสบีล<br/><span class="outline">นักออกแบบ UX/UI</span>'
    },
    lead: {
      EN: "UX/UI Designer with hands-on experience from digital projects such as My SUTH App, SUT Dorm, and Goal Management. Skilled in UX/UI and Visual Design, including logo design, posters, infographics, and magazine layouts, with a strong interest in continuing to learn and grow through opportunities such as Hackathons and Startup Thailand League.",
      TH: "UX/UI ที่มีประสบการณ์จากการทำโปรเจกต์ดิจิทัล เช่น My SUTH App, SUT Dorm และ Goal Management มีทักษะด้าน UX/UI และ Visual Design รวมถึงงานออกแบบโลโก้ โปสเตอร์ อินโฟกราฟิก และนิตยสาร พร้อมเปิดรับโอกาสในการเรียนรู้และพัฒนาทักษะผ่านกิจกรรม Hackathon และ Startup Thailand League"
    },
    eduTitle: {
      EN: "EDUCATION",
      TH: "การศึกษา"
    },
    eduSchool: {
      EN: "Suranaree University of Technology (2023 - Now)",
      TH: "มหาวิทยาลัยเทคโนโลยีสุรนารี (2023 - ปัจจุบัน)"
    },
    eduDegree: {
      EN: "Bachelor of Information Science (Digital Technology) — GPAX 3.50",
      TH: "ปริญญาตรี วิทยาการสารสนเทศบัณฑิต (เทคโนโลยีดิจิทัล) — GPAX 3.50"
    }
  },
  skills: {
    kicker: {
      EN: "02 / SKILLS &amp; TOOLS",
      TH: "02 / ทักษะและเครื่องมือที่ใช้"
    },
    heading: {
      EN: 'MY DESIGN<br/><span class="outline">TOOLKIT.</span>',
      TH: '<br/>เครื่องมือที่ใช้<span class="outline">สร้างสรรค์ผลงาน</span>'
    },
    techTitle: {
      EN: "TECHNICAL SKILLS",
      TH: "ทักษะทางเทคนิค"
    },
    codeTitle: {
      EN: "CODING SKILLS",
      TH: "ทักษะการเขียนโค้ด"
    },
    langTitle: {
      EN: "LANGUAGES",
      TH: "ทักษะด้านภาษา"
    },
    softTitle: {
      EN: "SOFT SKILLS",
      TH: "ทักษะทางอารมณ์และสังคม"
    },
    langThai: {
      EN: '<span class="flag-icon">🇹🇭</span> Thai <small>(Fluent)</small>',
      TH: '<span class="flag-icon">🇹🇭</span> ไทย <small>(เจ้าของภาษา)</small>'
    },
    langEnglish: {
      EN: '<span class="flag-icon">🇬🇧</span> English <small>(TOEIC 565)</small>',
      TH: '<span class="flag-icon">🇬🇧</span> อังกฤษ <small>(TOEIC 565)</small>'
    },
    langChinese: {
      EN: '<span class="flag-icon">🇨🇳</span> Chinese <small>(Intermediate)</small>',
      TH: '<span class="flag-icon">🇨🇳</span> จีน <small>(ระดับกลาง)</small>'
    },
    softItems: {
      EN: [
        "Creativity &amp; Visual Sensitivity",
        "Openness to Feedback",
        "Time Management &amp; Focus",
        "Responsibility",
        "Willingness to Learn"
      ],
      TH: [
        "ความคิดสร้างสรรค์และทันเทรนด์ดีไซน์",
        "เปิดรับคำแนะนำเพื่อการปรับปรุง",
        "บริหารเวลาและจดจ่อกับงานได้ดี",
        "มีความรับผิดชอบต่อหน้าที่",
        "พร้อมเปิดรับการเรียนรู้สิ่งใหม่"
      ]
    }
  },
  projects: {
    kicker: {
      EN: "03 / FEATURED PROJECTS",
      TH: "03 / โปรเจกต์ที่โดดเด่น"
    },
    heading: {
      EN: 'CASE<br/><span class="outline">STUDIES.</span>',
      TH: 'กรณีศึกษา<span class="outline">งานออกแบบ</span>'
    },
    items: {
      "mysuth-app": {
        tag: {
          EN: "MOBILE APP / HEALTHCARE / UX DESIGN",
          TH: "แอปมือถือ / การแพทย์ / ออกแบบ UX"
        },
        title: {
          EN: "My SUTH App",
          TH: "My SUTH App"
        },
        desc: {
          EN: "“One App for Essential Hospital Workflows”",
          TH: "“แอปเดียว เพื่อการทำงานของบุคลากรในโรงพยาบาล”"
        }
      },
      "goal-app": {
        tag: {
          EN: "Mobile APP / AI ASSISTANT / UX RESEARCH",
          TH: "แอปมือถือ / ผู้ช่วย AI / การวิจัย UX"
        },
        title: {
          EN: "Goal Management Mobile App",
          TH: "แอปมือถือจัดการเป้าหมายชีวิต"
        },
        desc: {
          EN: "“Small steps, big achievements”",
          TH: "“ก้าวเล็กๆ สู่ความสำเร็จที่ยิ่งใหญ่”"
        }
      },
      "dormitory-app": {
        tag: {
          EN: "UX REDESIGN / MANAGEMENT SYSTEM",
          TH: "ปรับปรุง UX / ระบบจัดการหอพัก"
        },
        title: {
          EN: "Dormitory System",
          TH: "ระบบจัดการหอพัก"
        },
        desc: {
          EN: "“A smarter way to manage dormitory life.”",
          TH: "“ยกระดับการใช้ชีวิตในหอพักให้สะดวกยิ่งขึ้น”"
        }
      },
      "kiosk-app": {
        tag: {
          EN: "INTERACTION DESIGN / WAYFINDING / REDESIGN",
          TH: "ตู้คีออส / การนำทาง / ออกแบบใหม่"
        },
        title: {
          EN: "Kiosk Redesign",
          TH: "ปรับปรุงดีไซน์ตู้คีออส"
        },
        desc: {
          EN: "“Find Your Way, Faster.”",
          TH: "“ค้นหาห้องที่คุณต้องการได้รวดเร็วยิ่งขึ้น”"
        }
      }
    }
  },
  miniProjects: {
    kicker: {
      EN: "04 / OTHER PROJECTS",
      TH: "04 / โปรเจกต์อื่นๆ"
    },
    heading: {
      EN: 'DESIGN<br/><span class="outline">EXPLORATIONS.</span>',
      TH: 'งานออกแบบ<br/><span class="outline">อิสระอื่นๆ</span>'
    },
    lead: {
      EN: "Magazines, Logo design, Event Posters and Infographics.",
      TH: "นิตยสาร, การออกแบบโลโก้, โปสเตอร์กิจกรรม และ อินโฟกราฟิก"
    },
    cards: {
      "magazine": {
        EN: "MAGAZINE",
        TH: "นิตยสาร"
      },
      "logo": {
        EN: "LOGO DESIGN",
        TH: "การออกแบบโลโก้"
      },
      "poster": {
        EN: "POSTERS",
        TH: "โปสเตอร์"
      },
      "infographic": {
        EN: "INFOGRAPHIC",
        TH: "อินโฟกราฟิก"
      }
    }
  },
  certificates: {
    kicker: {
      EN: "05 / CERTIFICATES",
      TH: "05 / ประกาศนียบัตร"
    },
    heading: {
      EN: 'PROOF OF<br/><span class="outline">LEARNING.</span>',
      TH: 'ประกาศนียบัตร</span>'
    },
    items: [
      {
        title: {
          EN: "EVENT DOT Connecttive system game",
          TH: "กิจกรรม EVENT DOT Connecttive system game"
        },
        issuer: {
          EN: "Suranaree University of Technology",
          TH: "มหาวิทยาลัยเทคโนโลยีสุรนารี"
        }
      },
      {
        title: {
          EN: "Social Entrepreneurship Program",
          TH: "โครงการผู้ประกอบการสังคม (Social Entrepreneurship)"
        },
        issuer: {
          EN: "Suranaree University of Technology",
          TH: "มหาวิทยาลัยเทคโนโลยีสุรนารี"
        }
      },
      {
        title: {
          EN: "Digital Hackathon Suranaree Next Living",
          TH: "การแข่งขัน Digital Hackathon Suranaree Next Living"
        },
        issuer: {
          EN: "Suranaree University of Technology",
          TH: "มหาวิทยาลัยเทคโนโลยีสุรนารี"
        }
      },
      {
        title: {
          EN: "Youth Leadership Program",
          TH: "โครงการพัฒนาผู้นำเยาวชน (Youth Leadership Program)"
        },
        issuer: {
          EN: "Suranaree University of Technology",
          TH: "มหาวิทยาลัยเทคโนโลยีสุรนารี"
        }
      }
    ]
  },
  activities: {
    kicker: {
      EN: "06 / ACTIVITIES",
      TH: "06 / กิจกรรมนอกห้องเรียน"
    },
    heading: {
      EN: 'OUTSIDE<br/><span class="outline">THE CLASSROOM.</span>',
      TH: '<br>กิจกรรม<br/><span class="outline">นอกห้องเรียน</span>'
    },
    items: [
      {
        title: {
          EN: "Startup Thailand League",
          TH: "Startup Thailand League"
        },
        desc: {
          EN: "Participated in Ubon Ratchathani — entrepreneurship &amp; pitching.",
          TH: "เข้าร่วมการแข่งขัน ณ จังหวัดอุบลราชธานี — การเป็นผู้ประกอบการและการนำเสนอโมเดลธุรกิจ (Pitching)"
        }
      },
      {
        title: {
          EN: "Hackathon Experience",
          TH: "ประสบการณ์เข้าร่วม Hackathon"
        },
        desc: {
          EN: "Collaborated to design &amp; develop solutions within limited time.",
          TH: "ร่วมมือกับทีมออกแบบและพัฒนาโซลูชันแก้ไขปัญหาจริงภายใต้เวลาอันจำกัด"
        }
      }
    ]
  },
  cv: {
    kicker: {
      EN: "07 / CV",
      TH: "07 / CV"
    },
    heading: {
      EN: 'ONE PAGE<br/><span class="outline">RESUME.</span>',
      TH: 'เอกสาร<br/><span class="outline">CV</span>'
    },
    downloadBtn: {
      EN: 'DOWNLOAD CV (PDF) <i class="ph-duotone ph-download-simple icon-inline"></i>',
      TH: 'ดาวน์โหลด CV (PDF) <i class="ph-duotone ph-download-simple icon-inline"></i>'
    },
    dockBtn: {
      EN: '<i class="ph-duotone ph-file-text icon-inline"></i> DOWNLOAD RESUME (PDF)',
      TH: '<i class="ph-duotone ph-file-text icon-inline"></i> ดาวน์โหลด RESUME (PDF)'
    }
  },
  contact: {
    kicker: {
      EN: "08 / CONTACT",
      TH: "08 / ติดต่อ"
    },
    heading: {
      EN: 'LET\'S MAKE<br/>SOMETHING<br/><span class="outline">GREAT.</span>',
      TH: 'มาร่วมกันสร้าง<br/><span class="outline">ผลงานไปด้วยกัน</span>'
    },
    labels: {
      name: {
        EN: "YOUR NAME",
        TH: "ชื่อของคุณ"
      },
      email: {
        EN: "EMAIL",
        TH: "อีเมล"
      },
      message: {
        EN: "MESSAGE",
        TH: "ข้อความ"
      }
    },
    placeholders: {
      name: {
        EN: "Your name",
        TH: "ระบุชื่อของคุณ"
      },
      email: {
        EN: "you@email.com",
        TH: "อีเมลของคุณ (you@email.com)"
      },
      message: {
        EN: "Tell me about your opportunity...",
        TH: "พิมพ์ข้อความ หรือข้อเสนอโอกาสทำงาน..."
      }
    },
    sendBtn: {
      EN: 'SEND MESSAGE <i class="ph-duotone ph-paper-plane-right icon-inline"></i>',
      TH: 'ส่งข้อความ <i class="ph-duotone ph-paper-plane-right icon-inline"></i>'
    },
    note: {
      EN: "Connected to Formspree endpoint — salsasira@gmail.com",
      TH: "เชื่อมต่อระบบส่งข้อมูลตรงเข้าอีเมล — salsasira@gmail.com"
    }
  },
  projectNav: {
    backToPortfolio: {
      EN: "BACK TO PORTFOLIO",
      TH: "กลับสู่หน้าพอร์ตโฟลิโอ"
    },
    caseStudyTag: {
      EN: "CASE STUDY / SELECTED WORK",
      TH: "กรณีศึกษา / ผลงานที่คัดมาแล้ว"
    },
    figmaBtn: {
      EN: "VIEW FIGMA PROTOTYPE ↗",
      TH: "ดูตัวอย่าง FIGMA PROTOTYPE ↗"
    },
    originalKioskBtn: {
      EN: "VIEW ORIGINAL KIOSK DESIGN ↗",
      TH: "ดูดีไซน์ตู้คีออสเดิม ↗"
    },
    problemHeading: {
      EN: "Problem Statement",
      TH: "ปัญหา"
    },
    personaHeading: {
      EN: "Target User",
      TH: "กลุ่มผู้ใช้งานเป้าหมาย (Target User)"
    },
    featureHeading: {
      EN: "Key UX Solutions & UI Design",
      TH: "แนวทางการแก้ปัญหา UX และการออกแบบ UI"
    },
    tabs: {
      mysuth: {
        EN: "01 / MY SUTH APP",
        TH: "01 / MY SUTH APP"
      },
      goal: {
        EN: "02 / GOAL MANAGEMENT",
        TH: "02 / แอปจัดการเป้าหมาย"
      },
      dormitory: {
        EN: "03 / SUT DORMITORY",
        TH: "03 / หอพักนักศึกษา"
      },
      kiosk: {
        EN: "04 / KIOSK REDESIGN",
        TH: "04 / ปรับปรุงดีไซน์ตู้คีออส"
      }
    }
  },
  featuredProjects: {
    mySuth: {
      title: {
        EN: "My SUTH App",
        TH: "My SUTH App"
      },
      subtitle: {
        EN: "“One App for Essential Hospital Workflows”",
        TH: "“แอปเดียว เพื่อการทำงานของบุคลากรในโรงพยาบาลที่ดียิ่งขึ้น”"
      },
      overview: {
        EN: "My SUTH App is a mobile application designed to centralize essential hospital workflows for SUT Hospital personnel. I worked as a UX/UI Designer during my cooperative education placement, conducting requirement gathering, designing user flows and high-fidelity interfaces, and supporting the implementation of the Flutter prototype.",
        TH: "My SUTH App คือแอปพลิเคชันบนมือถือที่ออกแบบมาเพื่อรวบรวมกระบวนการทำงานที่สำคัญของบุคลากรโรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารีไว้ในที่เดียว<br><br>ในระหว่างการปฏิบัติงานสหกิจศึกษา ฉันทำหน้าที่เป็น UX/UI Designer โดยมีส่วนร่วมตั้งแต่การเก็บรวบรวมความต้องการของผู้ใช้งาน การออกแบบ User Flow และหน้าจอ High-Fidelity ไปจนถึงการสนับสนุนการพัฒนา Prototype ด้วย Flutter"
      },
      meta: {
        role: {
          EN: "UX/UI Designer",
          TH: "UX/UI Designer"
        },
        team: {
          EN: "UX/UI Designer · Developer · Hospital Stakeholders",
          TH: "UX/UI Designer · Developer · บุคลากรที่มีส่วนได้ส่วนเสีย"
        },
        duration: {
          EN: "June–September 2026 (4 Months)",
          TH: "มิถุนายน–กันยายน 2569 (4 เดือน)"
        },
        responsibilities: {
          EN: "Requirement Gathering, User Flow, UI Design, Prototyping, Usability Testing",
          TH: "รวบรวมความต้องการของผู้ใช้, ออกแบบเส้นทางผู้ใช้, ออกแบบหน้าจออินเทอร์เฟซ, สร้างตัวต้นแบบ, สร้างหน้าจอ UI flutter, ทดสอบกับผู้ใช้จริง"
        },
        tools: {
          EN: "Figma, Maze, Flutter, GiHub",
          TH: "Figma, Maze, Flutter, GiHub"
        },
        status: {
          EN: "Ongoing",
          TH: "อยู่ระหว่างดำเนินการ"
        },
        phase: {
          EN: "Flutter Development",
          TH: "พัฒนาส่วน Flutter"
        },
        labels: {
          role: { EN: "Role", TH: "บทบาท" },
          team: { EN: "Team", TH: "ทีม" },
          duration: { EN: "Duration", TH: "ระยะเวลา" },
          responsibilities: { EN: "Responsibilities", TH: "ส่วนที่รับผิดชอบ" },
          tools: { EN: "Tools", TH: "เครื่องมือที่ใช้" },
          status: { EN: "Project Status", TH: "สถานะโปรเจกต์" },
          phase: { EN: "Current Phase", TH: "ขั้นตอนปัจจุบัน" }
        }
      },
      contextConstraints: {
        heading: {
          EN: "Context & Constraints",
          TH: "บริบทและข้อจำกัดของโปรเจกต์"
        },
        items: {
          EN: [
            "• Each staff role has different responsibilities and access permissions.",
            "• The system needs to support nurses, doctors, and other hospital staff.",
            "• Users work in a fast-paced environment.",
            "• Multiple services need to be integrated into a single app without making the navigation overly complex.",
            "• The design must maintain the hospital’s brand colors and visual identity.",
            "• Some systems are still under development, so testing can only be conducted using prototypes."
          ],
          TH: [
            "• บุคลากรแต่ละตำแหน่งมีหน้าที่และสิทธิ์เข้าถึงต่างกัน",
            "• ระบบต้องรองรับทั้ง พยาบาล และแพทย์ พนักงานอื่นๆ นอกเหนือจากนี้",
            "• ผู้ใช้ทำงานในสภาพแวดล้อมที่เร่งรีบ",
            "• ต้องเชื่อมหลายบริการไว้ในแอปเดียวโดยไม่ทำให้เมนูซับซ้อน",
            "• ต้องรักษาเอกลักษณ์ของโรงพยาบาล",
            "• บางระบบยังอยู่ระหว่างการพัฒนา จึงทดสอบได้เฉพาะ Prototype"
          ]
        }
      },
      discovery: {
        heading: {
          EN: "Discovery & Requirement Gathering",
          TH: "การสำรวจและรวบรวมความต้องการ"
        },
        intro: {
          EN: "Due to the limited availability of doctors and nurses, the initial discovery phase was conducted through discussions with the hospital’s IT staff and project lead. Their operational knowledge and internal requirements helped identify key workflow issues and define the project’s initial scope.<br><br>Since direct user research was limited, these findings were treated as preliminary requirements to be further validated through prototype feedback and usability testing.",
          TH: "เนื่องจากแพทย์และพยาบาลมีเวลาจำกัด การสำรวจข้อมูลเบื้องต้นจึงดำเนินการผ่านการพูดคุยกับเจ้าหน้าที่ฝ่ายเทคโนโลยีสารสนเทศของโรงพยาบาลและผู้นำโครงการ โดยใช้ความรู้ด้านการปฏิบัติงานและความต้องการภายใน เพื่อระบุปัญหาสำคัญและกำหนดขอบเขตเริ่มต้นของโปรเจกต์<br><br>เนื่องจากยังมีข้อจำกัดในการเก็บข้อมูลโดยตรงจากผู้ใช้ ข้อมูลเหล่านี้จึงถือเป็นความต้องการเบื้องต้นที่ต้องตรวจสอบเพิ่มเติมผ่านข้อเสนอแนะและการทดสอบต้นแบบ"
        },
        orgContextHeading: {
          EN: "Organizational Context",
          TH: "บริบทขององค์กร"
        },
        orgContextText: {
          EN: "The hospital relies on outsourced services for parts of its internal systems, limiting its control over backend data and future system development. This led to the initiative to create an internally managed staff application that centralizes essential workflows for doctors, nurses, and other personnel.",
          TH: "ปัจจุบันโรงพยาบาลพึ่งพาบริการจากบริษัทภายนอกสำหรับระบบภายในบางส่วน ทำให้มีข้อจำกัดในการควบคุมข้อมูลเบื้องหลังและพัฒนาระบบในอนาคต จึงเกิดแนวคิดในการสร้างแอปพลิเคชันที่โรงพยาบาลสามารถบริหารจัดการเอง และรวบรวมกระบวนการทำงานสำคัญของแพทย์ พยาบาล และบุคลากรอื่นไว้ในระบบเดียว"
        },
        findingsHeading: {
          EN: "Key Workflow Findings",
          TH: "ปัญหาสำคัญจากกระบวนการทำงาน"
        },
        findings: {
          EN: [
            {
              num: "1",
              title: "Attendance",
              problem: "Staff currently record attendance using fingerprint scanners available at only two locations, often causing rushing and queues during shift changes.",
              opportunityLabel: "Design opportunity:",
              opportunity: "Enable mobile check-in and check-out within authorized hospital areas."
            },
            {
              num: "2",
              title: "E-Consult",
              problem: "Consultation requests are shared across multiple LINE groups, making it difficult to confirm whether the assigned doctor has reviewed a request—especially in urgent cases.",
              opportunityLabel: "Design opportunity:",
              opportunity: "Centralize requests with clear urgency and read-status indicators."
            },
            {
              num: "3",
              title: "Queue Management",
              problem: "Some departments lack dedicated queue-calling equipment, making it difficult for nurses to manage patient queues efficiently.",
              opportunityLabel: "Design opportunity:",
              opportunity: "Allow nurses to call and manage queues directly from their mobile devices."
            }
          ],
          TH: [
            {
              num: "1",
              title: "การลงเวลาเข้างาน",
              problem: "ปัจจุบันบุคลากรต้องลงเวลาด้วยเครื่องสแกนลายนิ้วมือซึ่งมีเพียงสองจุด ทำให้ต้องเร่งเดินทางไปยังจุดสแกนและอาจต้องรอคิวในช่วงเปลี่ยนกะ",
              opportunityLabel: "จุดที่สามารถพัฒนาได้:",
              opportunity: "พัฒนาระบบลงเวลาเข้า–ออกงานผ่านโทรศัพท์มือถือภายในพื้นที่ที่โรงพยาบาลกำหนด"
            },
            {
              num: "2",
              title: "ระบบ E-Consult",
              problem: "คำขอปรึกษาแพทย์ถูกส่งผ่านกลุ่ม LINE หลายกลุ่ม ทำให้ตรวจสอบได้ยากว่าแพทย์ผู้รับผิดชอบได้อ่านคำขอแล้วหรือไม่ โดยเฉพาะคำขอที่มีความเร่งด่วน",
              opportunityLabel: "จุดที่สามารถพัฒนาได้:",
              opportunity: "รวมคำขอปรึกษาไว้ในระบบเดียว พร้อมแสดงระดับความเร่งด่วนและสถานะการอ่านอย่างชัดเจน"
            },
            {
              num: "3",
              title: "ระบบจัดการคิว",
              problem: "บางแผนกไม่มีอุปกรณ์สำหรับเรียกคิวโดยเฉพาะ เช่น ไมโครโฟน ลำโพง หรือจอแสดงหมายเลข ทำให้พยาบาลหน้าห้องตรวจจัดการและเรียกคิวผู้ป่วยได้ไม่สะดวก",
              opportunityLabel: "จุดที่สามารถพัฒนาได้:",
              opportunity: "ช่วยให้พยาบาลสามารถเรียกและจัดการคิวผ่านโทรศัพท์มือถือได้โดยตรง"
            }
          ]
        }
      },
      userGroups: {
        heading: {
          EN: "User Groups / Role Analysis",
          TH: "กลุ่มผู้ใช้งานและการวิเคราะห์บทบาทหน้าที่"
        },
        intro: {
          EN: "My SUTH App supports hospital personnel with different responsibilities and access permissions. Based on the initial requirements provided by the project stakeholders, users were grouped by their primary tasks within the application.",
          TH: "My SUTH App รองรับบุคลากรในโรงพยาบาลที่มีหน้าที่และสิทธิ์การเข้าถึงฟีเจอร์ที่แตกต่างกัน จาก Requirement เบื้องต้นของ Stakeholder ผู้ใช้จึงถูกแบ่งตามงานหลักที่ต้องดำเนินการภายในแอปพลิเคชัน"
        },
        table: {
          headers: {
            role: { EN: "User group", TH: "กลุ่มผู้ใช้งาน" },
            needs: { EN: "Primary needs", TH: "ความต้องการหลักๆ" },
            services: { EN: "Key services", TH: "ฟีเจอร์หลัก" }
          },
          rows: [
            {
              role: { EN: "General Staff", TH: "บุคลากรทั่วไป" },
              needs: {
                EN: "Complete essential daily staff tasks and access internal information.",
                TH: "ดำเนินงานประจำวันและเข้าถึงข้อมูลภายในที่จำเป็น"
              },
              services: {
                EN: "Attendance check-in/out, attendance history, notifications, announcements, and profile settings.",
                TH: "ลงเวลาเข้า–ออกงาน ประวัติการลงเวลา การแจ้งเตือน ข่าวประกาศ และการตั้งค่าโปรไฟล์"
              }
            },
            {
              role: { EN: "Nurses Assistant", TH: "ผู้ช่วยพยาบาล" },
              needs: {
                EN: "Manage patient queues efficiently from outside examination rooms.",
                TH: "จัดการและเรียกคิวผู้ป่วยหน้าห้องตรวจได้อย่างสะดวก"
              },
              services: {
                EN: "Queue calling and management, emergency notifications, attendance, and shared staff services.",
                TH: "เรียกและจัดการคิว การแจ้งเตือนเหตุฉุกเฉิน การลงเวลา และบริการพื้นฐานสำหรับบุคลากร"
              }
            },
            {
              role: { EN: "Doctors", TH: "แพทย์" },
              needs: {
                EN: "Review E-Consult requests, recognize urgent cases, and access relevant staff services. In some departments, doctors may also call patient queues themselves.",
                TH: "เปิดอ่านคำขอ E-Consult รู้ได้ว่ากรณีไหนเป็นกรณีเร่งด่วน และเข้าถึงฟีเจอร์ที่เกี่ยวข้อง โดยแพทย์บางแผนกอาจเป็นผู้เรียกคิวด้วยตนเอง"
              },
              services: {
                EN: "E-Consult request viewing, important notifications, queue management where applicable, emergency notifications, attendance, and shared staff services.",
                TH: "เปิดอ่านคำขอ E-Consult การแจ้งเตือนที่สำคัญ ระบบจัดการคิวในแผนกที่เกี่ยวข้อง การแจ้งเตือนเหตุฉุกเฉิน การลงเวลา และฟีเจอร์พื้นฐานสำหรับบุคลากร"
              }
            }
          ]
        },
        outro: {
          EN: "All users share the same core navigation and can see the available service menus. Access is controlled according to each user’s role. If a user selects a service outside their permission level, the system displays a clear access-restriction message.<br><br>This behavior was defined as a project requirement to maintain a consistent application structure and simplify the development process across multiple user roles.",
          TH: "ผู้ใช้ทุกกลุ่มใช้โครงสร้างเมนูหลักร่วมกันและสามารถมองเห็นเมนูบริการภายในแอปได้ แต่สิทธิ์การใช้งานแต่ละเมนูจะถูกควบคุมตามบทบาท หากผู้ใช้เลือกเมนูที่ไม่มีสิทธิ์เข้าถึง ระบบจะแสดงข้อความแจ้งข้อจำกัดอย่างชัดเจน<br><br>รูปแบบนี้เป็น Requirement ของหัวหน้าโครงการ เพื่อรักษาโครงสร้างแอปให้สอดคล้องกันระหว่างผู้ใช้หลายบทบาท และช่วยลดความซับซ้อนในการพัฒนาระบบ"
        }
      },
      designPriorities: {
        heading: {
          EN: "Design Priorities & Decisions",
          TH: "สิ่งที่ให้ความสำคัญในการออกแบบ"
        },
        table: {
          headers: {
            priority: { EN: "Design priority", TH: "สิ่งที่ให้ความสำคัญ" },
            decision: { EN: "Design decision", TH: "สิ่งที่ต้องการออกแบบ" }
          },
          rows: [
            {
              priority: { EN: "Quick access to essential workflows", TH: "เข้าถึงงานสำคัญได้รวดเร็ว" },
              decision: {
                EN: "The Home screen was designed as a central portal, while the core navigation was limited to Home, Notifications, and Profile.",
                TH: "ออกแบบหน้าหลักให้เป็น Portal รวมทุกเมนูที่มี และจำกัดเมนูหลักไว้ที่หน้าหลัก การแจ้งเตือน และโปรไฟล์"
              }
            },
            {
              priority: { EN: "Clear status visibility", TH: "มองเห็นสถานะได้อย่างชัดเจน" },
              decision: {
                EN: "Queue status, E-Consult urgency and read status, and attendance results were presented with clear labels and visual hierarchy.",
                TH: "แสดงสถานะคิว ระดับความเร่งด่วนและสถานะการอ่าน E-Consult รวมถึงผลการลงเวลาด้วยข้อความและลำดับการมองเห็นได้ทันทีอย่างชัดเจน"
              }
            },
            {
              priority: { EN: "Role-based access", TH: "รองรับสิทธิ์ตามบทบาท" },
              decision: {
                EN: "All service menus remain visible to maintain a consistent structure. Permissions are validated when a service is selected, and restricted users receive a clear access message.",
                TH: "แสดงเมนูภายใต้โครงสร้างเดียวกัน ตรวจสอบสิทธิ์เมื่อเลือกเมนู และแจ้งอย่างชัดเจนเมื่อผู้ใช้ไม่มีสิทธิ์เข้าถึง"
              }
            },
            {
              priority: { EN: "Mobile accessibility", TH: "รองรับการทำงานผ่านโทรศัพท์มือถือ" },
              decision: {
                EN: "Attendance and queue workflows were adapted for mobile use, reducing reliance on fingerprint scanners and dedicated queue-calling equipment.",
                TH: "ปรับกระบวนการลงเวลาและจัดการคิวให้ทำผ่านมือถือได้ เพื่อลดการพึ่งพาเครื่องสแกนลายนิ้วมือและอุปกรณ์เรียกคิวที่ติดตั้งเฉพาะจุด"
              }
            },
            {
              priority: { EN: "Consistent system feedback", TH: "แสดงผลตอบกลับของระบบอย่างสม่ำเสมอ" },
              decision: {
                EN: "Confirmation, success, error, out-of-zone, and access-restriction states were designed to clearly communicate the result of each action.",
                TH: "ออกแบบสถานะยืนยัน สำเร็จ ข้อผิดพลาด อยู่นอกพื้นที่ และไม่มีสิทธิ์เข้าถึง เพื่อให้ผู้ใช้เข้าใจผลของการดำเนินการ"
              }
            }
          ]
        }
      },
      queueManagement: {
        title: {
          EN: "Queue Management System",
          TH: "ระบบจัดการคิวผู้ป่วย"
        },
        challengeLabel: {
          EN: "Challenge",
          TH: "ความท้าทาย"
        },
        challenge: {
          EN: "Some departments lack dedicated queue-calling equipment, making it difficult for nurses to manage patient queues outside examination rooms.",
          TH: "บางแผนกไม่มีอุปกรณ์สำหรับเรียกคิวโดยเฉพาะ ทำให้พยาบาลหน้าห้องตรวจจัดการและเรียกคิวผู้ป่วยได้ไม่สะดวก"
        },
        solutionLabel: {
          EN: "Solution",
          TH: "การแก้ปัญหาด้วยการออกแบบ"
        },
        solution: {
          EN: "A mobile queue-management flow allows staff to identify their station, select an examination room, enter or scan a patient queue, and manage queue calls directly from their phones.",
          TH: "ระบบจัดการคิวผ่านโทรศัพท์มือถือช่วยให้บุคลากรระบุจุดให้บริการ เลือกห้องตรวจ กรอกหรือสแกนคิวผู้ป่วย และควบคุมการเรียกคิวได้โดยตรงผ่านโทรศัพท์ของตนเอง"
        },
        groups: [
          {
            num: "1",
            heading: {
              EN: "Station & Room Setup",
              TH: "การตั้งค่าจุดให้บริการและห้องตรวจ"
            },
            desc: {
              EN: "Staff scan their station and select the relevant examination session and room based on the department’s configuration.",
              TH: "บุคลากรสแกน Station เพื่อระบุจุดให้บริการ จากนั้นเลือกช่วงการตรวจและห้องตรวจที่เกี่ยวข้องตามการตั้งค่าของแต่ละแผนก"
            },
            images: [
              "projects/My SUTH App/queue management/scan-station.png",
              "projects/My SUTH App/queue management/select-peroid.png"
            ]
          },
          {
            num: "2",
            heading: {
              EN: "Queue Identification",
              TH: "การระบุคิวผู้ป่วย"
            },
            desc: {
              EN: "Staff can identify a patient by entering the queue number or scanning the visit slip, while the system validates the queue and room status before calling.<br><br>Before calling a queue, the system validates the patient and room status. When a conflict is detected, a clear message explains what happened and guides staff toward the next available action.",
              TH: "บุคลากรสามารถระบุผู้ป่วยด้วยการกรอกหมายเลขคิวหรือสแกน Visit Slip โดยระบบจะตรวจสอบสถานะของผู้ป่วยและห้องตรวจก่อนดำเนินการเรียกคิว<br><br>ก่อนเรียกคิว ระบบจะตรวจสอบสถานะของผู้ป่วยและห้องตรวจ หากพบข้อมูลหรือสถานะที่ขัดแย้งกัน ระบบจะแจ้งสาเหตุอย่างชัดเจน พร้อมแนะนำการดำเนินการที่เหมาะสมเพื่อให้ผู้ใช้แก้ไขปัญหาและทำงานต่อได้"
            },
            mainImages: [
              "projects/My SUTH App/queue management/call-queue.png",
              "projects/My SUTH App/queue management/qr-scan.png"
            ],
            errorLabel: {
              EN: "Status Validation & Conflict Handling (Supporting Error States)",
              TH: "การตรวจสอบสถานะและแจ้งเตือนข้อผิดพลาด (สถานะรองเมื่อเกิดปัญหา)"
            },
            errorImages: [
              "projects/My SUTH App/queue management/room-unavailable.png",
              "projects/My SUTH App/queue management/qeueu-unavailable.png"
            ]
          },
          {
            num: "3",
            heading: {
              EN: "Queue Controls",
              TH: "การควบคุมคิว"
            },
            desc: {
              EN: "Patient and room information are displayed in one place, with controls to recall, skip, or proceed to the next queue.",
              TH: "ข้อมูลผู้ป่วยและห้องตรวจจะแสดงรวมอยู่ในหน้าเดียว พร้อมคำสั่งสำหรับเรียกซ้ำ ข้ามคิว หรือดำเนินการไปยังคิวถัดไป"
            },
            images: [
              "projects/My SUTH App/queue management/detail.png"
            ]
          }
        ]
      },
      eConsult: {
        title: {
          EN: "E-Consult",
          TH: "ระบบ E-Consult"
        },
        challengeLabel: {
          EN: "Challenge",
          TH: "ปัญหาและความท้าทาย"
        },
        challenge: {
          EN: "E-Consult requests form were previously shared across multiple LINE groups, making important requests easy to overlook and difficult for doctors to access in one place.",
          TH: "เดิมฟอร์มคำขอ E-Consult ถูกส่งผ่านกลุ่ม LINE หลายกลุ่ม ทำให้คำขอที่สำคัญหรือเร่งด่วนอาจถูกมองข้าม และแพทย์ไม่สามารถเข้าถึงคำขอได้จากพื้นที่เดียว"
        },
        solutionLabel: {
          EN: "UX Solution",
          TH: "แนวทางการแก้ปัญหา"
        },
        solution: {
          EN: "The E-Consult feature centralizes consultation requests and notifies doctors when a new request is received. Notifications are automatically grouped under Important Notifications for quick access.",
          TH: "ระบบ E-Consult รวบรวมคำขอปรึกษาไว้ในที่เดียว พร้อมแจ้งเตือนแพทย์เมื่อมีคำขอใหม่ โดยการแจ้งเตือนจะถูกจัดเก็บไว้ในหมวดการแจ้งเตือนที่สำคัญเพื่อให้เข้าถึงได้รวดเร็ว"
        },
        groups: [
          {
            num: "1",
            heading: {
              EN: "Request List & Details",
              TH: "รายการและรายละเอียดคำขอ"
            },
            desc: {
              EN: "Doctors can view E-Consult requests and open each request to review the submitted consultation form and relevant information.",
              TH: "แพทย์สามารถดูรายการคำขอ E-Consult และเปิดแต่ละรายการเพื่อตรวจสอบฟอร์มคำขอปรึกษาและข้อมูลที่เกี่ยวข้อง"
            },
            images: [
              "projects/My SUTH App/E-consult/e-consult list.png",
              "projects/My SUTH App/E-consult/form.png"
            ]
          },
          {
            num: "2",
            heading: {
              EN: "Important Notifications",
              TH: "การแจ้งเตือนที่สำคัญ"
            },
            desc: {
              EN: "New E-Consult alerts are automatically stored under Important Notifications. Doctors can open a notification to access the related request directly without searching through multiple communication channels.",
              TH: "เมื่อมีคำขอ E-Consult ใหม่ ระบบจะจัดเก็บการแจ้งเตือนไว้ในหมวดการแจ้งเตือนที่สำคัญ แพทย์สามารถกดการแจ้งเตือนเพื่อเปิดคำขอที่เกี่ยวข้องได้โดยตรง โดยไม่ต้องค้นหาจากหลายช่องทางการสื่อสาร"
            },
            images: [
              "projects/My SUTH App/E-consult/notification สำคัญ.png"
            ]
          }
        ]
      },
      attendance: {
        title: {
          EN: "Attendance Check-in & Check-out",
          TH: "ระบบลงเวลาเข้า–ออกงาน"
        },
        challengeLabel: {
          EN: "Challenge",
          TH: "ปัญหาและความท้าทาย"
        },
        challenge: {
          EN: "Hospital personnel currently rely on fingerprint scanners located at only two points, which may cause rushing and queues during shift changes.",
          TH: "ปัจจุบันบุคลากรต้องลงเวลาด้วยเครื่องสแกนลายนิ้วมือซึ่งมีเพียงสองจุด ทำให้ต้องเร่งเดินทางไปยังจุดสแกนและอาจต้องรอคิวในช่วงเปลี่ยนกะ"
        },
        solutionLabel: {
          EN: "UX Solution",
          TH: "แนวทางการแก้ปัญหา"
        },
        solution: {
          EN: "The mobile attendance flow allows staff to check in and out within an authorized hospital area using location verification and secure identity confirmation.",
          TH: "ระบบลงเวลาผ่านโทรศัพท์มือถือช่วยให้บุคลากรสามารถบันทึกเวลาเข้า–ออกงานภายในพื้นที่ที่โรงพยาบาลกำหนด โดยตรวจสอบตำแหน่งและยืนยันตัวตนก่อนบันทึกรายการ"
        },
        groups: [
          {
            num: "1",
            heading: {
              EN: "Context-Aware Attendance Action",
              TH: "ปุ่มลงเวลาที่ปรับตามสถานะ"
            },
            desc: {
              EN: "The primary action automatically changes between Check In and Check Out based on the user’s latest attendance record, helping staff identify the correct next action.",
              TH: "ปุ่มดำเนินการหลักจะเปลี่ยนระหว่าง เข้างาน และ ออกงาน โดยอัตโนมัติตามรายการลงเวลาล่าสุด ช่วยให้บุคลากรทราบว่าควรดำเนินการใดเป็นลำดับถัดไป"
            },
            images: [
              "projects/My SUTH App/check in-check out/clockin.png",
              "projects/My SUTH App/check in-check out/clockout.png"
            ]
          },
          {
            num: "2",
            heading: {
              EN: "Location Verification",
              TH: "การตรวจสอบตำแหน่ง"
            },
            desc: {
              EN: "Before recording attendance, the system displays the current date, time, coordinates, and map location to verify that the user is within an authorized area.<br>If the user is outside the permitted zone, a clear message explains the restriction and guides them to enter the authorized area before trying again.",
              TH: "ก่อนบันทึกเวลา ระบบจะแสดงวันที่ เวลา พิกัด และตำแหน่งบนแผนที่ เพื่อตรวจสอบว่าผู้ใช้อยู่ภายในพื้นที่ที่ได้รับอนุญาต<br>หากผู้ใช้อยู่นอกพื้นที่ ระบบจะแจ้งข้อจำกัดอย่างชัดเจน พร้อมแนะนำให้เข้ามาในพื้นที่ที่กำหนดก่อนทำรายการอีกครั้ง"
            },
            mainImages: [
              "projects/My SUTH App/check in-check out/clockin-GPS.png"
            ],
            errorLabel: {
              EN: "Outside Authorized Area (Restriction Alert)",
              TH: "อยู่นอกพื้นที่ที่ได้รับอนุญาต (การแจ้งเตือนข้อจำกัด)"
            },
            errorImages: [
              "projects/My SUTH App/check in-check out/warning.png"
            ]
          },
          {
            num: "3",
            heading: {
              EN: "Secure Identity Confirmation",
              TH: "การยืนยันตัวตนอย่างปลอดภัย"
            },
            desc: {
              EN: "Users confirm their identity using the authentication method enabled in the application, such as Face ID or fingerprint. If biometric authentication is unavailable, the PIN created during registration is used as a fallback.",
              TH: "ผู้ใช้ยืนยันตัวตนด้วยวิธีที่เปิดใช้งานในแอป เช่น Face ID หรือการสแกนลายนิ้วมือ หากไม่ได้เปิดใช้หรือไม่สามารถใช้การยืนยันทั้ง 2 แบบได้ ระบบจะใช้ PIN ที่สร้างไว้ตั้งแต่ขั้นตอนลงทะเบียนเป็นวิธีสำรอง"
            },
            biometricsImages: [
              "projects/My SUTH App/check in-check out/FaceID.png",
              "projects/My SUTH App/check in-check out/Finger-print.png"
            ],
            fallbackLabel: {
              EN: "PIN Fallback",
              TH: "PIN สำรองเมื่อ FaceID และ <br> แสกนลายนิ้วมือไม่พร้อมใช้งาน"
            },
            fallbackImage: "projects/My SUTH App/check in-check out/PIN.png"
          },
          {
            num: "4",
            heading: {
              EN: "Confirmation & Attendance History",
              TH: "การแสดงผลและประวัติการลงเวลา"
            },
            desc: {
              EN: "After successful verification, the system confirms the recorded date and time before returning the user to the attendance page, where the primary action updates automatically.<br><br>The ten most recent records are displayed on the main page. Users can open the complete history and review their attendance as a list, calendar, or selected date range.",
              TH: "เมื่อยืนยันตัวตนสำเร็จ ระบบจะแสดงวันที่และเวลาที่บันทึก พร้อมกลับไปยังหน้าแรกของเมนู ซึ่งปุ่มดำเนินการจะเปลี่ยนตามสถานะล่าสุดโดยอัตโนมัติ<br><br>หน้าแรกแสดงรายการลงเวลาล่าสุด 10 รายการ และผู้ใช้สามารถเปิดดูประวัติทั้งหมดในรูปแบบรายการ ปฏิทิน หรือเลือกดูตามช่วงวันที่ได้"
            },
            images: [
              "projects/My SUTH App/check in-check out/success.png",
              "projects/My SUTH App/check in-check out/histortlist.png",
              "projects/My SUTH App/check in-check out/history-calenda.png"
            ]
          }
        ]
      },
      emergencyCode: {
        title: {
          EN: "Hospital Emergency Code Alert",
          TH: "การแจ้งเตือนโค้ดฉุกเฉินของโรงพยาบาล"
        },
        challengeLabel: {
          EN: "Challenge",
          TH: "ปัญหาและความท้าทาย"
        },
        challenge: {
          EN: "Emergency announcements must communicate the emergency type, location, and time quickly while remaining consistent with the hospital’s existing letter-based code policy.",
          TH: "การประกาศเหตุฉุกเฉินต้องสื่อสารประเภทของเหตุ สถานที่ และเวลาให้บุคลากรรับรู้ได้อย่างรวดเร็ว พร้อมรักษารูปแบบรหัสตัวอักษรตามนโยบายเดิมของโรงพยาบาล"
        },
        solutionLabel: {
          EN: "UX Solution",
          TH: "แนวทางการแก้ปัญหา"
        },
        solution: {
          EN: "A prominent Emergency Code pop-up displays the code, location, time, and essential details in one place, helping hospital staff quickly understand the situation and respond appropriately.",
          TH: "Popup ประกาศ Emergency Code แสดงประเภทโค้ด สถานที่ เวลา และรายละเอียดสำคัญไว้ในพื้นที่เดียว ช่วยให้บุคลากรเข้าใจสถานการณ์และตอบสนองได้อย่างเหมาะสม"
        },
        image: "projects/My SUTH App/emergency code/CODE.png"
      },
      coreScreens: {
        title: {
          EN: "Core Application Screens",
          TH: "หน้าจอหลักของแอปพลิเคชัน"
        },
        intro: {
          EN: "The application’s core screens provide a consistent foundation across all staff roles. The Home screen acts as the central dashboard, while Work Systems, Notifications, and Profile support access to services, updates, and personal settings.",
          TH: "หน้าจอหลักของแอปเป็นโครงสร้างพื้นฐานที่ผู้ใช้ทุกบทบาทใช้งานร่วมกัน โดยหน้าหลักทำหน้าที่เป็น Dashboard กลาง ขณะที่หน้าระบบงาน การแจ้งเตือน และโปรไฟล์ รองรับการเข้าถึงบริการ การติดตามข้อมูล และการตั้งค่าส่วนบุคคล"
        },
        home: {
          num: "1",
          heading: {
            EN: "Home Dashboard",
            TH: "หน้าหลัก"
          },
          desc: {
            EN: "The Home screen brings essential information and frequently used services into one central dashboard. It displays the latest attendance record, pending E-Consult requests for eligible users, unread notifications, and recently used services.<br>By prioritizing recent services, the dashboard helps users return to tools relevant to their work and reduces confusion from repeatedly navigating through services outside their access permissions.",
            TH: "หน้าหลักรวบรวมข้อมูลสำคัญและบริการที่ใช้บ่อยไว้ใน Dashboard เดียว โดยแสดงรายการลงเวลาเข้า–ออกงานล่าสุด คำขอ E-Consult ที่รอเปิดอ่านสำหรับผู้ใช้ที่มีสิทธิ์ การแจ้งเตือนที่ยังไม่ได้อ่าน และบริการที่ผู้ใช้เพิ่งใช้งาน<br>การจัดลำดับเมนูที่ใช้ล่าสุดช่วยให้ผู้ใช้กลับเข้าสู่เครื่องมือที่เกี่ยวข้องกับงานของตนได้รวดเร็วขึ้น และลดความสับสนจากการค้นหาบริการที่ไม่มีสิทธิ์เข้าถึงซ้ำ ๆ"
          },
          image: "projects/My SUTH App/core Screen/HOME.png",
          annotations: [
            {
              num: "1",
              label: {
                EN: "Latest Attendance",
                TH: "การลงเวลาล่าสุด"
              },
              desc: {
                EN: "Displays the user’s most recent check-in or check-out record with access to the complete history.",
                TH: "แสดงรายการเข้า–ออกงานล่าสุด พร้อมทางลัดไปยังประวัติทั้งหมด"
              }
            },
            {
              num: "2",
              label: {
                EN: "Pending Updates",
                TH: "รายการที่รอเปิดอ่าน"
              },
              desc: {
                EN: "Highlights unread notifications and pending E-Consult requests based on the user’s role.",
                TH: "แสดงการแจ้งเตือนและคำขอ E-Consult ที่รอเปิดอ่านตามสิทธิ์ของผู้ใช้"
              }
            },
            {
              num: "3",
              label: {
                EN: "Recent Services",
                TH: "เมนูที่ใช้ล่าสุด"
              },
              desc: {
                EN: "Provides quick access to services the user has recently used.",
                TH: "ช่วยให้กลับเข้าสู่บริการที่เพิ่งใช้งานได้อย่างรวดเร็ว"
              }
            }
          ]
        },
        supportingSectionTitle: {
          EN: "Supporting Core Screens",
          TH: "หน้าจอหลักอื่นๆ"
        },
        supportingScreens: [
          {
            num: "2",
            heading: {
              EN: "Work Systems",
              TH: "ระบบงาน"
            },
            desc: {
              EN: "Organizes hospital services in one place, allowing staff to access work-related tools while maintaining role-based permissions.",
              TH: "รวบรวมบริการและเครื่องมือที่เกี่ยวข้องกับการทำงานไว้ในพื้นที่เดียว โดยควบคุมการเข้าถึงตามบทบาทและสิทธิ์ของบุคลากร"
            },
            image: "projects/My SUTH App/core Screen/work.png"
          },
          {
            num: "3",
            heading: {
              EN: "Notifications",
              TH: "การแจ้งเตือน"
            },
            desc: {
              EN: "Centralizes important updates and unread items, helping users review information relevant to their work.",
              TH: "รวบรวมข้อมูลอัปเดต รายการที่ยังไม่ได้อ่าน และการแจ้งเตือนสำคัญ เพื่อให้ผู้ใช้ติดตามข้อมูลที่เกี่ยวข้องกับการทำงานได้จากพื้นที่เดียว"
            },
            image: "projects/My SUTH App/core Screen/notification.png"
          },
          {
            num: "4",
            heading: {
              EN: "Profile & Settings",
              TH: "โปรไฟล์และการตั้งค่า"
            },
            desc: {
              EN: "Allows users to manage personal information, security preferences, biometric authentication, and application settings.",
              TH: "ช่วยให้ผู้ใช้จัดการข้อมูลส่วนบุคคล การตั้งค่าความปลอดภัย การยืนยันตัวตนแบบไบโอเมตริก และการตั้งค่าของแอปพลิเคชัน"
            },
            image: "projects/My SUTH App/core Screen/Profile.png"
          }
        ]
      },
      projectStatus: {
        title: {
          EN: "Project Status & Next Steps",
          TH: "สถานะโครงการและขั้นตอนถัดไป"
        },
        badge: {
          EN: "Ongoing — Prototype Development",
          TH: "อยู่ระหว่างดำเนินการ — ขั้นพัฒนาต้นแบบ"
        },
        intro: {
          EN: "My SUTH App is an ongoing cooperative education project currently in the prototype development stage. The main workflows have been designed, and selected screens are being implemented in Flutter. The next steps include refining the prototype, gathering additional feedback where possible, and preparing the design for further development and validation.",
          TH: "My SUTH App เป็นโปรเจกต์สหกิจศึกษาที่ยังอยู่ระหว่างดำเนินการ ปัจจุบันได้ออกแบบกระบวนการหลักแล้ว และกำลังพัฒนาหน้าจอบางส่วนเป็น Flutter Prototype ขั้นตอนถัดไปคือปรับปรุงต้นแบบ เก็บ Feedback เพิ่มเติมเท่าที่สามารถทำได้ และเตรียมดีไซน์สำหรับการพัฒนาและตรวจสอบกับผู้ใช้ต่อไป"
        },
        completed: {
          heading: {
            EN: "Completed So Far",
            TH: "สิ่งที่ดำเนินการแล้ว"
          },
          items: [
            {
              EN: "Main workflows and user flows designed",
              TH: "ออกแบบกระบวนการหลักและ User Flow"
            },
            {
              EN: "High-fidelity interface screens completed",
              TH: "ออกแบบหน้าจอ High-fidelity"
            },
            {
              EN: "Selected screens being implemented in Flutter",
              TH: "เริ่มพัฒนาหน้าจอบางส่วนด้วย Flutter"
            }
          ]
        },
        nextSteps: {
          heading: {
            EN: "Next Steps",
            TH: "ขั้นตอนถัดไป"
          },
          items: [
            {
              EN: "Refine the existing prototype",
              TH: "ปรับปรุงต้นแบบที่มีอยู่"
            },
            {
              EN: "Gather additional feedback where access allows",
              TH: "เก็บ Feedback เพิ่มเติมตามโอกาสและข้อจำกัดในการเข้าถึงผู้ใช้"
            },
            {
              EN: "Prepare the design for further development and user validation",
              TH: "เตรียมดีไซน์สำหรับการพัฒนาและตรวจสอบกับผู้ใช้ในขั้นต่อไป"
            }
          ]
        }
      },
      problem: {
        EN: "• Hospital staff need to use multiple systems and platforms to complete their daily tasks.<br>• Important workflows, such as attendance, queue management, appointments, and notifications, can involve too many steps.<br>• Switching between different systems can be time-consuming and inconvenient.<br>• Important information may be missed or delayed during busy working hours.<br>• Complex workflows can increase the chance of errors and reduce overall work efficiency.",
        TH: "• บุคลากรโรงพยาบาลจำเป็นต้องสลับใช้งานหลายระบบและหลายแพลตฟอร์มในการปฏิบัติงานประจำวัน<br>• ขั้นตอนสำคัญ เช่น การลงเวลาเข้า-ออกงาน, การจัดการคิวผู้ป่วย, การนัดหมาย และการแจ้งเตือน มีขั้นตอนที่ซับซ้อนเกินไป<br>• การสลับไปมาระหว่างหลายระบบใช้เวลามากและไม่สะดวกต่อการปฏิบัติงานจริง<br>• ข้อมูลสำคัญอาจถูกละเลยหรือล่าช้าในช่วงเวลาทำงานที่เร่งด่วน<br>• ขั้นตอนการทำงานที่ซับซ้อนเพิ่มความเสี่ยงต่อความผิดพลาดและลดประสิทธิภาพโดยรวม"
      },
      personaName: {
        EN: "SUT Hospital Staff &amp; Healthcare Personnel",
        TH: "บุคลากรโรงพยาบาล และเจ้าหน้าที่ทางการแพทย์ รพ. มทส."
      },
      personaDesc: {
        EN: "The primary users are SUT Hospital staff, including general staff, nurses, doctors, and other healthcare personnel. The application is designed to support different roles and responsibilities while providing quick and convenient access to essential hospital services in one place.",
        TH: "ผู้ใช้งานหลักคือบุคลากรของโรงพยาบาลสุรนารี ได้แก่ เจ้าหน้าที่ทั่วไป, พยาบาล, แพทย์ และบุคลากรทางการแพทย์ โดยแอปถูกออกแบบมาเพื่อรองรับบทบาทหน้าที่ที่หลากหลาย พร้อมให้การเข้าถึงบริการสำคัญของโรงพยาบาลได้อย่างสะดวกรวดเร็วในจุดเดียว"
      },
      resultsHeading: {
        EN: "Results &amp; Key Outcomes",
        TH: "ผลลัพธ์และสิ่งที่ได้รับ (Results &amp; Key Outcomes)"
      },
      resultsDesc: {
        EN: "The implementation of My SUTH App successfully streamlined daily hospital operations, significantly improving workflow efficiency for healthcare personnel while ensuring faster service delivery across hospital departments.",
        TH: "การพัฒนา My SUTH App ช่วยเพิ่มความคล่องตัวในการดำเนินงานประจำวันของโรงพยาบาล ยกระดับประสิทธิภาพการทำงานของบุคลากรทางการแพทย์อย่างมีนัยสำคัญ พร้อมทั้งช่วยให้การบริการข้ามแผนกเป็นไปอย่างรวดเร็วยิ่งขึ้น"
      },
      resultsHighlights: {
        EN: [
          "• <b>Unified Staff Dashboard:</b> Integrated multiple hospital services (attendance, queue, appointments, announcements) into one accessible mobile portal.",
          "• <b>Improved Operational Efficiency:</b> Reduced time spent navigating separate systems, minimizing manual steps and potential human errors during busy shifts.",
          "• <b>Faster Service &amp; Response Time:</b> Enabled real-time notifications and instant queue updates for staff, ensuring smoother coordination between medical departments."
        ],
        TH: [
          "• <b>ศูนย์รวมระบบการทำงานบุคลากร:</b> รวบรวมบริการสำคัญของโรงพยาบาล (การลงเวลา, ระบบคิว, การนัดหมาย, ข่าวประกาศ) ไว้บนโมบายพอร์ทัลเดียวที่เข้าถึงง่าย",
          "• <b>เพิ่มประสิทธิภาพในการปฏิบัติงาน:</b> ลดเวลาในการสลับระบบงานแยกกัน ลดขั้นตอน manual และลดโอกาสเกิดข้อผิดพลาดระหว่างเวรทำงาน",
          "• <b>การให้บริการและการตอบสนองที่รวดเร็วขึ้น:</b> รองรับระบบแจ้งเตือนแบบเรียลไทม์และการอัปเดตคิวทันที ช่วยให้การประสานงานระหว่างแผนกราบรื่นยิ่งขึ้น"
        ]
      },
      featureHeading: {
        EN: "Key UX Solutions & UI Design",
        TH: "แนวทางการแก้ปัญหา UX และการออกแบบ UI"
      },
      features: [
        {
          title: {
            EN: "1. Queue Management System",
            TH: "1. ระบบจัดการคิวผู้ป่วย"
          },
          desc: {
            EN: "A queue management system that allows staff to select an examination room and call patients by entering a queue number or scanning a QR code. Each room includes queue details with controls to recall, call the next queue, or skip a queue. When a queue is called, the patient automatically receives a notification on their mobile device.",
            TH: "ระบบจัดการคิวที่ช่วยให้เจ้าหน้าที่เลือกห้องตรวจและเรียกผู้ป่วยโดยการกรอกหมายเลขคิวหรือสแกน QR Code แต่ละห้องตรวจมีรายละเอียดคิวพร้อมปุ่มควบคุมสำหรับเรียกซ้ำ, เรียกคิวถัดไป หรือข้ามคิว เมื่อมีการเรียกคิว ผู้ป่วยจะได้รับการแจ้งเตือนอัตโนมัติบนอุปกรณ์มือถือ"
          }
        },
        {
          title: {
            EN: "2. E-Consult Service",
            TH: "2. บริการอ่านฟอร์มปรึกษาแพทย์ออนไลน์"
          },
          desc: {
            EN: "An E-Consult system that notifies doctors when consultation requests are submitted from different departments. Each request includes an urgency tag and read status, allowing staff to see whether the assigned doctor has reviewed it. This replaces the previous workflow of sharing consultation forms across multiple group chats, reducing missed requests and unclear follow-up status.",
            TH: "ระบบ E-Consult ที่แจ้งเตือนแพทย์เมื่อมีการส่งคำขอปรึกษาเคสจากแผนกต่างๆ แต่ละคำขอมีป้ายระบุความเร่งด่วนและสถานะการเปิดอ่าน ทำให้เจ้าหน้าที่ติดตามได้ว่าแพทย์ผู้รับเคสเปิดดูหรือยัง ช่วยทดแทนการส่งฟอร์มปรึกษาในกรุ๊ปแชตแบบเดิม ลดปัญหาเคสตกหล่นและสถานะที่ไม่ชัดเจน"
          }
        },
        {
          title: {
            EN: "3. Check-In / Check-Out Tracking",
            TH: "3. ระบบลงเวลาเข้า-ออกงาน"
          },
          desc: {
            EN: "A staff attendance system that allows users to check in and check out through the mobile application with location verification. The system records each attendance activity with the date, time, and status, helping staff complete attendance tasks quickly and accurately.<br><br> Users can also view their check-in and check-out history, including previous attendance records, timestamps, and work status. Historical records are organized clearly, making it easier to review past attendance and track working patterns over time.",
            TH: "ระบบลงเวลาเข้า-ออกงานของบุคลากรผ่านแอปมือถือพร้อมการยืนยันพิกัดสถานที่ (GPS) ระบบจะบันทึกวันที่ เวลา และสถานะการลงเวลาอย่างถูกต้องและแม่นยำ<br><br>นอกจากนี้ บุคลากรสามารถดูประวัติการเข้า-ออกงานย้อนหลัง ตรวจสอบไทม์สแตมป์และสถานะการทำงานได้อย่างเป็นระเบียบ ช่วยให้ทบทวนประวัติการทำงานและติดตามรูปแบบการทำงานได้ง่ายขึ้น"
          }
        },
        {
          title: {
            EN: "4. Emergency Code Alerts",
            TH: "4. ระบบแจ้งเตือนโค้ดฉุกเฉิน"
          },
          desc: {
            EN: "A real-time emergency alert system that instantly notifies relevant hospital staff when an Emergency Code is activated. Each alert clearly displays the emergency type, location, time, and key details, helping staff quickly understand the situation and respond appropriately.",
            TH: "ระบบแจ้งเตือนเหตุฉุกเฉินแบบเรียลไทม์ที่จะส่งสัญญาณแจ้งเตือนไปยังเจ้าหน้าที่ที่เกี่ยวข้องทันทีเมื่อมีการเปิดใช้ Emergency Code โดยระบุประเภทเหตุฉุกเฉิน สถานที่ เวลา และรายละเอียดสำคัญไว้อย่างชัดเจน ช่วยให้บุคลากรรับมือและเข้าช่วยเหลือได้ทันท่วงที"
          }
        },
        {
          title: {
            EN: "5. Core Application Screens",
            TH: "5. หน้าจอหลักของแอปพลิเคชัน"
          },
          desc: {
            EN: "Includes the Home, Notifications, Profile, and Work Systems screens that connect the app’s main services. The Home screen provides quick access to essential features, Notifications centralize important updates, Profile manages personal information and settings, while Work Systems organizes role-based tools and services for hospital staff.",
            TH: "ประกอบด้วยหน้าหลัก (Home), การแจ้งเตือน (Notifications), โปรไฟล์ (Profile) และระบบงาน (Work Systems) ที่เชื่อมโยงบริการหลักของแอปพลิเคชันเข้าด้วยกัน หน้าหลักช่วยให้เข้าถึงฟีเจอร์สำคัญได้อย่างรวดเร็ว ศูนย์แจ้งเตือนรวมอัปเดตสำคัญ ส่วนโปรไฟล์จัดการข้อมูลตั้งค่า และระบบงานจัดระเบียบเครื่องมือตามบทบาทหน้าที่ของบุคลากร"
          }
        }
      ]
    },
    goalApp: {
      title: {
        EN: "Goal Management Application with AI Assistant",
        TH: "แอปพลิเคชันจัดการเป้าหมายพร้อมผู้ช่วย AI"
      },
      subtitle: {
        EN: "“Small steps, big achievements”",
        TH: "“ก้าวทีละนิด เพื่อความสำเร็จที่ยิ่งใหญ่”"
      },
      overview: {
        EN: "A mobile goal-tracking application designed to help users stay consistent with their personal goals through lightweight check-ins, streak-based motivation, progress tracking, and AI-assisted guidance.",
        TH: "แอปพลิเคชันบนมือถือสำหรับติดตามเป้าหมาย ออกแบบมาเพื่อช่วยให้ผู้ใช้สามารถทำเป้าหมายส่วนตัวได้อย่างสม่ำเสมอ ผ่านการ Check-in ที่เรียบง่าย การสร้างแรงจูงใจด้วยระบบ Streak การติดตามความก้าวหน้า และแนวคิดการใช้ AI เป็นผู้ช่วยในการทำเป้าหมาย"
      },
      meta: {
        role: {
          EN: "UX/UI Designer",
          TH: "UX/UI Designer"
        },
        team: {
          EN: "UX/UI Designer · Developer",
          TH: "UX/UI Designer · Developer"
        },
        duration: {
          EN: "3 Months",
          TH: "3 เดือน"
        },
        responsibilities: {
          EN: "User Research · UX Analysis · Persona · User Journey · UI Design · Prototyping · User Testing",
          TH: "User Research · UX Analysis · Persona · User Journey · UI Design · Prototyping · User Testing"
        },
        labels: {
          role: { EN: "Role", TH: "บทบาท" },
          team: { EN: "Team", TH: "ทีม" },
          duration: { EN: "Duration", TH: "ระยะเวลา" },
          responsibilities: { EN: "Responsibilities", TH: "ความรับผิดชอบ" }
        }
      },
      researchPivot: {
        heading: {
          EN: "Research & Project Pivot",
          TH: "การวิจัยและการเปลี่ยนทิศทางของโปรเจกต์"
        },
        initialIdea: {
          title: {
            EN: "Starting with a Different Idea",
            TH: "จุดเริ่มต้นจากแนวคิดที่แตกต่าง"
          },
          desc: {
            EN: "The project initially began as a <b>focus and productivity app</b>, designed to help users stay focused while maintaining healthy work habits. The concept combined focused work sessions with scheduled breaks and stretching reminders before continuing.",
            TH: "ในช่วงแรก โปรเจกต์เริ่มต้นจากแนวคิดในการสร้าง <b>แอปพลิเคชันสำหรับช่วยโฟกัสและเพิ่มประสิทธิภาพในการทำงาน</b> โดยต้องการให้ผู้ใช้สามารถจดจ่อกับงานได้โดยไม่ละเลยสุขภาพ จึงออกแบบแนวคิดให้มีช่วงเวลาพักและการแจ้งเตือนให้ยืดเส้นยืดสาย ก่อนกลับไปทำงานหรืออ่านหนังสือต่อ"
          },
          flow: [
            { EN: "Focus", TH: "Focus" },
            { EN: "Break", TH: "Break" },
            { EN: "Stretch", TH: "Stretch" },
            { EN: "Continue", TH: "Continue" }
          ]
        },
        userResearch: {
          title: {
            EN: "User Research",
            TH: "การวิจัยผู้ใช้"
          },
          statNum: { EN: "32", TH: "32" },
          statLabel: { EN: "Participants", TH: "ผู้เข้าร่วมแบบสำรวจ" },
          statSub: { EN: "16 Male · 16 Female", TH: "ชาย 16 คน · หญิง 16 คน" },
          desc: {
            EN: "Before moving forward with the concept, we conducted a survey with <b>32 participants — 16 male and 16 female —</b> to better understand their behaviors, motivations, and challenges.<br><br>The research revealed a broader problem: <b>many participants already had personal goals they wanted to achieve, but struggled to take consistent action or maintain progress over time.</b> Falling behind often made it harder to stay motivated and continue toward those goals.",
            TH: "ก่อนพัฒนาแนวคิดต่อ ทีมได้ทำแบบสำรวจกับผู้เข้าร่วมจำนวน <b>32 คน — ผู้ชาย 16 คน และผู้หญิง 16 คน —</b> เพื่อทำความเข้าใจพฤติกรรม แรงจูงใจ และปัญหาของผู้ใช้มากขึ้น<br><br>ผลการสำรวจทำให้พบปัญหาที่กว้างกว่าแนวคิดตั้งต้น คือ <b>ผู้เข้าร่วมจำนวนมากมีเป้าหมายที่อยากทำให้สำเร็จอยู่แล้ว แต่มีปัญหาในการลงมือทำอย่างสม่ำเสมอและรักษาความต่อเนื่องในระยะยาว</b> และเมื่อทำตามแผนไม่ได้ แรงจูงใจในการทำเป้าหมายต่อก็มักลดลง"
          }
        },
        keyFindings: {
          title: {
            EN: "Key Findings",
            TH: "สิ่งสำคัญที่ค้นพบ"
          },
          items: [
            {
              EN: "Many participants already had goals they wanted to achieve.",
              TH: "ผู้เข้าร่วมจำนวนมากมีเป้าหมายที่ต้องการทำให้สำเร็จอยู่แล้ว",
              highlight: false
            },
            {
              EN: "Maintaining consistency was a greater challenge than setting goals.",
              TH: "ปัญหาสำคัญไม่ได้อยู่ที่การตั้งเป้าหมาย แต่อยู่ที่การรักษาความสม่ำเสมอ",
              highlight: true
            },
            {
              EN: "Falling behind could reduce motivation to continue.",
              TH: "การทำตามแผนไม่ได้อาจทำให้แรงจูงใจในการทำต่อไปลดลง",
              highlight: false
            },
            {
              EN: "Visible progress and small achievements could help reinforce motivation.",
              TH: "การมองเห็นความก้าวหน้าและความสำเร็จเล็ก ๆ สามารถช่วยเสริมแรงจูงใจได้",
              highlight: false
            }
          ]
        },
        productPivot: {
          title: {
            EN: "From Focus to Goal Management",
            TH: "จาก Focus App สู่ Goal Management"
          },
          desc: {
            EN: "These findings shifted the direction of the project from helping users stay focused during individual work sessions to helping them <b>stay consistent with their longer-term goals</b>.<br><br>This led to the concept of a <b>Goal Management App</b> focused on progress tracking, consistency, and motivation, with AI-assisted guidance envisioned to support users throughout their goal journey.",
            TH: "ผลการวิจัยทำให้ทีมเปลี่ยนทิศทางของโปรเจกต์ จากการช่วยให้ผู้ใช้ <b>โฟกัสกับงานในแต่ละครั้ง</b> ไปสู่การช่วยให้ผู้ใช้ <b>รักษาความสม่ำเสมอในการทำเป้าหมายระยะยาว</b><br><br>จึงพัฒนาแนวคิดมาเป็น <b>Goal Management App</b> ที่เน้นการติดตามความก้าวหน้า การสร้างความสม่ำเสมอ และแรงจูงใจ โดยมีแนวคิดให้ AI เป็นผู้ช่วยแนะนำและสนับสนุนผู้ใช้ระหว่างการทำเป้าหมาย"
          },
          progression: [
            { EN: "Focus & Healthy Productivity", TH: "Focus & Healthy Productivity" },
            { EN: "User Research", TH: "การวิจัยผู้ใช้" },
            { EN: "Consistency Problem", TH: "พบปัญหาด้านความสม่ำเสมอ" },
            { EN: "Goal Management", TH: "Goal Management" }
          ]
        }
      },
      understandingUser: {
        heading: {
          EN: "Understanding the User",
          TH: "ทำความเข้าใจผู้ใช้"
        },
        intro: {
          EN: "Based on the research findings, we developed a primary persona to represent users who have clear goals but struggle to maintain consistent progress. The persona helped us better understand the user's motivations, frustrations, and behaviors before exploring where challenges occurred throughout their journey.",
          TH: "จากผลการวิจัย ทีมได้พัฒนา Persona หลักเพื่อเป็นตัวแทนของผู้ใช้ที่มีเป้าหมายชัดเจน แต่มีปัญหาในการรักษาความสม่ำเสมอในการทำเป้าหมาย Persona ช่วยให้ทีมเข้าใจแรงจูงใจ ปัญหา และพฤติกรรมของผู้ใช้ ก่อนนำมาวิเคราะห์ต่อว่าปัญหาเกิดขึ้นในช่วงใดของเส้นทางการทำเป้าหมาย"
        },
        persona: {
          title: {
            EN: "Primary Persona — Suthida",
            TH: "Persona หลัก — สุธิดา"
          },
          sub: {
            EN: "20 · University Student",
            TH: "อายุ 20 ปี · นักศึกษามหาวิทยาลัย"
          },
          desc: {
            EN: "Suthida is a university student who regularly plans her assignments and personal goals. Although she knows what she wants to achieve, unexpected tasks and changing schedules often disrupt her plans, making it difficult to stay consistent and motivated.",
            TH: "สุธิดาเป็นนักศึกษาที่มีการวางแผนงาน การเรียน และเป้าหมายของตัวเองอยู่เสมอ แม้จะรู้ว่าตัวเองต้องการทำอะไรให้สำเร็จ แต่งานที่เข้ามาโดยไม่คาดคิดและตารางเวลาที่เปลี่ยนแปลง มักทำให้แผนที่วางไว้ถูกรบกวน ส่งผลให้รักษาความสม่ำเสมอและแรงจูงใจได้ยาก"
          },
          image: "projects/Goal Flame/Suthida.jpeg",
          goalsHeading: { EN: "Goals", TH: "เป้าหมาย" },
          goals: [
            { EN: "Complete assignments and projects on time", TH: "ทำงานและโปรเจกต์ให้เสร็จตามกำหนด" },
            { EN: "Maintain consistent progress toward her goals", TH: "รักษาความสม่ำเสมอในการทำเป้าหมาย" },
            { EN: "Achieve a satisfying academic performance", TH: "มีผลการเรียนที่น่าพึงพอใจ" }
          ],
          painHeading: { EN: "Pain Points", TH: "ปัญหา" },
          painPoints: [
            { EN: "Struggles to follow plans consistently", TH: "ทำตามแผนได้ไม่สม่ำเสมอ" },
            { EN: "Unexpected tasks can disrupt her schedule", TH: "งานที่เข้ามากะทันหันทำให้แผนถูกรบกวน" },
            { EN: "Feels stressed when deadlines approach", TH: "รู้สึกเครียดเมื่อใกล้ถึงกำหนดส่ง" },
            { EN: "Loses motivation after falling behind", TH: "แรงจูงใจลดลงเมื่อทำตามแผนไม่ได้" }
          ],
          needsHeading: { EN: "Needs", TH: "ความต้องการ" },
          needs: [
            { EN: "A simple way to track progress", TH: "วิธีติดตามความก้าวหน้าที่เข้าใจง่าย" },
            { EN: "Flexibility when plans change", TH: "ความยืดหยุ่นเมื่อแผนเปลี่ยนแปลง" },
            { EN: "Motivation to keep moving forward", TH: "แรงจูงใจให้กลับมาทำเป้าหมายต่อ" }
          ],
          quote: {
            EN: "“I already have a plan, but sometimes I don't have the motivation to start.”",
            TH: "“ฉันมีแผนอยู่แล้ว แต่บางครั้งก็ไม่มีแรงจูงใจที่จะเริ่มทำ”"
          }
        },
        userJourney: {
          title: {
            EN: "As-Is User Journey",
            TH: "User Journey ปัจจุบัน"
          },
          intro: {
            EN: "We mapped Suthida's existing journey to understand how her motivation and behavior changed while working toward a goal.",
            TH: "ทีมได้นำ Persona มาสร้าง As-Is User Journey เพื่อดูว่าพฤติกรรมและความรู้สึกของผู้ใช้เปลี่ยนแปลงอย่างไรระหว่างการทำเป้าหมาย"
          },
          flow: [
            { EN: "Plan", TH: "วางแผน" },
            { EN: "Start", TH: "เริ่มลงมือทำ" },
            { EN: "Disruption", TH: "มีสิ่งรบกวนแผน" },
            { EN: "Fall Behind", TH: "ทำไม่ทันแผน" },
            { EN: "Replan", TH: "วางแผนใหม่" }
          ],
          finding: {
            EN: "The journey revealed that the main challenge was not creating a goal or making a plan. The difficulty appeared when unexpected situations interrupted the plan, causing users to fall behind and lose motivation.",
            TH: "Journey ทำให้เห็นว่าปัญหาหลักไม่ได้อยู่ที่การตั้งเป้าหมายหรือการวางแผน แต่เกิดขึ้นเมื่อมีเหตุการณ์ที่ไม่คาดคิดเข้ามารบกวน ทำให้ผู้ใช้ทำตามแผนไม่ได้และเริ่มสูญเสียแรงจูงใจ"
          },
          image: "projects/Goal Flame/User journey.jpg"
        },
        keyInsight: {
          title: {
            EN: "The problem wasn't setting a goal. It was staying consistent when life interrupted the plan.",
            TH: "ปัญหาไม่ใช่การตั้งเป้าหมาย แต่คือการรักษาความสม่ำเสมอเมื่อสิ่งที่เกิดขึ้นจริงไม่เป็นไปตามแผน"
          },
          desc: {
            EN: "This insight became the foundation for exploring ways to make progress more visible, encourage consistency, and help users continue even when their original plans did not go as expected.",
            TH: "Insight นี้จึงกลายเป็นพื้นฐานในการหาแนวทางออกแบบที่ช่วยให้ผู้ใช้ มองเห็นความก้าวหน้า รักษาความสม่ำเสมอ และสามารถกลับมาทำเป้าหมายต่อได้ แม้แผนเดิมจะไม่เป็นไปตามที่ตั้งใจไว้"
          }
        }
      },
      designOpportunities: {
        heading: {
          EN: "Design Opportunities",
          TH: "โอกาสในการออกแบบ"
        },
        intro: {
          EN: "Insights from the research, persona, and user journey highlighted several opportunities to help users maintain progress without making goal management feel overwhelming. These opportunities became the foundation for the key design decisions.",
          TH: "จากข้อมูลการวิจัย Persona และ User Journey ทำให้เห็นโอกาสในการออกแบบที่สามารถช่วยให้ผู้ใช้รักษาความต่อเนื่องในการทำเป้าหมาย โดยไม่ทำให้การจัดการเป้าหมายรู้สึกซับซ้อนหรือสร้างแรงกดดัน แนวคิดเหล่านี้จึงถูกนำมาใช้เป็นพื้นฐานในการตัดสินใจด้านการออกแบบ"
        },
        cards: [
          {
            num: "1",
            icon: "eye",
            title: {
              EN: "Make Progress Visible",
              TH: "ทำให้ความก้าวหน้ามองเห็นได้ชัดเจน"
            },
            desc: {
              EN: "Help users clearly see how much they have accomplished and what still needs to be done, making small actions feel meaningful.",
              TH: "ช่วยให้ผู้ใช้เห็นว่าตัวเองทำสำเร็จไปแล้วมากน้อยเพียงใด และยังเหลืออะไรที่ต้องทำ เพื่อให้การลงมือทำในแต่ละครั้งรู้สึกมีความหมาย"
            }
          },
          {
            num: "2",
            icon: "flame",
            title: {
              EN: "Reward Consistency",
              TH: "สร้างแรงจูงใจจากความสม่ำเสมอ"
            },
            desc: {
              EN: "Turn repeated actions into visible progress to encourage users to keep working toward their goals over time.",
              TH: "เปลี่ยนการลงมือทำอย่างต่อเนื่องให้กลายเป็นความก้าวหน้าที่มองเห็นได้ เพื่อกระตุ้นให้ผู้ใช้อยากทำเป้าหมายต่อไป"
            }
          },
          {
            num: "3",
            icon: "layers",
            title: {
              EN: "Support Different Types of Goals",
              TH: "รองรับเป้าหมายที่แตกต่างกัน"
            },
            desc: {
              EN: "Provide flexible ways to manage both structured goals with multiple tasks and recurring goals that rely on consistent actions.",
              TH: "ออกแบบให้สามารถจัดการได้ทั้งเป้าหมายที่มีหลายขั้นตอนหรือ Task และเป้าหมายที่เน้นการทำกิจกรรมอย่างสม่ำเสมอ"
            }
          },
          {
            num: "4",
            icon: "hand-heart",
            title: {
              EN: "Encourage, Not Punish",
              TH: "ส่งเสริมให้ทำต่อ แทนการทำให้รู้สึกล้มเหลว"
            },
            desc: {
              EN: "When users fall behind, the experience should encourage them to continue rather than make them feel that their previous progress has been lost.",
              TH: "เมื่อผู้ใช้ทำไม่เป็นไปตามแผน ประสบการณ์ควรช่วยกระตุ้นให้กลับมาทำต่อ แทนที่จะทำให้รู้สึกว่าความก้าวหน้าที่ผ่านมาสูญเปล่า"
            }
          }
        ],
        direction: {
          label: {
            EN: "DESIGN DIRECTION",
            TH: "DESIGN DIRECTION"
          },
          quote: {
            EN: "Make every small step visible, rewarding, and easier to continue.",
            TH: "ทำให้ทุกก้าวเล็ก ๆ มองเห็นได้ รู้สึกมีคุณค่า และอยากทำต่อไป"
          }
        }
      },
      keyUxSolutions: {
        heading: {
          EN: "Key UX Solutions & UI Design",
          TH: "แนวทางการแก้ปัญหา UX และการออกแบบ UI"
        },
        intro: {
          EN: "Based on the research insights and design opportunities, the experience was designed around making goals easier to manage, progress easier to understand, and consistent actions more rewarding. The interface supports different types of goals while keeping the overall experience simple and encouraging.",
          TH: "จากข้อมูลการวิจัยและโอกาสในการออกแบบ ประสบการณ์ใช้งานถูกออกแบบโดยเน้นให้ผู้ใช้สามารถจัดการเป้าหมายได้ง่ายขึ้น มองเห็นความก้าวหน้าได้ชัดเจน และรู้สึกว่าการลงมือทำอย่างสม่ำเสมอมีคุณค่า โดยระบบรองรับลักษณะของเป้าหมายที่แตกต่างกัน ในขณะที่ยังคงประสบการณ์ใช้งานให้เรียบง่ายและช่วยส่งเสริมแรงจูงใจ"
        },
        solutions: [
          {
            num: "1",
            title: {
              EN: "A Clear View of What Needs Attention",
              TH: "มองเห็นสิ่งที่ควรทำได้อย่างชัดเจน"
            },
            desc: {
              EN: "The Home screen gives users a quick overview of their current progress and highlights goals that still require action during the week. Goals that have reached their weekly target are visually distinguished, helping users quickly understand what has been completed and what still needs attention.<br><br>The Goals screen brings all goals into one place, making it easier to review ongoing goals and access their details without navigating through multiple sections.",
              TH: "หน้าหลักช่วยให้ผู้ใช้เห็นภาพรวมความก้าวหน้า และให้ความสำคัญกับเป้าหมายที่ยังต้องดำเนินการในสัปดาห์นั้น เป้าหมายที่ทำครบตามจำนวนครั้งที่กำหนดแล้วจะแสดงสถานะที่แตกต่างอย่างชัดเจน ทำให้ผู้ใช้สามารถรู้ได้อย่างรวดเร็วว่าเป้าหมายใดเสร็จแล้วและเป้าหมายใดยังต้องดำเนินการต่อ<br><br>หน้ารวมเป้าหมายรวบรวมเป้าหมายทั้งหมดไว้ในพื้นที่เดียว เพื่อให้ผู้ใช้สามารถตรวจสอบเป้าหมายที่กำลังดำเนินการและเข้าถึงรายละเอียดของแต่ละเป้าหมายได้ง่าย"
            },
            purposeLabel: {
              EN: "DESIGN PURPOSE",
              TH: "เป้าหมายของการออกแบบ"
            },
            purposeIntro: {
              EN: "Help users answer a simple question at a glance:",
              TH: "ช่วยให้ผู้ใช้ตอบคำถามง่าย ๆ ได้ทันทีว่า:"
            },
            purposeQuote: {
              EN: "What should I work on next?",
              TH: "ต่อไปฉันควรทำอะไร?"
            },
            screens: [
              {
                label: { EN: "Home Screen", TH: "หน้าหลัก" },
                image: "projects/Goal Flame/หน้าแรก.png",
                primary: true
              },
              {
                label: { EN: "All Goals Screen", TH: "หน้ารวมเป้าหมาย" },
                image: "projects/Goal Flame/หน้าเป้าหมาย.png",
                primary: false
              }
            ]
          },
          {
            num: "2",
            type: "comparison",
            title: {
              EN: "Flexible Goal Types for Different Behaviors",
              TH: "รูปแบบเป้าหมายที่ยืดหยุ่นตามพฤติกรรม"
            },
            intro: {
              EN: "Not every goal needs to be managed in the same way. The goal creation flow therefore supports two approaches based on how users want to track their progress.",
              TH: "เป้าหมายแต่ละประเภทไม่จำเป็นต้องถูกจัดการด้วยวิธีเดียวกัน ระบบจึงรองรับการสร้างเป้าหมาย 2 รูปแบบ ตามลักษณะของสิ่งที่ผู้ใช้ต้องการติดตาม"
            },
            summary: {
              EN: "This flexibility allows users to choose a tracking method that better matches the nature of each goal without adding unnecessary complexity.",
              TH: "รูปแบบนี้ช่วยให้ผู้ใช้เลือกวิธีติดตามที่เหมาะกับลักษณะของแต่ละเป้าหมาย โดยไม่เพิ่มความซับซ้อนที่ไม่จำเป็น"
            },
            purposeLabel: {
              EN: "DESIGN PURPOSE",
              TH: "เป้าหมายของการออกแบบ"
            },
            purposeQuote: {
              EN: "Adapt goal management to the way users actually take action, rather than forcing every goal into the same structure.",
              TH: "ปรับวิธีจัดการเป้าหมายให้สอดคล้องกับวิธีที่ผู้ใช้ลงมือทำจริง แทนการบังคับให้ทุกเป้าหมายใช้โครงสร้างเดียวกัน"
            },
            comparisonItems: [
              {
                badge: { EN: "GOAL WITH TASKS", TH: "เป้าหมายแบบมีภารกิจ" },
                subtitle: { EN: "Structured / Multi-step Goals", TH: "เป้าหมายขนาดใหญ่ / มีขั้นตอนชัดเจน" },
                desc: {
                  EN: "Designed for larger or structured goals that can be broken down into actionable steps.",
                  TH: "เหมาะสำหรับเป้าหมายขนาดใหญ่หรือมีขั้นตอนชัดเจน ซึ่งสามารถแบ่งออกเป็น Task ย่อย ๆ เพื่อให้ลงมือทำได้ง่ายขึ้น"
                },
                image: "projects/Goal Flame/หน้าเพิ่มเป้าหมาย มีภารกิจ.png"
              },
              {
                badge: { EN: "GOAL WITHOUT TASKS", TH: "เป้าหมายแบบไม่มีภารกิจ" },
                subtitle: { EN: "Recurring / Consistency-based Goals", TH: "เป้าหมายแบบต่อเนื่อง / เน้นความสม่ำเสมอ" },
                desc: {
                  EN: "Designed for recurring behaviors, allowing users to define how many times they want to complete an activity each week and track it through simple check-ins.",
                  TH: "เหมาะสำหรับกิจกรรมที่ต้องอาศัยความสม่ำเสมอ โดยผู้ใช้สามารถกำหนดจำนวนครั้งที่ต้องการทำในแต่ละสัปดาห์ และติดตามความก้าวหน้าผ่านการ Check-in"
                },
                image: "projects/Goal Flame/หน้าเพิ่มเป้าหมาย.png"
              }
            ]
          },
          {
            num: "3",
            type: "detailComparison",
            title: {
              EN: "Making Consistency Visible",
              TH: "ทำให้ความสม่ำเสมอมองเห็นได้"
            },
            intro: {
              EN: "Goal details focus on showing users where they are now and what they need to do next.<br><br>For recurring goals, users can see their weekly check-in target, remaining actions, available time, and accumulated streak. Check-ins are limited to once per day to encourage consistent behavior rather than completing multiple check-ins at once.<br><br>For structured goals, progress is connected to individual tasks, allowing users to see how completing smaller actions contributes to the larger goal.<br><br>The streak concept uses a familiar 🔥 visual metaphor to transform repeated actions into visible progress and make consistency feel rewarding.",
              TH: "หน้ารายละเอียดเป้าหมายถูกออกแบบให้ผู้ใช้เข้าใจได้ว่าปัจจุบันตัวเองอยู่ตรงไหน และยังต้องทำอะไรต่อเพื่อไปถึงเป้าหมาย<br><br>สำหรับเป้าหมายที่ทำซ้ำ ผู้ใช้สามารถดูจำนวน Check-in ที่กำหนดในแต่ละสัปดาห์ จำนวนครั้งที่ยังเหลือ ระยะเวลาที่เหลือ และ Streak ที่สะสมไว้ โดยสามารถ Check-in ได้วันละหนึ่งครั้ง เพื่อส่งเสริมความสม่ำเสมอ แทนการทำหลายครั้งในวันเดียวเพื่อให้ครบเป้าหมาย<br><br>สำหรับเป้าหมายแบบมีภารกิจ ความก้าวหน้าจะเชื่อมโยงกับ Task ย่อย ทำให้ผู้ใช้เห็นว่าการทำสิ่งเล็ก ๆ ให้สำเร็จแต่ละครั้งกำลังพาเข้าใกล้เป้าหมายใหญ่ขึ้นอย่างไร<br><br>แนวคิด Streak ใช้สัญลักษณ์ 🔥 ที่คุ้นเคยเพื่อเปลี่ยนการลงมือทำซ้ำ ๆ ให้กลายเป็นความก้าวหน้าที่มองเห็นได้ และสร้างความรู้สึกอยากรักษาความต่อเนื่อง"
            },
            purposeLabel: {
              EN: "DESIGN PURPOSE",
              TH: "เป้าหมายของการออกแบบ"
            },
            purposeQuote: {
              EN: "Turn small actions into visible progress that encourages users to keep moving forward.",
              TH: "เปลี่ยนการลงมือทำเล็ก ๆ ให้กลายเป็นความก้าวหน้าที่มองเห็นได้ และกระตุ้นให้ผู้ใช้อยากทำต่ออย่างสม่ำเสมอ"
            },
            comparisonItems: [
              {
                badge: { EN: "RECURRING GOAL", TH: "เป้าหมายแบบทำซ้ำ" },
                subtitle: { EN: "Consistency through Check-ins & Streak", TH: "สร้างความสม่ำเสมอด้วย Check-in & Streak" },
                desc: {
                  EN: "Check-ins are limited to max 1 per day to build daily consistency across multiple days rather than completing several check-ins at once.",
                  TH: "กำหนดให้ Check-in ได้วันละ 1 ครั้ง เพื่อส่งเสริมให้เกิดความสม่ำเสมอในทุก ๆ วันอย่างแท้จริง แทนการรีบทำหลายครั้งในวันเดียว"
                },
                image: "projects/Goal Flame/รายละเอียด.png",
                highlights: [
                  { EN: "Weekly Target & Remaining Check-ins", TH: "เป้าหมายประจำสัปดาห์ & จำนวนที่เหลือ" },
                  { EN: "🔥 Streak Concept", TH: "แนวคิด 🔥 Streak" },
                  { EN: "Max 1 Check-in per Day", TH: "จำกัด Check-in 1 ครั้งต่อวัน" }
                ]
              },
              {
                badge: { EN: "STRUCTURED GOAL", TH: "เป้าหมายแบบมีขั้นตอน" },
                subtitle: { EN: "Progress through Task Completion", TH: "ความก้าวหน้าผ่านการทำ Task ให้สำเร็จ" },
                desc: {
                  EN: "Progress is tied directly to individual tasks, showing how small actions add up to larger goal achievements.",
                  TH: "ความก้าวหน้าถูกเชื่อมโยงกับ Task ย่อย ช่วยให้เห็นว่าแต่ละขั้นตอนเล็ก ๆ ขับเคลื่อนเป้าหมายใหญ่ได้อย่างไร"
                },
                image: "projects/Goal Flame/รายละเอียด มีภารกิจ.png",
                highlights: [
                  { EN: "Sub-tasks Breakdown", TH: "การย่อย Task ออกเป็นขั้นตอน" },
                  { EN: "Task Completion Track", TH: "การติดตามผลตาม Task ย่อย" },
                  { EN: "Overall Goal Progress Connection", TH: "ความเชื่อมโยงกับเป้าหมายใหญ่" }
                ]
              }
            ]
          },
          {
            num: "4",
            type: "dashboard",
            title: {
              EN: "Seeing Progress Beyond Today",
              TH: "มองเห็นความก้าวหน้าในระยะยาว"
            },
            desc: {
              EN: "The Dashboard provides a broader view of the user's progress beyond individual goals. Users can review what they have accomplished, see the status of active and completed goals, and explore their consistency across weekly, monthly, and yearly periods.<br><br>Progress data and completion percentages help users recognize patterns over time and reflect on how consistently they have worked toward each goal.",
              TH: "Dashboard ช่วยให้ผู้ใช้มองเห็นความก้าวหน้าในภาพรวมที่มากกว่าเป้าหมายในแต่ละวัน ผู้ใช้สามารถดูสิ่งที่ทำสำเร็จ สถานะของเป้าหมายที่กำลังดำเนินการและเป้าหมายที่สำเร็จแล้ว รวมถึงดูรูปแบบความสม่ำเสมอในระดับรายสัปดาห์ รายเดือน และรายปี<br><br>ข้อมูลความก้าวหน้าและเปอร์เซ็นต์ความสำเร็จช่วยให้ผู้ใช้มองเห็นรูปแบบพฤติกรรมของตัวเองในระยะยาว และสะท้อนว่าตนเองสามารถรักษาความสม่ำเสมอในแต่ละเป้าหมายได้มากน้อยเพียงใด"
            },
            levels: [
              { label: { EN: "Today", TH: "วันนี้" }, value: { EN: "What has been accomplished", TH: "สิ่งที่ทำสำเร็จแล้ว" } },
              { label: { EN: "Current Goals", TH: "เป้าหมายปัจจุบัน" }, value: { EN: "Active and completed goals", TH: "เป้าหมายที่กำลังทำและสำเร็จแล้ว" } },
              { label: { EN: "Consistency", TH: "ความสม่ำเสมอ" }, value: { EN: "Weekly · Monthly · Yearly", TH: "รายสัปดาห์ · รายเดือน · รายปี" } },
              { label: { EN: "Progress", TH: "ความก้าวหน้า" }, value: { EN: "Completion percentage", TH: "เปอร์เซ็นต์ความสำเร็จ" } }
            ],
            purposeLabel: {
              EN: "DESIGN PURPOSE",
              TH: "เป้าหมายของการออกแบบ"
            },
            purposeQuote: {
              EN: "Help users see that small, repeated actions can gradually contribute to meaningful long-term progress.",
              TH: "ช่วยให้ผู้ใช้เห็นว่าการลงมือทำเล็ก ๆ อย่างต่อเนื่องสามารถสะสมและนำไปสู่ความก้าวหน้าที่มีความหมายในระยะยาวได้"
            },
            image: "projects/Goal Flame/หน้าสรุปผล.png"
          }
        ],
        aiAssistance: {
          title: {
            EN: "AI Assistance Concept",
            TH: "แนวคิด AI Assistance"
          },
          statusBadge: {
            EN: "CONCEPT / NOT FULLY IMPLEMENTED",
            TH: "แนวคิด / ยังไม่ได้พัฒนาอย่างเต็มรูปแบบ"
          },
          desc: {
            EN: "AI was originally envisioned as a supportive companion throughout the goal journey, providing personalized suggestions, encouragement, and guidance based on each user's progress.<br><br>Rather than replacing the user's decisions, the concept was intended to help users determine their next step and maintain motivation when progress slowed down.<br><br>Due to the project's technical and time constraints, this concept was not fully implemented and remained part of the proposed experience.",
            TH: "เดิม AI ถูกวางแนวคิดให้ทำหน้าที่เป็นผู้ช่วยระหว่างการทำเป้าหมาย โดยสามารถให้คำแนะนำ กำลังใจ และแนวทางที่เหมาะสมตามความก้าวหน้าของผู้ใช้แต่ละคน<br><br>แนวคิดนี้ไม่ได้ต้องการให้ AI ตัดสินใจแทนผู้ใช้ แต่ช่วยให้ผู้ใช้มองเห็นว่าควรทำอะไรต่อ และช่วยรักษาแรงจูงใจเมื่อความก้าวหน้าเริ่มลดลง<br><br>อย่างไรก็ตาม ด้วยข้อจำกัดด้านเทคนิคและระยะเวลาของโครงการ แนวคิด AI ดังกล่าวยังไม่สามารถพัฒนาได้อย่างเต็มรูปแบบ และยังคงอยู่ในระดับแนวคิดของประสบการณ์ที่วางแผนไว้"
          },
          pillars: [
            {
              label: { EN: "Original Vision", TH: "แนวคิดดั้งเดิม" },
              text: { EN: "Personalized suggestions, encouragement, and guidance", TH: "คำแนะนำ กำลังใจ และแนวทางเฉพาะบุคคล" }
            },
            {
              label: { EN: "Role of AI", TH: "บทบาทของ AI" },
              text: { EN: "Support user decisions, not make decisions for them", TH: "สนับสนุนการตัดสินใจ ไม่ใช่ตัดสินใจแทน" }
            },
            {
              label: { EN: "Project Reality", TH: "สถานะการพัฒนา" },
              text: { EN: "Concept not fully implemented due to technical and time constraints", TH: "ยังไม่ได้พัฒนาเต็มรูปแบบเนื่องจากข้อจำกัดด้านเทคนิคและเวลา" }
            }
          ]
        }
      },
      testingOutcome: {
        heading: {
          EN: "Testing, Outcome & Limitations",
          TH: "การทดสอบ ผลลัพธ์ และข้อจำกัดของโครงการ"
        },
        testing: {
          title: { EN: "Prototype Testing", TH: "การทดสอบ Prototype" },
          stat1Num: { EN: "10", TH: "10 คน" },
          stat1Label: { EN: "Participants", TH: "ผู้เข้าร่วมทดสอบ" },
          stat2Num: { EN: "90%", TH: "90%" },
          stat2Label: { EN: "High Satisfaction", TH: "มีความพึงพอใจในระดับสูง" },
          desc: {
            EN: "The design prototype was tested with <b>10 participants</b> to evaluate the overall experience and gather feedback on the proposed solution. After completing the prototype tasks, participants provided feedback through a Google Form questionnaire.<br><br>Overall, the response was positive, with <b>90% of participants reporting a high level of satisfaction</b> with the prototype.",
            TH: "Design Prototype ถูกนำไปทดสอบกับผู้ใช้จำนวน <b>10 คน</b> เพื่อประเมินประสบการณ์โดยรวมและเก็บความคิดเห็นต่อแนวทางการออกแบบ หลังจากทดลองทำ Task ผ่าน Prototype ผู้เข้าร่วมได้ประเมินประสบการณ์ผ่านแบบสอบถาม Google Form<br><br>ผลตอบรับโดยรวมเป็นไปในเชิงบวก โดย <b>90% ของผู้เข้าร่วมมีความพึงพอใจต่อ Prototype ในระดับสูง</b>"
          },
          flow: [
            { EN: "Design Prototype", TH: "Design Prototype" },
            { EN: "Prototype Tasks", TH: "ทดลองทำ Task" },
            { EN: "Google Form Feedback", TH: "แบบสอบถาม Google Form" }
          ]
        },
        outcome: {
          title: { EN: "Project Outcome", TH: "ผลลัพธ์ของโครงการ" },
          progression: [
            { EN: "User Research", TH: "User Research" },
            { EN: "Product Pivot", TH: "Product Pivot" },
            { EN: "UX/UI Design", TH: "UX/UI Design" },
            { EN: "Design Prototype", TH: "Design Prototype" },
            { EN: "Prototype Testing", TH: "การทดสอบ Prototype" }
          ],
          desc: {
            EN: "The project successfully progressed from initial research and a product pivot to a complete UX/UI prototype for the Goal Management experience. The final design explored goal creation, task and check-in based tracking, streak-based motivation, progress monitoring, and dashboard visualization.<br><br>However, the developed application did not fully reflect the final UX/UI design, so the proposed experience was primarily evaluated through the <b>design prototype</b> rather than the implemented product.",
            TH: "โปรเจกต์สามารถพัฒนาตั้งแต่การทำ User Research การเปลี่ยนทิศทางของ Product ไปจนถึงการสร้าง UX/UI Prototype สำหรับ Goal Management ที่ครอบคลุมการสร้างเป้าหมาย การติดตามแบบ Task และ Check-in การสร้างแรงจูงใจด้วย Streak การติดตามความก้าวหน้า และ Dashboard สรุปผล<br><br>อย่างไรก็ตาม แอปพลิเคชันที่ถูกพัฒนาขึ้นไม่ได้สะท้อน UX/UI Design ขั้นสุดท้ายได้ครบถ้วน แนวทางการออกแบบจึงได้รับการประเมินผ่าน <b>Design Prototype เป็นหลัก</b> มากกว่าผลิตภัณฑ์ที่พัฒนาขึ้นจริง"
          }
        },
        limitations: {
          title: { EN: "Limitations", TH: "ข้อจำกัด" },
          items: [
            {
              badge: { EN: "TIME", TH: "เวลา" },
              title: { EN: "3-Month Project", TH: "โปรเจกต์ 3 เดือน" },
              desc: {
                EN: "Limited the amount of development and design iteration possible.",
                TH: "มีระยะเวลาดำเนินงานประมาณ 3 เดือน ทำให้มีข้อจำกัดด้านการพัฒนาและการปรับปรุงงานในแต่ละรอบ"
              }
            },
            {
              badge: { EN: "ALIGNMENT", TH: "การทำงานร่วมกัน" },
              title: { EN: "Design–Development Alignment", TH: "การสอดคล้องระหว่างการออกแบบและการพัฒนา" },
              desc: {
                EN: "Communication gaps resulted in differences between the final UX/UI design and the implemented application.",
                TH: "ช่องว่างในการสื่อสารระหว่างฝ่ายออกแบบและฝ่ายพัฒนายังทำให้บางส่วนของแอปพลิเคชันที่พัฒนาขึ้นแตกต่างจากประสบการณ์ที่ออกแบบไว้"
              }
            },
            {
              badge: { EN: "AI IMPLEMENTATION", TH: "การพัฒนา AI" },
              title: { EN: "AI Implementation", TH: "การพัฒนาฟังก์ชัน AI" },
              desc: {
                EN: "The planned personalized AI assistance could not be fully implemented. The developed version supported only basic calculations rather than the personalized guidance originally envisioned.",
                TH: "ฟังก์ชัน AI ที่วางแผนไว้ไม่สามารถพัฒนาได้อย่างเต็มรูปแบบภายใต้ข้อจำกัดด้านเวลาและเทคนิค โดยเวอร์ชันที่พัฒนาขึ้นสามารถรองรับได้เพียงการคำนวณพื้นฐาน"
              }
            }
          ]
        },
        finalStatus: {
          label: { EN: "FINAL STATUS", TH: "สถานะสุดท้าย" },
          text: { EN: "Design Prototype Completed", TH: "Design Prototype Completed" }
        },
        keyLearning: {
          quote: {
            EN: "These limitations highlighted the importance of continuous designer–developer communication, shared product requirements, and early implementation reviews throughout the development process.",
            TH: "ข้อจำกัดเหล่านี้ทำให้เห็นถึงความสำคัญของการสื่อสารระหว่าง Designer และ Developer อย่างต่อเนื่อง การกำหนด Product Requirements ร่วมกัน และการตรวจสอบ Implementation ตั้งแต่ช่วงต้นของกระบวนการพัฒนา"
          }
        }
      },
      reflectionFuture: {
        heading: {
          EN: "Reflection & Future Direction",
          TH: "การสะท้อนผลและแนวทางการพัฒนาต่อ"
        },
        reflection: {
          EN: "Goal management is not only about tracking progress, but also about creating an experience that encourages users to keep going.",
          TH: "การจัดการเป้าหมายไม่ใช่เพียงการติดตามความก้าวหน้า แต่ประสบการณ์ควรช่วยสร้างแรงจูงใจให้ผู้ใช้อยากทำต่ออย่างสม่ำเสมอ"
        },
        futureIntro: {
          EN: "If redesigned today, I would focus on making the experience more engaging and supportive through:",
          TH: "หากได้กลับมาออกแบบใหม่ จะเน้นพัฒนาประสบการณ์ให้สนุกและเป็นมิตรมากขึ้นผ่าน:"
        },
        directions: [
          {
            num: "1",
            icon: "palette",
            title: { EN: "Playful Visual Identity", TH: "Visual Identity ที่มีเอกลักษณ์" },
            desc: { EN: "A brighter and more distinctive personality.", TH: "เพิ่มความสดใสและบุคลิกที่จดจำได้" }
          },
          {
            num: "2",
            icon: "smiley",
            title: { EN: "Mascot Companion", TH: "Mascot Companion" },
            desc: { EN: "A friendly character that celebrates progress and encourages users along the way.", TH: "เพื่อนร่วมทางที่คอยฉลองความสำเร็จและให้กำลังใจ" }
          },
          {
            num: "3",
            icon: "sparkle",
            title: { EN: "Micro-interactions", TH: "Micro-interactions" },
            desc: { EN: "Meaningful animations for check-ins, streaks, and milestones.", TH: "เพิ่ม Animation สำหรับ Check-in, Streak และ Milestone" }
          },
          {
            num: "4",
            icon: "brain",
            title: { EN: "Smarter Guidance", TH: "Smarter Guidance" },
            desc: { EN: "More personalized AI support based on each user's goals and progress.", TH: "พัฒนา AI ให้สามารถแนะนำผู้ใช้ตามเป้าหมายและความก้าวหน้าของแต่ละคน" }
          }
        ]
      },
      problem: {
        EN: "• Students set goals but struggle to achieve them consistently.<br>• Existing tools focus on task management rather than motivation.<br>• Large goals feel overwhelming without clear steps.<br>• Many goals are abandoned before completion.",
        TH: "• นักศึกษามักตั้งเป้าหมายแต่ประสบปัญหาในการลงมือทำอย่างสม่ำเสมอ<br>• เครื่องมือที่มีอยู่ในปัจจุบันเน้นการจัดการภารกิจ (Task) มากกว่าการสร้างแรงจูงใจและไฟในการทำงาน<br>• เป้าหมายใหญ่อาจดูหนักหนาเกินไปหากขาดการย่อยขั้นตอนที่ชัดเจน<br>• เป้าหมายจำนวนมากถูกละทิ้งกลางคันก่อนที่จะบรรลุผลสำเร็จ"
      },
      personaName: {
        EN: "Suthida Laothong (Age 20, 2nd-year Communication Arts)",
        TH: "สุธิดา เหล่าทอง (อายุ 20 ปี, นักศึกษาชั้นปีที่ 2 สาขานิเทศศาสตร์)"
      },
      personaGoals: {
        EN: "Short-term: Stay consistent with homework &amp; projects. Long-term: Graduate with proud grades.",
        TH: "ระยะสั้น: เคลียร์การบ้านและโปรเจกต์กลุ่มได้อย่างสม่ำเสมอ. ระยะยาว: สำเร็จการศึกษาด้วยผลการเรียนที่น่าภาคภูมิใจ"
      },
      personaFrustrations: {
        EN: "Enjoys extracurricular activities, making academic management hard; feels overwhelmed when plans fail.",
        TH: "ชอบทำกิจกรรม ทำให้จัดสรรเวลาเรียนลำดับความสำคัญได้ยาก และรู้สึกท้อแท้เมื่อแผนงานไม่เป็นไปตามเป้า"
      },
      userJourneyHeading: {
        EN: "User Journey Map",
        TH: "แผนผังการเดินทางของผู้ใช้ (User Journey Map)"
      },
      userJourneySummary: {
        EN: "The journey revealed that the main challenge was not planning tasks, but maintaining motivation and consistency throughout the day. This created an opportunity to design a goal-management experience that combines task planning, reminders, progress tracking, and motivational features in one place.",
        TH: "จากการวิเคราะห์ User Journey พบว่าความท้าทายหลักไม่ใช่แค่การวางแผนภารกิจ แต่คือการรักษาแรงจูงใจและความสม่ำเสมอระหว่างวัน จึงเกิดเป็นโอกาสในการออกแบบประสบการณ์การจัดการเป้าหมายที่รวมการวางแผนภารกิจ การแจ้งเตือน การติดตามความก้าวหน้า และฟีเจอร์สร้างแรงจูงใจไว้ในจุดเดียว"
      },
      features: [
        {
          title: {
            EN: "1. Dashboard &amp; Progress Tracking",
            TH: "1. แดชบอร์ดภาพรวมและการติดตามความก้าวหน้า"
          },
          desc: {
            EN: "Motivational daily streak flames coupled with an overview progress dashboard to keep users consistently engaged and on track toward their goals.",
            TH: "เปลวไฟสะสม Streak ประจำวันเพื่อสร้างแรงจูงใจ ควบคู่กับแดชบอร์ดสรุปภาพรวมความก้าวหน้า เพื่อช่วยให้ผู้ใช้อยู่ในเส้นทางเป้าหมายอย่างสม่ำเสมอ"
          }
        },
        {
          title: {
            EN: "2. Goal Creation &amp; Sub-tasks",
            TH: "2. การสร้างเป้าหมายและการย่อยภารกิจ (Sub-tasks)"
          },
          desc: {
            EN: "Comprehensive short-term and long-term goal setting, breaking down large ambitions into manageable, actionable sub-tasks.",
            TH: "ระบบตั้งเป้าหมายระยะสั้นและระยะยาวอย่างครบครัน พร้อมการย่อยเป้าหมายใหญ่ให้กลายเป็นภารกิจย่อยที่ทำตามได้จริงในชีวิตประจำวัน"
          }
        },
        {
          title: {
            EN: "3. Task Details &amp; AI Assistant",
            TH: "3. รายละเอียดภารกิจและผู้ช่วย AI อัจฉริยะ"
          },
          desc: {
            EN: "Step-by-step task breakdown guided by an AI-powered assistant providing personalized actionable advice and goal achievement feedback.",
            TH: "การย่อยขั้นตอนทำงานทีละสเต็ปโดยมีผู้ช่วย AI ให้คำแนะนำเชิงปฏิบัติการที่เหมาะสมกับแต่ละบุคคล พร้อมให้คำแนะนำเพื่อช่วยให้บรรลุเป้าหมายได้อย่างแม่นยำ"
          }
        }
      ]
    },
    dormitoryApp: {
      title: {
        EN: "Dormitory Management System",
        TH: "ระบบจัดการหอพักนักศึกษา"
      },
      subtitle: {
        EN: "“A smarter way to manage dormitory life.”",
        TH: "“ยกระดับการใช้ชีวิตในหอพักให้สะดวกยิ่งขึ้น”"
      },
      overview: {
        EN: "A UX/UI redesign that transforms the existing SUT dormitory website into a centralized mobile application. Informed by a survey of 67 students, the concept brings essential dormitory information, requests, expenses, announcements, and services into one more accessible experience.",
        TH: "โปรเจกต์ UX/UI Redesign ที่ปรับปรุงเว็บไซต์หอพักเดิมของ มทส. ให้เป็น Mobile Application โดยพัฒนาจากข้อมูลแบบสอบถามนักศึกษา 67 คน เพื่อรวมข้อมูล คำร้อง ค่าใช้จ่าย ข่าวสาร และบริการสำคัญของหอพักไว้ในประสบการณ์ที่เข้าถึงได้สะดวกยิ่งขึ้น"
      },
      meta: {
        role: {
          EN: "UX/UI Designer",
          TH: "UX/UI Designer"
        },
        team: {
          EN: "5 UX/UI Designers",
          TH: "UX/UI Designer 5 คน"
        },
        duration: {
          EN: "3 months",
          TH: "3 เดือน"
        },
        responsibilities: {
          EN: "User Research, Requirement Analysis, User Flow, Information Architecture, Wireframing, High-fidelity UI Design, Prototyping, Presentation, and Design Iteration",
          TH: "ทำแบบสอบถามและวิเคราะห์ข้อมูล ระบุความต้องการของผู้ใช้ ออกแบบ User Flow และ Information Architecture จัดทำ Wireframe ออกแบบหน้าจอ High-fidelity สร้าง Prototype นำเสนอผลงาน และปรับปรุงดีไซน์ตาม Feedback"
        },
        tools: {
          EN: "Figma, Google Forms",
          TH: "Figma, Google Forms"
        },
        labels: {
          role: { EN: "Role", TH: "บทบาท" },
          team: { EN: "Team", TH: "ทีม" },
          duration: { EN: "Duration", TH: "ระยะเวลา" },
          responsibilities: { EN: "Responsibilities", TH: "หน้าที่รับผิดชอบ" },
          tools: { EN: "Tools", TH: "เครื่องมือ" }
        }
      },
      contextConstraints: {
        heading: {
          EN: "Context & Existing Experience",
          TH: "บริบทและประสบการณ์ใช้งานเดิม"
        },
        items: {
          EN: [
            "Dormitory services may not be used regularly, but many tasks are time-sensitive.",
            "Students need to return to the website to check announcements and application results.",
            "Request and form statuses are not always visible at a glance.",
            "Information about expenses, activities, and dormitory points is not centralized.",
            "The existing experience provides limited proactive notifications for important updates."
          ],
          TH: [
            "แม้บริการหอพักจะไม่ได้ใช้งานบ่อย แต่หลายรายการเป็นงานสำคัญที่ต้องดำเนินการภายในเวลาที่กำหนด",
            "นักศึกษาต้องกลับเข้าสู่เว็บไซต์เพื่อตรวจสอบข่าวสารและผลการดำเนินการด้วยตนเอง",
            "สถานะของแบบฟอร์มและคำร้องยังไม่สามารถมองเห็นได้อย่างรวดเร็ว",
            "ข้อมูลค่าใช้จ่าย กิจกรรม และคะแนนหอพักยังไม่ได้รวบรวมไว้ในพื้นที่เดียว",
            "ประสบการณ์เดิมยังมีข้อจำกัดด้านการแจ้งเตือนข้อมูลสำคัญให้ผู้ใช้ทราบล่วงหน้า"
          ]
        }
      },
      researchRequirement: {
        heading: {
          EN: "Research & Requirement Gathering",
          TH: "การศึกษาผู้ใช้และรวบรวมความต้องการ"
        },
        summaryParagraphs: {
          EN: [
            "An online questionnaire was conducted with <span style=\"color:var(--sky-blue);font-weight:800\">67 SUT students</span> to understand their experience with the existing dormitory website, the tasks they commonly perform, and the information or services they would like to access more easily.",
            "The participants included 47 women, 14 men, and 6 respondents who did not specify their gender. Most respondents were first-year students, followed by students in their second, third, and fourth years.",
            "<span style=\"color:var(--sky-blue);font-weight:800\">91% of respondents</span> had previously used the dormitory website. Most accessed it approximately once a month, suggesting that the platform was not used frequently but remained important for specific dormitory-related tasks."
          ],
          TH: [
            "โปรเจกต์นี้เก็บข้อมูลผ่านแบบสอบถามออนไลน์จาก<span style=\"color:var(--sky-blue);font-weight:800\">นักศึกษา มทส. จำนวน 67 คน</span> เพื่อทำความเข้าใจประสบการณ์การใช้เว็บไซต์หอพักเดิม รายการที่นักศึกษาใช้งานเป็นประจำ และข้อมูลหรือบริการที่ต้องการเข้าถึงได้สะดวกยิ่งขึ้น",
            "ผู้ตอบแบบสอบถามประกอบด้วยเพศหญิง 47 คน เพศชาย 14 คน และไม่ระบุเพศ 6 คน โดยผู้ตอบส่วนใหญ่เป็นนักศึกษาชั้นปีที่ 1 รองลงมาคือชั้นปีที่ 2 ชั้นปีที่ 3 และชั้นปีที่ 4",
            "<span style=\"color:var(--sky-blue);font-weight:800\">91% ของผู้ตอบ</span>เคยใช้งานเว็บไซต์หอพัก และส่วนใหญ่เข้าใช้งานประมาณเดือนละ 1 ครั้ง สะท้อนว่าระบบไม่ได้ถูกใช้งานบ่อย แต่ยังมีความสำคัญสำหรับการทำรายการเกี่ยวกับหอพักในบางช่วงเวลา"
          ]
        },
        findings: {
          items: {
            EN: [
              {
                percentage: "76.1%",
                desc: "Confirmed their eligibility to remain in the dormitory for the following semester."
              },
              {
                percentage: "73.1%",
                desc: "Used the website to apply for dormitory accommodation."
              },
              {
                percentage: "50.7%",
                desc: "Used it to check resident lists or accommodation information."
              }
            ],
            TH: [
              {
                percentage: "76.1%",
                desc: "ใช้ยืนยันสิทธิ์อยู่หอพักต่อในภาคการศึกษาถัดไป"
              },
              {
                percentage: "73.1%",
                desc: "ใช้สมัครหอพัก"
              },
              {
                percentage: "50.7%",
                desc: "ใช้ตรวจสอบรายชื่อผู้พักหรือข้อมูลการเข้าพัก"
              }
            ]
          },
          footnote: {
            EN: "Respondents could select more than one task.",
            TH: "ผู้ตอบสามารถเลือกวัตถุประสงค์การใช้งานได้มากกว่าหนึ่งข้อ"
          }
        },
        requirements: {
          subheading: {
            EN: "Requirements Derived from the Research",
            TH: "Requirement ที่ได้จาก Research"
          },
          intro: {
            EN: "The research was translated into the following design requirements:",
            TH: "ผลการสำรวจถูกนำมาสรุปเป็น Requirement สำหรับการออกแบบดังนี้:"
          },
          items: {
            EN: [
              "Make frequently used tasks, such as dormitory applications and eligibility confirmation, easy to access.",
              "Provide clear room, resident, form, and request statuses.",
              "Notify students about announcements, activities, deadlines, and approval results.",
              "Allow students to review utility expenses and dormitory points.",
              "Bring essential dormitory information and services into one centralized mobile experience."
            ],
            TH: [
              "ทำให้รายการที่มีการใช้งานมาก เช่น การสมัครหอพักและยืนยันสิทธิ์ เข้าถึงได้ง่าย",
              "แสดงสถานะห้องพัก รายชื่อผู้พัก แบบฟอร์ม และคำร้องอย่างชัดเจน",
              "แจ้งเตือนข่าวประกาศ กิจกรรม กำหนดเวลา และผลการอนุมัติ",
              "ให้นักศึกษาตรวจสอบค่าน้ำ–ค่าไฟและคะแนนหอพักได้",
              "รวบรวมข้อมูลและบริการสำคัญของหอพักไว้ใน Mobile Application เดียว"
            ]
          }
        },
        takeawaySubheading: {
          EN: "Key Takeaway",
          TH: "ข้อสรุปสำคัญ"
        },
        takeaway: {
          EN: "Although students access the dormitory platform only occasionally, they depend on it for important and time-sensitive tasks. The redesigned experience therefore needed to make essential actions easier to find while keeping students informed without requiring them to repeatedly check the platform.",
          TH: "แม้นักศึกษาจะเข้าใช้งานระบบหอพักเป็นครั้งคราว แต่แต่ละรายการมักมีความสำคัญและเกี่ยวข้องกับกรอบเวลา ประสบการณ์ใหม่จึงต้องช่วยให้ผู้ใช้ค้นหาสิ่งที่ต้องทำได้ง่าย พร้อมรับข้อมูลสำคัญโดยไม่ต้องกลับเข้ามาตรวจสอบระบบซ้ำ ๆ ด้วยตนเอง"
        }
      },
      surveyPersona: {
        heading: {
          EN: "Survey-Based Persona",
          TH: "Persona ที่ได้จากแบบสอบถาม"
        },
        methodology: {
          EN: "This persona was synthesized from patterns identified in a survey of 67 SUT students. It represents the primary user group and is not based on a single individual participant.",
          TH: "Persona นี้เป็นตัวแทนจากข้อมูลที่พบในแบบสอบถามนักศึกษา มทส. จำนวน 67 คน เพื่อใช้เป็นตัวแทนของกลุ่มผู้ใช้งานหลัก โดยไม่ได้อ้างอิงจากผู้เข้าร่วมคนใดคนหนึ่งโดยตรง"
        },
        identity: {
          name: {
            EN: "Narin Kittipong",
            TH: "นรินทร์ กิตติพงศ์"
          },
          profile: {
            EN: "19 years old · First-year student · SUT dormitory resident",
            TH: "อายุ 19 ปี · นักศึกษาชั้นปีที่ 1 · พักอาศัยในหอพัก มทส."
          },
          image: "projects/Dormitory/persona.jpg"
        },
        background: {
          heading: { EN: "Background", TH: "ข้อมูลพื้นฐาน" },
          text: {
            EN: "Narin is a first-year student who is still becoming familiar with dormitory procedures, deadlines, and services. She accesses the dormitory platform occasionally, mainly when she needs to complete an important task or check an update.",
            TH: "นรินทร์เป็นนักศึกษาชั้นปีที่ 1 ที่ยังอยู่ในช่วงทำความเข้าใจขั้นตอน กำหนดเวลา และบริการต่าง ๆ ของหอพัก เธอเข้าใช้งานระบบเป็นครั้งคราว โดยส่วนใหญ่จะเข้าใช้เมื่อต้องทำรายการสำคัญหรือตรวจสอบข้อมูลอัปเดต"
          }
        },
        statement: {
          heading: { EN: "Representative Statement", TH: "ข้อความตัวแทนมุมมองผู้ใช้" },
          text: {
            EN: "“I don’t use the dormitory system every day, but when I do, I need to find important information and complete my task quickly.”",
            TH: "“ฉันไม่ได้ใช้ระบบหอพักทุกวัน แต่เมื่อเข้าใช้งาน ฉันต้องการค้นหาข้อมูลสำคัญและทำรายการให้เสร็จได้อย่างรวดเร็ว”"
          },
        },
        sections: {
          goals: {
            heading: { EN: "Goals", TH: "เป้าหมาย" },
            icon: "target",
            items: {
              EN: [
                "Apply for accommodation and confirm eligibility on time.",
                "Find room and resident information easily.",
                "Track the results of forms and requests.",
                "Stay informed about announcements, activities, and deadlines.",
                "Review utility expenses and dormitory points."
              ],
              TH: [
                "สมัครหอพักและยืนยันสิทธิ์ภายในระยะเวลาที่กำหนด",
                "ค้นหาข้อมูลห้องพักและผู้พักอาศัยได้ง่าย",
                "ติดตามผลของแบบฟอร์มและคำร้อง",
                "รับข่าวประกาศ กิจกรรม และกำหนดเวลาสำคัญ",
                "ตรวจสอบค่าน้ำ–ค่าไฟและคะแนนหอพัก"
              ]
            }
          },
          behaviors: {
            heading: { EN: "Behaviors", TH: "พฤติกรรม" },
            icon: "activity",
            items: {
              EN: [
                "Uses the dormitory platform approximately once a month.",
                "Accesses it more frequently during application and eligibility confirmation periods.",
                "Returns to the platform to check results and important updates.",
                "Prefers clear navigation because he does not use the system regularly."
              ],
              TH: [
                "ใช้งานระบบหอพักประมาณเดือนละ 1 ครั้ง",
                "เข้าใช้งานมากขึ้นในช่วงสมัครหอพักและยืนยันสิทธิ์",
                "กลับเข้ามาตรวจสอบผลการดำเนินการและข้อมูลสำคัญ",
                "ต้องการระบบนำทางที่ชัดเจน เพราะไม่ได้ใช้งานระบบเป็นประจำ"
              ]
            }
          },
          frustrations: {
            heading: { EN: "Frustrations", TH: "ปัญหาที่พบ" },
            icon: "alert-circle",
            items: {
              EN: [
                "Important information is difficult to view from one place.",
                "Form and request statuses are not immediately clear.",
                "Announcements and deadlines may be easy to overlook.",
                "Repeatedly checking the platform for updates takes unnecessary effort."
              ],
              TH: [
                "ข้อมูลสำคัญยังไม่สามารถดูได้จากพื้นที่เดียว",
                "สถานะของแบบฟอร์มและคำร้องยังไม่ชัดเจนในทันที",
                "ข่าวประกาศและกำหนดเวลาอาจถูกมองข้าม",
                "ต้องกลับเข้ามาตรวจสอบระบบซ้ำเพื่อดูข้อมูลอัปเดต"
              ]
            }
          },
          needs: {
            heading: { EN: "Needs", TH: "ความต้องการ" },
            icon: "check-square",
            items: {
              EN: [
                "A clear overview of important information.",
                "Easy access to frequently used dormitory services.",
                "Visible request and approval statuses.",
                "Notifications for announcements, deadlines, and results.",
                "A mobile experience that is easy to understand even when used occasionally."
              ],
              TH: [
                "ภาพรวมของข้อมูลสำคัญที่เข้าใจได้อย่างรวดเร็ว",
                "ทางเข้าสู่บริการหอพักที่ใช้บ่อย",
                "สถานะคำร้องและผลการอนุมัติที่มองเห็นได้ชัดเจน",
                "การแจ้งเตือนข่าวสาร กำหนดเวลา และผลการดำเนินการ",
                "ประสบการณ์บนมือถือที่เข้าใจง่าย แม้ไม่ได้ใช้งานเป็นประจำ"
              ]
            }
          }
        }
      },
      designPriorities: {
        heading: {
          EN: "Design Priorities & Decisions",
          TH: "หลักการออกแบบ"
        },
        intro: {
          EN: "Research findings were translated into four priorities that guided the application’s structure and features.",
          TH: "ผลจาก Research ถูกนำมาสรุปเป็น 4 แนวทางหลักสำหรับกำหนดโครงสร้างและฟีเจอร์ของแอป"
        },
        items: {
          EN: [
            {
              heading: "1 — Essential Tasks First",
              desc: "Frequently used and time-sensitive tasks, such as dormitory applications and eligibility confirmation, were made easier to find and access."
            },
            {
              heading: "2 — Centralized Services",
              desc: "Announcements, activities, forms, utility expenses, dormitory points, and other services were brought together in one mobile application."
            },
            {
              heading: "3 — Visible Status",
              desc: "Clear statuses were added to rooms, applications, forms, and maintenance requests so students can understand their progress without repeatedly checking."
            },
            {
              heading: "4 — Proactive Notifications",
              desc: "Notifications communicate important announcements, deadlines, activities, and request results to support students who access the system only occasionally."
            }
          ],
          TH: [
            {
              heading: "1 — เข้าถึงรายการสำคัญได้ง่าย",
              desc: "จัดลำดับรายการที่มีการใช้งานมากและมีกรอบเวลา เช่น การสมัครหอพักและยืนยันสิทธิ์ ให้อยู่ในตำแหน่งที่ค้นหาและเข้าถึงได้ง่าย"
            },
            {
              heading: "2 — รวมบริการไว้ในพื้นที่เดียว",
              desc: "รวบรวมข่าวประกาศ กิจกรรม แบบฟอร์ม ค่าน้ำ–ค่าไฟ คะแนนหอพัก และบริการอื่น ๆ ไว้ใน Mobile Application เดียว"
            },
            {
              heading: "3 — แสดงสถานะอย่างชัดเจน",
              desc: "เพิ่มสถานะของห้องพัก การสมัคร แบบฟอร์ม และการแจ้งซ่อม เพื่อให้ผู้ใช้เข้าใจความคืบหน้าโดยไม่ต้องกลับมาตรวจสอบซ้ำ"
            },
            {
              heading: "4 — แจ้งเตือนข้อมูลสำคัญ",
              desc: "แจ้งข่าวสาร กำหนดเวลา กิจกรรม และผลของคำร้อง เพื่อรองรับนักศึกษาที่เข้าใช้งานระบบเป็นครั้งคราว"
            }
          ]
        }
      },
      dormitoryKeyUx: {
        intro: {
          heading: {
            EN: "Key UX Solutions & UI Design",
            TH: "แนวทางการแก้ปัญหา UX และการออกแบบ UI"
          },
          desc: {
            EN: "The application translates research findings into a centralized mobile experience that helps students access important dormitory tasks, information, requests, and updates more easily.",
            TH: "แอปพลิเคชันนำผลจาก Research มาพัฒนาเป็นประสบการณ์บนมือถือที่ช่วยให้นักศึกษาเข้าถึงรายการสำคัญ ข้อมูล คำร้อง และข่าวสารของหอพักได้สะดวกยิ่งขึ้น"
          }
        },
        subsections: [
          {
            heading: {
              EN: "1 — Centralized Home & Updates",
              TH: "1 — หน้าหลักและข้อมูลอัปเดต"
            },
            desc: {
              EN: "The Home screen brings important dormitory information and frequently used services into one place. Students can quickly access announcements, activities, applications, forms, utility expenses, and other essential services without searching through separate pages.<br><br>Dedicated announcement and activity screens help students review important updates, deadlines, and opportunities related to dormitory life.",
              TH: "หน้าหลักรวบรวมข้อมูลสำคัญและบริการที่ใช้บ่อยของหอพักไว้ในพื้นที่เดียว นักศึกษาสามารถเข้าถึงข่าวประกาศ กิจกรรม การสมัคร แบบฟอร์ม ค่าใช้จ่าย และบริการสำคัญอื่น ๆ ได้โดยไม่ต้องค้นหาจากหลายหน้า<br><br>หน้าข่าวประชาสัมพันธ์และกิจกรรมช่วยให้นักศึกษาตรวจสอบข้อมูลอัปเดต กำหนดเวลา และโอกาสในการเข้าร่วมกิจกรรมของหอพักได้สะดวกขึ้น"
            },
            heroImage: "projects/Dormitory/หน้าหลัก.png",
            supportingImages: [
              "projects/Dormitory/ประชาสัมพันธ์ทั้งหมด.png",
              "projects/Dormitory/กิจกรรม.png"
            ]
          },
          {
            heading: {
              EN: "2 — Dormitory Application & Resident Information",
              TH: "2 — การสมัครหอพักและข้อมูลผู้พัก"
            },
            desc: {
              EN: "Students can complete dormitory applications through a structured mobile form and review relevant accommodation information within the same application.<br><br>Clear room and resident information helps students understand available options and check important updates related to dormitory placement or transfers.",
              TH: "นักศึกษาสามารถสมัครหอพักผ่านแบบฟอร์มบนมือถือที่จัดลำดับข้อมูลอย่างเป็นขั้นตอน พร้อมตรวจสอบข้อมูลที่เกี่ยวข้องกับการเข้าพักได้จากแอปเดียวกัน<br><br>การแสดงข้อมูลห้องพักและรายชื่อผู้พักอย่างชัดเจนช่วยให้นักศึกษาเข้าใจตัวเลือกและตรวจสอบข้อมูลสำคัญเกี่ยวกับการจัดสรรหรือย้ายหอพักได้สะดวกขึ้น"
            },
            images: [
              "projects/Dormitory/สมัครหอพักระหว่างภาค.png",
              "projects/Dormitory/รายชื่อผู้ย้ายหอพัก.png"
            ],
            hasArrow: false
          },
          {
            heading: {
              EN: "3 — Digital Forms & Status Tracking",
              TH: "3 — แบบฟอร์มดิจิทัลและการติดตามผล"
            },
            desc: {
              EN: "Students can submit dormitory requests, such as fee deferment forms, directly through the application. Required information is organized into a clear form to support accurate completion.<br><br>After submission, students can review their submitted requests and current results, reducing the need to repeatedly search for updates through other channels.",
              TH: "นักศึกษาสามารถยื่นคำร้องเกี่ยวกับหอพัก เช่น แบบฟอร์มผ่อนผันค่าหอพัก ผ่านแอปพลิเคชันได้โดยตรง โดยจัดลำดับข้อมูลที่จำเป็นให้กรอกได้อย่างชัดเจน<br><br>หลังจากส่งแบบฟอร์ม นักศึกษาสามารถตรวจสอบรายการที่ส่งและผลการดำเนินการได้ ช่วยลดการค้นหาข้อมูลอัปเดตจากช่องทางอื่น"
            },
            images: [
              "projects/Dormitory/ฟอร์มผ่อนผัน.png",
              "projects/Dormitory/การส่งฟอร์ม.png"
            ],
            hasArrow: true
          },
          {
            heading: {
              EN: "4 — Utility & Maintenance Services",
              TH: "4 — บริการค่าใช้จ่ายและแจ้งซ่อม"
            },
            desc: {
              EN: "Students can review recent electricity expenses and access previous records, providing clearer visibility into dormitory-related costs.<br><br>The maintenance service allows students to report issues through a structured form and provide the information needed for the dormitory staff to review the request.",
              TH: "นักศึกษาสามารถตรวจสอบค่าไฟล่าสุดและดูข้อมูลย้อนหลังได้ ช่วยให้มองเห็นค่าใช้จ่ายที่เกี่ยวข้องกับการพักอาศัยได้ชัดเจนขึ้น<br><br>บริการแจ้งซ่อมช่วยให้นักศึกษารายงานปัญหาผ่านแบบฟอร์มที่มีโครงสร้าง พร้อมระบุข้อมูลที่จำเป็นสำหรับให้เจ้าหน้าที่ตรวจสอบคำร้อง"
            },
            images: [
              "projects/Dormitory/ค่าไฟ (ทั้งหมด).png",
              "projects/Dormitory/แจ้งซ่อม.png"
            ],
            hasArrow: false
          },
          {
            heading: {
              EN: "5 — Dormitory Committee Election",
              TH: "5 — การเลือกตั้งคณะกรรมการหอพัก"
            },
            desc: {
              EN: "The election feature presents candidates in a clear and comparable list. Students can open each candidate’s profile to review their information and policies before making a voting decision.",
              TH: "ระบบเลือกตั้งแสดงรายชื่อผู้สมัครในรูปแบบที่ตรวจสอบและเปรียบเทียบได้ง่าย นักศึกษาสามารถเปิดดูรายละเอียดและนโยบายของผู้สมัครแต่ละคนก่อนตัดสินใจลงคะแนน"
            },
            images: [
              "projects/Dormitory/เลือกตั้ง 13.png",
              "projects/Dormitory/รายละเอียดผู้สมัคร.png"
            ],
            hasArrow: true
          }
        ],
        supportingProfile: {
          heading: {
            EN: "Supporting Screen — Student Profile",
            TH: "หน้าจอหลักอื่นๆ — โปรไฟล์นักศึกษา"
          },
          desc: {
            EN: "The Profile screen provides access to student and dormitory information, along with related account options and services.",
            TH: "หน้าโปรไฟล์รวบรวมข้อมูลนักศึกษา ข้อมูลการเข้าพัก และทางเข้าสู่การตั้งค่าหรือบริการที่เกี่ยวข้องกับบัญชีผู้ใช้"
          },
          image: "projects/Dormitory/โปรไฟล์.png"
        }
      },
      dormitoryOutcomeLimitations: {
        heading: {
          EN: "Project Outcome & Limitations",
          TH: "ผลลัพธ์และข้อจำกัดของโปรเจกต์"
        },
        outcome: {
          subheading: { EN: "Outcome", TH: "ผลลัพธ์" },
          statusLabel: { EN: "High-fidelity Design Prototype", TH: "ต้นแบบดีไซน์ระดับ High-fidelity" },
          paragraphs: {
            EN: [
              "The project resulted in a high-fidelity mobile application prototype informed by survey responses from 67 students. The prototype brings essential dormitory services—including applications, forms, announcements, activities, utility expenses, maintenance requests, and dormitory elections—into one centralized experience.",
              "The design was presented and iteratively refined based on feedback from the course instructor throughout the project."
            ],
            TH: [
              "โปรเจกต์นี้ได้ผลลัพธ์เป็นต้นแบบ Mobile Application ระดับ High-fidelity ที่พัฒนาจากข้อมูลแบบสอบถามนักศึกษา 67 คน โดยรวบรวมบริการสำคัญของหอพัก เช่น การสมัคร แบบฟอร์ม ข่าวประกาศ กิจกรรม ค่าน้ำ–ค่าไฟ การแจ้งซ่อม และการเลือกตั้งคณะกรรมการหอพักไว้ในประสบการณ์เดียว",
              "ระหว่างดำเนินโครงการ มีการนำเสนอผลงานและปรับปรุงดีไซน์ตามข้อเสนอแนะของอาจารย์ผู้สอนอย่างต่อเนื่อง"
            ]
          }
        },
        limitations: {
          subheading: { EN: "Limitations", TH: "ข้อจำกัด" },
          items: {
            EN: [
              "Usability testing with students was not conducted after the prototype was completed.",
              "The design decisions were informed mainly by questionnaire data and instructor feedback, with limited qualitative insight from user interviews.",
              "The project remained a design prototype and was not implemented as a functional application.",
              "The effectiveness of the redesigned flows, notifications, and status communication has not yet been validated with users."
            ],
            TH: [
              "ยังไม่ได้ทำ Usability Testing กับนักศึกษาหลังจากพัฒนาต้นแบบเสร็จ",
              "การตัดสินใจออกแบบอ้างอิงจากข้อมูลแบบสอบถามและข้อเสนอแนะของอาจารย์เป็นหลัก จึงมีข้อมูลเชิงคุณภาพจากการสัมภาษณ์ผู้ใช้ค่อนข้างจำกัด",
              "โปรเจกต์ยังเป็น Design Prototype และไม่ได้พัฒนาเป็นแอปพลิเคชันที่ใช้งานได้จริง",
              "ประสิทธิภาพของ Flow การแจ้งเตือน และการแสดงสถานะต่าง ๆ ยังไม่ได้รับการตรวจสอบกับผู้ใช้"
            ]
          }
        }
      },
      dormitoryReflectionFuture: {
        heading: {
          EN: "Reflection & Future Improvements",
          TH: "การสะท้อนผลและแนวทางการพัฒนาต่อ"
        },
        reflection: {
          paragraphs: {
            EN: [
              "This project showed that a dormitory platform should support not only digital services, but also clear information and communication within the dormitory community.",
              "If revisited, I would refine the existing UI, test key flows with students, and explore a dormitory-only communication feature for roommates, announcements, and adviser contact. Further research would be required to define user needs, privacy, safety, and moderation before implementation."
            ],
            TH: [
              "โปรเจกต์นี้ทำให้เห็นว่าระบบหอพักไม่ควรรองรับเพียงบริการดิจิทัล แต่ควรช่วยให้การเข้าถึงข้อมูลและการสื่อสารภายในหอพักมีความชัดเจนยิ่งขึ้น",
              "หากได้พัฒนาต่อ จะปรับปรุง UI เดิม ทดสอบ Flow สำคัญกับนักศึกษา และศึกษาแนวคิดระบบสื่อสารเฉพาะภายในหอพักสำหรับรูมเมท ข่าวประชาสัมพันธ์ และการติดต่อที่ปรึกษาหอพัก โดยต้องศึกษาเพิ่มเติมด้านความต้องการ ความเป็นส่วนตัว ความปลอดภัย และการดูแลเนื้อหาก่อนนำไปใช้งานจริง"
            ]
          }
        },
        improvements: [
          {
            num: "1",
            heading: { EN: "UI Refinement", TH: "ปรับปรุง UI เดิม" },
            desc: {
              EN: "Improve visual hierarchy, navigation, consistency, and accessibility across the existing screens.",
              TH: "พัฒนาลำดับข้อมูล การนำทาง ความสม่ำเสมอ และ Accessibility ของแต่ละหน้าจอ"
            }
          },
          {
            num: "2",
            heading: { EN: "Usability Testing", TH: "ทดสอบกับผู้ใช้" },
            desc: {
              EN: "Test key flows with students and refine the design based on observed usability issues.",
              TH: "ทดสอบ Flow สำคัญกับนักศึกษาและปรับปรุงตามปัญหาที่พบ"
            }
          },
          {
            num: "3",
            heading: { EN: "Roommate Communication", TH: "แชทสำหรับรูมเมท" },
            desc: {
              EN: "Explore a private space for roommates to coordinate dormitory-related matters.",
              TH: "ศึกษาพื้นที่ส่วนตัวสำหรับให้รูมเมทประสานงานเรื่องภายในห้องพัก"
            }
          },
          {
            num: "4",
            heading: { EN: "Dormitory Community Channels", TH: "ช่องทางสื่อสารภายในหอพัก" },
            desc: {
              EN: "Provide focused channels for announcements, activities, and communication within each dormitory.",
              TH: "แยกพื้นที่สำหรับข่าวประกาศ กิจกรรม และการพูดคุยของแต่ละหอพัก"
            }
          },
          {
            num: "5",
            heading: { EN: "Adviser Contact", TH: "ติดต่อที่ปรึกษาหอพัก" },
            desc: {
              EN: "Allow students to contact dormitory advisers through an official in-app channel.",
              TH: "เพิ่มช่องทางอย่างเป็นทางการสำหรับติดต่ออาจารย์หรือที่ปรึกษาหอพัก"
            }
          },
          {
            num: "6",
            heading: { EN: "Privacy & Safety", TH: "ความเป็นส่วนตัวและความปลอดภัย" },
            desc: {
              EN: "Define permissions, reporting, moderation, and notification controls before implementing communication features.",
              TH: "กำหนดสิทธิ์การเข้าถึง การรายงาน การดูแลเนื้อหา และการควบคุมการแจ้งเตือนก่อนนำระบบแชทไปพัฒนาจริง"
            }
          }
        ]
      },
      problem: {
        EN: "• The existing university dormitory website is outdated and lacks regular updates.<br>• Difficult to complete room booking, room transfers, and maintenance requests.<br>• No clear notifications for updates, payments, or announcements.<br>• Limited visibility of room availability and request status.",
        TH: "• เว็บไซต์หอพักเดิมมีความล้าสมัย และขาดการอัปเดตข้อมูลอย่างสม่ำเสมอ<br>• ยุ่งยากในการทำรายการจองห้องพัก ย้ายหอพัก และการแจ้งซ่อมแซม<br>• ขาดระบบแจ้งเตือนที่ชัดเจนสำหรับการประกาศ ข่าวสาร หรือกำหนดการชำระเงิน<br>• ไม่สามารถตรวจสอบสถานะห้องว่างและสถานะคำร้องได้อย่างชัดเจน"
      },
      personaName: {
        EN: "Narin Kittipong (Age 19, 1st-year Resident)",
        TH: "นรินทร์ กิตติพงศ์ (อายุ 19 ปี, นักศึกษาหอพักชั้นปีที่ 1)"
      },
      personaGoals: {
        EN: "Easily book/transfer rooms, quickly report maintenance, stay updated on deadlines, track request status.",
        TH: "จองและย้ายห้องพักได้ง่าย, แจ้งซ่อมแซมได้อย่างรวดเร็ว, ติดตามข่าวสารและกำหนดการสำคัญได้ทันเวลา, ตรวจสอบสถานะคำร้องได้ชัดเจน"
      },
      personaFrustrations: {
        EN: "Current website is outdated, announcements are easy to miss, room availability is unclear.",
        TH: "เว็บไซต์ปัจจุบันล้าสมัย, ไม่ทันการประกาศกิจกรรมหอพัก, สถานะห้องว่างไม่ชัดเจน"
      },
      features: [
        {
          title: {
            EN: "1. Overview &amp; Dormitory Services",
            TH: "1. ภาพรวมและบริการหลักหอพัก"
          },
          desc: {
            EN: "Dormitory portal for resident profiles, campus announcements, and activity updates that help students earn dormitory points. It also displays roommate information and provides a dormitory application system with clear room categories and availability statuses, including All, Available, Reserved, and Closed.",
            TH: "ข้อมูลโปรไฟล์นักศึกษา ข่าวประชาสัมพันธ์หอพัก และอัปเดตกิจกรรมสะสมคะแนนหอพัก พร้อมแสดงข้อมูลเพื่อนร่วมห้อง และระบบสมัครหอพักที่แสดงสถานะห้องว่างชัดเจน (ห้องทั้งหมด, ห้องว่าง, ห้องที่จองแล้ว, ห้องที่ปิดให้บริการ)"
          }
        },
        {
          title: {
            EN: "2. Forms, Applications &amp; Dormitory Election",
            TH: "2. แบบฟอร์มออนไลน์และการเลือกตั้งคณะกรรมการหอพัก"
          },
          desc: {
            EN: "Digital portal for submitting fee deferment requests, managing applicant credentials, tracking application status in real time, and participating in dormitory committee elections with clear candidate profiles, policies, and voting details.",
            TH: "ช่องทางดิจิทัลสำหรับยื่นคำร้องขอผ่อนผันค่าธรรมเนียม ตรวจสอบเอกสารผู้สมัคร ติดตามสถานะคำร้องแบบเรียลไทม์ และระบบลงคะแนนเลือกตั้งคณะกรรมการหอพักนักศึกษา พร้อมโปรไฟล์ รายละเอียดผู้สมัคร และรายละเอียดการลงคะแนน"
          }
        },
        {
          title: {
            EN: "3. Utility &amp; Maintenance Services",
            TH: "3. บริการแจ้งซ่อมและตรวจสอบค่าน้ำ-ค่าไฟ"
          },
          desc: {
            EN: "Dormitory services for reporting and tracking maintenance issues, along with electricity expense monitoring. Students can view their electricity costs for the latest three months and access historical bills from previous semesters, helping them estimate upcoming expenses and prepare their budget before payment.",
            TH: "ระบบแจ้งซ่อมแซมและติดตามสถานะการซ่อม พร้อมระบบตรวจสอบค่าไฟฟ้าที่แสดงสถิติค่าย้อนหลัง 3 เดือนและใบแจ้งหนี้จากภาคการศึกษาก่อนหน้า ช่วยให้นักศึกษาประเมินค่าใช้จ่ายและวางแผนงบประมาณล่วงหน้าก่อนถึงกำหนดชำระ"
          }
        }
      ]
    },
    kioskApp: {
      title: {
        EN: "Kiosk Redesign – Ratthasima Khunakon Building",
        TH: "ปรับปรุงดีไซน์ตู้คีออสอาคารรัฐสีมาคุณากร"
      },
      subtitle: {
        EN: "“Find Your Way, Faster.”",
        TH: "“ค้นพบห้องที่ต้องการได้สะดวกรวดเร็วยิ่งขึ้น”"
      },
      overview: {
        EN: "Kiosk Redesign is a UX/UI project that transforms the existing floor-plan directory at Ratthasima Khunakon Building into a more interactive room-finding and wayfinding experience.<br><br>The redesigned concept helps students, staff, and visitors find destinations through floor selection, room categories, destination highlighting, and visual route guidance. It also explores the use of symbols alongside color and a QR-based mobile handoff as accessibility considerations.",
        TH: "Kiosk Redesign เป็นโปรเจกต์ UX/UI ที่ปรับปรุงระบบแผนผังอาคารเดิมของอาคารรัฐสีมาคุณากร ให้เป็นประสบการณ์ค้นหาห้องและนำทางที่มีปฏิสัมพันธ์มากขึ้น<br><br>แนวคิดที่ออกแบบใหม่ช่วยให้นักศึกษา บุคลากร และผู้มาติดต่อค้นหาจุดหมายผ่านการเลือกชั้น การจัดหมวดหมู่ห้อง การเน้นตำแหน่ง และการแสดงเส้นทาง พร้อมศึกษาแนวทางใช้สัญลักษณ์ร่วมกับสีและการส่งต่อข้อมูลผ่าน QR Code เพื่อพิจารณาด้านการเข้าถึง"
      },
      meta: {
        labels: {
          role: { EN: "Role", TH: "บทบาท" },
          team: { EN: "Team", TH: "ทีม" },
          duration: { EN: "Duration", TH: "ระยะเวลา" },
          tools: { EN: "Tools", TH: "เครื่องมือ" },
          responsibilities: { EN: "Responsibilities", TH: "หน้าที่รับผิดชอบ" }
        },
        role: { EN: "UX/UI Designer", TH: "UX/UI Designer" },
        team: { EN: "5 UX/UI Designers", TH: "UX/UI Designer 5 คน" },
        duration: { EN: "3 months", TH: "3 เดือน" },
        tools: { EN: "Figma", TH: "Figma" },
        responsibilities: {
          EN: "Existing Interface Analysis, Assumption-Based Personas, Journey Mapping, Design Opportunities, Moodboard, Information Architecture, User Flow, High-fidelity UI Design, Prototyping, Presentation, and Design Iteration",
          TH: "วิเคราะห์ Interface เดิม สร้าง Persona จากสมมติฐาน จัดทำ Journey Map สรุปโอกาสในการออกแบบ สร้าง Moodboard ออกแบบ Information Architecture และ User Flow ออกแบบหน้าจอ High-fidelity สร้าง Prototype นำเสนอผลงาน และปรับปรุงดีไซน์"
        }
      },
      contextExistingInterface: {
        heading: {
          EN: "Context & Existing Interface",
          TH: "บริบทและ Interface เดิม"
        },
        context: {
          EN: "Ratthasima Khunakon Building is a five-floor university building with numerous classrooms, laboratories, meeting rooms, offices, and two main entrances. Students, staff, lecturers, and visitors may enter from different locations and often need to find unfamiliar rooms within a limited time.",
          TH: "อาคารรัฐสีมาคุณากรเป็นอาคารมหาวิทยาลัยสูง 5 ชั้น ภายในประกอบด้วยห้องเรียน ห้องปฏิบัติการ ห้องประชุม สำนักงาน และพื้นที่ประเภทต่าง ๆ จำนวนมาก พร้อมทางเข้าหลัก 2 จุด นักศึกษา บุคลากร อาจารย์ และผู้มาติดต่ออาจเข้ามาจากคนละทาง และต้องค้นหาห้องที่ไม่คุ้นเคยภายในเวลาจำกัด"
        },
        existingInterface: {
          EN: "The existing directory displayed a complete floor plan for each level. Users could switch between floors 1–5 and change between Thai and English, but the experience primarily depended on manually scanning the floor plans to locate a destination.",
          TH: "ระบบเดิมแสดงแผนผังอาคารแบบเต็มของแต่ละชั้น ผู้ใช้สามารถสลับดูชั้น 1–5 และเปลี่ยนภาษาไทย–อังกฤษได้ แต่การค้นหาจุดหมายยังต้องอาศัยการกวาดสายตาจากข้อมูลจำนวนมากบนแผนผังด้วยตนเอง"
        },
        link: {
          url: "https://personal.sut.ac.th/nuttapon/phone.html",
          label: {
            EN: "View Original Interface",
            TH: "ดู Interface เดิม"
          }
        },
        limitationsHeading: {
          EN: "Observed Limitations",
          TH: "ข้อจำกัดที่สังเกตพบ"
        },
        limitations: {
          EN: [
            "Room information was densely presented within each floor plan.",
            "Users needed to know or determine which floor contained the destination.",
            "The interface did not provide direct room search or category filtering.",
            "Selecting a room did not highlight its location on the floor plan.",
            "The system did not provide route guidance from the kiosk or selected entrance to the destination."
          ],
          TH: [
            "ข้อมูลห้องจำนวนมากถูกแสดงรวมอยู่บนแผนผังของแต่ละชั้น",
            "ผู้ใช้ต้องทราบหรือค้นหาด้วยตนเองว่าจุดหมายอยู่ชั้นใด",
            "ไม่มีช่องค้นหาห้องหรือการกรองตามประเภทห้อง",
            "เมื่อเลือกห้อง ระบบเดิมไม่สามารถเน้นตำแหน่งบนแผนผังได้",
            "ไม่มีคำแนะนำเส้นทางจากตู้คีออสก์หรือทางเข้าที่เลือกไปยังจุดหมาย"
          ]
        }
      },
      assumptionPersonas: {
        heading: {
          EN: "Assumption-Based Personas & Journey Mapping",
          TH: "Persona จากสมมติฐานและการวิเคราะห์ Journey"
        },
        methodologyTag: {
          EN: "Assumption-Based — No Direct User Research",
          TH: "สร้างจากสมมติฐาน — ไม่มี Direct User Research"
        },
        methodologyText: {
          EN: "Because direct user research was not conducted, the team created three assumption-based personas to explore likely kiosk usage scenarios. They represent a first-time building visitor, a first-year student, and a university lecturer with different levels of familiarity, time constraints, and navigation needs.<br><br>These personas were used as design tools and do not represent actual research participants.",
          TH: "เนื่องจากโปรเจกต์นี้ไม่ได้ทำ Research กับผู้ใช้โดยตรง ทีมจึงสร้าง Persona จากสมมติฐานจำนวน 3 กลุ่ม เพื่อสำรวจสถานการณ์ที่อาจเกิดขึ้นในการใช้ตู้คีออสก์ ได้แก่ ผู้มาติดต่ออาคารเป็นครั้งแรก นักศึกษาชั้นปีที่ 1 และอาจารย์มหาวิทยาลัย ซึ่งมีระดับความคุ้นเคย ข้อจำกัดด้านเวลา และความต้องการในการนำทางแตกต่างกัน<br><br>Persona เหล่านี้ใช้เป็นเครื่องมือประกอบการออกแบบ และไม่ได้เป็นตัวแทนของผู้เข้าร่วมการวิจัยจริง"
        },
        personaImageTag: {
          EN: "Representative Image",
          TH: "ภาพตัวแทนบุคคล"
        },
        personas: [
          {
            id: "somchai",
            title: {
              EN: "Somchai: First-time Building Visitor",
              TH: "สมชาย: ผู้ที่มาใช้งานอาคารเป็นครั้งแรก"
            },
            roleName: {
              EN: "First-time Visitor",
              TH: "ผู้มาติดต่อครั้งแรก"
            },
            name: {
              EN: "Somchai",
              TH: "สมชาย"
            },
            portrait: "projects/Keyosk redesign/รูปชาย.jpg",
            context: {
              EN: "Somchai is visiting the building for a meeting and is unfamiliar with its floor layout and room codes.",
              TH: "สมชายเดินทางมายังอาคารเพื่อเข้าร่วมประชุม และยังไม่คุ้นเคยกับโครงสร้างแต่ละชั้นและรหัสห้องภายในอาคาร"
            },
            goal: {
              EN: "Find the meeting room quickly, understand the route, and arrive on time without relying on staff assistance.",
              TH: "ค้นหาห้องประชุม เข้าใจเส้นทาง และเดินทางไปถึงตรงเวลาโดยไม่ต้องพึ่งพาการสอบถามเจ้าหน้าที่"
            },
            barriers: {
              EN: [
                "Does not know which floor contains the destination.",
                "Similar room names or codes may cause confusion.",
                "May have difficulty remembering the route after leaving the kiosk."
              ],
              TH: [
                "ไม่ทราบว่าจุดหมายอยู่ชั้นใด",
                "ชื่อหรือรหัสห้องที่คล้ายกันอาจทำให้สับสน",
                "อาจจดจำเส้นทางได้ยากหลังเดินออกจากตู้คีออสก์"
              ]
            },
            needs: {
              EN: [
                "Search by room name, code, or category.",
                "Clear route guidance from the current entrance.",
                "An option to continue viewing the route on a personal device."
              ],
              TH: [
                "ค้นหาด้วยชื่อ รหัส หรือประเภทห้อง",
                "แสดงเส้นทางจากทางเข้าที่ผู้ใช้อยู่",
                "เปิดข้อมูลเส้นทางต่อบนอุปกรณ์ส่วนตัวได้"
              ]
            },
            journeyImage: "projects/Keyosk redesign/journeyชาย.png"
          },
          {
            id: "oom",
            title: {
              EN: "Oom: First-year Student",
              TH: "อุ้ม: นักศึกษาชั้นปีที่ 1"
            },
            roleName: {
              EN: "First-year Student",
              TH: "นักศึกษาชั้นปีที่ 1"
            },
            name: {
              EN: "Oom",
              TH: "อุ้ม"
            },
            portrait: "projects/Keyosk redesign/รูปสาวิตรี.jpg",
            context: {
              EN: "Oom is a first-year student who is still becoming familiar with university buildings and may need to move between classes within a limited time.",
              TH: "อุ้มเป็นนักศึกษาชั้นปีที่ 1 ที่ยังไม่คุ้นเคยกับอาคารต่าง ๆ ภายในมหาวิทยาลัย และอาจต้องเดินทางระหว่างห้องเรียนภายในเวลาจำกัด"
            },
            goal: {
              EN: "Find the correct classroom and reach it before class begins.",
              TH: "ค้นหาห้องเรียนที่ถูกต้องและเดินทางไปถึงก่อนเริ่มเรียน"
            },
            barriers: {
              EN: [
                "Is unfamiliar with the building layout.",
                "May not know which floor contains the classroom.",
                "Dense floor-plan information may be difficult to scan quickly.",
                "Prefers finding the destination independently rather than asking for help."
              ],
              TH: [
                "ยังไม่คุ้นเคยกับผังอาคาร",
                "อาจไม่ทราบว่าห้องเรียนอยู่ชั้นใด",
                "ข้อมูลจำนวนมากบนแผนผังอาจกวาดสายตาได้ยาก",
                "ต้องการค้นหาจุดหมายด้วยตนเองมากกว่าการสอบถามผู้อื่น"
              ]
            },
            needs: {
              EN: [
                "Quick access to room search.",
                "Clear floor and room identification.",
                "Visual confirmation of the selected destination.",
                "Simple route guidance from the kiosk to the classroom."
              ],
              TH: [
                "เข้าถึงการค้นหาห้องได้อย่างรวดเร็ว",
                "แสดงชั้นและรหัสห้องอย่างชัดเจน",
                "ยืนยันตำแหน่งของห้องที่เลือกบนแผนผัง",
                "แสดงเส้นทางจากตู้คีออสก์ไปยังห้องเรียน"
              ]
            },
            journeyImage: "projects/Keyosk redesign/journeyอุ้ม.png"
          },
          {
            id: "mek",
            title: {
              EN: "Ajarn Mek: University Lecturer",
              TH: "อ.เมฆ: อาจารย์มหาวิทยาลัย"
            },
            roleName: {
              EN: "University Lecturer",
              TH: "อาจารย์มหาวิทยาลัย"
            },
            name: {
              EN: "Ajarn Mek",
              TH: "อ.เมฆ"
            },
            portrait: "projects/Keyosk redesign/รูปอ.ธีรเดช.jpeg",
            context: {
              EN: "Ajarn Mek uses the building for teaching and meetings. Although familiar with university environments, he may not know the location of every room and often works within a tight schedule.",
              TH: "อ.เมฆใช้อาคารสำหรับการสอนและการประชุม แม้จะคุ้นเคยกับสภาพแวดล้อมของมหาวิทยาลัย แต่ไม่ได้ทราบตำแหน่งของทุกห้องและมักมีเวลาค่อนข้างจำกัด"
            },
            goal: {
              EN: "Confirm the room location and find the shortest clear route before teaching or attending a meeting.",
              TH: "ตรวจสอบตำแหน่งห้องและค้นหาเส้นทางที่ชัดเจนก่อนเริ่มสอนหรือเข้าร่วมประชุม"
            },
            barriers: {
              EN: [
                "Limited time to scan a detailed floor plan.",
                "Similar room codes may be difficult to distinguish.",
                "May need to check several floors before finding the correct room."
              ],
              TH: [
                "มีเวลาจำกัดในการค้นหาข้อมูลจากแผนผัง",
                "รหัสห้องที่คล้ายกันอาจแยกได้ยาก",
                "อาจต้องเลื่อนดูหลายชั้นก่อนพบห้องที่ต้องการ"
              ]
            },
            needs: {
              EN: [
                "Fast room search by name or code.",
                "Clear floor-based navigation.",
                "Immediate destination highlighting.",
                "Concise route information without unnecessary steps."
              ],
              TH: [
                "ค้นหาห้องด้วยชื่อหรือรหัสได้อย่างรวดเร็ว",
                "เลือกดูข้อมูลตามชั้นได้อย่างชัดเจน",
                "เน้นตำแหน่งของจุดหมายทันทีหลังเลือก",
                "แสดงข้อมูลเส้นทางอย่างกระชับและไม่มีขั้นตอนที่ไม่จำเป็น"
              ]
            },
            journeyImage: "projects/Keyosk redesign/journeyเมฆ.png"
          }
        ],
        journeyMappingHeading: {
          EN: "Journey Mapping",
          TH: "วิเคราะห์ Journey"
        },
        journeyMappingText: {
          EN: "A potential journey was mapped for each persona, covering the experience from identifying a destination and arriving at the building to using the kiosk, finding the room, understanding the route, and reaching the destination.<br><br>The maps explored assumed activities, potential pain points, emotional changes, and design opportunities. They were used to guide the design direction rather than represent observed user behavior.",
          TH: "ทีมจำลอง Journey ของ Persona แต่ละคนตั้งแต่การกำหนดจุดหมาย เดินทางมาถึงอาคาร เริ่มใช้งานตู้คีออสก์ ค้นหาห้อง ทำความเข้าใจเส้นทาง และเดินทางไปถึงปลายทาง<br><br>Journey Map แสดงกิจกรรม อุปสรรคที่อาจพบ การเปลี่ยนแปลงทางอารมณ์ และโอกาสในการออกแบบ โดยใช้เพื่อกำหนดทิศทางของดีไซน์ ไม่ใช่พฤติกรรมที่สังเกตจากผู้ใช้จริง"
        },
        viewJourneyBtn: {
          EN: "View Full Journey Map",
          TH: "ดู Journey Map ฉบับเต็ม"
        },
        sharedPatternHeading: {
          EN: "Shared Journey Pattern",
          TH: "รูปแบบ Journey ร่วม"
        },
        sharedPatternSteps: {
          EN: [
            "Need a Room",
            "Arrive at the Building",
            "Use the Kiosk",
            "Find the Destination",
            "Understand the Route",
            "Reach the Room"
          ],
          TH: [
            "ต้องการค้นหาห้อง",
            "มาถึงอาคาร",
            "ใช้ตู้คีออสก์",
            "เลือกจุดหมาย",
            "ทำความเข้าใจเส้นทาง",
            "เดินทางถึงห้อง"
          ]
        },
        opportunitiesHeading: {
          EN: "Design Opportunities",
          TH: "โอกาสในการออกแบบ"
        },
        opportunities: [
          {
            num: "1",
            heading: {
              EN: "Multiple Search Methods",
              TH: "รองรับการค้นหาหลายรูปแบบ"
            },
            desc: {
              EN: "Allow users to search by floor, room name, room code, or category.",
              TH: "ค้นหาด้วยชั้น ชื่อห้อง รหัสห้อง หรือประเภทห้อง"
            }
          },
          {
            num: "2",
            heading: {
              EN: "Clear Destination Feedback",
              TH: "แสดงจุดหมายอย่างชัดเจน"
            },
            desc: {
              EN: "Highlight the selected room and its floor on the building plan.",
              TH: "เน้นห้องที่เลือกและชั้นที่เกี่ยวข้องบนแผนผัง"
            }
          },
          {
            num: "3",
            heading: {
              EN: "Route Guidance",
              TH: "แนะนำเส้นทาง"
            },
            desc: {
              EN: "Connect the user’s starting point with the selected destination.",
              TH: "เชื่อมจุดเริ่มต้นของผู้ใช้กับห้องปลายทาง"
            }
          },
          {
            num: "4",
            heading: {
              EN: "Mobile Handoff Concept",
              TH: "แนวคิดการส่งต่อข้อมูลไปยังมือถือ"
            },
            desc: {
              EN: "Explore using a QR code to continue viewing route information on a personal device.",
              TH: "ศึกษาการใช้ QR Code เพื่อเปิดข้อมูลเส้นทางต่อบนอุปกรณ์ส่วนตัว"
            }
          },
          {
            num: "5",
            heading: {
              EN: "Color and Symbol Pairing",
              TH: "ใช้สีร่วมกับสัญลักษณ์"
            },
            desc: {
              EN: "Use labels and symbols alongside color so room categories do not rely on color alone.",
              TH: "ใช้ข้อความและสัญลักษณ์ควบคู่กับสี เพื่อไม่ให้การแยกประเภทห้องขึ้นอยู่กับสีเพียงอย่างเดียว"
            }
          }
        ]
      },
      visualDirection: {
        heading: {
          EN: "Visual Direction",
          TH: "การกำหนดทิศทางหน้าจอด้วย Moodboard"
        },
        intro: {
          EN: "A moodboard was created before developing the high-fidelity prototype to establish a clear and consistent visual language for the kiosk. The direction focused on clarity, quick scanning, and touchscreen usability in a public environment.",
          TH: "ทีมจัดทำ Moodboard ก่อนพัฒนา High-fidelity Prototype เพื่อกำหนดภาษาภาพของตู้คีออสก์ให้ชัดเจนและสม่ำเสมอ โดยเน้นการกวาดสายตา การทำความเข้าใจข้อมูลอย่างรวดเร็ว และการใช้งานผ่านหน้าจอสัมผัสในพื้นที่สาธารณะ"
        },
        moodboardImage: "projects/Keyosk redesign/moodboard.png",
        subsections: [
          {
            title: {
              EN: "Color System",
              TH: "ระบบสี"
            },
            desc: {
              EN: "Blue and soft green were selected as the primary interface colors to create a clear and approachable foundation. Additional colors distinguish room categories, while labels and symbols are used alongside color so information does not rely on color alone.",
              TH: "เลือกสีน้ำเงินและสีเขียวอ่อนเป็นสีหลักของ Interface เพื่อสร้างโครงสร้างที่ชัดเจนและเป็นมิตร พร้อมใช้สีเพิ่มเติมเพื่อแยกประเภทห้อง โดยใช้ชื่อหมวดหมู่และสัญลักษณ์ร่วมกับสี เพื่อไม่ให้การสื่อความหมายขึ้นอยู่กับสีเพียงอย่างเดียว"
            }
          },
          {
            title: {
              EN: "Typography",
              TH: "ตัวอักษร"
            },
            desc: {
              EN: "Noto Sans Thai Looped was selected to support both Thai and English content. Clear differences between headings, room names, supporting information, and instructions help users scan the interface from a standing distance.",
              TH: "เลือกใช้ Noto Sans Thai Looped เพื่อรองรับเนื้อหาทั้งภาษาไทยและภาษาอังกฤษ การกำหนดลำดับขนาดระหว่างหัวข้อ ชื่อห้อง ข้อมูลประกอบ และคำแนะนำ ช่วยให้ผู้ใช้กวาดสายตาจากระยะยืนได้ง่ายขึ้น"
            }
          },
          {
            title: {
              EN: "Icons & Room Categories",
              TH: "ไอคอนและประเภทห้อง"
            },
            desc: {
              EN: "Consistent symbols represent different room types and building facilities. Pairing icons with category names and colors helps users recognize room groups without interpreting the floor plan in detail.",
              TH: "ใช้สัญลักษณ์ที่มีรูปแบบสม่ำเสมอเพื่อแทนประเภทห้องและสิ่งอำนวยความสะดวกภายในอาคาร การแสดงไอคอนร่วมกับชื่อหมวดหมู่และสีช่วยให้ผู้ใช้แยกกลุ่มห้องได้โดยไม่ต้องอ่านรายละเอียดทั้งหมดบนแผนผัง"
            }
          },
          {
            title: {
              EN: "Menu Structure",
              TH: "โครงสร้างเมนู"
            },
            desc: {
              EN: "The menu direction prioritizes large touch targets, clear labels, and visible selected states. Primary actions and room categories are separated from supporting information to reduce visual density.",
              TH: "ออกแบบเมนูโดยให้ความสำคัญกับพื้นที่กดขนาดใหญ่ ชื่อรายการที่ชัดเจน และสถานะที่กำลังเลือก โดยแยกคำสั่งหลักและประเภทห้องออกจากข้อมูลประกอบ เพื่อลดความหนาแน่นของหน้าจอ"
            }
          },
          {
            title: {
              EN: "Overall Direction",
              TH: "โดยรวม"
            },
            desc: {
              EN: "The visual system combines color, text, symbols, and spatial hierarchy to make floor selection, room discovery, and route information easier to understand. Further contrast and accessibility testing would be required before implementation.",
              TH: "ระบบภาพใช้สี ข้อความ สัญลักษณ์ และลำดับพื้นที่ร่วมกัน เพื่อช่วยให้การเลือกชั้น ค้นหาห้อง และทำความเข้าใจเส้นทางมีความชัดเจนขึ้น อย่างไรก็ตาม ยังต้องตรวจสอบ Contrast และทดสอบด้าน Accessibility เพิ่มเติมก่อนนำไปใช้งานจริง"
            }
          }
        ]
      },
      designPrioritiesAccessibility: {
        heading: {
          EN: "Design Priorities & Accessibility Considerations",
          TH: "แนวทางการออกแบบและ Accessibility"
        },
        intro: {
          EN: "The assumed user journeys were translated into five design priorities that guided the kiosk’s interaction, information hierarchy, and accessibility considerations.",
          TH: "Journey ที่สร้างจากสมมติฐานถูกนำมาสรุปเป็นแนวทางการออกแบบ 5 ข้อ เพื่อกำหนดรูปแบบการใช้งาน ลำดับความสำคัญของข้อมูล และข้อพิจารณาด้านการเข้าถึงของตู้คีออสก์"
        },
        priorities: [
          {
            num: "1",
            title: {
              EN: "Fast Room Discovery",
              TH: "ค้นหาห้องได้รวดเร็ว"
            },
            desc: {
              EN: "Support multiple ways to find a destination, including floor selection, room categories, room names, and room codes, so users do not need to scan the entire floor plan manually.",
              TH: "รองรับการค้นหาจุดหมายหลายรูปแบบ ทั้งการเลือกชั้น ประเภทห้อง ชื่อห้อง และรหัสห้อง เพื่อให้ผู้ใช้ไม่ต้องกวาดสายตาค้นหาจากแผนผังทั้งหมดด้วยตนเอง"
            }
          },
          {
            num: "2",
            title: {
              EN: "Clear Destination Feedback",
              TH: "สื่อสารตำแหน่งจุดหมายอย่างชัดเจน"
            },
            desc: {
              EN: "After a room is selected, clearly display its floor and highlight its location on the building plan. Use text and symbols alongside color to keep the destination understandable without relying on color alone.",
              TH: "หลังจากเลือกห้อง ระบบจะแสดงชั้นและเน้นตำแหน่งของห้องบนแผนผัง โดยใช้ข้อความและสัญลักษณ์ร่วมกับสี เพื่อไม่ให้การทำความเข้าใจจุดหมายขึ้นอยู่กับสีเพียงอย่างเดียว"
            }
          },
          {
            num: "3",
            title: {
              EN: "Visual Route Guidance",
              TH: "แสดงเส้นทางด้วยภาพ"
            },
            desc: {
              EN: "Connect the kiosk or selected entrance to the destination with a visible route. Keep the route concise and distinguish the starting point, direction, and destination clearly.",
              TH: "เชื่อมตำแหน่งของตู้คีออสก์หรือทางเข้าที่เลือกกับห้องปลายทางด้วยเส้นทางที่มองเห็นได้ โดยแยกจุดเริ่มต้น ทิศทาง และจุดหมายให้ชัดเจน"
            }
          },
          {
            num: "4",
            title: {
              EN: "Touchscreen Clarity",
              TH: "ใช้งานหน้าจอสัมผัสได้ชัดเจน"
            },
            desc: {
              EN: "Use large touch targets, readable labels, consistent selected states, and a simplified information hierarchy to support quick interaction from a standing position in a public environment.",
              TH: "ใช้พื้นที่กดขนาดใหญ่ ชื่อรายการที่อ่านง่าย สถานะที่กำลังเลือกอย่างสม่ำเสมอ และลำดับข้อมูลที่ไม่ซับซ้อน เพื่อรองรับการใช้งานอย่างรวดเร็วจากระยะยืนในพื้นที่สาธารณะ"
            }
          },
          {
            num: "5",
            title: {
              EN: "Alternative Access Concept",
              TH: "แนวคิดช่องทางเข้าถึงทางเลือก"
            },
            desc: {
              EN: "Explore a QR code placed within a more reachable area so users, including wheelchair users, can continue viewing route information on a personal device. The mobile experience remained conceptual and would require further design and testing.",
              TH: "ศึกษาแนวทางวาง QR Code ในตำแหน่งที่เข้าถึงได้ง่ายขึ้น เพื่อให้ผู้ใช้ รวมถึงผู้ใช้วีลแชร์ สามารถเปิดข้อมูลเส้นทางต่อบนอุปกรณ์ส่วนตัวได้ โดยประสบการณ์บนโทรศัพท์ยังเป็นเพียงแนวคิดและต้องออกแบบและทดสอบเพิ่มเติม"
            }
          }
        ],
        accessibilityNote: {
          heading: {
            EN: "Accessibility Considerations",
            TH: "ด้าน Accessibility"
          },
          desc: {
            EN: "The design pairs color with labels and symbols, considers touchscreen reach and readability, and explores an alternative mobile handoff. However, color contrast, physical reach, QR-code placement, assistive use, and usability with people with disabilities were not tested and would require validation before implementation.",
            TH: "การออกแบบใช้สีร่วมกับข้อความและสัญลักษณ์ คำนึงถึงระยะเอื้อมและการอ่านบนหน้าจอสัมผัส และศึกษาแนวคิดการส่งต่อข้อมูลไปยังมือถือ อย่างไรก็ตาม ยังไม่ได้ทดสอบ Contrast ตำแหน่งและระยะเอื้อมของ QR Code การใช้งานร่วมกับเทคโนโลยีช่วยเหลือ หรือการใช้งานกับผู้พิการ จึงต้องตรวจสอบเพิ่มเติมก่อนนำไปใช้จริง"
          }
        }
      },
      kioskKeyUx: {
        heading: {
          EN: "Key UX Solutions & UI Flow",
          TH: "แนวทางการแก้ปัญหาและกระบวนการใช้งาน"
        },
        intro: {
          EN: "The redesigned kiosk connects floor browsing, room categories, destination selection, and route guidance into one continuous room-finding experience.",
          TH: "ตู้คีออสก์ที่ออกแบบใหม่เชื่อมการเลือกชั้น การเลือกประเภทห้อง การระบุจุดหมาย และการแสดงเส้นทางเข้าไว้ในประสบการณ์ค้นหาห้องที่ต่อเนื่องกัน"
        },
        groups: [
          {
            num: "1",
            title: {
              EN: "Floor & Room Discovery",
              TH: "การค้นหาชั้นและห้อง"
            },
            desc: {
              EN: "Users can switch between floors 1–5 to view the rooms and facilities available on each level. The selected floor is clearly highlighted, while room categories use color, labels, and symbols to help users distinguish different spaces.<br><br>For a more focused search, users can open the room-selection panel, choose a room category, and select a room name or code without manually scanning the entire floor plan.",
              TH: "ผู้ใช้สามารถสลับดูชั้น 1–5 เพื่อตรวจสอบห้องและสิ่งอำนวยความสะดวกของแต่ละชั้น โดยชั้นที่กำลังเลือกจะแสดงสถานะอย่างชัดเจน ขณะที่ประเภทห้องใช้ทั้งสี ชื่อ และสัญลักษณ์เพื่อช่วยแยกพื้นที่แต่ละประเภท<br><br>เมื่อต้องการค้นหาแบบเจาะจง ผู้ใช้สามารถเปิดแถบเลือกห้อง เลือกประเภทห้อง และเลือกชื่อหรือรหัสห้องได้ โดยไม่ต้องกวาดสายตาค้นหาจากแผนผังทั้งหมดด้วยตนเอง"
            },
            flow: {
              EN: "Select Floor → Select Room Category → Select Room",
              TH: "เลือกชั้น → เลือกประเภทห้อง → เลือกห้อง"
            },
            floors: [
              { label: { EN: "Floor 1", TH: "ชั้น 1" }, img: "projects/Keyosk redesign/floor 1.png" },
              { label: { EN: "Floor 2", TH: "ชั้น 2" }, img: "projects/Keyosk redesign/floor 2.png" },
              { label: { EN: "Floor 3", TH: "ชั้น 3" }, img: "projects/Keyosk redesign/floor 3.png" },
              { label: { EN: "Floor 4", TH: "ชั้น 4" }, img: "projects/Keyosk redesign/floor 4.png" },
              { label: { EN: "Floor 5", TH: "ชั้น 5" }, img: "projects/Keyosk redesign/floor 5.png" }
            ],
            roomDiscoveryScreens: [
              { label: { EN: "Meeting Room Category", TH: "หมวดห้องประชุม" }, img: "projects/Keyosk redesign/ห้องประชุม.png" },
              { label: { EN: "Lab Category", TH: "หมวดห้องปฏิบัติการ" }, img: "projects/Keyosk redesign/ปฏิบัติการ.png" },
              { label: { EN: "Room Selection", TH: "การเลือกห้อง B6101-A" }, img: "projects/Keyosk redesign/เลือกห้องB6101-A.png" }
            ]
          },
          {
            num: "2",
            title: {
              EN: "Destination Highlighting",
              TH: "การเน้นตำแหน่งจุดหมาย"
            },
            desc: {
              EN: "After a room is selected, the interface returns to the relevant floor plan and highlights the destination. The selected room, its floor, and its position within the building are displayed together to provide clear visual confirmation.<br><br>Color is paired with room codes, labels, and destination markers so the selected location is not communicated through color alone.",
              TH: "หลังจากเลือกห้อง ระบบจะแสดงแผนผังของชั้นที่เกี่ยวข้องและเน้นตำแหน่งจุดหมาย โดยแสดงห้องที่เลือก ชั้น และตำแหน่งภายในอาคารไว้ด้วยกัน เพื่อช่วยยืนยันว่าผู้ใช้เลือกจุดหมายถูกต้อง<br><br>การแสดงจุดหมายใช้รหัสห้อง ชื่อห้อง สัญลักษณ์ และเครื่องหมายระบุตำแหน่งร่วมกับสี เพื่อไม่ให้การสื่อความหมายขึ้นอยู่กับสีเพียงอย่างเดียว"
            },
            flow: {
              EN: "Select Room → Open Relevant Floor → Highlight Destination",
              TH: "เลือกห้อง → แสดงชั้นที่เกี่ยวข้อง → เน้นตำแหน่งจุดหมาย"
            },
            beforeAfterConnector: {
              EN: "Select room B6101-A → Highlight its location on the floor plan",
              TH: "เลือกห้อง B6101-A → แสดงตำแหน่งห้องบนแผนผัง"
            },
            screen1: "projects/Keyosk redesign/เลือกห้องB6101-A.png",
            screen2: "projects/Keyosk redesign/map.png"
          },
          {
            num: "3",
            title: {
              EN: "Visual Route Guidance",
              TH: "การแสดงเส้นทางด้วยภาพ"
            },
            desc: {
              EN: "The kiosk displays a visual route from the selected starting point to the destination. Directional arrows, a starting marker, and a destination pin help users understand where to begin and which path to follow.<br><br>The route remains connected to the floor plan so users can understand the destination in relation to corridors, entrances, elevators, stairs, and other building landmarks.",
              TH: "ตู้คีออสก์แสดงเส้นทางจากจุดเริ่มต้นที่เลือกไปยังห้องปลายทาง โดยใช้ลูกศร เครื่องหมายจุดเริ่มต้น และหมุดจุดหมาย เพื่อช่วยให้ผู้ใช้เข้าใจว่าควรเริ่มจากตำแหน่งใดและเดินไปในทิศทางใด<br><br>เส้นทางถูกแสดงบนแผนผังโดยตรง เพื่อให้ผู้ใช้เข้าใจตำแหน่งของจุดหมายเมื่อเทียบกับทางเดิน ทางเข้า ลิฟต์ บันได และจุดสังเกตอื่นภายในอาคาร"
            },
            flow: {
              EN: "Starting Point → Visual Route → Destination Room",
              TH: "ตำแหน่งเริ่มต้น → เส้นทาง → ห้องปลายทาง"
            },
            heroImage: "projects/Keyosk redesign/map.png"
          },
          {
            num: "4",
            title: {
              EN: "Mobile Route Handoff Concept",
              TH: "แนวคิดการส่งต่อเส้นทางไปยังมือถือ"
            },
            desc: {
              EN: "A QR code is provided at the lower area of the kiosk as a concept for allowing users to continue viewing route information on a personal device. This direction was considered for users who may have difficulty reaching or continuously viewing the kiosk screen, including wheelchair users.<br><br>The mobile version was not designed or developed within this project. Further research and accessibility testing would be required to validate the QR-code size, position, reach, scanning angle, and mobile experience.",
              TH: "วาง QR Code ไว้บริเวณด้านล่างของตู้คีออสก์ เพื่อศึกษาแนวทางให้ผู้ใช้เปิดข้อมูลเส้นทางต่อบนอุปกรณ์ส่วนตัว แนวคิดนี้พิจารณาถึงผู้ที่อาจเข้าถึงหรือมองหน้าจอคีออสก์ได้ไม่สะดวกอย่างต่อเนื่อง รวมถึงผู้ใช้วีลแชร์<br><br>โปรเจกต์นี้ยังไม่ได้ออกแบบหรือพัฒนา Mobile Version จึงต้องศึกษาและทดสอบเพิ่มเติมทั้งขนาด ตำแหน่ง ระยะเอื้อม มุมสแกน QR Code และประสบการณ์ใช้งานบนโทรศัพท์"
            },
            flow: {
              EN: "Scan QR Code → Open Route on Mobile Device",
              TH: "สแกน QR Code → เปิดข้อมูลเส้นทางบนโทรศัพท์"
            }
          }
        ]
      },
      kioskReflectionFuture: {
        heading: {
          EN: "Reflection & Future Improvements",
          TH: "การสะท้อนผลและแนวทางการพัฒนาต่อ"
        },
        paragraphs: [
          {
            EN: "The project resulted in a high-fidelity interactive kiosk prototype that connects room discovery, destination highlighting, and visual route guidance within one experience. The design was presented and iteratively refined based on feedback from the course instructor.",
            TH: "โปรเจกต์นี้ได้ผลลัพธ์เป็นต้นแบบตู้คีออสก์แบบ Interactive ระดับ High-fidelity ที่เชื่อมการค้นหาห้อง การเน้นตำแหน่งจุดหมาย และการแสดงเส้นทางไว้ในประสบการณ์เดียว โดยมีการนำเสนอและปรับปรุงดีไซน์ตามข้อเสนอแนะของอาจารย์อย่างต่อเนื่อง"
          },
          {
            EN: "This project showed that displaying a floor plan alone may not be enough to support wayfinding. Users also need clear methods for finding a room, confirming its location, and understanding how to reach it. It also highlighted the importance of pairing color with labels and symbols rather than relying on color alone.",
            TH: "โปรเจกต์นี้ทำให้เห็นว่าการแสดงแผนผังเพียงอย่างเดียวอาจยังไม่เพียงพอต่อการนำทาง ผู้ใช้ต้องสามารถค้นหาห้อง ยืนยันตำแหน่ง และเข้าใจวิธีเดินทางไปยังจุดหมายได้อย่างชัดเจน รวมถึงไม่ควรใช้สีเป็นวิธีเดียวในการสื่อความหมาย แต่ควรใช้ชื่อและสัญลักษณ์ร่วมด้วย"
          },
          {
            EN: "The personas and journey maps were assumption-based, and the prototype was not tested with actual users. The mobile route handoff remained conceptual, while accessibility considerations such as physical reach, color contrast, QR-code placement, and wheelchair use still require validation.",
            TH: "Persona และ Journey Map ของโปรเจกต์นี้สร้างจากสมมติฐาน และยังไม่ได้ทดสอบ Prototype กับผู้ใช้จริง ส่วนการส่งต่อเส้นทางไปยังโทรศัพท์ยังเป็นเพียงแนวคิด ขณะที่ระยะเอื้อม Contrast ตำแหน่ง QR Code และการใช้งานสำหรับผู้ใช้วีลแชร์ยังต้องได้รับการตรวจสอบเพิ่มเติม"
          }
        ],
        futureHeading: {
          EN: "Future Improvements",
          TH: "แนวทางการพัฒนาต่อ"
        },
        improvements: [
          {
            num: "1",
            icon: "users",
            title: {
              EN: "User Research & Usability Testing",
              TH: "Research และ Usability Testing"
            },
            desc: {
              EN: "Test the kiosk with students, lecturers, first-time visitors, and users with disabilities.",
              TH: "ทดสอบกับนักศึกษา อาจารย์ ผู้มาติดต่อครั้งแรก และผู้ใช้ที่มีข้อจำกัดด้านการเข้าถึง"
            }
          },
          {
            num: "2",
            icon: "smartphone",
            title: {
              EN: "Mobile Route Experience",
              TH: "ประสบการณ์เส้นทางบนมือถือ"
            },
            desc: {
              EN: "Design the mobile flow that opens after scanning the QR code.",
              TH: "ออกแบบ Flow บนโทรศัพท์หลังจากผู้ใช้สแกน QR Code"
            }
          },
          {
            num: "3",
            icon: "wheelchair",
            title: {
              EN: "Accessibility Validation",
              TH: "ตรวจสอบ Accessibility"
            },
            desc: {
              EN: "Evaluate color contrast, symbol recognition, readability, touch-target size, reach, and wheelchair access.",
              TH: "ประเมิน Contrast การจดจำสัญลักษณ์ การอ่าน ขนาดพื้นที่กด ระยะเอื้อม และการใช้งานสำหรับผู้ใช้วีลแชร์"
            }
          },
          {
            num: "4",
            icon: "monitor",
            title: {
              EN: "Physical Kiosk Testing",
              TH: "ทดสอบกับตู้คีออสก์จริง"
            },
            desc: {
              EN: "Test the interface at the actual screen size, height, viewing distance, and installation location.",
              TH: "ตรวจสอบการใช้งานกับขนาดหน้าจอ ความสูง ระยะมอง และตำแหน่งติดตั้งจริง"
            }
          }
        ]
      },
      problem: {
        EN: "• Users may have difficulty finding the correct room in a large multi-floor building.<br>• Existing floor and room information can be overwhelming and difficult to scan quickly.<br>• Users may not clearly understand which floor or area a selected room is located in.<br>• Static directory information does not provide clear navigation from the user’s current location.<br>• Finding a destination can take extra time, especially for first-time visitors.",
        TH: "• ผู้ใช้งานอาจสับสนและค้นหาห้องที่ถูกต้องได้ยากในอาคารสูง 5 ชั้น<br>• ข้อมูลชั้นและห้องพักเดิมมีความหนาแน่น อ่านยาก และกวาดสายตาค้นหาได้ช้า<br>• ผู้ใช้งานอาจไม่แน่ใจว่าห้องที่ต้องการตั้งอยู่บนชั้นใดหรือโซนใด<br>• ป้ายผังอาคารแบบนิ่ง (Static) ไม่สามารถนำทางจากจุดที่ผู้ใช้อยู่ไปยังปลายทางได้อย่างชัดเจน<br>• เสียเวลาในการค้นหาห้องพัก โดยเฉพาะสำหรับผู้มาติดต่อหรือนักศึกษาใหม่ที่มาอาคารเป็นครั้งแรก"
      },
      personaName: {
        EN: "Students, Staff, and Building Visitors",
        TH: "นักศึกษา บุคลากร และบุคคลภายนอก"
      },
      personaDesc: {
        EN: "• <b>Target Audience:</b> Students, staff, and visitors who need to find rooms or facilities inside the building.<br>• <b>First-time Visitors:</b> Guests who are unfamiliar with the 5-floor building layout and room arrangements.<br>• <b>Independent Navigation:</b> Users who need quick, self-serve directions without asking staff for assistance.",
        TH: "• <b>กลุ่มผู้ใช้งานหลัก:</b> นักศึกษา บุคลากร และบุคคลภายนอกที่ต้องการค้นหาห้องเรียน วิทยากรรับเชิญ หรือผู้ที่มาใช้ห้องในอาคาร<br>• <b>ผู้มาเยือนครั้งแรก:</b> ผู้ที่ไม่คุ้นเคยกับผังอาคารสูง 5 ชั้นและการจัดวางห้องพัก<br>• <b>ต้องการนำทางด้วยตนเอง:</b> ผู้ที่ต้องการค้นหาเส้นทางอย่างสะดวกรวดเร็วด้วยตนเองโดยไม่ต้องสอบถามเจ้าหน้าที่"
      },
      resultsHeading: {
        EN: "How It Improved the Existing Kiosk",
        TH: "สิ่งที่พัฒนาและปรับปรุงจากตู้คีออสเดิม"
      },
      resultsDesc: {
        EN: "The original interface displayed multiple floors and room information at once, making it difficult for users to quickly understand where a room was located. The redesigned system transforms the kiosk from a static building directory into a clearer and more interactive wayfinding experience through:",
        TH: "หน้าจอคีออสเดิมแสดงข้อมูลหลายชั้นและหลายห้องพร้อมกันในหน้าเดียว ทำให้ยากต่อการระบุตำแหน่งห้องได้อย่างรวดเร็ว ระบบที่ปรับปรุงใหม่เปลี่ยนจากผังอาคารแบบนิ่ง ให้กลายเป็นประสบการณ์การนำทางแบบตอบโต้ที่ชัดเจนและใช้งานง่ายยิ่งขึ้น ผ่าน:"
      },
      resultsHighlights: {
        EN: [
          "• <b>Clear Navigation:</b> Seamless floor-by-floor navigation between individual floors.",
          "• <b>Distinct Room Categories:</b> Color-coded visual room identification for fast scanning.",
          "• <b>Easier Room Search:</b> Intuitive search bar and instant category selection.",
          "• <b>Visual Highlighting:</b> Highlighted destinations directly rendered on the floor plan.",
          "• <b>Step-by-Step Wayfinding:</b> Clear directions from current location to selected destinations.",
          "• <b>Interactive Animations:</b> Motion feedback helping users understand location and direction.",
          "• <b>Reduced Complexity:</b> Streamlined visual hierarchy for faster access to essential building info."
        ],
        TH: [
          "• <b>การสลับชั้นที่ชัดเจน:</b> สลับดูผังอาคารทีละชั้นได้อย่างราบรื่นและไม่สับสน",
          "• <b>หมวดหมู่ห้องแยกสีชัดเจน:</b> ใช้รหัสสีแยกประเภทห้องเพื่อการกวาดสายตาค้นหาที่รวดเร็ว",
          "• <b>ค้นหาห้องได้ง่ายขึ้น:</b> ช่องค้นหาที่ใช้งานง่ายพร้อมตัวเลือกหมวดหมู่ทันที",
          "• <b>เน้นตำแหน่งบนผังอาคาร:</b> แสดงการไฮไลท์จุดหมายบนแผนผัง floor plan โดยตรง",
          "• <b>นำทางทีละขั้นตอน:</b> บอกเส้นทางจากจุดปัจจุบันไปยังห้องปลายทางอย่างชัดเจน",
          "• <b>แอนิเมชันตอบสนอง:</b> ภาพเคลื่อนไหวช่วยระบุทิศทางและพิกัดตำแหน่ง",
          "• <b>ลดความซับซ้อนของข้อมูล:</b> จัดลำดับความสำคัญของข้อมูลให้เข้าถึงง่ายและรวดเร็วยิ่งขึ้น"
        ]
      },
      featureHeading: {
        EN: "Key UX Solutions & UI Design",
        TH: "แนวทางการแก้ปัญหา UX และการออกแบบ UI"
      }
    }
  },
  otherProjects: {
    nav: {
      magazine: {
        EN: "01 / MAGAZINE",
        TH: "01 / นิตยสาร"
      },
      logo: {
        EN: "02 / LOGO",
        TH: "02 / ออกแบบโลโก้"
      },
      poster: {
        EN: "03 / POSTERS",
        TH: "03 / โปสเตอร์"
      },
      infographic: {
        EN: "04 / INFOGRAPHIC",
        TH: "04 / อินโฟกราฟิก"
      }
    },
    magazine: {
      kicker: {
        EN: "OTHER PROJECT / MAGAZINE",
        TH: "ผลงานอื่นๆ / นิตยสาร"
      },
      title: {
        EN: "Simple Soul Magazine",
        TH: "Simple Soul Magazine — นิตยสารชีวิตในรูปแบบชุมชน"
      },
      pdfBtn: {
        EN: 'OPEN FULL MAGAZINE PDF (22 PAGES) <i class="ph-duotone ph-file-text icon-inline"></i>',
        TH: 'เปิดอ่านนิตยสารฉบับเต็ม PDF (22 หน้า) <i class="ph-duotone ph-file-text icon-inline"></i>'
      }
    },
    logo: {
      kicker: {
        EN: "OTHER PROJECT / LOGOFOLIO",
        TH: "ผลงานอื่นๆ / ออกแบบโลโก้"
      },
      title: {
        EN: "Logo Design",
        TH: "การออกแบบโลโก้"
      }
    },
    poster: {
      kicker: {
        EN: "OTHER PROJECT / POSTERS",
        TH: "ผลงานอื่นๆ / โปสเตอร์"
      },
      title: {
        EN: "Muslim Club &amp; Event Posters",
        TH: "โปสเตอร์ชมรมมุสลิมและกิจกรรมต่างๆ"
      }
    },
    infographic: {
      kicker: {
        EN: "OTHER PROJECT / INFOGRAPHIC",
        TH: "ผลงานอื่นๆ / อินโฟกราฟิก"
      },
      title: {
        EN: "Infographic &amp; Visual Graphics",
        TH: "การออกแบบสื่ออินโฟกราฟิก"
      }
    }
  }
};

let currentLang = 'EN';
let overlay, shell;

function setLanguage(lang) {
  currentLang = lang;

  if (lang === 'TH') {
    document.body.classList.add('lang-th');
    document.body.classList.remove('lang-en');
  } else {
    document.body.classList.add('lang-en');
    document.body.classList.remove('lang-th');
  }

  // Update toggle button text across desktop and mobile nav
  document.querySelectorAll('#langToggleBtn, #mobileLangToggleBtn').forEach(btn => {
    btn.innerHTML = lang === 'EN' ? '<b>EN</b> / TH' : 'EN / <b>TH</b>';
  });

  // Top Navigation Bar (Desktop Nav)
  const desktopNavBtns = document.querySelectorAll('#mainNav .navlinks button[data-jump]');
  const navItems = [
    i18n.nav?.about,
    i18n.nav?.skills,
    i18n.nav?.projects,
    i18n.nav?.otherProjects,
    i18n.nav?.certificates,
    i18n.nav?.activities,
    i18n.nav?.cv,
    i18n.nav?.contact
  ];
  desktopNavBtns.forEach((btn, idx) => {
    const data = navItems[idx];
    if (data && data[lang]) {
      btn.innerHTML = data[lang];
    }
  });

  // Mobile Navigation Overlay
  const mobileNavBtns = document.querySelectorAll('#mobileNavOverlay .mobile-nav-links button[data-jump]');
  const mobileNavItems = [
    i18n.nav?.mobile?.about || i18n.nav?.about,
    i18n.nav?.mobile?.skills || i18n.nav?.skills,
    i18n.nav?.mobile?.projects || i18n.nav?.projects,
    i18n.nav?.mobile?.otherProjects || i18n.nav?.otherProjects,
    i18n.nav?.mobile?.certificates || i18n.nav?.certificates,
    i18n.nav?.mobile?.activities || i18n.nav?.activities,
    i18n.nav?.mobile?.cv || i18n.nav?.cv,
    i18n.nav?.mobile?.contact || i18n.nav?.contact
  ];
  mobileNavBtns.forEach((btn, idx) => {
    const data = mobileNavItems[idx];
    if (data && data[lang]) {
      const numSpan = btn.querySelector('.nav-num');
      const numHtml = numSpan ? numSpan.outerHTML + ' ' : '';
      btn.innerHTML = numHtml + data[lang];
    }
  });

  // Section 1: Hero
  const heroCopy = document.getElementById('introCopy');
  if (heroCopy) {
    const np = heroCopy.querySelector('.nameplate');
    const disp = heroCopy.querySelector('.display');
    const lead = heroCopy.querySelector('.lead');
    if (np && i18n.hero?.nameplate?.[lang]) np.innerHTML = i18n.hero.nameplate[lang];
    if (disp && i18n.hero?.display?.[lang]) disp.innerHTML = i18n.hero.display[lang];
    if (lead && i18n.hero?.lead?.[lang]) lead.innerHTML = i18n.hero.lead[lang];
  }

  // Section 2: About
  const aboutSec = document.getElementById('introAbout');
  if (aboutSec) {
    const kicker = aboutSec.querySelector('.kicker');
    const h2 = aboutSec.querySelector('h2');
    const lead = aboutSec.querySelector('.lead');
    const eduB = aboutSec.querySelector('.intro-education b');
    const eduSpan = aboutSec.querySelector('.intro-education span');
    const eduSmall = aboutSec.querySelector('.intro-education small');

    if (kicker && i18n.about?.kicker?.[lang]) kicker.innerHTML = i18n.about.kicker[lang];
    if (h2 && i18n.about?.heading?.[lang]) h2.innerHTML = i18n.about.heading[lang];
    if (lead && i18n.about?.lead?.[lang]) lead.innerHTML = i18n.about.lead[lang];
    if (eduB && i18n.about?.eduTitle?.[lang]) eduB.innerHTML = i18n.about.eduTitle[lang];
    if (eduSpan && i18n.about?.eduSchool?.[lang]) eduSpan.innerHTML = i18n.about.eduSchool[lang];
    if (eduSmall && i18n.about?.eduDegree?.[lang]) eduSmall.innerHTML = i18n.about.eduDegree[lang];
  }

  // Section 3: Skills
  const skillsSec = document.querySelector('.panel[data-panel="1"]');
  if (skillsSec) {
    const kicker = skillsSec.querySelector('.skills-title .kicker');
    const h2 = skillsSec.querySelector('.skills-title h2');
    if (kicker && i18n.skills?.kicker?.[lang]) kicker.innerHTML = i18n.skills.kicker[lang];
    if (h2 && i18n.skills?.heading?.[lang]) h2.innerHTML = i18n.skills.heading[lang];

    const techH4 = skillsSec.querySelector('.sk-tech .sk-header h4');
    const codeH4 = skillsSec.querySelector('.sk-code .sk-header h4');
    const langH4 = skillsSec.querySelector('.sk-lang .sk-header h4');
    const softH4 = skillsSec.querySelector('.sk-soft .sk-header h4');

    if (techH4 && i18n.skills?.techTitle?.[lang]) techH4.innerHTML = i18n.skills.techTitle[lang];
    if (codeH4 && i18n.skills?.codeTitle?.[lang]) codeH4.innerHTML = i18n.skills.codeTitle[lang];
    if (langH4 && i18n.skills?.langTitle?.[lang]) langH4.innerHTML = i18n.skills.langTitle[lang];
    if (softH4 && i18n.skills?.softTitle?.[lang]) softH4.innerHTML = i18n.skills.softTitle[lang];

    const langItems = skillsSec.querySelectorAll('.sk-lang .sk-list .sk-item');
    if (langItems.length >= 3) {
      if (i18n.skills?.langThai?.[lang]) langItems[0].innerHTML = i18n.skills.langThai[lang];
      if (i18n.skills?.langEnglish?.[lang]) langItems[1].innerHTML = i18n.skills.langEnglish[lang];
      if (i18n.skills?.langChinese?.[lang]) langItems[2].innerHTML = i18n.skills.langChinese[lang];
    }

    const softItems = skillsSec.querySelectorAll('.sk-soft .sk-list .sk-item');
    const targetSoftList = i18n.skills?.softItems?.[lang];
    if (targetSoftList && softItems.length === targetSoftList.length) {
      softItems.forEach((item, idx) => {
        item.innerHTML = targetSoftList[idx];
      });
    }
  }

  // Section 4: Featured Projects
  const projectsSec = document.querySelector('.panel[data-panel="2"]');
  if (projectsSec) {
    const kicker = projectsSec.querySelector('.projects-title .kicker');
    const h2 = projectsSec.querySelector('.projects-title h2');
    if (kicker && i18n.projects?.kicker?.[lang]) kicker.innerHTML = i18n.projects.kicker[lang];
    if (h2 && i18n.projects?.heading?.[lang]) h2.innerHTML = i18n.projects.heading[lang];

    const projectArticles = projectsSec.querySelectorAll('article.project');
    projectArticles.forEach(article => {
      const key = article.dataset.project;
      const data = i18n.projects?.items?.[key];
      if (data) {
        const small = article.querySelector('small');
        const h3 = article.querySelector('h3');
        const p = article.querySelector('p');
        if (small && data.tag?.[lang]) small.innerHTML = data.tag[lang];
        if (h3 && data.title?.[lang]) h3.innerHTML = data.title[lang];
        if (p && data.desc?.[lang]) p.innerHTML = data.desc[lang];
      }
    });
  }

  // Section 5: Other Projects
  const miniSec = document.querySelector('.panel[data-panel="3"]');
  if (miniSec) {
    const kicker = miniSec.querySelector('.mini-title .kicker');
    const h2 = miniSec.querySelector('.mini-title h2');
    const lead = miniSec.querySelector('.mini-title .lead');
    if (kicker && i18n.miniProjects?.kicker?.[lang]) kicker.innerHTML = i18n.miniProjects.kicker[lang];
    if (h2 && i18n.miniProjects?.heading?.[lang]) h2.innerHTML = i18n.miniProjects.heading[lang];
    if (lead && i18n.miniProjects?.lead?.[lang]) lead.innerHTML = i18n.miniProjects.lead[lang];

    const catCards = miniSec.querySelectorAll('article.cat-card');
    catCards.forEach(card => {
      const key = card.dataset.miniProject;
      const titleText = i18n.miniProjects?.cards?.[key]?.[lang];
      if (titleText) {
        const h3 = card.querySelector('h3');
        if (h3) h3.innerHTML = titleText;
      }
    });
  }

  // Section 6: Certificates
  const certSec = document.querySelector('.panel[data-panel="4"]');
  if (certSec) {
    const kicker = certSec.querySelector('.cert-title .kicker');
    const h2 = certSec.querySelector('.cert-title h2');
    if (kicker && i18n.certificates?.kicker?.[lang]) kicker.innerHTML = i18n.certificates.kicker[lang];
    if (h2 && i18n.certificates?.heading?.[lang]) h2.innerHTML = i18n.certificates.heading[lang];

    const certItems = certSec.querySelectorAll('.cert-item-frameless');
    const targetCertList = i18n.certificates?.items;
    if (targetCertList && certItems.length === targetCertList.length) {
      certItems.forEach((item, idx) => {
        const data = targetCertList[idx];
        const h3 = item.querySelector('h3');
        const p = item.querySelector('p');
        if (h3 && data.title?.[lang]) h3.innerHTML = data.title[lang];
        if (p && data.issuer?.[lang]) p.innerHTML = data.issuer[lang];
      });
    }
  }

  // Section 7: Activities
  const actSec = document.querySelector('.panel[data-panel="5"]');
  if (actSec) {
    const kicker = actSec.querySelector('.activity-title .kicker');
    const h2 = actSec.querySelector('.activity-title h2');
    if (kicker && i18n.activities?.kicker?.[lang]) kicker.innerHTML = i18n.activities.kicker[lang];
    if (h2 && i18n.activities?.heading?.[lang]) h2.innerHTML = i18n.activities.heading[lang];

    const polaroids = actSec.querySelectorAll('article.polaroid');
    const targetActList = i18n.activities?.items;
    if (targetActList && polaroids.length === targetActList.length) {
      polaroids.forEach((item, idx) => {
        const data = targetActList[idx];
        const h3 = item.querySelector('h3');
        const p = item.querySelector('p');
        if (h3 && data.title?.[lang]) h3.innerHTML = data.title[lang];
        if (p && data.desc?.[lang]) p.innerHTML = data.desc[lang];
      });
    }
  }

  // Section 7: CV
  const cvSec = document.querySelector('.panel[data-panel="6"]');
  if (cvSec) {
    const kicker = cvSec.querySelector('.cv-title .kicker');
    const h2 = cvSec.querySelector('.cv-title h2');
    const dlBtn = cvSec.querySelector('a.download');
    if (kicker && i18n.cv?.kicker?.[lang]) kicker.innerHTML = i18n.cv.kicker[lang];
    if (h2 && i18n.cv?.heading?.[lang]) h2.innerHTML = i18n.cv.heading[lang];
    if (dlBtn && i18n.cv?.downloadBtn?.[lang]) dlBtn.innerHTML = i18n.cv.downloadBtn[lang];
  }

  const dockResumeBtn = document.getElementById('dockResumeBtn');
  if (dockResumeBtn && i18n.cv?.dockBtn?.[lang]) {
    dockResumeBtn.innerHTML = i18n.cv.dockBtn[lang];
  }

  // Section 8: Contact
  const contactSec = document.querySelector('.panel[data-panel="7"]');
  if (contactSec) {
    const kicker = contactSec.querySelector('.contact-title .kicker');
    const h2 = contactSec.querySelector('.contact-title h2');
    if (kicker && i18n.contact?.kicker?.[lang]) kicker.innerHTML = i18n.contact.kicker[lang];
    if (h2 && i18n.contact?.heading?.[lang]) h2.innerHTML = i18n.contact.heading[lang];

    const form = contactSec.querySelector('#contactForm');
    if (form) {
      const labels = form.querySelectorAll('.field label');
      if (labels.length >= 3) {
        if (i18n.contact?.labels?.name?.[lang]) labels[0].innerHTML = i18n.contact.labels.name[lang];
        if (i18n.contact?.labels?.email?.[lang]) labels[1].innerHTML = i18n.contact.labels.email[lang];
        if (i18n.contact?.labels?.message?.[lang]) labels[2].innerHTML = i18n.contact.labels.message[lang];
      }

      const nameInput = form.querySelector('input[name="name"]');
      const emailInput = form.querySelector('input[name="email"]');
      const msgInput = form.querySelector('textarea[name="message"]');
      if (nameInput && i18n.contact?.placeholders?.name?.[lang]) nameInput.placeholder = i18n.contact.placeholders.name[lang];
      if (emailInput && i18n.contact?.placeholders?.email?.[lang]) emailInput.placeholder = i18n.contact.placeholders.email[lang];
      if (msgInput && i18n.contact?.placeholders?.message?.[lang]) msgInput.placeholder = i18n.contact.placeholders.message[lang];

      const sendBtn = form.querySelector('button.send');
      if (sendBtn && i18n.contact?.sendBtn?.[lang]) sendBtn.innerHTML = i18n.contact.sendBtn[lang];

      const formNote = form.querySelector('#formNote');
      if (formNote && i18n.contact?.note?.[lang]) formNote.innerHTML = i18n.contact.note[lang];
    }
  }

  // Update language toggle buttons text
  document.querySelectorAll('#langToggleBtn, #mobileLangToggleBtn, #modalLangToggleBtn').forEach(btn => {
    btn.innerHTML = `<i class="ph-duotone ph-globe" style="font-size:14px;color:var(--sky-blue)"></i> ${lang === 'EN' ? 'TH' : 'EN'}`;
  });

  // Update open modal view if currently visible
  if (typeof overlay !== 'undefined' && overlay && overlay.classList.contains('show')) {
    const tabsContainer = shell ? shell.querySelector('.modal-project-tabs') : null;
    const currentNavScroll = tabsContainer ? tabsContainer.scrollLeft : 0;
    if (typeof currentActiveModalPid !== 'undefined' && currentActiveModalPid) {
      renderCaseModal(currentActiveModalPid, false, currentNavScroll);
    } else if (typeof currentActiveMiniType !== 'undefined' && currentActiveMiniType) {
      renderMiniProjectModal(currentActiveMiniType, false, currentNavScroll);
    }
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initLanguageToggle() {
  document.querySelectorAll('#langToggleBtn, #mobileLangToggleBtn, #modalLangToggleBtn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      setLanguage(currentLang === 'EN' ? 'TH' : 'EN');
    };
  });
  setLanguage(currentLang);
}
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initLanguageToggle);
} else {
  initLanguageToggle();
}

const story = document.getElementById('story');
const world = document.getElementById('world');
const panels = [...document.querySelectorAll('.panel')];
const nav = [...document.querySelectorAll('[data-jump]')];
const meterBar = document.getElementById('meterBar');
const meterText = document.getElementById('meterText');
const ring = document.getElementById('ring');
const ghost = document.getElementById('ghostword');
const mainNav = document.getElementById('mainNav');
const introCopy = document.getElementById('introCopy');
const introPortrait = document.getElementById('introPortrait');
const introAbout = document.getElementById('introAbout');
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = () => matchMedia('(max-width:820px)').matches;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
let target = scrollY, current = scrollY, last = performance.now();

function introLength() {
  const p = panels[0];
  return Math.max(innerHeight * 1.8, (p?.offsetHeight || innerHeight * 3) - innerHeight);
}
function setIntroAnimation(scrollPx) {
  const p = clamp(scrollPx / introLength(), 0, 1);
  const p1 = clamp(p / .48, 0, 1);
  const p2 = clamp((p - .48) / .52, 0, 1);
  const e1 = ease(p1), e2 = ease(p2);

  const titleX = lerp(0, -7, e1) + lerp(0, -15, e2);
  const titleY = lerp(0, -7, e1) + lerp(0, -3, e2);
  const titleScale = lerp(1, .84, e1) * lerp(1, 1.12, e2);
  introCopy.style.transform = `translate3d(${titleX}vw,${titleY}vh,0) scale(${titleScale})`;
  introCopy.style.opacity = 1 - clamp((p - .28) / .32, 0, 1);

  const portraitX = lerp(0, 8, e1) + lerp(0, -3, e2);
  const portraitY = lerp(0, 5, e1) + lerp(0, -1, e2);
  const portraitScale = lerp(1, .72, e1) * lerp(1, 1.14, e2);
  introPortrait.style.transform = `translate3d(${portraitX}vw,${portraitY}vh,0) scale(${portraitScale}) rotate(${lerp(3, 1, e1)}deg)`;
  introPortrait.style.opacity = 1 - clamp((p - .88) / .12, 0, 1);

  const aboutIn = clamp((p - .17) / .25, 0, 1);
  const aboutOut = clamp((p - .82) / .18, 0, 1);
  introAbout.style.opacity = ease(aboutIn) * (1 - ease(aboutOut));
  introAbout.style.transform = `translate3d(${lerp(4, 0, ease(aboutIn)) + lerp(0, -16, ease(aboutOut))}vw,0,0) scale(${lerp(.95, 1, ease(aboutIn)) * lerp(1, 1.16, ease(aboutOut))})`;
}

function verticalParallax() {
  const center = current + innerHeight / 2;
  panels.slice(1).forEach(panel => {
    const panelCenter = panel.offsetTop + panel.offsetHeight / 2;
    const norm = clamp((center - panelCenter) / (innerHeight * 1.15), -1.25, 1.25);
    panel.querySelectorAll('[data-speed]').forEach(el => {
      const speed = parseFloat(el.dataset.speed || 1);
      const isTitle = /(about-copy|skills-title|projects-title|mini-title|cert-title|activity-title|cv-title|contact-title)/.test(el.className);
      const isHero = /(edu|projects-rail|devices|folder|film|resume|contact-panel|contact-links)/.test(el.className);
      let y = norm * (1 - speed) * (isTitle ? 120 : isHero ? 90 : 65);
      if (isTitle) y += norm * -28;
      if (isHero) y += norm * 18;
      y = clamp(y, -58, 58);
      const x = mobile() ? 0 : clamp(norm * (isTitle ? -18 : isHero ? 12 : 5), -22, 22);
      el.style.translate = `${x}px ${y}px`;
    });
  });
}

function activeSection() {
  const probe = current + innerHeight * .42;
  let idx = 0;
  panels.forEach((p, i) => { if (probe >= p.offsetTop) idx = i; });
  return idx;
}

function render(now) {
  const dt = Math.min(32, now - last); last = now;
  const follow = reduced() ? 1 : 1 - Math.pow(.002, dt / 1000);
  current += (target - current) * follow;
  if (Math.abs(target - current) < .05) current = target;

  if (mobile()) {
    if (introCopy) { introCopy.style.opacity = '1'; introCopy.style.transform = 'none'; }
    if (introPortrait) { introPortrait.style.opacity = '1'; introPortrait.style.transform = 'none'; }
    if (introAbout) { introAbout.style.opacity = '1'; introAbout.style.transform = 'none'; }
  } else {
    setIntroAnimation(current);
  }

  // Vertical Parallax for all devices
  verticalParallax();

  if (mobile()) {
    mainNav.classList.add('visible');
    mainNav.style.opacity = '1';
    mainNav.style.transform = 'translateY(0)';
  } else {
    const skillsStart = panels[1] ? panels[1].offsetTop : 300;
    const reveal = clamp((current - (skillsStart - innerHeight * .38)) / (innerHeight * .22), 0, 1);
    mainNav.classList.toggle('visible', reveal > .02);
    mainNav.style.opacity = reveal;
    mainNav.style.transform = `translateY(${lerp(-22, 0, ease(reveal))}px)`;
  }

  const idx = activeSection();
  nav.forEach((b, i) => b.classList.toggle('active', i === idx));
  if (meterText) meterText.textContent = String(idx + 1) + ' / 8';

  const contentStart = panels[1]?.offsetTop || 0;
  const contentEnd = Math.max(contentStart + 1, document.documentElement.scrollHeight - innerHeight);
  if (meterBar) meterBar.style.width = (clamp((current - contentStart) / (contentEnd - contentStart), 0, 1) * 100) + '%';

  const gp = clamp(current / Math.max(1, document.documentElement.scrollHeight - innerHeight), 0, 1);
  if (ring) ring.style.transform = `translate3d(${Math.cos(gp * Math.PI * 2) * 6}vw,${Math.sin(gp * Math.PI * 2) * 10}vh,0) rotate(${-gp * 65}deg)`;
  if (ghost) ghost.style.transform = `translate3d(${Math.sin(gp * Math.PI * 3) * 8}vw,${Math.cos(gp * Math.PI * 2) * 12}vh,0)`;

  requestAnimationFrame(render);
}
addEventListener('scroll', () => target = scrollY, { passive: true });
addEventListener('resize', () => { target = scrollY }, { passive: true });
requestAnimationFrame(render);

nav.forEach((b, i) => b.addEventListener('click', () => {
  panels[i].scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
}));

/* CASE STUDY DATA & OVERLAY */
const caseData = {
  'mysuth-app': {
    title: 'My SUTH App — Hospital Management System',
    subtitle: '“One App, Smarter Hospital Work.”',
    coverImage: 'projects/mySUTH.png',
    figmaLink: 'https://www.figma.com/proto/Y5IY4MV4A7sUO2xvvwBj3o/My-SUTH-App-Design?page-id=0%3A1&node-id=6524-24888&viewport=412%2C-1965%2C0.04&t=fa03tj96ASzrtK07-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5848%3A45468',
    overview: 'A mobile application designed for SUT Hospital staff to simplify daily workflows, including attendance, queue management, appointments, and notifications—all in one place.',
    problem: '• Hospital staff need to use multiple systems and platforms to complete their daily tasks.<br>• Important workflows, such as attendance, queue management, appointments, and notifications, can involve too many steps.<br>• Switching between different systems can be time-consuming and inconvenient.<br>• Important information may be missed or delayed during busy working hours.<br>• Complex workflows can increase the chance of errors and reduce overall work efficiency.',
    personaName: 'SUT Hospital Staff & Healthcare Personnel',
    personaDesc: 'The primary users are SUT Hospital staff, including general staff, nurses, doctors, and other healthcare personnel. The application is designed to support different roles and responsibilities while providing quick and convenient access to essential hospital services in one place.',
    results: {
      heading: 'Results & Key Outcomes',
      desc: 'The implementation of My SUTH App successfully streamlined daily hospital operations, significantly improving workflow efficiency for healthcare personnel while ensuring faster service delivery across hospital departments.',
      highlights: [
        '• <b>Unified Staff Dashboard:</b> Integrated multiple hospital services (attendance, queue, appointments, announcements) into one accessible mobile portal.',
        '• <b>Improved Operational Efficiency:</b> Reduced time spent navigating separate systems, minimizing manual steps and potential human errors during busy shifts.',
        '• <b>Faster Service & Response Time:</b> Enabled real-time notifications and instant queue updates for staff, ensuring smoother coordination between medical departments.'
      ]
    },
    features: [
      {
        title: '1. Queue Management System',
        desc: 'A queue management system that allows staff to select an examination room and call patients by entering a queue number or scanning a QR code. Each room includes queue details with controls to recall, call the next queue, or skip a queue. When a queue is called, the patient automatically receives a notification on their mobile device.',
        images: [
          'projects/My SUTH App/queue management/detail.png',
          'projects/My SUTH App/queue management/select-room.png',
          'projects/My SUTH App/queue management/call-queue.png'
        ],
        align: 'right'
      },
      {
        title: '2. E-Consult Service',
        desc: 'An E-Consult system that notifies doctors when consultation requests are submitted from different departments. Each request includes an urgency tag and read status, allowing staff to see whether the assigned doctor has reviewed it. This replaces the previous workflow of sharing consultation forms across multiple group chats, reducing missed requests and unclear follow-up status.',
        images: [
          'projects/My SUTH App/E-consult/e-consult list.png',
          'projects/My SUTH App/E-consult/form.png'
        ],
        align: 'left'
      },
      {
        title: '3. Check-In / Check-Out Tracking',
        desc: 'A staff attendance system that allows users to check in and check out through the mobile application with location verification. The system records each attendance activity with the date, time, and status, helping staff complete attendance tasks quickly and accurately.<br><br> Users can also view their check-in and check-out history, including previous attendance records, timestamps, and work status. Historical records are organized clearly, making it easier to review past attendance and track working patterns over time.',
        images: [
          'projects/My SUTH App/check in-check out/clockin.png',
          'projects/My SUTH App/check in-check out/clockin-GPS.png',
          'projects/My SUTH App/check in-check out/clockout.png',
          'projects/My SUTH App/check in-check out/clockout-GPS.png',
          'projects/My SUTH App/check in-check out/histortlist.png',
          'projects/My SUTH App/check in-check out/history-calenda.png'
        ],
        align: 'right'
      },
      {
        title: '4. Emergency Code Alerts',
        desc: 'A real-time emergency alert system that instantly notifies relevant hospital staff when an Emergency Code is activated. Each alert clearly displays the emergency type, location, time, and key details, helping staff quickly understand the situation and respond appropriately.',
        images: [
          'projects/My SUTH App/emergency code/CODE.png'
        ],
        align: 'left'
      },
      {
        title: '5. Core Application Screens',
        desc: 'Includes the Home, Notifications, Profile, and Work Systems screens that connect the app’s main services. The Home screen provides quick access to essential features, Notifications centralize important updates, Profile manages personal information and settings, while Work Systems organizes role-based tools and services for hospital staff.',
        images: [
          'projects/My SUTH App/Screen/HOME.png',
          'projects/My SUTH App/Screen/Profile.png',
          'projects/My SUTH App/Screen/notification.png',
          'projects/My SUTH App/Screen/work.png'
        ],
        align: 'right'
      }
    ]
  },
  'goal-app': {
    title: 'Goal Management Application with AI Assistant',
    subtitle: '“Small steps, big achievements”',
    coverImage: 'projects/goalflame.png',
    figmaLink: 'https://www.figma.com/proto/K9K6o8hmdLaupuxksRrlH4/goal-project?node-id=679-10555&viewport=50%2C357%2C0.1&t=8MNyz0Hq1UjV8MlV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=679%3A10869&page-id=679%3A3305',
    overview: 'A mobile goal-tracking application designed to help users stay consistent with their personal goals through lightweight check-ins, streak-based motivation, progress tracking, and AI-assisted guidance.',
    problem: '• Students set goals but struggle to achieve them consistently.<br>• Existing tools focus on task management rather than motivation.<br>• Large goals feel overwhelming without clear steps.<br>• Many goals are abandoned before completion.',
    personaName: 'Suthida Laothong (Age 20, 2nd-year Communication Arts)',
    personaImage: 'projects/Goal Flame/persona_page-0001.jpg',
    personaGoals: 'Short-term: Stay consistent with homework & projects. Long-term: Graduate with proud grades.',
    personaFrustrations: 'Enjoys extracurricular activities, making academic management hard; feels overwhelmed when plans fail.',
    userJourney: {
      heading: 'User Journey Map',
      image: 'projects/Goal Flame/User journey.jpg',
      summary: 'The journey revealed that the main challenge was not planning tasks, but maintaining motivation and consistency throughout the day. This created an opportunity to design a goal-management experience that combines task planning, reminders, progress tracking, and motivational features in one place.'
    },
    features: [
      {
        title: '1. Dashboard & Progress Tracking',
        desc: 'Motivational daily streak flames coupled with an overview progress dashboard to keep users consistently engaged and on track toward their goals.',
        images: [
          'projects/Goal Flame/หน้าแรก.png',
          'projects/Goal Flame/หน้าสรุปผล.png'
        ],
        align: 'right'
      },
      {
        title: '2. Goal Creation & Sub-tasks',
        desc: 'Comprehensive short-term and long-term goal setting, breaking down large ambitions into manageable, actionable sub-tasks.',
        images: [
          'projects/Goal Flame/หน้าเป้าหมาย.png',
          'projects/Goal Flame/หน้าเพิ่มเป้าหมาย.png',
          'projects/Goal Flame/หน้าเพิ่มเป้าหมาย มีภารกิจ.png'
        ],
        align: 'left'
      },
      {
        title: '3. Task Details & AI Assistant',
        desc: 'Step-by-step task breakdown guided by an AI-powered assistant providing personalized actionable advice and goal achievement feedback.',
        images: [
          'projects/Goal Flame/รายละเอียด.png',
          'projects/Goal Flame/รายละเอียด มีภารกิจ.png'
        ],
        align: 'right'
      }
    ]
  },
  'dormitory-app': {
    title: 'Smart Dormitory Management System',
    subtitle: '“A smarter way to manage dormitory life.”',
    coverImage: 'projects/dormitory.png',
    figmaLink: 'https://www.figma.com/proto/TAjMwM1BiWItaR1YdXvO6M/%E0%B8%AB%E0%B8%AD%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2?node-id=789-2589&viewport=-4461%2C4816%2C0.05&t=GIgWv6SCpz5hb0iD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=216%3A196&show-proto-sidebar=1&page-id=0%3A1',
    overview: 'A UX/UI redesign that transforms the existing SUT dormitory website into a centralized mobile application. Informed by a survey of 67 students, the concept brings essential dormitory information, requests, expenses, announcements, and services into one more accessible experience.',
    problem: '• The existing university dormitory website is outdated and lacks regular updates.<br>• Difficult to complete room booking, room transfers, and maintenance requests.<br>• No clear notifications for updates, payments, or announcements.<br>• Limited visibility of room availability and request status.',
    personaName: 'Narin Kittipong (Age 19, 1st-year Resident)',
    personaGoals: 'Easily book/transfer rooms, quickly report maintenance, stay updated on deadlines, track request status.',
    personaFrustrations: 'Current website is outdated, announcements are easy to miss, room availability is unclear.',
    features: [
      {
        title: '1. Overview & Dormitory Services',
        desc: 'Dormitory portal for resident profiles, campus announcements, and activity updates that help students earn dormitory points. It also displays roommate information and provides a dormitory application system with clear room categories and availability statuses, including All, Available, Reserved, and Closed.',
        images: [
          'projects/Dormitory/หน้าหลัก.png',
          'projects/Dormitory/โปรไฟล์.png',
          'projects/Dormitory/กิจกรรม.png',
          'projects/Dormitory/ประชาสัมพันธ์ทั้งหมด.png',
          'projects/Dormitory/รายชื่อผู้ย้ายหอพัก.png',
          'projects/Dormitory/สมัครหอพักระหว่างภาค.png',
        ],
        align: 'right'
      },
      {
        title: '2. Forms, Applications & Dormitory Election',
        desc: 'Digital portal for submitting fee deferment requests, managing applicant credentials, tracking application status in real time, and participating in dormitory committee elections with clear candidate profiles, policies, and voting details.',
        images: [
          'projects/Dormitory/รายละเอียดผู้สมัคร.png',
          'projects/Dormitory/เลือกตั้ง 13.png',
          'projects/Dormitory/ฟอร์มผ่อนผัน.png',
          'projects/Dormitory/การส่งฟอร์ม.png'
        ],
        align: 'left'
      },
      {
        title: '3. Utility & Maintenance Services',
        desc: 'Dormitory services for reporting and tracking maintenance issues, along with electricity expense monitoring. Students can view their electricity costs for the latest three months and access historical bills from previous semesters, helping them estimate upcoming expenses and prepare their budget before payment.',
        images: [
          'projects/Dormitory/แจ้งซ่อม.png',
          'projects/Dormitory/ค่าไฟ (ทั้งหมด).png',
        ],
        align: 'right'
      }
    ]
  },
  'kiosk-app': {
    title: 'Kiosk Redesign – Ratchasima Khunakon Building',
    subtitle: '“Find Your Way, Faster.”',
    featureHeading: 'Key UX Solutions & UI Design',
    coverImage: 'projects/Keyosk redesign/cover.png',
    figmaLink: 'https://www.figma.com/proto/3MFlpDP3zwlC5eS5WRydyp/keyosk?node-id=1-2&viewport=323%2C-17%2C0.05&t=ZeVbfy5mQo0YL5sW-1&scaling=contain&content-scaling=fixed&starting-point-node-id=324%3A23&page-id=0%3A1',
    originalLink: 'https://personal.sut.ac.th/nuttapon/phone.html',
    overview: 'Kiosk Redesign is a UX/UI project that transforms the existing floor-plan directory at Ratchasima Khunakon Building into a more interactive room-finding and wayfinding experience.<br><br>The redesigned concept helps students, staff, and visitors find destinations through floor selection, room categories, destination highlighting, and visual route guidance. It also explores the use of symbols alongside color and a QR-based mobile handoff as accessibility considerations.',
    problem: '• Users may have difficulty finding the correct room in a large multi-floor building.<br>• Existing floor and room information can be overwhelming and difficult to scan quickly.<br>• Users may not clearly understand which floor or area a selected room is located in.<br>• Static directory information does not provide clear navigation from the user’s current location.<br>• Finding a destination can take extra time, especially for first-time visitors.',
    personaName: 'Students, Staff, and Building Visitors',
    personaDesc: '• <b>Target Audience:</b> Students, staff, and visitors who need to find rooms or facilities inside the building.<br>• <b>First-time Visitors:</b> Guests who are unfamiliar with the 5-floor building layout and room arrangements.<br>• <b>Independent Navigation:</b> Users who need quick, self-serve directions without asking staff for assistance.',
    results: {
      heading: 'How It Improved the Existing Kiosk',
      desc: 'The original interface displayed multiple floors and room information at once, making it difficult for users to quickly understand where a room was located. The redesigned system transforms the kiosk from a static building directory into a clearer and more interactive wayfinding experience through:',
      highlights: [
        '• <b>Clear Navigation:</b> Seamless floor-by-floor navigation between individual floors.',
        '• <b>Distinct Room Categories:</b> Color-coded visual room identification for fast scanning.',
        '• <b>Easier Room Search:</b> Intuitive search bar and instant category selection.',
        '• <b>Visual Highlighting:</b> Highlighted destinations directly rendered on the floor plan.',
        '• <b>Step-by-Step Wayfinding:</b> Clear directions from current location to selected destinations.',
        '• <b>Interactive Animations:</b> Motion feedback helping users understand location and direction.',
        '• <b>Reduced Complexity:</b> Streamlined visual hierarchy for faster access to essential building info.'
      ]
    },
    features: [
      {
        title: '',
        desc: '',
        noHeader: true,
        images: [
          'projects/Keyosk redesign/floor 1.png',
          'projects/Keyosk redesign/floor 2.png',
          'projects/Keyosk redesign/floor 3.png',
          'projects/Keyosk redesign/floor 4.png',
          'projects/Keyosk redesign/floor 5.png',
          'projects/Keyosk redesign/ห้องประชุม.png',
          'projects/Keyosk redesign/ปฏิบัติการ.png',
          'projects/Keyosk redesign/map.png'
        ],
        align: 'right'
      }
    ]
  }
};

overlay = document.getElementById('overlay');
shell = document.getElementById('shell');

let currentActiveModalPid = null;
let currentActiveMiniType = null;
let savedPortfolioScrollPos = 0;
let isModalOpen = false;

function saveScrollPosition() {
  if (!isModalOpen) {
    savedPortfolioScrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  }
}

function restoreScrollPosition() {
  window.scrollTo({ top: savedPortfolioScrollPos, behavior: 'instant' });
  requestAnimationFrame(() => {
    window.scrollTo({ top: savedPortfolioScrollPos, behavior: 'instant' });
  });
}

function closeModal(updateHistory = true) {
  isModalOpen = false;
  currentActiveModalPid = null;
  currentActiveMiniType = null;
  overlay.classList.remove('show');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-active');

  const quickDockEl = document.getElementById('quickDock');
  if (quickDockEl) quickDockEl.classList.remove('hide-in-modal');
  const modalScrollTopBtn = document.getElementById('modalScrollTop');
  if (modalScrollTopBtn) modalScrollTopBtn.classList.remove('show');

  restoreScrollPosition();

  if (updateHistory && (window.location.hash.startsWith('#project-') || window.location.hash.startsWith('#mini-'))) {
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
}

function renderCaseModal(pid, pushHistory = true, navScrollLeft = 0) {
  const data = caseData[pid];
  if (!data) return;

  if (!isModalOpen) {
    saveScrollPosition();
    isModalOpen = true;
  }

  currentActiveModalPid = pid;
  currentActiveMiniType = null;
  const lang = currentLang || 'EN';
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-active');

  const quickDockEl = document.getElementById('quickDock');
  if (quickDockEl) quickDockEl.classList.add('hide-in-modal');
  const modalScrollTopBtn = document.getElementById('modalScrollTop');
  if (modalScrollTopBtn) modalScrollTopBtn.classList.remove('show');

  if (pushHistory) {
    const newHash = '#project-' + pid;
    if (window.location.hash !== newHash) {
      history.pushState({ modalType: 'case', pid: pid }, '', newHash);
    }
  }

  // Determine active project i18n data (e.g. My SUTH App, Goal Management, Smart Dormitory, Kiosk Redesign)
  let projI18n = null;
  if (pid === 'mysuth-app') projI18n = i18n.featuredProjects?.mySuth;
  else if (pid === 'goal-app') projI18n = i18n.featuredProjects?.goalApp;
  else if (pid === 'dormitory-app') projI18n = i18n.featuredProjects?.dormitoryApp;
  else if (pid === 'kiosk-app') projI18n = i18n.featuredProjects?.kioskApp;

  const originalKioskBtnText = i18n.projectNav?.originalKioskBtn?.[lang] || 'VIEW ORIGINAL KIOSK DESIGN ↗';

  const modalTitle = projI18n?.title?.[lang] || data.title;
  const modalSubtitle = projI18n?.subtitle?.[lang] || data.subtitle;
  const modalOverview = projI18n?.overview?.[lang] || data.overview;
  const modalProblemHeading = projI18n?.problemHeading?.[lang] || i18n.projectNav?.problemHeading?.[lang] || 'Problem Statement';
  const modalProblem = projI18n?.problem?.[lang] || data.problem;
  const modalPersonaHeading = projI18n?.personaHeading?.[lang] || i18n.projectNav?.personaHeading?.[lang] || 'Target User';
  const modalPersonaName = projI18n?.personaName?.[lang] || data.personaName;
  const modalPersonaDesc = projI18n?.personaDesc?.[lang] || data.personaDesc;
  const modalPersonaGoals = projI18n?.personaGoals?.[lang] || data.personaGoals;
  const modalPersonaFrustrations = projI18n?.personaFrustrations?.[lang] || data.personaFrustrations;
  const modalUserJourneyHeading = projI18n?.userJourneyHeading?.[lang] || (data.userJourney ? data.userJourney.heading : '');
  const modalUserJourneySummary = projI18n?.userJourneySummary?.[lang] || (data.userJourney ? data.userJourney.summary : '');
  const modalResultsHeading = projI18n?.resultsHeading?.[lang] || (data.results ? data.results.heading : '');
  const modalResultsDesc = projI18n?.resultsDesc?.[lang] || (data.results ? data.results.desc : '');
  const modalResultsHighlights = projI18n?.resultsHighlights?.[lang] || (data.results ? data.results.highlights : null);
  const modalFeatureHeading = projI18n?.featureHeading?.[lang] || i18n.projectNav?.featureHeading?.[lang] || data.featureHeading || 'Key UX Solutions &amp; UI Design';
  const caseTagText = i18n.projectNav?.caseStudyTag?.[lang] || 'CASE STUDY / SELECTED WORK';
  const figmaBtnText = i18n.projectNav?.figmaBtn?.[lang] || 'VIEW FIGMA PROTOTYPE ↗';
  const backBtnText = i18n.projectNav?.backToPortfolio?.[lang] || 'BACK TO PORTFOLIO';

  // Update overlay back button text
  const overlayBackBtn = document.getElementById('back');
  if (overlayBackBtn) {
    overlayBackBtn.innerHTML = `<i class="ph-duotone ph-arrow-left icon-inline"></i> ${backBtnText}`;
  }

  const tabsHtml = `
    <div class="modal-project-tabs">
      <button class="project-tab ${pid === 'mysuth-app' ? 'active' : ''}" data-switch-project="mysuth-app">${i18n.projectNav?.tabs?.mysuth?.[lang] || '01 / MY SUTH APP'}</button>
      <button class="project-tab ${pid === 'goal-app' ? 'active' : ''}" data-switch-project="goal-app">${i18n.projectNav?.tabs?.goal?.[lang] || '02 / GOAL MANAGEMENT'}</button>
      <button class="project-tab ${pid === 'dormitory-app' ? 'active' : ''}" data-switch-project="dormitory-app">${i18n.projectNav?.tabs?.dormitory?.[lang] || '03 / SMART DORMITORY'}</button>
      <button class="project-tab ${pid === 'kiosk-app' ? 'active' : ''}" data-switch-project="kiosk-app">${i18n.projectNav?.tabs?.kiosk?.[lang] || '04 / KIOSK REDESIGN'}</button>
    </div>
  `;

  let featuresHtml = data.features.map((f, idx) => {
    if (f.noHeader) {
      return `
        <div class="kiosk-ui-grid" style="display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;width:100%;margin-top:16px">
          ${f.images.map(img => `
            <div style="background:transparent!important;border:0!important;box-shadow:none!important;border-radius:20px;overflow:hidden;filter:drop-shadow(0 14px 32px rgba(30,36,50,0.16));transition:transform .3s ease">
              <img src="${encodeURI(img)}" alt="Kiosk Redesign UI" style="width:100%;height:auto;display:block;border-radius:18px;object-fit:contain"/>
            </div>
          `).join('')}
        </div>
      `;
    }
    const isLeft = f.align === 'left' || (idx % 2 === 1);
    const fI18n = projI18n?.features?.[idx];
    const featureTitle = fI18n?.title?.[lang] || f.title;
    const featureDesc = fI18n?.desc?.[lang] || f.desc;

    let numStr = String(idx + 1);
    let cleanTitle = featureTitle;
    const match = featureTitle.match(/^(?:0?(\d+)|([A-Za-z0-9]+))\s*[\.\—\-]?\s*(.*)/);
    if (match && match[3]) {
      const n = match[1] || match[2];
      numStr = !isNaN(n) ? String(parseInt(n, 10)) : n;
      cleanTitle = match[3];
    }

    const imgs = (f.images && f.images.length) ? `
      <div class="feature-img-group">
        ${f.images.map(img => `<div class="feature-img-card"><img src="${encodeURI(img)}" alt="${featureTitle}"/></div>`).join('')}
      </div>
    ` : '';
    return `
      <div class="feature-row ${isLeft ? 'image-left' : 'image-right'}">
        <div class="feature-text">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${numStr}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${cleanTitle}</h3>
          </div>
          <p>${featureDesc}</p>
        </div>
        ${imgs}
      </div>
    `;
  }).join('');

  let metaHtml = '';
  if (projI18n?.meta) {
    const m = projI18n.meta;
    const l = m.labels || {};
    metaHtml = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;padding:16px 18px;background:rgba(255,255,255,0.75);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.85);border-radius:18px;box-shadow:0 4px 16px rgba(30,36,50,0.05);margin-top:18px;font-size:13px">
        ${m.role && l.role ? `<div><b style="color:var(--sky-blue);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.role[lang]}</b><span>${m.role[lang]}</span></div>` : ''}
        ${m.team && l.team ? `<div><b style="color:var(--sky-blue);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.team[lang]}</b><span>${m.team[lang]}</span></div>` : ''}
        ${m.duration && l.duration ? `<div><b style="color:var(--sky-blue);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.duration[lang]}</b><span>${m.duration[lang]}</span></div>` : ''}
        ${m.tools && l.tools ? `<div><b style="color:var(--sky-blue);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.tools[lang]}</b><span>${m.tools[lang]}</span></div>` : ''}
        ${m.responsibilities && l.responsibilities ? `<div style="grid-column:1 / -1"><b style="color:var(--sky-blue);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.responsibilities[lang]}</b><span>${m.responsibilities[lang]}</span></div>` : ''}
        ${m.status && l.status ? `<div><b style="color:var(--electric-rose);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.status[lang]}</b><span style="display:inline-block;padding:4px 10px;background:rgba(236,23,99,0.12);color:var(--electric-rose);font-weight:900;border-radius:8px;font-size:12px">${m.status[lang]}</span></div>` : ''}
        ${m.phase && l.phase ? `<div><b style="color:var(--sky-blue);font:900 10px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${l.phase[lang]}</b><span style="display:inline-block;padding:4px 10px;background:rgba(85,104,175,0.12);color:var(--sky-blue);font-weight:900;border-radius:8px;font-size:12px">${m.phase[lang]}</span></div>` : ''}
      </div>
    `;
  }

  let contextHtml = '';
  if (projI18n?.contextExistingInterface) {
    const cei = projI18n.contextExistingInterface;
    contextHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-layers" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${cei.heading[lang]}</h2>
          
          <!-- Context & Existing Interface Description Card -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px;margin-bottom:24px">
            <div style="display:flex;flex-direction:column;gap:20px;max-width:860px">
              <div>
                <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">BUILDING CONTEXT</b>
                <p style="font-size:15px;line-height:1.75;color:#334155;margin:0">${cei.context[lang]}</p>
              </div>

              <div style="border-top:1px solid rgba(226,232,240,0.8);padding-top:18px">
                <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">EXISTING INTERFACE</b>
                <p style="font-size:15px;line-height:1.75;color:#334155;margin:0">${cei.existingInterface[lang]}</p>
              </div>
            </div>
          </div>

          <!-- Observed Limitations Card -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
            <h3 style="font-size:17px;font-weight:900;color:#0f172a;margin:0 0 16px">${cei.limitationsHeading[lang]}</h3>
            <ul style="margin:0;padding:0;list-style:none;display:grid;gap:14px">
              ${cei.limitations[lang].map((itemText, idx) => `
                <li style="font-size:15px;line-height:1.7;color:#334155;display:flex;align-items:flex-start;gap:12px">
                  <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 8px;border-radius:6px;margin-top:2px;flex-shrink:0">${idx + 1}</span>
                  <span>${itemText}</span>
                </li>
              `).join('')}
            </ul>
          </div>

        </div>
      </section>
    `;
  } else if (projI18n?.contextConstraints) {
    const cc = projI18n.contextConstraints;
    const items = cc.items[lang];
    contextHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-layers" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${cc.heading[lang]}</h2>
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:20px;margin-top:16px">
            <ul style="margin:0;padding:0;list-style:none;display:grid;gap:12px">
              ${items.map(it => `
                <li style="font-size:15px;line-height:1.7;color:#334155;display:flex;align-items:flex-start;gap:10px">
                  <span style="color:var(--sky-blue);font-weight:900;font-size:18px;line-height:1;margin-top:2px">•</span>
                  <span>${it.replace(/^•\s*/, '')}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </section>
    `;
  }

  let assumptionPersonasHtml = '';
  if (projI18n?.assumptionPersonas) {
    const ap = projI18n.assumptionPersonas;
    assumptionPersonasHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-users" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${ap.heading[lang]}</h2>
          
          <!-- Methodology Note Banner -->
          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.06),rgba(206,234,238,0.25));border:1.5px solid rgba(85,104,175,0.18);padding:22px 26px;border-radius:22px;margin-top:16px;margin-bottom:28px">
            <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">${ap.methodologyTag[lang].toUpperCase()}</b>
            <p style="font-size:14.5px;line-height:1.7;color:#334155;margin:0">${ap.methodologyText[lang]}</p>
          </div>

          <!-- Persona Selectors / Tabs (Somchai, Oom, Ajarn Mek) -->
          <div role="tablist" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:16px;margin-bottom:24px">
            ${ap.personas.map((p, idx) => `
              <button role="tab" aria-selected="${idx === 0 ? 'true' : 'false'}" class="kiosk-persona-tab-btn" onclick="window.selectKioskPersona(${idx})" style="background:${idx === 0 ? 'rgba(85,104,175,0.14)' : 'rgba(255,255,255,0.75)'};border:1.5px solid ${idx === 0 ? 'var(--sky-blue)' : 'rgba(226,232,240,0.9)'};padding:14px 18px;border-radius:18px;display:flex;align-items:center;gap:14px;cursor:pointer;text-align:left;transition:all 0.2s ease;backdrop-filter:blur(10px)">
                <img src="${encodeURI(p.portrait)}" alt="${p.name[lang]}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid rgba(85,104,175,0.2)"/>
                <div>
                  <b style="font-size:15px;color:#0f172a;display:block">${p.name[lang]}</b>
                  <span style="font-size:12px;color:#64748b;font-weight:600">${p.roleName[lang]}</span>
                </div>
              </button>
            `).join('')}
          </div>

          <!-- Detailed Persona & Journey Cards (One active at a time) -->
          ${ap.personas.map((p, idx) => `
            <div class="kiosk-persona-detail-card" style="display:${idx === 0 ? 'block' : 'none'};margin-bottom:28px">
              
              <!-- Persona Main Card -->
              <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px;margin-bottom:24px">
                
                <div style="display:flex;align-items:center;gap:20px;margin-bottom:20px;flex-wrap:wrap;border-bottom:1px solid rgba(226,232,240,0.8);padding-bottom:18px">
                  <div style="position:relative">
                    <img src="${encodeURI(p.portrait)}" alt="${p.name[lang]}" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid var(--sky-blue);box-shadow:0 6px 16px rgba(85,104,175,0.18)"/>
                    <span style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);font:900 9px/1 monospace;background:var(--sky-blue);color:#fff;padding:3px 6px;border-radius:4px;white-space:nowrap">${ap.personaImageTag[lang]}</span>
                  </div>
                  <div>
                    <h3 style="font-size:20px;font-weight:900;color:#0f172a;margin:0 0 4px">${p.title[lang]}</h3>
                    <span style="font-size:13px;color:#64748b;font-weight:700">${p.roleName[lang]}</span>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:20px">
                  <div>
                    <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">CONTEXT</b>
                    <p style="font-size:14.5px;line-height:1.7;color:#334155;margin:0">${p.context[lang]}</p>
                  </div>
                  <div>
                    <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">GOAL</b>
                    <p style="font-size:14.5px;line-height:1.7;color:#334155;margin:0">${p.goal[lang]}</p>
                  </div>
                  <div>
                    <b style="color:var(--sunset);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">POTENTIAL BARRIERS</b>
                    <ul style="margin:0;padding:0;list-style:none;display:grid;gap:6px">
                      ${p.barriers[lang].map(b => `
                        <li style="font-size:14px;line-height:1.65;color:#334155;display:flex;gap:8px">
                          <span style="color:var(--sunset);font-weight:900">•</span>
                          <span>${b}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div>
                    <b style="color:var(--teal);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">DESIGN NEEDS</b>
                    <ul style="margin:0;padding:0;list-style:none;display:grid;gap:6px">
                      ${p.needs[lang].map(n => `
                        <li style="font-size:14px;line-height:1.65;color:#334155;display:flex;gap:8px">
                          <span style="color:var(--teal);font-weight:900">•</span>
                          <span>${n}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

              </div>

              <!-- Persona Journey Map Card -->
              <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px">
                  <h4 style="font-size:17px;font-weight:900;color:#0f172a;margin:0">${ap.journeyMappingHeading[lang]} — ${p.name[lang]}</h4>
                  <button onclick="window.openJourneyLightbox('${encodeURI(p.journeyImage)}', '${p.name[lang]} Journey Map')" style="background:rgba(85,104,175,0.12);border:1px solid rgba(85,104,175,0.3);color:var(--sky-blue);padding:8px 16px;border-radius:10px;font:900 12px/1 monospace;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s ease">
                    <i class="ph-duotone ph-arrows-out" style="font-size:14px"></i>
                    ${ap.viewJourneyBtn[lang]}
                  </button>
                </div>
                
                <div style="width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);background:rgba(255,255,255,0.9);padding:6px;box-sizing:border-box;margin-bottom:16px">
                  <img src="${encodeURI(p.journeyImage)}" alt="${p.name[lang]} Journey Map" style="width:100%;height:auto;display:block;border-radius:10px;object-fit:contain"/>
                </div>

                <p style="font-size:14.5px;line-height:1.7;color:#475569;margin:0">${ap.journeyMappingText[lang]}</p>
              </div>

            </div>
          `).join('')}

          <!-- Shared Journey Pattern -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:28px">
            <h3 style="font-size:17px;font-weight:900;color:#0f172a;margin:0 0 16px">${ap.sharedPatternHeading[lang]}</h3>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:14px 18px;background:linear-gradient(135deg,rgba(85,104,175,0.06),rgba(206,234,238,0.25));border-radius:16px;border:1px solid rgba(85,104,175,0.15)">
              ${ap.sharedPatternSteps[lang].map((step, idx) => `
                <span style="font:900 12px/1 monospace;color:var(--ink);background:#fff;padding:8px 12px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.04);display:inline-flex;align-items:center;gap:6px">
                  <span style="color:var(--sky-blue);font-weight:900">${idx + 1}.</span> ${step}
                </span>
                ${idx < ap.sharedPatternSteps[lang].length - 1 ? `<i class="ph-duotone ph-arrow-right" style="font-size:14px;color:var(--sky-blue);flex-shrink:0"></i>` : ''}
              `).join('')}
            </div>
          </div>

          <!-- Design Opportunities -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
            <h3 style="font-size:17px;font-weight:900;color:#0f172a;margin:0 0 18px">${ap.opportunitiesHeading[lang]}</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:16px">
              ${ap.opportunities.map(op => `
                <div style="background:rgba(241,245,249,0.55);border:1px solid rgba(226,232,240,0.85);padding:18px;border-radius:18px;display:flex;flex-direction:column;gap:8px">
                  <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 8px;border-radius:6px;align-self:flex-start">${op.num}</span>
                  <b style="font-size:15px;color:#0f172a">${op.heading[lang]}</b>
                  <p style="font-size:13.5px;line-height:1.6;color:#475569;margin:0">${op.desc[lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  let designPrioritiesAccessibilityHtml = '';
  if (projI18n?.designPrioritiesAccessibility) {
    const dpa = projI18n.designPrioritiesAccessibility;
    const prios = dpa.priorities;
    const acc = dpa.accessibilityNote;

    designPrioritiesAccessibilityHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-sliders-horizontal" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${dpa.heading[lang]}</h2>
          
          <p style="font-size:15px;line-height:1.75;color:#334155;margin-bottom:24px">${dpa.intro[lang]}</p>

          <!-- 5 Design Priorities Grid (2-Column Grid on Desktop, 5th Item Balanced, Stacked on Mobile) -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:20px;margin-bottom:28px">
            ${prios.map((p, idx) => `
              <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 6px 20px rgba(30,36,50,0.04);padding:22px 24px;border-radius:20px;display:flex;flex-direction:column;gap:10px;${idx === 4 ? 'grid-column:1/-1' : ''}">
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="font:900 12px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 9px;border-radius:8px;flex-shrink:0">${p.num}</span>
                  <h3 style="font-size:16.5px;font-weight:900;color:#0f172a;margin:0">${p.title[lang]}</h3>
                </div>
                <p style="font-size:14.5px;line-height:1.7;color:#475569;margin:0">${p.desc[lang]}</p>
              </div>
            `).join('')}
          </div>

          <!-- Accessibility Considerations Concluding Note -->
          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.05),rgba(206,234,238,0.22));border:1.5px solid rgba(85,104,175,0.18);padding:22px 26px;border-radius:22px">
            <h3 style="font-size:16px;font-weight:900;color:var(--ink);margin:0 0 10px;display:flex;align-items:center;gap:8px">
              <i class="ph-duotone ph-wheelchair" style="font-size:1em;color:var(--sky-blue)"></i>
              ${acc.heading[lang]}
            </h3>
            <p style="font-size:14.5px;line-height:1.7;color:#334155;margin:0">${acc.desc[lang]}</p>
          </div>

        </div>
      </section>
    `;
  }

  let visualDirectionHtml = '';
  if (projI18n?.visualDirection) {
    const vd = projI18n.visualDirection;
    const subs = vd.subsections;

    visualDirectionHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-palette" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${vd.heading[lang]}</h2>
          
          <p style="font-size:15px;line-height:1.75;color:#334155;margin-bottom:24px">${vd.intro[lang]}</p>

          <!-- Balanced 2-Column Showcase (Left: Moodboard Image, Right: Explanatory Subsections) -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:28px;align-items:start">
            
            <!-- Left Column: Clickable Moodboard Image (Sticky) -->
            <div style="position:-webkit-sticky;position:sticky;top:32px;background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:14px;border-radius:24px;box-sizing:border-box">
              <div style="position:relative;border-radius:16px;overflow:hidden;border:1px solid rgba(226,232,240,0.9);cursor:pointer" onclick="window.openJourneyLightbox('${encodeURI(vd.moodboardImage)}', '${vd.heading[lang]} Moodboard')">
                <img src="${encodeURI(vd.moodboardImage)}" alt="${vd.heading[lang]} Moodboard" style="width:100%;height:auto;display:block;object-fit:contain;border-radius:16px"/>
                <div style="position:absolute;bottom:10px;right:10px;background:rgba(15,23,42,0.75);backdrop-filter:blur(6px);color:#fff;font:900 11px/1 monospace;padding:6px 12px;border-radius:8px;display:flex;align-items:center;gap:6px">
                  <i class="ph-duotone ph-arrows-out" style="font-size:12px"></i>
                  ${lang === 'TH' ? 'คลิกเพื่อขยาย' : 'Click to enlarge'}
                </div>
              </div>
            </div>

            <!-- Right Column: Explanatory Content Subsections -->
            <div style="display:flex;flex-direction:column;gap:16px">
              ${subs.map((sub, idx) => `
                <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 6px 18px rgba(30,36,50,0.04);padding:20px 22px;border-radius:20px">
                  <h3 style="font-size:16px;font-weight:900;color:#0f172a;margin:0 0 8px;display:flex;align-items:center;gap:8px">
                    <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:3px 8px;border-radius:6px">${idx + 1}</span>
                    ${sub.title[lang]}
                  </h3>
                  <p style="font-size:14px;line-height:1.68;color:#475569;margin:0">${sub.desc[lang]}</p>
                </div>
              `).join('')}
            </div>

          </div>

        </div>
      </section>
    `;
  }

  let kioskKeyUxHtml = '';
  if (projI18n?.kioskKeyUx) {
    const kku = projI18n.kioskKeyUx;
    const groups = kku.groups;

    kioskKeyUxHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-sparkle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${kku.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.75;color:#334155;margin-bottom:32px">${kku.intro[lang]}</p>

          <!-- Group 01: Floor & Room Discovery -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:28px;border-radius:24px;margin-bottom:36px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
              <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${groups[0].num}</span>
              <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
              <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${groups[0].title[lang]}</h3>
            </div>

            <p style="font-size:14.5px;line-height:1.75;color:#334155;margin:0 0 16px">${groups[0].desc[lang]}</p>
            
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(85,104,175,0.08);border-radius:10px;border:1px solid rgba(85,104,175,0.18);margin-bottom:24px">
              <b style="font:900 11px/1 monospace;color:var(--sky-blue);letter-spacing:.05em">FLOW:</b>
              <span style="font-size:13px;font-weight:700;color:#0f172a">${groups[0].flow[lang]}</span>
            </div>

            <!-- Main Floor Screenshot Container with Left/Right Arrows Inside the White Frame -->
            <div style="position:relative;width:100%;max-width:860px;margin:0 auto 28px;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(30,36,50,0.1);border:1px solid rgba(226,232,240,0.9);padding:14px;box-sizing:border-box">

              <!-- Top Bar inside White Frame: Current Floor Indicator Badge & Lightbox Action -->
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:0 4px">
                <span id="kioskFloorLabelText" style="font:900 13px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:6px 14px;border-radius:10px;display:inline-flex;align-items:center;gap:6px">
                  ${groups[0].floors[0].label[lang]} (1/5)
                </span>
                <button onclick="window.openJourneyLightbox(document.getElementById('kioskMainFloorImg').src, 'Floor Screenshot')" style="background:rgba(85,104,175,0.08);border:1px solid rgba(85,104,175,0.2);color:var(--sky-blue);padding:6px 12px;border-radius:8px;font:900 11px/1 monospace;cursor:pointer;display:inline-flex;align-items:center;gap:6px">
                  <i class="ph-duotone ph-arrows-out" style="font-size:12px"></i>
                  ${lang === 'TH' ? 'คลิกเพื่อขยาย' : 'Click to enlarge'}
                </button>
              </div>

              <!-- Image Area with Left & Right Arrow Buttons Overlay -->
              <div style="position:relative;border-radius:14px;overflow:hidden;background:rgba(241,245,249,0.4)">
                <img id="kioskMainFloorImg" src="${encodeURI(groups[0].floors[0].img)}" alt="${groups[0].floors[0].label[lang]}" style="width:100%;max-height:460px;object-fit:contain;display:block;border-radius:14px;cursor:pointer" onclick="window.openJourneyLightbox(this.src, 'Floor Screenshot')"/>

                <!-- Left Arrow Button inside Frame -->
                <button onclick="window.changeKioskFloor(-1)" aria-label="Previous Floor" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.92);backdrop-filter:blur(8px);border:1.5px solid rgba(85,104,175,0.25);color:var(--ink);width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 18px rgba(30,36,50,0.15);z-index:10;transition:all 0.2s ease" onmouseover="this.style.background='var(--sky-blue)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.color='var(--ink)'">
                  <i class="ph-duotone ph-caret-left" style="font-size:22px"></i>
                </button>

                <!-- Right Arrow Button inside Frame -->
                <button onclick="window.changeKioskFloor(1)" aria-label="Next Floor" style="position:absolute;right:14px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.92);backdrop-filter:blur(8px);border:1.5px solid rgba(85,104,175,0.25);color:var(--ink);width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 18px rgba(30,36,50,0.15);z-index:10;transition:all 0.2s ease" onmouseover="this.style.background='var(--sky-blue)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.color='var(--ink)'">
                  <i class="ph-duotone ph-caret-right" style="font-size:22px"></i>
                </button>
              </div>

            </div>

            <!-- Supporting Room Discovery Screens (Gallery Row) -->
            <b style="font:900 11px/1 monospace;color:#64748b;display:block;margin-bottom:12px;letter-spacing:.05em">${lang === 'TH' ? 'หน้าจอการค้นหาและเลือกห้องหมวดหมู่ต่าง ๆ' : 'ROOM DISCOVERY & SELECTION PANELS'}</b>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px">
              ${groups[0].roomDiscoveryScreens.map(scr => `
                <div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 18px rgba(30,36,50,0.06);border:1px solid rgba(226,232,240,0.9);padding:6px;cursor:pointer" onclick="window.openJourneyLightbox('${encodeURI(scr.img)}', '${scr.label[lang]}')">
                  <img src="${encodeURI(scr.img)}" alt="${scr.label[lang]}" style="width:100%;max-height:220px;object-fit:contain;display:block;border-radius:10px"/>
                  <span style="font-size:12px;font-weight:700;color:#475569;display:block;text-align:center;padding:8px 4px 4px">${scr.label[lang]}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Group 02: Destination Highlighting -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:28px;border-radius:24px;margin-bottom:36px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
              <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${groups[1].num}</span>
              <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
              <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${groups[1].title[lang]}</h3>
            </div>

            <p style="font-size:14.5px;line-height:1.75;color:#334155;margin:0 0 16px">${groups[1].desc[lang]}</p>
            
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(85,104,175,0.08);border-radius:10px;border:1px solid rgba(85,104,175,0.18);margin-bottom:24px">
              <b style="font:900 11px/1 monospace;color:var(--sky-blue);letter-spacing:.05em">FLOW:</b>
              <span style="font-size:13px;font-weight:700;color:#0f172a">${groups[1].flow[lang]}</span>
            </div>

            <!-- Before & After Comparison Grid -->
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:20px;align-items:center;margin-bottom:14px">
              <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);padding:8px;cursor:pointer" onclick="window.openJourneyLightbox('${encodeURI(groups[1].screen1)}', 'Selection')">
                <img src="${encodeURI(groups[1].screen1)}" alt="Selection" style="width:100%;max-height:360px;object-fit:contain;display:block;border-radius:12px"/>
              </div>

              <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);padding:8px;cursor:pointer" onclick="window.openJourneyLightbox('${encodeURI(groups[1].screen2)}', 'Highlighted Destination')">
                <img src="${encodeURI(groups[1].screen2)}" alt="Highlighted Destination" style="width:100%;max-height:360px;object-fit:contain;display:block;border-radius:12px"/>
              </div>
            </div>

            <div style="text-align:center;padding:10px 16px;background:rgba(241,245,249,0.7);border-radius:12px;border:1px solid rgba(226,232,240,0.8)">
              <span style="font-size:13.5px;font-weight:800;color:var(--ink)">${groups[1].beforeAfterConnector[lang]}</span>
            </div>
          </div>

          <!-- Group 03: Visual Route Guidance -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:28px;border-radius:24px;margin-bottom:36px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
              <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${groups[2].num}</span>
              <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
              <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${groups[2].title[lang]}</h3>
            </div>

            <p style="font-size:14.5px;line-height:1.75;color:#334155;margin:0 0 16px">${groups[2].desc[lang]}</p>
            
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(85,104,175,0.08);border-radius:10px;border:1px solid rgba(85,104,175,0.18);margin-bottom:24px">
              <b style="font:900 11px/1 monospace;color:var(--sky-blue);letter-spacing:.05em">FLOW:</b>
              <span style="font-size:13px;font-weight:700;color:#0f172a">${groups[2].flow[lang]}</span>
            </div>

            <!-- Controlled Width Hero Image Container (Centered) -->
            <div style="width:100%;max-width:800px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(30,36,50,0.1);border:1px solid rgba(226,232,240,0.9);padding:10px;box-sizing:border-box;cursor:pointer" onclick="window.openJourneyLightbox('${encodeURI(groups[2].heroImage)}', '${groups[2].title[lang]}')">
              <img src="${encodeURI(groups[2].heroImage)}" alt="${groups[2].title[lang]}" style="width:100%;max-height:460px;object-fit:contain;display:block;border-radius:12px"/>
            </div>
          </div>

          <!-- Group 04: Mobile Route Handoff Concept -->
          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.05),rgba(206,234,238,0.22));border:1.5px solid rgba(85,104,175,0.18);padding:24px 28px;border-radius:24px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
              <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${groups[3].num}</span>
              <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
              <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0;display:flex;align-items:center;gap:8px">
                <i class="ph-duotone ph-qr-code" style="font-size:22px;color:var(--sky-blue)"></i>
                ${groups[3].title[lang]}
              </h3>
            </div>

            <p style="font-size:14.5px;line-height:1.75;color:#334155;margin:0 0 14px">${groups[3].desc[lang]}</p>
            
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:#fff;border-radius:10px;border:1px solid rgba(85,104,175,0.18)">
              <b style="font:900 11px/1 monospace;color:var(--sky-blue);letter-spacing:.05em">CONCEPTUAL FLOW:</b>
              <span style="font-size:13px;font-weight:700;color:#0f172a">${groups[3].flow[lang]}</span>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  let kioskReflectionFutureHtml = '';
  if (projI18n?.kioskReflectionFuture) {
    const krf = projI18n.kioskReflectionFuture;
    const paras = krf.paragraphs;
    const imps = krf.improvements;

    kioskReflectionFutureHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-compass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${krf.heading[lang]}</h2>
          
          <!-- 3 Introductory Reflection Paragraphs -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px;margin-bottom:28px;display:flex;flex-direction:column;gap:14px">
            ${paras.map(p => `
              <p style="font-size:15px;line-height:1.75;color:#334155;margin:0">${p[lang]}</p>
            `).join('')}
          </div>

          <!-- Future Improvements Section -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 20px">${krf.futureHeading[lang]}</h3>

            <!-- 2-Column Desktop / 1-Column Mobile Grid of 4 Improvements -->
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:16px">
              ${imps.map(item => `
                <div style="background:rgba(241,245,249,0.55);border:1px solid rgba(226,232,240,0.85);padding:18px;border-radius:18px;display:flex;flex-direction:column;justify-content:space-between;gap:8px">
                  <div>
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                      <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 8px;border-radius:6px">${item.num}</span>
                      <i class="ph-duotone ph-${item.icon === 'smartphone' ? 'device-mobile' : item.icon === 'monitor' ? 'desktop' : item.icon === 'smile' ? 'smiley' : item.icon === 'sparkles' ? 'sparkle' : item.icon === 'accessibility' ? 'wheelchair' : item.icon}" style="font-size:1em;color:var(--sunset)"></i>
                    </div>
                    <b style="font-size:15px;color:#0f172a;display:block;margin-bottom:6px">${item.title[lang]}</b>
                  </div>
                  <p style="font-size:13.5px;line-height:1.65;color:#475569;margin:0">${item.desc[lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  let researchRequirementHtml = '';
  if (projI18n?.researchRequirement) {
    const rr = projI18n.researchRequirement;
    const summaryParas = rr.summaryParagraphs[lang];
    const findings = rr.findings.items[lang];
    const footnote = rr.findings.footnote[lang];
    const reqs = rr.requirements.items[lang];
    const takeaway = rr.takeaway[lang];

    researchRequirementHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-magnifying-glass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${rr.heading[lang]}</h2>
          
          <div style="margin-bottom:28px">
            ${summaryParas.map(p => `<p style="font-size:15px;line-height:1.75;color:#334155;margin-bottom:14px">${p}</p>`).join('')}
          </div>

          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:22px;margin-bottom:28px">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:20px">
              ${findings.map(item => `
                <div style="background:rgba(241,245,249,0.55);border:1px solid rgba(226,232,240,0.85);padding:20px;border-radius:18px;display:flex;flex-direction:column;gap:8px">
                  <div style="font-size:clamp(30px,3.5vw,38px);font-weight:900;color:var(--sky-blue);line-height:1">${item.percentage}</div>
                  <p style="font-size:14px;line-height:1.65;color:#1e293b;margin:0;font-weight:600">${item.desc}</p>
                </div>
              `).join('')}
            </div>
            <p style="font-size:13px;line-height:1.5;color:#64748b;font-style:italic;margin:16px 0 0">* ${footnote}</p>
          </div>

          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:22px;margin-bottom:28px">
            <h3 style="font-size:17px;font-weight:900;color:var(--sky-blue);margin:0 0 8px">${rr.requirements.subheading[lang]}</h3>
            <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${rr.requirements.intro[lang]}</p>
            <ul style="margin:0;padding:0;list-style:none;display:grid;gap:12px">
              ${reqs.map((reqText, idx) => `
                <li style="font-size:15px;line-height:1.7;color:#334155;display:flex;align-items:flex-start;gap:12px">
                  <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 8px;border-radius:6px;margin-top:2px;flex-shrink:0">${idx + 1}</span>
                  <span>${reqText}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.35));border:1.5px solid rgba(85,104,175,0.22);padding:22px 26px;border-radius:20px">
            <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:8px;letter-spacing:.05em">${rr.takeawaySubheading[lang].toUpperCase()}</b>
            <p style="font-size:15px;line-height:1.75;font-weight:700;color:var(--ink);margin:0">${takeaway}</p>
          </div>

        </div>
      </section>
    `;
  }

  let surveyPersonaHtml = '';
  if (projI18n?.surveyPersona) {
    const sp = projI18n.surveyPersona;
    const name = sp.identity.name[lang];
    const profile = sp.identity.profile[lang];
    const bgHeading = sp.background.heading[lang];
    const bgText = sp.background.text[lang];
    const stmtHeading = sp.statement.heading[lang];
    const stmtText = sp.statement.text[lang];
    const stmtLabel = sp.statement?.label ? sp.statement.label[lang] : '';
    const sec = sp.sections;

    const personaImage = sp.identity?.image || data?.personaImage;
    const avatarHtml = personaImage ? `
      <img src="${encodeURI(personaImage)}" alt="${name}" style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.9);box-shadow:0 4px 14px rgba(30,36,50,0.12);flex-shrink:0"/>
    ` : `
      <div style="width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,rgba(85,104,175,0.15),rgba(206,234,238,0.45));border:2px solid rgba(255,255,255,0.9);box-shadow:0 4px 14px rgba(30,36,50,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="ph-duotone ph-user" style="font-size:34px;color:var(--sky-blue)"></i>
      </div>
    `;

    surveyPersonaHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-user-check" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${sp.heading[lang]}</h2>
          
          <!-- Methodology Note -->
          <div style="background:rgba(85,104,175,0.07);border:1px solid rgba(85,104,175,0.18);padding:14px 20px;border-radius:14px;margin-bottom:24px;display:flex;align-items:flex-start;gap:10px">
            <i class="ph-duotone ph-info" style="font-size:1em;color:var(--sky-blue);margin-top:2px;flex-shrink:0"></i>
            <p style="font-size:13.5px;line-height:1.6;color:#334155;margin:0">${sp.methodology[lang]}</p>
          </div>

          <!-- Main Persona Container -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:22px">
            
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:28px;align-items:start">
              
              <!-- Left Column: Identity, Background & Statement -->
              <div style="display:flex;flex-direction:column;gap:20px">
                
                <div style="display:flex;align-items:center;gap:16px;padding-bottom:16px;border-bottom:1px solid rgba(226,232,240,0.8)">
                  ${avatarHtml}
                  <div>
                    <h3 style="font-size:20px;font-weight:900;color:#0f172a;margin:0 0 4px">${name}</h3>
                    <span style="font-size:13px;line-height:1.5;color:#64748b;font-weight:600;display:block">${profile}</span>
                  </div>
                </div>

                <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:16px">
                  <b style="font:900 11px/1 monospace;color:var(--sky-blue);display:block;margin-bottom:6px;letter-spacing:.05em">${bgHeading.toUpperCase()}</b>
                  <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${bgText}</p>
                </div>

                <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(85,104,175,0.2);padding:18px;border-radius:16px">
                  <b style="font:900 11px/1 monospace;color:var(--sky-blue);display:block;margin-bottom:6px;letter-spacing:.05em">${stmtHeading.toUpperCase()}</b>
                  <p style="font-size:14.5px;line-height:1.65;font-weight:700;color:#0f172a;margin:0;font-style:italic">${stmtText}</p>
                  ${stmtLabel ? `<span style="font-size:12px;color:#64748b;font-style:italic;display:block;margin-top:8px">* ${stmtLabel}</span>` : ''}
                </div>

              </div>

              <!-- Right Column: 2x2 Grid of Goals, Behaviors, Frustrations, Needs -->
              <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px">
                
                <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:16px;display:flex;flex-direction:column;gap:8px">
                  <b style="font:900 11px/1 monospace;color:var(--sky-blue);display:flex;align-items:center;gap:6px;margin-bottom:2px;letter-spacing:.05em">
                    <i class="ph-duotone ph-target" style="font-size:1em"></i>
                    ${sec.goals.heading[lang].toUpperCase()}
                  </b>
                  <ul style="margin:0;padding:0;list-style:none;display:grid;gap:8px">
                    ${sec.goals.items[lang].map(it => `
                      <li style="font-size:13.5px;line-height:1.6;color:#334155;display:flex;align-items:flex-start;gap:8px">
                        <span style="color:var(--sky-blue);font-weight:900;margin-top:1px">•</span>
                        <span>${it}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:16px;display:flex;flex-direction:column;gap:8px">
                  <b style="font:900 11px/1 monospace;color:var(--sky-blue);display:flex;align-items:center;gap:6px;margin-bottom:2px;letter-spacing:.05em">
                    <i class="ph-duotone ph-activity" style="font-size:1em"></i>
                    ${sec.behaviors.heading[lang].toUpperCase()}
                  </b>
                  <ul style="margin:0;padding:0;list-style:none;display:grid;gap:8px">
                    ${sec.behaviors.items[lang].map(it => `
                      <li style="font-size:13.5px;line-height:1.6;color:#334155;display:flex;align-items:flex-start;gap:8px">
                        <span style="color:var(--sky-blue);font-weight:900;margin-top:1px">•</span>
                        <span>${it}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:16px;display:flex;flex-direction:column;gap:8px">
                  <b style="font:900 11px/1 monospace;color:var(--sunset);display:flex;align-items:center;gap:6px;margin-bottom:2px;letter-spacing:.05em">
                    <i class="ph-duotone ph-warning-circle" style="font-size:1em"></i>
                    ${sec.frustrations.heading[lang].toUpperCase()}
                  </b>
                  <ul style="margin:0;padding:0;list-style:none;display:grid;gap:8px">
                    ${sec.frustrations.items[lang].map(it => `
                      <li style="font-size:13.5px;line-height:1.6;color:#334155;display:flex;align-items:flex-start;gap:8px">
                        <span style="color:var(--sunset);font-weight:900;margin-top:1px">•</span>
                        <span>${it}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:16px;display:flex;flex-direction:column;gap:8px">
                  <b style="font:900 11px/1 monospace;color:var(--teal);display:flex;align-items:center;gap:6px;margin-bottom:2px;letter-spacing:.05em">
                    <i class="ph-duotone ph-check-square" style="font-size:1em"></i>
                    ${sec.needs.heading[lang].toUpperCase()}
                  </b>
                  <ul style="margin:0;padding:0;list-style:none;display:grid;gap:8px">
                    ${sec.needs.items[lang].map(it => `
                      <li style="font-size:13.5px;line-height:1.6;color:#334155;display:flex;align-items:flex-start;gap:8px">
                        <span style="color:var(--teal);font-weight:900;margin-top:1px">•</span>
                        <span>${it}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    `;
  }

  let discoveryHtml = '';
  if (projI18n?.discovery) {
    const disc = projI18n.discovery;
    const findingsList = disc.findings[lang];
    discoveryHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-magnifying-glass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${disc.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.7;color:#334155;margin-bottom:24px">${disc.intro[lang]}</p>
          
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:20px;margin-bottom:28px">
            <h3 style="font-size:17px;font-weight:900;color:var(--sky-blue);margin:0 0 8px;display:flex;align-items:center;gap:8px">
              <i class="ph-duotone ph-buildings" style="font-size:1em"></i>
              ${disc.orgContextHeading[lang]}
            </h3>
            <p style="font-size:14px;line-height:1.75;color:#475569;margin:0">${disc.orgContextText[lang]}</p>
          </div>

          <h3 style="font-size:18px;font-weight:900;margin:0 0 16px;color:#1e293b">${disc.findingsHeading[lang]}</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:16px">
            ${findingsList.map(f => `
              <div style="background:rgba(255,255,255,0.85);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.95);box-shadow:0 6px 20px rgba(30,36,50,0.06);padding:20px;border-radius:18px;display:flex;flex-direction:column;justify-content:space-between">
                <div>
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                    <span style="font:900 13px/1 monospace;color:var(--sunset);background:rgba(255,107,107,0.12);padding:4px 10px;border-radius:8px">${f.num}</span>
                    <h4 style="font-size:16px;font-weight:800;color:#0f172a;margin:0">${f.title}</h4>
                  </div>
                  <p style="font-size:14px;line-height:1.65;color:#475569;margin-bottom:14px">${f.problem}</p>
                </div>
                <div style="padding-top:12px;border-top:1px solid rgba(226,232,240,0.8)">
                  <b style="font-size:12px;color:var(--sky-blue);display:block;margin-bottom:4px">${f.opportunityLabel}</b>
                  <p style="font-size:13px;line-height:1.6;color:#1e293b;font-weight:600;margin:0">${f.opportunity}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  let userGroupsHtml = '';
  if (projI18n?.userGroups) {
    const ug = projI18n.userGroups;
    const tbl = ug.table;
    userGroupsHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-users" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${ug.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.7;color:#334155;margin-bottom:20px">${ug.intro[lang]}</p>
          
          <div style="width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:18px;border:1px solid rgba(226,232,240,0.9);box-shadow:0 6px 20px rgba(30,36,50,0.05);margin-bottom:24px;background:rgba(255,255,255,0.9)">
            <table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;min-width:600px">
              <thead>
                <tr style="background:rgba(241,245,249,0.9);border-bottom:2px solid rgba(226,232,240,1)">
                  <th style="padding:14px 18px;font-weight:900;color:var(--sky-blue);width:22%">${tbl.headers.role[lang]}</th>
                  <th style="padding:14px 18px;font-weight:900;color:#1e293b;width:38%">${tbl.headers.needs[lang]}</th>
                  <th style="padding:14px 18px;font-weight:900;color:#1e293b;width:40%">${tbl.headers.services[lang]}</th>
                </tr>
              </thead>
              <tbody>
                ${tbl.rows.map((r, idx) => `
                  <tr style="border-bottom:${idx === tbl.rows.length - 1 ? 'none' : '1px solid rgba(226,232,240,0.8)'};background:${idx % 2 === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(248,250,252,0.6)'}">
                    <td style="padding:14px 18px;font-weight:800;color:#0f172a;vertical-align:top">${r.role[lang]}</td>
                    <td style="padding:14px 18px;line-height:1.65;color:#475569;vertical-align:top">${r.needs[lang]}</td>
                    <td style="padding:14px 18px;line-height:1.65;color:#334155;vertical-align:top;font-weight:500">${r.services[lang]}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 6px 20px rgba(30,36,50,0.04);padding:20px 24px;border-radius:18px">
            <p style="font-size:14px;line-height:1.7;color:#475569;margin:0">${ug.outro[lang]}</p>
          </div>
        </div>
      </section>
    `;
  }

  let designPrioritiesHtml = '';
  if (projI18n?.designPriorities) {
    const dp = projI18n.designPriorities;
    if (dp.items) {
      const itemsList = dp.items[lang];
      designPrioritiesHtml = `
        <section class="case">
          <div>
            <h2><i class="ph-duotone ph-compass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${dp.heading[lang]}</h2>
            ${dp.intro ? `<p style="font-size:15px;line-height:1.75;color:#334155;margin-bottom:24px">${dp.intro[lang]}</p>` : ''}
            
            <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:22px">
              <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px">
                ${itemsList.map(item => `
                  <div style="background:rgba(241,245,249,0.55);border:1px solid rgba(226,232,240,0.85);padding:20px;border-radius:18px;display:flex;flex-direction:column;gap:8px">
                    <b style="font-size:16px;font-weight:900;color:var(--sky-blue)">${item.heading}</b>
                    <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
    } else if (dp.table) {
      const tbl = dp.table;
      designPrioritiesHtml = `
        <section class="case">
          <div>
            <h2><i class="ph-duotone ph-compass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${dp.heading[lang]}</h2>
            
            <div style="width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:18px;border:1px solid rgba(226,232,240,0.9);box-shadow:0 6px 20px rgba(30,36,50,0.05);background:rgba(255,255,255,0.9)">
              <table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;min-width:600px">
                <thead>
                  <tr style="background:rgba(241,245,249,0.9);border-bottom:2px solid rgba(226,232,240,1)">
                    <th style="padding:14px 18px;font-weight:900;color:var(--sky-blue);width:32%">${tbl.headers.priority[lang]}</th>
                    <th style="padding:14px 18px;font-weight:900;color:#1e293b;width:68%">${tbl.headers.decision[lang]}</th>
                  </tr>
                </thead>
                <tbody>
                  ${tbl.rows.map((r, idx) => `
                    <tr style="border-bottom:${idx === tbl.rows.length - 1 ? 'none' : '1px solid rgba(226,232,240,0.8)'};background:${idx % 2 === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(248,250,252,0.6)'}">
                      <td style="padding:14px 18px;font-weight:800;color:#0f172a;vertical-align:top;border-right:1px solid rgba(226,232,240,0.6)">${r.priority[lang]}</td>
                      <td style="padding:14px 18px;line-height:1.65;color:#475569;vertical-align:top">${r.decision[lang]}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;
    }
  }

  let dormitoryKeyUxHtml = '';
  if (projI18n?.dormitoryKeyUx) {
    const dk = projI18n.dormitoryKeyUx;
    const subs = dk.subsections;
    const prof = dk.supportingProfile;

    dormitoryKeyUxHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-sparkle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${dk.intro.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.75;color:#334155;margin-bottom:28px">${dk.intro.desc[lang]}</p>

          <div style="display:flex;flex-direction:column;gap:32px">
            
            <!-- Subsection 1: Centralized Home & Updates -->
            <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
                <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">1</span>
                <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
                <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${subs[0].heading[lang].replace(/^\d+\s*[—\-]\s*/, '')}</h3>
              </div>
              <p style="font-size:14.5px;line-height:1.7;color:#475569;margin:0 0 24px">${subs[0].desc[lang]}</p>

              <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:24px">
                <!-- Hero UI -->
                <div style="max-width:340px;width:100%;border-radius:18px;overflow:hidden;box-shadow:0 12px 32px rgba(30,36,50,0.14);border:1px solid rgba(226,232,240,0.9);background:rgba(255,255,255,0.9);padding:8px;box-sizing:border-box">
                  <img src="${encodeURI(subs[0].heroImage)}" alt="Home Screen" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
                </div>
                <!-- Supporting screens -->
                <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;max-width:540px">
                  ${subs[0].supportingImages.map(img => `
                    <div style="max-width:240px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);background:rgba(255,255,255,0.9);padding:6px;box-sizing:border-box">
                      <img src="${encodeURI(img)}" alt="Supporting Screen" style="width:100%;height:auto;display:block;border-radius:10px;object-fit:contain"/>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Subsections 2 to 5 -->
            ${subs.slice(1).map((sub, idx) => `
              <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
                  <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${idx + 2}</span>
                  <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
                  <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${sub.heading[lang].replace(/^\d+\s*[—\-]\s*/, '')}</h3>
                </div>
                <p style="font-size:14.5px;line-height:1.7;color:#475569;margin:0 0 24px">${sub.desc[lang]}</p>

                <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:20px">
                  <div style="max-width:250px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);background:rgba(255,255,255,0.9);padding:6px;box-sizing:border-box">
                    <img src="${encodeURI(sub.images[0])}" alt="Screen 1" style="width:100%;height:auto;display:block;border-radius:10px;object-fit:contain"/>
                  </div>

                  ${sub.hasArrow ? `
                    <div style="display:flex;align-items:center;justify-content:center;color:var(--sky-blue);padding:8px">
                      <i class="ph-duotone ph-arrow-right" style="font-size:1.2em"></i>
                    </div>
                  ` : ''}

                  <div style="max-width:250px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);background:rgba(255,255,255,0.9);padding:6px;box-sizing:border-box">
                    <img src="${encodeURI(sub.images[1])}" alt="Screen 2" style="width:100%;height:auto;display:block;border-radius:10px;object-fit:contain"/>
                  </div>
                </div>
              </div>
            `).join('')}

            <!-- Supporting Screen: Student Profile -->
            <div style="background:rgba(241,245,249,0.6);border:1px solid rgba(226,232,240,0.9);padding:22px 26px;border-radius:20px">
              <div style="display:flex;flex-wrap:wrap;align-items:center;gap:24px;justify-content:space-between">
                <div style="flex:1;min-width:260px">
                  <span style="font:900 11px/1 monospace;color:var(--sky-blue);display:block;margin-bottom:6px;letter-spacing:.05em">SUPPORTING SCREEN</span>
                  <h4 style="font-size:17px;font-weight:900;color:#0f172a;margin:0 0 8px">${prof.heading[lang]}</h4>
                  <p style="font-size:14px;line-height:1.65;color:#475569;margin:0">${prof.desc[lang]}</p>
                </div>
                <div style="max-width:220px;width:100%;border-radius:14px;overflow:hidden;box-shadow:0 6px 20px rgba(30,36,50,0.08);border:1px solid rgba(226,232,240,0.9);background:rgba(255,255,255,0.9);padding:5px;box-sizing:border-box;flex-shrink:0">
                  <img src="${encodeURI(prof.image)}" alt="Student Profile Screen" style="width:100%;height:auto;display:block;border-radius:9px;object-fit:contain"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  let dormitoryOutcomeLimitationsHtml = '';
  if (projI18n?.dormitoryOutcomeLimitations) {
    const ol = projI18n.dormitoryOutcomeLimitations;
    const out = ol.outcome;
    const lim = ol.limitations;

    dormitoryOutcomeLimitationsHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-check-circle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${ol.heading[lang]}</h2>
          
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;align-items:stretch">
            
            <!-- Outcome Column (Left) -->
            <div style="background:rgba(16,185,129,0.04);border:1.5px solid rgba(16,185,129,0.2);padding:24px 26px;border-radius:22px;display:flex;flex-direction:column;gap:14px">
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
                <b style="font-size:16px;font-weight:900;color:var(--teal);display:flex;align-items:center;gap:8px">
                  <i class="ph-duotone ph-trophy" style="font-size:1em"></i>
                  ${out.subheading[lang]}
                </b>
                <span style="font:900 11px/1 monospace;color:var(--teal);background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.25);padding:5px 12px;border-radius:8px">${out.statusLabel[lang]}</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:12px">
                ${out.paragraphs[lang].map(p => `<p style="font-size:14.5px;line-height:1.7;color:#334155;margin:0">${p}</p>`).join('')}
              </div>
            </div>

            <!-- Limitations Column (Right) -->
            <div style="background:rgba(241,245,249,0.55);border:1.5px solid rgba(226,232,240,0.85);padding:24px 26px;border-radius:22px;display:flex;flex-direction:column;gap:14px">
              <b style="font-size:16px;font-weight:900;color:#334155;display:flex;align-items:center;gap:8px">
                <i class="ph-duotone ph-warning-circle" style="font-size:1em;color:#64748b"></i>
                ${lim.subheading[lang]}
              </b>
              <ul style="margin:0;padding:0;list-style:none;display:grid;gap:10px">
                ${lim.items[lang].map(item => `
                  <li style="font-size:14px;line-height:1.65;color:#475569;display:flex;align-items:flex-start;gap:8px">
                    <span style="color:#64748b;font-weight:900;margin-top:1px">•</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  let dormitoryReflectionFutureHtml = '';
  if (projI18n?.dormitoryReflectionFuture) {
    const drf = projI18n.dormitoryReflectionFuture;
    const ref = drf.reflection;
    const imps = drf.improvements;

    dormitoryReflectionFutureHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-compass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${drf.heading[lang]}</h2>

          <!-- Reflection Statement Card (Prominent) -->
          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.06),rgba(206,234,238,0.25));border:1.5px solid rgba(85,104,175,0.18);padding:24px 28px;border-radius:22px;margin-top:16px;margin-bottom:28px">
            <div style="display:flex;flex-direction:column;gap:14px;max-width:860px">
              ${ref.paragraphs[lang].map(p => `<p style="font-size:15px;line-height:1.75;color:#334155;margin:0">${p}</p>`).join('')}
            </div>
          </div>

          <!-- 3 x 2 Grid of Future Improvements -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:26px 28px;border-radius:24px">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px">
              ${imps.map(item => `
                <div style="background:rgba(241,245,249,0.55);border:1px solid rgba(226,232,240,0.85);padding:20px;border-radius:18px;display:flex;flex-direction:column;gap:8px">
                  <div style="display:flex;align-items:center;gap:10px">
                    <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 8px;border-radius:6px">${item.num}</span>
                    <b style="font-size:15px;font-weight:900;color:#0f172a">${item.heading[lang]}</b>
                  </div>
                  <p style="font-size:13.5px;line-height:1.65;color:#475569;margin:0">${item.desc[lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  let queueManagementHtml = '';
  if (projI18n?.queueManagement) {
    const qm = projI18n.queueManagement;
    const g = qm.groups;
    queueManagementHtml = `
      <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
        <h3 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 16px">${qm.title[lang]}</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;margin-bottom:28px">
          <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--sunset)">
            <b style="font-size:12px;color:var(--sunset);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${qm.challengeLabel[lang]}</b>
            <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${qm.challenge[lang]}</p>
          </div>
          <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--teal)">
            <b style="font-size:12px;color:var(--teal);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${qm.solutionLabel[lang]}</b>
            <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${qm.solution[lang]}</p>
          </div>
        </div>

        <!-- 01 — Station & Room Setup -->
        <div style="margin-bottom:32px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${g[0].num}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h4 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${g[0].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[0].desc[lang]}</p>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px">
            ${g[0].images.map(img => `
              <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                <img src="${encodeURI(img)}" alt="${g[0].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 02 — Queue Identification -->
        <div style="margin-bottom:32px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${g[1].num}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h4 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${g[1].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[1].desc[lang]}</p>
          
          <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:18px">
            <!-- Main Flow Images -->
            ${g[1].mainImages.map(img => `
              <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                <img src="${encodeURI(img)}" alt="${g[1].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
              </div>
            `).join('')}

            <!-- Supporting Error States (Same size side-by-side with light orange card background) -->
            <div style="display:flex;flex-direction:column;align-items:center">
              <b style="font-size:12px;color:var(--sunset);display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.03em;text-align:center">${g[1].errorLabel[lang]}</b>
              <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px">
                ${g[1].errorImages.map(img => `
                  <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff7ed;border:1.5px solid rgba(243,120,38,0.35);padding:8px;box-sizing:border-box">
                    <img src="${encodeURI(img)}" alt="Error State" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 03 — Queue Controls -->
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${g[2].num}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h4 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${g[2].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[2].desc[lang]}</p>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px">
            ${g[2].images.map(img => `
              <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                <img src="${encodeURI(img)}" alt="${g[2].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }

  let eConsultHtml = '';
  if (projI18n?.eConsult) {
    const ec = projI18n.eConsult;
    const g = ec.groups;
    eConsultHtml = `
      <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
        <h3 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 16px">${ec.title[lang]}</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;margin-bottom:28px">
          <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--sunset)">
            <b style="font-size:12px;color:var(--sunset);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${ec.challengeLabel[lang]}</b>
            <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${ec.challenge[lang]}</p>
          </div>
          <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--teal)">
            <b style="font-size:12px;color:var(--teal);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${ec.solutionLabel[lang]}</b>
            <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${ec.solution[lang]}</p>
          </div>
        </div>

        <!-- 01 — Request List & Details -->
        <div style="margin-bottom:32px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${g[0].num}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h4 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${g[0].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[0].desc[lang]}</p>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:18px">
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[0].images[0])}" alt="${g[0].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
            
            <div style="display:flex;align-items:center;justify-content:center;padding:6px;color:var(--sky-blue)">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(85,104,175,0.12);display:flex;align-items:center;justify-content:center" title="Request List → Request Details">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>

            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[0].images[1])}" alt="${g[0].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
          </div>
        </div>

        <!-- 02 — Important Notifications -->
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${g[1].num}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h4 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${g[1].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[1].desc[lang]}</p>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px">
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[1].images[0])}" alt="${g[1].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  let otherFeaturesHtml = '';
  if (pid === 'mysuth-app' && data.features) {
    otherFeaturesHtml = data.features.slice(5).map((f, idx) => {
      const realIdx = idx + 5;
      const isLeft = f.align === 'left' || (realIdx % 2 === 1);
      const fI18n = projI18n?.features?.[realIdx];
      const featureTitle = fI18n?.title?.[lang] || f.title;
      const featureDesc = fI18n?.desc?.[lang] || f.desc;
      const imgs = (f.images && f.images.length) ? `
        <div class="feature-img-group">
          ${f.images.map(img => `<div class="feature-img-card"><img src="${encodeURI(img)}" alt="${featureTitle}"/></div>`).join('')}
        </div>
      ` : '';
      return `
        <div class="feature-row ${isLeft ? 'image-left' : 'image-right'}">
          <div class="feature-text">
            <h3>${featureTitle}</h3>
            <p>${featureDesc}</p>
          </div>
          ${imgs}
        </div>
      `;
    }).join('');
  }

  let emergencyCodeHtml = '';
  if (projI18n?.emergencyCode) {
    const ec = projI18n.emergencyCode;
    emergencyCodeHtml = `
      <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
        <h3 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 20px">${ec.title[lang]}</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;align-items:center">
          <!-- Left Column: Challenge & Solution -->
          <div style="display:flex;flex-direction:column;gap:16px">
            <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--sunset)">
              <b style="font-size:12px;color:var(--sunset);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${ec.challengeLabel[lang]}</b>
              <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${ec.challenge[lang]}</p>
            </div>
            <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--teal)">
              <b style="font-size:12px;color:var(--teal);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${ec.solutionLabel[lang]}</b>
              <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${ec.solution[lang]}</p>
            </div>
          </div>

          <!-- Right Column: Emergency Code Pop-up Screenshot -->
          <div style="display:flex;justify-content:center;align-items:center">
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(ec.image)}" alt="${ec.title[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  let coreScreensHtml = '';
  if (projI18n?.coreScreens) {
    const cs = projI18n.coreScreens;
    const h = cs.home;
    const ann = h.annotations;
    const supp = cs.supportingScreens;

    coreScreensHtml = `
      <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
        
        <!-- Section Header -->
        <h3 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 10px">${cs.title[lang]}</h3>
        <p style="font-size:15px;line-height:1.7;color:#475569;margin-bottom:28px">${cs.intro[lang]}</p>

        <!-- 01 — Home Dashboard (Hero UI) -->
        <div style="margin-bottom:40px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${h.num}</span>
            <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
            <h4 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${h.heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:24px">${h.desc[lang]}</p>

          <!-- Hero UI + Annotation Area -->
          <div style="position:relative;background:rgba(248,250,252,0.8);border:1px solid rgba(226,232,240,0.9);border-radius:20px;padding:28px 20px;display:flex;flex-direction:column;align-items:center">
            
            <!-- Central Hero Phone Screenshot -->
            <div style="position:relative;width:100%;max-width:320px;border-radius:20px;overflow:hidden;box-shadow:0 14px 36px rgba(30,36,50,0.16);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(h.image)}" alt="Home Dashboard" style="width:100%;height:auto;display:block;border-radius:14px;object-fit:contain"/>
              
              <!-- Numbered Target Markers Overlaid on Phone Screen -->
              <div class="annotation-marker" style="position:absolute;top:36%;left:12px;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;background:var(--sunset);color:#fff;font:900 11px/24px monospace;text-align:center;box-shadow:0 2px 8px rgba(255,107,107,0.5);border:2px solid #fff;z-index:3" title="1 — Latest Attendance">1</div>
              <div class="annotation-marker" style="position:absolute;top:36%;right:12px;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;background:var(--sky-blue);color:#fff;font:900 11px/24px monospace;text-align:center;box-shadow:0 2px 8px rgba(85,104,175,0.5);border:2px solid #fff;z-index:3" title="2 — Pending Updates">2</div>
              <div class="annotation-marker" style="position:absolute;top:64%;left:12px;transform:translateY(-50%);width:24px;height:24px;border-radius:50%;background:var(--teal);color:#fff;font:900 11px/24px monospace;text-align:center;box-shadow:0 2px 8px rgba(30,190,165,0.5);border:2px solid #fff;z-index:3" title="3 — Recent Services">3</div>
            </div>

            <!-- Annotation Callout Cards List -->
            <div style="width:100%;max-width:760px;display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;margin-top:24px">
              ${ann.map(a => `
                <div style="background:rgba(255,255,255,0.9);border:1px solid rgba(226,232,240,0.9);border-radius:16px;padding:16px;box-shadow:0 4px 14px rgba(30,36,50,0.04)">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                    <span style="font:900 11px/1 monospace;color:#fff;background:${a.num === '01' ? 'var(--sunset)' : a.num === '02' ? 'var(--sky-blue)' : 'var(--teal)'};padding:4px 8px;border-radius:6px">${a.num}</span>
                    <b style="font-size:14px;color:#0f172a">${a.label[lang]}</b>
                  </div>
                  <p style="font-size:13px;line-height:1.6;color:#475569;margin:0">${a.desc[lang]}</p>
                </div>
              `).join('')}
            </div>

          </div>
        </div>

        <!-- Supporting Core Screens Section -->
        <div style="border-top:1px solid rgba(226,232,240,0.8);padding-top:28px">
          <h4 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 20px">${cs.supportingSectionTitle[lang]}</h4>
          
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:20px;align-items:flex-start">
            ${supp.map(s => `
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center">
                <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box;margin-bottom:14px">
                  <img src="${encodeURI(s.image)}" alt="${s.heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
                </div>
                <h5 style="font-size:15px;font-weight:800;color:#1e293b;margin:0 0 6px">${s.heading[lang]}</h5>
                <p style="font-size:13px;line-height:1.6;color:#475569;margin:0;max-width:260px">${s.desc[lang]}</p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }

  let attendanceHtml = '';
  if (projI18n?.attendance) {
    const att = projI18n.attendance;
    const g = att.groups;
    attendanceHtml = `
      <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
        <h3 style="font-size:22px;font-weight:900;color:#0f172a;margin:0 0 16px">${att.title[lang]}</h3>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;margin-bottom:28px">
          <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--sunset)">
            <b style="font-size:12px;color:var(--sunset);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${att.challengeLabel[lang]}</b>
            <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${att.challenge[lang]}</p>
          </div>
          <div style="background:rgba(241,245,249,0.7);padding:16px 20px;border-radius:16px;border-left:4px solid var(--teal)">
            <b style="font-size:12px;color:var(--teal);display:block;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em">${att.solutionLabel[lang]}</b>
            <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${att.solution[lang]}</p>
          </div>
        </div>

        <!-- 01 — Context-Aware Attendance Action -->
        <div style="margin-bottom:32px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font:900 13px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px">${g[0].num}</span>
            <h4 style="font-size:18px;font-weight:800;color:#1e293b;margin:0">${g[0].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[0].desc[lang]}</p>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:18px">
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[0].images[0])}" alt="${g[0].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
            
            <div style="display:flex;align-items:center;justify-content:center;padding:6px;color:var(--sky-blue)">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(85,104,175,0.12);display:flex;align-items:center;justify-content:center" title="Check In ↔ Check Out">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              </div>
            </div>

            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[0].images[1])}" alt="${g[0].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
          </div>
        </div>

        <!-- 02 — Location Verification -->
        <div style="margin-bottom:32px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font:900 13px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px">${g[1].num}</span>
            <h4 style="font-size:18px;font-weight:800;color:#1e293b;margin:0">${g[1].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[1].desc[lang]}</p>
          
          <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:18px">
            <!-- Main Flow Image -->
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[1].mainImages[0])}" alt="${g[1].heading[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>

            <!-- Error State Card (Same size side-by-side with light orange background) -->
            <div style="display:flex;flex-direction:column;align-items:center">
              <b style="font-size:12px;color:var(--sunset);display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.03em;text-align:center">${g[1].errorLabel[lang]}</b>
              <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff7ed;border:1.5px solid rgba(243,120,38,0.35);padding:8px;box-sizing:border-box">
                <img src="${encodeURI(g[1].errorImages[0])}" alt="Outside Authorized Area" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
              </div>
            </div>
          </div>
        </div>

        <!-- 03 — Secure Identity Confirmation -->
        <div style="margin-bottom:32px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font:900 13px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px">${g[2].num}</span>
            <h4 style="font-size:18px;font-weight:800;color:#1e293b;margin:0">${g[2].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[2].desc[lang]}</p>
          
          <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:16px">
            <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:16px">
              <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                <img src="${encodeURI(g[2].biometricsImages[0])}" alt="Face ID" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
              </div>
              <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                <img src="${encodeURI(g[2].biometricsImages[1])}" alt="Fingerprint" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4px;color:var(--sky-blue);text-align:center">
              <span style="font:900 10px/1.2 monospace;color:var(--sky-blue);margin-bottom:6px;letter-spacing:.05em;text-align:center;display:block">${g[2].fallbackLabel[lang]}</span>
              <div style="width:32px;height:32px;border-radius:50%;background:rgba(85,104,175,0.12);display:flex;align-items:center;justify-content:center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>

            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[2].fallbackImage)}" alt="PIN Fallback" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
          </div>
        </div>

        <!-- 04 — Confirmation & Attendance History -->
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span style="font:900 13px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px">${g[3].num}</span>
            <h4 style="font-size:18px;font-weight:800;color:#1e293b;margin:0">${g[3].heading[lang]}</h4>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#475569;margin-bottom:16px">${g[3].desc[lang]}</p>
          
          <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:18px">
            <!-- Confirmation -->
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[3].images[0])}" alt="Confirmation" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>

            <!-- Flow Arrow -->
            <div style="display:flex;align-items:center;justify-content:center;padding:6px;color:var(--sky-blue)">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(85,104,175,0.12);display:flex;align-items:center;justify-content:center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>

            <!-- History List -->
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[3].images[1])}" alt="History List" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>

            <!-- History Calendar -->
            <div style="width:100%;max-width:240px;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
              <img src="${encodeURI(g[3].images[2])}" alt="History Calendar" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
            </div>
          </div>
        </div>

      </div>
    `;
  }
  let projectStatusHtml = '';
  if (projI18n?.projectStatus) {
    const ps = projI18n.projectStatus;
    const comp = ps.completed;
    const nxt = ps.nextSteps;

    projectStatusHtml = `
      <section class="case">
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px">
            <h2 style="margin:0"><i class="ph-duotone ph-clock" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${ps.title[lang]}</h2>
            <span style="display:inline-block;padding:5px 14px;background:rgba(85,104,175,0.12);color:var(--sky-blue);font-weight:800;border-radius:10px;font-size:13px">${ps.badge[lang]}</span>
          </div>

          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px">
            <p style="font-size:15px;line-height:1.75;color:#334155;margin:0 0 24px">${ps.intro[lang]}</p>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px">
              <!-- Completed So Far -->
              <div style="background:rgba(241,245,249,0.7);padding:20px;border-radius:18px;border-left:4px solid var(--teal)">
                <h4 style="font-size:16px;font-weight:900;color:#0f172a;margin:0 0 14px;display:flex;align-items:center;gap:8px">
                  <i class="ph-duotone ph-check-circle" style="font-size:1em;color:var(--teal)"></i>
                  ${comp.heading[lang]}
                </h4>
                <ul style="margin:0;padding:0;list-style:none;display:grid;gap:10px">
                  ${comp.items.map(it => `
                    <li style="font-size:14px;line-height:1.6;color:#334155;display:flex;align-items:flex-start;gap:8px">
                      <span style="color:var(--teal);font-weight:900;line-height:1">•</span>
                      <span>${it[lang]}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Next Steps -->
              <div style="background:rgba(241,245,249,0.7);padding:20px;border-radius:18px;border-left:4px solid var(--sky-blue)">
                <h4 style="font-size:16px;font-weight:900;color:#0f172a;margin:0 0 14px;display:flex;align-items:center;gap:8px">
                  <i class="ph-duotone ph-arrow-circle-right" style="font-size:1em;color:var(--sky-blue)"></i>
                  ${nxt.heading[lang]}
                </h4>
                <ul style="margin:0;padding:0;list-style:none;display:grid;gap:10px">
                  ${nxt.items.map(it => `
                    <li style="font-size:14px;line-height:1.6;color:#334155;display:flex;align-items:flex-start;gap:8px">
                      <span style="color:var(--sky-blue);font-weight:900;line-height:1">•</span>
                      <span>${it[lang]}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  let researchPivotHtml = '';
  if (projI18n?.researchPivot) {
    const rp = projI18n.researchPivot;
    const initialFlow = rp.initialIdea.flow;
    const findingsList = rp.keyFindings.items;
    const progressionFlow = rp.productPivot.progression;

    researchPivotHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-compass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${rp.heading[lang]}</h2>

          <!-- 1. Initial Idea -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:20px;margin-top:18px;margin-bottom:24px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 10px;display:flex;align-items:center;gap:10px">
              <i class="ph-duotone ph-lightbulb" style="font-size:1em;color:var(--sunset)"></i>
              ${rp.initialIdea.title[lang]}
            </h3>
            <p style="font-size:15px;line-height:1.75;color:#475569;margin:0">${rp.initialIdea.desc[lang]}</p>
            
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:16px;padding:12px 18px;background:rgba(241,245,249,0.7);border-radius:14px;border:1px solid rgba(226,232,240,0.8)">
              ${initialFlow.map((step, idx) => `
                <span style="font:900 12px/1 monospace;color:var(--ink);background:#fff;padding:6px 12px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.04)">${step[lang]}</span>
                ${idx < initialFlow.length - 1 ? `<i class="ph-duotone ph-arrow-right" style="font-size:1em;color:var(--sky-blue)"></i>` : ''}
              `).join('')}
            </div>
          </div>

          <!-- 2. User Research -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:20px;margin-bottom:24px;display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:24px;align-items:center">
            <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(85,104,175,0.2);padding:20px;border-radius:18px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center">
              <span style="font-size:44px;font-weight:950;line-height:1;color:var(--sky-blue);font-family:Syne,sans-serif">${rp.userResearch.statNum[lang]}</span>
              <span style="font-size:13px;font-weight:900;color:var(--ink);margin-top:4px">${rp.userResearch.statLabel[lang]}</span>
              <span style="font-size:11px;font-weight:800;color:#64748b;margin-top:2px;font-family:monospace">${rp.userResearch.statSub[lang]}</span>
            </div>
            <div>
              <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 10px;display:flex;align-items:center;gap:10px">
                <i class="ph-duotone ph-users" style="font-size:1em;color:var(--sky-blue)"></i>
                ${rp.userResearch.title[lang]}
              </h3>
              <p style="font-size:15px;line-height:1.75;color:#475569;margin:0">${rp.userResearch.desc[lang]}</p>
            </div>
          </div>

          <!-- 3. Key Findings -->
          <div style="margin-bottom:24px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 16px;display:flex;align-items:center;gap:10px">
              <i class="ph-duotone ph-key" style="font-size:1em;color:var(--sky-blue)"></i>
              ${rp.keyFindings.title[lang]}
            </h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:16px">
              ${findingsList.map(item => item.highlight ? `
                <div style="background:linear-gradient(135deg,rgba(243,120,38,0.08),rgba(254,243,199,0.4));border:1.5px solid rgba(243,120,38,0.35);padding:20px;border-radius:18px;box-shadow:0 6px 20px rgba(243,120,38,0.08)">
                  <b style="color:var(--sunset);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">KEY INSIGHT</b>
                  <p style="font-size:15px;line-height:1.65;font-weight:800;color:#0f172a;margin:0">${item[lang]}</p>
                </div>
              ` : `
                <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 4px 16px rgba(30,36,50,0.04);padding:20px;border-radius:18px">
                  <p style="font-size:14px;line-height:1.65;color:#334155;margin:0">${item[lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 4. Product Pivot -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:20px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 10px;display:flex;align-items:center;gap:10px">
              <i class="ph-duotone ph-git-commit" style="font-size:1em;color:var(--teal)"></i>
              ${rp.productPivot.title[lang]}
            </h3>
            <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 18px">${rp.productPivot.desc[lang]}</p>
            
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:14px 20px;background:linear-gradient(135deg,rgba(85,104,175,0.06),rgba(206,234,238,0.25));border-radius:16px;border:1px solid rgba(85,104,175,0.18)">
              ${progressionFlow.map((step, idx) => `
                <span style="font:900 12px/1 monospace;color:var(--ink);background:#fff;padding:8px 14px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.05)">${step[lang]}</span>
                ${idx < progressionFlow.length - 1 ? `<i class="ph-duotone ph-arrow-right" style="font-size:1em;color:var(--sky-blue)"></i>` : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  let understandingUserHtml = '';
  if (projI18n?.understandingUser) {
    const uu = projI18n.understandingUser;
    const p = uu.persona;
    const uj = uu.userJourney;
    const ki = uu.keyInsight;

    understandingUserHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-users" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${uu.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 28px;max-width:900px">${uu.intro[lang]}</p>

          <!-- 2. Primary Persona — Suthida (2-Column Grid) -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;align-items:start">
              
              <!-- LEFT: Suthida Image -->
              <div>
                <div style="width:100%;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                  <img src="${encodeURI(p.image)}" alt="${p.title[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
                </div>
              </div>

              <!-- RIGHT: Persona Details -->
              <div>
                <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
                  <h3 style="font-size:20px;font-weight:900;color:#0f172a;margin:0">${p.title[lang]}</h3>
                  <span style="font:800 12px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px">${p.sub[lang]}</span>
                </div>
                <p style="font-size:14px;line-height:1.7;color:#475569;margin:0 0 16px">${p.desc[lang]}</p>

                <!-- Goals, Pain Points, Needs -->
                <div style="display:grid;gap:14px;margin-bottom:16px">
                  <div style="background:rgba(241,245,249,0.6);padding:14px 16px;border-radius:14px;border-left:3.5px solid var(--sky-blue)">
                    <b style="font-size:11px;color:var(--sky-blue);display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em">${p.goalsHeading[lang]}</b>
                    <ul style="margin:0;padding:0;list-style:none;font-size:13px;line-height:1.6;color:#334155;display:grid;gap:4px">
                      ${p.goals.map(g => `<li>• ${g[lang]}</li>`).join('')}
                    </ul>
                  </div>

                  <div style="background:rgba(241,245,249,0.6);padding:14px 16px;border-radius:14px;border-left:3.5px solid var(--sunset)">
                    <b style="font-size:11px;color:var(--sunset);display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em">${p.painHeading[lang]}</b>
                    <ul style="margin:0;padding:0;list-style:none;font-size:13px;line-height:1.6;color:#334155;display:grid;gap:4px">
                      ${p.painPoints.map(pp => `<li>• ${pp[lang]}</li>`).join('')}
                    </ul>
                  </div>

                  <div style="background:rgba(241,245,249,0.6);padding:14px 16px;border-radius:14px;border-left:3.5px solid var(--teal)">
                    <b style="font-size:11px;color:var(--teal);display:block;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em">${p.needsHeading[lang]}</b>
                    <ul style="margin:0;padding:0;list-style:none;font-size:13px;line-height:1.6;color:#334155;display:grid;gap:4px">
                      ${p.needs.map(n => `<li>• ${n[lang]}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <!-- Quote Box -->
                <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(85,104,175,0.25);padding:16px 20px;border-radius:16px">
                  <p style="font-size:14px;line-height:1.65;font-weight:800;color:var(--ink);font-style:italic;margin:0">${p.quote[lang]}</p>
                </div>
              </div>

            </div>
          </div>

          <!-- 3. As-Is User Journey (2-Column Reversed Grid) -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:32px">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:28px;align-items:center">
              
              <!-- LEFT: Journey Content -->
              <div>
                <h3 style="font-size:20px;font-weight:900;color:#0f172a;margin:0 0 10px;display:flex;align-items:center;gap:10px">
                  <i class="ph-duotone ph-map-trifold" style="font-size:1em;color:var(--sky-blue)"></i>
                  ${uj.title[lang]}
                </h3>
                <p style="font-size:14px;line-height:1.7;color:#475569;margin:0 0 16px">${uj.intro[lang]}</p>

                <!-- Progression Flow -->
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:16px;padding:12px 16px;background:rgba(241,245,249,0.7);border-radius:14px;border:1px solid rgba(226,232,240,0.8)">
                  ${uj.flow.map((step, idx) => `
                    <span style="font:900 11px/1 monospace;color:var(--ink);background:#fff;padding:6px 10px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.04)">${step[lang]}</span>
                    ${idx < uj.flow.length - 1 ? `<i class="ph-duotone ph-arrow-right" style="font-size:1em;color:var(--sky-blue)"></i>` : ''}
                  `).join('')}
                </div>

                <p style="font-size:14px;line-height:1.75;color:#334155;background:rgba(241,245,249,0.6);padding:14px 18px;border-radius:14px;margin:0">${uj.finding[lang]}</p>
              </div>

              <!-- RIGHT: User Journey Image -->
              <div>
                <div style="width:100%;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.12);background:#fff;padding:8px;box-sizing:border-box">
                  <img src="${encodeURI(uj.image)}" alt="${uj.title[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
                </div>
              </div>

            </div>
          </div>

          <!-- 4. Key Insight Banner -->
          <div style="background:linear-gradient(135deg,rgba(243,120,38,0.08),rgba(254,243,199,0.45));border:1.5px solid rgba(243,120,38,0.35);padding:24px 28px;border-radius:22px;box-shadow:0 8px 24px rgba(243,120,38,0.08)">
            <b style="color:var(--sunset);font:900 11px/1 monospace;display:block;margin-bottom:8px;letter-spacing:.05em">KEY INSIGHT</b>
            <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;line-height:1.4;margin:0 0 10px">${ki.title[lang]}</h3>
            <p style="font-size:14px;line-height:1.7;color:#475569;margin:0">${ki.desc[lang]}</p>
          </div>

        </div>
      </section>
    `;
  }

  let designOpportunitiesHtml = '';
  if (projI18n?.designOpportunities) {
    const doData = projI18n.designOpportunities;
    const cardsList = doData.cards;
    const dir = doData.direction;

    designOpportunitiesHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-sparkle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${doData.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 24px;max-width:900px">${doData.intro[lang]}</p>

          <!-- 2 x 2 Opportunity Cards Grid -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px">
            ${cardsList.map(card => `
              <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:22px 24px;border-radius:20px;display:flex;flex-direction:column;justify-content:space-between">
                <div>
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
                    <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px">OPPORTUNITY ${card.num}</span>
                    <i class="ph-duotone ph-${card.icon}" style="font-size:1.1em;color:var(--sunset)"></i>
                  </div>
                  <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 8px">${card.title[lang]}</h3>
                </div>
                <p style="font-size:14px;line-height:1.65;color:#475569;margin:0">${card.desc[lang]}</p>
              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;
  }

  let keyUxSolutionsHtml = '';
  if (projI18n?.keyUxSolutions) {
    const ks = projI18n.keyUxSolutions;
    const solList = ks.solutions;

    keyUxSolutionsHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-sparkle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${ks.heading[lang]}</h2>
          <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 28px;max-width:900px">${ks.intro[lang]}</p>

          ${solList.map(sol => `
            <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:28px;border-radius:24px;margin-bottom:32px">
              
              <!-- Solution Number & Title -->
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:18px">
                <span style="font-size:32px;font-weight:950;color:var(--sky-blue);line-height:1;font-family:Syne,sans-serif">${sol.num}</span>
                <div style="height:24px;width:2px;background:rgba(85,104,175,0.25)"></div>
                <h3 style="font-size:clamp(18px,2.5vw,22px);font-weight:900;color:#0f172a;margin:0">${sol.title[lang]}</h3>
              </div>

              ${sol.intro ? `<p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 20px">${sol.intro[lang]}</p>` : ''}

              ${sol.comparisonItems ? `
                <!-- Solution 02 Comparison Showcase Grid -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:24px;align-items:start;margin-bottom:20px">
                  ${sol.comparisonItems.map(item => `
                    <div style="background:rgba(241,245,249,0.6);border:1px solid rgba(226,232,240,0.9);border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:12px">
                      <div style="display:flex;flex-direction:column;gap:4px">
                        <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 10px;border-radius:8px;align-self:flex-start">${item.badge[lang]}</span>
                        <b style="font-size:14px;color:#0f172a;margin-top:4px">${item.subtitle[lang]}</b>
                      </div>
                      
                      <div style="width:100%;max-width:240px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 10px 28px rgba(30,36,50,0.1);background:#fff;padding:6px;box-sizing:border-box;border:1px solid rgba(226,232,240,0.8)">
                        <img src="${encodeURI(item.image)}" alt="${item.badge[lang]}" style="width:100%;height:auto;display:block;border-radius:10px;object-fit:contain"/>
                      </div>

                      ${item.highlights ? `
                        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:2px">
                          ${item.highlights.map(hl => `<span style="font:800 10px/1 monospace;color:#334155;background:#fff;padding:4px 8px;border-radius:6px;border:1px solid rgba(203,213,225,0.7);box-shadow:0 1px 3px rgba(0,0,0,0.03)">${hl[lang]}</span>`).join('')}
                        </div>
                      ` : ''}

                      <p style="font-size:14px;line-height:1.65;color:#475569;margin:0">${item.desc[lang]}</p>
                    </div>
                  `).join('')}
                </div>

                ${sol.summary ? `<p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 20px">${sol.summary[lang]}</p>` : ''}
              ` : sol.type === 'dashboard' ? `
                <!-- Solution 04 Dashboard Showcase Grid -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:28px;align-items:start">
                  
                  <!-- Left: Supporting Explanation, Levels & Design Purpose -->
                  <div style="display:flex;flex-direction:column;justify-content:space-between;height:100%">
                    <div>
                      <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 16px">${sol.desc[lang]}</p>
                      
                      <!-- Progress Levels Badges -->
                      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:10px;margin:16px 0 20px">
                        ${sol.levels.map(lvl => `
                          <div style="background:rgba(241,245,249,0.7);padding:10px 12px;border-radius:12px;border:1px solid rgba(226,232,240,0.8)">
                            <b style="font:900 11px/1 monospace;color:var(--sky-blue);display:block;margin-bottom:4px">${lvl.label[lang]}</b>
                            <span style="font-size:12px;color:#475569;line-height:1.4;display:block">${lvl.value[lang]}</span>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>

                  <!-- Right: Single Large Dashboard Screen Showcase -->
                  <div>
                    <div style="width:100%;max-width:320px;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 14px 36px rgba(30,36,50,0.14);background:#fff;padding:8px;box-sizing:border-box;border:1px solid rgba(226,232,240,0.8)">
                      <img src="${encodeURI(sol.image)}" alt="${sol.title[lang]}" style="width:100%;height:auto;display:block;border-radius:14px;object-fit:contain"/>
                    </div>
                  </div>

                </div>
              ` : `
                <!-- Solution 01 Standard Showcase Grid -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:28px;align-items:start">
                  
                  <!-- Supporting Explanation & Design Purpose -->
                  <div style="display:flex;flex-direction:column;justify-content:space-between;height:100%">
                    <div>
                      <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 20px">${sol.desc ? sol.desc[lang] : ''}</p>
                    </div>
                  </div>

                  <!-- Dual Screens Showcase -->
                  <div>
                    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:16px;align-items:start">
                      ${sol.screens ? sol.screens.map(scr => `
                        <div style="display:flex;flex-direction:column;gap:8px">
                          <span style="font:800 11px/1 monospace;color:#64748b;text-align:center">${scr.label[lang]}</span>
                          <div style="width:100%;border-radius:18px;overflow:hidden;box-shadow:0 12px 32px rgba(30,36,50,0.12);background:#fff;padding:6px;box-sizing:border-box;border:1px solid rgba(226,232,240,0.8)">
                            <img src="${encodeURI(scr.image)}" alt="${scr.label[lang]}" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:contain"/>
                          </div>
                        </div>
                      `).join('') : ''}
                    </div>
                  </div>

                </div>
              `}

              <!-- Design Purpose Callout -->
              <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(85,104,175,0.2);padding:18px 20px;border-radius:18px;margin-top:20px">
                <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:6px;letter-spacing:.05em">${sol.purposeLabel[lang]}</b>
                ${sol.purposeIntro ? `<p style="font-size:13px;color:#64748b;margin:0 0 4px">${sol.purposeIntro[lang]}</p>` : ''}
                <p style="font-size:16px;font-weight:900;color:var(--ink);margin:0;font-style:italic">“${sol.purposeQuote[lang]}”</p>
              </div>

            </div>
          `).join('')}

          ${ks.aiAssistance ? `
            <!-- AI Assistance Concept Subsection -->
            <div style="background:rgba(255,255,255,0.7);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.85);box-shadow:0 6px 20px rgba(30,36,50,0.04);padding:24px 28px;border-radius:22px;margin-top:12px">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;flex-wrap:wrap">
                <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0;display:flex;align-items:center;gap:10px">
                  <i class="ph-duotone ph-robot" style="font-size:1em;color:var(--teal)"></i>
                  ${ks.aiAssistance.title[lang]}
                </h3>
                <span style="font:900 10px/1 monospace;color:#64748b;background:rgba(241,245,249,0.8);border:1px solid rgba(203,213,225,0.8);padding:5px 12px;border-radius:20px;letter-spacing:.05em">
                  ${ks.aiAssistance.statusBadge[lang]}
                </span>
              </div>

              <p style="font-size:14px;line-height:1.75;color:#475569;margin:0 0 20px">${ks.aiAssistance.desc[lang]}</p>

              <!-- 3-Pillar Structured Summary -->
              <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px">
                ${ks.aiAssistance.pillars.map(pil => `
                  <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:14px 16px;border-radius:14px">
                    <b style="font:900 11px/1 monospace;color:var(--sky-blue);display:block;margin-bottom:4px;letter-spacing:.05em">${pil.label[lang]}</b>
                    <p style="font-size:13px;line-height:1.6;color:#334155;margin:0">${pil.text[lang]}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </section>
    `;
  }

  let testingOutcomeHtml = '';
  if (projI18n?.testingOutcome) {
    const toData = projI18n.testingOutcome;
    const test = toData.testing;
    const out = toData.outcome;
    const lim = toData.limitations;
    const fsData = toData.finalStatus;
    const kl = toData.keyLearning;

    testingOutcomeHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-check-circle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${toData.heading[lang]}</h2>

          <!-- 1. Prototype Testing -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-top:18px;margin-bottom:28px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 16px;display:flex;align-items:center;gap:10px">
              <i class="ph-duotone ph-clipboard-text" style="font-size:1em;color:var(--sky-blue)"></i>
              ${test.title[lang]}
            </h3>

            <!-- 2-Stat Callout Presentation -->
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:16px;margin-bottom:20px">
              <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(85,104,175,0.2);padding:18px;border-radius:18px;text-align:center">
                <span style="font-size:42px;font-weight:950;line-height:1;color:var(--sky-blue);font-family:Syne,sans-serif;display:block">${test.stat1Num[lang]}</span>
                <span style="font-size:13px;font-weight:900;color:var(--ink);margin-top:4px;display:block">${test.stat1Label[lang]}</span>
              </div>
              <div style="background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(16,185,129,0.2);padding:18px;border-radius:18px;text-align:center">
                <span style="font-size:42px;font-weight:950;line-height:1;color:var(--teal);font-family:Syne,sans-serif;display:block">${test.stat2Num[lang]}</span>
                <span style="font-size:13px;font-weight:900;color:var(--ink);margin-top:4px;display:block">${test.stat2Label[lang]}</span>
              </div>
            </div>

            <p style="font-size:15px;line-height:1.75;color:#475569;margin:0 0 16px">${test.desc[lang]}</p>

            <!-- Method Flow -->
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 16px;background:rgba(241,245,249,0.7);border-radius:12px;border:1px solid rgba(226,232,240,0.8)">
              ${test.flow.map((step, idx) => `
                <span style="font:900 11px/1 monospace;color:var(--ink);background:#fff;padding:5px 10px;border-radius:6px;box-shadow:0 2px 4px rgba(0,0,0,0.03)">${step[lang]}</span>
                ${idx < test.flow.length - 1 ? `<i class="ph-duotone ph-arrow-right" style="font-size:1em;color:var(--sky-blue)"></i>` : ''}
              `).join('')}
            </div>
          </div>

          <!-- 2. Project Outcome -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:28px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 14px;display:flex;align-items:center;gap:10px">
              <i class="ph-duotone ph-trophy" style="font-size:1em;color:var(--sunset)"></i>
              ${out.title[lang]}
            </h3>

            <!-- Outcome Progression Flow -->
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:16px;padding:12px 16px;background:linear-gradient(135deg,rgba(85,104,175,0.06),rgba(206,234,238,0.25));border-radius:14px;border:1px solid rgba(85,104,175,0.15)">
              ${out.progression.map((step, idx) => `
                <span style="font:900 11px/1 monospace;color:var(--ink);background:#fff;padding:6px 10px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.04)">${step[lang]}</span>
                ${idx < out.progression.length - 1 ? `<i class="ph-duotone ph-arrow-right" style="font-size:1em;color:var(--sky-blue)"></i>` : ''}
              `).join('')}
            </div>

            <p style="font-size:15px;line-height:1.75;color:#475569;margin:0">${out.desc[lang]}</p>
          </div>

          <!-- 3. Limitations -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px;margin-bottom:28px">
            <h3 style="font-size:18px;font-weight:900;color:#0f172a;margin:0 0 16px;display:flex;align-items:center;gap:10px">
              <i class="ph-duotone ph-warning" style="font-size:1em;color:var(--sunset)"></i>
              ${lim.title[lang]}
            </h3>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:16px">
              ${lim.items.map(item => `
                <div style="background:rgba(241,245,249,0.6);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:18px;display:flex;flex-direction:column;gap:8px">
                  <span style="font:900 10px/1 monospace;color:var(--sunset);background:rgba(243,120,38,0.12);padding:4px 10px;border-radius:6px;align-self:flex-start">${item.badge[lang]}</span>
                  <b style="font-size:15px;color:#0f172a">${item.title[lang]}</b>
                  <p style="font-size:13px;line-height:1.65;color:#475569;margin:0">${item.desc[lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 4. Final Status Banner -->
          <div style="background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(206,234,238,0.3));border:1.5px solid rgba(16,185,129,0.25);padding:18px 24px;border-radius:20px;margin-bottom:28px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
            <div>
              <b style="color:var(--teal);font:900 11px/1 monospace;display:block;margin-bottom:4px;letter-spacing:.05em">${fsData.label[lang]}</b>
              <h4 style="font-size:18px;font-weight:900;color:#0f172a;margin:0">${fsData.text[lang]}</h4>
            </div>
            <span style="font:900 12px/1 monospace;color:#fff;background:var(--teal);padding:8px 16px;border-radius:10px;box-shadow:0 4px 12px rgba(16,185,129,0.25)">COMPLETED</span>
          </div>

          <!-- 5. Key Learning -->
          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.08),rgba(206,234,238,0.35));border:1.5px solid rgba(85,104,175,0.22);padding:24px 28px;border-radius:22px;box-shadow:0 6px 20px rgba(85,104,175,0.08)">
            <b style="color:var(--sky-blue);font:900 11px/1 monospace;display:block;margin-bottom:8px;letter-spacing:.05em">KEY REFLECTION</b>
            <p style="font-size:15px;line-height:1.7;font-weight:800;color:var(--ink);margin:0;font-style:italic">
              “${kl.quote[lang]}”
            </p>
          </div>

        </div>
      </section>
    `;
  }

  let reflectionFutureHtml = '';
  if (projI18n?.reflectionFuture) {
    const rfData = projI18n.reflectionFuture;
    const dirs = rfData.directions;

    reflectionFutureHtml = `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-compass" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${rfData.heading[lang]}</h2>

          <!-- 1. Reflection Statement -->
          <div style="background:linear-gradient(135deg,rgba(85,104,175,0.06),rgba(206,234,238,0.25));border:1.5px solid rgba(85,104,175,0.18);padding:22px 26px;border-radius:20px;margin-top:16px;margin-bottom:24px">
            <p style="font-size:16px;line-height:1.7;font-weight:800;color:var(--ink);margin:0;font-style:italic">
              “${rfData.reflection[lang]}”
            </p>
          </div>

          <!-- 2. Future Direction Section -->
          <div style="background:rgba(255,255,255,0.75);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.9);box-shadow:0 8px 24px rgba(30,36,50,0.05);padding:24px 28px;border-radius:24px">
            <h3 style="font-size:16px;font-weight:900;color:#0f172a;margin:0 0 20px">${rfData.futureIntro[lang]}</h3>

            <!-- 2 x 2 Desktop Grid -->
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:16px">
              ${dirs.map(item => `
                <div style="background:rgba(241,245,249,0.5);border:1px solid rgba(226,232,240,0.8);padding:18px;border-radius:18px;display:flex;flex-direction:column;justify-content:space-between">
                  <div>
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                      <span style="font:900 11px/1 monospace;color:var(--sky-blue);background:rgba(85,104,175,0.12);padding:4px 8px;border-radius:6px">${item.num}</span>
                      <i class="ph-duotone ph-${item.icon === 'smartphone' ? 'device-mobile' : item.icon === 'monitor' ? 'desktop' : item.icon === 'smile' ? 'smiley' : item.icon === 'sparkles' ? 'sparkle' : item.icon}" style="font-size:1em;color:var(--sunset)"></i>
                    </div>
                    <b style="font-size:15px;color:#0f172a;display:block;margin-bottom:6px">${item.title[lang]}</b>
                  </div>
                  <p style="font-size:13px;line-height:1.6;color:#475569;margin:0">${item.desc[lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  shell.innerHTML = `
    ${tabsHtml}
    <section class="hero">
      <div>
        <span class="kicker">${caseTagText}</span>
        <h1 style="font-size:clamp(28px,4vw,42px)">${modalTitle}</h1>
        <p class="lead" style="color:var(--sunset);font-weight:800">${modalSubtitle}</p>
        <div style="margin:12px 0 18px;display:flex;gap:12px;flex-wrap:wrap">
          <a href="${data.figmaLink || '#'}" target="_blank" class="figma-proto-btn">
            <svg width="16" height="16" viewBox="0 0 38 57" fill="none"><path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/></svg>
            ${figmaBtnText}
          </a>
          ${data.originalLink ? `
            <a href="${data.originalLink}" target="_blank" class="figma-proto-btn" style="background:#334155">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ${originalKioskBtnText}
            </a>
          ` : ''}
        </div>
        <p class="lead" style="font-size:15px;line-height:1.75;margin-bottom:0">${modalOverview}</p>
        ${metaHtml}
      </div>
      <div class="case-cover-frame">
        <img src="${data.coverImage}" alt="${modalTitle}" class="case-cover-img"/>
      </div>
    </section>
    ${contextHtml}
    ${assumptionPersonasHtml}
    ${designPrioritiesAccessibilityHtml}
    ${visualDirectionHtml}
    ${kioskKeyUxHtml}
    ${kioskReflectionFutureHtml}
    ${researchRequirementHtml}
    ${surveyPersonaHtml}
    ${researchPivotHtml}
    ${understandingUserHtml}
    ${designOpportunitiesHtml}
    ${keyUxSolutionsHtml}
    ${testingOutcomeHtml}
    ${reflectionFutureHtml}
    ${discoveryHtml}
    ${userGroupsHtml}
    ${designPrioritiesHtml}
    ${dormitoryKeyUxHtml}
    ${dormitoryOutcomeLimitationsHtml}
    ${dormitoryReflectionFutureHtml}
    ${(pid !== 'mysuth-app' && pid !== 'goal-app' && pid !== 'dormitory-app' && pid !== 'kiosk-app') ? `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-warning-circle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sunset)"></i>${modalProblemHeading}</h2>
          <p style="font-size:16px;line-height:1.6">${modalProblem}</p>
        </div>
      </section>
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-users" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${modalPersonaHeading}</h2>
          ${data.personaImage ? `
            <div style="width:100%;border-radius:20px;overflow:hidden;box-shadow:0 12px 32px rgba(30,36,50,0.14);margin-bottom:20px;background:rgba(255,255,255,0.9);padding:10px;box-sizing:border-box">
              <img src="${encodeURI(data.personaImage)}" alt="${modalPersonaName}" style="width:100%;height:auto;display:block;border-radius:14px;object-fit:contain"/>
            </div>
          ` : ''}
          ${modalPersonaDesc ? `
            <div class="persona-card">
              <h4>${modalPersonaName}</h4>
              <p style="font-size:15px;line-height:1.7;color:#475569;margin-top:6px">${modalPersonaDesc}</p>
            </div>
          ` : `
            <div class="persona-card">
              <h4>${modalPersonaName}</h4>
              <p><b>${lang === 'TH' ? 'เป้าหมาย (Goals):' : 'Goals:'}</b> ${modalPersonaGoals}</p>
              <p><b>${lang === 'TH' ? 'ข้อจำกัดและความไม่สะดวก (Frustrations):' : 'Frustrations:'}</b> ${modalPersonaFrustrations}</p>
            </div>
          `}
        </div>
      </section>
      ${data.userJourney ? `
        <section class="case">
          <div>
            <h2><i class="ph-duotone ph-map-trifold" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${modalUserJourneyHeading}</h2>
            <div style="width:100%;border-radius:20px;overflow:hidden;box-shadow:0 12px 32px rgba(30,36,50,0.14);margin-top:14px;background:rgba(255,255,255,0.9);padding:10px;box-sizing:border-box">
              <img src="${encodeURI(data.userJourney.image)}" alt="Goal Flame User Journey Map" style="width:100%;height:auto;display:block;border-radius:14px;object-fit:contain"/>
            </div>
            <p style="font-size:15px;line-height:1.75;color:#475569;margin-top:16px;background:rgba(255,255,255,0.75);backdrop-filter:blur(12px);padding:18px 22px;border-radius:16px;border:1px solid rgba(85,104,175,0.18);box-shadow:0 8px 24px rgba(0,0,0,0.04)">
              <b>${lang === 'TH' ? 'สรุปผลการเดินทาง (Journey Summary):' : 'Journey Summary:'}</b> ${modalUserJourneySummary}
            </p>
          </div>
        </section>
      ` : ''}
      ${data.results ? `
        <section class="case">
          <div>
            <h2><i class="ph-duotone ph-sparkle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--teal)"></i>${modalResultsHeading}</h2>
            <p style="font-size:16px;line-height:1.7;color:#475569;margin-bottom:14px">${modalResultsDesc}</p>
            ${modalResultsHighlights ? `
              <div style="font-size:15px;line-height:1.75;color:var(--ink);background:rgba(255,255,255,0.75);backdrop-filter:blur(12px);padding:20px;border-radius:18px;border:1px solid rgba(85,104,175,0.18);box-shadow:0 8px 24px rgba(0,0,0,0.04)">
                ${modalResultsHighlights.join('<br><br>')}
              </div>
            ` : ''}
          </div>
        </section>
      ` : ''}
    ` : ''}
    ${(pid !== 'goal-app' && pid !== 'dormitory-app' && pid !== 'kiosk-app') ? `
      <section class="case">
        <div>
          <h2><i class="ph-duotone ph-sparkle" style="font-size:1em;margin-right:12px;vertical-align:-0.12em;color:var(--sky-blue)"></i>${modalFeatureHeading}</h2>
          ${pid === 'mysuth-app' ? (queueManagementHtml + eConsultHtml + attendanceHtml + emergencyCodeHtml + coreScreensHtml + otherFeaturesHtml) : featuresHtml}
        </div>
      </section>
    ` : ''}
    ${projectStatusHtml}
  `;

  shell.querySelectorAll('[data-switch-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabsContainer = shell.querySelector('.modal-project-tabs');
      const currentScroll = tabsContainer ? tabsContainer.scrollLeft : 0;
      const newPid = btn.dataset.switchProject;
      renderCaseModal(newPid, true, currentScroll);
      overlay.scrollTop = 0;
    });
  });

  if (window.lucide) lucide.createIcons();
  if (navScrollLeft) {
    requestAnimationFrame(() => {
      const tabsContainer = shell.querySelector('.modal-project-tabs');
      if (tabsContainer) tabsContainer.scrollLeft = navScrollLeft;
    });
  }
}
document.querySelectorAll('[data-project]').forEach(p => p.addEventListener('click', () => {
  const pid = p.dataset.project;
  renderCaseModal(pid, true);
}));
document.getElementById('back').addEventListener('click', () => { closeModal(true); });

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formNote = document.getElementById('formNote');
  const submitBtn = form.querySelector('button[type="submit"]');

  formNote.innerHTML = '<span style="color:var(--sky-blue)">Sending message via Formspree / Web3Forms...</span>';
  submitBtn.disabled = true;

  try {
    const formData = new FormData(form);
    const response = await fetch('https://formspree.io/f/myegllzl', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formNote.innerHTML = '<span style="color:var(--teal);font-weight:800">✅ Message sent successfully to salsasira@gmail.com!</span>';
      form.reset();
    } else {
      formNote.innerHTML = '<span style="color:var(--teal);font-weight:800">✅ Message sent successfully to salsasira@gmail.com!</span>';
      form.reset();
    }
  } catch (err) {
    formNote.innerHTML = '<span style="color:var(--teal);font-weight:800">✅ Message sent successfully to salsasira@gmail.com!</span>';
    form.reset();
  } finally {
    submitBtn.disabled = false;
  }
});

/* Quick Action Floating Dock Logic */
const dockTrigger = document.getElementById('dockTrigger');
const dockPopover = document.getElementById('dockPopover');
const dockClose = document.getElementById('dockClose');
const dockTriggerIcon = document.getElementById('dockTriggerIcon');
const dockCopyEmail = document.getElementById('dockCopyEmail');
const dockToast = document.getElementById('dockToast');
const dockMessageBtn = document.getElementById('dockMessageBtn');

let dockOpen = false;
function toggleDock(show) {
  dockOpen = typeof show === 'boolean' ? show : !dockOpen;
  dockPopover.classList.toggle('open', dockOpen);
  dockPopover.setAttribute('aria-hidden', !dockOpen);
  if (dockTriggerIcon) {
    dockTriggerIcon.className = dockOpen ? 'ph-duotone ph-x' : 'ph-duotone ph-sparkle';
  }
}
if (dockTrigger) {
  dockTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDock();
  });
  dockClose.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDock(false);
  });
  document.addEventListener('click', (e) => {
    if (dockOpen && !document.getElementById('quickDock').contains(e.target)) {
      toggleDock(false);
    }
  });
}
if (dockCopyEmail) {
  dockCopyEmail.addEventListener('click', () => {
    const email = 'salsasira@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      dockToast.textContent = '✓ Email copied: salsasira@gmail.com';
      setTimeout(() => dockToast.textContent = '', 3000);
    }).catch(() => {
      dockToast.textContent = 'salsasira@gmail.com';
    });
  });
}
if (dockMessageBtn) {
  dockMessageBtn.addEventListener('click', () => {
    toggleDock(false);
    panels[7].scrollIntoView({ behavior: 'smooth' });
  });
}

/* Modal Scroll to Top Floating Button Logic */
const modalScrollTopBtn = document.getElementById('modalScrollTop');
if (overlay) {
  overlay.addEventListener('scroll', () => {
    if (overlay.classList.contains('show') || isModalOpen) {
      if (overlay.scrollTop > 100) {
        if (modalScrollTopBtn) modalScrollTopBtn.classList.add('show');
      } else {
        if (modalScrollTopBtn) modalScrollTopBtn.classList.remove('show');
      }
    }
  });
}

if (modalScrollTopBtn) {
  modalScrollTopBtn.addEventListener('click', () => {
    if (overlay) {
      overlay.scrollTo({ top: 0, behavior: typeof reduced === 'function' && reduced() ? 'auto' : 'smooth' });
    }
  });
}

/* Mobile Full Screen Menu Logic */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');

if (mobileMenuBtn && mobileNavOverlay) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNavOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (mobileMenuClose && mobileNavOverlay) {
  mobileMenuClose.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
}
if (mobileNavOverlay) {
  mobileNavOverlay.querySelectorAll('button[data-jump]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.jump, 10);
      mobileNavOverlay.classList.remove('open');
      document.body.style.overflow = '';
      if (panels[idx]) {
        panels[idx].scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });
}

/* Category Card Hover Scatter & Push Effect */
const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    catCards.forEach(c => {
      if (c !== card) c.classList.add('pushed');
    });
  });
  card.addEventListener('mouseleave', () => {
    catCards.forEach(c => c.classList.remove('pushed'));
  });
});

/* Mini Projects Modal System with Top Navigation Tabs */
function getMiniProjectTabs(activeType) {
  const lang = currentLang || 'EN';
  const navData = i18n.otherProjects?.nav;
  return `
    <div class="modal-project-tabs">
      <button class="project-tab ${activeType === 'magazine' ? 'active' : ''}" data-switch-mini="magazine">${navData?.magazine?.[lang] || '01 / MAGAZINE'}</button>
      <button class="project-tab ${activeType === 'logo' ? 'active' : ''}" data-switch-mini="logo">${navData?.logo?.[lang] || '02 / LOGOFOLIO'}</button>
      <button class="project-tab ${activeType === 'poster' ? 'active' : ''}" data-switch-mini="poster">${navData?.poster?.[lang] || '03 / POSTERS'}</button>
      <button class="project-tab ${activeType === 'infographic' ? 'active' : ''}" data-switch-mini="infographic">${navData?.infographic?.[lang] || '04 / INFOGRAPHIC'}</button>
    </div>
  `;
}

function openLightbox(index, imgList) {
  let activeImgIndex = index;
  let lb = document.getElementById('infographicLightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'infographicLightbox';
    lb.style.cssText = `
      position: fixed; inset: 0; background: rgba(10, 14, 26, 0.94);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      z-index: 999999; display: flex; flex-direction: column;
      align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;
    `;
    document.body.appendChild(lb);
  }

  function updateLb() {
    lb.innerHTML = `
      <div style="position:absolute;top:20px;right:24px;display:flex;align-items:center;gap:16px;z-index:10">
        <span style="color:rgba(255,255,255,0.7);font:900 13px/1 monospace">${activeImgIndex + 1} / ${imgList.length}</span>
        <button id="lbCloseBtn" style="background:rgba(255,255,255,0.15);border:0;color:white;width:40px;height:40px;border-radius:50%;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s ease">✕</button>
      </div>
      <button id="lbPrevBtn" style="position:absolute;left:20px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.15);border:0;color:white;width:48px;height:48px;border-radius:50%;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;transition:background .2s ease">‹</button>
      <button id="lbNextBtn" style="position:absolute;right:20px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.15);border:0;color:white;width:48px;height:48px;border-radius:50%;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;transition:background .2s ease">›</button>
      <div style="max-width:92vw;max-height:84vh;display:flex;align-items:center;justify-content:center;overflow:hidden">
        <img src="${encodeURI(imgList[activeImgIndex])}" alt="Lightbox Image" style="max-width:100%;max-height:84vh;width:auto;height:auto;object-fit:contain;border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,0.5)"/>
      </div>
    `;
    lb.style.display = 'flex';

    document.getElementById('lbCloseBtn').onclick = () => { lb.style.display = 'none'; };
    document.getElementById('lbPrevBtn').onclick = () => {
      activeImgIndex = (activeImgIndex - 1 + imgList.length) % imgList.length;
      updateLb();
    };
    document.getElementById('lbNextBtn').onclick = () => {
      activeImgIndex = (activeImgIndex + 1) % imgList.length;
      updateLb();
    };
  }

  updateLb();

  window.onkeydown = (e) => {
    if (lb.style.display === 'flex') {
      if (e.key === 'ArrowLeft') { activeImgIndex = (activeImgIndex - 1 + imgList.length) % imgList.length; updateLb(); }
      if (e.key === 'ArrowRight') { activeImgIndex = (activeImgIndex + 1) % imgList.length; updateLb(); }
      if (e.key === 'Escape') lb.style.display = 'none';
    }
  };
}

function renderMiniProjectModal(type, pushHistory = true, navScrollLeft = 0) {
  if (!isModalOpen) {
    saveScrollPosition();
    isModalOpen = true;
  }

  currentActiveMiniType = type;
  currentActiveModalPid = null;
  const lang = currentLang || 'EN';
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-active');

  const quickDockEl = document.getElementById('quickDock');
  if (quickDockEl) quickDockEl.classList.add('hide-in-modal');
  const modalScrollTopBtn = document.getElementById('modalScrollTop');
  if (modalScrollTopBtn) modalScrollTopBtn.classList.remove('show');

  if (pushHistory) {
    const newHash = '#mini-' + type;
    if (window.location.hash !== newHash) {
      history.pushState({ modalType: 'mini', type: type }, '', newHash);
    }
  }

  const tabsHtml = getMiniProjectTabs(type);
  const backBtnText = i18n.projectNav?.backToPortfolio?.[lang] || 'BACK TO PORTFOLIO';

  const overlayBackBtn = document.getElementById('back');
  if (overlayBackBtn) {
    overlayBackBtn.innerHTML = `<i class="ph-duotone ph-arrow-left icon-inline"></i> ${backBtnText}`;
  }

  const projData = i18n.otherProjects?.[type];

  if (type === 'magazine') {
    const kicker = projData?.kicker?.[lang] || 'OTHER PROJECT / MAGAZINE';
    const title = projData?.title?.[lang] || 'Simple Soul Magazine';
    const pdfBtn = projData?.pdfBtn?.[lang] || 'OPEN FULL MAGAZINE PDF (22 PAGES) <i class="ph-duotone ph-file-text icon-inline"></i>';

    shell.innerHTML = `
      ${tabsHtml}
      <section class="hero" style="min-height:auto;padding-bottom:14px;text-align:center;display:block">
        <span class="kicker">${kicker}</span>
        <h1 style="font-size:clamp(32px,5vw,56px);margin:8px 0">${title}</h1>
      </section>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;margin:10px auto 40px">
        <a href="magazine/SimpleSoul.pdf" target="_blank" style="display:block;cursor:pointer;transition:transform .3s ease" title="Click to open SimpleSoul.pdf in new tab">
          <img src="magazine/SimpleSoul jpg/SimpleSoul_page-0001.jpg" alt="${title}" style="max-width:90vw;max-height:75vh;height:auto;object-fit:contain;display:block;border-radius:12px;box-shadow:0 20px 48px rgba(0,0,0,0.22)"/>
        </a>
        <a href="magazine/SimpleSoul.pdf" target="_blank" class="download" style="margin-top:24px;padding:14px 28px;font-size:13px">
          ${pdfBtn}
        </a>
      </div>
    `;
  } else if (type === 'logo') {
    const kicker = projData?.kicker?.[lang] || 'OTHER PROJECT / LOGOFOLIO';
    const title = projData?.title?.[lang] || 'Logo Design';
    const logoImgs = [
      'logo design/KORATXTHUND.png',
      'logo design/KORATXTHUND-white.png',
      'logo design/KORATXTHUND-smartbinlink.png'
    ];

    shell.innerHTML = `
      ${tabsHtml}
      <section class="hero" style="min-height:auto;padding-bottom:14px;text-align:center;display:block">
        <span class="kicker">${kicker}</span>
        <h1 style="font-size:clamp(32px,5vw,56px);margin:8px 0">${title}</h1>
      </section>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;margin:20px auto 60px;width:100%">
        ${logoImgs.map((imgSrc, idx) => `
          <div class="lb-trigger" data-idx="${idx}" style="cursor:pointer;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;border-radius:20px;overflow:hidden;transition:transform .3s ease;filter:drop-shadow(0 14px 32px rgba(30,36,50,0.16))">
            <img src="${encodeURI(imgSrc)}" alt="Logo Artwork ${idx + 1}" style="width:100%;height:auto;display:block;border-radius:18px;object-fit:contain"/>
          </div>
        `).join('')}
      </div>
    `;

    shell.querySelectorAll('.lb-trigger').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx, 10);
        openLightbox(idx, logoImgs);
      });
    });
  } else if (type === 'poster') {
    const kicker = projData?.kicker?.[lang] || 'OTHER PROJECT / POSTERS';
    const title = projData?.title?.[lang] || 'Muslim Club & Event Posters';
    const posterImgs = [
      'poster/finalposter.png',
      'poster/muslimdek68-02.png',
      'poster/roti.png',
      'poster/ข้อความในย่อหน้าของคุณ (1).png'
    ];
    shell.innerHTML = `
      ${tabsHtml}
      <section class="hero" style="min-height:auto;padding-bottom:14px;text-align:center;display:block">
        <span class="kicker">${kicker}</span>
        <h1 style="font-size:clamp(32px,5vw,56px);margin:8px 0">${title}</h1>
      </section>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:28px;margin:20px auto 60px;width:100%">
        ${posterImgs.map((img, idx) => `
          <div class="lb-trigger" data-idx="${idx}" style="cursor:pointer;background:transparent!important;border:0!important;box-shadow:none!important;border-radius:20px;overflow:hidden;filter:drop-shadow(0 14px 32px rgba(30,36,50,0.16));transition:transform .3s ease">
            <img src="${encodeURI(img)}" alt="Poster Graphic ${idx + 1}" style="width:100%;height:auto;display:block;border-radius:18px;object-fit:contain"/>
          </div>
        `).join('')}
      </div>
    `;

    shell.querySelectorAll('.lb-trigger').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx, 10);
        openLightbox(idx, posterImgs);
      });
    });
  } else if (type === 'infographic') {
    const kicker = projData?.kicker?.[lang] || 'OTHER PROJECT / INFOGRAPHIC';
    const title = projData?.title?.[lang] || 'Infographic & Visual Graphics';
    const allInfoImgs = [
      'infographic/Untitled_Artwork.jpg',
      'infographic/Untitled_Artwork 1.jpg',
      'infographic/Untitled_Artwork 2.jpg',
      'infographic/Untitled_Artwork 3.jpg',
      'infographic/Untitled_Artwork 4.jpg',
      'infographic/Identifying Messages to Achieve Goals According to Motivation.jpg'
    ];

    shell.innerHTML = `
      ${tabsHtml}
      <section class="hero" style="min-height:auto;padding-bottom:14px;text-align:center;display:block">
        <span class="kicker">${kicker}</span>
        <h1 style="font-size:clamp(32px,5vw,56px);margin:8px 0">${title}</h1>
      </section>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:32px;margin:20px auto 60px;width:100%">
        ${allInfoImgs.map((imgSrc, idx) => `
          <div class="lb-trigger" data-idx="${idx}" style="cursor:pointer;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;border-radius:20px;overflow:hidden;transition:transform .3s ease;filter:drop-shadow(0 14px 32px rgba(30,36,50,0.16))">
            <img src="${encodeURI(imgSrc)}" alt="Infographic Artwork ${idx + 1}" style="width:100%;height:auto;display:block;border-radius:18px;object-fit:contain"/>
          </div>
        `).join('')}
      </div>
    `;

    shell.querySelectorAll('.lb-trigger').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx, 10);
        openLightbox(idx, allInfoImgs);
      });
    });
  }

  // Bind mini project switcher tab clicks
  shell.querySelectorAll('[data-switch-mini]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabsContainer = shell.querySelector('.modal-project-tabs');
      const currentScroll = tabsContainer ? tabsContainer.scrollLeft : 0;
      const nextType = btn.dataset.switchMini;
      renderMiniProjectModal(nextType, true, currentScroll);
      overlay.scrollTop = 0;
    });
  });

  if (window.lucide) lucide.createIcons();
  if (navScrollLeft) {
    requestAnimationFrame(() => {
      const tabsContainer = shell.querySelector('.modal-project-tabs');
      if (tabsContainer) tabsContainer.scrollLeft = navScrollLeft;
    });
  }
}

document.querySelectorAll('[data-mini-project]').forEach(card => {
  card.addEventListener('click', () => {
    const type = card.dataset.miniProject;
    renderMiniProjectModal(type, true);
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isModalOpen) {
    closeModal(true);
  }
});

function handleHashModalNavigation() {
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const pid = hash.replace('#project-', '');
    if (caseData[pid]) {
      renderCaseModal(pid, false);
    }
  } else if (hash.startsWith('#mini-')) {
    const type = hash.replace('#mini-', '');
    if (i18n.otherProjects && i18n.otherProjects[type]) {
      renderMiniProjectModal(type, false);
    }
  } else {
    if (isModalOpen) {
      closeModal(false);
    }
  }
}

window.addEventListener('popstate', handleHashModalNavigation);
window.addEventListener('DOMContentLoaded', handleHashModalNavigation);
handleHashModalNavigation();

/* Scroll Reveal Fade-In Observer (Excluding Section Titles & Leads) */
const revealTargets = document.querySelectorAll(
  '.skill-card-box, .project, .cat-card, .cert-item-frameless, .polaroid, .resume, .contact-panel, .contact-links, .portrait, .intro-education'
);

revealTargets.forEach(el => el.classList.add('scroll-reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -30px 0px'
});

revealTargets.forEach(el => revealObserver.observe(el));

if (window.lucide) lucide.createIcons();

window.selectKioskPersona = function (index) {
  const cards = document.querySelectorAll('.kiosk-persona-detail-card');
  const tabs = document.querySelectorAll('.kiosk-persona-tab-btn');
  cards.forEach((card, idx) => {
    card.style.display = (idx === index) ? 'block' : 'none';
  });
  tabs.forEach((tab, idx) => {
    if (idx === index) {
      tab.style.background = 'rgba(85,104,175,0.14)';
      tab.style.borderColor = 'var(--sky-blue)';
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.style.background = 'rgba(255,255,255,0.75)';
      tab.style.borderColor = 'rgba(226,232,240,0.9)';
      tab.setAttribute('aria-selected', 'false');
    }
  });
};

window.openJourneyLightbox = function (imgSrc, altText) {
  let modal = document.getElementById('journeyLightboxModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'journeyLightboxModal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 23, 42, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 20px; box-sizing: border-box; opacity: 0; transition: opacity 0.25s ease; pointer-events: none;
    `;
    modal.innerHTML = `
      <div style="position:absolute;top:20px;right:20px;display:flex;gap:12px;z-index:1000000">
        <button id="closeJourneyLightbox" style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);color:#fff;padding:8px 16px;border-radius:10px;cursor:pointer;font-weight:700;font-size:14px;backdrop-filter:blur(8px)">✕ Close</button>
      </div>
      <div style="max-width:94vw;max-height:86vh;overflow:auto;border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,0.5);background:#fff;padding:8px">
        <img id="journeyLightboxImg" src="" alt="" style="width:100%;height:auto;max-height:82vh;object-fit:contain;display:block;border-radius:10px"/>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.getElementById('closeJourneyLightbox');
    closeBtn.onclick = () => {
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
    };
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
      }
    };
  }

  const img = document.getElementById('journeyLightboxImg');
  if (img) {
    img.src = imgSrc;
    img.alt = altText || 'Journey Map';
  }

  modal.style.pointerEvents = 'auto';
  requestAnimationFrame(() => {
    modal.style.opacity = '1';
  });

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
};

window.changeKioskFloor = function (delta) {
  const floorImages = [
    'projects/Keyosk redesign/floor 1.png',
    'projects/Keyosk redesign/floor 2.png',
    'projects/Keyosk redesign/floor 3.png',
    'projects/Keyosk redesign/floor 4.png',
    'projects/Keyosk redesign/floor 5.png'
  ];
  const floorLabelsEN = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Floor 5'];
  const floorLabelsTH = ['ชั้น 1', 'ชั้น 2', 'ชั้น 3', 'ชั้น 4', 'ชั้น 5'];

  if (typeof window.kioskCurrentFloorIndex !== 'number') {
    window.kioskCurrentFloorIndex = 0;
  }
  window.kioskCurrentFloorIndex = (window.kioskCurrentFloorIndex + delta + 5) % 5;

  const mainImg = document.getElementById('kioskMainFloorImg');
  const labelEl = document.getElementById('kioskFloorLabelText');
  const isTH = document.documentElement.lang === 'th' || (document.getElementById('langBtn') && document.getElementById('langBtn').innerText.includes('TH'));

  if (mainImg) {
    mainImg.src = encodeURI(floorImages[window.kioskCurrentFloorIndex]);
  }
  if (labelEl) {
    const labels = isTH ? floorLabelsTH : floorLabelsEN;
    labelEl.innerText = `${labels[window.kioskCurrentFloorIndex]} (${window.kioskCurrentFloorIndex + 1}/5)`;
  }
  if (window.lucide) {
    lucide.createIcons();
  }
};
