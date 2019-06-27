import { Header, Overflow } from '../components/header'
import NextSeo from 'next-seo'

import Highlight from 'react-highlight'
import Footer from '../components/footer'
import Community from '../components/community'
import Head from 'next/head'

import '../node_modules/highlight.js/styles/atom-one-dark.css'

import * as tfeIntro from '../img/tfe-introduction.png'
import * as tfeEncryption from '../img/tfe-encryption.png'
import * as tfeEasyToUse from '../img/tfe-easy-to-use.png'


import * as github from '../img/github.png'
import * as slack from '../img/slack.png'
import * as tutorialA from '../img/tutorial-a.png'
import * as tutorialB from '../img/tutorial-b.png'
import * as tutorialC from '../img/tutorial-c.png'
import * as tfeShare from '../img/tfe-share.png'

const CODE_BLOCK =
`import tensorflow as tf 
import tf_encrypted as tfe 

def provide_input(): 
    # normal TensorFlow operations can be run locally 
    # as part of defining a private input, in this 
    # case on the machine of the input provider 
    return tf.ones(shape=(5, 10)) 

# define inputs 
w = tfe.define_private_variable(tf.ones(shape=(10,10))) 
x = tfe.define_private_input(‘input-provider’, provide_input) 

# define computation 
y = tfe.matmul(x, w) 

with tfe.Session() as sess: 
    # initialize variables 
    sess.run(tfe.global_variables_initializer()) 
    # reveal result 
    result = sess.run(y.reveal())
`

class Index extends React.Component {

    showSideMenu() {
        let hamburger = document.getElementsByClassName('hamburger-links')[0]
        let hamburgerContent = document.getElementsByClassName('hamburger-content')[0]

        hamburger.style['transform'] = 'translate(0%)'
        hamburger.style['animation-name'] = 'alpha-in'
        hamburger.style['background-color'] = '#000000aa'

        hamburgerContent.style['animation-name'] = 'slide-in'
        hamburgerContent.style['transform'] = 'translate(0%)'
    }

    hideSideMenu() {
        let hamburger = document.getElementsByClassName('hamburger-links')[0]
        let hamburgerContent = document.getElementsByClassName('hamburger-content')[0]

        hamburger.style['animation-name'] = 'alpha-out'
        hamburger.style['background-color'] = '#00000000'

        setTimeout(() => {
            hamburger.style['transform'] = 'translate(100%)'
        }, 500)

        hamburgerContent.style['animation-name'] = 'slide-out'
        hamburgerContent.style['transform'] = 'translate(100%)'
    }

    install() {
        document.getElementById('install').scrollIntoView({block: 'center', behavior: 'smooth'})
    }

