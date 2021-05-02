# Inkscape export
inkscape -w 16 -h 16 -e 16.png logo.up.512x512.svg
inkscape -w 32 -h 32 -e 32.png logo.up.512x512.svg
inkscape -w 64 -h 64 -e 64.png logo.up.512x512.svg
# ImageMagick convert
convert 16.png 32.png 64.png ../app/favicon.ico
# clean up
rm 16.png
rm 32.png
rm 64.png