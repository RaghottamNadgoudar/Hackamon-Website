# Hackamon Landing Page

> _“Welcome to the world of Hackamon! Your journey to become a Pokémon Master of Cybersecurity begins here.”_

---

## 🎉 What is This?

The **Hackamon Landing Page** is the official front gate to our Pokémon-themed CTF adventure! It’s a simple, stylish, and mobile-friendly web page that welcomes aspiring Trainers and guides them to the registration Poké Ball (Google Forms link).

- **No backend, no authentication, no challenge browsing—just a single, magical portal!**
- Designed for first-year students and Pokémon fans alike.
- Themed to spark excitement and set the stage for the Hackamon tournament.

---

## 🚩 Features

- **Pokémon-themed visuals and messaging**
- Big, bold “Register Now” button that redirects to the official Google Forms registration
- Event details: date, time, and a brief storyline
- Social/contact links for queries or support from the Gym Leaders
- Mobile and desktop responsive (works on all PokéNavs!)

---

## 🛠️ How to Run Locally

1. **Clone the Pokéball:**

```bash
git clone https://github.com/overclocked-2124/Hackamon-Website.git
cd Hackamon-Website
```

2. **Install the Pokédex Modules:**

```bash
npm install
# or
yarn install
```

3. **Start Your Journey:**

```bash
npm start
# or
yarn start
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

---

## 🏆 Customization

- **Update the Google Forms Link:**
Edit the `Register Now` button URL in the main component (usually `src/App.js` or `src/pages/Landing.js`) to point to your event’s registration form.
- **Change Event Details:**
Update the event date, time, or storyline text as needed.
- **Add/Change Pokémon Sprites:**
Place your favorite sprites or banners in the `/src/assets` folder and update the image tags.

---

## 🌟 Example Structure

```
Hackamon-Website/
├── public/
├── src/
│   ├── assets/         # Images, logos, sprites
│   ├── components/     # Landing page components (Banner, Button)
│   └── App.js          # Main entry point
├── package.json
└── README.md
```


---

## 📢 Contributing

Found a typo? Want to add a new Poké-flair?
Open a pull request or raise an issue—let’s make this landing page as welcoming as a Pokémon Center!

---

## 🧑‍🏫 Contact the Gym Leaders

For questions, reach out to the organizing team at [your-email@example.com] or via our [Discord server](#).

---

## ⚡ License

This project is released under the [MIT License](LICENSE).

---

> _“A Trainer’s journey begins with a single click. Ready to catch your first badge?”_
> — Professor Cy-Oak

---

**Gotta Catch ‘Em All—at Hackamon!**

