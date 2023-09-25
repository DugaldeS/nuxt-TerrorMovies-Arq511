import { _ as _export_sfc, i as __nuxt_component_0$1, k as _sfc_main$4, g as __nuxt_component_0$2, l as _sfc_main$6, n as __nuxt_component_3 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  const _component_ContentDoc = _sfc_main$4;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_ContentRenderer = _sfc_main$6;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<div class="row">`);
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="three columns"${_scopeId}><img class="u-max-full-width"${ssrRenderAttr("src", "/images/" + doc.image)}${_scopeId}></div><div class="six columns"${_scopeId}><h4${_scopeId}>${ssrInterpolate(doc.titulo)}</h4> dirigido por `);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/directores/" + doc.directorId
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(doc.director)}`);
            } else {
              return [
                createTextVNode(toDisplayString(doc.director), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(` a\xF1o: ${ssrInterpolate(doc.a\u00F1o)}; guion: ${ssrInterpolate(doc.guion)}; musica: ${ssrInterpolate(doc.musica)}; Fotografia: ${ssrInterpolate(doc.fotografia)} Producido por `);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/productores/" + doc.productorId
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(doc.productora)}`);
            } else {
              return [
                createTextVNode(toDisplayString(doc.productora), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`<pre${_scopeId}></pre><h5${_scopeId}>Descripcion/Historia</h5>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
        _push2(`</div><div class="two columns"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "three columns" }, [
            createVNode("img", {
              class: "u-max-full-width",
              src: "/images/" + doc.image
            }, null, 8, ["src"])
          ]),
          createVNode("div", { class: "six columns" }, [
            createVNode("h4", null, toDisplayString(doc.titulo), 1),
            createTextVNode(" dirigido por "),
            createVNode(_component_NuxtLink, {
              to: "/directores/" + doc.directorId
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(doc.director), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            createTextVNode(" a\xF1o: " + toDisplayString(doc.a\u00F1o) + "; guion: " + toDisplayString(doc.guion) + "; musica: " + toDisplayString(doc.musica) + "; Fotografia: " + toDisplayString(doc.fotografia) + " Producido por ", 1),
            createVNode(_component_NuxtLink, {
              to: "/productores/" + doc.productorId
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(doc.productora), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            createVNode("pre"),
            createVNode("h5", null, "Descripcion/Historia"),
            createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
          ]),
          createVNode("div", { class: "two columns" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/peliculas/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.b07e5df1.mjs.map
