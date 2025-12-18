# History Can Be Fun 🎓

Hey there! This is an interactive web app that makes learning about Romanian history actually enjoyable. We're diving into the lives and times of two significant figures: Gheorghe Gheorghiu-Dej and Nicolae Ceaușescu. No boring textbooks here—just smooth scrolling, cool animations, and an engaging way to explore history.

## What's Inside?

- **An Interactive Timeline** - Scroll through key moments in Romanian history
- **Leader Spotlights** - Get to know Gheorghe Gheorghiu-Dej and Nicolae Ceaușescu
- **A Cool Map** - See where history happened
- **Smooth Animations** - Everything feels alive as you scroll
- **Looks Great Everywhere** - Works beautifully on your phone, tablet, or desktop

## Built With

This project uses some awesome modern web technologies:

- **Next.js 16** - The React framework that makes everything faster
- **React 19** - For building all the interactive stuff
- **CSS Modules** - Keeps our styling clean and organized
- **Tesseract.js** - OCR capabilities (because why not?)
- **Next.js Image** - Makes sure images load super fast

## What You'll Need

Before you start, make sure you have:
- **Node.js** (version 18.17 or newer is best)
- **npm** (it comes with Node.js)

That's it! Pretty simple, right?

## Let's Get Started

### Setting Things Up

First, grab the code and install everything:

```bash
# Clone this repo
git clone <repository-url>
cd historycanbefun

# Install all the dependencies
npm install
```

If you prefer yarn, pnpm, or bun, they work great too:
```bash
yarn install
# or
pnpm install
# or
bun install
```

### Running It Locally

Fire up the development server:

```bash
npm run dev
```

Then open up [http://localhost:3000](http://localhost:3000) in your browser. That's it! The app will automatically reload whenever you save changes to the code. It's pretty neat.

### Building for Production

When you're ready to share this with the world:

```bash
# Build the optimized version
npm run build

# Run the production server
npm run start
```

### Checking Your Code

Want to make sure everything looks good?

```bash
npm run lint
```

## How It's Organized

Here's where everything lives:

```
historycanbefun/
├── public/              # All your images and static files
│   ├── ceausescupage.jpg
│   ├── dejpage.jpeg
│   ├── gheorghegheorgiu.jpeg
│   └── romania_map.png
├── src/
│   └── app/
│       ├── components/  # The building blocks of the app
│       │   ├── hero.js         # The landing section
│       │   ├── timeline.js     # Historical timeline
│       │   ├── dej.js          # Gheorghiu-Dej section
│       │   ├── ceausescu.js    # Ceaușescu section
│       │   └── map.js          # Interactive map
│       ├── page.js      # Where it all comes together
│       └── globals.css  # Global styles
└── package.json
```

## About the Components

Each component does something special:

- **Hero** - The first thing you see—big, bold, with animated leader portraits
- **Timeline** - Walk through history at your own pace
- **Dej** - Everything about Gheorghe Gheorghiu-Dej
- **Ceausescu** - The Nicolae Ceaușescu story
- **Map** - See where it all went down

## A Few Technical Notes

If you're curious about how things work under the hood:

- We're using **client-side rendering** for the interactive bits (you'll see `"use client"` at the top of those files)
- **CSS Modules** keep component styles from stepping on each other's toes
- The **Intersection Observer API** powers those slick scroll animations
- **Next.js Image** makes sure pictures load fast and look great

## Want to Contribute?

Found a bug? Have an idea? Contributions are totally welcome! Feel free to open an issue or submit a pull request.

## Deploying This Thing

Ready to put it online? The easiest way is with **Vercel** (the folks who made Next.js):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Head over to [Vercel](https://vercel.com/new) and import your repo
3. Vercel will auto-detect everything and set it up
4. Hit that deploy button!

Your site will be live in minutes. Seriously, it's that easy.

You can also deploy to other platforms—check out the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## Learning More

If you want to dive deeper into the tech we're using:

- [Next.js Docs](https://nextjs.org/docs) - Everything about Next.js
- [React Docs](https://react.dev/) - The React team's official guide
- [Tesseract.js](https://tesseract.projectnaptha.com/) - Learn about OCR in the browser

## License

This is a private educational project. Use it to learn, get inspired, or just explore history!

---

Made with ❤️ for history enthusiasts and curious minds everywhere.
