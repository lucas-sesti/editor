import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TabModel } from 'src/app/models/tab/tab.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { EditorFile } from 'src/app/models/file/file.model';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  preserveWhitespaces: true,
  animations: [
    trigger('slideInOut', [
      state('out', style({})),
      state('in', style({})),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  private allLanguages = {
    '1c': '1c',
    abnf: 'abnf',
    accesslog: 'accesslog',
    actionscript: 'actionscript',
    ada: 'ada',
    angelscript: 'angelscript',
    apache: 'apache',
    applescript: 'applescript',
    arcade: 'arcade',
    arduino: 'arduino',
    armasm: 'armasm',
    asciidoc: 'asciidoc',
    aspectj: 'aspectj',
    autohotkey: 'autohotkey',
    autoit: 'autoit',
    avrasm: 'avrasm',
    awk: 'awk',
    axapta: 'axapta',
    bash: 'bash',
    basic: 'basic',
    bnf: 'bnf',
    brainfuck: 'brainfuck',
    cal: 'cal',
    capnproto: 'capnproto',
    ceylon: 'ceylon',
    clean: 'clean',
    'clojure-repl': 'clojure-repl',
    clojure: 'clojure',
    cmake: 'cmake',
    coffeescript: 'coffeescript',
    coq: 'coq',
    cos: 'cos',
    cpp: 'cpp',
    crmsh: 'crmsh',
    crystal: 'crystal',
    cs: 'cs',
    csp: 'csp',
    css: 'css',
    d: 'd',
    dart: 'dart',
    delphi: 'delphi',
    diff: 'diff',
    django: 'django',
    dns: 'dns',
    dockerfile: 'dockerfile',
    dos: 'dos',
    dsconfig: 'dsconfig',
    dts: 'dts',
    dust: 'dust',
    ebnf: 'ebnf',
    elixir: 'elixir',
    elm: 'elm',
    erb: 'erb',
    'erlang-repl': 'erlang-repl',
    erlang: 'erlang',
    excel: 'excel',
    fix: 'fix',
    flix: 'flix',
    fortran: 'fortran',
    fsharp: 'fsharp',
    gams: 'gams',
    gauss: 'gauss',
    gcode: 'gcode',
    gherkin: 'gherkin',
    glsl: 'glsl',
    gml: 'gml',
    go: 'go',
    golo: 'golo',
    gradle: 'gradle',
    groovy: 'groovy',
    haml: 'haml',
    handlebars: 'handlebars',
    haskell: 'haskell',
    haxe: 'haxe',
    hsp: 'hsp',
    htmlbars: 'htmlbars',
    http: 'http',
    hy: 'hy',
    inform7: 'inform7',
    ini: 'ini',
    irpf90: 'irpf90',
    isbl: 'isbl',
    java: 'java',
    js: 'javascript',
    'jboss-cli': 'jboss-cli',
    json: 'json',
    'julia-repl': 'julia-repl',
    julia: 'julia',
    kotlin: 'kotlin',
    lasso: 'lasso',
    ldif: 'ldif',
    leaf: 'leaf',
    less: 'less',
    lisp: 'lisp',
    livecodeserver: 'livecodeserver',
    livescript: 'livescript',
    llvm: 'llvm',
    lsl: 'lsl',
    lua: 'lua',
    makefile: 'makefile',
    markdown: 'markdown',
    mathematica: 'mathematica',
    matlab: 'matlab',
    maxima: 'maxima',
    mel: 'mel',
    mercury: 'mercury',
    mipsasm: 'mipsasm',
    mizar: 'mizar',
    mojolicious: 'mojolicious',
    monkey: 'monkey',
    moonscript: 'moonscript',
    n1ql: 'n1ql',
    nginx: 'nginx',
    nimrod: 'nimrod',
    nix: 'nix',
    nsis: 'nsis',
    objectivec: 'objectivec',
    ocaml: 'ocaml',
    openscad: 'openscad',
    oxygene: 'oxygene',
    parser3: 'parser3',
    perl: 'perl',
    pf: 'pf',
    pgsql: 'pgsql',
    php: 'php',
    plaintext: 'plaintext',
    pony: 'pony',
    powershell: 'powershell',
    processing: 'processing',
    profile: 'profile',
    prolog: 'prolog',
    properties: 'properties',
    protobuf: 'protobuf',
    puppet: 'puppet',
    purebasic: 'purebasic',
    py: 'python',
    q: 'q',
    qml: 'qml',
    r: 'r',
    reasonml: 'reasonml',
    rib: 'rib',
    roboconf: 'roboconf',
    routeros: 'routeros',
    rsl: 'rsl',
    ruby: 'ruby',
    ruleslanguage: 'ruleslanguage',
    rust: 'rust',
    sas: 'sas',
    scala: 'scala',
    scheme: 'scheme',
    scilab: 'scilab',
    scss: 'scss',
    shell: 'shell',
    smali: 'smali',
    smalltalk: 'smalltalk',
    sml: 'sml',
    sqf: 'sqf',
    sql: 'sql',
    stan: 'stan',
    stata: 'stata',
    step21: 'step21',
    stylus: 'stylus',
    subunit: 'subunit',
    swift: 'swift',
    taggerscript: 'taggerscript',
    tap: 'tap',
    tcl: 'tcl',
    tex: 'tex',
    thrift: 'thrift',
    tp: 'tp',
    twig: 'twig',
    ts: 'typescript',
    vala: 'vala',
    vbnet: 'vbnet',
    'vbscript-html': 'vbscript-html',
    vbscript: 'vbscript',
    verilog: 'verilog',
    vhdl: 'vhdl',
    vim: 'vim',
    x86asm: 'x86asm',
    xl: 'xl',
    xml: 'xml',
    xquery: 'xquery',
    yaml: 'yaml',
    yml: 'yaml',
    zephir: 'zephir',
  };
  private languages = [];

  public tabs: TabModel[] = [];
  public tabActive: TabModel;

  public counter = Array;

  public hierarchy = {};
  public rootFolter: string;

  public files: any;
  public openedProject: boolean = false;

  public openedFile: EditorFile;

  public toggledMenu: string = 'in';
  public itemsTop: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public openTab(tab: TabModel): void {
    this.tabActive = tab;
    this.loadFile(tab.file);
  }

  public onCloseTab(tab: TabModel): void {
    const indexOfTab = this.tabs.indexOf(tab);

    this.tabs = this.tabs.filter((tabF) => tabF != tab);

    if (this.tabs.length == 0) {
      this.openedFile = null;
    }

    if (indexOfTab >= this.tabs.length) {
      this.tabActive = this.tabs[indexOfTab - 1];
      if (this.tabActive && this.tabActive.file) {
        this.loadFile(this.tabActive.file);
      }
      return;
    }

    this.tabActive = this.tabs[indexOfTab];

    if (this.tabActive && this.tabActive.file) {
      this.loadFile(this.tabActive.file);
    }
  }

  public onOpenExplorer(): void {
    this.toggledMenu = this.toggledMenu === 'out' ? 'in' : 'out';
    this.itemsTop = !this.itemsTop;
  }

  public onUploadFile(event): void {
    const files = event.target.files;
    this.files = files;

    if (files.length > 0) {
      this.openedProject = true;

      this.rootFolter = this.files[0].webkitRelativePath.split('/')[0];

      this.createHierarchy(files);
    }
  }

  private createHierarchy(files: any) {
    for (let i = 0; i < files.length; i++) {
      this.files[i].id = i;
      const paths = this.files[i].webkitRelativePath.split('/').slice(0, -1);
      let parentFolder = null;
      // builds the hierarchy of folders.
      paths.map((path) => {
        if (!parentFolder) {
          if (!this.hierarchy[path]) {
            this.hierarchy[path] = {
              name: path,
              children: {},
              files: [],
              id: i,
            };
          }
          parentFolder = this.hierarchy[path];
        } else {
          if (!parentFolder.children[path]) {
            parentFolder.children[path] = {
              name: path,
              children: {},
              files: [],
              id: i,
            };
          }
          parentFolder = parentFolder.children[path];
        }
      });
      parentFolder.files.push(this.files[i]);
      parentFolder.files.sort((a: any, b: any) =>
        ('' + a.name).localeCompare(b.name)
      );
    }
  }

  public onClickFile(file) {
    let addTab = true;
    const tab = {
      file: file,
    };

    this.tabs.map((tab) => {
      if (tab.file.id == file.id) {
        addTab = false;
      }
    });

    if (addTab) {
      this.tabs.push(tab);
    }

    this.loadFile(file);

    this.tabActive = tab;
  }

  public onChangeFile(event) {
    const value = event.target.innerHTML;

    const strippedFile = value.replace(/(<([^>]+)>)/gi, '');

    this.openedFile.lineCount =
      this.lineCounter(value.replace(new RegExp('<br>', 'gm'), '\n')) - 1;

    this.openedFile.fileContent = hljs.highlightAuto(
      strippedFile,
      this.languages
    ).value;
  }

  private loadFile(file) {
    let fileReader: FileReader = new FileReader();

    const folders = file.webkitRelativePath.split('/');
    const fileSplit = folders[folders.length - 1].split('.');
    const fileExt = fileSplit[fileSplit.length - 1];

    this.languages = [this.allLanguages[fileExt]];

    let self = this;

    fileReader.onloadend = function (x) {
      const lineCount = self.lineCounter(fileReader.result.toString());

      const fileValue = hljs.highlightAuto(fileReader.result, self.languages)
        .value;

      self.openedFile = new EditorFile(lineCount, file, fileValue);
    };
    fileReader.readAsText(file);
  }

  private lineCounter(value: string): number {
    return value.split(/\r\n|\r|\n/).length;
  }
}
