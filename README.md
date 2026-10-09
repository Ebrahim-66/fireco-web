# FIRECO website — English / العربية

Complete static website for Fireco Technical Services LLC. English and Arabic
pages, original logo, photographs and company profile are included.
No installation or build command is needed.

## Upload to GitHub

1. Extract `fireco-github-ready.zip` on your computer.
2. Open your GitHub repository and choose **Add file → Upload files**.
3. Upload all the extracted files and the `ar` folder, keeping their names and
   folder structure. Place `index.html` directly at the repository root.
4. Save the upload with a commit message, such as `Add FIRECO website`.

Upload the extracted contents rather than the ZIP file. Do not place them inside
another `website` or `dist` folder if the repository root is your publishing source.

[Official GitHub upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## Website files

- `index.html`: English homepage
- `ar/index.html`: Arabic homepage with right-to-left layout
- Six system/service pages in each language
- `site.css` and `site.js`: shared styling, animations, filters and enquiry form
- Original FIRECO logo, photographs and `FIRECO.pdf` company profile
- `robots.txt` and `sitemap.xml`: search files for the production domain
- `.nojekyll`: allows the files to be used directly with GitHub Pages

The website includes all 71 client/project references. It initially displays
nine, with a Show all button and sector filters. No supplier price list or
product prices are included.

## Publishing

Upload to GitHub stores the website files. To publish with GitHub Pages, follow
the [official setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
and use the repository root as the publishing folder.
You can also give these same website files to your existing hosting company.

Canonical URLs, language alternates, structured data, robots.txt and sitemap.xml
are prepared for `https://firecots.com/`. If you publish permanently on a different
domain, update these URLs consistently. No custom domain is connected by this package.

## Enquiries

The enquiry form opens the visitor's email application with the project details
addressed to `info@firecots.com`. The visitor reviews the message and presses Send.
It does not send automatically through a server.

## تعليمات مختصرة

فك ضغط الملف، ثم ارفع جميع الملفات ومجلد `ar` إلى مستودع GitHub مع الحفاظ على
ترتيب المجلدات. يجب أن يكون ملف `index.html` في المجلد الرئيسي للمستودع.
الموقع متوفر بالإنجليزية والعربية ولا يحتاج إلى أمر تثبيت أو بناء.

يفتح نموذج الاستفسار تطبيق البريد الإلكتروني برسالة موجهة إلى
`info@firecots.com`، ويراجع الزائر الرسالة ثم يرسلها بنفسه.
