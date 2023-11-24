import Image from 'next/image'
import './page.css'
import Promo from '@/components/promo/Promo'
import Brands from '@/components/brands/brands'
import Arrivials from '@/components/arrivials/Arrivials'
import Payday from '@/components/payday/Payday'
import Favourite from '@/components/favourite/Favourite'
import Phone from '@/components/phone/Phone'
import Accession from '@/components/accession/Accession'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className='page'>
      < Promo />
      < Brands />
      < Arrivials />
      <Payday />
      <Favourite />
      <Phone />
      <Accession />
      <Footer />
    </main>
  )
}
