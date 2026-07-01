Below is the complete content for your `design.md`, followed by the detailed Stitch prompt. Save the first block as:

```text
design.md
```

---

## `design.md`

````md
# LAMBOLO Landing Page Design System

## 1. Project Overview

Create a single-page Turkish landing page for **LAMBOLO**, a playful children’s product brand.

LAMBOLO creates character-based accessories that attach over existing wall light switches. Children interact with a moving part of the character, such as Kurbi’s tongue, to physically operate the room’s existing light switch.

The website is currently a:

- Coming soon landing page
- Product concept showcase
- Early demand validation page
- Waitlist / preorder-interest collection page

The website must not look like a traditional electrical product website. It should feel like a modern children’s lifestyle, toy, and room-accessory brand.

---

## 2. Brand Identity

### Brand Name

LAMBOLO

### Main Slogan

Dokun. Oyna. Aydınlat.

### Social Media

@hellolambolo

### Product Family

Anahtar Serisi

### Initial Characters

- Kurbi — Meraklı Kurbağa
- Pandi — Neşeli Panda
- Rexi — Cesur Dinozor
- Leo — Neşeli Aslan
- Miu — Tatlı Kedi
- Uni — Rüya Arkadaşı

---

## 3. Brand Personality

LAMBOLO should feel:

- Cheerful
- Playful
- Warm
- Curious
- Trustworthy
- Imaginative
- Modern
- Child-friendly
- Parent-approved
- Colorful without becoming visually chaotic

LAMBOLO should not feel:

- Technical
- Industrial
- Cheap
- Overly childish
- Like a kindergarten worksheet
- Like an electrical hardware company
- Like a generic dropshipping store

---

## 4. Brand Voice

Use short, friendly, clear Turkish sentences.

The language should primarily communicate with parents, while remaining fun and understandable for children.

### Voice Examples

- Dünyanın en eğlenceli ışık arkadaşları!
- Dokun. Oyna. Aydınlat.
- Işığı oyun haline getir.
- Sıradan anahtarlar, sevimli arkadaşlara dönüşsün.
- İlk üretimden haberdar ol.
- Çocukların ışık rutini artık çok daha eğlenceli.
- Kurbi ve arkadaşlarıyla tanış.

Avoid overly technical language.

---

## 5. Logo Rules

Use the official uploaded LAMBOLO logo.

Do not recreate, redraw, reinterpret, or replace the logo typography.

The logo includes:

- Yellow
- Green
- Blue
- Pink
- A power-button symbol inside one of the letters
- The slogan below the main wordmark

### Logo Placement

Header:
- Desktop width: approximately 180–210 px
- Mobile width: approximately 140–160 px

Footer:
- Approximately 170–190 px

Always leave generous clear space around the logo.

Use the full-color logo on white or blue backgrounds.

---

## 6. Color Palette

### Brand Yellow

