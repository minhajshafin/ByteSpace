import { useState } from "react"
import { Link } from "react-router-dom"

const assetPathPrefix = "/assets"

const imgGridBg = `${assetPathPrefix}/937f8.svg`
const imgLogo = `${assetPathPrefix}/f009f.svg`
const imgSignal = `${assetPathPrefix}/94f91.svg`
const imgStarRate = `${assetPathPrefix}/8c766.svg`
const imgStar = `${assetPathPrefix}/34a04.svg`

const cardAvatars = [
  `${assetPathPrefix}/2448e.png`,
  `${assetPathPrefix}/06ad8.png`,
  `${assetPathPrefix}/50d3a.png`,
  `${assetPathPrefix}/51caf.png`,
]
const imgCardBadge = `${assetPathPrefix}/07961.svg`

const happyAvatars = [
  `${assetPathPrefix}/d0fbe.png`,
  `${assetPathPrefix}/cb015.png`,
  `${assetPathPrefix}/b27d0.png`,
  `${assetPathPrefix}/85dac.png`,
  `${assetPathPrefix}/50032.png`,
  `${assetPathPrefix}/ce2e1.png`,
  `${assetPathPrefix}/9c73f.png`,
]
const imgHappyBadge = `${assetPathPrefix}/ca178.svg`

