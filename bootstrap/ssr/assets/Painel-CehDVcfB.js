import { computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, ref, unref, openBlock, createBlock, Fragment, renderList, defineComponent } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { usePage, router, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$3 = {
  __name: "CardUser",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const user = computed(() => page.props.auth.user);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mx-auto" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(user.value.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(user.value.name), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-2db45845${_scopeId2}><strong data-v-2db45845${_scopeId2}>Função:</strong> ${ssrInterpolate(user.value.role)}</p><p data-v-2db45845${_scopeId2}><strong data-v-2db45845${_scopeId2}>Local:</strong> ${ssrInterpolate(user.value.operation)}</p>`);
                } else {
                  return [
                    createVNode("p", null, [
                      createVNode("strong", null, "Função:"),
                      createTextVNode(" " + toDisplayString(user.value.role), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Local:"),
                      createTextVNode(" " + toDisplayString(user.value.operation), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("p", null, [
                    createVNode("strong", null, "Função:"),
                    createTextVNode(" " + toDisplayString(user.value.role), 1)
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Local:"),
                    createTextVNode(" " + toDisplayString(user.value.operation), 1)
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
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/CardUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardUSer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2db45845"]]);
const _sfc_main$2 = {
  __name: "EntradaSaida",
  __ssrInlineRender: true,
  setup(__props) {
    const time = ref();
    const disabled = ref(false);
    function updateClock() {
      let now = /* @__PURE__ */ new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      time.value = hours + ":" + minutes + ":" + seconds;
    }
    function input() {
      router.post("/record/input", null, {
        onBefore: () => disabled.value = true,
        onFinish: () => disabled.value = false
      });
    }
    function output() {
      router.post("/record/output", null, {
        onBefore: () => disabled.value = true,
        onFinish: () => disabled.value = false
      });
    }
    setInterval(updateClock, 1e3);
    updateClock();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mx-auto" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Registro`);
          } else {
            return [
              createTextVNode(" Registro")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, {
                    class: "mb-5",
                    icon: "mdi-clock",
                    size: "50",
                    color: "purple"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="time mb-5" data-v-98d8da86${_scopeId2}>${ssrInterpolate(time.value)}</p><div class="btn-register" data-v-98d8da86${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    style: { "background": "blueviolet" },
                    onClick: ($event) => input(),
                    disabled: disabled.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Entrada `);
                      } else {
                        return [
                          createTextVNode(" Entrada ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    style: { "background": "gray" },
                    onClick: ($event) => output(),
                    disabled: disabled.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Saida `);
                      } else {
                        return [
                          createTextVNode(" Saida ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_icon, {
                      class: "mb-5",
                      icon: "mdi-clock",
                      size: "50",
                      color: "purple"
                    }),
                    createVNode("p", { class: "time mb-5" }, toDisplayString(time.value), 1),
                    createVNode("div", { class: "btn-register" }, [
                      createVNode(_component_v_btn, {
                        style: { "background": "blueviolet" },
                        onClick: ($event) => input(),
                        disabled: disabled.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Entrada ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_v_btn, {
                        style: { "background": "gray" },
                        onClick: ($event) => output(),
                        disabled: disabled.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Saida ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    class: "mb-5",
                    icon: "mdi-clock",
                    size: "50",
                    color: "purple"
                  }),
                  createVNode("p", { class: "time mb-5" }, toDisplayString(time.value), 1),
                  createVNode("div", { class: "btn-register" }, [
                    createVNode(_component_v_btn, {
                      style: { "background": "blueviolet" },
                      onClick: ($event) => input(),
                      disabled: disabled.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Entrada ")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"]),
                    createVNode(_component_v_btn, {
                      style: { "background": "gray" },
                      onClick: ($event) => output(),
                      disabled: disabled.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saida ")
                      ]),
                      _: 1
                    }, 8, ["onClick", "disabled"])
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
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/EntradaSaida.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EntradaSaida = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-98d8da86"]]);
const _sfc_main$1 = {
  __name: "JornadaResumo",
  __ssrInlineRender: true,
  props: {
    recordToDay: Object
  },
  setup(__props) {
    const date = /* @__PURE__ */ new Date();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_table = resolveComponent("v-table");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mx-auto" }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Acompanhamento - ${ssrInterpolate(unref(date).toLocaleDateString("pt-BR"))}`);
          } else {
            return [
              createTextVNode(" Acompanhamento - " + toDisplayString(unref(date).toLocaleDateString("pt-BR")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_table, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead data-v-cd5a5ae4${_scopeId3}><tr data-v-cd5a5ae4${_scopeId3}><th class="text-left" data-v-cd5a5ae4${_scopeId3}>#</th><th class="text-left" data-v-cd5a5ae4${_scopeId3}>Entrada</th><th class="text-left" data-v-cd5a5ae4${_scopeId3}>Saída</th><th class="text-left" data-v-cd5a5ae4${_scopeId3}>HT</th></tr></thead><tbody data-v-cd5a5ae4${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.recordToDay.horas, (item, index) => {
                          _push4(`<tr data-v-cd5a5ae4${_scopeId3}><td class="text-left" data-v-cd5a5ae4${_scopeId3}>${ssrInterpolate(index + 1)}</td><td class="text-left" data-v-cd5a5ae4${_scopeId3}>${ssrInterpolate(item.input)}</td><td class="text-left" data-v-cd5a5ae4${_scopeId3}>${ssrInterpolate(item.output ? item.output : "-----")}</td><td class="text-left" data-v-cd5a5ae4${_scopeId3}>${ssrInterpolate(item.hour_complete ? item.hour_complete : "----")}</td></tr>`);
                        });
                        _push4(`<!--]--><tr data-v-cd5a5ae4${_scopeId3}><td data-v-cd5a5ae4${_scopeId3}></td><td data-v-cd5a5ae4${_scopeId3}></td><th class="text-left" data-v-cd5a5ae4${_scopeId3}> Total de horas:</th><th class="text-left" data-v-cd5a5ae4${_scopeId3}>${ssrInterpolate(__props.recordToDay.totalHoras ? __props.recordToDay.totalHoras : "-----")}</th></tr></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-left" }, "#"),
                              createVNode("th", { class: "text-left" }, "Entrada"),
                              createVNode("th", { class: "text-left" }, "Saída"),
                              createVNode("th", { class: "text-left" }, "HT")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.recordToDay.horas, (item, index) => {
                              return openBlock(), createBlock("tr", { key: index }, [
                                createVNode("td", { class: "text-left" }, toDisplayString(index + 1), 1),
                                createVNode("td", { class: "text-left" }, toDisplayString(item.input), 1),
                                createVNode("td", { class: "text-left" }, toDisplayString(item.output ? item.output : "-----"), 1),
                                createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete : "----"), 1)
                              ]);
                            }), 128)),
                            createVNode("tr", null, [
                              createVNode("td"),
                              createVNode("td"),
                              createVNode("th", { class: "text-left" }, " Total de horas:"),
                              createVNode("th", { class: "text-left" }, toDisplayString(__props.recordToDay.totalHoras ? __props.recordToDay.totalHoras : "-----"), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_table, null, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-left" }, "#"),
                            createVNode("th", { class: "text-left" }, "Entrada"),
                            createVNode("th", { class: "text-left" }, "Saída"),
                            createVNode("th", { class: "text-left" }, "HT")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.recordToDay.horas, (item, index) => {
                            return openBlock(), createBlock("tr", { key: index }, [
                              createVNode("td", { class: "text-left" }, toDisplayString(index + 1), 1),
                              createVNode("td", { class: "text-left" }, toDisplayString(item.input), 1),
                              createVNode("td", { class: "text-left" }, toDisplayString(item.output ? item.output : "-----"), 1),
                              createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete : "----"), 1)
                            ]);
                          }), 128)),
                          createVNode("tr", null, [
                            createVNode("td"),
                            createVNode("td"),
                            createVNode("th", { class: "text-left" }, " Total de horas:"),
                            createVNode("th", { class: "text-left" }, toDisplayString(__props.recordToDay.totalHoras ? __props.recordToDay.totalHoras : "-----"), 1)
                          ])
                        ])
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_table, null, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "text-left" }, "#"),
                          createVNode("th", { class: "text-left" }, "Entrada"),
                          createVNode("th", { class: "text-left" }, "Saída"),
                          createVNode("th", { class: "text-left" }, "HT")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.recordToDay.horas, (item, index) => {
                          return openBlock(), createBlock("tr", { key: index }, [
                            createVNode("td", { class: "text-left" }, toDisplayString(index + 1), 1),
                            createVNode("td", { class: "text-left" }, toDisplayString(item.input), 1),
                            createVNode("td", { class: "text-left" }, toDisplayString(item.output ? item.output : "-----"), 1),
                            createVNode("td", { class: "text-left" }, toDisplayString(item.hour_complete ? item.hour_complete : "----"), 1)
                          ]);
                        }), 128)),
                        createVNode("tr", null, [
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("th", { class: "text-left" }, " Total de horas:"),
                          createVNode("th", { class: "text-left" }, toDisplayString(__props.recordToDay.totalHoras ? __props.recordToDay.totalHoras : "-----"), 1)
                        ])
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/User/JornadaResumo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JornadaResumo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cd5a5ae4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Painel",
  __ssrInlineRender: true,
  props: {
    recordToDay: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_painel_user = resolveComponent("painel-user");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Painel" }, null, _parent));
      _push(ssrRenderComponent(_component_painel_user, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CardUSer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { class: "pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(EntradaSaida, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(EntradaSaida)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(JornadaResumo, { recordToDay: __props.recordToDay }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(JornadaResumo, { recordToDay: __props.recordToDay }, null, 8, ["recordToDay"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(EntradaSaida)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(JornadaResumo, { recordToDay: __props.recordToDay }, null, 8, ["recordToDay"])
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
              createVNode(CardUSer),
              createVNode(_component_v_row, { class: "pt-4" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(EntradaSaida)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(JornadaResumo, { recordToDay: __props.recordToDay }, null, 8, ["recordToDay"])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Colaborador/Painel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