    render() {
      return (
          <>
            <NextSeo config={{
                title: 'TF Encrypted | Encrypted Deep Learning in Tensorflow',
                description: 'TF Encrypted is a framework for encrypted deep learning in TensorFlow. It looks and feels like TensorFlow, taking advantage of the ease-of-use of the Keras API while enabling training and prediction over encrypted data.',
                openGraph: {
                    site_name: 'TF Encrypted',
                    title: 'TF Encrypted | Encrypted Deep Learning in Tensorflow',
                    description: 'TF Encrypted is a framework for encrypted deep learning in TensorFlow. It looks and feels like TensorFlow, taking advantage of the ease-of-use of the Keras API while enabling training and prediction over encrypted data.',
                    images: [
                        { url: '/_next/static/images/tfe-share-01cb03ce0b198196210fc97990652ae9.png' }
                    ]
                }
            }}
            />

              <div className='cover'>

                <Head>
                    <title>TF Encrypted | Encrypted Deep Learning in Tensorflow</title>
                    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                    <link rel='icon' href='static/favicon.ico'/>
                    <meta name='og:title' content='TF Encrypted | Encrypted Deep Learning in Tensorflow'/>
                    <meta name='og:image' content='/img/tfe-encryption.png'/>

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125728747-3"></script>
                    <script dangerouslySetInnerHTML={{ __html: `
                      if (window.location.origin !== 'https://tf-encrypted.io') {
                          // only track prod
                          return
                      }

                      window.dataLayer = window.dataLayer || [];
                      function gtag(){ dataLayer.push(arguments); }
                      gtag('js', new Date());

                      gtag('config', 'UA-125728747-3');
                    `}} />
                </Head>

                <Header hamburgerClicked={this.showSideMenu.bind(this)}/>
                <Overflow closeClicked={this.hideSideMenu.bind(this)}/>
                <div className='content'>
                    <div className='banner'>
                        <div className='slogan'>
                            <h1>Encrypted Deep Learning in TensorFlow</h1>
                        </div>
                        <button onClick={this.install.bind(this)} className='btn-cta'>Install Now</button>
                    </div>

                    <hr/>

                    <div className='overview max'>
                        <div className='row'>
                            <div className='block-text'>
                                <h2>What is TF Encrypted?</h2>
                                <p>TF Encrypted is a framework for encrypted deep learning in TensorFlow. It looks and feels like TensorFlow, taking advantage of the ease-of-use of the Keras API while enabling training and prediction over encrypted data.</p>
                            </div>
                            <div className='img-wrapper'>
                                <img src={tfeIntro}/>
                            </div>
                        </div>
                        <div className='row reverse'>
                            <div className='block-text'>
                                <h2>State-of-the-Art Cryptography</h2>
                                <p>Under the hood, TF Encrypted integrates state-of-the-art cryptography like secure multi-party computation and homomorphic encryption. Take advantage of prebuilt highly optimized protocols or build and test your own using our pluggable architecture.</p>
                            </div>
                            <div className='img-wrapper'>
                                <img src={tfeEncryption}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='block-text'>
                                <h2>Easy to Use</h2>
                                <p>TF Encrypted aims to make privacy-preserving deep learning simple and approachable, without requiring expertise in cryptography, distributed systems, or high-performance computing.</p>
                            </div>
                            <div className='img-wrapper'>
                                <img src={tfeEasyToUse}/>
                            </div>
                        </div>
                    </div>

                    <div className='small-block'>
                        <div className='small-block-content max'>
                            <h3>Private Machine Learning in TensorFlow using Secure Computation</h3>
                            <button className='btn-secondary'><a href='https://arxiv.org/abs/1810.08130'>Read the Whitepaper</a></button>
                        </div>
                    </div>

                    <div className='install max' id='install'>
                        <h2> Installation </h2>
                        <p>TF Encrypted is available as a package on PyPI supporting Python 3.5+ and Tensorflow 1.12.0+ which can be installed using</p>
                        <p className='code-inline'>pip install tf-encrypted</p>
                        <a href='https://github.com/tf-encrypted/tf-encrypted#installation'>View more ways to install</a>
                    </div>

                    <hr className='green'/>

                    <div className='usage'>
                        <h2> Usage </h2>
                        <p>The following is an example of a matrix multiplication on encrypted data using TF Encrypted</p>
                        <div className='code-block'>
                        <Highlight className='code-block python'>
                            {CODE_BLOCK}
                        </Highlight>
                        </div>
                    </div>

                    <div className='tutorials'>
                        <div className='title'>
                            <h2> Tutorials & Examples </h2>
                        </div>
                        <div className='tutorial-items'>
                            <div>
                                <img src={tutorialA}/>
                                <h5>Simple Average of Encrypted Values</h5>
                                <p>As a simple starting point, this example illustrates how TF Encrypted can be used to securely compute the… </p>
                                <a href='https://github.com/tf-encrypted/tf-encrypted/tree/master/examples/simple-average'>Read more</a>
                            </div>

                            <div>
                                <img src={tutorialB}/>
                                <h5>MNIST</h5>
                                <p>Perform private predictions using a simple neural network on the MNIST data set. It also shows how to integrate…</p>
                                <a href='https://github.com/tf-encrypted/tf-encrypted/tree/master/examples/mnist'>Read more</a>
                            </div>

                            <div>
                                <img src={tutorialC}/>
                                <h5>Federated Learning</h5>
                                <p>This example shows how TF Encrypted can be used to perform secure aggregation for federated learning, where a model… </p>
                                <a href='https://github.com/tf-encrypted/tf-encrypted/tree/master/examples/federated-learning'>Read more</a>
                            </div>
                        </div>
                    </div>

                    <div id='community' className='community'>
                        <h2> Join our growing community </h2>
                        <div className='community-buttons'>
                            <a href='https://github.com/tf-encrypted/tf-encrypted'>
                                <img src={github}/>
                            </a>
                            <a href='https://join.slack.com/t/tf-encrypted/shared_invite/enQtNjI5NjY5NTc0NjczLTFkYTRjYWQ0ZWVlZjVmZTVhODNiYTA2ZTdlNWRkMWE4MTI3ZGFjMWUwZDhhYTk1NjJkZTRiZjBhMzMyMjNlZmQ'>
                                <img src={slack}/>
                            </a>
                        </div>
                    </div>

                    <div className='small-block mailing-list'>
                        <div className='small-block-content max'>
                            <h3>Subscribe to our mailing list</h3>
                    
                            {/* TODO -- needs mailchimp url */}
                            <form action='' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' novalidate>
                                <div className='input-button-holder'>
                                    <input type='email' name='EMAIL' className='email' id='mce-EMAIL' placeholder='email address' required></input>
                                    <input className='button btn-secondary' value='Subscribe' type='submit'/>
                                    <div id='mce-responses' className='clear'>
                                        <div className='response' id='mce-error-response' style={{display:'none'}}></div>
                                        <div className='response' id='mce-success-response' style={{display:'none'}}></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <hr className='green'/>

                </div>
                <Footer/>
              </div>
            </>
        );
    }
}

export default Index;
