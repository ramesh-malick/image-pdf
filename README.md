# PDF Studio Offline

A browser-based PDF toolbox built with HTML, CSS and JavaScript. All libraries are bundled locally. There are no CDNs, API calls, external fonts, accounts, uploads, or runtime package-install requirements.

## Use offline

1. Download the repository ZIP and **extract the entire folder**.
2. Open `index.html` in a browser that permits local HTML files.
3. Choose a tool, select files, process them, and click the download button.
4. For the advanced image editor, choose **Pro JPG to PDF** or open `pro.html` directly.

Keep the `vendor` folder beside the HTML files. Downloading only an HTML file is insufficient. Some managed browsers block local `file://` pages; that restriction is controlled by the browser administrator. Direct-file opening could not be exercised in this cloud machine because its managed Chromium blocks it.

An optional local server is also supported and does not need an Internet connection:

```sh
python3 -m http.server 8000 --directory /path/to/extracted/pdf
```

On HTTPS or localhost, a service worker caches both editors and all dependencies after the first successful visit. Wait for that visit to finish before disconnecting. On `file://`, the app uses its bundled scripts directly and does not register a service worker. PDF.js's bundled worker is also preloaded as a local script, allowing its in-page renderer to run without fetching a worker URL.

## Pro JPG to PDF

- Import JPEG, PNG and WebP, or use the device's camera-file picker where supported.
- Drag thumbnails to reorder; arrow buttons provide a keyboard/mobile alternative.
- Sort naturally by filename, reverse order, duplicate, remove and clear images.
- Per-image clockwise/counterclockwise rotation, horizontal/vertical flip, brightness, contrast, grayscale and percentage-based crop.
- Undo and redo the last 20 changes, including image removal and settings changes.
- A3, A4, Letter, Legal, custom paper sizes, or match each image's dimensions.
- Portrait, landscape or automatic orientation; margins, spacing and background color.
- One, two, four or nine images per page; fit, fill or original-size positioning.
- Live paginated layout preview using the same composition code as export.
- 96, 150 or 300 DPI output, JPEG quality controls or lossless PNG page encoding.
- Unicode text watermarks, page numbers, document title, author and custom filename.
- Combined PDF or a ZIP containing one PDF per image.
- Export progress, cancellation between page operations and actual downloadable results.
- Optional device-local settings persistence. Images are never written to localStorage.
- Responsive controls and readable, actionable validation errors.

For predictable browser memory usage, documents are limited to 50 image entries, 20 MB per source image, 150 MB of retained compressed originals, and 80 million decoded source pixels. Individual sources must be at most 40 megapixels and 16,000 pixels on either side. Undo retains originals until the page closes. Export canvases are capped at 20 megapixels, so very large paper sizes may render below the selected DPI. Preview resolution is lower than export resolution. Match-image and separate-PDF modes use one image per page. In separate mode, page numbering restarts at 1 in each PDF.

This editor creates image-based PDFs: text appearing inside photos or watermarks is not selectable. OCR, automatic edge detection, perspective correction, digital signatures and password encryption are not implemented. Camera behavior depends on browser/device support.

## Other offline tools

Merge PDFs, extract or reorder pages, rotate, add text annotations/watermarks/page numbers, convert JPG/PNG to PDF, export PDF pages as JPG, extract selectable text, and rasterize PDFs with adjustable JPEG quality.

Organize keeps all pages when its page sequence is blank. File/settings changes invalidate old results. A processing lock prevents changing a document while it is being exported. Word/Excel conversion and password tools are not included in the interface. The basic PDF text annotation tools use Helvetica's supported Latin characters; Pro watermarks use the browser's local fonts. Scanned PDFs require OCR for text extraction. Compression removes text selection, links and forms, and may increase the size of an already optimized PDF.

## Validation

The cloud browser tests disconnect networking and exercise all 12 basic tools, Pro image editing, real PDF downloads, ZIP contents, page sizes/counts, document metadata, settings persistence, responsive layouts, and navigation between cached pages. Tests assert zero external HTTP requests and no uncaught browser errors. Direct `file://` navigation is blocked by the cloud browser's administrator policy and remains unverified here.

## Bundled dependencies

- pdf-lib 1.17.1 — MIT
- PDF.js 3.11.174 — Apache 2.0; dynamic PDF evaluation is disabled
- JSZip 3.10.1 — MIT

License files are in `vendor/`. Use the existing checkout for development; do not create a Git worktree as part of setup.
