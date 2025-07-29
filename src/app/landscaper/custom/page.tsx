'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface BusinessDetails {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  industry: string;
}

function CustomLandscapingPageContent() {
  const searchParams = useSearchParams();
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails>({
    businessName: 'Forte Landscaping',
    ownerName: 'Business Owner',
    phone: '(555) 123-4567',
    email: 'info@business.com',
    address: '1247 W Madison St',
    city: 'Chicago',
    state: 'IL',
    zip: '60607',
    industry: 'landscaping'
  });

  useEffect(() => {
    // Load business details from URL parameters
    const urlData: Partial<BusinessDetails> = {};
    
    searchParams.forEach((value, key) => {
      if (key in businessDetails) {
        (urlData as any)[key] = value;
      }
    });

    if (Object.keys(urlData).length > 0) {
      setBusinessDetails(prev => ({ ...prev, ...urlData }));
    }
  }, [searchParams]);

  useEffect(() => {
    // Create a dynamic HTML template with the business details
    const createCustomTemplate = () => {
      const templateContent = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>${businessDetails.businessName} - Garden & Landscaping Services</title>
    <meta name="author" content="${businessDetails.businessName}">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <link rel="stylesheet" type="text/css" href="/landscaping-template/stylesheet/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/landscaping-template/stylesheet/style.css">
    <link rel="stylesheet" type="text/css" href="/landscaping-template/stylesheet/responsive.css">
    <link rel="stylesheet" type="text/css" href="/landscaping-template/stylesheet/icomoon.css">
    <link href="/landscaping-template/icon/Favicon.png" rel="shortcut icon">
    <link rel="stylesheet" href="/landscaping-template/stylesheet/animate.css">
</head>

<body>
    <div class="boxed blog">
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
                                            <span class="top-location">${businessDetails.address}${businessDetails.city ? ', ' + businessDetails.city : ''}${businessDetails.state ? ', ' + businessDetails.state : ''} ${businessDetails.zip}</span>
                                            <span class="top-mail">${businessDetails.email}</span>
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

                        <header id="header" class="header bg-color">
                            <div class="container">
                                <div class="row">
                                    <div class="header-wrap-home1">
                                        <div class="col-md-3">
                                            <div class="inner-header">
                                                <div class="logo-header">
                                                    <a href="#" title="">
                                                        <img src="/landscaping-template/icon/forte-logo-dark.svg" alt="${businessDetails.businessName}" style="max-height: 60px;">
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
                                                        <li class="current-menu-item"><a href="#" title="">Home</a></li>
                                                        <li><a href="#about" title="">About</a></li>
                                                        <li><a href="#services" title="">Services</a></li>
                                                        <li><a href="#portfolio" title="">Portfolio</a></li>
                                                        <li><a href="#contact" title="">Contact</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="site-header-right">
                                                <div class="header-inner">
                                                    <div class="button">
                                                        <a href="#contact" class="btn">Get A Quote</a>
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

        <!-- Hero Section -->
        <div class="page-title-home1">
            <div class="container-fluid">
                <div class="row">
                    <div class="inner-title-home1">
                        <div class="flat-slider clearfix">
                            <div class="rev_slider_wrapper fullwidthbanner-container">
                                <div id="rev-slider2" class="rev_slider fullwidthabanner">
                                    <ul>
                                        <li data-transition="random">
                                            <div class="tp-caption tp-resizeme text-one"
                                                data-x="['left','left','left','center']"
                                                data-hoffset="['0','0','0','0']"
                                                data-y="['middle','middle','middle','middle']"
                                                data-voffset="['-274','-50','-50','-50']"
                                                data-fontsize="['16','16','16','16']" 
                                                data-lineheight="['20','0','0','0']"
                                                data-width="full" data-height="none" data-whitespace="normal"
                                                data-transform_idle="o:1;"
                                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                                data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;"
                                                data-start="700" data-splitin="none" data-splitout="none"
                                                data-responsive_offset="on">
                                                <h3 class="sub-title">PROFESSIONAL LANDSCAPING SERVICES</h3>
                                            </div>

                                            <div class="tp-caption tp-resizeme text-two"
                                                data-x="['left','left','left','center']" 
                                                data-hoffset="['-2','-2','5','0']"
                                                data-y="['middle','middle','middle','middle']" 
                                                data-voffset="['-130','-165', '-15','-15']"
                                                data-fontsize="['60','70','50','60']"
                                                data-lineheight="['70','80','64','48']" 
                                                data-width="full"
                                                data-height="none" 
                                                data-whitespace="normal" 
                                                data-transform_idle="o:1;"
                                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                                data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;"
                                                data-start="700" data-splitin="none" data-splitout="none"
                                                data-responsive_offset="on">
                                                <div class="title-box">
                                                    <h2 class="title-slider text-pri2-color">Transform your outdoor<br>
                                                        space with ${businessDetails.businessName}</h2>
                                                </div>
                                            </div>

                                            <div class="tp-caption btn-text btn-linear hv-linear-gradient"
                                                data-x="['left','left','left','center']"
                                                data-hoffset="['-3','-3','5','0']"
                                                data-y="['middle','middle','middle','middle']"
                                                data-voffset="['48','40','180','280']" data-width="full"
                                                data-height="none" data-whitespace="normal" data-transform_idle="o:1;"
                                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                                data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;"
                                                data-start="700" data-splitin="none" data-splitout="none"
                                                data-responsive_offset="on">
                                                <div class="button-box">
                                                    <div class="button res-btn-slider">
                                                        <a href="#contact" class="btn btn-left">Get A Quote</a>
                                                    </div>
                                                    <div class="button">
                                                        <a href="#services" class="btn">Our Services</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tp-caption tp-resizeme image-slider text-right "
                                                data-x="['right','right','right','right']"
                                                data-hoffset="['-29','-29','-150','-29']"
                                                data-y="['center','center','center','center']"
                                                data-voffset="['-88','-88','60','-88']" data-width="full"
                                                data-height="none" data-whitespace="normal" data-transform_idle="o:1;"
                                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                                data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;"
                                                data-start="800" data-splitin="none" data-splitout="none"
                                                data-responsive_offset="on">
                                                <img class="img-slide wow jackInTheBox" data-wow-delay="2500ms"
                                                    data-wow-duration="3s"
                                                    src="/landscaping-template/images/home/young-woman-with-their-garden-crops.png"
                                                    alt="images">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About Section -->
        <section class="flat-about" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="themesflat-spacer clearfix" data-desktop="121" data-mobile="60" data-smobile="60">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-post center bd-radius-50-image">
                            <img class="main-post-about"
                                src="/landscaping-template/images/home/the-girl-in-the-glasses.jpg" alt="images">
                            <img class="circel-inside" src="/landscaping-template/images/home/circle-about.png" alt="images">
                            <div class="about-count-box themesflat-counter">
                                <div class="box">
                                    <div class="inner-about-count-box">
                                        <span class="number-count number" data-speed="1500" data-to="15"
                                            data-inviewport="yes">15</span>
                                        <div class="caption-number-count">
                                            Years Of experience
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="about-content-title wow fadeInUp">
                                <div class="section-subtitle">ABOUT US</div>
                                <div class="section-title">${businessDetails.city ? businessDetails.city + "'s" : "Your Area's"} Premier Landscaping Experts</div>
                                <div class="section-desc">With over 15 years of experience transforming outdoor spaces${businessDetails.city ? ' across ' + businessDetails.city : ''}, ${businessDetails.businessName} is your trusted partner for creating beautiful, sustainable landscapes that enhance your property value and outdoor living experience.</div>
                            </div>
                            <div id="about-box" class="about-desc-box">
                                <div class="about-desc">
                                    <div class="about-box-nd1 wow fadeInLeft">
                                        <span class="tf-icon icon-Group-660"></span>
                                        <div class="inner-box">
                                            <h3 class="section-heading-jost-size20 item-1">
                                                Licensed & Insured</h3>
                                            <p class="section-desc">Fully licensed professionals with comprehensive insurance coverage</p>
                                        </div>
                                    </div>
                                    <div class="about-box-nd1 wow fadeInLeft">
                                        <span class="tf-icon icon-Group-661"></span>
                                        <div class="inner-box">
                                            <h3 class="section-heading-jost-size20 item-2">
                                                Award-Winning Designs</h3>
                                            <p class="section-desc">
                                                Recognized for excellence in landscape design and installation</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="image-desc">
                                    <img class="image" src="/landscaping-template/images/home/box-flowers-green-garden.jpg" alt="images">
                                </div>
                            </div>
                            <div class="button hover-up">
                                <a href="#contact" class="btn2">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="flat-contact" id="contact" style="background: #f8f9fa; padding: 80px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center mb-5">
                        <h2 class="section-title">Get Your Free Quote Today</h2>
                        <p class="section-desc">Ready to transform your outdoor space? Contact ${businessDetails.businessName} for a personalized consultation.</p>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-info">
                            <h3 style="color: #2d5a27; margin-bottom: 30px;">Contact Information</h3>
                            <div style="margin-bottom: 20px;">
                                <strong>📍 Address:</strong><br>
                                ${businessDetails.address}<br>
                                ${businessDetails.city}, ${businessDetails.state} ${businessDetails.zip}
                            </div>
                            <div style="margin-bottom: 20px;">
                                <strong>📞 Phone:</strong><br>
                                <a href="tel:${businessDetails.phone}" style="color: #2d5a27; text-decoration: none;">${businessDetails.phone}</a>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <strong>✉️ Email:</strong><br>
                                <a href="mailto:${businessDetails.email}" style="color: #2d5a27; text-decoration: none;">${businessDetails.email}</a>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <strong>👤 Contact:</strong><br>
                                ${businessDetails.ownerName}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <form class="contact-form" style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                            <h3 style="color: #2d5a27; margin-bottom: 20px;">Request Your Free Quote</h3>
                            <div style="margin-bottom: 15px;">
                                <input type="text" placeholder="Your Name" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <input type="email" placeholder="Your Email" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <input type="tel" placeholder="Your Phone" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <select style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                                    <option>Service Needed</option>
                                    <option>Landscape Design</option>
                                    <option>Lawn Maintenance</option>
                                    <option>Tree & Shrub Care</option>
                                    <option>Irrigation Systems</option>
                                    <option>Hardscaping</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <textarea placeholder="Project Details" rows="4" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; resize: vertical;"></textarea>
                            </div>
                            <button type="submit" style="background: #2d5a27; color: white; padding: 12px 30px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; width: 100%;">
                                Send Quote Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer style="background: #2d5a27; color: white; padding: 40px 0; text-align: center;">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4 style="margin-bottom: 20px;">${businessDetails.businessName}</h4>
                        <p style="margin-bottom: 10px;">${businessDetails.address}, ${businessDetails.city}, ${businessDetails.state} ${businessDetails.zip}</p>
                        <p style="margin-bottom: 10px;">
                            Phone: <a href="tel:${businessDetails.phone}" style="color: #a8d5a3;">${businessDetails.phone}</a> | 
                            Email: <a href="mailto:${businessDetails.email}" style="color: #a8d5a3;">${businessDetails.email}</a>
                        </p>
                        <div style="margin: 20px 0;">
                            <a href="#" style="color: #a8d5a3; margin: 0 10px; font-size: 18px;">📘</a>
                            <a href="#" style="color: #a8d5a3; margin: 0 10px; font-size: 18px;">🐦</a>
                            <a href="#" style="color: #a8d5a3; margin: 0 10px; font-size: 18px;">📷</a>
                        </div>
                        <p style="margin-top: 20px; opacity: 0.8;">
                            Copyright 2025 by ${businessDetails.businessName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="/landscaping-template/javascript/jquery.min.js"></script>
    <script src="/landscaping-template/javascript/bootstrap.min.js"></script>
    <script src="/landscaping-template/javascript/jquery.easing.js"></script>
    <script src="/landscaping-template/javascript/owl.carousel.js"></script>
    <script src="/landscaping-template/javascript/jquery-waypoints.js"></script>
    <script src="/landscaping-template/javascript/countto.js"></script>
    <script src="/landscaping-template/javascript/main.js"></script>
    <script src="/landscaping-template/javascript/rev-slider.js"></script>
    <script>
        // Preloader fallback - ensure it gets hidden even if other scripts fail
        $(document).ready(function() {
            setTimeout(function() {
                $('.preloader').fadeOut(1000, function() {
                    $(this).remove();
                });
            }, 2000);
        });
        
        // Additional window load handler
        $(window).on('load', function() {
            $('.preloader').fadeOut(1000, function() {
                $(this).remove();
            });
        });
    </script>
    <script src="/landscaping-template/rev-slider/js/jquery.themepunch.tools.min.js"></script>
    <script src="/landscaping-template/rev-slider/js/jquery.themepunch.revolution.min.js"></script>
    <script src="/landscaping-template/javascript/rev-slider.js"></script>
    
    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Contact form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! This is a demo. In the real website, this form would submit your quote request to ${businessDetails.businessName}.');
        });
    </script>
</body>
</html>`;

      return templateContent;
    };

    // Create and inject the template
    const iframe = document.getElementById('customTemplate') as HTMLIFrameElement;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(createCustomTemplate());
        doc.close();
      }
    }
  }, [businessDetails]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Demo Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Demo: {businessDetails.businessName} - Custom Website
          </h1>
          <div className="flex space-x-4">
            <a
              href="/demo/custom"
              className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded transition-colors"
            >
              Edit Demo
            </a>
            <a
              href="/demo"
              className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
            >
              Back to Demos
            </a>
          </div>
        </div>
      </div>

      {/* Template Display */}
      <iframe
        id="customTemplate"
        className="w-full"
        style={{ height: 'calc(100vh - 80px)' }}
        frameBorder="0"
        title={`${businessDetails.businessName} Demo Website`}
      />
    </div>
  );
}

export default function CustomLandscapingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomLandscapingPageContent />
    </Suspense>
  );
}
