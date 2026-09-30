import { Link } from "react-router-dom";

const assetPathPrefix = "/assets";

// Brand + icons
const imgLogo = `${assetPathPrefix}/8183e.svg`;
const imgSearchIcon = `${assetPathPrefix}/c2df8.svg`;
const imgCartIcon = `${assetPathPrefix}/1c01b.svg`;
const imgStar = `${assetPathPrefix}/28f21.svg`;
const imgStarRate = `${assetPathPrefix}/e1e6c.svg`;
const imgSignal = `${assetPathPrefix}/2cadd.svg`;
const imgCheck = `${assetPathPrefix}/f50bf.svg`;

// Hero decorative backgrounds
const imgHeroBg = `${assetPathPrefix}/f422c.svg`;
const imgHeroEllipse = `${assetPathPrefix}/ab9fa.svg`;
const imgCtaBg = `${assetPathPrefix}/937f8.svg`;

// People / imagery
const imgHeroPerson = `${assetPathPrefix}/e3a78.png`;
const imgCreatorPerson = `${assetPathPrefix}/af9cb.png`;

// Avatar stacks (hero happy students)
const heroAvatars = [
  `${assetPathPrefix}/d0fbe.png`,
  `${assetPathPrefix}/cb015.png`,
  `${assetPathPrefix}/b27d0.png`,
  `${assetPathPrefix}/85dac.png`,
  `${assetPathPrefix}/50032.png`,
  `${assetPathPrefix}/ce2e1.png`,
  `${assetPathPrefix}/9c73f.png`,
];
const imgAvatarBadge = `${assetPathPrefix}/59a18.svg`;

// Course card avatars
const cardAvatars = [
  `${assetPathPrefix}/2448e.png`,
  `${assetPathPrefix}/06ad8.png`,
  `${assetPathPrefix}/50d3a.png`,
  `${assetPathPrefix}/51caf.png`,
];
const imgCardBadge = `${assetPathPrefix}/755a8.svg`;

// Partner logos
const partnerLogos = [
  `${assetPathPrefix}/acaf7.svg`,
  `${assetPathPrefix}/a9d3e.svg`,
  `${assetPathPrefix}/73086.svg`,
  `${assetPathPrefix}/c0ac0.svg`,
  `${assetPathPrefix}/2d4b7.svg`,
];

// Diverse-path category icons (on lime pills)
const pathCatIcons = [
  `${assetPathPrefix}/70a1d.svg`,
  `${assetPathPrefix}/14aaf.svg`,
  `${assetPathPrefix}/f6678.svg`,
  `${assetPathPrefix}/72ddb.svg`,
  `${assetPathPrefix}/c751e.svg`,
  `${assetPathPrefix}/671b8.svg`,
];

// Course thumbnails
const courseThumbs = [
  `${assetPathPrefix}/670ab.png`,
  `${assetPathPrefix}/728b0.png`,
  `${assetPathPrefix}/59769.png`,
  `${assetPathPrefix}/0fa4b.png`,
  `${assetPathPrefix}/aec99.png`,
  `${assetPathPrefix}/b0d0a.png`,
];

// Testimonial avatars
const testimonialAvatars = [
  `${assetPathPrefix}/b6932.png`,
  `${assetPathPrefix}/31926.png`,
  `${assetPathPrefix}/c852a.png`,
];

const categoryNames = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"];

const courses = [
  { title: "Learn Figma from Basic", thumb: 0 },
  { title: "Build Digital Asset", thumb: 1 },
  { title: "the Power of Big Data", thumb: 2 },
  { title: "Balancing Productivity and Self-Care", thumb: 3 },
  { title: "Mastering Money Management", thumb: 4 },
  { title: "From Idea to Startup Success", thumb: 5 },
];

const tabCategories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing",
  "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking",
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

const cardShadow =
  "shadow-[0.518px_0.741px_3.036px_0px_rgba(0,0,0,0.04),2.233px_3.19px_5.723px_0px_rgba(0,0,0,0.06),5.383px_7.69px_9.571px_0px_rgba(0,0,0,0.07),10.208px_14.582px_16.087px_0px_rgba(0,0,0,0.08),16.946px_24.209px_24px_0px_rgba(0,0,0,0.09),25.838px_36.912px_36px_0px_rgba(0,0,0,0.1)]";