```css
--brand-yellow: #FFC900;
````

Usage:

* Hero background
* Decorative elements
* Small badges
* Highlight icons

### Brand Blue

```css
--brand-blue: #087CF0;
--brand-blue-dark: #0567CE;
--footer-blue: #0069D8;
```

Usage:

* Waitlist form card
* “Neden Lambolo?” section
* Footer
* Secondary highlights
* Links

### Brand Pink

```css
--brand-pink: #F53667;
--brand-pink-dark: #DD2454;
--brand-pink-soft: #FFE5ED;
```

Usage:

* Main call-to-action buttons
* Coming soon section
* Character accents
* Decorative elements

### Brand Green

```css
--brand-green: #41B84E;
--brand-green-dark: #24943A;
--brand-green-soft: #E7F7E9;
```

Usage:

* Kurbi
* Success states
* Character tags
* Playful accents

### Supporting Colors

```css
--brand-orange: #FF9D0A;
--brand-purple-soft: #F0E8FF;
--cream-background: #FFF9EF;
--soft-blue-background: #F1F8FF;
--white: #FFFFFF;
```

### Text Colors

```css
--navy-heading: #10346A;
--body-text: #26374F;
--muted-text: #66758B;
--soft-border: #E7EDF4;
```

Do not use black as the main text color.

---

## 7. Typography

### Main Display Font

Use:

```text
Fredoka
```

Weights:

* 600
* 700

Used for:

* Hero headline
* Section titles
* Character names
* Large buttons
* Important labels

### Body Font

Use:

```text
Nunito Sans
```

Weights:

* 400
* 500
* 600
* 700

Used for:

* Paragraphs
* Navigation
* Form fields
* Supporting text
* Footer links

### Desktop Typography

Hero headline:

```css
font-size: 62px;
line-height: 1.02;
font-weight: 700;
```

Section headline:

```css
font-size: 38px;
line-height: 1.1;
font-weight: 700;
```

Card title:

```css
font-size: 20px;
font-weight: 700;
```

Body:

```css
font-size: 16px;
line-height: 1.55;
```

Large body:

```css
font-size: 18px;
line-height: 1.55;
```

Buttons:

```css
font-size: 16px;
font-weight: 700;
```

### Mobile Typography

Hero headline:

```css
font-size: 42px;
line-height: 1.05;
```

Section title:

```css
font-size: 30px;
```

Body:

```css
font-size: 15px;
```

---

## 8. Global Layout

### Desktop Canvas

Target design width:

```text
1440 px
```

Approximate total page height:

```text
2500–2750 px
```

### Content Container

```css
max-width: 1240px;
margin: 0 auto;
padding-left: 24px;
padding-right: 24px;
```

Desktop side padding can increase to 48–64 px.

### Spacing System

Use an 8 px spacing system:

* 8 px
* 16 px
* 24 px
* 32 px
* 48 px
* 64 px
* 80 px
* 96 px

### Border Radius

Inputs:

```css
border-radius: 12px;
```

Buttons:

```css
border-radius: 999px;
```

Product cards:

```css
border-radius: 22px;
```

Large sections:

```css
border-radius: 30px;
```

### Shadows

Use soft blue/navy-tinted shadows:

```css
box-shadow: 0 12px 35px rgba(16, 52, 106, 0.10);
```

Avoid heavy or dark black shadows.

---

# 9. Landing Page Structure

## 9.1 Header

Height:

```text
80 px desktop
70 px mobile
```

Background:

```text
White
```

Header layout:

* Logo on the left
* Navigation in the center
* CTA button on the right

### Navigation Items

* Ürünler
* Karakterler
* Nasıl Çalışır?
* Neden Lambolo?
* SSS

### Header CTA

```text
Bekleme Listesine Katıl
```

CTA style:

* Pink background
* White text
* Rounded pill
* Small right arrow
* Height approximately 48 px

Header behavior:

* Sticky
* White background
* Very subtle shadow
* Smooth-scroll navigation

Mobile:

* Logo on left
* Hamburger menu on right
* CTA inside mobile menu

---

## 9.2 Hero Section

Hero background:

```text
Bright brand yellow
```

Approximate desktop height:

```text
620–670 px
```

Use small decorative doodles:

* Stars
* Lightning
* Curved lines
* Circles
* Small crosses

Do not place decorative graphics directly behind important text.

### Hero Desktop Grid

Use three columns:

```text
Left content: 38%
Center product: 30%
Right form: 32%
```

### Hero Left Content

Main headline:

```text
Dünyanın en
eğlenceli ışık
arkadaşları!
```

Color treatment:

* “Dünyanın en” — navy
* “eğlenceli ışık” — pink with white outline
* “arkadaşları!” — blue with white outline

Slogan inside a white rounded label:

```text
Dokun. Oyna. Aydınlat.
```

Colors:

* Dokun — yellow/orange
* Oyna — green
* Aydınlat — blue

Supporting paragraph:

```text
Lambolo, anahtarların üstüne takılan
sevimli karakter aksesuarlarıyla
ışığı bir oyun haline getiriyor.
```

Buttons:

Primary:

```text
Bekleme Listesine Katıl
```

Secondary:

```text
Nasıl Çalışır?
```

Primary button:

* Pink
* White text
* Rounded pill

Secondary button:

* White
* Navy text
* Small yellow play icon
* Rounded pill

---

## 9.3 Hero Product Visual

Show Kurbi installed over a common Turkish wall rocker switch.

Important visual rules:

* Kurbi is attached over the existing switch.
* The underlying switch must remain visible enough to understand how the product works.
* Kurbi itself must not appear to be a lamp.
* Kurbi does not emit light.
* Kurbi’s long pink tongue is the control.
* The tongue physically presses or moves the existing wall switch.
* The tongue must align realistically with the switch.
* Kurbi should have large eyes, pink cheeks, a friendly smile, and soft rounded forms.
* Use a premium 3D toy-like render.
* Use realistic soft lighting and shadows.

Add a blue circular callout:

```text
ANAHTARIN
ÜSTÜNE TAK,
IŞIĞI OYNA!
```

Add a small arrow pointing from the callout toward the tongue and switch.

---

## 9.4 Hero Waitlist Form

Position the form on the right side of the yellow hero section.

Form card background:

```text
Brand blue
```

Card radius:

```text
20–24 px
```

Heading:

```text
İlk üretim için
bekleme listesine katıl!
```

Description:

```text
Lansmana özel avantajlardan
ilk sen haberdar ol.
```

Fields:

* Ad Soyad
* E-posta Adresi
* Telefon (Opsiyonel)

Age field:

```text
Çocuğunuzun yaşı (Opsiyonel)
```

Age buttons:

* 2–4
* 5–7
* 8+

Main form CTA:

```text
Listeye Katıl
```

CTA styling:

* Pink background
* White text
* Paper plane icon

Privacy helper:

```text
Bilgilerin güvende. Spam yok.
```

Use a lock icon.

Form must support:

* Default state
* Focus state
* Validation error
* Loading state
* Successful submission state

Success message:

```text
Harika! Lambolo’nun ilk haberlerini sana göndereceğiz.
```

---

## 9.5 Character Product Section

Background:

```text
White
```

Section title:

```text
Işıkla Oynayan 6 Sevimli Karakter!
```

Use small yellow decorative lines on both sides of the title.

Desktop:

* Six cards in a single row

Tablet:

* Three cards per row

Mobile:

* Horizontal swipe carousel
* Display approximately 1.25 cards in viewport

### Product Cards

Each card contains:

* Pastel background
* Character attached to the same wall-switch model
* Character name
* Short character description
* “Yakında!” tag

Characters:

### Kurbi

```text
Kurbi
Meraklı Kurbağa
```

Color:

```text
Green
```

### Pandi

```text
Pandi
Neşeli Panda
```

Color:

```text
Blue
```

### Rexi

```text
Rexi
Cesur Dinozor
```

Color:

```text
Green
```

### Leo

```text
Leo
Neşeli Aslan
```

Color:

```text
Orange
```

### Miu

```text
Miu
Tatlı Kedi
```

Color:

```text
Pink
```

### Uni

```text
Uni
Rüya Arkadaşı
```

Color:

```text
Purple
```

Product consistency:

* Same switch plate
* Same visual scale
* Same angle
* Same lighting
* Same 3D quality
* Same card proportions

Card hover:

* Move upward 5 px
* Increase shadow slightly
* No rotation

---

## 9.6 Why Lambolo Section

Section background:

```text
Brand blue
```

Use a soft wave shape at the top and bottom.

Heading:

```text
Neden Lambolo?
```

Heading color:

```text
White
```

Use four white benefit cards.

### Benefit 1

Title:

```text
Işığı Eğlenceli Hale Getirir
```

Description:

```text
Anahtara dokunmak artık küçük bir oyuna dönüşür.
```

Icon:

```text
Yellow smile icon
```

### Benefit 2

Title:

```text
Çocuk Dostu Yaklaşım
```

Description:

```text
Yuvarlak hatlı ve sevimli karakterler çocuk odaları düşünülerek tasarlanır.
```

Icon:

```text
Green shield icon
```

### Benefit 3

Title:

```text
Odaları Renklendirir
```

Description:

```text
Sıradan anahtarlar neşeli oda detaylarına dönüşür.
```

Icon:

```text
Pink heart icon
```

### Benefit 4

Title:

```text
Farklı Bir Hediye Fikri
```

Description:

```text
Çocuk odaları ve özel günler için dikkat çekici bir alternatif.
```

Icon:

```text
Blue gift icon
```

Do not claim:

* %100 safe
* BPA-free
* Non-toxic
* Universal compatibility
* Certified materials

These claims must only be used after testing and verification.

---

## 9.7 How It Works Section

Background:

```text
Warm cream
```

Heading:

```text
Nasıl Çalışır?
```

Use four horizontal steps on desktop.

### Step 1

Number:

```text
1
```

Title:

```text
Tak
```

Description:

```text
Karakteri uyumlu anahtarın üstüne yerleştir.
```

Visual:

* Hand attaching Kurbi over the switch

### Step 2

Number:

```text
2
```

Title:

```text
Oyna
```

Description:

```text
Kurbi’nin diline dokun, anahtarı aç veya kapat.
```

Visual:

* Finger moving Kurbi’s tongue

### Step 3

Number:

```text
3
```

Title:

```text
Aydınlat
```

Description:

```text
Mevcut anahtar hareket eder ve odanın ışığı değişir.
```

Visual:

* Lit bulb illustration

### Step 4

Number:

```text
4
```

Title:

```text
Mutlu Ol
```

Description:

```text
Günlük bir alışkanlık eğlenceli bir ana dönüşür.
```

Visual:

* Happy child celebrating

Use colorful arrows between the steps.

Mobile layout:

* Vertical timeline
* Steps stacked
* Connecting line between the numbers

---

## 9.8 Main Coming Soon Section

Background:

```text
Brand pink
```

Use a full-width section.

Small badge:

```text
ÇOK YAKINDA!
```

Main heading:

```text
İlk üretim için
bekleme listesine katıl!
```

Description:

```text
Sınırlı ilk üretim, gelişim haberleri ve
lansmana özel fırsatlardan haberdar ol.
```

Show four small benefit icons:

* Erken erişim
* Lansman fırsatları
* Ürün gelişim haberleri
* Sürprizler

Place a compact white form on the right.

Form fields:

* Ad Soyad
* E-posta Adresi

Button:

```text
Listeye Katıl
```

Do not show fake:

* Customer numbers
* Order numbers
* Discounts
* Free shipping promises
* Production quantities

---

## 9.9 Information Section

Background:

```text
White
```

Heading:

```text
Merak Ettikleriniz
```

Use three horizontal items.

### Item 1

Title:

```text
Kolay Kurulum Hedefi
```

Description:

```text
Elektrik bağlantısına müdahale etmeden, uyumlu anahtarın üzerine takılacak şekilde geliştiriliyor.
```

Icon:

```text
Blue wrench
```

### Item 2

Title:

```text
Çocuk Odaları İçin Tasarım
```

Description:

```text
Sevimli karakterler, yuvarlak formlar ve kolay anlaşılır kullanım.
```

Icon:

```text
Green shield
```

### Item 3

Title:

```text
Odaya Neşe Katar
```

Description:

```text
Sıradan anahtar alanını eğlenceli bir karakter detayına dönüştürür.
```

Icon:

```text
Pink heart
```

---

## 9.10 Footer

Background:

```text
Brand blue
```

Footer layout:

Four columns.

### Column 1

* Lambolo logo
* Slogan
* Short brand description
* Social media icons

Description:

```text
Lambolo, sıradan ışık anahtarlarını çocuklar için eğlenceli karakter deneyimlerine dönüştürmek üzere geliştiriliyor.
```

### Column 2

Heading:

```text
Keşfet
```

Links:

* Ürünler
* Karakterler
* Nasıl Çalışır?
* Neden Lambolo?
* SSS

### Column 3

Heading:

```text
Destek
```

Links:

* İletişim
* Gizlilik Politikası
* KVKK Aydınlatma Metni
* Kullanım Koşulları

### Column 4

Heading:

```text
Haberleri Kaçırma!
```

Text:

```text
Lansman ve gelişmelerden ilk sen haberdar ol.
```

Email input:

```text
E-posta adresiniz
```

Button:

```text
Abone Ol
```

Social handle:

```text
@hellolambolo
```

Email:

```text
info@lambolo.com
```

Copyright:

```text
© 2026 Lambolo. Tüm hakları saklıdır.
```

Footer note:

```text
Türkiye’de tasarlanıyor, sevgiyle geliştiriliyor.
```

---

# 10. Buttons

## Primary Button

```css
background: #F53667;
color: #FFFFFF;
height: 50px;
padding: 0 24px;
border-radius: 999px;
font-weight: 700;
```

Hover:

```css
transform: translateY(-2px);
background: #DD2454;
box-shadow: 0 10px 24px rgba(245, 54, 103, 0.25);
```

## Secondary Button

```css
background: #FFFFFF;
color: #10346A;
border: 1.5px solid rgba(16, 52, 106, 0.20);
height: 50px;
padding: 0 24px;
border-radius: 999px;
```

---

# 11. Form Controls

Input height:

```text
50 px
```

Input radius:

```text
12 px
```

Input border:

```text
1 px solid #E7EDF4
```

Focus state:

```css
border-color: #087CF0;
box-shadow: 0 0 0 4px rgba(8, 124, 240, 0.14);
```

Form fields must have accessible labels.

Minimum touch target:

```text
44 × 44 px
```

---

# 12. Responsive Requirements

## Desktop: 1200 px+

* Three-column hero
* Six character cards in one row
* Four benefits in one row
* Four how-it-works steps in one row

## Tablet: 768–1199 px

* Hero becomes two columns
* Waitlist form moves to a full-width row below
* Character cards become 3 × 2
* Benefit cards become 2 × 2
* Steps become 2 × 2

## Mobile: Below 768 px

Order:

1. Header
2. Hero heading
3. Kurbi product visual
4. CTA buttons
5. Waitlist form
6. Character carousel
7. Why Lambolo
8. How it works
9. Coming soon form
10. Information cards
11. Footer

Mobile requirements:

* Full-width CTA buttons
* Single-column forms
* No tiny copy
* Horizontal character carousel
* No content overflow
* Doodles must not sit behind text
* Product image must remain fully visible
* Header becomes hamburger navigation

---

# 13. Interactions

* Header navigation smoothly scrolls to sections.
* All pink waitlist buttons scroll to the nearest signup form.
* Character cards have subtle hover states.
* Age selector supports only one selected option.
* Form supports validation and success messages.
* Use subtle entrance animations.
* Respect prefers-reduced-motion.
* Do not use excessive bouncing or spinning animations.

Suggested analytics events:

```text
hero_waitlist_click
how_it_works_click
character_card_view
waitlist_form_start
waitlist_submit_success
waitlist_submit_error
```

---

# 14. Asset Requirements

Use:

* Official Lambolo logo
* Selected landing-page screenshot as visual reference
* Transparent PNG or WebP product renders
* Kurbi hero render
* Six consistent character renders
* Hand interaction image
* Bulb illustration
* Happy child image or illustration

Important:

* Do not use the full screenshot as a background image.
* Recreate the design using real editable components.
* Product images must not contain text.
* Maintain the same switch model and scale across character images.
* Compress all web assets.
* Use WebP or AVIF for production.

---

# 15. Product Accuracy Rules

The design must clearly communicate:

* Lambolo attaches over an existing wall light switch.
* Lambolo is not an electrical lamp.
* Lambolo itself does not generate light.
* The character’s moving part operates the existing switch.
* Kurbi’s tongue is the switch control.
* The original wall switch remains underneath the product.

---

# 16. Validation and Honesty Rules

Until the physical product is tested:

Do not claim:

* Universal compatibility
* Certified safety
* Specific material composition
* BPA-free
* Non-toxic
* Free shipping
* Exact delivery dates
* A confirmed discount
* Existing customer counts
* Existing order counts

Use:

* Ön talep
* Bekleme listesi
* Çok yakında
* Geliştiriliyor
* İlk üretimden haberdar ol

---

# 17. Final Acceptance Checklist

The design is accepted when:

* The official logo is used correctly.
* The layout closely follows the supplied reference.
* The hero form is visible above the fold.
* Kurbi is visibly mounted over a switch.
* Kurbi’s tongue clearly operates the switch.
* All six characters appear consistently.
* The page is responsive.
* The Turkish text is accurate.
* The design looks premium and launch-ready.
* The result does not look like a generic template.
* No unsupported marketing claims are included.

````

---

# Detailed Stitch Prompt

Upload these two files to Stitch before submitting the prompt:

1. The official Lambolo logo.
2. The selected landing-page screenshot.

Then use this prompt:

```text
Create a complete, pixel-accurate, responsive single-page landing page for the Turkish children’s product brand LAMBOLO.

