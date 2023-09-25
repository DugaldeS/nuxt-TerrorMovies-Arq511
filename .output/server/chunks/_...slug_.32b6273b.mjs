import { _ as _export_sfc, i as __nuxt_component_0$1, k as _sfc_main$4, l as _sfc_main$6, m as _sfc_main$5, g as __nuxt_component_0$2, n as __nuxt_component_3 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  const _component_ContentRenderer = _sfc_main$6;
  const _component_ContentQuery = _sfc_main$5;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<div class="row">`);
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="three columns"${_scopeId}><img class="u-max-full-width"${ssrRenderAttr("src", "/images/" + doc.image)}${_scopeId}></div><div class="six columns"${_scopeId}><h4${_scopeId}>${ssrInterpolate(doc.nombre)}</h4> Nacionalidad: ${ssrInterpolate(doc.nacionalidad)}; Nacimiento: ${ssrInterpolate(doc.nacimiento)}; Activo: ${ssrInterpolate(doc.activo)}; residencia: ${ssrInterpolate(doc.residencia)}; otros: ${ssrInterpolate(doc.otros)} <pre${_scopeId}></pre><h5${_scopeId}>Biografia</h5>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
        _push2(`<h5${_scopeId}>Pelicula</h5><ul${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ContentQuery, {
          path: "/peliculas",
          where: { directorId: doc.directorId }
        }, {
          default: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(data, (pelicula) => {
                _push3(`<li${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: pelicula._path
                }, {
                  default: withCtx((_, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(pelicula.titulo)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(pelicula.titulo), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</li>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(data, (pelicula) => {
                  return openBlock(), createBlock("li", {
                    key: pelicula._path
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: pelicula._path
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(pelicula.titulo), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</ul></div>`);
      } else {
        return [
          createVNode("div", { class: "three columns" }, [
            createVNode("img", {
              class: "u-max-full-width",
              src: "/images/" + doc.image
            }, null, 8, ["src"])
          ]),
          createVNode("div", { class: "six columns" }, [
            createVNode("h4", null, toDisplayString(doc.nombre), 1),
            createTextVNode(" Nacionalidad: " + toDisplayString(doc.nacionalidad) + "; Nacimiento: " + toDisplayString(doc.nacimiento) + "; Activo: " + toDisplayString(doc.activo) + "; residencia: " + toDisplayString(doc.residencia) + "; otros: " + toDisplayString(doc.otros) + " ", 1),
            createVNode("pre"),
            createVNode("h5", null, "Biografia"),
            createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"]),
            createVNode("h5", null, "Pelicula"),
            createVNode("ul", null, [
              createVNode(_component_ContentQuery, {
                path: "/peliculas",
                where: { directorId: doc.directorId }
              }, {
                default: withCtx(({ data }) => [
                  (openBlock(true), createBlock(Fragment, null, renderList(data, (pelicula) => {
                    return openBlock(), createBlock("li", {
                      key: pelicula._path
                    }, [
                      createVNode(_component_NuxtLink, {
                        to: pelicula._path
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(pelicula.titulo), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["where"])
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directores/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.32b6273b.mjs.map
