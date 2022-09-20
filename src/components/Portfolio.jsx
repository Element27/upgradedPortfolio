import React from 'react'
import PortfolioComponent from './PortfolioComponent'

import shot from './assets/ssht.png'
import qgt from './assets/qgt.png'
import pcm from './assets/pcm.png'

function Portfolio() {

  return (
    <div>
      <PortfolioComponent
        imgSrc={shot}
        portfolioHeading="Headers"
        portfolioDesc="This is the portfolio description, e suppose long pass this but this is all i can do right now"
        portfolioLink="thisisthelinkdotcom"

      />

      <PortfolioComponent
        imgSrc={qgt}
        portfolioHeading="Another Header"
        portfolioDesc="this i s the decsjnsfghr hrsg fhskbvsfnghk"
        portfolioLink="link"
      />

      <PortfolioComponent
        imgSrc={pcm}
        portfolioHeading="PCM Header"
        portfolioDesc="this is PCM the decsjnsfghr hrsg fhskbvsfnghk ghgh hfdsds"
        portfolioLink="linkpcm"
      />
    </div>
  )
}

export default Portfolio