Use the uploaded landing-page screenshot as the primary visual reference and recreate its overall composition, visual hierarchy, spacing, section order, color blocking, card proportions, and playful visual style.

Use the uploaded Lambolo logo as the official logo asset. Do not redraw, replace, reinterpret, or approximate the logo.

Read and follow the attached design.md as the complete design system and product specification.

PROJECT PURPOSE

LAMBOLO creates playful character accessories that attach over existing wall light switches.

The first product family is called:

“Anahtar Serisi”

The primary launch character is Kurbi, a cute green frog.

Kurbi sits over the existing wall rocker switch. Kurbi’s long pink tongue is the physical moving control that the child touches to move the existing switch and turn the room light on or off.

LAMBOLO is not a lamp.
LAMBOLO does not emit light.
The product operates the room’s existing wall light switch.

The landing page is currently intended to:

- Introduce the product concept
- Present the first six characters
- Explain how the product works
- Collect early interest
- Collect waitlist registrations
- Validate demand before production

The page language must be Turkish.

DESIGN TARGET

Create a desktop design at 1440 px width.

Approximate page height:

2500–2750 px.

Also generate a fully responsive mobile version at approximately 390 px width.

The page must look like a polished, modern children’s startup brand and not like a generic template.

Use:

- Large colorful sections
- Rounded UI
- Premium 3D product visuals
- Playful doodles
- Clean white space
- Strong conversion hierarchy
- Friendly typography
- Soft shadows
- Clear waitlist forms

