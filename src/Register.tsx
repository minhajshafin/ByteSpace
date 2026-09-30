import { Link } from "react-router-dom";

const assetPathPrefix = "/assets";

const imgGridBg = `${assetPathPrefix}/937f8.svg`;
const imgLogo = `${assetPathPrefix}/f009f.svg`;
const imgSignal = `${assetPathPrefix}/94f91.svg`;
const imgStarRate = `${assetPathPrefix}/8c766.svg`;
const imgStar = `${assetPathPrefix}/34a04.svg`;

const cardAvatars = [
  `${assetPathPrefix}/2448e.png`,
  `${assetPathPrefix}/06ad8.png`,
  `${assetPathPrefix}/50d3a.png`,
  `${assetPathPrefix}/51caf.png`,
];
const imgCardBadge = `${assetPathPrefix}/07961.svg`;

const happyAvatars = [
  `${assetPathPrefix}/d0fbe.png`,
  `${assetPathPrefix}/cb015.png`,
  `${assetPathPrefix}/b27d0.png`,
  `${assetPathPrefix}/85dac.png`,
  `${assetPathPrefix}/50032.png`,
  `${assetPathPrefix}/ce2e1.png`,
  `${assetPathPrefix}/9c73f.png`,
];
const imgHappyBadge = `${assetPathPrefix}/ca178.svg`;

function MiniCourseCard({ thumb, title }: { thumb: string; title: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[24px] p-[15px] w-[373px]">
      <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
        <img src={thumb} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute left-3 bottom-3 flex gap-2">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((m) => (
            <span
              key={m}
              className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.6)] rounded-[24px] px-3 py-1.5 font-body font-medium text-[12px] text-gray-body whitespace-nowrap"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-black truncate">{title}</h3>
            <p className="font-body text-[12px] text-gray-body">
              by <span className="text-blue">purepearl studio</span>
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="font-body font-medium text-[18px] text-gray-body">4.5</span>
            <img src={imgStarRate} alt="" className="size-6" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-gray-50 rounded-[24px] px-3 py-1.5 flex items-center gap-1">
            <img src={imgSignal} alt="" className="size-5" />
            <span className="font-body font-medium text-[12px] text-ink-700">Beginner</span>
          </span>
          <div className="flex items-center">
            {cardAvatars.map((a, i) => (
              <img key={i} src={a} alt="" className="size-8 rounded-full object-cover" style={{ marginLeft: i === 0 ? 0 : -8 }} />
            ))}
            <div className="relative size-8" style={{ marginLeft: -8 }}>
              <img src={imgCardBadge} alt="" className="absolute inset-0 size-full" />
              <span className="absolute inset-0 flex items-center justify-center font-body font-medium text-[12px] text-white">26+</span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-0.5">
          <span className="font-display font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-blue">$25</span>
          <span className="font-body text-[12px] text-gray-body">/lifetime</span>
        </div>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className="relative min-h-dvh w-full bg-blue overflow-hidden">
      <img src={imgGridBg} alt="" className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-90" />

      {/* Header logo */}
      <header className="relative z-10 px-6 md:px-[122px] h-[120px] flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={imgLogo} alt="ByteSpace" className="h-[31px] w-auto" />
          <span className="font-brand font-bold text-[24px] text-gray-50">ByteSpace</span>
        </Link>
      </header>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 pb-16 grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT — copy + decorative cluster */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-gray-50 max-w-[475px]">
            <h1 className="font-display font-semibold text-[20px] leading-[1.2] tracking-[-0.2px]">Sign up and come in</h1>
            <p className="font-body text-[18px] leading-[1.6]">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up
              quickly, easily, and at no cost
            </p>
          </div>

          {/* Decorative overlapping cards — desktop only */}
          <div className="relative h-[560px] hidden xl:block">
            <div className="absolute left-0 top-[89px] scale-95 origin-top-left drop-shadow-2xl">
              <MiniCourseCard thumb={`${assetPathPrefix}/728b0.png`} title="Build Digital Asset" />
            </div>
            <div className="absolute left-[113px] top-0 drop-shadow-2xl">
              <MiniCourseCard thumb={`${assetPathPrefix}/59769.png`} title="the Power of Big Data" />
            </div>

            {/* Happy students lime card */}
            <div className="absolute left-[188px] top-[435px] backdrop-blur-[10px] bg-lime rounded-[16px] p-4 w-[258px] shadow-xl">
              <p className="font-body font-medium text-[16px] text-ink">Happy Students</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="font-body text-[10px] text-ink font-bold">4.5</span>
                <span className="font-body text-[10px] text-[#424348]">(240)</span>
                <img src={imgStar} alt="" className="size-4" />
              </div>
              <div className="flex items-center">
                {happyAvatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt=""
                    className="size-[43px] rounded-full object-cover ring-2 ring-lime"
                    style={{ marginLeft: i === 0 ? 0 : -16 }}
                  />
                ))}
                <div className="relative size-[43px]" style={{ marginLeft: -16 }}>
                  <img src={imgHappyBadge} alt="" className="absolute inset-0 size-full" />
                  <span className="absolute inset-0 flex items-center justify-center font-body font-bold text-[12px] text-gray-50">2K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — form card */}
        <div className="w-full max-w-[579px] justify-self-center lg:justify-self-end bg-white rounded-[24px] px-8 sm:px-[63px] py-[61px]">
          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <p className="font-body text-[18px] leading-[1.6] text-blue">Create an Account</p>
              <h2 className="font-display font-semibold text-[44px] leading-[1.2] tracking-[-0.44px] text-ink max-w-[453px]">
                Welcome to ByteSpace
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <Field label="Full Name" placeholder="Jamie Davis" type="text" />
              <Field label="Email" placeholder="designer@example.com" type="email" />
              <Field label="Password" placeholder="********" type="password" />

              <button
                type="submit"
                className="self-end bg-lime rounded-[24px] px-6 py-3 font-body font-medium text-[18px] text-ink hover:brightness-95 transition"
              >
                Continue
              </button>
            </div>

            <p className="text-center font-body text-[16px] leading-[1.6]">
              <span className="text-ink-700">Already have an account? </span>
              <Link to="/signin" className="text-blue hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body font-medium text-[14px] text-ink">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[52px] w-full border border-[#e5e6e8] rounded-[12px] px-6 font-body text-[18px] text-ink placeholder:text-gray-400 outline-none focus:border-blue transition"
      />
    </label>
  );
}
