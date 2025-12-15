import { useState } from "react";

interface CatFactResponse {
  fact: string;
}

export default function Cats() {
  const [fact, setFact] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    setLoading(true);
    const res = await fetch("https://catfact.ninja/fact");
    const data: CatFactResponse = await res.json();

    const translateUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      data.fact
    )}&langpair=en|ru`;
    const translateRes = await fetch(translateUrl);
    const translateData = await translateRes.json();

    setFact(translateData.responseData.translatedText);
    setLoading(false);
  };

  return (
    <section>
      <button onClick={getFact}>Получить факт</button>
      <p>{loading ? "Загрузка..." : fact}</p>
    </section>
  );
}
