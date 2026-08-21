import {Outfit, Lora} from 'next/font/google';
import '../styles/globals.css';
import { getMenu } from 'utils/getMenu';
import { MainMenu } from 'components/MainMenu';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const fontBody = Outfit({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body"
})

const fontHeading = Lora({
  subsets: ['latin'],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading"
})

export default async function RootLayout({ children }) {
  const data = await getMenu();
  console.log({data});
  
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body className='font-body'>
        <MainMenu 
        items={data.mainMenuItems} 
        />
        {children}
      </body>
    </html>
  )
}