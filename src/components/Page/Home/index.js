import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { navigate } from 'gatsby'

import Layout from "../../Layout/container"

import bgImg from 'src/images/pen-writer.jpg'
import Button from 'src/components/Input/Button'
import EmailForm from 'src/components/Form/emailForm'


import QuillImage from 'src/images/purple-quill.png'
import QuillImage2 from 'src/images/purple-quill-sharp.png'
import QuillImage3 from 'src/images/purple-quill-3.png'
import QuillImage4 from 'src/images/purple-quill-4.png'





const IndexPage = ({ fetchAccounts, activeAccount }) => {


  // const handleConnect = (event) => {
  //   event.preventDefault()
    
  //   fetchAccounts && fetchAccounts()
  // }


  // React.useEffect(() => {
  //   if (activeAccount.isConnected) {
  //     navigate('/profile')
  //   } 
  // })

  return (
    <Layout>
      <Helmet><title>Esy</title></Helmet>

      <SectionWrapper>
        <HeroWrapper>
            <HeroSummary>
              <HeroParagraph>The Smart Journal for Writing AI Powered Essays</HeroParagraph>
              <EmailForm />
            </HeroSummary>
          </HeroWrapper>

          {/* <PageContent>
            <SectionElement>
              <SectionImage><img src={QuillImage2} /></SectionImage>
              <SectionContent>
                  <ParagraphElement>Esy is for Essay.</ParagraphElement>
                            
                  <ParagraphElement>
                      Esy is a digital journaling platform that offers users a suite of analytical tools for writing 
                      AI assisted essays and discovering powerful insights about their personal writing habits.
                  </ParagraphElement>
              </SectionContent>
            </SectionElement>
          </PageContent> */}
      </SectionWrapper>
    </Layout>
  )
}
 



export default IndexPage


const HeroParagraph = styled.p`
`


const MainSection = styled.main`
  // display: flex;
  flex: 1;
  margin: 0 auto;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  font-family: 'sans-serif';
  height: 100%;
  background: #fff;
  flex-direction: column;
  color: #000;
`

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`


const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 0 50px;
  background: #000;
  position: relative;

  

  ::before {
    content: "";
    background-image:  url(${bgImg});
    transform: scaleX(-1);
    background-repeat: no-repeat;
    opacity: 0.06;
    background-size: cover; 
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: -50% 50%;

    @media(max-width: 1200px) {

    }

    @media(max-width: 900px) {
      background-position: 50% 0%;
    }
  }

  @media(max-width: 600px) {
    padding: 0 25px;
  }


`


const HeroSummary = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 36px;
  max-width: 550px;
  text-align: center;
  align-items: flex-start;
  line-height: 1.6;
  justify-content: center;
  font-family: 'Spartan', sans-serif;

  p:first-child {
    text-align: left;
  }

  @media(max-width: 1200px) {
    max-width: 500px;
    font-size: 32px;
  }

  @media(max-width: 900px) {
  }

  @media(max-width: 600px) {
    max-width: 400px;
    font-size: 26px;
    line-height: 1.8;

    form {
      margin-top: 0;
    }

    .button-wrapper div {
      margin: 25px 0;
    }
  }

  @media(max-width: 500px) {
  } 

  @media(max-width: 430px) {
    font-size: 23px;
  }

  @media(max-width: 320px) {
    font-size: 16px;
  }


  .button {
    font-size: 16px;
    width: 140px;
    color: #fff;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 28px rgb(255 152 0 / 66%);
    background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`






const PageContent = styled.p`
    width: 100%;
    background: #000;
    margin: 0;
    padding-top: 100px;
`

const ParagraphElement = styled.p``


const SectionImage = styled.div`
    width: 100%;
    max-width: 400px;

    img {
        width: 100%;
        border-radius: 20%;
    }
`

const SectionElement = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`

const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
    margin: 0 50px;
`