"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const companyInfo = {
  name: "株式会社グランアレス",
  address: "神奈川県横浜市中区長者町1丁目２番地グランカーサ横濱石川町611号室",
  ceo: "森田輝",
  business: ["不動産売買"],
}

const features = [
  {
    name: "不動産売買サービス",
    description:
      "豊富な経験と実績を持つ不動産のプロフェッショナルが、お客様の不動産売買をサポートいたします。物件の査定から売却・購入まで、安心してご利用いただけるサービスを提供します。",
    details: ["不動産査定", "売却・購入サポート", "物件紹介"],
    image: "/sales.jpg",
    icon: "🏠",
  },
]

// スクロールアニメーション用フック
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// 会社概要アイテム コンポーネント
function CompanyInfoItem({ item, index }: { item: { label: string; value: string }; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {item.label}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.value}</p>
    </div>
  )
}

// サービス機能アイテム コンポーネント
function FeatureItem({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-8 group-hover:scale-105 transition-transform duration-500">
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent group-hover:from-blue-900/80 transition-all duration-500" />
        <div className="absolute top-6 right-6 text-4xl bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
            {feature.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-auto flex-col text-base leading-7 text-gray-600">
          <p className="flex-auto group-hover:text-gray-800 transition-colors duration-300">{feature.description}</p>
          <ul className="mt-8 space-y-3">
            {feature.details.map((detail, detailIndex) => (
              <li
                key={detail}
                className={`flex gap-x-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: `${(index * 200) + (detailIndex * 100) + 300}ms` }}
              >
                <div className="h-6 w-5 flex-none">
                  <div className="h-5 w-5 rounded-full bg-gray-900 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span className="group-hover:text-gray-800 transition-colors duration-300">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image src="/companytop.jpg" alt="ビジネスミーティング" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
          {/* アニメーション背景 */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-blue-500/10 animate-pulse" />
        </div>

        <div className="relative mx-auto h-full flex items-center max-w-7xl px-6 lg:px-8">
          <div
            className={`mx-auto max-w-2xl lg:text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 animate-bounce">
                不動産売買の専門企業
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-6 drop-shadow-2xl">
              不動産売買
              <br />
              <span className="text-5xl sm:text-7xl text-white font-black drop-shadow-2xl">安心・信頼の専門企業</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 animate-fade-in-up">
              株式会社グランアレスは、不動産売買の専門企業です。
              <br />
              豊富な経験と実績を持つプロフェッショナルが、お客様の不動産取引をサポートいたします。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
                <span className="relative z-10">お問い合わせ</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="px-8 py-4 text-white font-semibold border-2 border-white/50 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                サービス詳細
              </button>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* サービス内容セクション */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-bold leading-7 text-gray-900 uppercase tracking-wider">サービス内容</h2>
            <p className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              不動産売買の
              <br />
              <span className="text-black">専門サービス</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              株式会社グランアレスでは、不動産売買の専門サービスを提供し、お客様の不動産取引をサポートいたします。
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
            <FeatureItem feature={features[0]} index={0} />
          </div>
        </div>
      </div>

      {/* 会社概要セクション */}
      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl mb-4">会社概要</h2>
              <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  { label: "会社名", value: companyInfo.name },
                  { label: "代表取締役", value: companyInfo.ceo },
                  { label: "所在地", value: companyInfo.address },
                ].map((item, index) => (
                  <CompanyInfoItem key={item.label} item={item} index={index} />
                ))}
              </div>

              {/* 事業内容 */}
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">事業内容</h3>
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="h-3 w-3 bg-gray-400 rounded-full" />
                    <span className="text-gray-700 font-medium text-lg">{companyInfo.business[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA セクション */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">不動産売買についてご相談ください</h2>
          <p className="text-xl text-gray-300 mb-8">お気軽にお問い合わせください</p>
          <button className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="group-hover:text-black transition-colors duration-300">今すぐお問い合わせ</span>
          </button>
        </div>
      </div>
    </div>
  )
}
