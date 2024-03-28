import Image from 'next/image'
import React from 'react'

import { PageProps } from '@/lib/interfaces'

import CardContainer from './components/CardContainer'
import { FlexContainer } from '../../components/shared/layout/FlexContainer'
import { TypographyH1, TypographyH2, TypographyLarge } from '../../components/shared/Typography/Typography'
import banner from '../../../public/banner.svg'
import btcbFaviconC from '../../../public/logo/bmac-favicon-c.png'
import tcbFaviconC from '../../../public/logo/tcb-favicon-c.png'
const Homepage: React.FC<PageProps> = () => {
  return (
    <div>
      <div className='mb-24'>
        <FlexContainer classname='relative'>
          <Image src={banner} alt='banner image' sizes='100vw' className='w-full h-auto ' width={1440} height={740} />
          <div className='absolute text-white text-center w-5/6'>
            <TypographyH2 className='font-normal  mb-6 md:mb-12 border-none'>BrewerNet</TypographyH2>
            <TypographyH1 className='mb-2 md:mb-6'>Connections Make the World Better</TypographyH1>
            <TypographyLarge className='font-normal'>
              A community uses compassionate tech for innovative life improvements and a brighter future.
            </TypographyLarge>
          </div>
        </FlexContainer>
      </div>
      <FlexContainer>
        <TypographyH1>Product</TypographyH1>
      </FlexContainer>

      <CardContainer
        title='The Coffee Bean'
        description='The Coffee Bean is a social networking community on Discord created to provide students with a space to discuss homework, share campus life, and connect with teammates for academic projects, side projects, or startup ventures. This server is completely free and open to students from all educational institutions.'
        imageSrc={tcbFaviconC}
        altText='tcb-favicon-c'
        buttonContent='about TCB'
        isImageOnRight={false}
      />
      <CardContainer
        title='Buy Me a Coffee'
        description='Buy Me a Coffee is an innovative platform designed to revolutionize networking by blending digital connections with real-world interactions. Our goal is to encourage individuals to engage in meaningful conversations over coffee, fostering genuine relationships and knowledge sharing.'
        imageSrc={btcbFaviconC}
        altText='btcb-favicon-c'
        buttonContent='about BMac'
        isImageOnRight={true}
      />
    </div>
  )
}

export default Homepage
