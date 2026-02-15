# افزونه Wallix Bastion Auto Backup

![نسخه](https://img.shields.io/badge/version-1.0-blue)
![پلتفرم](https://img.shields.io/badge/platform-Chrome_Extension-green)
![مجوز](https://img.shields.io/badge/license-Private-lightgrey)

## معرفی

این افزونه یک ابزار خودکار برای تهیه نسخه پشتیبان از تنظیمات Wallix Bastion از طریق رابط وب است و بدون نیاز به API یا دسترسی Maintenance کار می‌کند.

افزونه فرآیند دستی Backup را شبیه‌سازی کرده و تا زمانی که مرورگر Chrome باز باشد، عملیات را اجرا می‌کند.

---

## امکانات
- تمام مراحل تهیه یک فایل بکاپ از سامانه رو به طور خودکار و بدون دخالت کاربر انجام میده
- هر دسترسی که کاربر برای بهره برداری از سامانه، نیاز داشته باشه، این افزونه هم دقیقا همون رو نیزا خواهد داشت
- سازگار با نسخه‌های قدیمی (برای وارد کردن Secret که هنگام ایجاد فایل بکاپ باید واردش کنید و موقع restore هم بهش نیاز دارید، فقط میتونید 16 کاراکتر وارد کنید، چون نسخه های قدیمی، فقط 16 کاراکتر رو قبول میکنن!)
- بدون نیاز به API (مستندات API این موضوع رو پشتیبانی نمیکرد، برای همین مانند یک کاربر؛ رفتار کاربر رو شبیه سازی کردم! که به مواردی جالبی برخوردم که در ریپازیتوری باگ ها، میتونید ببینید)

---

## دقیقا چه جوری کار میکنه؟

پس از زمان‌بندی، افزونه مانند یک کاربر:

1. یک تب جدید باز می‌کند (نمیشه بکگراند باشه، حتما باید New Tab باشه) 
2. در صورت نیاز Login می‌کند (ممکنه کوکی ها هنوز معتبر باشنو نیازی به لاگین نیست) 
3. به بخش Backup می‌رود  
4. Secret ها را وارد می‌کند  
5. Backup را پیدا و کلیک می‌کند  
6. تا تکمیل فرآیند منتظر می‌ماند  
7. زمانی که فایل آماده شد، فایل را دانلود می‌کند  
8. فایل متنی اطلاعات شامل نام فایل بکاپ، رمز عبور و تاریخ شروع فرآیند بکاپ را ایجاد و دانلود می‌کند
9. خروج نمیکند (در آپدیت یعدس مرتفع میشود ولی مشکل چدی نیست، چون سیستم لاک هست و کسی دسترسی نداره، کوکی ها منقضی شده بعد از زمانی و امکان دسترسی غیر مجاز وجود نخواهد داشت) 
10. تب را می‌بندد  

.

---


## پیش‌نیازها

- باز بودن  Google Chrome (مرورگر Chrome نباید بسته باشد همچنین امکان Minimize وجود دارد)
- عدم نمایش پیام "Not Secure" (زمانی که مرورگر پیام Not Secure بدهد، افزونه قادر به کار نخواهد بود زیرا امکان bypass این موضوع وجود ندارد، پس، بریا رفع این مورد اقدامات لازم رو انجام بدید)
- غیرفعال بودن گزینه "Ask where to save each file before downloading" (چون همه چیز قرار هست خودکار انجام بشه، موق دانلود فایل، نباید منتظر محل انتخاب دانلود فایل بماند)
- وجود اکانت با دسترسی Backup / Restore (اگر در نظر دارید از اکانتی به جز اکانت خودتون که احتمالا دسترسی کامل به سامانه داره، استفاده کنید، بهتر هست خودتون از کروم به عنوان مرورگر استفاده کننده برای سامانه PAM استغفاده نکنید، به خاطر تداخل کوکی ها. هر چند، اگر هم از اکانت خودتون استفاده کنید، مشکلی نخواهد بود)
---

## اطلاعات مورد نیاز برای راه اندازی افزونه

- آدرس سامانه (هر لینک داخلی قابل قبول است یعنی فرقی نمیکنه آدرس لاگین رو میدید، ادرس یک صفحه خاص رو میدید، IP سامانه رو میدید، هیچ فرقی نداره، چون آدرس صحیح از آدرسی که دادی استخراج و استفاده میشه!)
- نام کاربری معتبر در سامانه با دسترسی که گفته شد
- رمز عبورِ نام کاربری 
- Secret ۱۶ کاراکتری که یا خودتون وارد میکنید یا با کلید میتونید رندوم ایجاد کنید! نیازی به کپی نیست، توی فایل اطلاعات، این رمز عبور درج میشه
- زمان بندی اجرای Backup 

عملیات هر ۲۴ ساعت تکرار می‌شود.

---

## مراحل نصب

### ۱. دانلود

دانلود از:

https://github.com/sMohammad14/Wallix-Bastion-Auto-Backup/archive/refs/heads/main.zip

سپس از حالت فشرده خارج کنید.

### ۲. تنظیمات Chrome

ستینگ رو باز کنید و مقدار زیر رو جست و جو کنید  
"Ask where to save each file before downloading"  
سپس غیرفعال کنید.

### ۳. نصب افزونه

1. ورود به `chrome://extensions/`
2. فعال‌سازی Developer mode
3. انتخاب Load unpacked
4. انتخاب پوشه Unzip شده

نکته مهم این هست که، این پوشه باید روی سیستم شما بمونده، چون افزونه به این فایل ها نیاز داره و موقع اجرا به این فایل ها مراجعه میکنه. پس، قبل از Load unpacked، پوشه رو در محل مناسب روب سیستم خودتون کپی کنید، سپس Load unpack انجام بدید و آدرس این پوشه روی سیستم خودتون رو انتخاب کنید!

### ۴. فعال‌سازی

- افزونه را Pin کنید (کنار آدرس بار کروم، علامت پازل)
- فرم را تکمیل کنید
- روی Schedule کلیک کنید
- Chrome را نبندید

---

## نکات قابل توجه
تمام این فرآیند به روش ساده تری از طریق دسترسی Maintenance که احتمالا در دسترس شما نیست، قابل انجام هست، پس اگر چنین دسترسی در اختیار دارید، نیازی به این افزونه ندارید. دقت کنید که اگر چنین دسترسی دارید، باید فایل های بکاپ رو از سامانه بردارید! در غیر این صورت اگر سامانه آسیب ببیند، سامانه به همراه فایل های بکاپ هر دو از دست خواهد رفت!

---

## برنامه‌های توسعه (Roadmap)

- اضافه شدن آیکون پویا برای نمایش وضعیت فعال / غیرفعال ✅ انجام شد
- انجام Logout قبل از بستن مرورگر  
  (در حال حاضر با منقضی شدن Cookie خروج انجام می‌شود. معمولاً این عملیات در زمانی اجرا می‌شود که کاربری پشت سیستم نیست، مانند شب، و سیستم در حالت Lock قرار دارد.)
- بهبود چینش و فرمت فایل متنی اطلاعات Backup ✅ انجام شد

---


---

## تصاویر
![Auto Backup Screenshot](screenshots/autobck%20(2).png)

![Auto Backup Screenshot](screenshots/autobck%20(1).png)

![Auto Backup Screenshot](screenshots/autobck%20(3).png)

# Wallix Bastion Auto Backup Extension

![Version](https://img.shields.io/badge/version-1.0-blue)
![Platform](https://img.shields.io/badge/platform-Chrome_Extension-green)
![License](https://img.shields.io/badge/license-Private-lightgrey)

## Introduction

This extension is an automated tool for creating backups of Wallix Bastion settings through the web interface, without requiring API access or Maintenance privileges.

The extension simulates the manual backup process and runs as long as Google Chrome remains open.

---

## Features

- Automatically performs all steps required to generate a backup file without user interaction  
- Requires exactly the same access level that a user needs to perform backup operations manually  
- Compatible with older versions (for entering the Secret required during backup creation and needed again during restore, only 16 characters are allowed because older versions only accept 16 characters)  
- No API required (the API documentation did not support this functionality, so I simulated user behavior instead — which led to some interesting findings documented in the repository issues section)

---

## How Exactly Does It Work?

After scheduling, the extension behaves like a user:

1. Opens a new tab (it cannot run in the background; it must open a new tab)  
2. Logs in if needed (cookies may still be valid, so login might not be required)  
3. Navigates to the Backup section  
4. Enters the Secret  
5. Finds and clicks Backup  
6. Waits until the process is completed  
7. Downloads the backup file once it is ready  
8. Creates and downloads a text file containing the backup file name, password (Secret), and backup start date  
9. Does not log out (this will be fixed in a future update, but it is not a serious issue since the system is locked and cookies expire after some time, preventing unauthorized access)  
10. Closes the tab  

---

## Prerequisites

- Google Chrome must remain open (it can be minimized, but not closed)  
- No "Not Secure" warning must be displayed (if Chrome shows "Not Secure", the extension will not work because bypassing this is not possible — please resolve this issue beforehand)  
- The option "Ask where to save each file before downloading" must be disabled (since everything is automated, it should not wait for manual file save selection)  
- An account with Backup / Restore permissions must exist (if you plan to use a different account instead of your main account, it is recommended not to use Chrome simultaneously for PAM access with your main account to avoid cookie conflicts. However, using your own account will still work without issues.)

---

## Required Information for Setup

- System URL (any internal link is acceptable — login page, a specific page, or even the system IP address. The correct base URL will be extracted automatically.)  
- A valid username with the required permissions  
- The user’s password  
- A 16-character Secret (you can enter it manually or generate it randomly with the button. No need to copy it — it will be included in the information file.)  
- Backup execution schedule  

The operation repeats every 24 hours.

---

## Installation Steps

### 1. Download

Download from:

https://github.com/sMohammad14/Wallix-Bastion-Auto-Backup/archive/refs/heads/main.zip

Then extract the ZIP file.

### 2. Chrome Settings

Open Chrome settings and search for:  
"Ask where to save each file before downloading"  
Then disable it.

### 3. Install the Extension

1. Go to `chrome://extensions/`  
2. Enable Developer mode  
3. Click Load unpacked  
4. Select the extracted folder  

Important:  
This folder must remain on your system because the extension depends on these files at runtime. Before using Load unpacked, move the folder to a permanent location on your system, then select that location.

### 4. Activation

- Pin the extension (click the puzzle icon next to the Chrome address bar)  
- Complete the form  
- Click Schedule  
- Do not close Chrome  

---

## Important Notes

This entire process can be performed in a simpler way using Maintenance access (which you likely do not have). If you do have such access, you do not need this extension.  

Keep in mind that if you have Maintenance access, you must download backup files from the system and store them externally. Otherwise, if the system is damaged, both the system and its backup files will be lost.

---

## Roadmap

- Dynamic icon to display Active / Inactive status ✅ Completed  
- Perform Logout before closing the browser  
  (Currently logout occurs when cookies expire. This usually runs at night when no user is present and the system is locked.)  
- Improved formatting and layout of the backup information text file ✅ Completed  

---

## Screenshots

![Auto Backup Screenshot](screenshots/autobck%20(2).png)

![Auto Backup Screenshot](screenshots/autobck%20(1).png)

![Auto Backup Screenshot](screenshots/autobck%20(3).png)


# Расширение Wallix Bastion Auto Backup

![Версия](https://img.shields.io/badge/version-1.0-blue)
![Платформа](https://img.shields.io/badge/platform-Chrome_Extension-green)
![Лицензия](https://img.shields.io/badge/license-Private-lightgrey)

## Введение

Это расширение является автоматическим инструментом для создания резервных копий настроек Wallix Bastion через веб-интерфейс, без необходимости доступа к API или Maintenance.

Расширение имитирует процесс ручного создания резервной копии и работает, пока открыт Google Chrome.

---

## Функции

- Автоматическое выполнение всех шагов для создания резервного файла без вмешательства пользователя  
- Требуется точно такой же уровень доступа, который необходим пользователю для ручного резервного копирования  
- Совместимо со старыми версиями (для ввода Secret, необходимого при создании резервной копии и требуемого при восстановлении, допускается только 16 символов, так как старые версии принимают только 16 символов)  
- Не требует API (документация API не поддерживала эту функцию, поэтому я имитировал поведение пользователя — это привело к интересным находкам, задокументированным в разделе issues репозитория)

---

## Как это работает?

После настройки расписания расширение ведет себя как пользователь:

1. Открывает новую вкладку (не может работать в фоновом режиме, необходимо открыть новую вкладку)  
2. При необходимости выполняет вход (cookies могут быть ещё действительны, поэтому вход может не потребоваться)  
3. Переходит в раздел Backup  
4. Вводит Secret  
5. Находит и нажимает Backup  
6. Ожидает завершения процесса  
7. Загружает файл резервной копии, когда он готов  
8. Создает и загружает текстовый файл с названием файла резервной копии, паролем (Secret) и датой начала резервного копирования  
9. Не выходит из системы (это будет исправлено в будущем обновлении, но это не критично, так как система заблокирована и cookies истекают через некоторое время, предотвращая несанкционированный доступ)  
10. Закрывает вкладку  

---

## Предварительные требования

- Google Chrome должен оставаться открытым (можно свернуть, но нельзя закрывать)  
- Сообщение "Not Secure" не должно отображаться (если Chrome показывает "Not Secure", расширение не сможет работать, так как обойти это невозможно — пожалуйста, решите эту проблему заранее)  
- Опция "Спрашивать, куда сохранять каждый файл перед загрузкой" должна быть отключена (так как все процессы автоматизированы, не должно быть ожидания выбора места сохранения)  
- Должен существовать аккаунт с правами Backup / Restore (если вы планируете использовать другой аккаунт вместо основного, рекомендуется не использовать Chrome одновременно с вашим основным аккаунтом для доступа к PAM, чтобы избежать конфликтов cookies. Однако использование вашего аккаунта работает без проблем.)

---

## Информация, необходимая для настройки

- URL системы (любая внутренняя ссылка подходит — страница входа, конкретная страница или IP-адрес системы. Правильный базовый URL будет извлечен автоматически)  
- Действительное имя пользователя с необходимыми правами  
- Пароль пользователя  
- 16-символьный Secret (можно ввести вручную или сгенерировать случайно с помощью кнопки. Копировать не нужно — он будет включен в информационный файл)  
- Расписание выполнения резервного копирования  

Операция повторяется каждые 24 часа.

---

## Шаги установки

### 1. Загрузка

Скачать с:

https://github.com/sMohammad14/Wallix-Bastion-Auto-Backup/archive/refs/heads/main.zip

Затем распаковать ZIP-файл.

### 2. Настройки Chrome

Откройте настройки Chrome и найдите:  
"Ask where to save each file before downloading"  
Затем отключите эту опцию.

### 3. Установка расширения

1. Перейдите в `chrome://extensions/`  
2. Включите режим разработчика (Developer mode)  
3. Нажмите Load unpacked  
4. Выберите распакованную папку  

Важно:  
Эта папка должна оставаться на вашем компьютере, так как расширение зависит от этих файлов во время работы. Перед использованием Load unpacked переместите папку в постоянное место, затем выберите это расположение.

### 4. Активация

- Закрепите расширение (кликните на значок пазла рядом с адресной строкой Chrome)  
- Заполните форму  
- Нажмите Schedule  
- Не закрывайте Chrome  

---

## Важные заметки

Весь этот процесс можно выполнить проще, используя доступ Maintenance (который, вероятно, у вас отсутствует). Если у вас есть такой доступ, это расширение не требуется.  

Помните: если у вас есть доступ Maintenance, необходимо загрузить файлы резервной копии с системы и сохранить их отдельно. В противном случае, если система будет повреждена, будут потеряны и система, и резервные файлы.

---

## План развития

- Динамический значок для отображения состояния Активно / Неактивно ✅ Выполнено  
- Выполнять Logout перед закрытием браузера  
  (В настоящее время выход выполняется при истечении cookies. Обычно это происходит ночью, когда пользователя нет, и система заблокирована.)  
- Улучшение форматирования и макета текстового файла с информацией о резервной копии ✅ Выполнено  

---

## Скриншоты

![Auto Backup Screenshot](screenshots/autobck%20(2).png)

![Auto Backup Screenshot](screenshots/autobck%20(1).png)

![Auto Backup Screenshot](screenshots/autobck%20(3).png)



# Wallix Bastion 自动备份扩展

![版本](https://img.shields.io/badge/version-1.0-blue)
![平台](https://img.shields.io/badge/platform-Chrome_Extension-green)
![许可证](https://img.shields.io/badge/license-Private-lightgrey)

## 介绍

该扩展是一个自动工具，用于通过网页界面创建 Wallix Bastion 设置的备份，无需 API 或 Maintenance 权限。

扩展模拟手动备份过程，并在 Google Chrome 打开时持续运行。

---

## 功能

- 自动执行创建备份文件的所有步骤，无需用户干预  
- 需要与用户执行备份操作时相同的访问权限  
- 兼容旧版本（用于输入备份创建时需要的 Secret，并在恢复时再次使用，只能输入 16 个字符，因为旧版本只接受 16 个字符）  
- 不需要 API（API 文档不支持此功能，因此我模拟了用户行为——这也导致了一些有趣的发现，已在仓库问题中记录）

---

## 它是如何工作的？

在设置好计划后，扩展会像用户一样操作：

1. 打开一个新标签页（不能在后台运行，必须打开新标签页）  
2. 如果需要，进行登录（cookies 可能仍然有效，因此可能不需要登录）  
3. 转到 Backup 部分  
4. 输入 Secret  
5. 找到并点击 Backup  
6. 等待过程完成  
7. 文件准备好后下载备份文件  
8. 创建并下载一个文本文件，其中包含备份文件名、密码（Secret）和备份开始日期  
9. 不会退出（此问题将在未来更新中修复，但不是严重问题，因为系统被锁定且 cookies 会过期，防止未经授权的访问）  
10. 关闭标签页  

---

## 前提条件

- Google Chrome 必须保持打开（可以最小化，但不能关闭）  
- 不显示 “Not Secure” 警告（如果 Chrome 显示 “Not Secure”，扩展将无法工作，因为无法绕过此问题，请提前解决）  
- 必须禁用“下载前询问每个文件的保存位置”选项（因为所有操作都是自动的，不应等待手动选择保存位置）  
- 必须有具有 Backup / Restore 权限的账户（如果计划使用除主账户外的其他账户，建议不要同时用 Chrome 访问 PAM，以避免 cookie 冲突。不过使用自己的账户也能正常工作）

---

## 设置所需信息

- 系统 URL（任何内部链接都可以——登录页面、特定页面或系统 IP，正确的基础 URL 会自动提取）  
- 具有所需权限的有效用户名  
- 用户密码  
- 16 个字符的 Secret（可以手动输入，也可以通过按钮随机生成，无需复制，它会包含在信息文件中）  
- 备份执行计划  

操作每 24 小时重复一次。

---

## 安装步骤

### 1. 下载

下载地址：

https://github.com/sMohammad14/Wallix-Bastion-Auto-Backup/archive/refs/heads/main.zip

然后解压 ZIP 文件。

### 2. Chrome 设置

打开 Chrome 设置并搜索：  
"Ask where to save each file before downloading"  
然后禁用该选项。

### 3. 安装扩展

1. 打开 `chrome://extensions/`  
2. 启用开发者模式 (Developer mode)  
3. 点击 Load unpacked  
4. 选择解压后的文件夹  

重要提示：  
此文件夹必须保留在系统中，因为扩展在运行时依赖这些文件。在使用 Load unpacked 之前，将文件夹移动到永久位置，然后选择该位置。

### 4. 激活

- 固定扩展（点击 Chrome 地址栏旁的拼图图标）  
- 填写表单  
- 点击 Schedule  
- 不要关闭 Chrome  

---

## 注意事项

如果您拥有 Maintenance 权限（可能没有），可以更简单地完成此过程。如果有，则不需要此扩展。  

请注意，如果您有 Maintenance 权限，必须从系统中下载备份文件并保存，否则如果系统损坏，系统和备份文件都将丢失。

---

## 发展计划

- 动态图标显示启用 / 禁用状态 ✅ 已完成  
- 在关闭浏览器前执行 Logout  
  （当前 Logout 通过 cookies 过期实现。通常在夜间用户不在时执行，系统处于锁定状态。）  
- 改进备份信息文本文件的布局和格式 ✅ 已完成  

---

## 截图

![Auto Backup Screenshot](screenshots/autobck%20(2).png)

![Auto Backup Screenshot](screenshots/autobck%20(1).png)

![Auto Backup Screenshot](screenshots/autobck%20(3).png)

