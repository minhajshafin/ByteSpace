import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const assetPathPrefix = "/assets"

// Brand + icons
const imgLogo = `${assetPathPrefix}/8183e.svg`
const imgSearchIcon = `${assetPathPrefix}/c2df8.svg`
const imgCartIcon = `${assetPathPrefix}/1c01b.svg`
const imgStar = `${assetPathPrefix}/28f21.svg`
const imgStarRate = `${assetPathPrefix}/e1e6c.svg`
const imgSignal = `${assetPathPrefix}/2cadd.svg`
const imgCheck = `${assetPathPrefix}/f50bf.svg`

// Hero decorative backgrounds
const imgHeroBg = `${assetPathPrefix}/f422c.svg`
const imgHeroEllipse = `${assetPathPrefix}/ab9fa.svg`
const imgCtaBg = `${assetPathPrefix}/937f8.svg`

// 3D and decorative vector brand assets
const imgSquiggleLime = `${assetPathPrefix}/shape_squiggle_lime.png`
const imgSquiggleWhite = `${assetPathPrefix}/shape_squiggle_white.png`
const imgDonutWhite = `${assetPathPrefix}/shape_donut_white.png`
const imgDonutLime = `${assetPathPrefix}/shape_donut_lime.png`
const imgCylinderLime = `${assetPathPrefix}/shape_cylinder_lime.png`
const imgPrismWhite = `${assetPathPrefix}/shape_prism_white.png`
const imgSpringWhite = `${assetPathPrefix}/shape_spring_white.png`
const imgConeWhite = `${assetPathPrefix}/shape_cone_white.png`

// People / imagery
const imgHeroPerson = `${assetPathPrefix}/e3a78.png`
const imgCreatorPerson = `${assetPathPrefix}/af9cb.png`

// Avatar stacks (hero happy students)
const heroAvatars = [
  `${assetPathPrefix}/d0fbe.png`,
  `${assetPathPrefix}/cb015.png`,
  `${assetPathPrefix}/b27d0.png`,
  `${assetPathPrefix}/85dac.png`,
  `${assetPathPrefix}/50032.png`,
  `${assetPathPrefix}/ce2e1.png`,
  `${assetPathPrefix}/9c73f.png`,
]
const imgAvatarBadge = `${assetPathPrefix}/59a18.svg`

// Course card avatars
const cardAvatars = [
  `${assetPathPrefix}/2448e.png`,
  `${assetPathPrefix}/06ad8.png`,
  `${assetPathPrefix}/50d3a.png`,
  `${assetPathPrefix}/51caf.png`,
]
const imgCardBadge = `${assetPathPrefix}/755a8.svg`

// Partner logos
const partnerLogos = [
  `${assetPathPrefix}/acaf7.svg`,
  `${assetPathPrefix}/a9d3e.svg`,
  `${assetPathPrefix}/73086.svg`,
  `${assetPathPrefix}/c0ac0.svg`,
  `${assetPathPrefix}/2d4b7.svg`,
]

// Diverse-path category icons (on lime pills)
const pathCatIcons = [
  `${assetPathPrefix}/70a1d.svg`,
  `${assetPathPrefix}/14aaf.svg`,
  `${assetPathPrefix}/f6678.svg`,
  `${assetPathPrefix}/72ddb.svg`,
  `${assetPathPrefix}/c751e.svg`,
  `${assetPathPrefix}/671b8.svg`,
]

// Course thumbnails
const courseThumbs = [
  `${assetPathPrefix}/670ab.png`,
  `${assetPathPrefix}/728b0.png`,
  `${assetPathPrefix}/59769.png`,
  `${assetPathPrefix}/0fa4b.png`,
  `${assetPathPrefix}/aec99.png`,
  `${assetPathPrefix}/b0d0a.png`,
]

// Testimonial avatars
const testimonialAvatars = [
  `${assetPathPrefix}/b6932.png`,
  `${assetPathPrefix}/31926.png`,
  `${assetPathPrefix}/c852a.png`,
]

const categoryNames = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
]

