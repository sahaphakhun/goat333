# คู่มือเริ่มต้นใช้งานด่วน

## 📦 ไฟล์ที่ได้รับ

- `garagex-studio-website.zip` - โปรเจกต์เว็บไซต์ทั้งหมด

## 🚀 เริ่มต้นใช้งาน (3 ขั้นตอน)

### 1. แตกไฟล์และติดตั้ง

```bash
# แตกไฟล์ zip
unzip garagex-studio-website.zip

# เข้าไปในโฟลเดอร์
cd garagex-site

# ติดตั้ง dependencies
npm install
```

### 2. รันเว็บไซต์

```bash
# รัน development server
npm run dev
```

เปิดเบราว์เซอร์ที่: **http://localhost:5173**

### 3. Build และ Deploy

```bash
# Build สำหรับ production
npm run build
```

## 🌐 วิธี Deploy (เลือก 1 วิธี)

### วิธีที่ 1: Vercel (แนะนำ - ฟรี + ง่ายที่สุด)

1. Push โปรเจกต์ขึ้น GitHub
2. ไปที่ https://vercel.com
3. เชื่อมต่อกับ GitHub และ Import repository
4. คลิก Deploy → เสร็จ!

### วิธีที่ 2: Netlify (ฟรี + ง่าย)

1. Build: `npm run build`
2. ไปที่ https://app.netlify.com/drop
3. ลากโฟลเดอร์ `dist` ไปวาง → เสร็จ!

### วิธีที่ 3: Railway (มีค่าใช้จ่าย)

ดูคำแนะนำใน `RAILWAY_DEPLOYMENT.md`

## 📁 โครงสร้างไฟล์สำคัญ

```
garagex-site/
├── src/
│   ├── App.jsx              # โค้ดหลักของเว็บไซต์
│   ├── App.css              # สไตล์และ animations
│   └── assets/              # รูปภาพทั้งหมด
├── index.html               # HTML template
├── package.json             # Dependencies
├── README.md                # คู่มือโปรเจกต์
└── RAILWAY_DEPLOYMENT.md    # คู่มือ deploy บน Railway
```

## ✏️ แก้ไขเนื้อหา

### เปลี่ยนข้อความ
แก้ไขใน `src/App.jsx` - ค้นหาข้อความที่ต้องการเปลี่ยนและแก้ไขได้เลย

### เปลี่ยนรูปภาพ
1. เพิ่มรูปใหม่ใน `src/assets/`
2. Import ใน `App.jsx`:
   ```javascript
   import myImage from './assets/myImage.jpg'
   ```
3. ใช้งาน: `<img src={myImage} />`

### เปลี่ยนสี
แก้ไขใน `src/App.css` - ค้นหา `--color-` หรือ `bg-yellow-500`

## ❓ แก้ปัญหา

### ติดตั้งไม่ได้
```bash
# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

### รูปภาพไม่แสดง
- ตรวจสอบว่ารูปอยู่ใน `src/assets/`
- ตรวจสอบการ import ใน `App.jsx`
- Build ใหม่: `npm run build`

### Port 5173 ถูกใช้งาน
```bash
# ใช้ port อื่น
npm run dev -- --port 3000
```

## 📞 ติดต่อสอบถาม

- Facebook: studiogaragebangkok
- Instagram: @garagexstudio

---

**สำเร็จ!** เว็บไซต์พร้อมใช้งานแล้ว 🎉

