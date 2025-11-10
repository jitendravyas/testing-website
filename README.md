# Dummy Website for Testing

A comprehensive demonstration website with multiple page types built for testing purposes using Jekyll (GitHub Pages compatible).

## Features

This website includes the following page types:

- **Homepage** - Landing page with links to all other pages
- **Blog Post** - Sample blog article with rich content formatting
- **Forms Page** - Comprehensive collection of form elements and input types
- **Product Showcase** - E-commerce style product catalog with cards and filters
- **SaaS Landing Page** - Modern landing page with hero, features, pricing, and testimonials
- **Tables Page** - Data tables with various layouts and dummy data

## Technology Stack

- **Jekyll** - Static site generator (GitHub Pages compatible)
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid layouts
- **Responsive Design** - Mobile-friendly layouts

## Project Structure

```
testing-website/
├── _config.yml           # Jekyll configuration
├── _includes/            # Reusable components
│   ├── header.html      # Common header (automatically applied to all pages)
│   └── footer.html      # Common footer (automatically applied to all pages)
├── _layouts/            # Page layouts
│   └── default.html     # Default layout template
├── css/                 # Stylesheets
│   └── style.css        # Main stylesheet
├── images/              # Image assets
├── index.html           # Homepage
├── blog.html            # Blog post page
├── forms.html           # Forms showcase page
├── products.html        # Product catalog page
├── saas-landing.html    # SaaS landing page
└── tables.html          # Tables page
```

## GitHub Pages Setup

This site is configured to work with GitHub Pages. To deploy:

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Under "Source", select the branch you want to deploy (e.g., `main`)
4. Click Save
5. Your site will be available at: `https://[username].github.io/[repository-name]/`

## Dynamic Header and Footer

The header and footer are stored as separate includes in the `_includes/` directory:

- `_includes/header.html` - Navigation header
- `_includes/footer.html` - Site footer

**Benefits:**
- Edit header/footer once, changes apply to all pages automatically
- Easier maintenance and consistency across the site
- Follows DRY (Don't Repeat Yourself) principles

To modify the header or footer, simply edit the respective files in `_includes/`.

## Adding Google Analytics

To add Google Analytics tracking code:

1. Open `_layouts/default.html`
2. Find the comment `<!-- Google Analytics code will be added here -->`
3. Replace it with your Google Analytics tracking code

The tracking code will automatically be included in all pages.

## Local Development

To run this site locally:

```bash
# Install Jekyll
gem install bundler jekyll

# Navigate to the project directory
cd testing-website

# Serve the site locally
jekyll serve

# Visit http://localhost:4000 in your browser
```

## Page Descriptions

### Homepage (index.html)
- Overview of all available pages
- Card-based layout with quick links
- Central navigation hub

### Blog Post (blog.html)
- Full article layout with metadata
- Featured image placeholder
- Author bio section
- Related posts section

### Forms Page (forms.html)
- Contact form
- Registration form with various input types
- Checkboxes, radio buttons, dropdowns
- Date, time, color, and file inputs
- Feedback form

### Products Page (products.html)
- Product grid layout
- Product cards with images, pricing, ratings
- Filter and sort options
- "New" and "Sale" badges
- Multiple categories

### SaaS Landing Page (saas-landing.html)
- Hero section with CTAs
- Statistics section
- Features showcase
- Pricing tiers (with "Popular" highlight)
- Customer testimonials
- Final CTA section

### Tables Page (tables.html)
- User management table
- Sales report with calculations
- Project tasks tracker
- Inventory table
- Analytics data table
- Various table styles (striped, hover effects)

## Customization

### Updating Navigation
Edit `_includes/header.html` to modify navigation links.

### Styling
Edit `css/style.css` to change the global styles. Each page can also have custom CSS defined in its front matter.

### Adding New Pages
1. Create a new HTML file
2. Add Jekyll front matter at the top:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   ---
   ```
3. Add your content
4. Update the navigation in `_includes/header.html`

## License

This is a dummy website created for testing and demonstration purposes.