const courses = [
  { title: "Learn Figma from Basic", thumb: 0, category: "UI/UX Design" },
  { title: "Build Digital Asset", thumb: 1, category: "Graphic Design" },
  { title: "the Power of Big Data", thumb: 2, category: "Data Science" },
  {
    title: "Balancing Productivity and Self-Care",
    thumb: 3,
    category: "Productivity",
  },
  {
    title: "Mastering Money Management",
    thumb: 4,
    category: "Freelance & Entrepreneurship",
  },
  {
    title: "From Idea to Startup Success",
    thumb: 5,
    category: "Freelance & Entrepreneurship",
  },
]

const tabCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
]

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

function AvatarStack({
  avatars,
  size,
  badge,
  label,
  ring,
}: {
  avatars: string[]
  size: number
  badge: string
  label: string
  ring: boolean
}) {
  return (
    <div className="flex items-center">
      {avatars.map((a, i) => (
        <img
          key={i}
          src={a}
          alt=""
          className={`rounded-full object-cover shrink-0 transition-transform duration-200 hover:scale-115 hover:z-10 ${
            ring ? "ring-2 ring-white" : ""
          }`}
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -12 }}
        />
      ))}
      <div
        className="relative shrink-0 transition-transform duration-200 hover:scale-115 hover:z-10"
        style={{ width: size, height: size, marginLeft: -12 }}
      >
        <img src={badge} alt="" className="absolute inset-0 size-full" />
        <span className="absolute inset-0 flex items-center justify-center font-body font-medium text-[12px] text-ink">
          {label}
        </span>
      </div>
    </div>
  )
}