Avoid:

- Generic SaaS styling
- Dark themes
- Glassmorphism
- Industrial electrical-product styling
- Excessive gradients
- Excessive childish illustrations
- Overcrowded layouts
- Tiny typography
- Fake social proof

TYPOGRAPHY

Use Fredoka for:

- Hero headings
- Section headings
- Character names
- Important buttons

Use Nunito Sans for:

- Navigation
- Body copy
- Form text
- Footer content
- Small labels

Use navy-colored headings instead of black.

COLORS

Use the official Lambolo color palette:

Yellow:
#FFC900

Blue:
#087CF0

Dark blue:
#0567CE

Footer blue:
#0069D8

Pink:
#F53667

Dark pink:
#DD2454

Green:
#41B84E

Orange:
#FF9D0A

Navy heading:
#10346A

Body:
#26374F

Cream:
#FFF9EF

White:
#FFFFFF

PAGE STRUCTURE

1. STICKY HEADER

Create a white sticky header approximately 80 px tall.

Left:
Official Lambolo logo.

Center navigation:

- Ürünler
- Karakterler
- Nasıl Çalışır?
- Neden Lambolo?
- SSS

Right:

Pink pill button:
“Bekleme Listesine Katıl”

Use a small arrow icon.

The header should have a very subtle shadow.

