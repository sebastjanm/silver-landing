# PR #7 Status: Imagery Issue Resolution

## Timeline

### Oct 19, 2026 - Initial PR
- Created editorial redesign with "domače srebro" positioning
- Attempted to include silver imagery

### Oct 20, 2026 00:12 - First "Correction" Attempt  
- Downloaded images from Pexels
- **ERROR:** Did not visually verify files
- Files were actually Bitcoin/crypto imagery

### Oct 20, 2026 01:20 - Proper Fix
- **Discovered:** All four images showed Bitcoin, crypto apps, or tax paperwork
- Visual inspection revealed:
  - `hero-silver-coins-hand.jpg` = Bitcoin on US dollars
  - `home-silver-wood.jpg` = Crypto trading app  
  - `silver-bars-close.jpg` = Gold Bitcoin tokens + chart
  - `silver-coins-macro.jpg` = Tax sign + dollar bills

## Current Solution

✅ **All wrong images deleted**  
✅ **Using CSS/SVG editorial placeholders**  
✅ **Clean, professional, no crypto/gold/currency**  
✅ **Clear TODOs and requirements documented**

### Placeholder Specifications

```tsx
// Silver-toned gradient boxes with fine rules
bg-gradient-to-br from-platinum via-silver/20 to-bg
border border-silver/30
```

**Text content:**
- "SLIKA" (IMAGE)
- Brief description in Slovenian of what's needed
- TODO comments in code

## What's Required Next

Owner must provide or source verified silver-only images per `/public/images/CREDITS.md`:

### Hero Image
- Hands holding silver bullion coin
- American Eagle, Canadian Maple Leaf, or similar
- NO crypto, NO gold, NO currency

### Home Silver Image  
- Silver coins/bars on wood/linen
- Calm home setting
- NO trading screens, NO apps

### Verification Process
1. Download candidate image
2. **OPEN AND VIEW** the file (critical step)
3. Verify: shows only physical silver
4. Check: no Bitcoin (₿), no crypto, no currency
5. Use if pass, delete if fail

## Screenshots Status

✅ **Verified clean:**
- `desktop-hero-placeholders.png` - Hero with placeholder
- `desktop-home-silver-section.png` - Home silver section
- `mobile-placeholders.png` - Full mobile page

**Visual inspection confirmed:** NO Bitcoin, NO crypto, NO gold, NO dollars anywhere.

## Build Status

✅ `npm run build` passes  
✅ All routes render  
✅ TypeScript clean  
✅ Placeholders responsive  
✅ No broken images  

## Recommendation

**Option A:** Owner provides verified silver photography  
**Option B:** Launch with placeholders (professional, clean)  
**Option C:** Hire photographer for product shots

**Do NOT:**
- Use unverified stock photos
- Trust filenames (verify visually)
- Use crypto/gold imagery

---

**PR #7:** https://github.com/sebastjanm/silver-landing/pull/7  
**Status:** Ready for review with clean placeholders  
**Do not merge** until owner reviews approach
