# 💌 A Special Delivery For You — Kawaii Romantic Web Application

A romantic, ultra-cute ("Kawaii" aesthetic), interactive single-page web application dedicated to your girlfriend. Strictly designed mobile-first (optimized for 375px–430px viewports with graceful responsive scaling and decorative wings on desktop), featuring pastel strawberry milk styling, frosted glassmorphism, smooth micro-animations, and Sanrio-inspired character aesthetics (**Hello Kitty, Cinnamoroll, and My Melody**).

---

## ✨ Features & Architecture

1. **Section 1: Envelope Splash Screen (Entry Gate)**
   - Fullscreen 3D pink envelope sealed with a Hello Kitty bow wax seal and a Cinnamoroll postage stamp.
   - Dynamic recipient text: *"Special Delivery for [Girlfriend's Name] 💌"*.
   - Tapping the wax seal triggers an unfold animation, slides the letter up, plays a chime via the Web Audio API, and seamlessly reveals the main app.

2. **Section 2: Hero Banner & Live Relationship Counter**
   - Bobbing Cinnamoroll holding a beating heart with anime sparkle eyes.
   - Live real-time counter tracking **Days, Hours, Minutes, and Seconds** since your special anniversary date.
   - Milestone banner with sweet affirmations.

3. **Section 3: Polaroid Memory Carousel (Swipeable & Expandable)**
   - Touch-friendly horizontal swipe carousel with scroll-snap and live status indicator (`Memory X of N 💕`).
   - **➕ Add Memory Button**: Both of you can click **"➕ Add Memory"** in the header or at the end of the carousel to add new milestones, choose a photo from 17 couple pictures, set the date, title, and handwritten caption!
   - Integrated all 17 real memories from `foryou-main` (located in `images/`):
     - **Episode I (Nov 11, 2022)**: The First Spark — *"the day everything changed"*
     - **Episode II (It's Official)**: It's Official — *"in a relationship with Manoj D Aseh 💙"*
     - **Episode III (May 26, 2022)**: Where It All Began — *"our story starts here, remember?"*
     - **Episode IV (July 31, 2026)**: Worlds Apart, Hearts Close — *"still smiling after all this time"*
     - **Episode V**: Stolen Glances — *"you, always you"*
     - **Episode VI**: Across the Distance — *"the longest days feel short with you"*
     - **Episode VII**: Hearts Aligned — *"two hearts, one signal"*
     - **Episode VIII**: Quiet Warmth — *"warmth in every pixel"*
     - **Episode IX**: Unspoken Words — *"what I never said but always meant"*
     - **Episode X**: A Thousand Miles — *"miles mean nothing to us"*
     - **Episode XI**: The Promise — *"forever is just starting"*
     - **Episode XII**: Tender Gravity — *"gravity always brings me back to you"*
     - **Episode XIII**: Still Here — *"still here, still yours"*
     - **Episode XIV**: Written From The Heart — *"i'll love you till the last breath 🖊️"*
     - **Episode XV**: You Were Always The One — *"she drew this. she meant every word 🎨"*
     - **Episode XVI**: Iniya Piranta Nal — *"how i always wanted to wish you 🎂"*
     - **Episode XVII (March 8, 2026)**: Forever Counting — *"counting down to when there's no more counting"*
   - Every Polaroid card features cute alternating pastel washi-tape, Hello Kitty bow stickers, episode & date tags, and opens an enlarged high-resolution lightbox on tap.

4. **Section 4: "Reasons Why I Love You" Gacha Machine**
   - Pastel candy machine / glass jar filled with colorful heart capsules.
   - Tapping **"Dispense Love Note 🎀"** shakes the machine, drops a capsule with sound effects, and pops up a romantic love note modal.
   - Includes 10 heartwarming romantic messages and a collection tracker.

5. **Section 5: Sweet Love Letters & Promises 💌 (Couple Love Letter Writer)**
   - Romantic aesthetic cards featuring your couple photos with personalized love letters under each picture.
   - **Our Love Notes Mode (✏️)**:
     - Click **"✏️ Our Love Notes"** at any time: both of you can write, add, or organize letters for each other!
     - **➕ Add New Letter**: Add as many custom love letters as you want with a single click.
     - **🖼️ Choose Photo**: Pick from any of your 17 available photos or paste any image path.
     - **🗑️ Delete Letter**: Remove specific letter cards with confirmation.
     - **↺ Revert Options**:
       - Revert a single card back to its original default text (`↺ Revert`).
       - Revert all cards back to original defaults (`↺ Revert All`).
     - **⬆️ / ⬇️ Reorder**: Move cards up or down to set your preferred order.
     - **💾 Save All to Site**: Saves changes locally, updates `love_letters.js`, and syncs in real-time to Firebase so both of you see it immediately!
   - **Reader View (💖)**:
     - Clean, romantic cards with pastel glassmorphism, tags, bubbly titles, handwritten quotes, and full love letters.
     - Tapping any picture opens the enlarged lightbox reading view.
     - Interactive heart reactions allow her to "like" each letter and keep track of her favorites.
     - Interactive heart reactions allow her to "like" each letter and keep track of her favorites.

6. **Section 6: The Cute Question (Interactive Finale)**
   - Pleading Cinnamoroll holding a single red rose.
   - Question: *"Will you be my forever Valentine & Date tonight? 💍💖"*.
   - **Playful "No" Button Dodge**: Playfully dodges her finger on touch or hover, teleports to safe random coordinates, shrinks, and shows teasing messages ("Wait, are you sure? 🥺", "Wrong button silly! 💕").
   - **Growing "Yes!" Button**: Grows bigger, pulses, and glows each time "No" is touched.
   - Tapping **"Yes!"** triggers a celebratory sound fanfare, a 60fps pastel confetti shower, and pops up an official Date Certificate / Love Letter.

7. **Audio System (Web Audio API Synthesizer + Custom MP3 Support)**
   - Zero external audio files required: all chimes, pops, stamp sounds, and a dreamy music box lullaby are synthesized directly in the browser!
   - Top-right floating toggle button (🎵 / 🎶) to play or mute the music box.
   - Ready for your own custom MP3 couple song if desired.

8. **Optimized 60 FPS Ambient Background**
   - Feather-light ambient floating hearts and stars drifting gently in the background with zero CPU/GPU lag.
   - Clean, clutter-free screen with instantaneous animations and zero frozen elements.

---

## 🚀 How to Write Your Letters & Run the Website

### ☁️ Connected Live Cloud Sync (Firebase Realtime Database)
The website is now pre-configured with your Firebase Realtime Database:
- **Database URL**: `https://medicine-reminder-app-7abd9-default-rtdb.asia-southeast1.firebasedatabase.app`
- **Important 1-Time Step**: In your [Firebase Console Rules tab](https://console.firebase.google.com/project/medicine-reminder-app-7abd9/database/medicine-reminder-app-7abd9-default-rtdb/rules), set:
  ```json
  {
    "rules": {
      ".read": true,
      ".write": true
    }
  }
  ```
  and click **Publish**.
- **Real-Time Cross-Device Sync**: Once published, whenever you type any message and click "Save All Letters", your words sync instantly to Aseh's phone in real time without her even needing to refresh!

### 1. How to Write Your Own Love Letters (Boyfriend Editor)
- **Easiest 1-Click Method**:
  1. Double-click `start-editor.bat` in this folder.
  2. It will open `http://localhost:3000` in your browser.
  3. Scroll to **Section 5: Sweet Love Letters**.
  4. Type your love letter under each picture!
  5. Click **"💾 Save All Letters to Site"** — it automatically updates `love_letters.js` on your computer!
- **Direct Browser Method**:
  1. Open `index.html` directly in your browser.
  2. Click **"✏️ Boyfriend Mode"** on Section 5.
  3. Type your letters and click **"💾 Save All Letters to Site"** (it will download `love_letters.js` for you to keep in this folder).
- **Notepad / VS Code Method**:
  - Open `love_letters.js` in any text editor and type your letters directly!

### 2. How to Host It So Your Girlfriend (Aseh) Can See Everything
When you host this project, all your letters from `love_letters.js` and all pictures from `images/` will be live on the web:
- **Netlify Drop (Takes 30 Seconds!)**:
  1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
  2. Drag and drop the `d:\for her` folder onto the page.
  3. You get a live link (e.g. `https://for-aseh.netlify.app`) to send to her!
- **GitHub Pages**:
  1. Push this folder to a GitHub repository.
  2. Go to **Settings** → **Pages** → Source: `Deploy from a branch` (main / root).
  3. Your site is live at `https://yourusername.github.io/repo-name/`.
- **Vercel**:
  1. Import the folder or GitHub repo into [vercel.com](https://vercel.com).
  2. Click **Deploy**!

---

## 🎀 Customization Guide

### 1. In-App Quick Personalization (Easiest!)
- Open the app in any browser.
- Tap the **⚙️ (Gear Icon)** in the top right corner.
- Enter her name/nickname, your name, and pick your anniversary date.
- Tap **"Save With Love 💖"** — it instantly updates all headers, the envelope, the letter signature, and recalculates the live counter!

### 2. Personalization in Code (`index.html`)
Open `index.html` in any text editor and scroll to line ~1350:
```javascript
const CONFIG = {
  defaultGirlfriendName: "My Sweetheart",  // Put her real name or nickname here
  defaultYourName: "Your Forever Love",   // Put your name here
  defaultAnniversaryDate: "2024-02-14",    // YYYY-MM-DD
};
```

### 3. Adding Your Own Couple Photos
Inside `index.html`, search for `<!-- TO USE YOUR OWN PHOTO: -->` (around lines 640–770).
Place your image files (e.g., `date1.jpg`, `date2.jpg`) in the same folder as `index.html`.
Replace the placeholder `<div>` with:
```html
<img src="date1.jpg" alt="Our First Date" class="w-full h-full object-cover">
```

### 4. Adding Your Own Couple Song (MP3)
Find the `<audio id="bgmAudio">` tag in `index.html` (around line 1335):
```html
<audio id="bgmAudio" loop preload="none">
  <source src="our-special-song.mp3" type="audio/mp3">
</audio>
```
Place your MP3 file in the folder and name it `our-special-song.mp3`. When she opens the envelope or taps the music button, your song will play!

### 5. Editing the 10 Love Notes
Look for `const LOVE_REASONS = [...]` in `index.html` (around line 1360). You can write your own personal reasons, inside jokes, and memories!

---

## 📱 Mobile-First Specifications
- **Optimized Viewports**: 375px (iPhone SE/mini), 390px (iPhone 12/13/14/15), 414px/430px (iPhone Plus/Pro Max), and modern Android devices.
- **Desktop Mode**: Centered mobile viewport layout with decorative Sanrio cloud panels on widescreen displays.
- **Tap Targets**: All buttons, cards, and interactive elements are `>= 48px` tall for effortless thumb tapping.
- **Overflow**: `overflow-x: hidden` with zero horizontal scroll jitter.

