import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, unref, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mx-auto" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/CardTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5689088b"]]);
const _sfc_main = {
  __name: "Acompanhamento",
  __ssrInlineRender: true,
  props: {
    records: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_user = resolveComponent("painel-user");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_table = resolveComponent("v-table");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Acompanhamento" }, null, _parent));
      _push(ssrRenderComponent(_component_painel_user, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CardTitle, { title: "Acompanhamento" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, { class: "mx-auto mt-6" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Meus registros `);
                } else {
                  return [
                    createTextVNode(" Meus registros ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_table, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<thead data-v-39279af4${_scopeId4}><tr data-v-39279af4${_scopeId4}><th class="text-left" data-v-39279af4${_scopeId4}>Dia</th><th class="text-left" data-v-39279af4${_scopeId4}>Tempo trabalhado </th></tr></thead><tbody data-v-39279af4${_scopeId4}><!--[-->`);
                              ssrRenderList(__props.records.hour, (item, index) => {
                                _push5(`<tr data-v-39279af4${_scopeId4}><td class="text-left" data-v-39279af4${_scopeId4}>${ssrInterpolate(item.date)}</td><td class="text-left" data-v-39279af4${_scopeId4}>${ssrInterpolate(item.hour_complete ? item.hour_complete.slice(0, -3) : "----")}</td></tr>`);
                              });
                              _push5(`<!--]--></tbody>`);
                            } else {
                              return [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "text-left" }, "Dia"),
                                    createVNode("th", { class: "text-left" }, "Tempo trabalhado ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (item, index) => {
                                    return openBlock(), createBlock("tr", { key: index }, [
                                      createVNode("td", { class: "text-left" }, toDisplayString(item.date), 1),
                                      createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete.slice(0, -3) : "----"), 1)
                                    ]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_table, null, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "text-left" }, "Dia"),
                                  createVNode("th", { class: "text-left" }, "Tempo trabalhado ")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (item, index) => {
                                  return openBlock(), createBlock("tr", { key: index }, [
                                    createVNode("td", { class: "text-left" }, toDisplayString(item.date), 1),
                                    createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete.slice(0, -3) : "----"), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_table, null, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-left" }, "Dia"),
                                createVNode("th", { class: "text-left" }, "Tempo trabalhado ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (item, index) => {
                                return openBlock(), createBlock("tr", { key: index }, [
                                  createVNode("td", { class: "text-left" }, toDisplayString(item.date), 1),
                                  createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete.slice(0, -3) : "----"), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(CardTitle, { title: "Acompanhamento" }),
              createVNode(_component_v_card, { class: "mx-auto mt-6" }, {
                title: withCtx(() => [
                  createTextVNode(" Meus registros ")
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_table, null, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-left" }, "Dia"),
                              createVNode("th", { class: "text-left" }, "Tempo trabalhado ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.records.hour, (item, index) => {
                              return openBlock(), createBlock("tr", { key: index }, [
                                createVNode("td", { class: "text-left" }, toDisplayString(item.date), 1),
                                createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete.slice(0, -3) : "----"), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Colaborador/Acompanhamento.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Acompanhamento = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39279af4"]]);
export {
  Acompanhamento as default
};
