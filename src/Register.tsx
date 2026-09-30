import { useState } from "react"
import { Link } from "react-router-dom"
import AuthLeftCluster from "./AuthLeftCluster"

const assetPathPrefix = "/assets"

const imgGridBg = `${assetPathPrefix}/937f8.svg`
const imgLogo = `${assetPathPrefix}/f009f.svg`

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

            {/* Decorative overlapping cards + 3D objects */}
            <AuthLeftCluster />
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
