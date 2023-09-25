import { _ as _export_sfc, i as __nuxt_component_0, o as _sfc_main$1, g as __nuxt_component_0$1, n as __nuxt_component_3 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "scule";
import "property-information";
import "html-tags";
import "ohash";
import "cookie-es";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_ContentList = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterView = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h3 style="${ssrRenderStyle({ "margin-top": "15px" })}">Informaci\xF3n de Directores</h3><p>Esta Seccion muestra la informacion de los directores</p><ul>`);
  _push(ssrRenderComponent(_component_ContentList, { path: "/directores" }, {
    default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(list, (director) => {
          _push2(`<li${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: director._path
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(director.nombre)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(director.nombre), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList(list, (director) => {
            return openBlock(), createBlock("li", {
              key: director._path
            }, [
              createVNode(_component_NuxtLink, {
                to: director._path
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(director.nombre), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directores_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const directores_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  directores_index as default
};
