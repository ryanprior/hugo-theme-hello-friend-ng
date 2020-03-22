# Hugo theme for ryanprior.com

## Features

- Dark & light modes
- [**Inter UI font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- Code highlighting with [**PrismJS**](https://prismjs.com)
- Easy to modify with Hugo tooling
- Responsive
- Social icons

## How to configure

The theme doesn't require any advanced configuration. Just copy the following config file.
Note: There are more options to configure. Take a look into the `config.toml` in `exampleSite`.

``` toml
baseurl = "/"
languageCode = "en-us"
theme = "hello-friend-ng"

[params]
  dateform        = "Jan 2, 2006"
  dateformShort   = "Jan 2"
  dateformNum     = "2006-01-02"
  dateformNumTime = "2006-01-02 15:04 -0700"

  # Set disableReadOtherPosts to true in order to hide the links to other posts.
  disableReadOtherPosts = false

  # Metadata mostly used in document's head
  description = "My new homepage or blog"
  keywords = "homepage, blog"
  images = [""]

  # Directory name of your blog content (default is `content/posts`)
  contentTypeName = "posts"

  # Default theme "light" or "dark"
  defaultTheme = "dark"

[languages]
  [languages.en]
    title = "Hello Friend NG"
    subtitle = "A simple theme for Hugo"
    keywords = ""
    copyright = ""
    readOtherPosts = "Read other posts"

    [languages.en.params.logo]
      logoText = "hello friend ng"
      logoHomeLink = "/"
    # or
    #
    # path = "/img/your-example-logo.svg"
    # alt = "Your example logo alt text"

  # And you can even create generic menu
  [[menu.main]]
    identifier = "blog"
    name       = "Blog"
    url        = "/posts"
```

## How to run your site

From your Hugo root directory run:

```
$ hugo server -t hello-friend-ng
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## More things

### Built-in shortcodes

Of course you are able to use all default shortcodes from hugo (https://gohugo.io/content-management/shortcodes/).

#### `image`

Properties:

  - `src` (required)
  - `alt` (optional)
  - `position` (optional, default: `left`, options: [`left`, `center`, `right`])
  - `style`

Example:

``` golang
{{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}
```
### Favicon

Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate these files, put them into your site's static folder:

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- favicon-16x16.png
- favicon-32x32.png
- favicon.ico
- mstile-150x150.png
- safari-pinned-tab.svg
- site.webmanifest

## Available Social Icons:

- [behance](https://simpleicons.org/?q=behance)
- [codechef](https://simpleicons.org/?q=codechef)
- [codepen](https://simpleicons.org/?q=codepen)
- [docker](https://simpleicons.org/?q=docker)
- [dribbble](https://simpleicons.org/?q=dribbble)
- [email](https://feathericons.com/?query=mail)
- [facebook](https://simpleicons.org/?q=facebook)
- gitbook
- [github](https://feathericons.com/?query=github)
- [gitlab](https://feathericons.com/?query=gitlab)
- [instagram](https://feathericons.com/?query=instagram)
- [kaggle](https://simpleicons.org/?q=kaggle)
- [keybase](https://simpleicons.org/?q=keybase)
- [mastodon](https://simpleicons.org/?q=mastodon)
- [linkedin](https://feathericons.com/?query=linked)
- [podcasts-apple](https://simpleicons.org/?q=podcast)
- [podcasts-google](https://simpleicons.org/?q=podcast)
- [reddit](https://simpleicons.org/?q=reddit)
- [slack](https://simpleicons.org/?q=slack)
- stackoverflow
- telegram
- twitch
- twitter
- youtube

## Known issues

There is a bug in Hugo that sometimes causes the main page not to render correctly. The reason is an empty taxonomy part.
Related issue tickets: [!14](https://github.com/rhazdon/hugo-theme-hello-friend-ng/issues/14) [!59](https://github.com/rhazdon/hugo-theme-hello-friend-ng/issues/59).

Either you comment it out completely or you write the following in

``` toml
[taxonomies]
  tag      = "tags"
  category = "categories"
```

## How to edit the theme

If you really want to edit the theme, you need to install Node dependencies. To do this, go to the theme directory (from your Hugo root directory):

```
$ cd themes/hello-friend-ng
```

and then run:

```
$ npm install
```

## Licence

This theme is based on hello-friend-ng which is in turn inspired by the
[hello-friend](https://github.com/panr/hugo-theme-hello-friend) and
[hermit](https://github.com/Track3/hermit) themes. Thank you!

Copyright © 2020 Ryan Prior and `hello-world-ng` contributors. See
[LICENSE.md](LICENSE.md) and the [hello-friend-ng
license](https://github.com/rhazdon/hugo-theme-hello-friend-ng/blob/master/LICENSE.md)
for more.

### Other components

  - [normalize.css](https://github.com/necolas/normalize.css)
  - [Feather Open Source Icons](https://github.com/feathericons/feather)
  - [Simple Icons](https://simpleicons.org/)
  - [Flag Icon](https://github.com/lipis/flag-icon-css)
