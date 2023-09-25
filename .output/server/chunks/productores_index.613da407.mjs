import { _ as _export_sfc, i as __nuxt_component_0$1, o as _sfc_main$2, g as __nuxt_component_0$2, n as __nuxt_component_3 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'scule';
import 'property-information';
import 'html-tags';
import 'ohash';
import 'cookie-es';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'slugify';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderView = __nuxt_component_0$1;
  const _component_ContentList = _sfc_main$2;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h3 style="${ssrRenderStyle({ "margin-top": "15px" })}">Informacion de los productores</h3><p>Esta seccion muestra informacion de los productores</p><ul>`);
  _push(ssrRenderComponent(_component_ContentList, { path: "/productores" }, {
    default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(list, (productor) => {
          _push2(`<li${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: productor._path
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(productor.nombre)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(productor.nombre), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(list, (productor) => {
            return openBlock(), createBlock("li", {
              key: productor._path
            }, [
              createVNode(_component_NuxtLink, {
                to: productor._path
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(productor.nombre), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/productores_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productores_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { productores_index as default };
//# sourceMappingURL=productores_index.613da407.mjs.map
