const assetPathPrefix = "/assets"

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

const shapeDonutLime = `${assetPathPrefix}/shape_donut_lime.png`
const shapeSquiggleWhite = `${assetPathPrefix}/shape_squiggle_white.png`
const shapePrismLime = `${assetPathPrefix}/shape_prism_lime.png`

const thumbAsset = `${assetPathPrefix}/728b0.png`
const thumbData = `${assetPathPrefix}/59769.png`

function MiniCourseCard({ thumb, title }: { thumb: string title: string }) {
  return (
    <div className="group bg-white border border-gray-200 hover:border-blue/30 rounded-[24px] p-[15px] w-[372px] h-[383px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer">
      <div className="relative h-[195px] rounded-[12px] overflow-hidden bg-[#443131] shrink-0">
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
      <div className="pt-2 flex flex-col gap-3">
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
        <div className="flex items-end gap-0.5 pt-2 border-t border-gray-100">
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

export default function AuthLeftCluster() {
  return (
    <div className="relative w-[552px] h-[586px] hidden lg:block select-none scale-[0.72] xl:scale-[0.88] 2xl:scale-100 origin-top-left -mb-[160px] xl:-mb-[70px] 2xl:mb-0">
      {/* Background course preview card */}
      <div className="absolute left-[27px] top-[90px] z-10 drop-shadow-2xl">
        <MiniCourseCard thumb={thumbAsset} title="Build Digital Asset" />
      </div>

      {/* Floating 3D lime donut */}
      <img
        src={shapeDonutLime}
        alt=""
        className="pointer-events-none absolute left-[54px] top-[15px] w-[147px] h-[147px] z-15 drop-shadow-2xl animate-float-slow transition-transform hover:scale-105"
      />

      {/* Foreground course preview card */}
      <div className="absolute left-[138px] top-[0px] z-20 drop-shadow-2xl">
        <MiniCourseCard thumb={thumbData} title="the Power of Big Data" />
      </div>

      {/* Student community card */}
      <div className="absolute left-[253px] top-[435px] z-30 backdrop-blur-[10px] bg-lime rounded-[16px] p-4 w-[258px] h-[123px] flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-105 cursor-default border border-black/5">
        <div>
          <p className="font-body font-medium text-[16px] text-ink">
            Happy Students
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="font-body text-[10px] text-ink font-bold">
              4.5
            </span>
            <span className="font-body text-[10px] text-[#424348]">(240)</span>
            <img src={imgStar} alt="" className="size-4" />
          </div>
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
          <div className="relative size-[43px]" style={{ marginLeft: -16 }}>
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

      {/* Floating 3D white squiggle */}
      <img
        src={shapeSquiggleWhite}
        alt=""
        className="pointer-events-none absolute left-[376px] top-[321px] w-[176px] h-[176px] z-35 drop-shadow-2xl animate-float-reverse transition-transform hover:scale-105"
      />

      {/* Floating 3D lime prism */}
      <img
        src={shapePrismLime}
        alt=""
        className="pointer-events-none absolute left-[0px] top-[397px] w-[189px] h-[189px] z-35 drop-shadow-2xl animate-float-slow transition-transform hover:scale-105"
      />
    </div>
  )
}
