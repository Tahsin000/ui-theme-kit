# Sibgat Telecom - Mobile Phone Dealership Landing Page

A modern, responsive landing page for Sibgat Telecom, a mobile phone dealership company in Bangladesh specializing in Symphony, iTel, and Tecno brands.

## Project Overview

This landing page showcases Sibgat Telecom's services as an authorized dealer for multiple mobile phone brands in Bangladesh. It's designed to help the company transition from a purely offline business model to having an online presence that can attract new potential dealers and showcase their brand partnerships.

### Features

- Mobile-first responsive design that works across all devices
- Modern UI with a blue-based color theme
- Comprehensive sections including:
  - Hero section with clear CTAs
  - About the company overview
  - Partner brands showcase
  - Step-by-step dealership process
  - Key benefits of partnership
  - Testimonials from existing dealers
  - Dealership application form
  - Contact information
- Interactive elements including:
  - Mobile menu
  - Testimonial slider
  - Smooth scrolling navigation
  - Form validation
  - Back-to-top button

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom styling with CSS variables, flexbox, and grid
- **JavaScript** - Interactive elements and form validation
- **ShadCN UI** - Minimal UI framework via CDN
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family
- **Placeholder Images** - From placehold.co

## Project Structure

```
sibgat-telecom/
│
├── index.html            # Main HTML structure
├── style.css             # Styles organized by section
├── script.js             # Interactive functionality
└── README.md             # Project documentation
```

## Setup & Usage

1. **Local Development**:
   ```
   git clone [repository-url]
   cd sibgat-telecom
   ```
   Then open `index.html` in your web browser.

2. **Deployment**:
   This is a static website that can be deployed to any web hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any traditional web hosting

## Image Sources

Placeholder images are used from [Placehold.co](https://placehold.co) with the following dimensions:
- Hero: 1280x720
- Brand logos: 200x100
- About section: 800x600
- Brand cards: 400x300
- Testimonial avatars: 100x100

To replace these with actual images:
1. Create an `assets/images/` directory
2. Add your actual images with appropriate dimensions
3. Update the image paths in `index.html`

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector at the top of the `style.css` file:

```css
:root {
  --primary-color: #2563eb; /* Blue 600 */
  --primary-dark: #1d4ed8;  /* Blue 700 */
  --primary-light: #60a5fa; /* Blue 400 */
  /* other variables */
}
```

### Content

The website content can be updated directly in the `index.html` file. Each section is clearly commented to make it easy to identify where content changes should be made.

### Adding New Sections

To add new sections:
1. Create a new section in `index.html`
2. Add corresponding styles in `style.css`
3. If needed, add JavaScript functionality in `script.js`

## Browser Compatibility

The website is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)
