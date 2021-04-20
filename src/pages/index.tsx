// SPA
// SSR
// SSG

import { useEffect } from "react"

export default function Home(props) {
  // SPA style. Crawlers não acessarão esses dados, pois não vão esperar o request.
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, [])

  // console.log(props.episodes);

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes, null, 4)}</p>  
    </div>
  );
}

// SSR - Server Side Rendering
// Faz o fetch antes de entregar a página pro navegador.
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data
//     }
//   }
// }

// SSG - Static Site Generator
// Faz o fetch e "salva" em cache para não precisar fazer requests todas as vezes.
// O parâmetro revalidate diz em segundos de quanto em quanto tempo uma nova página estática será gerada
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 // atualiza a cada 8 horas.
  }
}