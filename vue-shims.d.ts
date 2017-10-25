declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare function require(modulename: string[], callback: Function):any;