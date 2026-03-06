import Navbar from '@/components/Navbar'
import './globals.css'
import KakaoChatButton from '@/components/KakaoChatButton'

// 🔥 이 부분을 추가해 주세요! 모바일에서 멋대로 확대되는 것을 막아줍니다.
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* 🔥 body 클래스에 overflow-x-hidden 추가 */}
      <body className="bg-black-50 overflow-x-hidden relative" suppressHydrationWarning>
        <Navbar />
        {children}
        <KakaoChatButton />
      </body>
    </html>
  )
}