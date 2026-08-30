import InsyncAnimation from "../assets/img/GIF/InSync.json?url";
import InsyncRole from "../assets/img/InSync_Role.avif";
import InsyncChallenge from "../assets/img/InSync_Challenge.avif";
import InsyncProjectTimeline from "../assets/img/InSync_Project_Timeline.png";
import InsyncDesign_1 from "../assets/img/InSync_Wireframe_1.png";
import InsyncDesign_2 from "../assets/img/InSync_Wireframe_2.png";
import InsyncDesign_3 from "../assets/img/InSync_Wireframe_3.png";
import InsyncProject_Feature from "../assets/img/InSync_Design1.png";
import InsyncProject_Schedule from "../assets/img/InSync_Design_2.png";
import Insync_familyNote from "../assets/img/Family_note.png";
import Insync_QuickTip from "../assets/img/InSync_Schedule.png";

import YoUQuest_Banner from "../assets/img/GIF/yoUQuest_banner.json?url";
import WellBeing from "../assets/img/WellBeing.png";
import Overwhelming from "../assets/img/overwhelming.png";
import UQ_User_Flow from "../assets/img/UQ_User_Flow.jpg";
import UQ_Sketch_1 from "../assets/img/UQ_Sketch1.png";
import UQ_Sketch_2 from "../assets/img/UQ_Sketch_2.png";
import UQ_Sketch_3 from "../assets/img/UQ_Sketch_3.png";
import UQ_Home_page from "../assets/img/Homepage.png";
import UQ_Battlepass from "../assets/img/Battle pass.png";
import UQ_Break from "../assets/img/Battle_pass_Break.png";
import UQ_mountain from "../assets/img/Mountains.png";
import UQ_unlock from "../assets/img/Battle_pass_Finished.png";

import AussieBanner from "../assets/img/GIF/AussieWildlife.json?url";
import Education from "../assets/img/Education.png";
import Challenge from "../assets/img/Challenge.png";
import User_flow from "../assets/img/Education_User_Flow.jpg";
import Education_1 from "../assets/img/Outfit Design.png";
import Education_2 from "../assets/img/Living area map.png";
import Education_3 from "../assets/img/Game.png";
import Feature_home from "../assets/img/Feature_home.png";
import Outfit from "../assets/img/Outfit_design.png";
import General_info from "../assets/img/General_info.png";
import Quiz from "../assets/img/Quiz.png";