function CourseCard({ title }: { title: string }) {
  const course = courses.find((c) => c.title === title)
  const thumb = courseThumbs[course?.thumb ?? 0]
  return (
    <article
      tabIndex={0}
      className="group bg-white border border-gray-200 hover:border-blue/50 rounded-[24px] p-[15px] w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer focus-visible:ring-2 focus-visible:ring-blue focus-visible:outline-none"
    >
      <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
        <img
          src={thumb}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />
        <div className="absolute left-3 bottom-3 flex flex-wrap gap-2">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((m) => (
            <span
              key={m}
              className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.75)] group-hover:bg-white/95 rounded-[24px] px-3 py-1.5 font-body font-medium text-[12px] text-gray-body transition-colors duration-300 shadow-xs"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black group-hover:text-blue transition-colors duration-200">
              {title}
            </h3>
            <p className="font-body text-[12px] text-gray-body mt-0.5">
              by{" "}
              <span className="text-blue group-hover:underline">
                purepearl studio
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-gray-50 group-hover:bg-blue/5 rounded-full px-2.5 py-0.5 transition-colors">
            <span className="font-body text-[18px] text-gray-body">4.5</span>
            <img
              src={imgStarRate}
              alt=""
              className="size-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-gray-50 rounded-[24px] px-3 py-1.5 flex items-center gap-1 group-hover:bg-lime/25 transition-colors">
            <img src={imgSignal} alt="" className="size-5" />
            <span className="font-body font-medium text-[12px] text-ink-700">
              Beginner
            </span>
          </span>
          <AvatarStack
            avatars={cardAvatars}
            size={32}
            badge={imgCardBadge}
            label="26+"
            ring={false}
          />
        </div>
        <div className="flex items-end gap-0.5 pt-1 border-t border-gray-100">
          <span className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-blue group-hover:scale-105 transition-transform duration-200 origin-left">
            $25
          </span>
          <span className="font-body text-[12px] text-gray-body">
            /lifetime
          </span>
        </div>
      </div>
    </article>
  )
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  center,
  eyebrowColor,
}: {
  eyebrow?: string
  title: string
  sub?: string
  center?: boolean
  eyebrowColor?: string
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        center ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow && (
        <p
          className={`font-body font-medium text-[18px] ${eyebrowColor ?? "text-violet"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.5px] text-vulcan max-w-[720px]">
        {title}
      </h2>
      {sub && (
        <p className="font-body text-[18px] leading-[1.6] text-gray-400 max-w-[917px]">
          {sub}
        </p>
      )}
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Featured")
  const [showAllTabs, setShowAllTabs] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollY > 20)
      setShowBackToTop(scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash)
        if (el) el.scrollIntoView({ behavior: "instant" })
      }, 100)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const coursesEl = document.getElementById("courses")
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail("")
        setSubscribed(false)
      }, 4000)
    }
  }

  const visibleTabs = showAllTabs ? tabCategories : tabCategories.slice(0, 9)

  const filteredCourses =
    activeTab === "Featured"
      ? courses
      : courses.filter((c) => c.category === activeTab)

  return (
    <div className="w-full min-h-dvh bg-white overflow-x-hidden">
      {/* ============ FIXED STICKY NAVBAR ============ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#003be2]/90 backdrop-blur-md shadow-lg shadow-blue/25 border-b border-white/10 h-[72px] md:h-[76px]"
            : "bg-transparent h-[80px] md:h-[90px]"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 h-full flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <img
              src={imgLogo}
              alt=""
              className="h-[31px] w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-brand font-bold text-[24px] text-gray-50">
              ByteSpace
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-body text-[16px] text-gray-50">
            <a
              href="#"
              className="font-medium hover:text-lime transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#courses"
              className="hover:text-lime transition-colors duration-200"
            >
              Courses
            </a>
            <a
              href="#creators"
              className="hover:text-lime transition-colors duration-200"
            >
              Creators
            </a>
          </div>
          <div className="flex items-center gap-6 font-body text-[16px] text-gray-50">
            <Link
              to="/signin"
              className="hidden sm:inline hover:text-lime transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="hidden sm:inline bg-white/10 hover:bg-white/20 hover:text-lime active:scale-95 rounded-full px-4 py-1.5 transition-all duration-200"
            >
              Join Us
            </Link>
            <button
              aria-label="Cart"
              className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              <img src={imgCartIcon} alt="cart" className="size-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ============ HERO SECTION (WITH 3D SHAPES & LIME DOME) ============ */}
      <header className="relative bg-blue text-white overflow-hidden min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-[80px] md:pt-[90px]">
        {/* Background grid */}
        <img
          src={imgHeroBg}
          alt=""
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* 3D Floating Decorative Brand Shapes (Framing Hero) */}
        {/* Left top squiggle */}
        <img
          src={imgSquiggleLime}
          alt=""
          className="pointer-events-none select-none absolute -left-12 sm:-left-4 lg:left-[-40px] top-[180px] sm:top-[200px] w-[180px] sm:w-[220px] lg:w-[280px] xl:w-[320px] z-10 drop-shadow-xl hidden sm:block"
        />
        {/* Left mid white squiggle */}
        <img
          src={imgSquiggleWhite}
          alt=""
          className="pointer-events-none select-none absolute left-[3%] sm:left-[6%] lg:left-[10%] top-[420px] sm:top-[450px] w-[90px] sm:w-[120px] lg:w-[150px] z-10 drop-shadow-lg hidden md:block"
        />
        {/* Left bottom white 3D donut */}
        <img
          src={imgDonutWhite}
          alt=""
          className="pointer-events-none select-none absolute -left-10 sm:-left-6 lg:left-[10px] bottom-[-20px] sm:bottom-[-10px] lg:bottom-0 w-[160px] sm:w-[200px] lg:w-[260px] xl:w-[300px] z-10 drop-shadow-2xl hidden sm:block"
        />
        {/* Right top lime cylinder */}
        <img
          src={imgCylinderLime}
          alt=""
          className="pointer-events-none select-none absolute -right-12 sm:-right-4 lg:right-[-40px] top-[180px] sm:top-[200px] w-[180px] sm:w-[220px] lg:w-[280px] xl:w-[320px] z-10 drop-shadow-xl hidden sm:block"
        />
        {/* Right mid white prism */}
        <img
          src={imgPrismWhite}
          alt=""
          className="pointer-events-none select-none absolute right-[4%] sm:right-[7%] lg:right-[11%] top-[420px] sm:top-[440px] w-[90px] sm:w-[120px] lg:w-[160px] z-10 drop-shadow-lg hidden md:block"
        />
        {/* Right bottom white 3D spring */}
        <img
          src={imgSpringWhite}
          alt=""
          className="pointer-events-none select-none absolute -right-10 sm:-right-6 lg:right-[10px] bottom-[-20px] sm:bottom-[-10px] lg:bottom-0 w-[160px] sm:w-[200px] lg:w-[250px] xl:w-[290px] z-10 drop-shadow-2xl hidden sm:block"
        />

        {/* Hero content */}
        <div className="relative z-20 mx-auto max-w-[1200px] px-6 pt-2 md:pt-4 flex flex-col items-center text-center gap-3 sm:gap-4 shrink-0">
          <h1 className="font-display font-semibold text-[clamp(32px,4.5vw,56px)] leading-[1.12] tracking-[-0.72px] max-w-[850px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-body text-[15px] sm:text-[16px] leading-[1.5] text-[#e5e6e8] max-w-[620px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-3 sm:gap-4 w-full max-w-[580px] justify-center mt-1"
          >
            <div className="flex-1 bg-white rounded-[24px] h-[52px] flex items-center gap-3 px-5 sm:px-6 shadow-md transition-all duration-300 focus-within:ring-4 focus-within:ring-lime/40 focus-within:shadow-xl">
              <img
                src={imgSearchIcon}
                alt=""
                className="size-5 shrink-0 opacity-60"
              />
              <input
                type="search"
                enterKeyHint="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent outline-none font-body text-[15px] sm:text-[16px] text-ink placeholder:text-[#9e9e9e]"
              />
            </div>
            <button
              type="submit"
              className="bg-lime hover:brightness-95 rounded-[23px] px-7 h-[46px] font-body font-medium text-[16px] text-ink hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Hero student cutout + lime dome + floating cards */}
        <div className="relative z-10 mx-auto w-full px-4 flex-1 min-h-0 flex items-end justify-center overflow-visible">
          <div className="relative flex justify-center w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[578px]">
            {/* Giant Lime Circular Dome behind student (exact Figma specs: cx=574.5, cy=574.5, r=414.5, strokeWidth=320, #CBFC01) */}
            <svg
              className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[13%] w-[199%] aspect-square max-w-none z-0"
              viewBox="0 0 1149 1149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="574.5"
                cy="574.5"
                r="414.5"
                stroke="#CBFC01"
                strokeWidth="320"
              />
            </svg>

            {/* Transparent Student Cutout */}
            <img
              src={imgHeroPerson}
              alt="Student learning"
              className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] select-none pointer-events-none"
            />

            {/* UI/UX design floating card */}
            <div className="absolute -left-2 sm:left-[-15px] lg:left-[-27px] top-[24%] z-20 backdrop-blur-[10px] bg-white/95 rounded-[16px] px-3.5 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 shadow-xl hidden sm:block transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default select-none border border-white/60">
              <p className="font-body font-medium text-[14px] sm:text-[15px] lg:text-[16px] text-ink">
                UI/UX Design
              </p>
              <div className="flex gap-2 font-body text-[11px] sm:text-[12px] text-gray-400 mt-0.5">
                <span>200 Courses</span>
                <span>•</span>
                <span>1000+ Students</span>
              </div>
            </div>

            {/* Learning progress card */}
            <div className="absolute -right-2 sm:right-[-25px] lg:right-[-65px] top-[25%] z-20 backdrop-blur-[10px] bg-white/95 rounded-[16px] p-3.5 sm:p-4 lg:p-5 shadow-xl hidden sm:block transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default select-none border border-white/60 min-w-[190px] sm:min-w-[210px] lg:min-w-[232px]">
              <p className="font-body font-medium text-[12px] sm:text-[13px] lg:text-[14px] text-ink">
                Learning Progress
              </p>
              <p className="font-display font-semibold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.1] tracking-[-0.48px] text-ink mt-0.5">
                55%
              </p>
              <div className="relative h-2 w-[140px] sm:w-[170px] lg:w-[192px] rounded-full bg-[#f6f6f6] mt-2 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-lime transition-all duration-1000" />
              </div>
            </div>

            {/* Happy students card */}
            <div className="absolute -left-4 sm:left-[-40px] md:left-[-60px] lg:left-[-103px] top-[58%] z-20 backdrop-blur-[10px] bg-white/95 rounded-[16px] p-3 sm:p-3.5 lg:p-4 shadow-xl hidden sm:block transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default select-none border border-white/60">
              <p className="font-body font-medium text-[13px] sm:text-[14px] lg:text-[16px] text-ink">
                Happy Students
              </p>
              <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2 mt-0.5">
                <span className="font-body text-[11px] sm:text-[12px] text-ink font-bold">
                  4.5
                </span>
                <span className="font-body text-[11px] sm:text-[12px] text-gray-400">
                  (240)
                </span>
                <img src={imgStar} alt="" className="size-3 sm:size-3.5" />
              </div>
              <AvatarStack
                avatars={heroAvatars}
                size={34}
                badge={imgAvatarBadge}
                label="2K+"
                ring={true}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ============ PARTNER LOGOS ============ */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:py-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partnerLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-[36px] md:h-[40px] w-auto opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-200 cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* ============ DISCOVER + COURSES ============ */}
      <section
        id="courses"
        className="scroll-mt-24 mx-auto max-w-[1200px] px-6 py-20 md:py-28 flex flex-col items-center"
      >
        <SectionHeading
          center
          title="Discover Your Passion, Build Your Skills"
          sub="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 max-w-[980px] mt-12">
          {visibleTabs.map((t) => {
            const isSelected = activeTab === t
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`rounded-[24px] px-4 py-3 font-body font-medium text-[16px] transition-all duration-200 cursor-pointer active:scale-95 ${
                  isSelected
                    ? "bg-lime text-ink shadow-sm ring-1 ring-black/5"
                    : "bg-gray-50 text-ink-700 hover:bg-gray-200/80 hover:text-ink hover:scale-105"
                }`}
              >
                {t}
              </button>
            )
          })}
          <button
            onClick={() => setShowAllTabs(!showAllTabs)}
            className="px-3 py-3 font-body font-medium text-[16px] text-blue hover:text-blue/80 active:scale-95 transition-all cursor-pointer underline-offset-4 hover:underline"
          >
            {showAllTabs ? "Show Less" : "+ More"}
          </button>
        </div>

        {/* Course grid with smooth transition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-14 w-full">
          {(filteredCourses.length > 0 ? filteredCourses : courses).map((c) => (
            <CourseCard key={c.title} title={c.title} />
          ))}
        </div>
      </section>

      {/* ============ DIVERSE LEARNING PATHS ============ */}
      <section
        id="diverse"
        className="scroll-mt-24 mx-auto max-w-[1248px] w-full px-4 sm:px-6 pb-20 md:pb-28 flex flex-col items-center"
      >
        <SectionHeading
          center
          title="Explore Diverse Learning Paths at Bytespace"
          sub="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <div className="w-full flex flex-nowrap items-center justify-start lg:justify-between gap-4 sm:gap-5 lg:gap-6 xl:gap-[41px] mt-12 md:mt-14 overflow-x-auto no-scrollbar py-4 px-1 snap-x">
          {categoryNames.map((name, i) => (
            <div
              key={name}
              tabIndex={0}
              role="button"
              className="group shrink-0 border border-gray-200 rounded-[24px] size-[140px] sm:size-[150px] md:size-[156px] lg:size-[166px] flex flex-col items-center justify-center gap-3 hover:border-blue hover:shadow-xl hover:-translate-y-2 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue focus-visible:outline-none snap-start bg-white"
            >
              <span className="bg-lime rounded-full size-[52px] sm:size-[56px] lg:size-[60px] flex items-center justify-center transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-md">
                <img
                  src={pathCatIcons[i]}
                  alt=""
                  className="size-7 sm:size-8 lg:size-9"
                />
              </span>
              <p className="font-body font-medium text-[15px] sm:text-[17px] lg:text-[20px] text-ink group-hover:text-blue transition-colors duration-200 text-center px-2">
                {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GROWTH + CREATE/MANAGE (WITH MULTI-LAYER COLLAGE & YEAR-TO-DATE CARD) ============ */}
      <section
        id="creators"
        className="scroll-mt-24 bg-[#fafafa] relative overflow-hidden"
      >
        {/* Soft Ambient Mesh Glows (from Figma) */}
        <div className="pointer-events-none absolute -left-40 top-20 size-[600px] rounded-full bg-lime/25 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-40 size-[500px] rounded-full bg-blue/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 top-40 size-[600px] rounded-full bg-blue/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-10 bottom-20 size-[500px] rounded-full bg-lime/20 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 md:py-28 flex flex-col gap-28">
          {/* Growth — Multi-layer Composition with overlapping Student & Squiggle */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-10">
              <SectionHeading title="Your Path to Professional Growth Starts Here!" />
              <p className="font-body text-[18px] leading-[1.6] text-ink-700 max-w-[477px]">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className="flex gap-14">
                {[
                  ["12K", "Students"],
                  ["70+", "Courses"],
                  ["16", "Creators"],
                ].map(([n, l]) => (
                  <div key={l} className="group cursor-default">
                    <p className="font-display font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-blue group-hover:scale-110 transition-transform duration-200 origin-left">
                      {n}
                    </p>
                    <p className="font-body text-[18px] text-ink-700">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collage on Right: CourseCard + Overlapping Student Cutout + Squiggle + Progress Card */}
            <div className="relative flex justify-center items-center min-h-[460px]">
              {/* Back: CourseCard */}
              <div className="w-full max-w-[370px] relative z-0">
                <CourseCard title="Learn Figma from Basic" />
              </div>

              {/* Decorative Lime Squiggle behind student */}
              <img
                src={imgSquiggleLime}
                alt=""
                className="pointer-events-none select-none absolute right-[-10px] top-[40px] w-[150px] z-10 drop-shadow-md"
              />

              {/* Front: Overlapping Student Cutout */}
              <img
                src={imgHeroPerson}
                alt=""
                className="pointer-events-none select-none absolute right-[-20px] sm:right-[10px] bottom-0 h-[360px] sm:h-[400px] object-contain z-20 drop-shadow-2xl"
              />

              {/* Floating Learning Progress Card */}
              <div className="absolute right-[-10px] sm:right-[-20px] top-[140px] backdrop-blur-[10px] bg-white/95 rounded-[16px] p-4 shadow-xl z-30 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default select-none border border-white/60">
                <p className="font-body font-medium text-[13px] text-ink">
                  Learning Progress
                </p>
                <p className="font-display font-semibold text-[36px] leading-[1.2] tracking-[-0.48px] text-ink">
                  55%
                </p>
                <div className="relative h-2 w-[160px] rounded-[24px] bg-[#f6f6f6] mt-1 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[56%] rounded-[24px] bg-lime" />
                </div>
              </div>
            </div>
          </div>

          {/* Create & Manage — With Creator Cutout, Dual Revenue Cards, and Squiggle */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Collage on Left */}
            <div className="relative order-2 lg:order-1 flex justify-center items-center min-h-[500px]">
              {/* Lime Squiggle behind creator */}
              <img
                src={imgSquiggleLime}
                alt=""
                className="pointer-events-none select-none absolute right-[10%] sm:right-[18%] top-[80px] w-[160px] z-0 drop-shadow-md"
              />

              {/* Creator Woman Cutout */}
              <img
                src={imgCreatorPerson}
                alt="Creator"
                className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] h-[480px] sm:h-[540px] object-contain drop-shadow-2xl"
              />

              {/* Card 1: Total Revenue (Top Left) */}
              <div className="absolute left-[-15px] sm:left-[-10px] top-6 backdrop-blur-[10px] bg-blue text-gray-50 rounded-[16px] p-4 shadow-2xl w-[210px] sm:w-[220px] z-20 border border-white/20 transition-all duration-300 hover:scale-105 select-none">
                <p className="font-body font-medium text-[15px]">
                  Total Revenue
                </p>
                <p className="font-body text-[10px] opacity-80">July 1-28</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-display font-semibold text-[24px] leading-[32px] tracking-[-0.24px]">
                    $120.29
                  </p>
                  <span className="bg-lime-500 text-ink rounded-[24px] px-2 py-0.5 font-body font-medium text-[10px]">
                    +12$
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-[24px] bg-white/20 mt-2 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[56%] rounded-[24px] bg-lime" />
                </div>
              </div>

              {/* Card 2: Year to Date (Middle Left - PREVIOUSLY LEFT OUT!) */}
              <div className="absolute left-[-20px] sm:left-[-15px] top-[140px] sm:top-[150px] backdrop-blur-[10px] bg-blue text-gray-50 rounded-[16px] p-4 shadow-2xl w-[190px] sm:w-[200px] z-20 border border-white/20 transition-all duration-300 hover:scale-105 select-none">
                <p className="font-body font-medium text-[14px]">
                  Year to Date
                </p>
                <p className="font-body text-[10px] opacity-80">2023</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-display font-semibold text-[22px] leading-[28px] tracking-[-0.24px]">
                    $1,200.38
                  </p>
                  <span className="bg-lime-500 text-ink rounded-[24px] px-2 py-0.5 font-body font-medium text-[10px]">
                    +12$
                  </span>
                </div>
              </div>

              {/* Card 3: Happy Students (Bottom Right) */}
              <div className="absolute right-[-15px] sm:right-[0px] bottom-4 backdrop-blur-[10px] bg-white/95 rounded-[16px] p-4 shadow-2xl z-20 transition-all duration-300 hover:scale-105 cursor-default select-none border border-white/60">
                <p className="font-body font-medium text-[15px] text-ink">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="font-body text-[10px] text-ink font-bold">
                    4.5
                  </span>
                  <span className="font-body text-[10px] text-gray-400">
                    (240)
                  </span>
                  <img src={imgStar} alt="" className="size-4" />
                </div>
                <AvatarStack
                  avatars={heroAvatars}
                  size={40}
                  badge={imgAvatarBadge}
                  label="2K+"
                  ring={true}
                />
              </div>
            </div>

            {/* Right: Text and Checklist */}
            <div className="order-1 lg:order-2 flex flex-col gap-10">
              <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.44px] text-ink max-w-[391px]">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="font-body text-[18px] leading-[1.6] text-ink-700 max-w-[574px]">
                <span className="font-bold text-ink">ByteSpace</span> supports
                individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 group transition-transform duration-200 hover:translate-x-1.5 cursor-default"
                  >
                    <img
                      src={imgCheck}
                      alt=""
                      className="size-6 transition-transform duration-200 group-hover:scale-115"
                    />
                    <span className="font-body font-medium text-[18px] text-ink group-hover:text-blue transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA (WITH FULL 3D BRAND SHAPES) ============ */}
      <section className="relative bg-blue text-gray-50 overflow-hidden">
        <img
          src={imgCtaBg}
          alt=""
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Floating 3D brand assets around CTA */}
        <img
          src={imgSquiggleLime}
          alt=""
          className="pointer-events-none select-none absolute -left-8 -top-8 w-[160px] sm:w-[200px] z-10 drop-shadow-xl"
        />
        <img
          src={imgSquiggleWhite}
          alt=""
          className="pointer-events-none select-none absolute left-[12%] top-[30px] w-[90px] sm:w-[120px] z-10 drop-shadow-lg"
        />
        <img
          src={imgDonutLime}
          alt=""
          className="pointer-events-none select-none absolute -left-12 -bottom-10 w-[200px] sm:w-[260px] z-10 drop-shadow-2xl"
        />
        <img
          src={imgConeWhite}
          alt=""
          className="pointer-events-none select-none absolute left-[18%] bottom-[20px] w-[90px] sm:w-[120px] z-10 drop-shadow-lg"
        />
        <img
          src={imgPrismWhite}
          alt=""
          className="pointer-events-none select-none absolute right-[14%] top-[20px] w-[100px] sm:w-[130px] z-10 drop-shadow-xl"
        />
        <img
          src={imgSpringWhite}
          alt=""
          className="pointer-events-none select-none absolute -right-10 top-[140px] w-[160px] sm:w-[210px] z-10 drop-shadow-xl"
        />
        <img
          src={imgDonutWhite}
          alt=""
          className="pointer-events-none select-none absolute right-[10%] -bottom-10 w-[180px] sm:w-[240px] z-10 drop-shadow-2xl"
        />

        <div className="relative z-20 mx-auto max-w-[1000px] px-6 py-24 md:py-28 flex flex-col items-center text-center gap-10">
          <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.44px] max-w-[710px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="font-body text-[18px] leading-[1.6] max-w-[964px] text-white/90">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Link
            to="/register"
            className="inline-block bg-lime rounded-[24px] px-8 py-3.5 font-body font-medium text-[18px] text-ink hover:brightness-95 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-lime"
          >
            Join as Creator
          </Link>
        </div>
      </section>

      {/* ============ TESTIMONIALS (WITH AMBIENT MESH GRADIENTS) ============ */}
      <section className="bg-[#fafafa] relative overflow-hidden">
        {/* Soft Ambient Mesh Glows */}
        <div className="pointer-events-none absolute -left-40 bottom-10 size-[500px] rounded-full bg-blue/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-30 top-10 size-[500px] rounded-full bg-lime/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 md:py-24 flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-11">
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.44px] text-black max-w-[577px]">
              Discover What Our Community Is Saying
            </h2>
            <p className="font-body text-[18px] leading-[1.6] text-gray-body max-w-[580px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-[24px] p-6 flex flex-col gap-6 border border-transparent hover:border-blue/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={testimonialAvatars[i]}
                  alt=""
                  className="size-20 rounded-full object-cover shadow-sm transition-transform duration-300 hover:scale-110"
                />
                <div>
                  <p className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">
                    {t.name}
                  </p>
                  <p className="font-body text-[18px] text-blue">{t.role}</p>
                </div>
                <p className="font-body text-[18px] leading-[1.6] text-gray-body">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER (WITH BRAND-ACCURATE LIME "b" LOGO) ============ */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-2 group w-fit">
                  {/* Preserves vibrant lime brand mark while text is dark ink */}
                  <img
                    src={imgLogo}
                    alt=""
                    className="h-[31px] w-auto transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="font-brand font-bold text-[24px] text-ink">
                    ByteSpace
                  </span>
                </a>
                <p className="font-body text-[14px] leading-[1.6] text-ink max-w-[528px]">
                  Stay Up to date with our latest features and releases by
                  joining our newsletter.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="border border-gray-200 rounded-[100px] h-[52px] flex items-center px-6 w-full sm:w-[376px] focus-within:border-blue focus-within:ring-2 focus-within:ring-blue/20 transition-all duration-200">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent outline-none font-body text-[16px] text-ink placeholder:text-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`rounded-[24px] px-8 py-3 font-body font-medium text-[18px] transition-all duration-200 active:scale-95 cursor-pointer ${
                      subscribed
                        ? "bg-blue text-white shadow-sm"
                        : "bg-lime text-ink hover:brightness-95 hover:shadow-md hover:scale-105"
                    }`}
                  >
                    {subscribed ? "Subscribed! ✓" : "Search"}
                  </button>
                </form>
                <p className="font-body text-[12px] leading-[1.6] text-ink max-w-[504px]">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
              {[
                [
                  "Featured Courses",
                  "Featured Categories",
                  "Business",
                  "IT",
                  "Design",
                ],
                ["Development", "Marketing", "Photography", "Finance", "Sport"],
                [
                  "Become a Creator",
                  "Affiliate Program",
                  "Contact",
                  "Help",
                  "About",
                ],
              ].map((col, i) => (
                <ul
                  key={i}
                  className="flex flex-col gap-4 font-body text-[14px] leading-[1.6] text-ink"
                >
                  {col.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-blue hover:translate-x-1 inline-block transition-all duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between gap-4 font-body text-[12px] leading-[1.6] text-ink">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed right-6 bottom-6 z-40 bg-white hover:bg-white text-ink hover:text-blue border border-gray-200 shadow-2xl rounded-full p-3.5 transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue"
        >
          <svg
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
