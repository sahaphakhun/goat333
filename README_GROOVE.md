# GROOVE PRODUCTION HOUSE Website

เว็บไซต์สำหรับบริษัท กรูฟว์ โปรดักส์ชั่น เฮ้าส์ จำกัด

## ข้อมูลบริษัท

- **ชื่อบริษัท:** บริษัท กรูฟว์ โปรดักส์ชั่น เฮ้าส์ จำกัด
- **ชื่อภาษาอังกฤษ:** GROOVE PRODUCTION HOUSE CO., LTD.
- **ทะเบียนเลขที่:** 0105565106345
- **ทุนจดทะเบียน:** 2,000,000 บาท
- **วันจดทะเบียน:** 1 กรกฎาคม 2565
- **ที่อยู่:** 19/71 ซอยวัชรพล 2 แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220

## บริการ

1. **Media Production** - ผลิตสื่อโฆษณามืออาชีพ
2. **Advertising Services** - บริการโฆษณาทุกรูปแบบ
3. **Event Management** - จัดงานแสดงสินค้ามืออาชีพ

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

- `hero-bg.jpg` - รูปพื้นหลังหน้าแรก
- `office-workspace.jpg` - รูปสำนักงาน/ทีมงาน
- `event-setup.jpg` - รูปงานอีเวนต์
- `portfolio-1.jpg` - รูปผลงาน 1
- `portfolio-2.jpg` - รูปผลงาน 2
- `portfolio-3.jpg` - รูปผลงาน 3

### แก้ไขข้อมูลติดต่อ

แก้ไขในไฟล์ `src/App.jsx` บรรทัดที่มีข้อความ:
- `(ระบุเบอร์โทรศัพท์)`
- `(ระบุอีเมล)`
- `(ระบุ Facebook)`
- `(ระบุ Instagram)`

## ⚠️ สิ่งที่ต้องเพิ่มก่อน Launch

1. ✅ เบอร์โทรศัพท์
2. ✅ อีเมล
3. ✅ Facebook URL
4. ✅ Instagram URL
5. 📸 รูปภาพผลงานจริง (แทนรูปตัวอย่าง)

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

## ลิขสิทธิ์

© 2022-2025 GROOVE PRODUCTION HOUSE CO., LTD. All Rights Reserved.

