import { Inter } from 'next/font/google';
import Header from '@/modules/app/components/header/header';
import MainContainer from '@/modules/app/components/mainContainer/mainContainer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <Header />
        <MainContainer />
      </div>
  )
}
