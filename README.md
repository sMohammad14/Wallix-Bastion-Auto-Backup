# افزونه Wallix Bastion Auto Backup

![نسخه](https://img.shields.io/badge/version-1.0-blue)
![پلتفرم](https://img.shields.io/badge/platform-Chrome_Extension-green)
![مجوز](https://img.shields.io/badge/license-Private-lightgrey)

## معرفی

این افزونه یک ابزار خودکار برای تهیه نسخه پشتیبان از تنظیمات Wallix Bastion از طریق رابط وب است و بدون نیاز به API یا دسترسی Maintenance کار می‌کند.

افزونه فرآیند دستی Backup را شبیه‌سازی کرده و تا زمانی که مرورگر Chrome باز باشد، عملیات را اجرا می‌کند.

---

## امکانات

- ورود خودکار در صورت نیاز
- رفتن خودکار به صفحه Backup
- وارد کردن Secret
- ایجاد فایل Backup
- دانلود خودکار فایل
- ایجاد فایل متنی اطلاعات Backup
- اجرای زمان‌بندی‌شده هر ۲۴ ساعت
- سازگار با نسخه‌های قدیمی (محدودیت ۱۶ کاراکتر Secret)
- بدون نیاز به API

---

## نحوه عملکرد

پس از زمان‌بندی، افزونه:

1. یک تب جدید باز می‌کند  
2. در صورت نیاز Login می‌کند  
3. به بخش Backup می‌رود  
4. Secret را وارد می‌کند  
5. Backup را ایجاد می‌کند  
6. تا تکمیل فرآیند منتظر می‌ماند  
7. فایل را دانلود می‌کند  
8. فایل متنی اطلاعات را ایجاد و دانلود می‌کند  
9. تب را می‌بندد  

مرورگر Chrome نباید بسته شود (امکان Minimize وجود دارد).

---

## محتوای فایل متنی Backup

فایل متنی شامل موارد زیر است:

- نام فایل Backup
- Secret مورد نیاز برای Restore
- تاریخ دانلود

---

## پیش‌نیازها

- باز بودن Google Chrome
- عدم نمایش پیام "Not Secure"
- غیرفعال بودن گزینه  
  "Ask where to save each file before downloading"
- وجود اکانت با دسترسی Backup / Restore

---

## اطلاعات مورد نیاز

- آدرس سامانه (هر لینک داخلی قابل قبول است)
- نام کاربری
- رمز عبور
- Secret ۱۶ کاراکتری (دستی یا خودکار)
- زمان اجرای Backup

عملیات هر ۲۴ ساعت تکرار می‌شود.

---

## مراحل نصب

### ۱. دانلود

دانلود از:

https://github.com/sMohammad14/Wallix-Bastion-Auto-Backup/archive/refs/heads/main.zip

سپس از حالت فشرده خارج کنید.

### ۲. تنظیمات Chrome

گزینه  
"Ask where to save each file before downloading"  
را غیرفعال کنید.

### ۳. نصب افزونه

1. ورود به `chrome://extensions/`
2. فعال‌سازی Developer mode
3. انتخاب Load unpacked
4. انتخاب پوشه Unzip شده

### ۴. فعال‌سازی

- افزونه را Pin کنید
- فرم را تکمیل کنید
- روی Schedule کلیک کنید
- Chrome را نبندید

---

## نکات فنی

- هر لینکی از سامانه قابل استفاده است.
- محدودیت ۱۶ کاراکتری برای سازگاری با نسخه‌های قدیمی است.
- هیچ API استفاده نشده است.
- دسترسی Maintenance لازم نیست (هر چند این عملیات به راحتی با این دسترسی، امکانپذیر است).

---

## برنامه‌های توسعه (Roadmap)

- اضافه شدن آیکون پویا برای نمایش وضعیت فعال / غیرفعال
- انجام Logout قبل از بستن مرورگر  
  (در حال حاضر با منقضی شدن Cookie خروج انجام می‌شود. معمولاً این عملیات در زمانی اجرا می‌شود که کاربری پشت سیستم نیست، مانند شب، و سیستم در حالت Lock قرار دارد.)
- بهبود چینش و فرمت فایل متنی اطلاعات Backup

---

## توضیح مهم

این افزونه عملیات را از طریق رابط کاربری وب شبیه‌سازی می‌کند.  


# Wallix Bastion Auto Backup (Chrome Extension)

![Version](https://img.shields.io/badge/version-1.0-blue)
![Platform](https://img.shields.io/badge/platform-Chrome_Extension-green)
![License](https://img.shields.io/badge/license-Private-lightgrey)

## Overview

Wallix Bastion Auto Backup is a Chrome extension designed to automatically create configuration backups from Wallix Bastion without requiring API or Maintenance-level access.

The extension simulates the manual backup process through the web interface and operates automatically as long as Google Chrome is running.

---

## Features

- Automatic login (if required)
- Automatic navigation to backup page
- Secret injection
- Backup file generation
- Automatic file download
- Backup metadata text file generation
- 24-hour recurring schedule
- Compatible with older Wallix versions (16-character Secret limit)
- No API required

---

## How It Works

Once scheduled, the extension:

1. Opens a new Chrome tab  
2. Logs in (if session expired)  
3. Navigates to the backup section  
4. Enters the Secret  
5. Generates the backup  
6. Waits for completion  
7. Downloads the backup file  
8. Generates and downloads a related text file  
9. Closes the tab  

Chrome must remain open (it may be minimized).

---

## Backup Metadata Text File

The generated text file includes:

- Backup file name  
- Secret required for restore  
- Backup download date  

---

## Requirements

- Google Chrome must be open  
- No **"Not Secure"** HTTPS certificate warning  
- Chrome setting **"Ask where to save each file before downloading"** must be disabled  
- A user account with **Backup / Restore** permissions  

---

## Configuration Inputs

During setup, the extension requires:

- Wallix Bastion URL (any system page URL is acceptable)
- Username
- Password
- 16-character Secret (manual or auto-generated)
- Schedule time

Backups repeat automatically every 24 hours.

---

## Installation

### 1. Download

Download:

https://github.com/sMohammad14/Wallix-Bastion-Auto-Backup/archive/refs/heads/main.zip

Extract the ZIP file.

### 2. Chrome Settings

Disable:

"Ask where to save each file before downloading"

### 3. Install Extension

1. Go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select extracted folder

### 4. Activate

- Pin the extension
- Fill the form
- Click **Schedule**
- Do NOT close Chrome (minimize is allowed)

---

## Technical Notes

- Any system URL can be entered; the extension generates the required internal link automatically.
- The 16-character Secret ensures compatibility with older deployed versions.
- No API is used because no API exists for this operation.
- Maintenance-level access is not required.

---

## Roadmap / Future Improvements

- Add dynamic extension icon (Active / Inactive state indicator)
- Perform automatic Logout before browser shutdown  
  (Currently logout occurs when cookies expire. Typically, backups run when no one is present, e.g., at night, and the system remains locked.)
- Improve layout and formatting of the backup metadata text file

---

## Disclaimer

This extension automates UI-based operations.  
Use it responsibly and test in non-production environments before deploying in production systems.

