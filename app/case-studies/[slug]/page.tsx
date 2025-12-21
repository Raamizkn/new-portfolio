import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, TrendingDown, Users, Zap, Layout, BarChart3, ShieldCheck, Target, Rocket } from 'lucide-react'

interface Persona {
  name: string
  location: string
  profile: string
  schedule: string
  income: string
  behavior: string
  spend: string
  painPoints: string[]
  needs: string
}

interface Tier {
  name: string
  target: string
  price: string
  features: string[]
}

interface CaseStudyData {
  title: string
  subtitle: string
  industry: string
  client: string
  heroImage: string
  accentColor: string
  overview: string
  introduction: string
  conceptSummary: {
    title: string
    description: string
  }[]
  impactStatement: string
  problemOpportunity: {
    challenge: {
      title: string
      description: string
    }
    opportunity: {
      title: string
      description: string
    }
  }
  whyItMatters: {
    title: string
    description: string
  }[]
  competitorLandscape: {
    platform: string
    whatItDoes: string
    limitations: string
    strategicGap: string
  }[]
  personas: Persona[]
  productExperience: {
    title: string
    mechanism: string
    benefit: string
    howItWorks?: string
    image?: string
  }[]
  pricing: Tier[]
  unitEconomics: {
    revenue: string
    cogs: string[]
    realValue: string
  }
  goToMarket: {
    phase: string
    title: string
    strategy: string
    execution: string
    pitch: string
    target?: string
    trigger?: string
    gamification?: string
  }[]
  risks: {
    category: string
    detail: string
    probability: string
    mitigation: string
  }[]
  forecast: {
    assumptions: string[]
    revenue: {
      label: string
      value: string
    }[]
    retentionMultiplier: {
      metric: string
      standard: string
      commuter: string
      impact: string
    }[]
  }
}

