import { reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, defineComponent } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "MenuGestao",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = reactive([
      {
        name: "Prestadores de Serviço",
        icon: "mdi-account-group",
        route: "prestadores"
      },
      {
        name: "Acompanhamento",
        icon: "mdi-table",
        route: "acompanhamento"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mt-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(menu, (item, index) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "item-menu",
                      key: index,
                      onClick: ($event) => unref(router).get("gestao/" + item.route)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, {
                            icon: item.icon,
                            size: "large"
                          }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createVNode(_component_v_icon, {
                              icon: item.icon,
                              size: "large"
                            }, null, 8, ["icon"]),
                            createTextVNode(" " + toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(menu, (item, index) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "item-menu",
                        key: index,
                        onClick: ($event) => unref(router).get("gestao/" + item.route)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            icon: item.icon,
                            size: "large"
                          }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "pt-4" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(menu, (item, index) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      sm: "3",
                      class: "item-menu",
                      key: index,
                      onClick: ($event) => unref(router).get("gestao/" + item.route)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          icon: item.icon,
                          size: "large"
                        }, null, 8, ["icon"]),
                        createTextVNode(" " + toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Gestao/MenuGestao.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuGestao = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-436b8720"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_gestao = resolveComponent("painel-gestao");
      _push(ssrRenderComponent(_component_painel_gestao, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(MenuGestao, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(MenuGestao)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gestao/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ad6fad2"]]);
export {
  Index as default
};
