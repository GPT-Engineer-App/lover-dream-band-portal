# lover-dream-band-portal

# Lover Dream Band Website

This website will showcase the band "Lover Dream", allowing fans to explore music, tour dates, merchandise, and more.

## Screens

### Home Page
Acts as the landing page offering a welcome message, brief band bio, and navigation to other sections of the site.

- **Behavior:**
  - Showcases a featured image or video clip of the band.
  - Provides an overview of the band with a link to the 'About' page for more details.
- **Layout:**
  - Contains a 'Header', a main 'Feature Section' with media, and a 'Footer'.

### About Page
Offers an in-depth look at the band, including history, band members, and their journey.

- **Behavior:** 
  - Includes a timeline of the band's career and individual profiles of each member.
- **Layout:** 
  - Organized into sections for the timeline and member profiles.

### Tour Page
Lists upcoming tour dates and venues, with options to buy tickets.

- **Behavior:**
  - Automatically updates with new tour dates.
  - Integration with external ticket selling platforms.
- **Layout:** 
  - List of dates and locations, interactive map possibly included.

### Music Page
Streams music and showcases a discography of the band.

- **Behavior:**
  - Allows users to listen to tracks directly on the page.
  - Offers links to purchase or download music.
- **Layout:** 
  - Organized list or grid of songs and albums, with an embedded music player.

### Merchandise Page
Displays band merchandise, including clothes, posters, and other memorabilia for purchase.

- **Behavior:**
  - E-commerce capabilities for users to buy merchandise.
  - Features a shopping cart and checkout system.
- **Layout:** 
  - Grid layout of merchandise items with filtering options.

### Contact Page
Provides information on how to contact the band or management and integrates a contact form.

- **Behavior:**
  - Email form submission for inquiries.
  - Links to the band’s social media pages.
- **Layout:** 
  - Simple form with fields for user input and contact details.

## Components

### Header
Displays website branding, band logo, and primary navigation menu.

- **Behavior:**
  - Sticky at the top, contains links to all the main pages.
- **Styling:** 
  - Prominent with clear, easy-to-read navigation.

### Footer
Displays secondary information like social media links, contact info, and legal notices.

- **Behavior:**
  - Consistent across all pages.
- **Styling:** 
  - Contains icons linked to social accounts and text for copyright notice.

### Feature Section
Prominent section on the Home Page, showcasing major band highlights or announcements.

- **Behavior:**
  - Responsive design to showcase media effectively on different devices.
- **Styling:**
  - Engaging with high-quality imagery or video, eye-catching design.

### Music Player
Embedded on the Music Page to allow users to play music directly on the website.

- **Behavior:**
  - Includes basic controls: play, pause, skip, volume adjustment.
- **Styling:**
  - Compact and modern, integrates seamlessly with the overall design of the page.

### Merchandise Item
Each merchandise piece on the Merchandise Page.

- **Behavior:**
  - Clickable to view more details and to add to cart.
- **Styling:**
  - Displays the item image, name, price, and a quick add-to-cart button.

Follow the following design principles:
- Use a Light Base: Employ a predominantly white or light-colored background to create a clean, expansive feel.
- Accent with Vibrant Colors: Choose one or two vibrant colors for highlights, buttons, and important features to draw attention and guide user interactions
- Utilize black and grey for text for clarity.
- Ensure that the layout feels open and uncluttered by generously using ample whitespace. It's okay if this means users need to scroll more; the additional space will create a more breathable and comfortable user experience. 
- Use images and icons strategically, when it compliments the website
- If necessary, design a simple, top-aligned navigation bar with clear categories, ensuring easy access and usability. Keep footer design minimal with essential links organized into categories for easy navigation.
- Hierarchical Type Setting: Use varied type sizes and weights to establish a clear visual hierarchy, helping users navigate through the content easily.
- Standout CTAs: Design call-to-action buttons with standout colors that contrast with the background, making them easy to locate.
- Emphasize Key Information: Use size, color, and placement to emphasize key pieces of information or actions.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/lover-dream-band-portal.git
cd lover-dream-band-portal
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
