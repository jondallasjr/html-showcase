# Oaxaca City Events Calendar

An event calendar for Oaxaca City, Feb & Mar 2026.  
`index.html` is the shell — all event data lives in `data/*.json`.

## Quick Start

```bash
# Serve locally (needed for JSON loading)
python3 -m http.server 8000
# Open http://localhost:8000
```

Or deploy to any static host (GitHub Pages, Netlify, Vercel, etc.).

---

## File Structure

```
├── index.html              ← Shell (CSS + JS rendering, no event data)
├── data/
│   ├── events.json         ← One-time events (concerts, hikes, festivals…)
│   ├── recurring.json      ← Weekly/ongoing events
│   └── images.json         ← Image library + category pools
└── README.md
```

---

## Adding a New Event

Open `data/events.json` and add an object to the array:

```json
{
  "id": "2026-03-15-my-event-name",
  "title": "My Event Name",
  "category": "music",
  "start_date": "2026-03-15",
  "end_date": null,
  "start_time": "19:00",
  "end_time": "21:00",
  "duration_hours": 2,
  "venue": "Casa Del Elfo",
  "address": "Reforma 703, Centro",
  "google_maps_url": "https://maps.google.com/...",
  "description": "A short description of the event.",
  "host": "Organizer Name",
  "image": "music_acoustic",
  "gallery": [],
  "price": "Free entry",
  "age_restriction": null,
  "contact": {
    "phone": null,
    "whatsapp": "+52 951 259 8062",
    "email": null,
    "instagram": "@handle",
    "facebook": null
  },
  "links": {
    "tickets": null,
    "website": "https://example.com",
    "registration": null
  },
  "notes": null
}
```

### Field Reference — Events

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique ID. Convention: `YYYY-MM-DD-slug` |
| `title` | string | ✅ | Event name |
| `category` | string | ✅ | One of: `community`, `music`, `yoga`, `festival`, `arts`, `food`, `hiking`, `family`, `dance`, `cowork` |
| `start_date` | string | ✅ | `YYYY-MM-DD` format |
| `end_date` | string | — | For multi-day events. `YYYY-MM-DD` of last day |
| `start_time` | string | — | `HH:MM` 24-hour format |
| `end_time` | string | — | `HH:MM` 24-hour format. Auto-calculated from duration if omitted |
| `duration_hours` | number | — | Fallback if no `end_time` |
| `venue` | string | — | Venue name |
| `address` | string | — | Full address (used for Google Calendar location) |
| `google_maps_url` | string | — | Direct Google Maps link |
| `description` | string | — | Short description |
| `host` | string | — | Organizer/host name |
| `image` | string | — | Key from `images.json` library. If omitted, auto-assigned from category pool |
| `gallery` | array | — | Additional image keys |
| `price` | string | — | e.g. "Free", "$450 MXN", "VIP $909 USD" |
| `age_restriction` | string | — | e.g. "18+" |
| `contact.phone` | string | — | Phone number |
| `contact.whatsapp` | string | — | WhatsApp number (renders as clickable link) |
| `contact.email` | string | — | Email address |
| `contact.instagram` | string | — | Instagram handle with @ (renders as link) |
| `contact.facebook` | string | — | Facebook URL or page name |
| `links.tickets` | string | — | Ticket purchase URL |
| `links.website` | string | — | Event/organizer website |
| `links.registration` | string | — | Registration URL |
| `notes` | string | — | Additional notes |

---

## Adding a Recurring Event

Open `data/recurring.json` and add:

```json
{
  "id": "my-weekly-event",
  "title": "My Weekly Event",
  "category": "community",
  "schedule": "Tuesdays 4–6PM",
  "venue": "La Petrona Café Bistro, Hidalgo",
  "address": null,
  "google_maps_url": null,
  "description": "A short description.",
  "image": "comm_cafe",
  "price": "Free",
  "contact": {
    "phone": null,
    "whatsapp": null,
    "email": null,
    "instagram": null,
    "facebook": null
  },
  "links": {
    "website": null,
    "registration": null
  }
}
```

---

## Adding Images

Open `data/images.json` and add to the `"library"` object:

### Flickr image:
```json
"my_image_key": {
  "source": "flickr",
  "id": "PHOTO_ID_SECRET",
  "credit": "Photographer Name",
  "flickr_user": "USER_ID"
}
```
The `id` is from the Flickr URL: `https://live.staticflickr.com/65535/{id}_z.jpg`

### Unsplash image:
```json
"my_image_key": {
  "source": "unsplash",
  "id": "photo-XXXXXXXXX",
  "credit": "Photographer Name",
  "user": "unsplash_username"
}
```
The `id` is from the Unsplash URL: `https://images.unsplash.com/{id}`

### Category pools:
Add your image key to the appropriate array in `"category_pools"` so it gets auto-assigned to events that don't specify an image.

---

## Categories

To add a new category, edit `CATEGORIES` in `index.html` and add matching CSS variables in `:root`.

| Key | Label | Color |
|-----|-------|-------|
| `community` | Community & Social | `#B85C38` |
| `music` | Music & Nightlife | `#5C3D8F` |
| `yoga` | Yoga & Meditation | `#2D7D5F` |
| `festival` | Festivals & Culture | `#C4421A` |
| `arts` | Arts & Workshops | `#C08B30` |
| `food` | Food & Dining | `#8B6C42` |
| `hiking` | Hiking & Outdoors | `#3A7CA5` |
| `family` | Family & Kids | `#D4785C` |
| `dance` | Dance | `#A63D82` |
| `cowork` | Coworking & Nomad | `#5A7052` |

---

## Auto-Generated Features

These are built automatically from the JSON data — no need to create them manually:

- **Google Calendar links** — generated from date/time/venue fields
- **WhatsApp links** — generated from `contact.whatsapp`
- **Instagram links** — generated from `contact.instagram`
- **Category images** — auto-assigned from pools if no `image` specified
- **Photo credits** — auto-generated from image library metadata