On mobile, use a hamburger navigation.

2. YELLOW HERO SECTION

Create a full-width yellow hero section approximately 620–670 px tall.

Use a three-column desktop layout:

Left:
Large headline and CTAs.

Center:
Kurbi product render.

Right:
Blue waitlist form.

LEFT HERO COPY

Large headline:

“Dünyanın en
eğlenceli ışık
arkadaşları!”

Use the following color treatment:

“Dünyanın en” in navy.

“eğlenceli ışık” in bright pink with a thick white outline or white backing shape.

“arkadaşları!” in blue with a thick white outline or white backing shape.

The display headline should be bold, rounded, highly readable, and closely match the reference screenshot.

Under the heading, display the slogan inside a white rounded label:

“Dokun. Oyna. Aydınlat.”

Use:
Dokun = yellow/orange
Oyna = green
Aydınlat = blue

Supporting paragraph:

“Lambolo, anahtarların üstüne takılan
sevimli karakter aksesuarlarıyla
ışığı bir oyun haline getiriyor.”

Add two pill buttons:

Primary pink button:
“Bekleme Listesine Katıl”

Secondary white button:
“Nasıl Çalışır?”

Add a small yellow play-circle icon to the secondary button.

Add restrained playful decorations around the hero:

- Yellow lightning
- Blue curved lines
- Pink crosses
- Small white stars
- Green circular lines