const projectsData = [
  {
    id: 1,
    title: "InSync: The Digital Picture Frame",
    img: "https://www.youtube.com/watch?v=y29mrG8imNg",
    client: "Design Studio",
    platform: ["Mobile App", "Physical Products"],
    desc: "InSync is an ambient digital picture frame that enhances family coordination with seamless scheduling and interactive features.",
    details: {
      overview: {
        id: "01",
        description: "InSync integrates into daily life as a digital picture frame, using motion-triggered interactions and shared scheduling to foster family connectivity and simplify communication.",
        roles: {
          id: 1,
          role: "My Role",
          role_content: [
            "UI & UX Design",
            "Product UI Design",
            "User Research",
            "Mobile Developer"
          ],
          team: "Team",
          team_content: [
            "UI & UX Designer",
            "Developer (Mobile and Photo Frame)",
            "Database Developer"
          ],
          year: "Duration",
          year_content: ["Aug - Nov 2024"],
          title: "Tools",
          content: [
            "Figma",
            "Raspberry pi",
            "Python GUI",
            "React Native"
          ]
        }
      },
      role: {
        description: {
          main: "As UI Designer at Design Studio, I collaborated with developers and hardware specialists to craft an intuitive interface, ensuring accessibility for all family members, from tech-savvy users to older adults.",
          subheading: "Designing for Family Connectivity"
        },
        img: InsyncRole
      },
      key_challenges: {
        challenges: [
          {
            title: "Ambient Design & Connectivity",
            challenge: "Creating a seamless UI across the mobile app and photo frame while maintaining an ambient, non-intrusive design was complex.",
            solution: "Developed a unified design system with minimalistic interactions and robust synchronization protocols to ensure real-time updates across platforms.",
            subheading: "Cross-Platform Design Strategy",
            img: InsyncChallenge
          },
          {
            title: "Accessibility for Diverse Users",
            challenge: "Balancing advanced features with ease of use for users with varying tech proficiency, including older adults, was a significant hurdle.",
            solution: {
              main: "Applied accessibility principles, including large buttons, high-contrast visuals, and optional advanced settings to cater to diverse needs.",
              subheading: "Inclusive Design Principles",
              principles: [
                "Simplify Interactions: Large, tappable areas for ease of use.",
                "High-Contrast Visuals: Clear text and icons for readability.",
                "Progressive Disclosure: Hide advanced features in optional menus.",
                "Voice Guidance: Add voice prompts for accessibility."
              ]
            },
            img: "/assets/img/InSync-accessibility.svg"
          }
        ],
        key_question: [
          "How can ambient technology enhance family communication in a digital age?"
        ]
      },
      process: {
        description: {
          main: "InSync combines hardware and software to create an intuitive experience that enhances family communication and daily coordination.",
          subheading: "Integrating Hardware & Software"
        },
        challenges: [
          {
            title: "Delayed User Feedback",
            description: "Logistical challenges in testing physical prototypes delayed feedback, extending iteration timelines."
          },
          {
            title: "Visible Hardware Wires",
            description: "Early prototypes had visible wires, detracting from the ambient aesthetic."
          }
        ],
        solution: {
          main: "Streamlined user testing with remote Think Aloud sessions and in-person bodystorming; collaborated with hardware team to conceal wires for a polished look.",
          subheading: "Efficient Testing & Design",
          features: [
            "Hybrid Testing: Combined remote and in-person feedback sessions.",
            "Iterative Prototyping: Rapid hardware design iterations based on user input.",
            "Cross-Functional Collaboration: Worked with hardware team to enhance aesthetics.",
            "User-Centric Adjustments: Refined motion sensor interactions."
          ],
          img: InsyncProjectTimeline
        }
      },
      design_discovery: {
        description: {
          main: "We conducted user research to understand family dynamics, creating an MVP that fosters seamless connectivity through intuitive features.",
          subheading: "Understanding Family Needs"
        },
        outcomes: [
          { title: "User Research", description: "Gained insights into family communication patterns." },
          { title: "Hypotheses & Strategy", description: "Defined behaviors and design goals for connectivity." },
          { title: "Lo-Fi Concepts", description: "Explored varied approaches to family coordination." }
        ],
        insights: [
          {
            title: "Family Communication Gaps",
            points: [
              "60% of families struggle to coordinate schedules due to busy lifestyles.",
              "Fragmented communication occurs due to reliance on multiple apps."
            ]
          },
          {
            title: "Ambient Tech Preference",
            points: [
              "75% prefer non-intrusive devices over smartphone apps for updates.",
              "Interactive ambient displays increase user engagement."
            ]
          },
          {
            title: "Emotional Connection Needs",
            points: [
              "80% value shared memories through photos and videos.",
              "Interactive notes strengthen family bonds."
            ]
          }
        ],
        hypotheses: [
          { title: "Fragmented Tools", description: "Multiple tools lead to missed updates and conflicts." },
          { title: "Intuitive Interfaces", description: "Non-intuitive interfaces hinder adoption across ages." },
          { title: "Emotional Engagement", description: "Interactive features boost engagement via shared memories." }
        ],
        ux_strategy: [
          { title: "Foster Emotional Connectivity", description: "Encourage engagement with shared multimedia and notes." },
          { title: "Simplify Interactions", description: "Design intuitive interfaces with minimal learning curve." }
        ],
        design_concepts: [
          {
            title: "Baseline Concept",
            description: "A simple frame with photo display and scheduling, functional but lacking interactivity."
          },
          {
            title: "Interactive Family Hub",
            description: "A central hub with motion-triggered playback, shared notes, and calendars for enhanced engagement."
          },
          {
            title: "Customizable Memory Frame",
            description: "A customizable frame with status lights and themes, balancing emotional engagement with hardware challenges."
          }
        ],
        recommendation: "After evaluating the concepts, we recognized the Baseline Concept’s simplicity was sufficient for an MVP but limited in engagement. The Interactive Family Hub stood out for its potential to transform family coordination with interactive features, and we recommended pursuing it to maximize user connection and future scalability.",
        img: InsyncDesign_1,
        imgs: [InsyncDesign_1, InsyncDesign_2, InsyncDesign_3]
      },
      design_enhancement: {
        description: {
          main: "Enhanced InSync with innovative interaction patterns to seamlessly integrate into family life, prioritizing user-centric design and emotional engagement.",
          subheading: "Enhancing Family Interactions"
        },
        outcomes: [
          "UX Psychology Toolkit",
          "Design Principles",
          "Content Framework",
          "Interactive Family Hub Exploration"
        ],
        ux_psychology: [
          { title: "Fragmented Communication", description: "Shared notes and multimedia reduce reliance on multiple tools." },
          { title: "Tech Overwhelm", description: "Ambient design minimizes smartphone dependency." },
          { title: "Emotional Engagement", description: "Motion-triggered playback fosters family bonds." }
        ],
        design_principles: [
          { title: "Subtle Interactivity", description: "Motion-triggered features encourage engagement without overwhelming." },
          { title: "Prioritize Simplicity", description: "Minimal layouts with large, accessible buttons for all users." },
          { title: "Clear Feedback", description: "Visual and auditory cues for actions like schedule updates." },
          { title: "Playful Themes", description: "Clean, playful themes using 70-20-10 color principle." }
        ],
        content_framework: {
          main: "The CARE framework ensures notifications are concise, clear, and emotionally engaging for family updates.",
          subheading: "CARE Formula",
          examples: [[
            ["clarity", "Display a single upcoming event on the frame."],
            ["aesthetics", "Use clean design with soft colors and large text."],
            ["relevance", "Show only the next family event for focus."],
            ["empathy", "Provide glanceable updates for busy parents."]
          ]]
        },
        at_a_glance: {
          main: "Transforms the digital frame into a central hub for family coordination, blending seamlessly into daily life.",
          features: [
            "Motion-Triggered Playback: Videos play when someone approaches.",
            "Shared Scheduling: Displays a unified family calendar.",
            "Family Notes: Enables members to leave messages.",
            "Customizable Status Lights: Signals updates or new notes."
          ]
        },
        subsections: [
          {
            title: "Interactive Family Hub",
            content: {
              feature_home: {
                main: "The mobile app dashboard allows users to manage family life with quick status updates and member additions.",
                anti_patterns: [
                  { title: "Quick Status Updates", description: "Easily update frame status via app." },
                  { title: "Add Family Members", description: "Add members directly from homepage." }
                ],
                ux_psychology: [
                  { title: "Habit Formation", description: "Regular updates build shared communication routines." },
                  { title: "Emotional Connection", description: "Photos and notes foster family closeness." }
                ]
              },
              shared_scheduling: {
                main: "Users create events with photos or videos, displayed directly on the frame for interactive planning.",
                anti_patterns: [
                  { title: "Multimedia Display", description: "Cards focus on key events to avoid clutter." },
                  { title: "Step-by-Step Form", description: "Simplifies event creation with visual cues." }
                ],
                ux_psychology: [
                  { title: "Progressive Disclosure", description: "Step-by-step forms simplify event creation." },
                  { title: "Emotional Engagement", description: "Multimedia enhances family connection." }
                ]
              },
              family_notes: {
                main: "Family members leave notes on the frame, fostering communication and collaborative planning.",
                ux_psychology: [
                  { title: "Emotional Connection", description: "Notes create closeness, especially for distant relatives." },
                  { title: "Chunking", description: "Single notes prevent information overload." },
                  { title: "Social Reinforcement", description: "Activity invitations boost participation." }
                ]
              },
              quick_actions: {
                main: "Quick actions like media uploads or schedule updates include confirmation screens for clarity.",
                ux_psychology: [
                  { title: "Minimal Effort", description: "Streamlines coordination with simple tasks." },
                  { title: "Zeigarnik Effect", description: "Highlights unfinished tasks to encourage completion." }
                ]
              }
            },
            images: {
              feature_home: InsyncProject_Feature,
              shared_scheduling: InsyncProject_Schedule,
              family_notes: Insync_familyNote,
              quick_actions: Insync_QuickTip
            }
          }
        ],
        business_opportunities: [
          { title: "Enhanced Engagement", description: "Shared notes and multimedia increase device usage." },
          { title: "Subscription Model", description: "Premium features like cloud storage create revenue." },
          { title: "Partnerships", description: "Collaborate with family-oriented brands for promotions." }
        ]
      },
      closing: {
        description: {
          main: "InSync’s MVP delivers seamless family connectivity through an ambient frame, with plans for future customization features.",
          subheading: "Connecting Families Seamlessly"
        },
        winning_moments: [
          "Efficient Testing: Combined remote and in-person feedback for insights.",
          "Accessibility Focus: Ensured usability for all family members.",
          "Emotional Engagement: Motion-triggered features created meaningful moments."
        ],
        lessons_learned: [
          "Iterative Testing: Continuous feedback aligned with diverse needs.",
          "Ambient Design: Thoughtful design enhances daily life.",
          "Hardware-Software Balance: Close collaboration ensures cohesive experience."
        ],
        img: "/assets/img/InSync-lessons.svg"
      }
    }
  },
    {
      id: 2,
      title: "yoUQuest: Beat Burnout",
      img: YoUQuest_Banner,
      client: "University Project",
      platform: ["Website", "ReactJS"],
      desc: "yoUQuest is a gamified task management platform to help students combat burnout with progress tracking and break reminders.",
      details: {
        overview: {
          id: "02",
          description: "yoUQuest supports university students by gamifying task management, offering progress tracking and break reminders to promote balance and reduce academic burnout.",
          roles: {
            id: 2,
            role: "My Role",
            role_content: [
              "UI Design",
              "UX Design",
              "User Research",
              "Website Developer"
            ],
            team: "Team",
            team_content: [
              "UI & UX Designer",
              "Website Developer"
            ],
            year: "Duration",
            year_content: ["Aug - Nov 2024"],
            title: "Tools",
            content: [
              "Figma",
              "React JS"
            ]
          }
        },
        role: {
          description: {
            main: "As sole designer and developer, I conducted user research, designed a gamified UI, and built the platform using ReactJS, collaborating with advisors to meet student needs.",
            subheading: "Designing for Student Well-Being"
          },
          img: WellBeing
        },
        key_challenges: {
          challenges: [
            {
              title: "Balancing Gamification",
              challenge: "Adding gamification like a battle pass risked overwhelming students already under academic stress.",
              solution: "Developed a Gamification Balance Framework with simple rewards like progress bars and customizable goals to maintain engagement.",
              subheading: "Gamification Framework",
              img: Overwhelming
            },
            {
              title: "API Data Integration",
              challenge: "Inconsistent API data formats and performance issues affected personalized task displays.",
              solution: {
                main: "Implemented a Data Normalization Strategy to standardize API data and cached frequent data to optimize load times.",
                subheading: "Data Normalization Strategy",
                principles: [
                  "Standardize Formats: Uniform API data structure for consistency.",
                  "Cache Data: Store course data locally to reduce API calls.",
                  "Error Handling: Provide fallback messages for API failures.",
                  "Incremental Loading: Load data progressively for performance."
                ]
              },
              img: UQ_User_Flow
            }
          ],
          key_question: [
            "How can ambient technology enhance family communication in a digital age?"
          ]
        },
        process: {
          description: {
            main: "yoUQuest combines engaging gamification with technical solutions to support student productivity and well-being.",
            subheading: "Building a Gamified Experience"
          },
          challenges: [
            {
              title: "Cross-Browser Compatibility",
              description: "ReactJS compatibility and CSS rendering differences posed challenges across browsers."
            },
            {
              title: "Complex User Feedback",
              description: "Diverse student preferences on gamification and dashboard design complicated feedback management."
            }
          ],
          solution: {
            main: "Adopted a user-centric process with multi-method research and automated testing to ensure compatibility and refine designs based on feedback.",
            subheading: "User-Centric Development",
            features: [
              "Multi-Method Research: Used bodystorming, think-aloud, and interviews.",
              "Automated Testing: Ensured compatibility with tools like BrowserStack.",
              "Iterative Design: Adjusted gamification based on student feedback.",
              "Performance Optimization: Cached API data for faster load times."
            ],
            img: UQ_User_Flow
          }
        },
        design_discovery: {
          description: {
            main: "We researched student stressors and behaviors to create an MVP that promotes productivity and reduces burnout through gamified features.",
            subheading: "Tackling Academic Burnout"
          },
          outcomes: [
            { title: "User Research", description: "Identified stressors and task management habits." },
            { title: "Hypotheses & Strategy", description: "Set goals for burnout prevention." },
            { title: "Lo-Fi Concepts", description: "Explored gamified task management approaches." }
          ],
          insights: [
            {
              title: "Academic Stress",
              points: [
                "70% of students face high stress during exam periods.",
                "Balancing academic and personal tasks is a common struggle."
              ]
            },
            {
              title: "Motivation & Engagement",
              points: [
                "60% are motivated by gamified rewards like progress bars.",
                "80% prefer visual dashboards for task management."
              ]
            },
            {
              title: "Productivity Struggles",
              points: [
                "50% lack effective tools for academic tasks.",
                "30% forget breaks, increasing burnout risk."
              ]
            }
          ],
          hypotheses: [
            { title: "Complex Tools", description: "Existing tools lack motivational elements." },
            { title: "Break Reminders", description: "Lack of breaks increases burnout risk." },
            { title: "Motivation Needs", description: "Gamification can boost engagement." }
          ],
          ux_strategy: [
            { title: "Incorporate Gamification", description: "Use battle pass system to motivate task completion." },
            { title: "Promote Healthy Habits", description: "Integrate break reminders and progress tracking." }
          ],
          design_concepts: [
            {
              title: "Baseline Concept",
              description: "Basic to-do lists and calendars, functional but lacking motivation."
            },
            {
              title: "Monthly Wrap-Up",
              description: "Gamified monthly progress summary to encourage reflection."
            },
            {
              title: "Academic Quest",
              description: "Fully gamified with battle pass and mountain visuals for engagement."
            }
          ],
          recommendation: "After weighing options, we found the Baseline Concept functional but uninspiring for students. The Academic Quest concept’s gamified approach promised to boost engagement and combat burnout effectively, so we recommended pursuing it to deliver lasting value with plans for future refinements.",
          img: "/assets/img/yoUQuest-design-discovery.svg",
          imgs: [UQ_Sketch_3, UQ_Sketch_1, UQ_Sketch_2]
        },
        design_enhancement: {
          description: {
            main: "Enhanced yoUQuest with gamified features and user-centric design to motivate students and promote well-being.",
            subheading: "Gamifying Productivity"
          },
          outcomes: [
            "UX Psychology Toolkit",
            "Design Principles",
            "Content Framework",
            "Academic Quest Exploration"
          ],
          ux_psychology: [
            { title: "Task Management", description: "Gamified elements structure tasks for clarity." },
            { title: "Reduce Burnout", description: "Break reminders promote balanced study habits." },
            { title: "Motivation Boost", description: "Mountain visuals create a sense of achievement." }
          ],
          design_principles: [
            { title: "Playful Gamification", description: "Progress bars and rewards enhance engagement." },
            { title: "Reduce Cognitive Load", description: "Simplified dashboards focus on key tasks." },
            { title: "Vibrant Visuals", description: "Bold colors and animations motivate users." },
            { title: "Motivational Prompts", description: "Prompts like 'Level up!' encourage action." }
          ],
          content_framework: {
            main: "The STAR framework delivers concise, motivating notifications to keep students engaged.",
            subheading: "STAR Formula",
            examples: [[
              ["situation", "You have 3 tasks due this week."],
              ["task", "Complete one task now."],
              ["action", "Check off a task to earn points."],
              ["reward", "Level up your academic quest!"]
            ]]
          },
          at_a_glance: {
            main: "Transforms task management into a gamified journey, motivating students with minimal effort.",
            features: [
              "Battle Pass System: Earn rewards for completing tasks.",
              "Progress Tracking: Visualize goals with mountain visuals.",
              "Break Reminders: Prompts for breaks after study sessions.",
              "Customizable Goals: Adjust academic targets."
            ]
          },
          subsections: [
            {
              title: "Academic Quest",
              content: {
                feature_home: {
                  main: "The homepage features a smart search bar to fetch course data, guiding users to set up tasks effortlessly.",
                  anti_patterns: [
                    { title: "Avoid Manual Setup", description: "Automate course and task retrieval." },
                    { title: "Prominent Search", description: "Place search bar prominently on homepage." }
                  ],
                  ux_psychology: [
                    { title: "Guided Learning", description: "Tutorial reduces friction for new users." },
                    { title: "Cognitive Load Reduction", description: "Automation simplifies task setup." }
                  ]
                },
                progress_tracking: {
                  main: "Mountain visuals track academic progress, making achievements feel rewarding.",
                  anti_patterns: [
                    { title: "Minimal Elements", description: "Focus on journey to reduce clutter." },
                    { title: "Motivational Prompts", description: "Prompts encourage task completion." }
                  ],
                  ux_psychology: [
                    { title: "Framing Effect", description: "Mountain climb frames progress as rewarding." },
                    { title: "Motivation Boost", description: "Visuals increase task engagement." }
                  ]
                },
                break_reminders: {
                  main: "Break reminders prompt students to rest, reducing burnout risk.",
                  ux_psychology: [
                    { title: "Loss Aversion", description: "Highlight burnout risk to motivate breaks." },
                    { title: "Chunking", description: "Short break intervals enhance well-being." }
                  ]
                },
                Achievement_Tracking: {
                  main: "Tracks mountains climbed to visualize accomplishments and encourage progress.",
                  anti_patterns: [
                    { title: "Playful Visuals", description: "Animations enhance engagement." },
                    { title: "Unlock Progression", description: "New stages motivate continued use." }
                  ],
                  ux_psychology: [
                    { title: "Progress Feedback", description: "Visuals reinforce sense of achievement." },
                    { title: "Goal Gradient Effect", description: "Each mountain motivates further progress." }
                  ]
                },
                quick_actions: {
                  main: "Quick actions for adding tasks or breaks with confirmation screens.",
                  ux_psychology: [
                    { title: "Minimal Effort", description: "Streamlines task management." },
                    { title: "Zeigarnik Effect", description: "Highlights unfinished tasks." }
                  ]
                }
              },
              images: {
                feature_home: UQ_Home_page,
                progress_tracking: UQ_Battlepass,
                break_reminders: UQ_Break,
                Achievement_Tracking: UQ_mountain,
                quick_actions: UQ_unlock
              }
            }
          ],
          business_opportunities: [
            { title: "Student Engagement", description: "Gamification boosts platform retention." },
            { title: "Premium Features", description: "Advanced analytics via subscription." },
            { title: "Partnerships", description: "Collaborate with study tools for promotions." }
          ],
          img: "/assets/img/yoUQuest-design-enhancement.svg"
        },
        closing: {
          description: {
            main: "yoUQuest’s MVP helps students manage tasks and combat burnout, with future plans for advanced analytics.",
            subheading: "Empowering Productivity"
          },
          winning_moments: [
            "User-Centric Design: Multi-method research drove actionable insights.",
            "Gamification Balance: Engaging features without overwhelming users.",
            "Performance Optimization: Fast API data handling for seamless experience."
          ],
          lessons_learned: [
            "Gamification Impact: Boosts student motivation effectively.",
            "Feedback Management: Clear prioritization simplifies diverse input.",
            "Technical Optimization: ReactJS performance is critical for UX."
          ],
          img: "/assets/img/yoUQuest-lessons.svg"
        }
      }
    },
    {
      id: 3,
      title: "Aussie Wildlife: Discover, Learn",
      img: AussieBanner,
      client: "Educational Platform",
      platform: ["Website", "JavaScript"],
      desc: "Aussie Wildlife inspires curiosity about Australian biodiversity through interactive, RPG-style learning.",
      details: {
        overview: {
          id: "03",
          description: "Aussie Wildlife uses game-based learning to engage children in exploring Australia’s biodiversity with interactive maps and quizzes.",
          roles: {
            id: 3,
            role: "My Role",
            role_content: [
              "UI Design",
              "UX Design",
              "User Research",
              "Website Developer"
            ],
            team: "Team",
            team_content: [
              "UI & UX Designer",
              "Website Developer"
            ],
            year: "Duration",
            year_content: ["Aug - Nov 2023"],
            title: "Tools",
            content: [
              "Figma",
              "HTML",
              "Javascript"
            ]
          }
        },
        role: {
          description: {
            main: "As lead designer and developer, I conducted research, created personas, and built JavaScript-based features, ensuring accessibility for young learners.",
            subheading: "Designing for Educational Engagement"
          },
          img: Education
        },
        key_challenges: {
          challenges: [
            {
              title: "Real-Time API Integration",
              challenge: "Inconsistent ALA API data formats hindered interactive map performance.",
              solution: "Standardized data formats and implemented lazy loading to optimize map interactions.",
              subheading: "API Integration Workflow",
              img: Challenge
            },
            {
              title: "Accessibility for Young Learners",
              challenge: "Supporting diverse literacy levels with features like read-aloud added design complexity.",
              solution: {
                main: "Applied accessibility principles, including read-aloud narration and high-contrast visuals, to ensure inclusivity.",
                subheading: "Inclusive Design Principles",
                principles: [
                  "Read-Aloud Functionality: Voice narration for text content.",
                  "High-Contrast Visuals: Bright colors for readability.",
                  "Simple Navigation: Intuitive menus for young users.",
                  "Interactive Feedback: Visual and auditory cues for actions."
                ]
              },
              img: Education
            }
          ],
          key_question: [
            "How can game-based learning enhance children's understanding of biodiversity?"
          ]
        },
        process: {
          description: {
            main: "Aussie Wildlife balances educational content with engaging, accessible features for young learners.",
            subheading: "Crafting an RPG Experience"
          },
          challenges: [
            {
              title: "Performance Optimization",
              description: "Heavy data loads slowed interactive maps and quizzes."
            },
            {
              title: "Balancing Education & Fun",
              description: "Complex content risked disengaging young users."
            }
          ],
          solution: {
            main: "Used iterative prototyping and optimized JavaScript code to enhance performance and balance educational content with fun.",
            subheading: "Iterative Prototyping",
            features: [
              "Paper Prototyping: Tested concepts with children for quick feedback.",
              "Digital Evaluations: Assessed interactivity with digital prototypes.",
              "Content Balancing: Simplified content with gamified elements.",
              "Performance Optimization: Implemented lazy loading for maps."
            ],
            img: User_flow
          }
        },
        design_discovery: {
          description: {
            main: "We studied children’s learning behaviors to create an MVP that inspires curiosity about Australian wildlife through interactive design.",
            subheading: "Engaging Young Learners"
          },
          outcomes: [
            { title: "User Research", description: "Identified children’s learning preferences." },
            { title: "Hypotheses & Strategy", description: "Set goals for educational engagement." },
            { title: "Lo-Fi Concepts", description: "Explored RPG-style learning approaches." }
          ],
          insights: [
            {
              title: "Engagement Through Play",
              points: [
                "80% of children engage more with game-based learning.",
                "Interactive maps increase exploration time by 50%."
              ]
            },
            {
              title: "Accessibility Needs",
              points: [
                "60% need read-aloud features for limited literacy.",
                "70% prefer high-contrast visuals for clarity."
              ]
            },
            {
              title: "Learning Preferences",
              points: [
                "Short quizzes are preferred over long reading tasks.",
                "Customizable characters boost engagement by 40%."
              ]
            }
          ],
          hypotheses: [
            { title: "Unengaging Content", description: "Traditional methods reduce learning outcomes." },
            { title: "Accessibility Barriers", description: "Literacy issues hinder platform use." },
            { title: "Motivation Needs", description: "Gamification increases engagement." }
          ],
          ux_strategy: [
            { title: "Game-Based Learning", description: "Use RPG-style exploration for engagement." },
            { title: "Ensure Accessibility", description: "Incorporate read-aloud and high-contrast visuals." }
          ],
          design_concepts: [
            {
              title: "Baseline Concept",
              description: "Static wildlife info with quizzes, lacking interactivity."
            },
            {
              title: "Wildlife Explorer",
              description: "RPG-style platform with interactive maps and NPC stories."
            },
            {
              title: "Conservation Quest",
              description: "Gamified missions with customizable characters for conservation awareness."
            }
          ],
          recommendation: "After reviewing concepts, we noted the Baseline Concept’s quick deployment but limited engagement. The Wildlife Explorer concept’s RPG-style approach showed strong potential to captivate young learners, so we recommended advancing it to inspire curiosity and plan future accessibility enhancements.",
          img: "/assets/img/Aussie-design-discovery.svg",
          imgs: [Education_1, Education_2, Education_3]
        },
        design_enhancement: {
          description: {
            main: "Enhanced Aussie Wildlife with interactive, accessible features to inspire curiosity and support learning.",
            subheading: "Inspiring Wildlife Curiosity"
          },
          outcomes: [
            "UX Psychology Toolkit",
            "Design Principles",
            "Content Framework",
            "Wildlife Explorer Exploration"
          ],
          ux_psychology: [
            { title: "Engagement", description: "Game-based learning encourages exploration." },
            { title: "Accessibility", description: "Read-aloud features ensure inclusivity." },
            { title: "Learning Retention", description: "Quizzes and stories enhance retention." }
          ],
          design_principles: [
            { title: "Playful Interactivity", description: "Maps and NPCs make learning an adventure." },
            { title: "Simplify Navigation", description: "Intuitive menus reduce frustration." },
            { title: "Colorful Visuals", description: "Bright designs captivate young learners." },
            { title: "Motivational Prompts", description: "Prompts encourage exploration." }
          ],
          content_framework: {
            main: "The LEARN framework delivers concise, motivating lessons for effective learning.",
            subheading: "LEARN Formula",
            examples: [[
              ["listen", "Gather feedback from young learners."],
              ["engage", "Use interactive quizzes for engagement."],
              ["action", "Test knowledge with short quizzes."],
              ["reward", "Earn badges for correct answers."]
            ]]
          },
          at_a_glance: {
            main: "Transforms education into an RPG-style adventure, inspiring curiosity about wildlife.",
            features: [
              "Interactive Maps: Explore Australian habitats.",
              "NPC-Driven Stories: Learn through engaging narratives.",
              "Quiz System: Test knowledge with short quizzes.",
              "Customizable Characters: Personalize learning."
            ]
          },
          subsections: [
            {
              title: "Wildlife Explorer",
              content: {
                feature_home: {
                  main: "A playful portal where children select animals to start their learning journey.",
                  anti_patterns: [
                    { title: "Avoid Overwhelm", description: "Guide step-by-step to prevent fatigue." },
                    { title: "Playful Navigation", description: "Use animal icons for fun exploration." }
                  ],
                  ux_psychology: [
                    { title: "Agency", description: "Choosing animals boosts engagement." },
                    { title: "Personalization", description: "Characters build emotional connection." }
                  ]
                },
                outfit_customisation: {
                  main: "Children choose fun outfits for characters, enhancing engagement before learning.",
                  anti_patterns: [
                    { title: "Simple Customization", description: "Keep choices fun and focused." }
                  ],
                  ux_psychology: [
                    { title: "Self-Expression", description: "Outfits build excitement and investment." }
                  ]
                },
                general_information: {
                  main: "Explore animal habitats, diets, and traits in concise, engaging sections.",
                  anti_patterns: [
                    { title: "Avoid Overload", description: "Break content into small chunks." },
                    { title: "Motivational Prompts", description: "Prompts like 'Discover the Outback!' encourage exploration."}
                  ],
                  ux_psychology: [
                    { title: "Curiosity-Driven", description: "Choose what to learn for intrinsic motivation." },
                    { title: "Information Gap", description: "Partial facts encourage further exploration." }
                  ]
                },
                quiz_system: {
                  main: "Short quizzes reinforce learning with rewarding points and badges.",
                  anti_patterns: [
                    { title: "Short Quizzes", description: "Prevent cognitive overload." },
                    { title: "No Punishment", description: "Encourage retries for confidence." }
                  ],
                  ux_psychology: [
                    { title: "Reinforcement", description: "Quizzes solidify learned concepts." },
                    { title: "Gamification", description: "Badges incentivize replay." }
                  ]
                }
              },
              images: {
                feature_home: Feature_home,
                outfit_customisation: Outfit,
                general_information: General_info,
                quiz_system: Quiz
              }
            }
          ],
          business_opportunities: [
            { title: "Educational Engagement", description: "Gamification increases learning retention." },
            { title: "Premium Features", description: "Advanced quizzes via subscription." },
            { title: "Reward System", description: "Points for outfits or bonuses boost long-term use." }
          ],
          img: "/assets/img/Aussie-design-enhancement.svg"
        },
        closing: {
          description: {
            main: "Aussie Wildlife’s MVP inspires biodiversity curiosity through game-based learning, with plans for advanced quizzes and virtual experiences.",
            subheading: "Inspiring Conservationists"
          },
          winning_moments: [
            "Iterative Prototyping: Refined design with rapid feedback.",
            "Accessibility Focus: Inclusive features for young learners.",
            "Engagement Boost: Gamified elements increased interaction."
          ],
          lessons_learned: [
            "Playful Design: Essential for engaging young audiences.",
            "API Integration: Critical for real-time data applications.",
            "Balancing Fun & Education: Key for learning outcomes."
          ],
          img: "/assets/img/Aussie-lessons.svg"
        }
      }
    }
];

export default projectsData;