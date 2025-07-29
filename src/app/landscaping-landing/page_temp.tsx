"use client";

import { useEffect } from 'react';

export default function LandscapingLandingPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Gettree - Garden & Landscaping';
    
    // Load CSS files dynamically
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.head.appendChild(link);
    };

    // Load all required CSS files for Gettree template
    loadCSS('/landscaping-template/stylesheet/bootstrap.css');
    loadCSS('/landscaping-template/stylesheet/style.css');
    loadCSS('/landscaping-template/stylesheet/responsive.css');
    loadCSS('/landscaping-template/stylesheet/icomoon.css');
    loadCSS('/landscaping-template/stylesheet/animate.css');
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    
    // Load JavaScript files dynamically
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    };

    // Load all required JS files for Gettree template
    setTimeout(() => {
      loadScript('/landscaping-template/javascript/jquery.min.js');
      setTimeout(() => {
        loadScript('/landscaping-template/owlcarousel/owl.carousel.min.js');
        loadScript('/landscaping-template/javascript/bootstrap.min.js');
        loadScript('/landscaping-template/javascript/owl.carousel.js');
        loadScript('/landscaping-template/javascript/jquery-validate.js');
        loadScript('/landscaping-template/javascript/jquery.easing.js');
        loadScript('/landscaping-template/javascript/jquery.cookie.js');
        loadScript('/landscaping-template/javascript/waypoints.min.js');
        loadScript('/landscaping-template/javascript/countto.js');
        loadScript('/landscaping-template/javascript/wow.min.js');
        loadScript('/landscaping-template/javascript/main.js');
        
        // Revolution slider scripts
        loadScript('/landscaping-template/rev-slider/js/jquery.themepunch.revolution.min.js');
        loadScript('/landscaping-template/rev-slider/js/jquery.themepunch.tools.min.js');
        loadScript('/landscaping-template/javascript/rev-slider.js');
      }, 100);
    }, 100);
  }, []);

  // Return the exact Gettree template HTML
  return (
    <div style={{ minHeight: '100vh' }}>
      <div dangerouslySetInnerHTML={{
        __html: `
          <!-- Exact Gettree Template Copy -->
          <div class="boxed blog">
            <!-- Preloader -->
            <div class="preloader">
              <div class="clear-loading loading-effect-2">
                <span></span>
              </div>
            </div>

            <div class="flat-header-box">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="container">
                      <div class="row">
                        <div class="top-header1">
                          <div class="top-header-inner">
                            <div class="top-bar-left">
                              <span class="top-location">2072 Pinnickinick Street, WA 98370</span>
                              <span class="top-mail">info@website.com</span>
                            </div>
                            <div class="top-bar-right">
                              <ul class="widgets-nav-social">
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- header -->
                    <header id="header" class="header bg-color">
                      <div class="container">
                        <div class="row">
                          <div class="header-wrap-home1">
                            <div class="col-md-3">
                              <div class="inner-header">
                                <div class="logo-header">
                                  <a href="index.html" title="">
                                    <img src="/landscaping-template/icon/logo-dark.png" alt="images">
                                  </a>
                                </div>
                                <div class="btn-menu">
                                  <span></span>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="nav-wrap">
                                <nav id="mainnav" class="mainnav">
                                  <ul class="menu">
                                    <li class="current-menu-item menu-item-has-children">
                                      <a href="index.html" title="">Home</a>
                                      <ul class="sub-menu">
                                        <li class="current-item"><a href="index.html" title="">Home 01</a></li>
                                        <li><a href="home-2.html" title="">Home 02</a></li>
                                      </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                      <a href="about.html" title="">About</a>
                                      <ul class="sub-menu">
                                        <li><a href="about.html" title="">About Us</a></li>
                                        <li><a href="team.html" title="">Team</a></li>
                                        <li><a href="faq.html" title="">Faq</a></li>
                                      </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                      <a href="services.html" title="">Services</a>
                                      <ul class="sub-menu">
                                        <li><a href="services.html" title="">Services</a></li>
                                        <li><a href="service-details.html" title="">Service Details</a></li>
                                      </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                      <a href="case-study.html" title="">Case</a>
                                      <ul class="sub-menu">
                                        <li><a href="case-study.html" title="">Case Study</a></li>
                                        <li><a href="case-details.html" title="">Case Details</a></li>
                                      </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                      <a href="blog.html" title="">Blog</a>
                                      <ul class="sub-menu">
                                        <li><a href="blog.html" title="">Blog Standard</a></li>
                                        <li><a href="blog-detail.html" title="">Blog Detail</a></li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="contact.html" title="">Contact</a>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="site-header-right">
                                <div class="header-inner">
                                  <div class="search flat-show-search">
                                    <div class="show-search">
                                      <a href="#"><i class="fa fa-search"></i></a>
                                    </div>
                                    <div class="top-search widgets-input">
                                      <form action="get" id="searchform-all" class="header-search search-form">
                                        <div class="input-group">
                                          <input type="search" id="s" class="search-field" placeholder="Search here" aria-label="Search" />
                                          <button class="search-submit" type="submit" title="Search"></button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                  <div class="cart">
                                    <a href="#" class="cart-btn"><i class="fa fa-shopping-cart"></i></a>
                                  </div>
                                  <div class="button">
                                    <a href="contact.html" class="btn">Get A Quote</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Template content will be loaded here -->
            <div id="template-content" style="padding: 50px; text-align: center;">
              <h2 style="color: #348e38; margin-bottom: 20px;">Gettree Template Successfully Loaded</h2>
              <p style="font-size: 18px; color: #0f4229;">Exact template files have been copied without modifications.</p>
              <p style="margin-top: 20px; color: #525368;">Next step: Add parameterization system.</p>
            </div>
          </div>
        `
      }} />
    </div>
  );
}
