import { defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    prestadores: Object
  },
  setup(__props) {
    const pageTitle = ref(" | Prestadores de Serviço");
    const columns = reactive(["Nome", "Ações"]);
    function deleteUser(id) {
      router.delete("prestadores/" + id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_gestao = resolveComponent("painel-gestao");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_painel_gestao, mergeProps({
        backTo: true,
        "page-name": pageTitle.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_table, {
              height: "500px",
              "fixed-header": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead class="header" style="${ssrRenderStyle({ "background-color": "red" })}" data-v-af595bf4${_scopeId2}><tr data-v-af595bf4${_scopeId2}><!--[-->`);
                  ssrRenderList(columns, (column, index) => {
                    _push3(`<th class="${ssrRenderClass(column === "Nome" ? "text-left" : "text-right")}" data-v-af595bf4${_scopeId2}>${ssrInterpolate(column)}</th>`);
                  });
                  _push3(`<!--]--></tr></thead><tbody data-v-af595bf4${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.prestadores, (item) => {
                    _push3(`<tr data-v-af595bf4${_scopeId2}><td data-v-af595bf4${_scopeId2}>${ssrInterpolate(item.name)}</td><td class="actions" data-v-af595bf4${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "small",
                      class: "search"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-text-box-search-outline" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, { icon: "mdi-text-box-search-outline" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "small",
                      class: "edit"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-file-edit-outline" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, { icon: "mdi-file-edit-outline" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_btn, {
                      size: "small",
                      class: "danger",
                      onClick: ($event) => deleteUser(item.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-trash-can" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, { icon: "mdi-trash-can" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", {
                      class: "header",
                      style: { "background-color": "red" }
                    }, [
                      createVNode("tr", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(columns, (column, index) => {
                          return openBlock(), createBlock("th", {
                            class: column === "Nome" ? "text-left" : "text-right",
                            key: index
                          }, toDisplayString(column), 3);
                        }), 128))
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.prestadores, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.name
                        }, [
                          createVNode("td", null, toDisplayString(item.name), 1),
                          createVNode("td", { class: "actions" }, [
                            createVNode(_component_v_btn, {
                              size: "small",
                              class: "search"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "mdi-text-box-search-outline" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              size: "small",
                              class: "edit"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "mdi-file-edit-outline" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              size: "small",
                              class: "danger",
                              onClick: ($event) => deleteUser(item.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "mdi-trash-can" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_table, {
                height: "500px",
                "fixed-header": ""
              }, {
                default: withCtx(() => [
                  createVNode("thead", {
                    class: "header",
                    style: { "background-color": "red" }
                  }, [
                    createVNode("tr", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(columns, (column, index) => {
                        return openBlock(), createBlock("th", {
                          class: column === "Nome" ? "text-left" : "text-right",
                          key: index
                        }, toDisplayString(column), 3);
                      }), 128))
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.prestadores, (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.name
                      }, [
                        createVNode("td", null, toDisplayString(item.name), 1),
                        createVNode("td", { class: "actions" }, [
                          createVNode(_component_v_btn, {
                            size: "small",
                            class: "search"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-text-box-search-outline" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            size: "small",
                            class: "edit"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-file-edit-outline" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            size: "small",
                            class: "danger",
                            onClick: ($event) => deleteUser(item.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-trash-can" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gestao/Prestadores/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af595bf4"]]);
export {
  Index as default
};
