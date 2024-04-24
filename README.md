# One-Font

## TODO

- [ ] 流水线配置
  - [ ] 动态添加icon到字体包，由其他仓库的push事件触发
    - [ ] one-config中waybar, yasb，terminal字体等配置
- [ ] 粗体、斜体、连体等支持

## Show

## Usage

### MacOS

[在 Mac 上的“字体册”中安装和验证字体 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/guide/font-book/fntbk1000/mac)

### Window

下载后双击安装即可

### Linux

```sh
yay -S one-font
```

#### Arch

#### Others

```sh
mkdir -p /usr/share/fonts/OTF/ && cp One-Font.otf /usr/share/fonts/OTF/
```

## Develop

```sh
npm install -g fantasticon
fantasticon my-icons -o icon-dist
```


### Preview in web

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    @font-face {
      font-family: 'OneFont';
      src: url('./fonts/OneFont.ttf') format('truetype'),
        url('./fonts/OneFont-Regular.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'OneFont';
      src: url('./fonts/OneFont-Bold.otf') format('opentype');
      font-weight: bold;
      font-style: normal;
    }

    .one-font {
      font-family: 'OneFont';
    }

    .bold {
      font-weight: bold;
    }
  </style>
</head>

<body>
    <div class="icon one-font">&#xeba0;</div>
    <div class="icon one-font bold">&#x2580;</div>
</body>

</html>
```

### SomeTools

[Glyphr Studio](https://www.glyphrstudio.com/online/)
[icomoon](https://icomoon.io/)
[iconify](https://icon-sets.iconify.design/)
