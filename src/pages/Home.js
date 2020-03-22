import React, { useEffect } from 'react'
import { Footer, Header, Navbar } from '../components'

export default function Home() {
  useEffect(() => {
    document.body.classList.toggle("index-page")

    return () => document.body.classList.toggle("index-page")
  }, [])

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />
        <div className="section section-nucleo-icons">
          <div className="blur-hover">
            <a href="/about">
              <div className="icons-container blur-item on-screen mt-5">
                {/* Center */}
                <i className="icon fab fa-dev" />
                {/* Right 1 */}
                <i className="icon icon-sm fab fa-git" />
                <i className="icon icon-sm fab fa-github" />
                <i className="icon icon-sm fab fa-bitbucket" />
                {/* Right 2 */}
                <i className="icon fab fa-java" />
                <i className="icon fab fab fa-python" />
                <i className="icon fab fa-cuttlefish" />
                {/* Left 1 */}
                <i className="icon icon-sm fas fa-database" />
                <i className="icon icon-sm fas fa-server" />
                <i className="icon icon-sm fab fa-aws" />
                {/* Left 2 */}
                <i className="icon fab fa-react" />
                <i className="icon fab fa-js-square" />
                <i className="icon fab fa-node" />
              </div>
              <span className="blur-hidden h5 text-primary">
                See about Alexander
              </span>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}