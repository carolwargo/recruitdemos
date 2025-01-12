import Accordion from 'react-bootstrap/Accordion';

function FaqsPage() {
  return (
    <div className=' w3-content'>
        {/**general start */}
        <div className='container w3-padding-large w3-padding-24 general-questions'>
            <h1 className=' text-dark-emphasis'>GENERAL QUESTIONS</h1>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q: What services do you offer for student-athletes?</Accordion.Header>
        <Accordion.Body>
        A: We specialize in creating personal websites, portfolios, and branding materials for student-athletes. Our services include website design, graphic design, logo creation, video editing, and social media branding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q: Why should I invest in a personal website or branding as a student-athlete?</Accordion.Header>
        <Accordion.Body>
        A: A personal website or professional branding can help you stand out to recruiters, coaches, sponsors, and even potential employers. It’s a centralized platform to showcase your achievements, skills, and personality.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Q: Do you only work with student-athletes?</Accordion.Header>
        <Accordion.Body>
        A: While student-athletes are our primary focus, we also work with athletic organizations, coaches, and anyone involved in sports who needs branding or web design services.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
{/**general end */}



{/**web start */}
    <div className='container w3-padding-large w3-padding-24web-questions'>
    <h1 className=' text-dark-emphasis'>WEB DESIGN QUESTIONS</h1>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  Q: What types of websites can you create?</Accordion.Header>
        <Accordion.Body>
A: We design custom websites tailored to your needs. Popular options include recruiting portfolios, highlight reels, personal blogs, and online resumes.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>  Q: Can I include highlight videos and stats on my website?</Accordion.Header>
        <Accordion.Body>
      
A: Absolutely! We can integrate video reels, performance stats, awards, and any other content that showcases your achievements.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>  Q: Will my website work on phones and tablets?
</Accordion.Header>
        <Accordion.Body>
        A: Yes! All our websites are fully responsive, meaning they look great and work smoothly on any device.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>  Q: How long does it take to design a website?
</Accordion.Header>
        <Accordion.Body>
        A: The timeline depends on the complexity of your website, but most projects are completed within 2–4 weeks.
        Q: Will I be able to update my website on my own?
A: Yes! We can provide training or design your website on a platform that’s user-friendly so you can update your content anytime.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>   Q: Will I be able to update my website on my own?
</Accordion.Header>
        <Accordion.Body>
A: That depends on customization factors- We can provide training or design your website on a platform that’s user-friendly so you can update your content anytime.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
{/**web end */}

{/**graphics start */}
    <div className='container w3-padding-large w3-padding-24 graphics-questions'>
    <h1 className=' text-dark-emphasis'>GRAPHIC DESIGN QUESTIONS</h1>
    <Accordion>
    <Accordion.Item eventKey="0">
        <Accordion.Header> Q: What types of graphic design services do you provide?</Accordion.Header>
        <Accordion.Body>
A: We offer logo design, social media templates, posters, apparel designs, and custom graphics tailored to your athletic brand.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q: Can you create designs for my team or club?</Accordion.Header>
        <Accordion.Body>
A: Definitely! We can design team logos, banners, jerseys, and promotional materials.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>   Q: How do I ensure the designs align with my personal or team brand?</Accordion.Header>
        <Accordion.Body>
        A: We start every project with a consultation to understand your vision, preferences, and goals. Throughout the process, you’ll have opportunities to provide feedback.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
    {/**graphics end */}


{/**SOCIAL MEDIA & MARKETING start */}
<div className='container w3-padding-large w3-padding-24 social-marketing-questions'>
    <h1 className=' text-dark-emphasis'>SOCIAL MEDIA & MARKETING</h1>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q: Can you help me improve my social media presence?</Accordion.Header>
        <Accordion.Body>
A: Yes, we can design social media graphics, provide content strategies, and help you create a consistent and professional online presence.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>        Q: What social media platforms do you recommend for student-athletes?
        </Accordion.Header>
        <Accordion.Body>
A: Platforms like Instagram, Twitter (X), and TikTok are great for showcasing highlights, while LinkedIn can help with professional networking.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header> Q: Do you offer social media management services?</Accordion.Header>
        <Accordion.Body>
        A: While we don’t manage accounts long-term, we can help set up your profiles, create content templates, and provide a plan for maintaining a professional presence.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    {/**SOCIAL MEDIA & MARKETING end */}


    {/**work with us start */}
<div className='container w3-padding-large w3-padding-24 working-questions'>
    <h1>WORKING WITH US</h1>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  Q: How much do your services cost?</Accordion.Header>
        <Accordion.Body>
       
A: Pricing depends on the scope of the project. We offer packages starting at $500 for basic websites and $100 for smaller design projects. Contact us for a custom quote!
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>AQ: Do you offer discounts for student-athletes?</Accordion.Header>
        <Accordion.Body>
A: Yes, we offer special rates for students and additional discounts for teams or group projects.
 </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Q: What is your design process like?</Accordion.Header>
        <Accordion.Body>
A: Our process typically includes:

Consultation: We discuss your goals and gather your ideas.
Design Draft: We create a draft based on your input.
Revisions: You review and suggest changes.
Delivery: We finalize and deliver the project to you.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> Q: What if I don’t like the initial design?</Accordion.Header>
        <Accordion.Body>
       
A: We work closely with you to refine the design until you’re completely satisfied. Your feedback is key!

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> Q: Do I need to provide anything to get started?</Accordion.Header>
        <Accordion.Body>
        A: For websites, we’ll need content like photos, videos, stats, and text. For graphic design, let us know your preferred style, colors, and any inspiration you have.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    </div>
    {/**work with us end*/}



      {/**techical questions start*/}
<div className='container w3-padding-large w3-padding-24 technical-questions'>
    <h1>TECHNICAL QUESTIONS</h1>
 <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  Q: Can you host my website?</Accordion.Header>
        <Accordion.Body>
A: Yes, we offer hosting services, or we can guide you through setting up hosting on your own.
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>  Q: What happens if I need help after my website is live?</Accordion.Header>
        <Accordion.Body>
A: We offer ongoing support packages and are always here to help with updates or troubleshooting.
 </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Q: Do you provide SEO services for my website?</Accordion.Header>
        <Accordion.Body>
A: Yes, we can optimize your website to rank higher on search engines and make it easier for coaches and recruiters to find you online.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    </div>
    {/**techical questions end */}


    
      {/**Getting started start */}
<div className='container w3-padding-large w3-padding-24 start-questions'>
    <h1>GETTING STARTED</h1>
  <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  Q: How do I book your services?</Accordion.Header>
        <Accordion.Body>
A: You can reach out through our website’s contact form or email us directly. We’ll schedule a consultation to get started.
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Q: Do you work with clients outside of the U.S.?</Accordion.Header>
        <Accordion.Body>
A: Yes! We work with student-athletes worldwide and can coordinate virtually.
 </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>  Q: What if I’m not sure what I need?</Accordion.Header>
        <Accordion.Body>
A: No problem! Contact us for a free consultation, and we’ll help you determine the best services for your goals.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    {/**Getting startedstart */}
    </div>
  );
}

export default FaqsPage;