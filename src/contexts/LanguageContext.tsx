
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useIpLocation } from '../hooks/useIpLocation';

type Language = 'en' | 'fa';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Home Page
    "home.hero.title": "Smart Urban Solutions Powered by AI",
    "home.hero.subtitle": "We develop intelligent traffic management and monitoring systems using cutting-edge artificial intelligence.",
    "home.hero.cta": "Explore Our Solutions",
    "home.about.title": "About Sanjaghak",
    "home.about.description1": "Sanjaghak is a leading provider of intelligent urban management and industrial monitoring solutions based on artificial intelligence.",
    "home.about.description2": "Our systems help municipalities, construction companies, and industrial facilities improve safety, efficiency, and regulatory compliance through advanced computer vision and AI technologies.",
    "home.about.cta": "Learn More About Us",
    "home.projects.title": "Featured Projects",
    "home.projects.subtitle": "Discover how our innovative solutions are transforming urban environments and industrial operations.",
    "home.projects.cta": "View All Projects",
    "home.cta.title": "Ready to Transform Your Operations?",
    "home.cta.description": "Our team of experts is ready to help you implement intelligent solutions tailored to your specific needs.",
    "home.cta.button": "Contact Us Today",
    
    // Projects
    "projects.hero.title": "Our Innovative Projects",
    "projects.hero.subtitle": "Explore our portfolio of intelligent solutions for urban management and industrial monitoring.",
    "projects.tech.title": "Our Technologies",
    "projects.tech.subtitle": "We leverage cutting-edge technologies to deliver powerful, intelligent solutions.",
    
    // About
    "about.hero.title": "About Sanjaghak",
    "about.hero.subtitle": "Meet our team and learn about our mission to transform urban environments and industrial operations with AI.",
    "about.mission.title": "Our Mission",
    "about.mission.description1": "At Sanjaghak, we are dedicated to developing intelligent solutions that enhance urban living and industrial efficiency through the power of artificial intelligence.",
    "about.mission.description2": "Our systems are designed to solve real-world challenges in traffic management, construction site monitoring, and heavy equipment maintenance, making cities smarter and industrial operations safer.",
    "about.mission.description3": "We continuously innovate and improve our technologies to provide cutting-edge solutions that meet the evolving needs of municipalities, construction companies, and industrial facilities.",
    "about.values.title": "Core Values",
    "about.values.innovation": "Innovation",
    "about.values.innovation.description": "We continuously push the boundaries of what's possible with AI and computer vision technologies.",
    "about.values.reliability": "Reliability",
    "about.values.reliability.description": "Our systems are built to perform consistently and accurately in real-world conditions.",
    "about.values.impact": "Impact",
    "about.values.impact.description": "We measure our success by the positive difference our solutions make in urban and industrial environments.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the experts behind Sanjaghak's innovative solutions.",
    "about.team.product.title": "Product Owner",
    "about.team.product.description": "Leading our product vision and strategy, ensuring our solutions address real-world challenges effectively.",
    "about.team.product.location": "Tehran Office",
    "about.team.product.expertise": "Product Strategy, Urban Solutions, AI Applications",
    "about.team.developer.title": "Lead Developer",
    "about.team.developer.description": "Architecting and implementing our advanced AI algorithms and computer vision systems.",
    "about.team.developer.location": "Isfahan Office",
    "about.team.developer.expertise": "AI Development, Computer Vision, System Architecture",
    "about.cities.title": "Cities We Serve",
    "about.cities.subtitle": "Our solutions are currently deployed in several major cities across Iran.",
    
    // Contact
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle": "Get in touch with our team to learn more about our solutions or discuss your specific needs.",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message Sent",
    "contact.form.success.message": "Thank you for your message. We'll get back to you soon!",
    "contact.offices.title": "Our Offices",
    "contact.office.address": "Address",
    "contact.office.phone": "Phone",
    "contact.office.email": "Email",
    "contact.office.hours": "Office Hours",
    "contact.office.hours.value": "Monday - Friday: 9:00 AM - 5:00 PM",
    "contact.touch.title": "Get in Touch",
    "contact.touch.description": "We're always looking for opportunities to collaborate and develop innovative solutions. Contact us to learn more about our services and how we can help you achieve your goals.",
    "contact.inquiries.title": "General Inquiries",
    "contact.inquiries.email": "For general inquiries, please email us at",
    
    // Footer
    "footer.description": "Providing intelligent traffic management and industrial monitoring solutions powered by artificial intelligence.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.tehran": "Tehran Office",
    "footer.isfahan": "Isfahan Office",
    "footer.rights": "All rights reserved.",
    
    // Projects
    "project.trafficViolation": "Traffic Violation Detection",
    "project.trafficViolation.description": "AI-powered system for detecting traffic violations, particularly at red lights and intersections. The system captures images of vehicles, identifies violations, and generates reports.",
    "project.smartParking": "Smart Parking System",
    "project.smartParking.description": "Intelligent parking management solution to optimize parking space utilization and improve user experience in urban areas.",
    "project.equipmentMonitoring": "Heavy Equipment Monitoring",
    "project.equipmentMonitoring.description": "Advanced monitoring system for heavy machinery with wear detection and collision prevention to improve safety and efficiency.",
    "project.collisionWarning": "Collision Warning System",
    "project.collisionWarning.description": "Intelligent system that uses 360° cameras to monitor equipment surroundings and warn operators of potential collisions.",
    "project.constructionVehicles": "Construction Vehicle Tracking",
    "project.constructionVehicles.description": "System for tracking and managing construction vehicles to prevent unauthorized construction and improve site management.",
    "project.stationaryViolations": "Stationary Traffic Violations",
    "project.stationaryViolations.description": "System for detecting and reporting stationary traffic violations such as illegal parking and unauthorized stops.",
    
    // Technologies
    "tech.computerVision": "Computer Vision",
    "tech.computerVision.description": "Advanced image processing algorithms for object detection and recognition.",
    "tech.ai": "Artificial Intelligence",
    "tech.ai.description": "Machine learning models that improve over time for accurate detection and prediction.",
    "tech.dataAnalytics": "Data Analytics",
    "tech.dataAnalytics.description": "Comprehensive data analysis to generate actionable insights and reports.",
    "tech.iot": "IoT Integration",
    "tech.iot.description": "Seamless connection with sensors and devices for comprehensive monitoring systems.",
    
    // 404 Page
    "404.title": "404",
    "404.heading": "Page Not Found",
    "404.description": "Sorry, the page you are looking for doesn't exist or has been moved.",
    "404.button": "Return to Home"
  },
  fa: {
    // Navigation
    "nav.home": "خانه",
    "nav.projects": "پروژه‌ها",
    "nav.about": "درباره ما",
    "nav.contact": "تماس با ما",
    
    // Home Page
    "home.hero.title": "راهکارهای هوشمند شهری با پشتیبانی هوش مصنوعی",
    "home.hero.subtitle": "ما سیستم‌های هوشمند مدیریت ترافیک و نظارت با استفاده از هوش مصنوعی پیشرفته توسعه می‌دهیم.",
    "home.hero.cta": "کاوش راه حل های ما",
    "home.about.title": "درباره سنجاقک",
    "home.about.description1": "سنجاقک یک ارائه دهنده پیشرو راهکارهای هوشمند مدیریت شهری و نظارت صنعتی بر اساس هوش مصنوعی است.",
    "home.about.description2": "سیستم‌های ما به شهرداری‌ها، شرکت‌های ساختمانی و تاسیسات صنعتی در بهبود ایمنی، کارایی و انطباق با مقررات از طریق بینایی ماشین پیشرفته و فناوری‌های هوش مصنوعی کمک می‌کنند.",
    "home.about.cta": "اطلاعات بیشتر درباره ما",
    "home.projects.title": "پروژه‌های برجسته",
    "home.projects.subtitle": "کشف کنید چگونه راه‌حل‌های نوآورانه‌ی ما محیط‌های شهری و عملیات صنعتی را متحول می‌کنند.",
    "home.projects.cta": "مشاهده همه پروژه‌ها",
    "home.cta.title": "آماده تحول در عملیات خود هستید؟",
    "home.cta.description": "تیم متخصص ما آماده کمک به شما در پیاده‌سازی راهکارهای هوشمند متناسب با نیازهای خاص شماست.",
    "home.cta.button": "همین امروز با ما تماس بگیرید",
    
    // Projects
    "projects.hero.title": "پروژه‌های نوآورانه ما",
    "projects.hero.subtitle": "مجموعه راهکارهای هوشمند ما برای مدیریت شهری و نظارت صنعتی را کاوش کنید.",
    "projects.tech.title": "فناوری‌های ما",
    "projects.tech.subtitle": "ما از فناوری‌های پیشرفته برای ارائه راهکارهای قدرتمند و هوشمند استفاده می‌کنیم.",
    
    // About
    "about.hero.title": "درباره سنجاقک",
    "about.hero.subtitle": "با تیم ما آشنا شوید و درباره ماموریت ما برای تحول محیط‌های شهری و عملیات صنعتی با هوش مصنوعی بیشتر بدانید.",
    "about.mission.title": "ماموریت ما",
    "about.mission.description1": "در سنجاقک، ما متعهد به توسعه راهکارهای هوشمندی هستیم که زندگی شهری و کارایی صنعتی را از طریق قدرت هوش مصنوعی ارتقا می‌دهند.",
    "about.mission.description2": "سیستم‌های ما برای حل چالش‌های دنیای واقعی در مدیریت ترافیک، نظارت بر سایت‌های ساخت و ساز، و نگهداری تجهیزات سنگین طراحی شده‌اند، که شهرها را هوشمندتر و عملیات صنعتی را ایمن‌تر می‌کنند.",
    "about.mission.description3": "ما به طور مداوم نوآوری می‌کنیم و فناوری‌های خود را بهبود می‌بخشیم تا راهکارهای پیشرفته‌ای ارائه دهیم که نیازهای در حال تکامل شهرداری‌ها، شرکت‌های ساختمانی و تاسیسات صنعتی را برآورده سازند.",
    "about.values.title": "ارزش‌های اصلی",
    "about.values.innovation": "نوآوری",
    "about.values.innovation.description": "ما مرزهای امکانات را با فناوری‌های هوش مصنوعی و بینایی ماشین به طور مداوم گسترش می‌دهیم.",
    "about.values.reliability": "قابلیت اطمینان",
    "about.values.reliability.description": "سیستم‌های ما برای عملکرد مداوم و دقیق در شرایط دنیای واقعی ساخته شده‌اند.",
    "about.values.impact": "تأثیر",
    "about.values.impact.description": "ما موفقیت خود را با تفاوت مثبتی که راهکارهای ما در محیط‌های شهری و صنعتی ایجاد می‌کنند، اندازه‌گیری می‌کنیم.",
    "about.team.title": "تیم ما",
    "about.team.subtitle": "با متخصصان پشت راهکارهای نوآورانه سنجاقک آشنا شوید.",
    "about.team.product.title": "مدیر محصول",
    "about.team.product.description": "هدایت چشم‌انداز و استراتژی محصول ما، اطمینان از اینکه راهکارهای ما به طور موثر به چالش‌های دنیای واقعی می‌پردازند.",
    "about.team.product.location": "دفتر تهران",
    "about.team.product.expertise": "استراتژی محصول، راهکارهای شهری، کاربردهای هوش مصنوعی",
    "about.team.developer.title": "توسعه‌دهنده ارشد",
    "about.team.developer.description": "طراحی و پیاده‌سازی الگوریتم‌های هوش مصنوعی پیشرفته و سیستم‌های بینایی ماشین ما.",
    "about.team.developer.location": "دفتر اصفهان",
    "about.team.developer.expertise": "توسعه هوش مصنوعی، بینایی ماشین، معماری سیستم",
    "about.cities.title": "شهرهایی که خدمات می‌دهیم",
    "about.cities.subtitle": "راهکارهای ما در حال حاضر در چندین شهر بزرگ ایران پیاده‌سازی شده‌اند.",
    
    // Contact
    "contact.hero.title": "تماس با ما",
    "contact.hero.subtitle": "با تیم ما تماس بگیرید تا درباره راهکارهای ما بیشتر بدانید یا درباره نیازهای خاص خود صحبت کنید.",
    "contact.form.title": "برای ما پیام بفرستید",
    "contact.form.name": "نام",
    "contact.form.email": "ایمیل",
    "contact.form.subject": "موضوع",
    "contact.form.message": "پیام",
    "contact.form.submit": "ارسال پیام",
    "contact.form.success": "پیام ارسال شد",
    "contact.form.success.message": "از پیام شما متشکریم. به زودی با شما تماس خواهیم گرفت!",
    "contact.offices.title": "دفاتر ما",
    "contact.office.address": "آدرس",
    "contact.office.phone": "تلفن",
    "contact.office.email": "ایمیل",
    "contact.office.hours": "ساعات کاری",
    "contact.office.hours.value": "دوشنبه تا جمعه: ۹:۰۰ تا ۱۷:۰۰",
    "contact.touch.title": "در تماس باشید",
    "contact.touch.description": "ما همیشه به دنبال فرصت‌هایی برای همکاری و توسعه راهکارهای نوآورانه هستیم. با ما تماس بگیرید تا درباره خدمات ما بیشتر بدانید و ببینید چگونه می‌توانیم به شما در دستیابی به اهداف‌تان کمک کنیم.",
    "contact.inquiries.title": "سوالات عمومی",
    "contact.inquiries.email": "برای سوالات عمومی، لطفاً با ما ایمیل بفرستید به",
    
    // Footer
    "footer.description": "ارائه راهکارهای هوشمند مدیریت ترافیک و نظارت صنعتی با پشتیبانی هوش مصنوعی.",
    "footer.links": "لینک‌های سریع",
    "footer.contact": "تماس",
    "footer.tehran": "دفتر تهران",
    "footer.isfahan": "دفتر اصفهان",
    "footer.rights": "تمامی حقوق محفوظ است.",
    
    // Projects
    "project.trafficViolation": "تشخیص تخلفات ترافیکی",
    "project.trafficViolation.description": "سیستم مبتنی بر هوش مصنوعی برای تشخیص تخلفات ترافیکی، به ویژه در چراغ‌های قرمز و تقاطع‌ها. این سیستم تصاویر وسایل نقلیه را ثبت، تخلفات را شناسایی و گزارش‌ها را تولید می‌کند.",
    "project.smartParking": "سیستم پارکینگ هوشمند",
    "project.smartParking.description": "راهکار مدیریت هوشمند پارکینگ برای بهینه‌سازی استفاده از فضای پارکینگ و بهبود تجربه کاربر در مناطق شهری.",
    "project.equipmentMonitoring": "نظارت بر تجهیزات سنگین",
    "project.equipmentMonitoring.description": "سیستم نظارت پیشرفته برای ماشین‌آلات سنگین با تشخیص فرسودگی و پیشگیری از تصادف برای بهبود ایمنی و کارایی.",
    "project.collisionWarning": "سیستم هشدار تصادف",
    "project.collisionWarning.description": "سیستم هوشمندی که از دوربین‌های ۳۶۰ درجه برای نظارت بر اطراف تجهیزات و هشدار به اپراتورها درباره تصادفات احتمالی استفاده می‌کند.",
    "project.constructionVehicles": "ردیابی وسایل نقلیه ساخت و ساز",
    "project.constructionVehicles.description": "سیستمی برای ردیابی و مدیریت وسایل نقلیه ساخت و ساز برای جلوگیری از ساخت و ساز غیرمجاز و بهبود مدیریت سایت.",
    "project.stationaryViolations": "تخلفات ترافیکی ایستا",
    "project.stationaryViolations.description": "سیستمی برای تشخیص و گزارش تخلفات ترافیکی ایستا مانند پارک غیرقانونی و توقف‌های غیرمجاز.",
    
    // Technologies
    "tech.computerVision": "بینایی ماشین",
    "tech.computerVision.description": "الگوریتم‌های پیشرفته پردازش تصویر برای تشخیص و شناسایی اشیا.",
    "tech.ai": "هوش مصنوعی",
    "tech.ai.description": "مدل‌های یادگیری ماشین که با گذشت زمان برای تشخیص و پیش‌بینی دقیق بهبود می‌یابند.",
    "tech.dataAnalytics": "تحلیل داده",
    "tech.dataAnalytics.description": "تحلیل جامع داده‌ها برای تولید بینش‌ها و گزارش‌های قابل اقدام.",
    "tech.iot": "ادغام اینترنت اشیا",
    "tech.iot.description": "اتصال بی‌درنگ با سنسورها و دستگاه‌ها برای سیستم‌های نظارتی جامع.",
    
    // 404 Page
    "404.title": "۴۰۴",
    "404.heading": "صفحه پیدا نشد",
    "404.description": "متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابجا شده است.",
    "404.button": "بازگشت به خانه"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const { isIran, loading } = useIpLocation();
  
  useEffect(() => {
    console.log('Location detection status:', { isIran, loading });
    
    if (!loading) {
      const newLanguage = isIran ? 'fa' : 'en';
      console.log(`Setting language to ${newLanguage} based on IP location`);
      setLanguage(newLanguage);
      
      // Apply direction and font to document
      document.documentElement.dir = isIran ? 'rtl' : 'ltr';
      document.documentElement.lang = newLanguage;
      document.body.className = isIran ? 'font-vazirmatn' : 'font-poppins';
    }
  }, [isIran, loading]);

  // Handle manual language changes
  const handleLanguageChange = (newLanguage: Language) => {
    console.log(`Manually changing language to ${newLanguage}`);
    setLanguage(newLanguage);
    
    // Apply direction and font to document
    document.documentElement.dir = newLanguage === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
    document.body.className = newLanguage === 'fa' ? 'font-vazirmatn' : 'font-poppins';
  };
  
  const t = (key: string): string => {
    const currentTranslations = translations[language] || {};
    return currentTranslations[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
