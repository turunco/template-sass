# What is this
When scss file is changed, the result is automatically converted from scss to css and refresh browser.

# Preparation
## Download Ruby
[Ruby Download](http://rubyinstaller.org/downloads/)

## Confirm Ruby after installing
```
% ruby -v
ruby 2.3.1p112 (2016-04-26 revision 54768) [x64-mingw32]
```

```
% gem -v
2.5.1
```

## Install Sass
### Update gem
```
% gem update --system
Updating rubygems-update
Fetching: rubygems-update-2.6.6.gem (100%)
Successfully installed rubygems-update-2.6.6
Parsing documentation for rubygems-update-2.6.6
Installing ri documentation for rubygems-update-2.6.6
Installing darkfish documentation for rubygems-update-2.6.6
Done installing documentation for rubygems-update after 20 seconds
Parsing documentation for rubygems-update-2.6.6
Done installing documentation for rubygems-update after 0 seconds
Installing RubyGems 2.6.6
RubyGems 2.6.6 installed
Parsing documentation for rubygems-2.6.6
Installing ri documentation for rubygems-2.6.6
  :
RubyGems system software updated
```
### Install sass 
```
% gem install sass
Fetching: sass-3.4.22.gem (100%)
Successfully installed sass-3.4.22
Parsing documentation for sass-3.4.22
Installing ri documentation for sass-3.4.22
Done installing documentation for sass after 3 seconds
1 gem installed
```

## Install 'LiveReload' Chrome Extension
[Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-app-launcher-info-dialog)


# Confirm
1. % npm install
2. % grunt serve
3. open [http://localhost:8080/](http://localhost:8080/) on browser
4. change `scss/default.scss`
