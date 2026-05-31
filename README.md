# Jashak Static Showcase

This folder is only for the public live preview of the Jashak WordPress theme.

It is not required inside the buyer WordPress theme ZIP.

## What This Folder Contains

- Static HTML pages exported from the local WordPress preview.
- Theme CSS, JavaScript, fonts, images, and uploads needed for the preview.
- No WordPress PHP files.
- No WordPress database.
- No ACF fields.
- No Jashak Core plugin logic.

## How To Use With GitHub And Vercel

1. Create a new GitHub repository only for this static preview.
2. Upload the contents of this `jashak-static-showcase` folder to that repository.
3. Connect the repository to Vercel.
4. In Vercel, keep the framework preset as `Other`.
5. Leave build command empty.
6. Leave output directory empty or set it to `.`.
7. Deploy.

## Important

Do not include this folder inside the WordPress theme package for buyers.

The buyer package should contain the real WordPress theme, the bundled Jashak Core plugin ZIP, ACF JSON, and documentation.

This static preview is only for showing the design on a live URL.
