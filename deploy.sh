
# build
npm run build

git add dist -f

git commit -m "Adding dist"

git subtree push -f --prefix dist origin gh-pages
