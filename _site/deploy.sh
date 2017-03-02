git commit -am "Saved local changes"
git checkout -B gh-pages
git add -f _site
git commit -am "Deployed website"
git filter-branch -f --prune-empty --subdirectory-filter _site
git push -f origin gh-pages
git checkout -