function AvatarStack({ avatars, size, badge, label, ring }: { avatars: string[]; size: number; badge: string; label: string; ring: boolean }) {
  return (
    <div className="flex items-center">
      {avatars.map((a, i) => (
        <img
          key={i}
          src={a}
          alt=""
          className={`rounded-full object-cover shrink-0 ${ring ? "ring-2 ring-white" : ""}`}
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -12 }}
        />
      ))}
      <div className="relative shrink-0" style={{ width: size, height: size, marginLeft: -12 }}>
        <img src={badge} alt="" className="absolute inset-0 size-full" />
        <span className="absolute inset-0 flex items-center justify-center font-body font-medium text-[12px] text-ink">
          {label}
        </span>
      </div>
    </div>
  );
}

function CourseCard({ title }: { title: string }) {
  const thumb = courseThumbs[courses.find((c) => c.title === title)?.thumb ?? 0];
  return (
    <article className="bg-white border border-gray-200 rounded-[24px] p-[15px] w-full">
      <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
        <img src={thumb} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute left-3 bottom-3 flex flex-wrap gap-2">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((m) => (
            <span
              key={m}
              className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.6)] rounded-[24px] px-3 py-1.5 font-body font-medium text-[12px] text-gray-body"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">{title}</h3>
            <p className="font-body text-[12px] text-gray-body mt-0.5">
              by <span className="text-blue">purepearl studio</span>
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="font-body text-[18px] text-gray-body">4.5</span>
            <img src={imgStarRate} alt="" className="size-6" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-gray-50 rounded-[24px] px-3 py-1.5 flex items-center gap-1">
            <img src={imgSignal} alt="" className="size-5" />
            <span className="font-body font-medium text-[12px] text-ink-700">Beginner</span>
          </span>
          <AvatarStack avatars={cardAvatars} size={32} badge={imgCardBadge} label="26+" ring={false} />
        </div>
        <div className="flex items-end gap-0.5">
          <span className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-blue">$25</span>
          <span className="font-body text-[12px] text-gray-body">/lifetime</span>
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, sub, center, eyebrowColor }: { eyebrow?: string; title: string; sub?: string; center?: boolean; eyebrowColor?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : "items-start"}`}>
      {eyebrow && <p className={`font-body font-medium text-[18px] ${eyebrowColor ?? "text-violet"}`}>{eyebrow}</p>}
      <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.5px] text-vulcan max-w-[720px]">
        {title}
      </h2>
      {sub && <p className="font-body text-[18px] leading-[1.6] text-gray-400 max-w-[917px]">{sub}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="w-full min-h-dvh bg-white overflow-x-hidden">
      {/* ============ HERO ============ */}
      <header className="relative bg-blue text-white overflow-hidden">
        <img src={imgHeroBg} alt="" className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-90" />
        <img src={imgHeroEllipse} alt="" className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[420px] w-[900px] max-w-none hidden md:block" />

        {/* Nav */}
        <nav className="relative z-10 mx-auto max-w-[1200px] px-6 h-[100px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={imgLogo} alt="" className="h-[31px] w-auto" />
            <span className="font-brand font-bold text-[24px] text-gray-50">ByteSpace</span>
          </a>
          <div className="hidden md:flex items-center gap-6 font-body text-[16px] text-gray-50">
            <a href="#" className="font-medium">Home</a>
            <a href="#courses">Courses</a>
            <a href="#creators">Creators</a>
          </div>
          <div className="flex items-center gap-6 font-body text-[16px] text-gray-50">
            <Link to="/signin" className="hidden sm:inline">Sign In</Link>
            <Link to="/register" className="hidden sm:inline">Join Us</Link>
            <img src={imgCartIcon} alt="cart" className="size-6" />
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-10 md:pt-16 flex flex-col items-center text-center gap-8">
          <h1 className="font-display font-semibold text-[clamp(40px,6vw,72px)] leading-[1.15] tracking-[-0.72px] max-w-[935px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-body text-[18px] leading-[1.6] text-[#e5e6e8] max-w-[620px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[640px] justify-center">
            <div className="flex-1 bg-white rounded-[24px] h-[52px] flex items-center gap-2 px-6">
              <img src={imgSearchIcon} alt="" className="size-6" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent outline-none font-body text-[18px] text-ink placeholder:text-gray-400"
              />
            </div>
            <button className="bg-lime rounded-[24px] px-8 h-[52px] font-body font-medium text-[18px] text-ink hover:brightness-95 transition">
              Search
            </button>
          </div>
        </div>

        {/* Hero image + floating cards */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 mt-12 md:mt-16">
          <div className="relative flex justify-center">
            <div className={`relative w-full max-w-[578px] rounded-t-[24px] overflow-hidden ${cardShadow}`}>
              <img src={imgHeroPerson} alt="Student learning" className="w-full h-[420px] md:h-[541px] object-cover object-top" />
            </div>

            {/* UI/UX design floating card */}
            <div className="absolute left-2 md:left-[8%] top-[55%] backdrop-blur-[10px] bg-white rounded-[16px] p-4 shadow-lg hidden sm:block">
              <p className="font-body font-medium text-[16px] text-ink">UI/UX Design</p>
              <div className="flex gap-2 font-body text-[12px] text-gray-400 mt-0.5">
                <span>200 Courses</span>
                <span>•</span>
                <span>1000+ Students</span>
              </div>
            </div>

            {/* Learning progress card */}
            <div className="absolute right-2 md:right-[6%] top-[24%] backdrop-blur-[10px] bg-white rounded-[16px] p-4 shadow-lg hidden sm:block">
              <p className="font-body font-medium text-[14px] text-ink">Learning Progress</p>
              <p className="font-display font-semibold text-[40px] leading-[1.2] tracking-[-0.48px] text-ink">55%</p>
              <div className="relative h-2 w-[180px] rounded-[24px] bg-[#f6f6f6] mt-1">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-[24px] bg-lime" />
              </div>
            </div>

            {/* Happy students card */}
            <div className="absolute left-2 md:left-[10%] -bottom-6 backdrop-blur-[10px] bg-white rounded-[16px] p-4 shadow-lg hidden lg:block">
              <p className="font-body font-medium text-[16px] text-ink">Happy Students</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="font-body text-[12px] text-ink font-bold">4.5</span>
                <span className="font-body text-[12px] text-gray-400">(240)</span>
                <img src={imgStar} alt="" className="size-4" />
              </div>
              <AvatarStack avatars={heroAvatars} size={43} badge={imgAvatarBadge} label="2K+" ring={true} />
            </div>
          </div>
        </div>
      </header>

      {/* ============ PARTNER LOGOS ============ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6 py-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partnerLogos.map((logo, i) => (
            <img key={i} src={logo} alt="" className="h-[41px] w-auto opacity-90" />
          ))}
        </div>
      </section>

      {/* ============ DISCOVER + COURSES ============ */}
      <section id="courses" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 flex flex-col items-center">
        <SectionHeading
          center
          title="Discover Your Passion, Build Your Skills"
          sub="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 max-w-[960px] mt-12">
          {tabCategories.map((t, i) => (
            <button
              key={t}
              className={`rounded-[24px] px-4 py-3 font-body font-medium text-[16px] transition ${
                i === 0 ? "bg-lime text-ink" : "bg-gray-50 text-ink-700 hover:bg-gray-200/60"
              }`}
            >
              {t}
            </button>
          ))}
          <button className="px-2 py-3 font-body font-medium text-[16px] text-blue">+ More</button>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 w-full">
          {courses.map((c) => (
            <CourseCard key={c.title} title={c.title} />
          ))}
        </div>
      </section>

      {/* ============ DIVERSE LEARNING PATHS ============ */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 md:pb-28 flex flex-col items-center">
        <SectionHeading
          center
          title="Explore Diverse Learning Paths at Bytespace"
          sub="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {categoryNames.map((name, i) => (
            <div
              key={name}
              className="border border-gray-200 rounded-[24px] size-[167px] flex flex-col items-center justify-center gap-3 hover:border-blue/40 transition"
            >
              <span className="bg-lime rounded-[40px] p-3 flex items-center justify-center">
                <img src={pathCatIcons[i]} alt="" className="size-9" />
              </span>
              <p className="font-body font-medium text-[20px] text-ink">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GROWTH + CREATE/MANAGE ============ */}
      <section id="creators" className="bg-[#fafafa] relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 flex flex-col gap-24">
          {/* Growth */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-10">
              <SectionHeading title="Your Path to Professional Growth Starts Here!" />
              <p className="font-body text-[18px] leading-[1.6] text-ink-700 max-w-[477px]">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
                journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
                career path entirely, we have the resources you need.
              </p>
              <div className="flex gap-14">
                {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-blue">{n}</p>
                    <p className="font-body text-[18px] text-ink-700">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-[380px]">
                <CourseCard title="Learn Figma from Basic" />
              </div>
              <div className="absolute right-0 bottom-4 backdrop-blur-[10px] bg-white rounded-[16px] p-4 shadow-lg hidden sm:block">
                <p className="font-body font-medium text-[14px] text-ink">Learning Progress</p>
                <p className="font-display font-semibold text-[40px] leading-[1.2] tracking-[-0.48px] text-ink">55%</p>
                <div className="relative h-2 w-[180px] rounded-[24px] bg-[#f6f6f6] mt-1">
                  <div className="absolute inset-y-0 left-0 w-[56%] rounded-[24px] bg-lime" />
                </div>
              </div>
            </div>
          </div>

          {/* Create & Manage */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className={`relative w-full max-w-[435px] rounded-[24px] overflow-hidden ${cardShadow}`}>
                <img src={imgCreatorPerson} alt="Creator" className="w-full h-[520px] object-cover" />
              </div>
              <div className="absolute left-0 top-8 backdrop-blur-[10px] bg-blue text-gray-50 rounded-[16px] p-4 shadow-lg w-[220px] hidden sm:block">
                <p className="font-body font-medium text-[16px]">Total Revenue</p>
                <p className="font-body text-[10px]">July 1-28</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="font-display font-semibold text-[24px] leading-[32px] tracking-[-0.24px]">$120.29</p>
                  <span className="bg-lime-500 text-ink rounded-[24px] px-2 py-0.5 font-body font-medium text-[10px]">+12$</span>
                </div>
                <div className="relative h-2 w-full rounded-[24px] bg-white mt-2">
                  <div className="absolute inset-y-0 left-0 w-[56%] rounded-[24px] bg-lime" />
                </div>
              </div>
              <div className="absolute right-2 bottom-6 backdrop-blur-[10px] bg-white rounded-[16px] p-4 shadow-lg hidden lg:block">
                <p className="font-body font-medium text-[16px] text-ink">Happy Students</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="font-body text-[10px] text-ink font-bold">4.5</span>
                  <span className="font-body text-[10px] text-gray-400">(240)</span>
                  <img src={imgStar} alt="" className="size-4" />
                </div>
                <AvatarStack avatars={heroAvatars} size={40} badge={imgAvatarBadge} label="2K+" ring={true} />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-10">
              <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.44px] text-ink max-w-[391px]">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="font-body text-[18px] leading-[1.6] text-ink-700 max-w-[574px]">
                <span className="font-bold text-ink">ByteSpace</span> supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
              <ul className="flex flex-col gap-4">
                {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <img src={imgCheck} alt="" className="size-6" />
                      <span className="font-body font-medium text-[18px] text-ink">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative bg-blue text-gray-50 overflow-hidden">
        <img src={imgCtaBg} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-24 flex flex-col items-center text-center gap-10">
          <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.44px] max-w-[710px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="font-body text-[18px] leading-[1.6] max-w-[964px]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
            become a part of a community comprising over 10,000 local and international creators. Utilize our Course
            Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button className="bg-lime rounded-[24px] px-8 py-3 font-body font-medium text-[18px] text-ink hover:brightness-95 transition">
            Join as Creator
          </button>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-[#fafafa] relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24 flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-11">
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-0.44px] text-black max-w-[577px]">
              Discover What Our Community Is Saying
            </h2>
            <p className="font-body text-[18px] leading-[1.6] text-gray-body max-w-[580px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
              from those who have experienced the transformative journey of learning and creating on our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={t.name} className="bg-white rounded-[24px] p-6 flex flex-col gap-6">
                <img src={testimonialAvatars[i]} alt="" className="size-20 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">{t.name}</p>
                  <p className="font-body text-[18px] text-blue">{t.role}</p>
                </div>
                <p className="font-body text-[18px] leading-[1.6] text-gray-body">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-2">
                  <img src={imgLogo} alt="" className="h-[31px] w-auto [filter:brightness(0)]" />
                  <span className="font-brand font-bold text-[24px] text-ink">ByteSpace</span>
                </a>
                <p className="font-body text-[14px] leading-[1.6] text-ink max-w-[528px]">
                  Stay Up to date with our latest features and releases by joining our newsletter.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="border border-gray-200 rounded-[100px] h-[52px] flex items-center px-6 w-full sm:w-[376px]">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent outline-none font-body text-[16px] text-ink placeholder:text-gray-400"
                    />
                  </div>
                  <button className="bg-lime rounded-[24px] px-8 py-3 font-body font-medium text-[18px] text-ink hover:brightness-95 transition">
                    Subscribe
                  </button>
                </div>
                <p className="font-body text-[12px] leading-[1.6] text-ink max-w-[504px]">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
              {[
                ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
                ["Development", "Marketing", "Photography", "Finance", "Sport"],
                ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
              ].map((col, i) => (
                <ul key={i} className="flex flex-col gap-4 font-body text-[14px] leading-[1.6] text-ink">
                  {col.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-blue transition">{link}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between gap-4 font-body text-[12px] leading-[1.6] text-ink">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue transition">Terms of Service</a>
              <a href="#" className="hover:text-blue transition">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
