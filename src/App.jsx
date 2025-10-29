import { useState } from 'react'
import { useIsMobile } from './hooks/use-mobile.js'
import { Button } from '@/components/ui/button.jsx'
import { Palette, Megaphone, Calendar, Mail, Phone, MapPin, Facebook, Instagram, CheckCircle2, LineChart } from 'lucide-react'
import './App.css'

// Import images
import heroBg from './assets/hero-bg-kaodee.jpg'
import officeWorkspace from './assets/office-workspace-kaodee.jpg'
import eventSetup from './assets/event-setup-kaodee.jpg'
import portfolio1 from './assets/portfolio-1-kaodee.jpg'
import portfolio2 from './assets/portfolio-2-kaodee.jpg'
import portfolio3 from './assets/portfolio-3-kaodee.jpg'
import a1 from './assets/a1.gif'
import a2 from './assets/a2.jpg'
import a3 from './assets/a3.gif'
import a4 from './assets/a4.jpg'
import a5 from './assets/a5.jpg'
import a6 from './assets/a6.gif'
import a7 from './assets/a7.jpg'
import a8 from './assets/a8.jpg'

function App() {
  const [activeService, setActiveService] = useState('design')
  const isMobile = useIsMobile()

  if (isMobile) {
    const href = 'https://lin.ee/D8JnhKa'
    return (
      <div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a1} alt="banner a1" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a2} alt="banner a2" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a3} alt="banner a3" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a4} alt="banner a4" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a5} alt="banner a5" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a6} alt="banner a6" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a7} alt="banner a7" width="100%" />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={a8} alt="banner a8" width="100%" />
        </a>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm mb-4 animate-bounce-in">
              บริการครบวงจร มืออาชีพ
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-bottom">
            KAODEE INNOVATION
          </h1>
          <p className="text-xl md:text-3xl mb-4 font-light animate-slide-in-bottom animation-delay-200">
            Creative Advertising & Event Solutions
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-in-bottom animation-delay-400">
            ออกแบบงานโฆษณาทุกประเภท • จัดแสดงสินค้ามืออาชีพ • สร้างสรรค์ไอเดียที่โดดเด่น
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom animation-delay-600">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              ดูบริการของเรา
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              ติดต่อเรา
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">บริการของเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เราให้บริการครบวงจรด้านการออกแบบโฆษณาและจัดงานมืออาชีพ
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeService === 'design' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveService('design')}
              className="transition-all duration-300 hover:scale-105"
            >
              <Palette className="mr-2 h-5 w-5" />
              Graphic Design
            </Button>
            <Button
              variant={activeService === 'advertising' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveService('advertising')}
              className="transition-all duration-300 hover:scale-105"
            >
              <Megaphone className="mr-2 h-5 w-5" />
              Advertising
            </Button>
            <Button
              variant={activeService === 'event' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveService('event')}
              className="transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Event & Exhibition
            </Button>
          </div>

          {/* Service Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {activeService === 'design' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold mb-4">ออกแบบงานโฆษณามืออาชีพ</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    บริการออกแบบงานโฆษณาทุกประเภท ด้วยทีมครีเอทีฟที่มีประสบการณ์ 
                    สร้างสรรค์ผลงานที่โดดเด่นและตรงใจลูกค้า พร้อมสื่อสารแบรนด์ของคุณอย่างมีประสิทธิภาพ
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">ออกแบบโลโก้และอัตลักษณ์แบรนด์</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">ออกแบบสื่อโฆษณาทุกรูปแบบ</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">ออกแบบบรรจุภัณฑ์และสิ่งพิมพ์</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">ออกแบบกราฟิกสำหรับดิจิทัล</span>
                    </li>
                  </ul>
                </div>
              )}
              {activeService === 'advertising' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold mb-4">วางแผนและดำเนินการโฆษณา</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    บริการวางแผนกลยุทธ์การโฆษณาที่มีประสิทธิภาพ ทั้งสื่อออนไลน์และออฟไลน์ 
                    เพื่อเข้าถึงกลุ่มเป้าหมายและสร้างผลลัพธ์ที่วัดได้
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">วางแผนแคมเปญโฆษณาครบวงจร</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">โฆษณาออนไลน์และโซเชียลมีเดีย</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">สื่อโฆษณากลางแจ้งและสิ่งพิมพ์</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">วิเคราะห์ผลและรายงานประสิทธิภาพ</span>
                    </li>
                  </ul>
                </div>
              )}
              {activeService === 'event' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-bold mb-4">จัดงานและแสดงสินค้ามืออาชีพ</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    บริการจัดงานอีเวนต์และออกแบบบูธแสดงสินค้าครบวงจร 
                    ตั้งแต่การวางแผน ออกแบบ ติดตั้ง ไปจนถึงการดำเนินงาน 
                    พร้อมทีมงานมืออาชีพที่ใส่ใจทุกรายละเอียด
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">ออกแบบและสร้างบูธแสดงสินค้า</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">จัดงานสัมมนาและกิจกรรมองค์กร</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">จัดงานเปิดตัวสินค้าและแบรนด์</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">บริการครบวงจรตั้งแต่ต้นจนจบ</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Service Images */}
            <div className="grid grid-cols-2 gap-4">
              {activeService === 'design' && (
                <>
                  <img src={officeWorkspace} alt="Design Studio" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                  <img src={heroBg} alt="Creative Workspace" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                  <img src={portfolio3} alt="Design Work" className="w-full h-64 object-cover rounded-lg shadow-lg col-span-2 hover:scale-105 transition-transform duration-300" />
                </>
              )}
              {activeService === 'advertising' && (
                <>
                  <img src={heroBg} alt="Advertising Campaign" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                  <img src={officeWorkspace} alt="Marketing Strategy" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                  <img src={portfolio1} alt="Ad Design" className="w-full h-64 object-cover rounded-lg shadow-lg col-span-2 hover:scale-105 transition-transform duration-300" />
                </>
              )}
              {activeService === 'event' && (
                <>
                  <img src={eventSetup} alt="Event Setup" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                  <img src={portfolio1} alt="Exhibition Booth" className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                  <img src={portfolio2} alt="Event Management" className="w-full h-64 object-cover rounded-lg shadow-lg col-span-2 hover:scale-105 transition-transform duration-300" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ทำไมต้องเลือกเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เราคือพันธมิตรที่เชื่อถือได้สำหรับการสร้างสรรค์งานโฆษณาและจัดงาน
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ครีเอทีฟโดดเด่น</h3>
              <p className="text-gray-700">
                ทีมงานครีเอทีฟมืออาชีพที่มีประสบการณ์ สร้างสรรค์ผลงานที่โดดเด่นและน่าจดจำ
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ประสบการณ์ยาวนาน</h3>
              <p className="text-gray-700">
                ดำเนินธุรกิจมากกว่า 15 ปี พร้อมผลงานที่หลากหลายและได้รับการยอมรับ
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ผลลัพธ์ที่วัดได้</h3>
              <p className="text-gray-700">
                มุ่งเน้นผลลัพธ์ที่เป็นรูปธรรม สร้างมูลค่าเพิ่มให้กับธุรกิจของคุณ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ผลงานของเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ชมตัวอย่างผลงานที่เราภูมิใจนำเสนอ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={portfolio1} alt="ผลงาน 1" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Exhibition Booth Design</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={portfolio2} alt="ผลงาน 2" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Event Setup</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={portfolio3} alt="ผลงาน 3" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Graphic Design</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={officeWorkspace} alt="ผลงาน 4" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Creative Workspace</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={eventSetup} alt="ผลงาน 5" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Event Management</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={heroBg} alt="ผลงาน 6" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Advertising Campaign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ติดต่อเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              พร้อมให้คำปรึกษาและรับงานของคุณ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">ข้อมูลติดต่อ</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">ที่อยู่</p>
                      <p className="text-gray-700">57/1 ซอยลาดพร้าว 101 ซอย 42 แยก 8<br />แขวงคลองจั่น เขตบางกะปิ<br />กรุงเทพมหานคร 10240</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">โทรศัพท์</p>
                      <a href="tel:0891234567" className="text-gray-700 hover:text-blue-600">089-123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">อีเมล</p>
                      <a href="mailto:info@kaodeeinnovation.com" className="text-gray-700 hover:text-blue-600">info@kaodeeinnovation.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Facebook className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Facebook</p>
                      <a href="https://www.facebook.com/kaodeeinnovation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        kaodeeinnovation
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Instagram className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Instagram</p>
                      <a href="https://www.instagram.com/kaodeeinnovation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        @kaodeeinnovation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">ข้อมูลบริษัท</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">ชื่อบริษัท:</span> บริษัท ก้าวดี อินโนเวชั่น จำกัด</p>
                  <p><span className="font-semibold">ชื่อภาษาอังกฤษ:</span> KAODEE INNOVATION CO., LTD.</p>
                  <p><span className="font-semibold">ทะเบียนเลขที่:</span> 0105553030497</p>
                  <p><span className="font-semibold">ทุนจดทะเบียน:</span> 1,000,000 บาท</p>
                  <p><span className="font-semibold">วันจดทะเบียน:</span> 2 มีนาคม 2553</p>
                  <p><span className="font-semibold">หมวดธุรกิจ:</span> กิจกรรมของบริษัทโฆษณา</p>
                  <p><span className="font-semibold">สถานะ:</span> ยังดำเนินกิจการอยู่</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">ส่งข้อความถึงเรา</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">ชื่อ-นามสกุล</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="กรอกชื่อของคุณ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">อีเมล</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">เบอร์โทรศัพท์</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="08X-XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">ข้อความ</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="บอกเราเกี่ยวกับโครงการของคุณ..."
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 transition-all duration-300 hover:scale-105"
                >
                  ส่งข้อความ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">KAODEE INNOVATION</h3>
              <p className="text-gray-400">
                ออกแบบงานโฆษณาทุกประเภท จัดแสดงสินค้ามืออาชีพ สร้างสรรค์ไอเดียที่โดดเด่น
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">บริการ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ออกแบบงานโฆษณา (Graphic Design)</li>
                <li>วางแผนและดำเนินการโฆษณา (Advertising)</li>
                <li>จัดงานและแสดงสินค้า (Event & Exhibition)</li>
                <li>สร้างสรรค์แบรนด์ (Brand Identity)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ติดตามเรา</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/kaodeeinnovation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/kaodeeinnovation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2010-2025 KAODEE INNOVATION CO., LTD. • ทะเบียนเลขที่ 0105553030497</p>
            <p className="mt-2 text-sm">57/1 ซอยลาดพร้าว 101 ซอย 42 แยก 8 แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

