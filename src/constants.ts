export const PORTFOLIO_DATA = {
  hero: {
    title: "Senior Product Designer",
    subtitle: "10+ Years Experience | Singapore",
    specialization: "AI-Augmented Design & Vibe Coding",
    bio: "Architecting high-impact digital ecosystems at the intersection of human intent and AI precision. Leveraging 10 years of UI/UX expertise in Singapore to turn complex business logic into intuitive, high-performance products.",
    vibeCoding: "I utilize advanced AI tools (v0.dev, Cursor, LLMs) to rapidly translate design 'vibes' and strategic intent into functional prototypes, ensuring design-to-code precision and drastically reducing time-to-market."
  },
  projects: {
    uxCaseStudies: [
      {
        id: "wizlah",
        title: "Wizlah App",
        role: "Product Designer",
        heroImage: "https://picsum.photos/seed/mobile-app-return-flow/1920/1080",
        challenge: "Fragmented home renovation journey with high friction between inspiration and execution. Users struggled to visualize products in their own space, leading to decision paralysis and high drop-off rates.",
        solution: "Spearheaded an end-to-end mobile ecosystem integrating AR visualization with a curated vendor marketplace. Architected a 'Vibe-to-Reality' flow where users could capture their space, apply design styles, and instantly shop the look.",
        impact: "Achieved a 40% increase in user retention and streamlined the quote-to-contract process by 30%. Successfully bridged the gap between digital inspiration and physical implementation.",
        metrics: [
          "40% Retention Increase",
          "30% Faster Quoting"
        ],
        details: [
          {
            title: "The Problem",
            content: "Homeowners in Singapore faced a fragmented journey. They used Pinterest for inspiration, physical showrooms for selection, and WhatsApp for vendor communication. This lack of integration caused significant data loss and user frustration."
          },
          {
            title: "Strategic Approach",
            content: "We moved from a 'Gallery' model to a 'Utility' model. By integrating ARKit, we allowed users to place 3D models of furniture directly in their rooms, providing immediate confidence in their purchasing decisions."
          },
          {
            title: "Execution",
            content: "I led a team of 3 designers to develop a design system that scaled across iOS and Android. We focused on high-density information display that didn't feel cluttered, prioritizing visual clarity for product discovery."
          }
        ],
        caseStudy: [
          {
            type: "text-grid",
            title: "Qualitative Research",
            subtitle: "Understanding the 'Why' behind user behavior",
            content: "We conducted 15 in-depth interviews with homeowners who had recently completed or were in the middle of a renovation. The goal was to map out the emotional and practical hurdles they faced."
          },
          {
            type: "insight-cards",
            title: "Interview Insights",
            items: [
              { label: "Visualization Gap", text: "80% of users struggled to imagine how a piece of furniture would look in their specific floor plan." },
              { label: "Trust Deficit", text: "Users felt overwhelmed by the lack of transparency in vendor pricing and quality." },
              { label: "Information Overload", text: "Managing multiple quotes and product specs across different platforms was the #1 pain point." }
            ]
          },
          {
            type: "image-text",
            title: "Competitive Analysis",
            content: "We analyzed local and global players like Houzz, IKEA Place, and local marketplaces. While Houzz offered inspiration, it lacked local vendor integration. IKEA Place had great AR but was limited to one brand. Wizlah's opportunity was to be the 'Local AR Marketplace'.",
            image: "https://picsum.photos/seed/app-comparison-matrix/1200/600"
          },
          {
            type: "persona",
            title: "User Persona",
            name: "Sarah, The First-Time Homeowner",
            bio: "A 30-year-old marketing professional who just collected keys to her new BTO flat. She is tech-savvy but feels overwhelmed by the renovation process and fears making expensive mistakes.",
            goals: ["Visualize furniture in her small space", "Find reliable local vendors", "Manage budget effectively"],
            pains: ["Hard to judge scale from photos", "Too many tabs/apps to manage", "Uncertain about vendor quality"]
          },
          {
            type: "full-image",
            title: "User Journey Map",
            image: "https://picsum.photos/seed/customer-journey-renovation/1920/1080",
            caption: "Mapping the emotional arc from 'Key Collection' to 'Move-in Ready'."
          },
          {
            type: "full-image",
            title: "User Flow",
            image: "https://picsum.photos/seed/app-user-flow-diagram/1920/1080",
            caption: "The 'Vibe-to-Reality' flow: Inspiration > AR Visualization > Vendor Match > Quote."
          },
          {
            type: "image-grid",
            title: "High Fidelity Wireframes",
            images: [
              "https://picsum.photos/seed/mobile-app-order-details/800/1200",
              "https://picsum.photos/seed/mobile-app-refund-request/800/1200",
              "https://picsum.photos/seed/mobile-app-return-status/800/1200",
              "https://picsum.photos/seed/mobile-app-evidence-upload/800/1200"
            ]
          },
          {
            type: "text-grid",
            title: "TEST & Validation",
            subtitle: "Iterating based on real-world usage",
            content: "We ran usability tests with 10 participants using the high-fidelity prototype. Key finding: Users loved the AR but found the 'Add to Quote' button too hidden. We iterated the UI to make the primary action persistent in the AR view."
          }
        ]
      },
      {
        id: "wizmarketplace",
        title: "WizMarketplace Admin",
        role: "Product Designer",
        heroImage: "https://picsum.photos/seed/admin-dashboard-analytics/1920/1080",
        challenge: "High cognitive load for vendors managing complex inventories and multi-channel orders. The legacy system was slow, non-responsive, and required extensive manual data entry.",
        solution: "Architected a data-dense, intuitive dashboard focused on operational efficiency and real-time analytics. Implemented an AI-driven inventory suggestion engine to help vendors optimize their stock levels.",
        impact: "Improved data density for admin efficiency, reducing vendor onboarding time by 60%. Vendors reported a 45% reduction in support tickets related to order management.",
        metrics: [
          "60% Faster Onboarding",
          "45% Reduction in Support Tickets",
          "Real-time Inventory Sync"
        ],
        details: [
          {
            title: "The Challenge",
            content: "Vendors were overwhelmed by the volume of data. The primary goal was to reduce 'time-to-action' for order fulfillment and inventory updates."
          },
          {
            title: "Design Solution",
            content: "I introduced a modular widget-based layout that allowed vendors to customize their workspace. We prioritized 'Critical Actions' in a persistent sidebar, ensuring that urgent orders were never missed."
          },
          {
            title: "Business Value",
            content: "By streamlining the backend, we reduced the operational overhead for the platform owner, allowing them to scale from 50 to 500+ vendors without increasing support staff."
          }
        ],
        caseStudy: [
          {
            type: "text-grid",
            title: "Information Architecture",
            subtitle: "Simplifying complex vendor workflows",
            content: "The legacy system had deep, nested menus that made simple tasks like 'Update Stock' take 5-7 clicks. We flattened the architecture, bringing high-frequency actions to the surface."
          },
          {
            type: "insight-cards",
            title: "Admin Pain Points",
            items: [
              { label: "Data Silos", text: "Inventory and orders were managed in separate modules, requiring constant tab-switching." },
              { label: "Slow Onboarding", text: "New vendors took 2 weeks to learn the system due to its non-intuitive interface." },
              { label: "Manual Reporting", text: "Generating sales reports required exporting CSVs and manual Excel processing." }
            ]
          },
          {
            type: "image-text",
            title: "Dashboard Optimization",
            content: "We designed a 'Command Center' dashboard that provides an at-a-glance view of pending orders, low-stock alerts, and daily revenue. The use of high-density data tables with inline editing significantly reduced task completion time.",
            image: "https://picsum.photos/seed/admin-data-visualization/1200/600"
          },
          {
            type: "persona",
            title: "User Persona",
            name: "David, The Operations Manager",
            bio: "David manages a mid-sized furniture warehouse. He handles 100+ SKUs and needs to ensure that stock levels are accurate across Wizlah and other sales channels to avoid over-selling.",
            goals: ["Minimize order processing time", "Maintain accurate inventory", "Generate quick performance reports"],
            pains: ["System lag during peak hours", "Complex bulk upload process", "Lack of mobile-responsive admin tools"]
          },
          {
            type: "full-image",
            title: "System Ecosystem",
            image: "https://picsum.photos/seed/saas-platform-architecture/1920/1080",
            caption: "Visualizing the data flow between the Consumer App, Vendor Portal, and Logistics Partners."
          },
          {
            type: "image-grid",
            title: "High Fidelity Admin UI",
            images: [
              "https://picsum.photos/seed/admin-table-ui/800/1200",
              "https://picsum.photos/seed/admin-chart-analytics/800/1200",
              "https://picsum.photos/seed/admin-inventory-management/800/1200",
              "https://picsum.photos/seed/admin-vendor-profile/800/1200"
            ]
          },
          {
            type: "text-grid",
            title: "Impact & Scalability",
            subtitle: "Supporting 10x vendor growth",
            content: "The new admin portal didn't just look better—it performed better. By optimizing the database queries and the UI rendering, we achieved a 3x speed improvement, allowing the platform to scale to 500+ active vendors seamlessly."
          }
        ]
      },
      {
        id: "bioskin",
        title: "SG Bus Times",
        role: "Senior UI/UX Designer",
        heroImage: "https://picsum.photos/seed/beauty-brand-hero/1920/1080",
        challenge: "Transforming fragmented LTA transit data into a \"Zero-Noise\" navigation tool. By eliminating ad-heavy layouts and implementing a context-aware UI, I reduced the user's cognitive load by 40%, ensuring critical commute info remains legible even in high-stress, outdoor environments.",
        solution: "Reimagined the e-commerce flow with a mobile-first approach, emphasizing brand storytelling and seamless booking. Integrated a personalized skin-consultation quiz to drive higher-value service bookings.",
        impact: "Delivered a 25% uplift in online bookings and modernized the brand's digital identity for a 2026 audience. Mobile conversion rates increased by 18% within the first quarter.",
        metrics: [
          "25% Booking Uplift",
          "50% Faster Page Loads",
          "Mobile Conversion +18%"
        ],
        details: [
          {
            title: "Brand Transformation",
            content: "Bioskin needed to move from a 'traditional clinic' vibe to a 'modern wellness' brand. I utilized high-end editorial typography and a minimalist color palette to elevate the digital experience."
          },
          {
            title: "Conversion Optimization",
            content: "The booking flow was reduced from 7 steps to 3. We implemented 'One-Tap' scheduling and integrated Apple/Google Pay to reduce checkout friction."
          },
          {
            title: "User Engagement",
            content: "The skin-consultation quiz became the primary entry point for new users, providing them with immediate value and personalized recommendations before they even booked a service."
          }
        ],
        caseStudy: [
          {
            type: "text-grid",
            title: "Qualitative Research",
            subtitle: "Understanding the beauty consumer's mindset",
            content: "We interviewed 12 regular Bioskin customers to understand their digital habits. We found that most users were looking for specific treatments for their skin concerns but felt overwhelmed by the technical jargon."
          },
          {
            type: "insight-cards",
            title: "Customer Insights",
            items: [
              { label: "Trust Factor", text: "Users needed to see real results (before/after) and verified reviews to trust a treatment." },
              { label: "Mobile First", text: "Over 80% of users checked the site while on the go, making mobile optimization critical." },
              { label: "Ease of Booking", text: "The #1 reason for drop-off was a complex, multi-step booking form." }
            ]
          },
          {
            type: "image-text",
            title: "Competitive Landscape",
            content: "We audited 5 local competitors and 3 global beauty brands. While local competitors focused on price, global brands focused on experience. Bioskin's opportunity was to combine local expertise with a global-standard digital experience.",
            image: "https://picsum.photos/seed/beauty-brand-benchmarking/1200/600"
          },
          {
            type: "persona",
            title: "User Persona",
            name: "Chloe, The Busy Professional",
            bio: "A 28-year-old account manager who deals with stress-related skin issues. She values efficiency and wants a treatment that works without spending hours researching.",
            goals: ["Quickly find treatments for acne", "Book appointments after work hours", "See real results from other users"],
            pains: ["Confusing medical terminology", "Slow mobile site", "Hard to find pricing information"]
          },
          {
            type: "full-image",
            title: "User Journey Map",
            image: "https://picsum.photos/seed/beauty-customer-journey/1920/1080",
            caption: "Mapping the journey from 'Identifying a Concern' to 'Post-Treatment Care'."
          },
          {
            type: "full-image",
            title: "User Flow",
            image: "https://picsum.photos/seed/beauty-app-user-flow/1920/1080",
            caption: "The 'Concern-to-Booking' flow: Quiz > Recommendation > Results > Instant Book."
          },
          {
            type: "image-grid",
            title: "High Fidelity UI Design",
            images: [
              "https://picsum.photos/seed/beauty-app-home/800/1200",
              "https://picsum.photos/seed/beauty-app-quiz/800/1200",
              "https://picsum.photos/seed/beauty-app-booking/800/1200",
              "https://picsum.photos/seed/beauty-app-profile/800/1200"
            ]
          },
          {
            type: "text-grid",
            title: "Validation & Results",
            subtitle: "Measuring the impact of the redesign",
            content: "Post-launch, we saw a 25% increase in online bookings. The skin-consultation quiz became the most visited page, with a 65% completion rate, proving that users valued the personalized guidance."
          }
        ]
      }
    ],
    uiPortfolio: {
      title: "Visual Craft Portfolio",
      description: "A collection of high-fidelity website designs focusing on typography, layout precision, and interactive storytelling.",
      categories: ["E-commerce", "SaaS", "Lifestyle"]
    }
  },
  about: {
    experience: "10 Years in Singapore",
    philosophy: "I focus on simplifying complex workflows and creating intuitive, user-centered experiences.\n\nRecently, I've integrated AI-assisted workflows and lightweight coding (vibe coding) to improve speed and iteration — while keeping design thinking at the core.",
    skills: [
      "Product Strategy",
      "UI/UX Design",
      "AI-Augmented Workflows",
      "Video Production & Motion Design",
      "Rapid Prototyping",
      "Design Systems"
    ]
  },
  process: [
    {
      step: "01",
      title: "Discovery & Intent",
      description: "Deep dive into business logic and user pain points. I architect the strategic foundation before a single pixel is moved.",
      tools: ["Stakeholder Interviews", "User Research", "Strategic Mapping"]
    },
    {
      step: "02",
      title: "AI-Augmented Ideation",
      description: "Leveraging LLMs to explore structural possibilities and generative tools to define the visual 'vibe' at scale.",
      tools: ["Midjourney", "ChatGPT", "Moodboarding"]
    },
    {
      step: "03",
      title: "Vibe-to-Prototype",
      description: "Rapidly turning intent into functional, high-fidelity prototypes. I bridge the gap between design and live code.",
      tools: ["v0.dev", "Cursor", "Figma"]
    },
    {
      step: "04",
      title: "Refinement & Precision",
      description: "Fine-tuning visual craft, micro-interactions, and accessibility to ensure a world-class user experience.",
      tools: ["Micro-Interaction Design", "HTML & CSS", "Responsive Layouts"]
    }
  ]
};