Do not allow decorative graphics to interfere with readability.

CENTER HERO PRODUCT

Create a premium 3D render of Kurbi.

Kurbi must:

- Be a cute bright green frog
- Have large friendly eyes
- Have pink cheeks
- Sit on top of a white Turkish-style wall rocker switch
- Use its long pink tongue as the switch control
- Clearly cover the upper portion of the switch
- Clearly align its tongue with the rocker switch
- Look physically attached to the switch
- Have a soft realistic shadow

Do not show Kurbi producing light.

The room light is controlled by the underlying wall switch.

Place a blue circular callout beside the product:

“ANAHTARIN
ÜSTÜNE TAK,
IŞIĞI OYNA!”

Use a small arrow from this callout toward the tongue and switch.

RIGHT HERO WAITLIST FORM

Create a tall blue rounded form card.

Heading:

“İlk üretim için
bekleme listesine katıl!”

Description:

“Lansmana özel avantajlardan
ilk sen haberdar ol.”

Inputs:

- Ad Soyad
- E-posta Adresi
- Telefon (Opsiyonel)

Add a segmented age selector.

Label:

“Çocuğunuzun yaşı (Opsiyonel)”

Options:

- 2–4
- 5–7
- 8+

Primary form button:

“Listeye Katıl”

Use a pink button with a small paper-plane icon.

