import { ThemeSwitcher } from 'src/components/atoms'

export default function Home() {
  return (
    <div className='protostar_dark_background w-screen h-screen'>
      <header>
        <ThemeSwitcher />
      </header>
      <main>
        <p className='dark:text-yellow-light text-orange-light'>
          Text Colour
        </p>
      </main>
      <footer></footer>
    </div>
  )
}
