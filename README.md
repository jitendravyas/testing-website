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
- **Atomizer CSS** - Atomic/utility-first CSS library for rapid styling
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
│   ├── style.css        # Main stylesheet
│   └── atomic.css       # Atomizer CSS utility classes
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

**Custom CSS**: Edit `css/style.css` to change the global styles. Each page can also have custom CSS defined in its front matter.

**Atomizer CSS**: This site uses [Atomizer](https://acss.io/) for atomic/utility-first CSS.

**How it works:**
1. Add atomic classes directly to your HTML (e.g., `D(f)`, `Jc(c)`, `P(1rem)`)
2. Push your changes to GitHub
3. GitHub Actions automatically scans your HTML files
4. Atomizer generates `css/atomic.css` with only the classes you use
5. The generated CSS is automatically committed back to the repository

**No local setup required!** Just add atomic classes to your HTML and push.

Common Atomizer classes:
- `D(f)` - Display flex
- `Jc(c)` - Justify content center
- `Ai(c)` - Align items center
- `P(1rem)` - Padding 1rem
- `Mt(2rem)` - Margin top 2rem
- `Mb(1rem)` - Margin bottom 1rem
- `Gap(1rem)` - Gap 1rem (for flex/grid)
- `Fz(1.5rem)` - Font size 1.5rem
- `Fw(b)` - Font weight bold
- `C(white)` - Color white
- `Bgc(#3498db)` - Background color
- `Ta(c)` - Text align center
- `Bdrs(8px)` - Border radius 8px
- `Lis(n)` - List style none
- `Td(n)` - Text decoration none

Example usage:
```html
<!-- Centered flex container with gap -->
<div class="D(f) Jc(c) Ai(c) Gap(1rem)">
  <button class="P(1rem) Bgc(#3498db) C(white) Bdrs(5px)">Click Me</button>
</div>

<!-- Text styling -->
<h2 class="Fz(2rem) Fw(b) Ta(c) Mb(1rem)">Heading</h2>
```

See the [Atomizer documentation](https://acss.io/reference) for all available classes.

### Reusable Components

The site uses Jekyll includes to create reusable components that eliminate HTML and Atomizer class duplication. All components are in `_includes/components/`.

**Available Components:**

**1. Button Component**
```html
{% include components/button.html
   url="blog.html"
   text="Read Blog"
   variant="primary"
%}

<!-- Variants: primary (default), secondary, success -->
```

**2. Card Component**
```html
{% include components/card.html
   title="My Card Title"
   description="Card description text goes here."
   button_url="page.html"
   button_text="Learn More"
   button_variant="secondary"
%}
```

**3. Nav Link Component**
```html
{% include components/nav-link.html
   page="about.html"
   text="About"
%}
```

**4. Section Heading Component**
```html
{% include components/section-heading.html
   text="My Section Title"
   align="c"
   mt="2rem"
%}
```

**5. Alert/Message Box Component**
```html
{% include components/alert.html
   type="success"
   title="Success!"
   message="Your form was submitted successfully."
%}

<!-- Types: info (default), success, warning, error -->
```

**6. Flex Container Component**
```html
{% capture content %}
  <div>Item 1</div>
  <div>Item 2</div>
{% endcapture %}

{% include components/flex-container.html
   content=content
   gap="1rem"
   justify="c"
   align="c"
   wrap="w"
%}
```

**Benefits of using components:**
- No HTML duplication
- Atomizer classes defined once in the component
- Change styling in one place, updates everywhere
- Easier to maintain and update
- Consistent design across the site

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