Below the button show:

“Bilgilerin güvende. Spam yok.”

Use a small lock icon.

Make the form highly visible and conversion-focused.

3. CHARACTER PRODUCT SECTION

Use a white background.

Centered heading:

“Işıkla Oynayan 6 Sevimli Karakter!”

Place small yellow decorative lines around the title.

Create six consistent product cards in one desktop row.

Every card should use:

- The same switch model
- The same camera angle
- The same product scale
- The same lighting quality
- A soft pastel character-specific background
- Rounded 22 px corners
- A subtle border and shadow

Characters:

Kurbi
“Meraklı Kurbağa”
Green accent

Pandi
“Neşeli Panda”
Blue accent

Rexi
“Cesur Dinozor”
Green accent

Leo
“Neşeli Aslan”
Orange accent

Miu
“Tatlı Kedi”
Pink accent

Uni
“Rüya Arkadaşı”
Purple accent

Each card must include a small pill:

“Yakında!”

On mobile, turn this section into a horizontal swipe carousel showing approximately 1.25 cards at once.

4. BLUE “NEDEN LAMBOLO?” SECTION

Create a strong full-width blue section with softly curved or wavy top and bottom edges.

Heading:

“Neden Lambolo?”

Use white heading text.

Place four white rounded cards in one row.

Card 1:

Title:
“Işığı Eğlenceli Hale Getirir”

Description:
“Anahtara dokunmak artık küçük bir oyuna dönüşür.”

Icon:
Yellow smile

Card 2:

Title:
“Çocuk Dostu Yaklaşım”

Description:
“Yuvarlak hatlı ve sevimli karakterler çocuk odaları düşünülerek tasarlanır.”

Icon:
Green shield

Card 3:

Title:
“Odaları Renklendirir”

Description:
“Sıradan anahtarlar neşeli oda detaylarına dönüşür.”

Icon:
Pink heart

Card 4:

Title:
“Farklı Bir Hediye Fikri”

Description:
“Çocuk odaları ve özel günler için dikkat çekici bir alternatif.”

Icon:
Blue gift

Do not add unverified claims such as BPA-free, non-toxic, certified safe, or universally compatible.

5. “NASIL ÇALIŞIR?” SECTION

Use a warm cream background.

Heading:

“Nasıl Çalışır?”

Create four connected horizontal steps.

Step 1:

Number:
1

Title:
“Tak”

Description:
“Karakteri uyumlu anahtarın üstüne yerleştir.”

Visual:
A hand placing Kurbi over a wall switch.

Step 2:

Number:
2

Title:
“Oyna”

Description:
“Kurbi’nin diline dokun, anahtarı aç veya kapat.”

Visual:
A finger interacting with Kurbi’s tongue.

Step 3:

Number:
3

Title:
“Aydınlat”

Description:
“Mevcut anahtar hareket eder ve odanın ışığı değişir.”

Visual:
A bright yellow light bulb illustration.

Step 4:

Number:
4

Title:
“Mutlu Ol”

Description:
“Günlük bir alışkanlık eğlenceli bir ana dönüşür.”

Visual:
A happy child celebrating.

Use colored arrows between each step.

Use:
Blue for step 1
Green for step 2
Pink for step 3
Yellow/orange for step 4

On mobile, transform the steps into a vertical timeline.

6. PINK COMING SOON SECTION

Create a full-width bright pink section.

Left side:

Small white pill:
“ÇOK YAKINDA!”

Large heading:

“İlk üretim için
bekleme listesine katıl!”

Description:

“Sınırlı ilk üretim, gelişim haberleri ve
lansmana özel fırsatlardan haberdar ol.”

Middle:

Show four simple line icons and labels:

- Erken erişim
- Lansman fırsatları
- Ürün gelişim haberleri
- Sürprizler

Right:

Create a compact white form card.

Fields:

- Ad Soyad
- E-posta Adresi

Green or pink CTA:

“Listeye Katıl”

