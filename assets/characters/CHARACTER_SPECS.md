# حومتنا — Character Asset Specifications

All characters need two 3D-stylized WebP images with transparent background.
Style: soft volumes, matte materials, warm lighting — matching عمّ صالح reference.

## Image Formats

| Type      | Use               | Size (px)   | View                  | Notes                                        |
|-----------|-------------------|-------------|-----------------------|----------------------------------------------|
| `body`    | Map pin           | 256 × 384   | Full body, 3/4 top    | Feet at bottom center, detoured, transparent  |
| `portrait`| Dialogue frame    | 256 × 256   | Head + shoulders      | Face centered, same face as body, some margin |

Format: WebP, transparent background, max ~40 KB per image (base64-inlined).

---

## Characters — PEOPLE (8)

### ✅ am_salah (عمّ صالح) — DONE
- **Role**: شيخ الحومة (neighbourhood elder)
- **Age**: ~65
- **Appearance**: Grey mustache, red chechia, ivory jebba (long), brown shoes
- **Expression**: Warm smile, kind eyes
- **Status**: Both body & portrait integrated in `HoumetnaCharImages`

### ⬜ khalti_zohra (خالتي زهرة)
- **Role**: الجارة الطيّبة (kind neighbour)
- **Age**: ~60
- **Appearance**: Lavender/lilac hijab covering hair, purple/mauve long dress (safsari-style), sandals, glasses
- **Expression**: Benevolent, warm smile
- **Palette**: `#9c27b0` (purple)

### ⬜ si_mongi (سي المنجي)
- **Role**: البقّال (grocer/shopkeeper)
- **Age**: ~45
- **Appearance**: Dark skin, short black hair, black mustache, white shirt, blue apron, grey trousers, brown shoes
- **Expression**: Welcoming, shopkeeper demeanor
- **Palette**: `#1976d2` (blue)

### ⬜ mariem (مريم)
- **Role**: التلميذة النشيطة (active student)
- **Age**: ~10
- **Appearance**: Medium skin, brown hair in ponytail with ribbon, pink school tablier (Tunisian school uniform), purple backpack, white shoes
- **Expression**: Joyful, enthusiastic
- **Palette**: `#e91e63` (pink)

### ⬜ yassine (ياسين)
- **Role**: صديق مريم (Mariem's friend)
- **Age**: ~10
- **Appearance**: Dark skin, curly black hair, blue school tablier (Tunisian school uniform), green backpack, sneakers
- **Expression**: Mischievous grin, playful
- **Palette**: `#4caf50` (green)

### ⬜ mme_leila (مدام ليلى)
- **Role**: المعلّمة (teacher)
- **Age**: ~35
- **Appearance**: Light skin, brown hair in bun, white teacher's blouse, orange scarf, red book in hand, professional heels
- **Expression**: Professional, encouraging
- **Palette**: `#ff9800` (orange)

### ⬜ baladiya (البلديّة)
- **Role**: عامل البلديّة (municipal worker)
- **Age**: ~40
- **Appearance**: Medium skin, municipal yellow cap, orange safety vest over dark shirt, dark work trousers, work boots
- **Expression**: Serious but kind
- **Palette**: `#f57f17` (amber)

### ⬜ dr_hedi (الدكتور الهادي)
- **Role**: طبيب الحيّ (neighbourhood doctor)
- **Age**: ~50
- **Appearance**: Light skin, bald/grey temples, glasses, white doctor's coat, teal tie, stethoscope around neck, dark trousers
- **Expression**: Calm, professional reassurance
- **Palette**: `#00796b` (teal)

---

## Characters — PLAYERS (6)

### ⬜ p1
- **Description**: Boy ~9, light skin, short brown hair, blue school tablier, yellow backpack

### ⬜ p2
- **Description**: Boy ~9, dark skin, curly black hair, blue school tablier, red backpack

### ⬜ p3
- **Description**: Boy ~9, dark complexion, short black hair, blue school tablier, green backpack

### ⬜ p4
- **Description**: Girl ~9, light skin, long brown hair, pink school tablier, purple backpack

### ⬜ p5
- **Description**: Girl ~9, dark skin, braids with ribbons, pink school tablier, orange backpack

### ⬜ p6
- **Description**: Girl ~9, medium skin, short curly black hair, pink school tablier, blue backpack

---

## Mascot

### ⬜ mishmish (مشمش)
- **Description**: Orange-and-cream cat, green eyes, miniature red chechia on head, expressive tail
- **Personality**: Playful, curious, the game's mascot and guide

---

## Integration Instructions

1. Generate each image as WebP with transparent background
2. Convert to base64 data URI: `data:image/webp;base64,...`
3. Add to `HoumetnaCharImages` module in `index.html` (~line 1719):
   ```javascript
   character_id: {
     body: 'data:image/webp;base64,...',      // full body for map
     portrait: 'data:image/webp;base64,...'    // head+shoulders for dialogues
   },
   ```
4. The game automatically detects 3D images via `CharImages.has(id)` and renders them with proper shadows and framing
5. No other code changes needed — the fallback system handles everything

## File Naming Convention (if using external files)

```
assets/characters/am_salah_body.webp
assets/characters/am_salah_portrait.webp
assets/characters/khalti_zohra_body.webp
assets/characters/khalti_zohra_portrait.webp
...
```

## Summary

| Character     | Body | Portrait | Status      |
|---------------|------|----------|-------------|
| am_salah      | ✅   | ✅       | Integrated  |
| khalti_zohra  | ⬜   | ⬜       | Needs art   |
| si_mongi      | ⬜   | ⬜       | Needs art   |
| mariem        | ⬜   | ⬜       | Needs art   |
| yassine       | ⬜   | ⬜       | Needs art   |
| mme_leila     | ⬜   | ⬜       | Needs art   |
| baladiya      | ⬜   | ⬜       | Needs art   |
| dr_hedi       | ⬜   | ⬜       | Needs art   |
| p1–p6         | ⬜   | ⬜       | Needs art   |
| mishmish      | ⬜   | ⬜       | Needs art   |
| **Total**     | 1/15 | 1/15     | **2/30**    |