const caseStudies: Record<string, CaseStudyData> = {
  'uber-commuter': {
    title: "Uber Commuter Pass — Redefining Urban Mobility for Daily Riders",
    subtitle: "Integrated Mobility Subscription (Portfolio Case Study)",
    industry: "Transportation",
    client: "Uber (I wish)",
    heroImage: "/products/uber/uber.png",
    accentColor: "#06c167",
    overview: "Uber Commuter Pass represents a strategic evolution in the ride-hailing sector’s approach to customer lifetime value (LTV). It is a conceptual expansion of the Uber platform designed to capture the high-frequency, high-value segment of urban commuters who have transitioned to hybrid work models. By integrating \"Smart Route Locking\" for price certainty and \"Multimodal Ticketing\" for public transit access, the Commuter Pass transforms Uber from a discretionary service into an essential monthly utility.",
    introduction: "The global mobility market is currently navigating a \"retention crisis.\" While Uber has successfully democratized access to on-demand transportation, the underlying business model remains transactional and highly sensitive to price fluctuations. The \"Uber Commuter Pass\" addresses this by creating a structural lock-in mechanism. It targets the \"Hybrid Paradox\"—the reality where workers commuting 2-3 days a week find traditional monthly transit passes economically inefficient, yet find ad-hoc single fares punitively expensive.",
    conceptSummary: [
      {
        title: "Price Protection",
        description: "\"Smart Route Locking\" that exempts pre-scheduled commute rides from surge pricing."
      },
      {
        title: "Multimodal Access",
        description: "Integrated ticketing for public transit (Subway/Bus) via API partnerships (e.g., Masabi)."
      },
      {
        title: "Flexibility",
        description: "Rollover credits for unused rides, specifically designed for the unpredictable nature of hybrid work schedules."
      }
    ],
    impactStatement: "Bridging the gap between the unpredictability of on-demand ride-hailing and the rigidity of traditional public transit season tickets. The Commuter Pass empowers hybrid professionals to navigate complex urban environments with cost certainty, reducing the cognitive load of the daily commute while unlocking a predictable, high-margin revenue stream for Uber.",
    problemOpportunity: {
      challenge: {
        title: "The Challenge: The Hybrid Paradox and Churn",
        description: "The post-pandemic workforce has settled into a structural hybrid pattern. In 2024, the average central London full-time worker spends 2.7 days in the office. This shift has rendered the traditional \"Season Ticket\" obsolete for millions. A monthly Zone 1-2 Travelcard in London costs £171.70, a price point calculated for 5-day-a-week usage. For a worker commuting only 8-10 days a month, the effective cost per trip becomes exorbitant."
      },
      opportunity: {
        title: "The Opportunity: Share of Wallet",
        description: "Transportation is a massive component of household expenditure. In cities like London and Istanbul, monthly transport passes consume roughly 7.4% to 7.5% of the average net wage. By capturing this non-discretionary spend, Uber can move from the \"Entertainment/Leisure\" budget line (highly elastic) to the \"Commuting/Utility\" budget line (highly inelastic)."
      }
    },
    whyItMatters: [
      {
        title: "Retention is the New Growth",
        description: "With generic subscription churn at 4% monthly, reducing this to <2% through a utility-based product dramatically improves LTV."
      },
      {
        title: "Asset Utilization",
        description: "Commute patterns are predictable. By locking in users to specific routes, Uber can optimize driver positioning in advance, reducing \"deadhead\" miles."
      },
      {
        title: "Ecosystem Expansion",
        description: "A subscriber locked into Uber for their commute is statistically more likely to use Uber Eats and other verticals, increasing overall platform spend by up to 4x."
      }
    ],
    competitorLandscape: [
      {
        platform: "Lyft Pink",
        whatItDoes: "Membership offering priority pickup, discounts, and bike-share access.",
        limitations: "Fails to deliver differentiated value for the daily commuter. Primarily a discount club.",
        strategicGap: "Does not solve the \"Hybrid Pricing\" problem or integrate public transit ticketing deep enough."
      },
      {
        platform: "Citymapper Pass",
        whatItDoes: "Integrated MaaS subscription bundling Tube, Bus, and Cab in London.",
        limitations: "Financially unsustainable. Operated at a loss because it acted as a reseller.",
        strategicGap: "Lacked control over the \"supply side\" (drivers), preventing cost optimization."
      },
      {
        platform: "Whim",
        whatItDoes: "\"Netflix for Transport\" in Helsinki/Europe.",
        limitations: "Struggled with scalability and dependency on partner cooperation.",
        strategicGap: "Faced friction in negotiating bulk discounts with transit agencies."
      },
      {
        platform: "Public Transit",
        whatItDoes: "Standard Season Tickets (Weekly/Monthly/Annual).",
        limitations: "Rigid pricing structure. Zero flexibility for hybrid schedules.",
        strategicGap: "Excellent for the \"core\" journey but fails the \"First/Last Mile.\""
      }
    ],
    personas: [
      {
        name: "Sarah",
        location: "London",
        profile: "32-year-old Marketing Manager living in Zone 3, working in Zone 1 (Soho).",
        schedule: "Tuesday-Thursday office mandate (3 days/week).",
        income: "£65,000/year.",
        behavior: "Uses Pay-As-You-Go Oyster. Takes Uber sporadically but stresses about surge pricing.",
        spend: "Spends ~£120/month on Tube + £60 on Ad-hoc Ubers. Total: £180.",
        painPoints: ["Wasted Day Anxiety", "Safety & Comfort (walking 15 mins to station)"],
        needs: "Cost certainty for a 3-day week and a seamless \"First Mile\" solution."
      },
      {
        name: "David",
        location: "Berlin",
        profile: "45-year-old Operations Director living in Zehlendorf, working in Mitte.",
        schedule: "4-5 days/week (Senior leadership role).",
        income: "€110,000/year.",
        behavior: "Drives a personal car (BMW 5 Series). Finds public transport too slow.",
        spend: "Car costs exceed €600/month.",
        painPoints: ["Productivity Loss (cannot work while driving)", "Parking Stress in Mitte"],
        needs: "A \"chauffeur\" experience that rivals car privacy but restores productivity time."
      }
    ],
    productExperience: [
      {
        title: "Smart Route Locking & Surge Protection",
        mechanism: "User defines \"Home\" and \"Work\" location and pre-schedules commute window.",
        benefit: "Uber \"locks\" the price at the base rate, exempting these specific rides from surge pricing.",
        howItWorks: "Algorithms batch these rides or position drivers efficiently, reducing operational cost.",
        image: "/products/uber/Screenshot 2025-12-18 at 01.48.55.png"
      },
      {
        title: "Multimodal Integration",
        mechanism: "App integrates local transit ticketing via SDKs (e.g., Masabi).",
        benefit: "User sees a \"Commuter\" tab with \"One Tap Access\" for QR codes for subway/bus.",
        howItWorks: "App suggests \"Mixed Mode\" trip: Uber to station + digital tube ticket in one transaction.",
        image: "/products/uber/Screenshot 2025-12-18 at 01.49.34.png"
      },
      {
        title: "The \"Hybrid Rollover\"",
        mechanism: "Unused rides roll over to the next month (capped at 2x).",
        benefit: "Eliminates \"use it or lose it\" anxiety that prevents commitment to monthly passes.",
        howItWorks: "Directly counters primary reason for voluntary churn in utility subscriptions.",
        image: "/products/uber/Screenshot 2025-12-18 at 01.50.02.png"
      }
    ],
    pricing: [
      {
        name: "Lite (The Hybrid)",
        target: "Sarah (2 days/week)",
        price: "$49 / £39 / €45",
        features: ["4 Rides (Rainy Day Insurance)", "Vehicle: UberX Share / Pool", "Rollover: Yes (Max 4)", "Monthly Cancellation"]
      },
      {
        name: "Flex (The Standard)",
        target: "Standard Commuter (3-4 days)",
        price: "$149 / £119 / €135",
        features: ["16 Rides (Core Commute)", "Vehicle: UberX", "$50 / £40 Transit Credit", "Rollover: Yes (Max 8)", "Monthly Cancellation"]
      },
      {
        name: "Elite (The Executive)",
        target: "David (Power User)",
        price: "$399 / £320 / €360",
        features: ["Unlimited Commute Rides", "Vehicle: Uber Black / Comfort", "Full Monthly Pass Included", "Annual Contract Options"]
      }
    ],
    unitEconomics: {
      revenue: "£119 (Flex Tier)",
      cogs: ["Transit Credit: £40 (Pass-through)", "Ride Subsidy: ~£32 theoretical loss (offset by batching)"],
      realValue: "Ecosystem expansion: Uber One members spend 4x more. Retaining users drives Uber Eats volume."
    },
    goToMarket: [
      {
        phase: "Phase 1",
        title: "The B2B \"Trojan Horse\"",
        strategy: "Position as tax-efficient Employee Benefit.",
        execution: "Leverage Uber for Business API; integrate with HR platforms (Workday, SAP).",
        pitch: "\"Cheaper than a company car and more flexible than a season ticket.\"",
        target: "Financial Services and Tech Hubs."
      },
      {
        phase: "Phase 2",
        title: "D2C In-App Upsell",
        strategy: "Contextual pop-ups triggered by behavior.",
        execution: "Trigger offer when user takes same \"Home to Work\" trip 3rd time in a week.",
        pitch: "\"You’ve spent £45 on commuting this week. Lock in this route and save.\"",
        trigger: "The \"Third Ride\" Rule",
        gamification: "Commuter Streaks for weekend upgrades."
      }
    ],
    risks: [
      {
        category: "Regulatory",
        detail: "FTC \"Click to Cancel\" Lawsuits.",
        probability: "High",
        mitigation: "\"One-Click Freedom\" Policy and monthly \"Value Reports\" showing savings."
      },
      {
        category: "Operational",
        detail: "Driver Supply Constraints during peak hours.",
        probability: "Medium",
        mitigation: "Dynamic Subsidies: Uber pays driver market rate while user pays locked rate."
      }
    ],
    forecast: {
      assumptions: [
        "Target Market: 5 million daily commuters in Pilot Cities (London, Berlin).",
        "Penetration: 1% adoption in Year 1 (50,000 users).",
        "Churn Rate: Target <2% monthly (vs industry avg 4%)."
      ],
      revenue: [
        { label: "Monthly Recurring Revenue (MRR)", value: "$6,000,000" },
        { label: "Annual Recurring Revenue (ARR)", value: "$72,000,000" }
      ],
      retentionMultiplier: [
        { metric: "Monthly Churn", standard: "4.0%", commuter: "1.8%", impact: "55% Reduction" },
        { metric: "Avg Monthly Spend", standard: "$60", commuter: "$120", impact: "2x Revenue" },
        { metric: "Uber Eats Attach Rate", standard: "15%", commuter: "45%", impact: "3x Ecosystem Value" }
      ]
    }
  },
  'airbnb-cospace': {
    title: "Airbnb CoSpace: Strategic Market Entry & Business Case Analysis",
    subtitle: "Unlocking residential yield during working hours (Strategic Case Study)",
    industry: "Real Estate / Tech",
    client: "Airbnb (I wish)",
    heroImage: "/products/airbnb/airbnb.png",
    accentColor: "#ff5b61",
    overview: "Airbnb CoSpace represents a strategic response to the paradigm shift in work—a conceptual vertical designed to unlock the latent economic potential of residential real estate during working hours. By enabling users to book flexible workspaces in residential neighborhoods, Airbnb can bridge the critical gap between the home and the office, capturing a piece of the $196B flexible office market.",
    introduction: "The global ecosystem of work, travel, and living is undergoing a structural metamorphosis. Airbnb CoSpace capitalizes on geographic arbitrage, transforming underutilized living rooms and home offices into revenue-generating assets during the 9-to-5 window when they typically sit vacant. This initiative aligns with Airbnb’s strategy to scale new offerings beyond core nights-booked.",
    conceptSummary: [
      {
        title: "Hyper-Local Access",
        description: "Transforming residential 'shadow inventory' into professional workspaces in suburbs where workers actually live."
      },
      {
        title: "Yield Management",
        description: "Enabling hosts to earn income during daylight hours (11am-3pm) when properties are otherwise idle."
      },
      {
        title: "Ecosystem Integration",
        description: "Transitioning Airbnb from a transactional travel utility to a daily high-frequency lifestyle 'SuperApp'."
      }
    ],
    impactStatement: "Bridging the gap between travel, remote work, and professional space booking — CoSpace empowers digital nomads and distributed teams to work productively anywhere.",
    problemOpportunity: {
      challenge: {
        title: "The Friction of the Hybrid Model",
        description: "Professionals face a bifurcated workflow: home offices lack ergonomics and privacy, while corporate offices require expensive, rejected commutes. Third spaces like cafes lack security and guaranteed seating."
      },
      opportunity: {
        title: "Structural Shifts Driving Demand",
        description: "With 32.6 million Americans working hybrid and digital nomads reaching 18.1 million, there is a massive permanent demographic requiring flexible solutions outside city-center CBDs."
      }
    },
    whyItMatters: [
      {
        title: "Asset Utilization Efficiency",
        description: "Short-term rentals are often vacant between checkout and check-in. CoSpace monetizes these hours without conflict."
      },
      {
        title: "Lower Blended CAC",
        description: "Integrating a high-frequency work use case lowers the cost of customer re-acquisition compared to annual travel."
      },
      {
        title: "Inventory Density",
        description: "Airbnb's 8M listings provide a neighborhood density that centralized providers like WeWork can never match."
      }
    ],
    competitorLandscape: [
      {
        platform: "Peerspace",
        whatItDoes: "Hourly space rentals for events and photoshoots.",
        limitations: "Event-centric brand; high friction for individual productivity focus.",
        strategicGap: "Focus on 'parties' deter hosts; CoSpace offers a lower-risk professional profile."
      },
      {
        platform: "WeWork",
        whatItDoes: "Premium, standardized commercial office environments.",
        limitations: "CBD-only locations; high daily rates; asset-heavy lease liabilities.",
        strategicGap: "Cannot penetrate the '15-minute city' residential market where workers live."
      },
      {
        platform: "Croissant",
        whatItDoes: "Aggregator for independent coworking spaces.",
        limitations: "No unique inventory; dependent on 3rd party space operators.",
        strategicGap: "Lacks the trusted global brand and insurance infrastructure of Airbnb."
      },
      {
        platform: "Hotel Day-Use",
        whatItDoes: "Daytime access to hotel rooms.",
        limitations: "Rooms designed for sleep, not work (poor ergonomics).",
        strategicGap: "High CAC environment; hotels view this as distressed inventory liquidation."
      }
    ],
    personas: [
      {
        name: "Sam",
        location: "Berlin",
        profile: "Senior Product Manager in a shared apartment.",
        schedule: "Remote-first tech role.",
        income: "€75k/year",
        behavior: "Struggles with noise and bad ergonomics at home. Finds cafes insecure.",
        spend: "Willing to pay €25/day for a private 'deep work' room.",
        painPoints: ["Distractions at home", "Lack of professional background"],
        needs: "Quiet, private space within 10 minutes walk."
      },
      {
        name: "The Sprint Squad",
        location: "New York",
        profile: "Distributed startup team of 5.",
        schedule: "Weekly in-person sprint days.",
        income: "Corporate budget",
        behavior: "Rotates meeting in cramped living rooms; finds WeWork rooms sterile/expensive.",
        spend: "Willing to pay $60/hour for a 'Team Hub'.",
        painPoints: ["Cramped home meetings", "High cost of Manhattan offices"],
        needs: "A 'homey' vibe with whiteboards and monitors for creative collaboration."
      }
    ],
    productExperience: [
      {
        title: "The 'Work Mode' Toggle",
        mechanism: "Direct search separation for 'Stays', 'Experiences', and 'CoSpace'.",
        benefit: "Instant filtering for professional workspace criteria, avoiding vacation-only listings.",
        howItWorks: "Prioritizes search results based on 'Work-Ready' certification.",
        image: "/products/airbnb/Screenshot 2025-12-21 at 22.53.47.png"
      },
      {
        title: "Work-Ready Certification",
        mechanism: "Integrated speed tests (Ookla) and AI-verified ergonomics (desk/chair check).",
        benefit: "Eliminates the 'trust gap' regarding internet reliability and work setup.",
        howItWorks: "Hosts must run in-app speed tests to display verified connection stats.",
        image: "/products/airbnb/Screenshot 2025-12-21 at 22.50.57.png"
      },
      {
        title: "Seamless Autonomous Access",
        mechanism: "Mandatory 'Instant Book' and smart-lock integration.",
        benefit: "Critical for hourly bookings; eliminates the friction of waiting for host approval.",
        howItWorks: "Time-coded entry keys sent automatically upon booking.",
        image: "/products/airbnb/Screenshot 2025-12-21 at 23.36.12.png"
      }
    ],
    pricing: [
      {
        name: "Shared / Pod",
        target: "Solo Focus",
        price: "$15 - $25 / day",
        features: ["High-speed Wi-Fi", "Ergonomic Chair", "Neighborhood location", "Quiet Zone"]
      },
      {
        name: "Private Office",
        target: "Deep Work",
        price: "$30 - $60 / half-day",
        features: ["Full Private Room", "Monitor Included", "Professional Background", "Absolute Privacy"]
      },
      {
        name: "Team Hub",
        target: "Collaborative Sprint",
        price: "$40 - $80 / hour",
        features: ["Large Meeting Area", "Whiteboard & AV", "Self-service Coffee", "Creative Environment"]
      }
    ],
    unitEconomics: {
      revenue: "$120M GMV (Year 1 Target)",
      cogs: ["Verification costs", "Customer support for business tier", "Insurance expansion"],
      realValue: "Ecosystem Lock-In: Work bookings drive stay visibility, effectively zeroing vacation CAC."
    },
    goToMarket: [
      {
        phase: "Phase 1",
        title: "Pilot City Rollout",
        strategy: "Focus on NY, London, Berlin, Dubai.",
        execution: "Activate Superhosts with existing workspace; 0% service fee for launch period.",
        pitch: "\"Monetize your empty hours. Turn your home office into an income stream.\""
      },
      {
        phase: "Phase 2",
        title: "Corporate Partnership",
        strategy: "Launch 'Airbnb for Teams' as a remote-perk dashboard.",
        execution: "Partner with Shopify, GitLab etc. to offer employee workspace budgets.",
        pitch: "\"Workspace budgets that cost 40% less than a WeWork All Access pass.\""
      }
    ],
    risks: [
      {
        category: "Regulatory",
        detail: "Residential zoning and 'Home Occupation' laws.",
        probability: "High",
        mitigation: "Limit capacity to max 4-6 people; focus on 'quiet professional' usage."
      },
      {
        category: "Quality Control",
        detail: "Inconsistent brand experience vs commercial offices.",
        probability: "Medium",
        mitigation: "Rigorous Speed-Test verification and 'Business Ready' badging."
      }
    ],
    forecast: {
      assumptions: [
        "20,000 Initial CoSpace Listings (0.25% of supply).",
        "Average 10 bookings per month per listing.",
        "Average Booking Value (ABV) of $50."
      ],
      revenue: [
        { label: "Year 1 Conservative Revenue", value: "$20,000,000" },
        { label: "Year 3 Global Revenue Potential", value: "$900,000,000" }
      ],
      retentionMultiplier: [
        { metric: "Usage Frequency", standard: "1.5 trips/year", commuter: "24 work days/year", impact: "16x Engagement" },
        { metric: "Booking CAC", standard: "Rising ($35+)", commuter: "Subsidized by Work", impact: "Zero-CAC Vacation" },
        { metric: "Host Monthly Yield", standard: "$1,500/mo", commuter: "$2,000/mo", impact: "33% Income Increase" }
      ]
    }
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]

  if (!study) {
    notFound()
  }

  return (
    <div 
      className="min-h-screen bg-white text-gray-900 pb-20 selection:bg-gray-100"
      style={{ '--accent-color': study.accentColor } as React.CSSProperties}
    >
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-gray-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          RKN
        </Link>
        <div className="hidden md:flex gap-10 items-center font-normal">
          <Link href="/" className="text-[15px] hover:text-gray-500 transition-colors">Home</Link>
          <Link href="/#about" className="text-[15px] hover:text-gray-500 transition-colors">About</Link>
          <Link href="/#projects" className="text-[15px] hover:text-gray-500 transition-colors font-medium">Case Studies</Link>
          <Link href="/#contact" className="text-[15px] hover:text-gray-500 transition-colors">Contact</Link>
          <Link href="/#contact" className="px-7 py-3 bg-black text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all">Get in touch</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16">
        <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-black transition-colors mb-16 text-sm font-medium uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Meta */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-32 mb-12 border-b border-gray-100 pb-12">
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Industry</p>
            <p className="text-xl font-normal">{study.industry}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Client</p>
            <p className="text-xl font-normal">{study.client}</p>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-12 tracking-tight">
          {study.title}
        </h1>
        
        <p className="text-2xl text-gray-500 font-light mb-20 leading-relaxed max-w-3xl">
          {study.subtitle}
        </p>

        {/* Hero Image */}
        <div className="w-full aspect-[16/10] bg-gray-50 rounded-[40px] overflow-hidden mb-32 group">
          <img 
            src={study.heroImage} 
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Overview & Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Overview</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <p className="text-2xl font-light leading-relaxed text-gray-600">
              {study.overview}
            </p>
            <div className="space-y-6">
              <h3 className="text-3xl font-medium">Introduction</h3>
              <p className="text-xl font-light leading-relaxed text-gray-500">
                {study.introduction}
              </p>
            </div>
          </div>
        </div>

        {/* Concept Summary Cards */}
        <div className="mb-40">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-12 text-center">Concept Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.conceptSummary.map((item, i) => (
              <div 
                key={i} 
                className="p-10 bg-gray-50 rounded-[32px] transition-colors duration-500 group"
                style={{ '--hover-bg': `${study.accentColor}10` } as React.CSSProperties}
              >
                <div 
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-colors"
                  style={{ color: study.accentColor }}
                >
                  {i === 0 && <ShieldCheck className="w-6 h-6" />}
                  {i === 1 && <Layout className="w-6 h-6" />}
                  {i === 2 && <TrendingDown className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-black text-white p-16 md:p-24 rounded-[48px] mb-40 relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full -mr-48 -mt-48 opacity-20"
            style={{ backgroundColor: study.accentColor }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">Impact Statement</h2>
            <p className="text-3xl md:text-5xl font-light leading-tight">
              "{study.impactStatement}"
            </p>
          </div>
        </div>

        {/* Challenge & Opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
          <div className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">The Challenge</h2>
            <h3 className="text-4xl font-medium leading-tight">{study.problemOpportunity.challenge.title}</h3>
            <p className="text-xl font-light text-gray-500 leading-relaxed">{study.problemOpportunity.challenge.description}</p>
          </div>
          <div className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">The Opportunity</h2>
            <h3 className="text-4xl font-medium leading-tight">{study.problemOpportunity.opportunity.title}</h3>
            <p className="text-xl font-light text-gray-500 leading-relaxed">{study.problemOpportunity.opportunity.description}</p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-40 py-24 border-y border-gray-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16 text-center">Why It Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {study.whyItMatters.map((item, i) => (
              <div key={i} className="space-y-6">
                <div 
                  className="text-5xl font-light"
                  style={{ color: study.accentColor }}
                >
                  0{i+1}
                </div>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="text-lg font-light text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Landscape */}
        <div className="mb-40 overflow-hidden">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">Competitor Landscape</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-6 font-medium text-gray-400 uppercase text-[10px] tracking-widest w-1/4">Platform</th>
                  <th className="py-6 font-medium text-gray-400 uppercase text-[10px] tracking-widest w-1/4">What It Does</th>
                  <th className="py-6 font-medium text-gray-400 uppercase text-[10px] tracking-widest w-1/4">Limitations</th>
                  <th className="py-6 font-medium text-gray-400 uppercase text-[10px] tracking-widest w-1/4">Strategic Gap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {study.competitorLandscape.map((row, i) => (
                  <tr key={i} className="group">
                    <td 
                      className="py-8 pr-8 font-medium align-top transition-colors"
                      style={{ color: 'inherit' }}
                    >
                      {row.platform}
                    </td>
                    <td className="py-8 pr-8 font-light text-gray-500 align-top">{row.whatItDoes}</td>
                    <td className="py-8 pr-8 font-light text-gray-500 align-top">{row.limitations}</td>
                    <td className="py-8 font-light text-gray-500 align-top">{row.strategicGap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Target Users & Personas */}
        <div className="mb-40">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16 text-center">Target Personas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {study.personas.map((persona, i) => (
              <div 
                key={i} 
                className="p-12 border border-gray-100 rounded-[40px] transition-all duration-500 hover:shadow-2xl"
                style={{ '--shadow-color': `${study.accentColor}20` } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-medium">
                    {persona.name[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">{persona.name} ({persona.location})</h3>
                    <p 
                      className="font-medium text-sm tracking-wide"
                      style={{ color: study.accentColor }}
                    >
                      Target Persona {i+1}
                    </p>
                  </div>
                </div>
                <div className="space-y-6 text-[15px]">
                  <p className="font-light text-gray-600"><span className="font-semibold text-gray-900">Profile:</span> {persona.profile}</p>
                  <p className="font-light text-gray-600"><span className="font-semibold text-gray-900">Schedule:</span> {persona.schedule}</p>
                  <p className="font-light text-gray-600"><span className="font-semibold text-gray-900">Current Behavior:</span> {persona.behavior}</p>
                  <p className="font-light text-gray-600"><span className="font-semibold text-gray-900">Needs:</span> {persona.needs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Experience */}
        <div className="mb-40 space-y-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 text-center">Product Experience</h2>
          {study.productExperience.map((feature, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-gray-50 rounded-[32px] overflow-hidden flex items-center justify-center text-gray-300">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      {i === 0 && <Target className="w-24 h-24" />}
                      {i === 1 && <Users className="w-24 h-24" />}
                      {i === 2 && <TrendingDown className="w-24 h-24" />}
                    </>
                  )}
                </div>
              </div>
              <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-medium mb-6">{feature.title}</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-400 mb-1 tracking-wider">Mechanism</p>
                    <p className="text-xl font-light text-gray-600">{feature.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-400 mb-1 tracking-wider">Benefit</p>
                    <p className="text-xl font-light text-gray-600">{feature.benefit}</p>
                  </div>
                  {feature.howItWorks && (
                    <div 
                      className="p-6 rounded-2xl border-l-4"
                      style={{ 
                        backgroundColor: `${study.accentColor}10`,
                        borderLeftColor: study.accentColor
                      }}
                    >
                      <p className="text-sm font-medium mb-1" style={{ color: study.accentColor }}>Technical Implementation</p>
                      <p className="font-light" style={{ color: study.accentColor }}>{feature.howItWorks}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="mb-40">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16 text-center">Pricing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.pricing.map((tier, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[40px] border transition-transform duration-500 ${
                  i === 1 ? 'bg-black text-white border-black scale-105 shadow-2xl' : 'bg-white border-gray-100'
                }`}
              >
                <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                <p className={`text-sm mb-8 ${i === 1 ? 'text-gray-400' : 'text-gray-500'}`}>{tier.target}</p>
                <div className="text-4xl font-normal mb-8 leading-none">{tier.price}</div>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px] font-light">
                      <Check 
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: study.accentColor }} 
                      />
                      <span className={i === 1 ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Go to Market */}
        <div className="mb-40">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16">Go-to-Market Strategy</h2>
          <div className="space-y-8">
            {study.goToMarket.map((phase, i) => (
              <div key={i} className="p-12 bg-gray-50 rounded-[40px] group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-50">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div 
                      className="text-xs font-bold uppercase mb-2"
                      style={{ color: study.accentColor }}
                    >
                      {phase.phase}
                    </div>
                    <h3 className="text-2xl font-medium leading-tight">{phase.title}</h3>
                  </div>
                  <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Strategy</p>
                      <p className="font-light text-gray-600 leading-relaxed">{phase.strategy}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Pitch</p>
                      <p className="font-light text-gray-600 italic">"{phase.pitch}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risks & Mitigation */}
        <div className="mb-40">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">Risks & Mitigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {study.risks.map((risk, i) => (
              <div key={i} className="p-10 bg-red-50/30 border border-red-100 rounded-[32px]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-medium text-red-900">{risk.category}</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {risk.probability} Probability
                  </span>
                </div>
                <p className="text-gray-700 font-light mb-8 leading-relaxed">{risk.detail}</p>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-red-50">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Mitigation</p>
                  <p className="font-light text-gray-600 text-sm leading-relaxed">{risk.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast */}
        <div className="mb-40 bg-gray-50 p-16 md:p-24 rounded-[48px]">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-16">Forecast & Business Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
            <div className="space-y-12">
              <h3 className="text-3xl font-medium">Assumptions</h3>
              <ul className="space-y-6">
                {study.forecast.assumptions.map((a, i) => (
                  <li key={i} className="flex gap-4 font-light text-gray-500 leading-relaxed italic text-lg">
                    <span style={{ color: study.accentColor }} className="font-bold">•</span> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {study.forecast.revenue.map((r, i) => (
                <div key={i} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-3 tracking-widest">{r.label}</p>
                  <div className="text-4xl font-normal text-black">{r.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <h3 className="text-3xl font-medium">Retention Multiplier Effect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {study.forecast.retentionMultiplier.map((m, i) => (
                <div 
                  key={i} 
                  className="p-8 rounded-3xl border text-center"
                  style={{ 
                    backgroundColor: `${study.accentColor}05`,
                    borderColor: `${study.accentColor}20`
                  }}
                >
                  <p 
                    className="text-[10px] font-bold uppercase mb-4 tracking-widest"
                    style={{ color: study.accentColor }}
                  >
                    {m.metric}
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-gray-400 line-through text-sm">{m.standard}</span>
                    <span className="text-3xl font-normal" style={{ color: study.accentColor }}>{m.commuter}</span>
                  </div>
                  <div 
                    className="inline-block px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider"
                    style={{ 
                      backgroundColor: `${study.accentColor}20`,
                      color: study.accentColor
                    }}
                  >
                    {m.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Impact */}
        <div className="text-center max-w-3xl mx-auto space-y-10">
          <Rocket 
            className="w-16 h-16 mx-auto" 
            style={{ color: study.accentColor }}
          />
          <h2 className="text-5xl font-medium leading-tight">Strategic Moat & Future Impact</h2>
          <p className="text-2xl font-light text-gray-500 leading-relaxed">
            {params.slug === 'uber-commuter' ? (
              <>
                The Uber Commuter Pass isn't just a new revenue stream—it's the foundation of <span className="text-black font-normal underline decoration-2 underline-offset-8" style={{ textDecorationColor: study.accentColor }}>MaaS dominance</span>. By locking in the daily commute, Uber increases the switching cost, builds recurring predictability, and secures its place as the operating system for urban life.
              </>
            ) : (
              <>
                Airbnb CoSpace transforms the platform from a travel utility into a <span className="text-black font-normal underline decoration-2 underline-offset-8" style={{ textDecorationColor: study.accentColor }}>daily lifestyle infrastructure</span>. By unlocking residential yield and providing hyper-local workspaces, Airbnb secures its ecosystem, lowers acquisition costs, and becomes the indispensable operating system for the hybrid world.
              </>
            )}
          </p>
          <div className="pt-10">
            <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Discuss this Strategy
            </Link>
          </div>
        </div>

      </main>

      {/* Footer info */}
      <footer className="max-w-7xl mx-auto px-6 mt-40 pt-20 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm mb-2 font-light tracking-wide italic">Final Takeaway for Recruiters</p>
        <p className="text-gray-500 font-light max-w-2xl mx-auto text-sm leading-relaxed mb-12">
          This case study demonstrates the ability to analyze complex market data (Churn, Inflation, Hybrid Work trends), synthesize technical concepts (APIs, Predictive Routing), and design commercially viable products that solve real human problems.
        </p>
        <div className="text-xs text-gray-300 uppercase tracking-[0.3em] font-bold">
          RKN • Portfolio • 2025
        </div>
      </footer>
    </div>
  )
}
