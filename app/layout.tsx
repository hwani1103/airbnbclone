import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser(); // layout.tsx가 _app.tsx나 마찬가지 역할. 여기서 현재 유져를 조회

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* Client에서만 렌더링되게 하는것 */}
          <ToasterProvider /> {/* 작은 간단한 알림창같은거 나오게함. good */}
          <RegisterModal /> {/* Modal컴포넌트를 사용하는 Register Modal */}
          <LoginModal /> {/* Modal컴포넌트를 사용하는 Login Modal */}
          <RentModal /> {/* Modal컴포넌트를 사용하는 Login Modal */}
          <Navbar currentUser={currentUser} />{" "}
          {/* NavBar. Logo, Search, Hamburgur menu 등.. */}
        </ClientOnly>
        <div className="pb-20 pt-20">{children}</div>
      </body>
    </html>
  );
}
