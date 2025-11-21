# ABM Multi Traders – Promotional Items Website

Simple promotional item showcase website for **ABM Multi Traders** built with:

- React + Vite
- React Router
- Tailwind CSS
- Supabase (Database + Storage)

## 1. Project Setup

### Prerequisites

- Node.js (18+ recommended)
- A Supabase project

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## 2. Supabase Setup

### 2.1. Create `items` table

In the Supabase SQL editor, run:

```sql
create table items (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  category text not null,
  image_url text,
  created_at timestamp default now()
);
```

### 2.2. Create storage bucket (optional but recommended)

Create a public bucket, for example:

- Bucket name: `promo-items`

Upload your product images there and copy the **public URLs**.  
Save each URL in the `image_url` column of the corresponding row in the `items` table.

### 2.3. Add sample data

Insert rows into the `items` table with categories matching **exactly**:

- `Apparel`
- `Drinkware`
- `Bags`
- `Office & Stationery`
- `Outdoor, Sports & Fitness`
- `Corporate & Executive Gifts`
- `Seasonal & Festive Items`
- `Safety & PP`

Example insert:

```sql
insert into items (title, description, category, image_url)
values (
  'Branded Cotton T-Shirt',
  'High quality cotton T-shirt with custom logo printing.',
  'Apparel',
  'https://your-supabase-url/storage/v1/object/public/promo-items/tshirt.jpg'
);
```

## 3. Environment Variables

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

Edit the file:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_anon_public_key
```

You can find these in **Supabase → Project Settings → API**.

## 4. Tailwind CSS

Tailwind is pre-configured via:

- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`

You do not need to do anything extra unless you want to customize the design.

## 5. Build for Production

```bash
npm run build
npm run preview
```

## 6. Deployment

### Option 1 – Vercel

1. Push this project to GitHub.
2. Go to Vercel and import the repository.
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_KEY`
4. Deploy.

### Option 2 – Netlify

1. Push this project to GitHub.
2. On Netlify, import the repository.
3. Set the build command and directory:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add the same environment variables.
5. Deploy.

## 7. Pages

- **Home**: Company intro and latest items from all categories.
- **Category**: `/category/{name}` – Lists items for one category (driven by the `category` field in Supabase).
- **About**: Company description and what ABM Multi Traders offers.

Enjoy building and extending your promotional item showcase!
