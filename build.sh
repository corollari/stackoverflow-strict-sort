while getopts "i" opt; do
  case $opt in
    i)
      mkdir -p icons
      convert images/icon.png -resize 16x16 icons/16.png
      convert images/icon.png -resize 32x32 icons/32.png
      convert images/icon.png -resize 48x48 icons/48.png
      convert images/icon.png -resize 128x128 icons/128.png
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done
zip -r bundle.zip icons manifest.json contentScript.js
