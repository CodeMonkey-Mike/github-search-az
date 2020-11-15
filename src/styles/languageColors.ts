const languageColors = {
  '1c-enterprise': '#814ccc',
  abap: '#e8274b',
  actionscript: '#882b0f',
  ada: '#02f88c',
  agda: '#315665',
  'ags-script': '#b9d9ff',
  alloy: '#64c800',
  ampl: '#e6efbb',
  angelscript: '#c7d7dc',
  antlr: '#9dc3ff',
  'api-blueprint': '#2acca8',
  apl: '#5a8164',
  applescript: '#101f1f',
  arc: '#aa2afe',
  asp: '#6a40fd',
  aspectj: '#a957b0',
  assembly: '#6e4c13',
  asymptote: '#4a0c0c',
  ats: '#1ac620',
  autohotkey: '#6594b9',
  autoit: '#1c3552',
  ballerina: '#ff5000',
  batchfile: '#c1f12e',
  blitzmax: '#cd6400',
  boo: '#d4bec1',
  brainfuck: '#2f2530',
  c: '#555555',
  'c#': '#178600',
  'c++': '#f34b7d',
  ceylon: '#dfa535',
  chapel: '#8dc63f',
  cirru: '#ccccff',
  clarion: '#db901e',
  clean: '#3f85af',
  click: '#e4e6f3',
  clojure: '#db5855',
  coffeescript: '#244776',
  coldfusion: '#ed2cd6',
  'common-lisp': '#3fb68b',
  'common-workflow-language': '#b5314c',
  'component-pascal': '#b0ce4e',
  crystal: '#000100',
  css: '#563d7c',
  cuda: '#3a4e3a',
  d: '#ba595e',
  dafny: '#ffec25',
  dart: '#00b4ab',
  dataweave: '#003a52',
  dhall: '#dfafff',
  dm: '#447265',
  dockerfile: '#384d54',
  dogescript: '#cca760',
  dylan: '#6c616e',
  e: '#ccce35',
  ec: '#913960',
  ecl: '#8a1267',
  eiffel: '#946d57',
  elixir: '#6e4a7e',
  elm: '#60b5cc',
  'emacs-lisp': '#c065db',
  emberscript: '#fff4f3',
  eq: '#a78649',
  erlang: '#b83998',
  'f#': '#b845fc',
  'f*': '#572e30',
  factor: '#636746',
  fancy: '#7b9db4',
  fantom: '#14253c',
  faust: '#c37240',
  flux: '#88ccff',
  forth: '#341708',
  fortran: '#4d41b1',
  freemarker: '#0050b2',
  frege: '#00cafe',
  futhark: '#5f021f',
  'g-code': '#d08cf2',
  'game-maker-language': '#71b417',
  gaml: '#ffc766',
  gdscript: '#355570',
  genie: '#fb855d',
  gherkin: '#5b2063',
  glyph: '#c1ac7f',
  gnuplot: '#f0a9f0',
  go: '#00add8',
  golo: '#88562a',
  gosu: '#82937f',
  'grammatical-framework': '#79aa7a',
  groovy: '#e69f56',
  hack: '#878787',
  harbour: '#0e60e3',
  haskell: '#5e5086',
  haxe: '#df7900',
  hiveql: '#dce200',
  holyc: '#ffefaf',
  html: '#e34c26',
  hy: '#7790b2',
  idl: '#a3522f',
  idris: '#b30000',
  'igor-pro': '#0000cc',
  io: '#a9188d',
  ioke: '#078193',
  isabelle: '#fefe00',
  j: '#9eedff',
  java: '#b07219',
  Javascript: '#f1e05a',
  jolie: '#843179',
  jsoniq: '#40d47e',
  jsonnet: '#0064bd',
  julia: '#a270ba',
  'jupyter-notebook': '#da5b0b',
  'kaitai-struct': '#773b37',
  kotlin: '#f18e33',
  krl: '#28430a',
  lasso: '#999999',
  lex: '#dbca00',
  lfe: '#4c3023',
  livescript: '#499886',
  llvm: '#185619',
  lolcode: '#cc9900',
  lookml: '#652b81',
  lsl: '#3d9970',
  lua: '#000080',
  macaulay2: '#d8ffff',
  makefile: '#427819',
  mask: '#f97732',
  matlab: '#e16737',
  max: '#c4a79c',
  maxscript: '#00a6a6',
  mcfunction: '#e22837',
  mercury: '#ff2b2b',
  meson: '#007800',
  metal: '#8f14e9',
  mirah: '#c7a938',
  'mirc-script': '#926059',
  mlir: '#5ec8db',
  'modula-3': '#223388',
  mql4: '#62a8d6',
  mql5: '#4a76b8',
  mtml: '#b7e1f4',
  ncl: '#28431f',
  nearley: '#990000',
  nemerle: '#3d3c6e',
  nesc: '#94b0c7',
  netlinx: '#0aa0ff',
  'netlinx+erb': '#747faa',
  netlogo: '#ff6375',
  newlisp: '#87aed7',
  nextflow: '#3ac486',
  nim: '#ffc200',
  nit: '#009917',
  nix: '#7e7eff',
  nu: '#c9df40',
  'objective-c': '#438eff',
  'objective-c++': '#6866fb',
  'objective-j': '#ff0c5a',
  objectscript: '#424893',
  ocaml: '#3be133',
  odin: '#60affe',
  omgrofl: '#cabbff',
  ooc: '#b0b77e',
  opal: '#f7ede0',
  openqasm: '#aa70ff',
  other: '#8257e5',
  oxygene: '#cdd0e3',
  oz: '#fab738',
  p4: '#7055b5',
  pan: '#cc0000',
  papyrus: '#6600cc',
  parrot: '#f3ca0a',
  pascal: '#e3f171',
  pawn: '#dbb284',
  pep8: '#c76f5b',
  perl: '#0298c3',
  php: '#4f5d95',
  piglatin: '#fcd7de',
  pike: '#005390',
  plsql: '#dad8d8',
  pogoscript: '#d80074',
  postscript: '#da291c',
  powerbuilder: '#8f0f8d',
  powershell: '#012456',
  processing: '#0096d8',
  prolog: '#74283c',
  'propeller-spin': '#7fa2a7',
  puppet: '#302b6d',
  purebasic: '#5a6986',
  purescript: '#1d222d',
  python: '#3572a5',
  q: '#0040cd',
  'q#': '#fed659',
  qml: '#44a51c',
  'qt-script': '#00b841',
  quake: '#882233',
  r: '#198ce7',
  racket: '#3c5caa',
  ragel: '#9d5200',
  raku: '#0000fb',
  raml: '#77d9fb',
  rascal: '#fffaa0',
  reason: '#ff5847',
  rebol: '#358a5b',
  red: '#f50000',
  "ren'py": '#ff7f7f',
  ring: '#2d54cb',
  riot: '#a71e49',
  roff: '#ecdebe',
  rouge: '#cc0088',
  ruby: '#701516',
  runoff: '#665a4e',
  rust: '#dea584',
  saltstack: '#646464',
  sas: '#b34936',
  scala: '#c22d40',
  scheme: '#1e4aec',
  sed: '#64b970',
  self: '#0579aa',
  shell: '#89e051',
  shen: '#120f14',
  slash: '#007eff',
  slice: '#003fa2',
  smalltalk: '#596706',
  smpl: '#c94949',
  solidity: '#aa6746',
  sourcepawn: '#5c7611',
  sqf: '#3f3f3f',
  squirrel: '#800000',
  'srecode-template': '#348a34',
  stan: '#b2011d',
  'standard-ml': '#dc566d',
  starlark: '#76d275',
  supercollider: '#46390b',
  swift: '#ffac45',
  systemverilog: '#dae1c2',
  tcl: '#e4cc98',
  terra: '#00004c',
  tex: '#3d6117',
  'ti-program': '#a0aa87',
  turing: '#cf142b',
  typescript: '#2b7489',
  unrealscript: '#a54c4d',
  v: '#5d87bd',
  vala: '#fbe5cd',
  vba: '#867db1',
  vbscript: '#15dcdc',
  vcl: '#148aa8',
  verilog: '#b2b7f8',
  vhdl: '#adb2cb',
  'vim-script': '#199f4b',
  'visual-basic-.net': '#945db7',
  volt: '#1f1f1f',
  vue: '#2c3e50',
  wdl: '#42f1f4',
  webassembly: '#04133b',
  wisp: '#7582d1',
  wollok: '#a23738',
  x10: '#4b6bef',
  xbase: '#403a40',
  xc: '#99da07',
  xquery: '#5232e7',
  xslt: '#eb8ceb',
  yacc: '#4b6c4b',
  yara: '#220000',
  yasnippet: '#32ab90',
  zap: '#0d665e',
  zenscript: '#00bcd1',
  zephir: '#118f9e',
  zig: '#ec915c',
  zil: '#dc75e5',
};
export default languageColors;