Add the helper text:

“Bilgilerin güvende. Spam yok.”

Do not display fake order numbers, fake family counts, fake discounts, or free-shipping promises.

7. INFORMATION SECTION

Use a white background.

Heading:

“Merak Ettikleriniz”

Create three horizontally aligned information items.

Item 1:

Blue wrench icon

Title:
“Kolay Kurulum Hedefi”

Text:
“Elektrik bağlantısına müdahale etmeden, uyumlu anahtarın üzerine takılacak şekilde geliştiriliyor.”

Item 2:

Green shield icon

Title:
“Çocuk Odaları İçin Tasarım”

Text:
“Sevimli karakterler, yuvarlak formlar ve kolay anlaşılır kullanım.”

Item 3:

Pink heart icon

Title:
“Odaya Neşe Katar”

Text:
“Sıradan anahtar alanını eğlenceli bir karakter detayına dönüştürür.”

8. BLUE FOOTER

Create a strong blue footer.

Left column:

Official Lambolo logo.

Slogan:

“Dokun. Oyna. Aydınlat.”

Brand description:

“Lambolo, sıradan ışık anahtarlarını çocuklar için eğlenceli karakter deneyimlerine dönüştürmek üzere geliştiriliyor.”

Social icons:

- Instagram
- TikTok
- YouTube
- Facebook

Use:
@hellolambolo

Second column:

“Keşfet”

- Ürünler
- Karakterler
- Nasıl Çalışır?
- Neden Lambolo?
- SSS

Third column:

“Destek”

- İletişim
- Gizlilik Politikası
- KVKK Aydınlatma Metni
- Kullanım Koşulları

Fourth column:

“Haberleri Kaçırma!”

Text:

“Lansman ve gelişmelerden ilk sen haberdar ol.”

Add an email field and a yellow button:

“Abone Ol”

Footer bottom:

“© 2026 Lambolo. Tüm hakları saklıdır.”

Right side:

“Türkiye’de tasarlanıyor, sevgiyle geliştiriliyor.”

RESPONSIVE DESIGN

Desktop 1200 px and above:

- Three-column hero
- Six character cards in one row
- Four benefit cards
- Four horizontal steps

Tablet 768–1199 px:

- Two-column hero
- Waitlist form moves below hero content
- Three character cards per row
- Benefits become 2 × 2
- Steps become 2 × 2

Mobile below 768 px:

Use the following order:

1. Header
2. Hero headline
3. Kurbi product image
4. Hero CTA buttons
5. Waitlist form
6. Character carousel
7. Why Lambolo
8. How it works
9. Coming soon form
10. Information cards
11. Footer

Mobile rules:

- Full-width CTA buttons
- Single-column forms
- Large readable typography
- No horizontal page overflow
- Decorative graphics must not sit behind copy
- Character cards should swipe horizontally
- Product must remain fully visible
- Use a hamburger menu

INTERACTIONS

- Use smooth scrolling for navigation.
- Every “Bekleme Listesine Katıl” button scrolls to a form.
- Add subtle hover lift to character cards.
- Add button hover and pressed states.
- Add field focus and validation states.
- Add loading and success states for forms.
- Respect prefers-reduced-motion.
- Avoid excessive bouncing animation.

FORM SUCCESS MESSAGE

“Harika! Lambolo’nun ilk haberlerini sana göndereceğiz.”

IMPORTANT PRODUCT ACCURACY

The final design must make it obvious that:

- Lambolo attaches over an existing switch.
- Lambolo is not a lamp.
- Lambolo does not create light itself.
- Kurbi’s tongue moves the existing wall switch.
- The wall switch remains physically underneath the product.

IMPORTANT OUTPUT REQUIREMENTS

- Produce one complete desktop landing-page design.
- Produce one complete mobile landing-page design.
- Use editable sections and components.
- Do not place the uploaded screenshot as a single background image.
- Recreate the design with real layout components.
- Maintain very close visual similarity to the reference screenshot.
- Use the exact official logo asset.
- Use correct Turkish spelling.
- Keep the waitlist form above the fold.
- Ensure the final result looks production-ready and premium.
````

The generated page should use **“ön talep / bekleme listesi”** language during validation. When the real product, payment flow, price, delivery conditions, and refund process are ready, the CTA can be changed from **“Bekleme Listesine Katıl”** to **“Ön Sipariş Ver.”**
