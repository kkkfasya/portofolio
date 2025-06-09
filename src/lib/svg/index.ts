// Programming Languages
import c from "./langs/c.svg";
import js from "./langs/javascript.svg";
import lua from "./langs/lua.svg";
import ts from "./langs/typescript.svg";
import py from "./langs/python.svg";

// Programming Frameworks
import svelte from "./frameworks/svelte.svg";
import flask from "./frameworks/svelte.svg";

// Tools
import mysql from "./tools/mysql.svg";

const LangSVGs = [c, js, lua, py, ts];
const FrameworkSVGs = [svelte, flask];
const ToolSVGs = [mysql];

const SVGs = [...ToolSVGs, ...LangSVGs, ...FrameworkSVGs];

export { SVGs, LangSVGs, FrameworkSVGs, ToolSVGs };
