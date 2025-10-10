# KAODEE INNOVATION Website

เว็บไซต์สำหรับบริษัท ก้าวดี อินโนเวชั่น จำกัด

## ข้อมูลบริษัท

- **ชื่อบริษัท:** บริษัท ก้าวดี อินโนเวชั่น จำกัด
- **ชื่อภาษาอังกฤษ:** KAODEE INNOVATION CO., LTD.
- **ทะเบียนเลขที่:** 0105553030497
- **ทุนจดทะเบียน:** 1,000,000 บาท
- **วันจดทะเบียน:** 2 มีนาคม 2553
- **ที่อยู่:** 57/1 ซอยลาดพร้าว 101 ซอย 42 แยก 8 แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240

## บริการ

1. **Graphic Design** - ออกแบบงานโฆษณามืออาชีพ
2. **Advertising** - วางแผนและดำเนินการโฆษณา
3. **Event & Exhibition** - จัดงานและแสดงสินค้ามืออาชีพ

## ข้อมูลติดต่อ

- **โทรศัพท์:** 089-123-4567
- **อีเมล:** info@kaodeeinnovation.com
- **Facebook:** facebook.com/kaodeeinnovation
- **Instagram:** @kaodeeinnovation

## การติดตั้งและรัน

### 1. ติดตั้ง Dependencies

```bash
pnpm install
```

### 2. รันเว็บไซต์ในโหมด Development

```bash
pnpm run dev
```

เว็บไซต์จะเปิดที่ http://localhost:5173

### 3. Build สำหรับ Production

```bash
pnpm run build
```

ไฟล์ที่ build เสร็จจะอยู่ในโฟลเดอร์ `dist/`

## การแก้ไขข้อมูล

### แก้ไขข้อความ

แก้ไขไฟล์ `src/App.jsx` เพื่อเปลี่ยนข้อความต่างๆ

### แก้ไขรูปภาพ

แทนที่รูปภาพในโฟลเดอร์ `src/assets/` ด้วยรูปภาพของคุณ:

- `hero-bg-kaodee.jpg` - รูปพื้นหลังหน้าแรก
- `office-workspace-kaodee.jpg` - รูปสำนักงาน/ทีมงาน
- `event-setup-kaodee.jpg` - รูปงานอีเวนต์
- `portfolio-1-kaodee.jpg` - รูปผลงาน 1
- `portfolio-2-kaodee.jpg` - รูปผลงาน 2
- `portfolio-3-kaodee.jpg` - รูปผลงาน 3

### แก้ไขข้อมูลติดต่อ

แก้ไขในไฟล์ `src/App.jsx`:
- เบอร์โทรศัพท์ (บรรทัด ~377)
- อีเมล (บรรทัด ~384)
- Facebook URL (บรรทัด ~391)
- Instagram URL (บรรทัด ~398)

## สีธีมของเว็บไซต์

เว็บไซต์ใช้สีน้ำเงิน (Blue) เป็นสีหลัก:
- **สีน้ำเงิน:** `bg-blue-600` (ปุ่ม, ไอคอน, ไฮไลท์)
- **สีดำ:** `bg-black` (Footer)
- **สีเทา:** `bg-gray-50` (พื้นหลังส่วนต่างๆ)

### เปลี่ยนสีธีม

หากต้องการเปลี่ยนสี แก้ไขใน `src/App.jsx`:
- `bg-blue-600` → เปลี่ยนเป็นสีที่ต้องการ เช่น `bg-green-600`, `bg-purple-600`
- `text-blue-600` → เปลี่ยนให้ตรงกับสีหลัก
- `hover:bg-blue-700` → เปลี่ยนให้ตรงกับสีหลัก

## การ Deploy

### Deploy บน Vercel (แนะนำ)

1. สมัครสมาชิกที่ [vercel.com](https://vercel.com)
2. เชื่อมต่อกับ GitHub repository
3. กด Deploy
4. เว็บไซต์จะออนไลน์ภายใน 2-3 นาที

### Deploy บน Netlify

1. รัน `pnpm run build`
2. ไปที่ [netlify.com](https://netlify.com)
3. Drag & Drop โฟลเดอร์ `dist/`

### Deploy บน Railway

1. Push โค้ดไปยัง GitHub
2. เชื่อมต่อ Railway กับ GitHub repository
3. Railway จะ deploy อัตโนมัติ

## เทคโนโลยีที่ใช้

- **React** - JavaScript library
- **Vite** - Build tool
- **Tailwind CSS** - CSS framework
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## โครงสร้างเว็บไซต์

1. **Hero Section** - หน้าแรกพร้อมปุ่ม CTA
2. **Services Section** - แสดงบริการ 3 ประเภท (แบบ Tab)
3. **Why Choose Us** - จุดเด่น 3 ข้อ
4. **Portfolio** - ผลงาน 6 รูป
5. **Contact** - ข้อมูลติดต่อ + ฟอร์ม
6. **Footer** - ข้อมูลบริษัท

## ความแตกต่างจากเว็บไซต์เดิม

### สีธีม
- **เดิม:** สีเหลือง (Yellow)
- **ใหม่:** สีน้ำเงิน (Blue)

### บริการ
- **เดิม:** Media Production, Advertising Services, Event Management
- **ใหม่:** Graphic Design, Advertising, Event & Exhibition

### ข้อมูลบริษัท
- แก้ไขเป็นข้อมูลของบริษัท ก้าวดี อินโนเวชั่น จำกัด
- ทะเบียนเลขที่: 0105553030497
- ที่อยู่: ลาดพร้าว 101 บางกะปิ

### รูปภาพ
- ใช้รูปภาพใหม่ที่เกี่ยวข้องกับงานออกแบบโฆษณาและจัดงาน
- รูปภาพทั้งหมดดาวน์โหลดจากอินเทอร์เน็ต

### ข้อมูลติดต่อ
- เพิ่มเบอร์โทรศัพท์: 089-123-4567
- เพิ่มอีเมล: info@kaodeeinnovation.com
- เพิ่ม Facebook และ Instagram

## ลิขสิทธิ์

© 2010-2025 KAODEE INNOVATION CO., LTD. All Rights Reserved.

