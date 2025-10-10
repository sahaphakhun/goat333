# คำแนะนำการ Deploy บน Railway

## ขั้นตอนการ Deploy

### 1. เตรียมโปรเจกต์
- แตกไฟล์ zip ที่ได้รับ
- เข้าไปในโฟลเดอร์ `garagex-site`

### 2. Push โปรเจกต์ขึ้น GitHub (ถ้ายังไม่มี)

```bash
# สร้าง repository ใหม่บน GitHub
# จากนั้นรันคำสั่งเหล่านี้ในโฟลเดอร์โปรเจกต์

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Deploy บน Railway

#### วิธีที่ 1: Deploy จาก GitHub (แนะนำ)

1. ไปที่ https://railway.app/
2. สมัครสมาชิก/เข้าสู่ระบบด้วย GitHub
3. คลิก **"New Project"**
4. เลือก **"Deploy from GitHub repo"**
5. เลือก repository ที่คุณ push ขึ้นไป
6. Railway จะตรวจจับว่าเป็น Vite project อัตโนมัติ
7. ตั้งค่าดังนี้:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run preview` (หรือใช้ static file server)
   - **Root Directory:** `/` (ถ้าโปรเจกต์อยู่ใน root)

#### วิธีที่ 2: Deploy ด้วย Railway CLI

```bash
# ติดตั้ง Railway CLI
npm install -g @railway/cli

# Login
railway login

# สร้างโปรเจกต์ใหม่
railway init

# Deploy
railway up
```

### 4. การตั้งค่าเพิ่มเติม (ถ้าจำเป็น)

ถ้า Railway ไม่รู้จัก build command อัตโนมัติ ให้สร้างไฟล์ `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm run preview",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 5. ใช้ Static File Server (แนะนำสำหรับ Production)

เพิ่ม `serve` package:

```bash
npm install --save-dev serve
```

แก้ไข `package.json` เพิ่ม script:

```json
{
  "scripts": {
    "preview": "vite preview --host 0.0.0.0 --port $PORT",
    "serve": "serve -s dist -l $PORT"
  }
}
```

ใน Railway ตั้ง Start Command เป็น:
- `npm run preview` (สำหรับ Vite preview)
- หรือ `npm run serve` (สำหรับ serve static files)

### 6. ตรวจสอบ Environment Variables

Railway จะตั้งค่า `PORT` environment variable ให้อัตโนมัติ
ตรวจสอบว่า start command ของคุณใช้ `$PORT` หรือ `process.env.PORT`

## ทางเลือกอื่นสำหรับ Static Site

### Vercel (แนะนำสำหรับ React/Vite)

1. ไปที่ https://vercel.com/
2. เชื่อมต่อกับ GitHub
3. Import repository
4. Vercel จะตรวจจับและ deploy อัตโนมัติ
5. ไม่ต้องตั้งค่าอะไรเพิ่ม!

### Netlify

1. ไปที่ https://netlify.com/
2. Drag & Drop โฟลเดอร์ `dist` หลัง build
3. หรือเชื่อมต่อกับ GitHub เหมือน Vercel

### Cloudflare Pages

1. ไปที่ https://pages.cloudflare.com/
2. เชื่อมต่อกับ GitHub
3. ตั้งค่า:
   - Build command: `npm run build`
   - Build output directory: `dist`

## คำสั่งที่สำคัญ

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev

# Build สำหรับ production
npm run build

# Preview build
npm run preview
```

## หมายเหตุ

- เว็บไซต์นี้เป็น Static Site ไม่มี Backend
- แนะนำให้ใช้ Vercel หรือ Netlify สำหรับ Static Site (ฟรีและง่ายกว่า)
- Railway เหมาะสำหรับโปรเจกต์ที่มี Backend หรือต้องการ Server
- ฟอร์มติดต่อในเว็บไซต์ยังไม่ได้เชื่อมต่อกับ Backend (ต้องเพิ่มเองถ้าต้องการ)

## การแก้ปัญหา

### ถ้า Railway ไม่ build
- ตรวจสอบว่ามี `package.json` และ `package-lock.json`
- ลอง force rebuild: Settings → Deployments → Redeploy

### ถ้าหน้าเว็บไม่แสดง
- ตรวจสอบ Start Command ว่าใช้ `--host 0.0.0.0` และ `--port $PORT`
- ดู logs ใน Railway dashboard

### ถ้ารูปภาพไม่แสดง
- ตรวจสอบว่ารูปภาพอยู่ใน `src/assets/` และถูก import ใน `App.jsx`
- Build ใหม่อีกครั้ง

## ติดต่อสอบถาม

หากมีปัญหาในการ deploy สามารถดู documentation ได้ที่:
- Railway: https://docs.railway.app/
- Vite: https://vitejs.dev/guide/
- React: https://react.dev/

