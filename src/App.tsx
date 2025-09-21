import { useEffect, useState } from "react"

function App() {
  const [surah, setSurah] = useState(null)

  useEffect(() => {
    getAlFatiha()
  }, [])

  // Fetch Al-Faatiha from API and update state
  async function getAlFatiha() {

    try {
      const response = await fetch("https://quranapi.pages.dev/api/1.json")
      

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const alfatiha = await response.json()

      setSurah(alfatiha)

    } catch (error) {
      console.error(error.message)
    }
    
  }


  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {surah && 
          <div className="flex flex-col gap-16 items-center">
            <h1 className="text-5xl font-bold">{surah.surahName}</h1>
            <audio loop controls src={surah.audio[1].url}>Al Fatiha</audio>
          </div>
        }
        
      </div>
      
    </>
  )
}

export default App