function MiniCourseCard({ thumb, title }: { thumb: string title: string }) {
  return (
    <div className="group bg-white border border-gray-200 hover:border-blue/30 rounded-[24px] p-[15px] w-[373px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer">
      <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
        <img
          src={thumb}
          alt=""
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 bottom-3 flex gap-2">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((m) => (
            <span
              key={m}
              className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.6)] group-hover:bg-white/90 rounded-[24px] px-3 py-1.5 font-body font-medium text-[12px] text-gray-body whitespace-nowrap transition-colors"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-black group-hover:text-blue transition-colors truncate">
              {title}
            </h3>
            <p className="font-body text-[12px] text-gray-body">
              by{" "}
              <span className="text-blue group-hover:underline">
                purepearl studio
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-gray-50 rounded-full px-2 py-0.5">
            <span className="font-body font-medium text-[18px] text-gray-body">
              4.5
            </span>
            <img
              src={imgStarRate}
              alt=""
              className="size-6 transition-transform group-hover:rotate-12 duration-300"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-gray-50 rounded-[24px] px-3 py-1.5 flex items-center gap-1">
            <img src={imgSignal} alt="" className="size-5" />
            <span className="font-body font-medium text-[12px] text-ink-700">
              Beginner
            </span>
          </span>
          <div className="flex items-center">
            {cardAvatars.map((a, i) => (
              <img
                key={i}
                src={a}
                alt=""
                className="size-8 rounded-full object-cover"
                style={{ marginLeft: i === 0 ? 0 : -8 }}
              />
            ))}
            <div className="relative size-8" style={{ marginLeft: -8 }}>
              <img
                src={imgCardBadge}
                alt=""
                className="absolute inset-0 size-full"
              />
              <span className="absolute inset-0 flex items-center justify-center font-body font-medium text-[12px] text-white">
                26+
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-0.5 pt-1 border-t border-gray-100">
          <span className="font-display font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-blue">
            $25
          </span>
          <span className="font-body text-[12px] text-gray-body">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="relative min-h-dvh lg:h-dvh w-full bg-blue overflow-x-hidden lg:overflow-hidden flex flex-col justify-between">
      <img
        src={imgGridBg}
        alt=""
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Header logo */}
      <header className="relative z-10 px-6 md:px-12 lg:px-20 h-[70px] lg:h-[80px] flex items-center shrink-0">
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform active:scale-95"
        >
          <img
            src={imgLogo}
            alt="ByteSpace"
            className="h-[31px] w-auto transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-brand font-bold text-[24px] text-gray-50">
            ByteSpace
          </span>
        </Link>
      </header>

      {/* Main Viewport Centered */}
      <main className="relative z-10 mx-auto max-w-[1300px] w-full px-6 py-4 lg:py-0 flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — copy + decorative cluster */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-3 text-gray-50 max-w-[475px]">
              <h1 className="font-display font-semibold text-[22px] sm:text-[24px] leading-[1.2] tracking-[-0.2px]">
                Sign up and come in
              </h1>
              <p className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-white/90">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost
              </p>
            </div>

            {/* Decorative overlapping cards — desktop only */}
            <div className="relative h-[480px] hidden xl:block select-none">
              <div className="absolute left-0 top-[60px] scale-90 origin-top-left drop-shadow-2xl transition-transform duration-300 hover:scale-95">
                <MiniCourseCard
                  thumb={`${assetPathPrefix}/728b0.png`}
                  title="Build Digital Asset"
                />
              </div>
              <div className="absolute left-[90px] top-0 drop-shadow-2xl scale-95 origin-top-left transition-transform duration-300 hover:scale-100">
                <MiniCourseCard
                  thumb={`${assetPathPrefix}/59769.png`}
                  title="the Power of Big Data"
                />
              </div>

              {/* Happy students lime card */}
              <div className="absolute left-[160px] top-[370px] backdrop-blur-[10px] bg-lime rounded-[16px] p-4 w-[258px] shadow-2xl transition-all duration-300 hover:scale-105 cursor-default border border-black/5">
                <p className="font-body font-medium text-[16px] text-ink">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="font-body text-[10px] text-ink font-bold">
                    4.5
                  </span>
                  <span className="font-body text-[10px] text-[#424348]">
                    (240)
                  </span>
                  <img src={imgStar} alt="" className="size-4" />
                </div>
                <div className="flex items-center">
                  {happyAvatars.map((a, i) => (
                    <img
                      key={i}
                      src={a}
                      alt=""
                      className="size-[43px] rounded-full object-cover ring-2 ring-lime transition-transform hover:scale-110 hover:z-10"
                      style={{ marginLeft: i === 0 ? 0 : -16 }}
                    />
                  ))}
                  <div
                    className="relative size-[43px]"
                    style={{ marginLeft: -16 }}
                  >
                    <img
                      src={imgHappyBadge}
                      alt=""
                      className="absolute inset-0 size-full"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-body font-bold text-[12px] text-gray-50">
                      2K+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="w-full max-w-[540px] justify-self-center lg:justify-self-end bg-white rounded-[24px] px-6 sm:px-12 py-8 sm:py-10 shadow-2xl">
            <form
              className="flex flex-col gap-5 sm:gap-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <p className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-blue font-medium">
                  Create an Account
                </p>
                <h2 className="font-display font-semibold text-[32px] sm:text-[40px] leading-[1.2] tracking-[-0.44px] text-ink">
                  Welcome to ByteSpace
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="font-body font-medium text-[14px] text-ink">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    enterKeyHint="next"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jamie Davis"
                    className="h-[48px] sm:h-[50px] w-full border border-[#e5e6e8] rounded-[12px] px-5 font-body text-[16px] text-ink placeholder:text-gray-400 outline-none hover:border-gray-400 focus:border-blue focus:ring-4 focus:ring-blue/15 transition-all duration-200"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-body font-medium text-[14px] text-ink">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    enterKeyHint="next"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="h-[48px] sm:h-[50px] w-full border border-[#e5e6e8] rounded-[12px] px-5 font-body text-[16px] text-ink placeholder:text-gray-400 outline-none hover:border-gray-400 focus:border-blue focus:ring-4 focus:ring-blue/15 transition-all duration-200"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-body font-medium text-[14px] text-ink">
                    Password
                  </span>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      autoComplete="new-password"
                      enterKeyHint="done"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-[48px] sm:h-[50px] w-full border border-[#e5e6e8] rounded-[12px] pl-5 pr-12 font-body text-[16px] text-ink placeholder:text-gray-400 outline-none hover:border-gray-400 focus:border-blue focus:ring-4 focus:ring-blue/15 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 text-gray-400 hover:text-ink transition-colors p-1 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          className="size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </label>

                <button
                  type="submit"
                  className="self-end mt-2 bg-lime rounded-[24px] px-8 py-3 font-body font-medium text-[17px] text-ink hover:brightness-95 hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-lime"
                >
                  Continue
                </button>
              </div>

              <p className="text-center font-body text-[15px] sm:text-[16px] leading-[1.6]">
                <span className="text-ink-700">Already have an account? </span>
                <Link
                  to="/signin"
                  className="text-blue font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Sub-footer margin */}
      <div className="h-6 shrink-0" />
    </div>
  )
}
