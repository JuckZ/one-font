function convertNumber(value, base) {
  if (base === 'toHex') {
    // 从10进制转换到16进制
    return parseInt(value, 10);
  } else if (base === 'toDecimal') {
    // 从16进制转换到10进制
    return parseInt(value, 16);
  } else {
    return 'Invalid base specified';
  }
}

module.exports = {
  name: 'OneFont',
  inputDir: './icons', // (required)
  outputDir: './dist', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'], // eot woff2 woff ttf svg
  assetTypes: ['ts', 'scss', 'sass', 'css', 'json', 'html'],
  fontsUrl: '../fonts',
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    woff: {
      // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
      metadata: '...'
    },
    json: {
      // render the JSON human readable with two spaces indentation (default is none, so minified)
      indent: 2
    },
    ts: {
      // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
      types: ['constant', 'literalId'],
      // render the types with `'` instead of `"` (default is `"`)
      singleQuotes: true,
      // customise names used for the generated types and constants
      enumName: 'MyIconType',
      constantName: 'MY_CODEPOINTS'
      // literalIdName: 'IconId',
      // literalKeyName: 'IconKey'
    }
  },
  // Use a custom Handlebars template
  templates: {
    html: './templates/html.hbs',
    css: './templates/css.hbs'
  },
  pathOptions: {
    // ts: './src/types/icon-types.ts',
    html: './dist/index.html',
    css: './dist/styles/style.css',
    sass: './dist/styles/style.sass',
    scss: './dist/styles/style.scss',
    eot: './dist/fonts/OneFont.eot',
    woff2: './dist/fonts/OneFont.woff2',
    woff: './dist/fonts/OneFont.woff',
    ttf: './dist/fonts/OneFont.ttf',
    svg: './dist/fonts/OneFont.svg',
    json: './dist/OneFont.json'
  },
  codepoints: {
    'chevron-left': 57344, // decimal representation of 0xe000
    'chevron-right': 57345,
    'thumbs-up': 57358,
    'thumbs-down': 57359,

    // Explorer
    // 'awesome_folder-open-regular': convertNumber('f07b', 'toDecimal'),
    'awesome_folder-open-solid': convertNumber('f07c', 'toDecimal'),
    
    // Volume
    // 'awesome_volume-xmark-solid': convertNumber('f170', 'toDecimal'),
    // 'awesome_volume-off-solid': convertNumber('f171', 'toDecimal'),
    // 'awesome_volume-low-solid': convertNumber('f172', 'toDecimal'),
    // 'awesome_volume-high-solid': convertNumber('f173', 'toDecimal'),

    // CPU
    'awesome_chart-pie-solid': convertNumber('f200', 'toDecimal'),
    // TODO bar 2581 - 2588

    // Memory
    // 'awesome_server-solid': convertNumber('f537', 'toDecimal'),
    'awesome_memory-solid': convertNumber('f538', 'toDecimal'),

    // Light And Contrast
    // 'awesome_circle-half-stroke-solid': convertNumber('f630', 'toDecimal'),

    // Keyboard(kanata) f231
    // 'awesome_keyboard-regular': convertNumber('f230', 'toDecimal'),
    'awesome_keyboard-solid': convertNumber('f231', 'toDecimal'),

    // battery
    'awesome_bolt-solid': convertNumber('f0e7', 'toDecimal'), // icon_charging
    'awesome_battery-empty-solid': convertNumber('f244', 'toDecimal'), // icon_critical
    'awesome_battery-quarter-solid': convertNumber('f243', 'toDecimal'), // icon_low
    'awesome_battery-half-solid': convertNumber('f242', 'toDecimal'), // icon_medium
    'awesome_battery-three-quarters-solid': convertNumber('f241', 'toDecimal'), // icon_high
    'awesome_battery-full-solid': convertNumber('f240', 'toDecimal'), // icon_full

    // wifi
    'phosphor_wifi-x-bold': convertNumber('eba0', 'toDecimal'),
    'phosphor_wifi-none-bold': convertNumber('eba1', 'toDecimal'),
    'phosphor_wifi-low-bold': convertNumber('eba2', 'toDecimal'),
    'phosphor_wifi-medium-bold': convertNumber('eba3', 'toDecimal'),
    'phosphor_wifi-high-bold': convertNumber('eba4', 'toDecimal'),
  },
  // Customize generated icon IDs (unavailable with `.json` config file)
  getIconId: ({
    basename, // `string` - Example: 'foo';
    relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
    absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
    relativeFilePath, // `string` - Example: 'foo.svg'
    index // `number` - Example: `0`
  }) => {
    // let id = [index, basename].join('_') // '0_foo'
    let id = relativeFilePath;
    id = id.replace(/\.svg$/i, '');
    id = id.replace(/\\/g, '_');
    return id
  }
};