import "../styles/LandingPage.scss"
import "../styles/Sections.scss"
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginButton from "../components/LoginButton";
import Footer from "../components/Footer";
import AuthModal from '../components/AuthModal'
import { useState } from "react";

function Header(){
  const [showLogin, setShowLogin] = useState(false);

    return(
     <header className="header">
        <div className="icon"><i className="fas fa-robot"></i>
</div>
        <h1 className="title">منصة صديقي للذكاء الأصطناعي</h1>
        <p className="subtitle">
          SADIQI AI Platform
        </p>
        <p className="description">
         مستقبل خدمة العملاء الذكية - حلول الذكاء الاصطناعي المتطورة لتحسين تجربة العملاء وزيادة الكفاءة التشغيلية
        </p>
        <div className="header-buttons">
          <button className="start-button" onClick={() => setShowLogin(true)}>ابداء معنا +</button>
          <button className="demo-button" onClick={() => setShowLogin(true)}>تجربة مجانية</button>
          {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}
          <LoginButton />
        </div>
      </header>
    )
}

// home page sections
function ExecutiveSummary() {
  return (
    <section className="executive-summary">
      <div className="container">
        <div className="title-section">
          <h2>الملخص التنفيذي</h2>
          <div className="underline"></div>
        </div>

        <div className="content">
            <div className="description">
            <h3>ما هو صديقي؟</h3>
            <p>
              منصة صديقي هي حل متكامل للذكاء الاصطناعي يحول طريقة تفاعل الشركات مع عملائها.
              نحن نقدم وكلاء ذكيين مخصصين يعملون على منصات التيليجرام وواتساب، مدعومين بأحدث تقنيات الذكاء الاصطناعي.
            </p>
            <ul>
              <li>✅ خدمة عملاء 24/7 بدون انقطاع</li>
              <li>✅ توفير 70% من تكاليف خدمة العملاء</li>
              <li>✅ زيادة رضا العملاء بنسبة 300%</li>
              <li>✅ أتمتة كاملة للحجوزات والمبيعات</li>
            </ul>
          </div>
          <div className="stats-box">
            <h3>إحصائيات النجاح</h3>
            <div className="grid">
              <div className="card green">
                <p className="value">300%</p>
                <p className="label">زيادة الكفاءة</p>
              </div>
              <div className="card blue">
                <p className="value">87%</p>
                <p className="label">معدل رضا العملاء</p>
              </div>
              <div className="card red">
                <p className="value">70%</p>
                <p className="label">توفير التكاليف</p>
              </div>
              <div className="card purple">
                <p className="value">24/7</p>
                <p className="label">خدمة مستمرة</p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}



function TechArchitecture() {
  return (
    <section className="tech-section" dir="rtl">
      <div className="container">
        <div className="section-header">
          <h2>الهيكل التقني المتطور</h2>
          <div className="underline"></div>
          <p>مجموعة تقنية قوية ومتكاملة تضمن الأداء العالي والموثوقية</p>
        </div>

        <div className="cards">
  {[
    { title: "Telegram Bot", desc: "واجهة تفاعلية متطورة", icon: "fab fa-telegram-plane" },
    { title: "WhatsApp Business", desc: "تواصل مع العملاء المباشر", icon: "fab fa-whatsapp" },
    { title: "n8n Backend", desc: "أتمتة سير العمل", icon: "fas fa-cogs" },
    { title: "Airtable Database", desc: "إدارة البيانات الذكية", icon: "fas fa-database" },
    { title: "DeepSeek V3", desc: "أحدث نماذج الذكاء الاصطناعي", icon: "fas fa-brain" },
    
  ].map((item, index) => (
    <div className="card" key={index}>
      <div className="icon"><i className={item.icon}></i></div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ))}
</div>


        <div className="section-header mt-12">
          <h2>كيف تعمل المنصة؟</h2>
        </div>

        <div className="steps">
          {[
            {
              step: "1",
              title: "استقبال الرسائل",
              desc: "العملاء يتواصلون عبر تيليجرام أو واتساب",
            },
            {
              step: "2",
              title: "المعالجة الذكية",
              desc: "الذكاء الاصطناعي يفهم ويحلل الطلبات",
            },
            {
              step: "3",
              title: "الاستجابة الفورية",
              desc: "إجابات دقيقة وحلول مخصصة فوراً",
            },
          ].map((step, index) => (
            <div className="step-card" key={index}>
              <div className="circle">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MainFeatures() {
  return (
    <section className="features-section" dir="rtl">
      <div className="container">
        <div className="section-title"> 
          <h2>الميزات الرئيسية</h2>
            <div className="underline"></div>
        </div>
        
        <div className="features-grid">
          {[
            {
              title: "خدمة العملاء الذكية",
              desc: "ردود فورية ودقيقة على جميع استفسارات العملاء بلغة طبيعية ومفهومة",
              icon: "fas fa-headset",
              bg: "l-blue",
            },
            {
              title: "أتمتة الحجوزات",
              desc: "نظام حجز ذكي يدير المواعيد والخدمات تلقائيًا مع إرسال التذكيرات",
              icon: "fas fa-calendar-check",
              bg: "l-green",
            },
            {
              title: "دعم المبيعات",
              desc: "تحويل الاستفسارات إلى مبيعات فعّالة مع متابعة العملاء المحتملين",
              icon: "fas fa-chart-line",
              bg: "l-purple",
            },
            {
              title: "التكامل متعدد المنصات",
              desc: "يعمل بسلاسة مع جميع أنظمتك الحالية وقواعد البيانات الموجودة",
              icon: "fas fa-th-large",
              bg: "l-gray",
            },
          ].map((item, idx) => (
            <div className={`feature-card ${item.bg}`} key={idx}>
              <i className={`icon ${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="advanced-features">
              <div className="section-subtitle">قدرات متقدمة إضافية</div>
          <div className="items">
          <div className="item">
            <h4>
              <i className="fas fa-language"></i> دعم متعدد اللغات
            </h4>
            <p>العربية والإنجليزية مع إمكانية إضافة لغات أخرى</p>
          </div>
          <div className="item">
            <h4>
              <i className="fas fa-chart-pie"></i> تحليلات ذكية
            </h4>
            <p>تقارير مفصلة وإحصائيات حول أداء خدمة العملاء</p>
          </div>
          <div className="item">
            <h4>
              <i className="fas fa-shield-alt"></i> الأمان والخصوصية
            </h4>
            <p>تشفير عالي المستوى وحماية كاملة للبيانات</p>
          </div>
          <div className="item">
            <h4>
              <i className="fas fa-expand-arrows-alt"></i> قابلية التوسع
            </h4>
            <p>ينمو مع نمو أعمالك دون حدود في الأداء</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomizationSection() {
  return (
    <section className="customization-section">
      <div className="container">
        <h2 className="section-title">التخصيص والتفصيل</h2>
        <div className="underline"></div>
        <p className="subtitle">حلول مخصصة لكل نوع من أنواع الأعمال والصناعات</p>

        <div className="business-types">
          {[
            {
              title: "المطاعم والمقاهي",
              icon: "fas fa-utensils",
              color: "green",
              items: [
                "أتمتة الطلبات والحجوزات",
                "عرض القائمة والأسعار",
                "تتبع حالة الطلب",
                "إدارة خدمة التوصيل",
              ],
            },
            {
              title: "العيادات والمستشفيات",
              icon: "fas fa-stethoscope",
              color: "blue",
              items: [
                "حجز المواعيد الطبية",
                "تذكير المرضى",
                "معلومات الأطباء والخدمات",
                "استشارات أولية",
              ],
            },
            {
              
              title: "التجارة الإلكترونية",
              icon: "fas fa-shopping-cart",
              color: "purple",
              items: [
                "دعم العملاء الفوري",
                "معلومات المنتجات",
                "تتبع الطلبات",
                "إدارة المرتجعات",
              ],
            },
          ].map((block, index) => (
            <div className="business-card" key={index}>
              <div className="f-d">
              <i className={`icon ${block.icon} ${block.color}`}></i>
              <h3>{block.title}</h3>
              </div>
              <ul>
                {block.items.map((item, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          <div className="subprocess">
        <h3 className="subprocess-title">عملية التخصيص</h3>
        <div className="customization-steps">
          {[
            {
              title: "تحليل الاحتياجات",
              icon: "fas fa-search",
              desc: "دراسة مفصلة لنوع عملك ومتطلباتك",
            },
            {
              title: "التصميم المخصص",
              icon: "fas fa-cogs",
              desc: "إعداد الوكيل حسب طبيعة عملك",
            },
            {
              title: "الاختبار والتحسين",
              icon: "fas fa-flask",
              desc: "اختبارات شاملة وتحسين الأداء",
            },
            {
              title: "الإطلاق والدعم",
              icon: "fas fa-rocket",
              desc: "تشغيل المنصة ودعم مستمر",
            },
          ].map((step, idx) => (
            <div className="step-card" key={idx}>
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

function MarketBenefits() {
  const bars = [
    { label: "سرعة الاستجابة", percent: "95%", color: "#6366f1" },
    { label: "دقة الإجابات", percent: "92%", color: "#10b981" },
    { label: "رضا العملاء", percent: "97%", color: "#8b5cf6" },
    { label: "توفير التكاليف", percent: "70%", color: "#ef4444" },
  ];

  const reasons = [
    {
      title: "توفير التكاليف",
      icon: "fas fa-dollar-sign",
      desc: "وفر حتى 70% من تكاليف خدمة العملاء مقارنةً بالطرق التقليدية",
    },
    {
      title: "الاستجابة الفورية",
      icon: "fas fa-clock",
      desc: "رد فوري خلال ثوانٍ معدودة، 24 ساعة يوميًا",
    },
    {
      title: "زيادة المبيعات",
      icon: "fas fa-chart-line",
      desc: "تحسين معدل التحويل وزيادة الإيرادات بنسبة 25%",
    },
    {
      title: "رضا العملاء",
      icon: "fas fa-users",
      desc: "معدل رضا عالي يصل إلى 95% من العملاء",
    },
  ];

  return (
    <section className="market-benefits">
      <div className="container">
        <h2 className="section-title">فوائد السوق والمزايا التنافسية</h2>
              <div className="underline"></div>

        <div className="benefits-grid">
          <div className="why-box">
            <h3 className="why-title">لماذا تختار صديقي؟</h3>
            <ul className="reasons">
              {reasons.map((reason, idx) => (
                <li key={idx}>
                  <div className="icon">
                    <i className={reason.icon}></i>
                  </div>
                  <div>
                    <strong>{reason.title}</strong>
                    <p>{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="performance-box">
            <h3>مقارنة الأداء</h3>
            {bars.map((bar, idx) => (
              <div className="bar-row" key={idx}>
                <div className="label">
                  <span style={{ color: bar.color }}>{bar.percent}</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: bar.percent, backgroundColor: bar.color }}
                  ></div>
                </div>
                <div className="bar-name">{bar.label}</div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
function ExecutionProcess() {
  const steps = [
    {
      number: "1",
      title: "الاستشارة الأولية",
      desc: "فهم احتياجاتك وتحديد الحل الأمثل لعملك",
      time: "1-2 أيام",
      color: "#c7d2fe",
    },
    {
      number: "2",
      title: "الإعداد والتكوين",
      desc: "إعداد الوكيل الذكي وتخصيصه حسب عملك",
      time: "3-5 أيام",
      color: "#bbf7d0",
    },
    {
      number: "3",
      title: "الاختبار والتدريب",
      desc: "اختبار شامل وتدريب فريقك على استخدام النظام",
      time: "2-3 أيام",
      color: "#bfdbfe",
    },
    {
      number: "4",
      title: "الإطلاق والدعم",
      desc: "تشغيل النظام مع دعم مستمر ومتابعة الأداء",
      time: "مستمر",
      color: "#ddd6fe",
    },
  ];

  const requirements = [
    {
      icon: "fas fa-link",
      title: "التكامل مع الأنظمة",
      desc: "الأنظمة الحالية التي تريد ربطها مع صديقي",
    },
    {
      icon: "fas fa-users",
      title: "أهداف خدمة العملاء",
      desc: "ما تريد تحقيقه من تحسين خدمة العملاء",
    },
    {
      icon: "fas fa-file-alt",
      title: "معلومات العمل",
      desc: "نوع العمل، الخدمات المقدمة، والعمليات الحالية",
    },
  ];

  return (
    <section className="execution-section">
      <div className="container">
        <h2 className="title">عملية التنفيذ</h2>
          <div className="underline"></div>

        <p className="subtitle">عملية سهلة ومرنة للانتقال إلى المستقبل الرقمي</p>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div
                className="step-circle"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="duration">{step.time}</span>
            </div>
          ))}
        </div>

        <h3 className="need-title">ما نحتاجه منك</h3>
        <div className="requirements">
          {requirements.map((item, index) => (
            <div className="require-card" key={index}>
              <div className="require-icon">
                <i className={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStory() {
  return (
    <section className="success-story">
      <div className="container">
        <h2 className="title">قصة نجاح</h2>
            <div className="underline"></div>
        <p className="subtitle">مثال حي من عملائنا الناجحين</p>

        <div className="story-box">
          <div className="story-content">
            <div className="client-info">
              <h3>شركة صحيح الطبية</h3>
              <p>خدمات الرعاية الصحية المنزلية - الرياض</p>
            </div>
            <div className="details">
              <p><strong>التحدي:</strong><br />كانت شركة صحيح الطبية تواجه صعوبة في إدارة حجوزات المرضى وتنسيق مواعيد الخدمات المنزلية، مما أدى إلى تأخير في الاستجابة وانخفاض رضا العملاء.</p>
              <p><strong>الحل:</strong><br />تم تطبيق منصة صديقي لأتمتة عملية الرد والاستفسارات، مع ربط النظام بقاعدة بيانات الأطباء ومواعيدهم.</p>
              <div className="quote">
                <p>منذ تطبيق منصة صديقي، تحسنت خدماتنا بشكل كبير. نحن الآن نخدم ضعف عدد المرضى بنفس الفريق.</p>
                <p className="signature">- د. أحمد المدير التنفيذي، صحيح الطبية</p>
              </div>
            </div>
          </div>
          <div className="results-box">
            <h3>النتائج المحققة</h3>
            <ul>
              <li>تحسن وقت الاستجابة
                <span className="badge green">85% أسرع</span></li>
              <li>زيادة الحجوزات
                <span className="badge blue">200%</span></li>
              <li>رضا المرضى
                <span className="badge purple">97%</span></li>
              <li>توفير التكاليف
                <span className="badge gray">60%</span></li>
            </ul>
            <hr />
            <a className="cta-button">
              <i className="fab fa-telegram-plane"></i> جرب البوت الآن
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}

function PricingPlans() {
  return (
    <section className="pricing-plans" dir="rtl">
      <div className="container">
        <h2 className="title">الباقات والأسعار</h2>
                    <div className="underline"></div>
        <p className="subtitle">خطط مرنة تناسب جميع أحجام الأعمال</p>

        <div className="plans">
         
           <div className="plan">
            <h3>الباقة الأساسية</h3>
            <p className="price">$299 <span>شهريًا</span></p>
            <ul>
              <li>حتى 1,000 محادثة شهريًا</li>
              <li>منصة واحدة (تليجرام أو واتساب)</li>
              <li>دعم تقني عادي</li>
              <li>تقارير أساسية</li>
              <li>إعداد مجاني</li>
            </ul>
            <a href="#" className="button primary">ابدأ الآن</a>
          </div>
          <div className="plan active">
            <div className="badge">الأكثر شيوعًا</div>
            <h3>الباقة المهنية</h3>
            <p className="price">$599 <span>شهريًا</span></p>
            <ul>
              <li>حتى 5,000 محادثة شهريًا</li>
              <li>كلا المنصتين (تليجرام + واتساب)</li>
              <li>دعم تقني مميز</li>
              <li>تقارير تفصيلية وتحليلات</li>
              <li>تكامل مع الأنظمة الحالية</li>
              <li>تدريب الفريق</li>
            </ul>
            <a href="#" className="button primary">ابدأ الآن</a>
          </div>
           <div className="plan">
            <h3>باقة المؤسسات</h3>
            <p className="price"><strong>سعر مخصص</strong><br />حسب الاحتياجات</p>
            <ul>
              <li>محادثات غير محدودة</li>
              <li>جميع المنصات + واجهة ويب</li>
              <li>مدير حساب مخصص</li>
              <li>SLA مضمون</li>
              <li>حلول مخصصة بالكامل</li>
              <li>دعم متقدم للذكاء الاصطناعي</li>
            </ul>
            <a href="#" className="button secondary">تواصل معنا</a>
          </div>
         
        </div>

        <div className="promo">
          <p>
            <span className="gift">🎁 عرض خاص للعملاء الجدد</span><br />
            تجربة مجانية لمدة 30 يوم لجميع الباقات + إعداد مجاني + تدريب الفريق<br />
            <strong className="highlight">وفر حتى 50% على الشهور الثلاثة الأولى!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSteps() {
  return (
    <section className="contact-steps" dir="rtl">
      <div className="container">
        <h2 className="title">تواصل معنا والخطوات التالية</h2>
        <p className="subtitle">ابدأ رحلتك نحو التحول الرقمي اليوم</p>

        <div className="content">
          <div className="steps">
            {[
              { number: "1", title: "استشارة مجانية", desc: "تحدث مع خبرائنا لفهم احتياجاتك وتحديد الحل المناسب" },
              { number: "2", title: "عرض تجريبي مخصص", desc: "احصل على عرض مباشر للمنصة مع أمثلة من مجال عملك" },
              { number: "3", title: "تجربة مجانية", desc: "اختبر المنصة لمدة 30 يوم بدون أي التزامات مالية" },
              { number: "4", title: "الإطلاق والدعم", desc: "إطلاق النظام مع دعم مستمر ومتابعة دورية للأداء" }
            ].map((step, i) => (
              <div className="step" key={i}>
                <div className="number">{step.number}</div>
                <div className="details">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}

            <div className="ready">
              <h4>هل أنت مستعد للبدء؟</h4>
              <p>انضم إلى عملائنا الناجحين وحقق تجربة عملائك اليوم</p>
              <button>
                ابدأ الآن مجانًا <i className="fas fa-arrow-left"></i>
              </button>
            </div>
          </div>

          <div className="contacts">
            <div className="box tg">
              <div>
                <h4>بوت التليجرام</h4>
                <p>للاستشارة الفورية والدعم</p>
              </div>
              <a href="#">تحدث مع صديقي الآن <i className="fas fa-paper-plane"></i></a>
            </div>
            <div className="box wa">
              <div>
                <h4>واتساب</h4>
                <p>للتواصل المباشر مع فريق المبيعات</p>
              </div>
              <a href="#">ابدأ المحادثة <i className="fab fa-whatsapp"></i></a>
            </div>
            <div className="box email">
              <div>
                <h4>البريد الإلكتروني</h4>
                <p>للاستفسارات التفصيلية</p>
              </div>
              <a href="mailto:info@sadiqi.ai">info@sadiqi.ai <i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <div className="landing-page">
     <Header />
     <ExecutiveSummary />
     <TechArchitecture />
     <MainFeatures />
     <CustomizationSection />
     <MarketBenefits />
     <ExecutionProcess />
     <SuccessStory />
     <PricingPlans />
     <ContactSteps />
     <Footer />
     
    </div>
  );
}
